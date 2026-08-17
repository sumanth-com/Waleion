/**
 * Waleion Contact Leads + data-rights requests — Google Apps Script
 *
 * Setup:
 * 1. Create a Google Sheet.
 * 2. Extensions → Apps Script → paste this file → Save
 * 3. (Recommended) File → Project properties → Script properties
 *    Add CONTACT_WEBHOOK_SECRET matching CONTACT_WEBHOOK_SECRET in the
 *    Next.js environment. If this property is missing, the script accepts
 *    unauthenticated POSTs (legacy / fail-open). Enable the secret in
 *    production.
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    Anyone-with-the-URL can POST unless CONTACT_WEBHOOK_SECRET is set.
 * 5. Copy the Web app URL into GOOGLE_APPS_SCRIPT_URL
 *
 * Tabs:
 *   Leads — project enquiries
 *   DataRightsRequests — data-principal requests (not returned to the website)
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- doPost/doGet are Apps Script entry points */

function authorised(data) {
  const expected = PropertiesService.getScriptProperties().getProperty(
    "CONTACT_WEBHOOK_SECRET"
  );
  if (!expected) {
    return true;
  }
  return data && data.webhook_secret === expected;
}

function ensureHeaders(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    return;
  }
  const lastColumn = Math.max(sheet.getLastColumn(), headers.length);
  const current = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  if (current.length < headers.length || current.some((cell, i) => headers[i] && cell !== headers[i])) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");

    if (!authorised(data)) {
      return ContentService.createTextOutput(
        JSON.stringify({ ok: false, error: "unauthorized" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const recordType = data.record_type || "enquiry";

    if (recordType === "data_rights") {
      const sheet =
        ss.getSheetByName("DataRightsRequests") ||
        ss.insertSheet("DataRightsRequests");
      ensureHeaders(sheet, [
        "Timestamp",
        "Name",
        "Email",
        "Request Type",
        "Details",
        "Page",
        "Consent Purpose",
        "Consent Status",
        "Consent Timestamp",
        "Notice Version",
        "Source Form",
      ]);
      sheet.appendRow([
        new Date(),
        data.name || "",
        data.email || "",
        data.request_type || "",
        data.details || "",
        data.page || "",
        data.consent_purpose || "",
        data.consent_status || "",
        data.consent_timestamp || "",
        data.notice_version || "",
        data.source_form || "",
      ]);
    } else {
      const sheet = ss.getSheetByName("Leads") || ss.insertSheet("Leads");
      ensureHeaders(sheet, [
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Company",
        "Message",
        "Source",
        "UTM Source",
        "UTM Medium",
        "UTM Campaign",
        "UTM Term",
        "UTM Content",
        "Page",
        "Referrer",
        "Consent Purpose",
        "Consent Status",
        "Consent Timestamp",
        "Notice Version",
        "Source Form",
      ]);
      sheet.appendRow([
        new Date(),
        data.name || "",
        data.email || "",
        data.phone || "",
        data.company || "",
        data.message || "",
        data.source || "",
        data.utm_source || "",
        data.utm_medium || "",
        data.utm_campaign || "",
        data.utm_term || "",
        data.utm_content || "",
        data.page || "",
        data.referrer || "",
        data.consent_purpose || "",
        data.consent_status || "",
        data.consent_timestamp || "",
        data.notice_version || "",
        data.source_form || "",
      ]);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(error) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, service: "waleion-contact" })
  ).setMimeType(ContentService.MimeType.JSON);
}
