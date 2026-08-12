/**
 * Waleion Contact Leads — Google Apps Script
 *
 * Setup:
 * 1. Create a Google Sheet with a tab named "Leads"
 * 2. Row 1 headers (exact order):
 *    Timestamp | Name | Email | Phone | Company | Message | Source |
 *    UTM Source | UTM Medium | UTM Campaign | UTM Term | UTM Content |
 *    Page | Referrer
 * 3. Extensions → Apps Script → paste this file → Save
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL into GOOGLE_APPS_SCRIPT_URL in .env.local
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads") ||
      SpreadsheetApp.getActiveSpreadsheet().insertSheet("Leads");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
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
      ]);
    }

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
    ]);

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
