# Personal-data incident runbook

**Status:** operational draft for the Waleion marketing website  
**Not legal advice.** Notification duties, recipients, and clocks under the Digital Personal Data Protection Act, 2023 and applicable Rules **REQUIRES LEGAL REVIEW** for the specific incident.

Do not assume a single universal deadline (including any “72-hour” figure) applies to every event until counsel confirms the rule that governs that event.

---

## 1. What this covers

Personal data known to be processed by this website:

- Project enquiries and consent metadata stored in Google Sheets (`Leads`) via Google Apps Script
- Data-rights requests stored in Google Sheets (`DataRightsRequests`)
- Copies that people may have forwarded by email from `{SITE email published in code: hello@waleion.com}`
- Hosting/CDN request logs if the live host retains them (not configured in this repo)

There is no application user database and no in-app file store.

---

## 2. Detection

Possible signals:

- Unexpected rows in `Leads` or `DataRightsRequests`
- Google account / Sheet sharing-change alerts
- Apps Script execution logs showing unknown callers
- Hosting platform alerts (deployments, env-var access, DDoS, unusual 4xx/5xx)
- A reporter emails the public site address or submits a data-rights “grievance” request
- Secret scanning / leaked `GOOGLE_APPS_SCRIPT_URL` or `CONTACT_WEBHOOK_SECRET`

Record: who noticed, when (IST and UTC), how, and what systems are implicated.

---

## 3. Initial triage

Within the first working interval after detection:

1. Classify as suspected vs confirmed.
2. Identify systems: website, Apps Script web app, Google Sheet, mailbox, hosting account.
3. Identify data categories involved (name, email, phone, company, message, UTM/page/referrer, consent record, request details).
4. Identify whether the Apps Script deployment is still “Anyone” without a webhook secret (known design risk).
5. Do **not** post personal data into public tickets, Slack-equivalents, or screenshots.

[PLACEHOLDER — name the internal incident owner / on-call]

---

## 4. Containment

Take only steps that stop ongoing exposure:

- Rotate `CONTACT_WEBHOOK_SECRET` and the Apps Script web-app deployment URL if the URL may be public
- Restrict Google Sheet sharing to named accounts; disable “anyone with the link”
- Rotate hosting environment variables and any leaked tokens
- If the Next.js route is being abused, disable `GOOGLE_APPS_SCRIPT_URL` temporarily (form will show config error) rather than leaving an open writer
- Preserve first, then restrict: do not wipe logs before copying them

---

## 5. Internal escalation

[PLACEHOLDER — business confirms the list]

Suggested roles to notify internally (names not in codebase):

- Site / engineering owner
- Person with Google Workspace / Sheet access
- Person with hosting-account access
- Counsel / compliance (required before external notifications)

---

## 6. Evidence preservation

Export and store access-controlled copies of:

- Sheet version history / sharing history
- Apps Script executions (time range)
- Hosting logs for the API routes `/api/contact` and `/api/data-rights`
- Environment-variable change history if the host provides it
- This runbook’s incident notes (without pasting full PII)

Keep originals; work from copies.

---

## 7. Assessment of affected personal data

Document, without guessing:

| Question | Finding |
| --- | --- |
| Which tab/rows? | |
| Fields present? | name, email, phone, company, message, attribution, consent, request details |
| Date range? | |
| Approximate number of principals? | |
| Was data exfiltrated, altered, or only exposed internally? | |
| Countries of principals, if known from phone/email? | Do not invent |

---

## 8. Notification decision process

**REQUIRES LEGAL REVIEW for each incident.**

Engineering must not send Board or principal notices on its own.

Decision checklist for counsel:

1. Is this a personal-data breach under the Act / Rules as then in force?
2. Who is the Data Fiduciary for this dataset?
3. What (if any) notice is due to the Data Protection Board of India, and on what clock?
4. What (if any) notice is due to affected Data Principals, and in what form?
5. Are other notices due (hosting contract, Google, insurers, clients)?

If a statutory clock exists for the situation, start it from the legally relevant “awareness” moment counsel identifies — not from an engineer’s informal guess.

Until counsel instructs otherwise: do not publish a public blog post that includes personal data or a confirmation of impact beyond what is required.

---

## 9. Communication templates (placeholders)

Replace bracketed fields only after legal/business approval. Do not send as-is.

### 9.1 Internal incident note

```
Subject: [INTERNAL] Personal-data incident — Waleion website

Detected: [datetime IST / UTC]
Detected by: [name]
Systems: [Sheet / Apps Script / hosting / mailbox]
Data categories: [list only what is known]
Containment taken: [list]
Counsel notified: [yes/no — time]
Do not forward this note outside the incident group.
```

### 9.2 Draft notice to affected persons (unapproved)

```
REQUIRES LEGAL REVIEW — DO NOT SEND WITHOUT APPROVAL

We are writing because [describe the incident in plain language].
Personal data that may be involved: [categories only, not full dumps].
What we have done: [containment].
What you can do: [counsel-approved steps].
Contact for this matter: [PLACEHOLDER — confirmed grievance / incident contact, not invented].
```

### 9.3 Draft Board / regulator note (unapproved)

```
REQUIRES LEGAL REVIEW — DO NOT SEND WITHOUT APPROVAL

Data Fiduciary: [PLACEHOLDER — legal entity]
Nature of incident: [facts]
Personal data involved: [categories]
Number of principals (if known): [number or unknown]
When became aware: [counsel-confirmed timestamp]
Measures taken: [containment]
Contact: [PLACEHOLDER]
```

---

## 10. After-action

- Rotate remaining secrets
- Redeploy Apps Script with webhook secret required
- Update `DPDP_PROGRESS.md` with the technical cause (no PII)
- Counsel decides whether the public Privacy Notice must change
