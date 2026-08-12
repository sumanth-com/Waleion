import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  page: string;
  referrer: string;
};

function pick(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Native form POST → Google Apps Script → Google Sheet.
 * No client AJAX to Google — the browser submits to this route only.
 */
export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL?.trim();
  const origin = new URL(request.url).origin;
  const contactUrl = new URL("/contact", origin);
  const thankYouUrl = new URL("/contact/thank-you", origin);

  try {
    const form = await request.formData();

    const payload: LeadPayload = {
      name: pick(form, "name"),
      email: pick(form, "email"),
      phone: pick(form, "phone"),
      company: pick(form, "company"),
      message: pick(form, "message"),
      source: pick(form, "source") || "Contact Page",
      utm_source: pick(form, "utm_source"),
      utm_medium: pick(form, "utm_medium"),
      utm_campaign: pick(form, "utm_campaign"),
      utm_term: pick(form, "utm_term"),
      utm_content: pick(form, "utm_content"),
      page: pick(form, "page"),
      referrer: pick(form, "referrer"),
    };

    if (!payload.name || !payload.email || !payload.message) {
      contactUrl.searchParams.set("error", "missing");
      return NextResponse.redirect(contactUrl, 303);
    }

    if (payload.message.length > 1000) {
      contactUrl.searchParams.set("error", "message");
      return NextResponse.redirect(contactUrl, 303);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      contactUrl.searchParams.set("error", "email");
      return NextResponse.redirect(contactUrl, 303);
    }

    if (!scriptUrl) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not set");
      contactUrl.searchParams.set("error", "config");
      return NextResponse.redirect(contactUrl, 303);
    }

    const gasRes = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!gasRes.ok) {
      console.error("Google Apps Script error", gasRes.status, await gasRes.text());
      contactUrl.searchParams.set("error", "submit");
      return NextResponse.redirect(contactUrl, 303);
    }

    const firstName = payload.name.split(/\s+/)[0]?.slice(0, 40);
    if (firstName) {
      thankYouUrl.searchParams.set("name", firstName);
    }

    return NextResponse.redirect(thankYouUrl, 303);
  } catch (error) {
    console.error("Contact form failed", error);
    contactUrl.searchParams.set("error", "submit");
    return NextResponse.redirect(contactUrl, 303);
  }
}
