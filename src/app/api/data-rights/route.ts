import { NextResponse } from "next/server";
import {
  CONSENT_PURPOSES,
  DATA_RIGHTS_TYPES,
  PRIVACY_NOTICE_VERSION,
  type DataRightsTypeId,
} from "@/constants/privacy";
import { clientIp } from "@/lib/security/client-ip";
import { isSameOrigin } from "@/lib/security/origin";
import { rateLimit } from "@/lib/security/rate-limit";
import {
  checkboxGiven,
  clip,
  FIELD_LIMITS,
  isHoneypotFilled,
  isValidEmail,
  pick,
} from "@/lib/leads/fields";
import { postToAppsScript } from "@/lib/leads/webhook";

export const runtime = "nodejs";

const ALLOWED_TYPES = new Set(DATA_RIGHTS_TYPES.map((item) => item.id));

function redirectTo(base: URL, params?: Record<string, string>) {
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      base.searchParams.set(key, value);
    }
  }
  return NextResponse.redirect(base, 303);
}

/**
 * Data-principal request intake. Stores the request for internal handling.
 * Does not look up or return personal data to the browser.
 */
export async function POST(request: Request) {
  const origin = new URL(request.url).origin;
  const formUrl = new URL("/privacy/data-rights", origin);

  try {
    if (!isSameOrigin(request)) {
      return redirectTo(formUrl, { error: "submit" });
    }

    const limited = rateLimit(`rights:${clientIp(request)}`, 5, 60 * 60 * 1000);
    if (!limited.ok) {
      return redirectTo(formUrl, { error: "rate" });
    }

    const form = await request.formData();

    if (isHoneypotFilled(form)) {
      return redirectTo(formUrl, { sent: "1" });
    }

    if (!checkboxGiven(form, "consent_request")) {
      return redirectTo(formUrl, { error: "consent" });
    }

    const name = clip(pick(form, "name"), FIELD_LIMITS.name);
    const email = clip(pick(form, "email"), FIELD_LIMITS.email);
    const requestType = clip(pick(form, "request_type"), FIELD_LIMITS.requestType);
    const details = clip(pick(form, "details"), FIELD_LIMITS.details);

    if (!name || !email || !requestType || !details) {
      return redirectTo(formUrl, { error: "missing" });
    }

    if (!isValidEmail(email)) {
      return redirectTo(formUrl, { error: "email" });
    }

    if (!ALLOWED_TYPES.has(requestType as DataRightsTypeId)) {
      return redirectTo(formUrl, { error: "type" });
    }

    const result = await postToAppsScript({
      record_type: "data_rights",
      name,
      email,
      request_type: requestType,
      details,
      page: clip(pick(form, "page"), FIELD_LIMITS.page),
      consent_purpose: CONSENT_PURPOSES.data_rights_request.id,
      consent_status: "given",
      consent_timestamp: new Date().toISOString(),
      notice_version: PRIVACY_NOTICE_VERSION,
      source_form: CONSENT_PURPOSES.data_rights_request.form,
    });

    if (!result.ok) {
      return redirectTo(formUrl, {
        error: result.reason === "config" ? "config" : "submit",
      });
    }

    return redirectTo(formUrl, { sent: "1" });
  } catch (error) {
    console.error("Data-rights form failed", error instanceof Error ? error.name : "error");
    return redirectTo(formUrl, { error: "submit" });
  }
}
