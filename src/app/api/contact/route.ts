import { NextResponse } from "next/server";
import {
  CONSENT_PURPOSES,
  PRIVACY_NOTICE_VERSION,
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
  isValidOptionalPhone,
  pick,
} from "@/lib/leads/fields";
import { postToAppsScript } from "@/lib/leads/webhook";

export const runtime = "nodejs";

function redirectTo(base: URL, params?: Record<string, string>) {
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      base.searchParams.set(key, value);
    }
  }
  return NextResponse.redirect(base, 303);
}

/**
 * Native form POST → Google Apps Script → Google Sheet.
 * Consent is recorded with the enquiry row. First name is not put in the URL.
 */
export async function POST(request: Request) {
  const origin = new URL(request.url).origin;
  const contactUrl = new URL("/contact", origin);
  const thankYouUrl = new URL("/contact/thank-you", origin);

  try {
    if (!isSameOrigin(request)) {
      return redirectTo(contactUrl, { error: "submit" });
    }

    const limited = rateLimit(`contact:${clientIp(request)}`, 5, 15 * 60 * 1000);
    if (!limited.ok) {
      return redirectTo(contactUrl, { error: "rate" });
    }

    const form = await request.formData();

    if (isHoneypotFilled(form)) {
      return NextResponse.redirect(thankYouUrl, 303);
    }

    if (!checkboxGiven(form, "consent_enquiry")) {
      return redirectTo(contactUrl, { error: "consent" });
    }

    const name = clip(pick(form, "name"), FIELD_LIMITS.name);
    const email = clip(pick(form, "email"), FIELD_LIMITS.email);
    const phone = clip(pick(form, "phone"), FIELD_LIMITS.phone);
    const company = clip(pick(form, "company"), FIELD_LIMITS.company);
    const message = clip(pick(form, "message"), FIELD_LIMITS.message);

    if (!name || !email || !message) {
      return redirectTo(contactUrl, { error: "missing" });
    }

    if (!isValidEmail(email)) {
      return redirectTo(contactUrl, { error: "email" });
    }

    if (!isValidOptionalPhone(phone)) {
      return redirectTo(contactUrl, { error: "phone" });
    }

    if (message.length > FIELD_LIMITS.message) {
      return redirectTo(contactUrl, { error: "message" });
    }

    const consentTimestamp = new Date().toISOString();

    const result = await postToAppsScript({
      record_type: "enquiry",
      name,
      email,
      phone,
      company,
      message,
      source: clip(pick(form, "source") || "Contact Page", FIELD_LIMITS.source),
      utm_source: clip(pick(form, "utm_source"), FIELD_LIMITS.utm),
      utm_medium: clip(pick(form, "utm_medium"), FIELD_LIMITS.utm),
      utm_campaign: clip(pick(form, "utm_campaign"), FIELD_LIMITS.utm),
      utm_term: clip(pick(form, "utm_term"), FIELD_LIMITS.utm),
      utm_content: clip(pick(form, "utm_content"), FIELD_LIMITS.utm),
      page: clip(pick(form, "page"), FIELD_LIMITS.page),
      referrer: clip(pick(form, "referrer"), FIELD_LIMITS.referrer),
      consent_purpose: CONSENT_PURPOSES.enquiry_response.id,
      consent_status: "given",
      consent_timestamp: consentTimestamp,
      notice_version: PRIVACY_NOTICE_VERSION,
      source_form: CONSENT_PURPOSES.enquiry_response.form,
    });

    if (!result.ok) {
      return redirectTo(contactUrl, {
        error: result.reason === "config" ? "config" : "submit",
      });
    }

    return NextResponse.redirect(thankYouUrl, 303);
  } catch (error) {
    console.error("Contact form failed", error instanceof Error ? error.name : "error");
    return redirectTo(contactUrl, { error: "submit" });
  }
}
