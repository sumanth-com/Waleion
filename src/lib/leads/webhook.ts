type WebhookResult =
  | { ok: true }
  | { ok: false; reason: "config" | "upstream" };

/**
 * Forwards a JSON payload to the Google Apps Script web app.
 * Optional CONTACT_WEBHOOK_SECRET is attached when configured.
 * Response bodies are not logged (they may echo submitted fields).
 */
export async function postToAppsScript(
  payload: Record<string, unknown>
): Promise<WebhookResult> {
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL?.trim();
  if (!scriptUrl) {
    console.error("GOOGLE_APPS_SCRIPT_URL is not set");
    return { ok: false, reason: "config" };
  }

  const secret = process.env.CONTACT_WEBHOOK_SECRET?.trim();
  const body = secret
    ? { ...payload, webhook_secret: secret }
    : payload;

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    if (!response.ok) {
      console.error("Google Apps Script rejected the request", response.status);
      return { ok: false, reason: "upstream" };
    }

    return { ok: true };
  } catch (error) {
    console.error("Google Apps Script request failed", error instanceof Error ? error.name : "error");
    return { ok: false, reason: "upstream" };
  }
}
