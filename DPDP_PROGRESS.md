# DPDP technical compliance-readiness audit

**Status:** complete for this branch (technical draft)  
**Branch:** `compliance/dpdp` — **not pushed**  
**Scope:** Waleion marketing site at `d:\Web\codegai` as implemented  
**Audit date:** 17 August 2026 (Asia/Kolkata)

This is a **technical compliance-readiness audit**, not a legal certification, legal opinion, or a claim that the organisation is “fully DPDP compliant.”

All public legal/policy copy added or rewritten in this branch is marked **REQUIRES LEGAL REVIEW**.

---

## 1. Executive summary

The site is a Next.js 15 marketing site. It has **no user accounts**, **no application database**, **no file uploads**, and **no analytics/ad pixels in application code**.

The only implemented personal-data collection is:

1. The `/contact` enquiry form, which POSTs to `/api/contact` and, if `GOOGLE_APPS_SCRIPT_URL` is set, appends a row to a Google Sheet via Apps Script.
2. Direct email to the published address `hello@waleion.com` (mailbox not implemented in this repo).
3. After this branch: a data-rights request form at `/privacy/data-rights` using the same Apps Script pipeline and a separate Sheet tab.

This branch adds technical DPDP-readiness controls (notice rewrite from code facts, unticked purpose-specific consent, consent metadata on Sheet rows, rights-request intake, security hardening). It does **not** appoint a grievance officer, set retention schedules, complete transfer assessments, or certify lawful bases.

**Overall technical readiness:** improved for a brochure/enquiry site, **not legally compliant until counsel and the business close the open items below.**

---

## 2. Data inventory

| Data | Source | Stored in app DB? | Stored where (code) | Marketing use in code? |
| --- | --- | --- | --- | --- |
| Full name | Contact form (required); data-rights form | No | Google Sheet `Leads` / `DataRightsRequests` via Apps Script | No |
| Email | Contact form (required); data-rights form | No | Same | No |
| Phone | Contact form (optional) | No | `Leads` only | No |
| Company name | Contact form (optional) | No | `Leads` only | No |
| Enquiry / request text | Contact `message`; data-rights `details` | No | Sheet tabs above | No |
| UTM + page + referrer | Hidden fields on contact form | No | `Leads` | Attribution with the enquiry only; no tracker SDK |
| Consent metadata | Server-set on successful submit | No | Same rows | No |
| Address | Not collected | — | — | — |
| Account / auth | Not implemented | — | — | — |
| Uploaded files | Not implemented | — | — | — |
| Payment data | Not implemented | — | — | — |
| Theme preference | `next-themes` localStorage (library default) | Browser only | Not sent to the server by this app | No |

Hosting platforms may process IP / user-agent independently of this repo. That is not configured here.

---

## 3. Collection points

### 3.1 Contact form — `/contact` → `POST /api/contact`

| Item | Finding |
| --- | --- |
| Data | name, email, optional phone, optional company, message (max 1000), source, utm_*, page, referrer; server adds consent purpose/status/timestamp, notice version, form id |
| Why (implemented) | So the operator can review and reply to a project enquiry |
| Stored | Google Apps Script → Sheet tab `Leads` (see `scripts/google-apps-script.js`) |
| Retention in code | **None.** Rows persist until a person with Sheet access deletes them |
| Recipients in code | Google Apps Script / Google Sheets; whoever has access to that Google account/Sheet (not in source control) |
| Marketing | Not implemented. No mailing-list SDK |
| Consent (before this branch) | Implied “by sending you agree” copy only; checkbox not present |
| Consent (this branch) | Unticked required checkbox for `enquiry_response` only |
| Deletion/correction in product | **Not technically self-service.** Possible only as an operational edit/delete of Sheet rows (and any email copies) |

### 3.2 Data-rights form — `/privacy/data-rights` → `POST /api/data-rights` (this branch)

| Item | Finding |
| --- | --- |
| Data | name, email, request type, details; consent metadata |
| Why | Intake for access / correction / erasure / withdraw consent / grievance / other |
| Stored | Sheet tab `DataRightsRequests` |
| Retention in code | None |
| Frontend disclosure | Success page does **not** return stored personal data |
| Consent | Unticked required checkbox for `data_rights_request` only |

### 3.3 Mailto / LinkedIn

Footer and contact page link `mailto:hello@waleion.com` and a LinkedIn company URL. The website does not capture that correspondence. Mailbox processing is outside this codebase.

### 3.4 Thank-you URL (fixed this branch)

Previously `/api/contact` put the submitter’s first name in `/contact/thank-you?name=`. That is personal data in URLs, browser history, and potentially Referer logs. Removed.

---

## 4. Third-party services

| Service | Evidence | Role vs personal data |
| --- | --- | --- |
| Google Apps Script + Google Sheets | `GOOGLE_APPS_SCRIPT_URL`, `scripts/google-apps-script.js`, `.env.example` | Processor/store for enquiries and rights requests if configured |
| Hosting (comments name Vercel) | `.env.example` production comment; no `vercel.json` in repo | Serves the app; may log requests. **Region not in code** |
| Email at `hello@waleion.com` | `src/constants/site.ts` | Human replies; mailbox vendor unknown |
| LinkedIn company page | Outbound link only | Not a pixel in this repo |
| `next/font` (Geist, Inter) | `src/lib/fonts.ts` | Build-time self-host; no runtime Google Fonts request in app code |
| Analytics / ads / pixels | **Not found** | — |
| CAPTCHA | **Not found** | — |
| WhatsApp API | **Not found** | — |
| Payments | **Not found** | — |
| Supabase / other app DB | **Not found** | — |
| CRM SDK | **Not found** (Sheet is the lead store) | — |

`GOOGLE_SHEET_LEADS_TAB` is listed in `.env.example` but **not read by application code**.

---

## 5. Existing compliance controls (before this branch)

- Privacy and Terms pages existed, with a public contact email
- Contact POST went to a first-party API rather than posting from the browser to Google
- Message length cap (1000) and basic email regex
- Thank-you route disallowed in `robots.ts`
- `poweredByHeader: false`
- No ad/analytics tags in source
- Legal pages previously auto-stamped “last updated” as **today in IST every render**, which is not a real policy version

Gaps: no opt-in consent, no consent record, no rights-request channel, no rate limit, no origin check, no webhook secret, PII in thank-you query, GAS setup documented as “Who has access: Anyone”, no security headers, children’s age stated as “under 16” (DPDP’s definition is 18 — legal issue).

---

## 6. Changes implemented (this branch)

Technical only; not a legal sign-off.

1. Privacy Notice rewritten from discovered facts; placeholders for unconfirmed business/legal facts; **REQUIRES LEGAL REVIEW** banner; version `2026-08-17` instead of auto-daily dates
2. Contact form: unticked `enquiry_response` checkbox; marketing not bundled
3. Consent metadata written to Sheet rows (purpose, status, ISO timestamp, notice version, form id)
4. Data-rights request form + `POST /api/data-rights` (no automatic data access)
5. Footer legal link to Data rights (not a fabricated grievance officer)
6. Terms: personal-data clause + review banner + version date — **REQUIRES LEGAL REVIEW**
7. Same-origin check, in-memory rate limit, honeypot, field clipping, optional `CONTACT_WEBHOOK_SECRET`
8. Stop logging Apps Script response bodies; stop putting first name in the thank-you URL
9. Security headers: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`
10. Apps Script updated for consent columns + `DataRightsRequests` tab + optional secret
11. `BREACH_RUNBOOK.md` (no hard-coded statutory clock)
12. This file

**Not done (by design):** cookie banner (no non-essential trackers found); footer grievance officer (contact not confirmed); new database (none existed — extended Sheets).

---

## 7. Security findings

Do not treat this as a full pentest. Findings below have code evidence.

| ID | Severity | Evidence | Risk | Remediation |
| --- | --- | --- | --- | --- |
| S1 | High | `scripts/google-apps-script.js` setup: web app “Who has access: Anyone”. Secret is optional and fail-open if unset | Anyone with the URL can append (and previously could forge) leads | Set `CONTACT_WEBHOOK_SECRET` in Apps Script properties **and** Next.js env; rotate the web-app URL; restrict Sheet sharing |
| S2 | Medium | No rate limit before this branch (`src/app/api/contact/route.ts`) | Enquiry spam / Sheet filling | In-memory limit added; **not global** on serverless. Add platform WAF / upstash-style limiter if abuse appears |
| S3 | Medium | First name in thank-you query (`route.ts` + `contact-thank-you.tsx`) | PII in history, Referer, host logs | Removed this branch |
| S4 | Medium | `console.error(..., await gasRes.text())` could log upstream body | PII or secrets in host logs | Logs status/name only now |
| S5 | Low–Med | No origin check on POST | Cross-site form post to the API | Same-origin check added |
| S6 | Low–Med | No security headers in `next.config.ts` | Clickjacking / MIME sniffing | Basic headers added. **CSP and HSTS not added** (CSP needs a measured rollout; HSTS depends on confirmed HTTPS everywhere) |
| S7 | Low | Phone not validated server-side before | Junk / oversized phone field | Optional E.164-style check + clip |
| S8 | Info | HTTPS not enforced in Next config | Production host typically terminates TLS; not proven by this repo | Confirm host TLS and whether HSTS should be enabled |
| S9 | Info | In-memory rate limit is per instance | Weak under multi-instance serverless | Documented; not claimed as a hard control |
| S10 | Info | No CAPTCHA | Bots can still submit (honeypot only) | Business decision; CAPTCHA would be a new processor |
| S11 | Info | No RLS/DB auth | N/A — no app DB | Sheet ACLs are the real control |
| S12 | Low | Fail-open webhook secret if Script property unset | Accidental deploy without secret | Require secret in production; reject when missing |

**Not claimed:** SQL injection (no SQL). Stored XSS in the marketing UI from leads (leads are not rendered back). CSRF token cookies (same-origin POST + origin check). Authz bugs (no auth). Encryption-at-rest of Sheets (Google’s platform; not configured here).

---

## 8. Legal / business decisions required

1. Confirm legal entity name, constitution, registration number, and address
2. Confirm whether `hello@waleion.com` may be used as the DPDP grievance channel, **or** designate a grievance officer and publish that contact
3. Confirm Google account / Sheet ownership, access list, and DPA/processor terms with Google
4. Confirm production host, region, subprocessors, and log retention
5. Set and document retention for `Leads` and `DataRightsRequests` (none in code)
6. Decide whether enquiry processing is consent-based, another DPDP ground, or mixed — engineering implemented consent as a conservative control
7. Confirm cross-border processing (Google / host) against then-current DPDP transfer rules
8. Confirm Significant Data Fiduciary status (likely not, but not assumed)
9. Redeploy the updated Apps Script and set `CONTACT_WEBHOOK_SECRET` in production
10. Decide whether to add CAPTCHA (new processor + notice update)
11. Confirm children’s / age-gating approach for a B2B enquiry site
12. Confirm mailbox provider and whether enquiry emails are copied out of the Sheet into other tools

---

## 9. Items requiring lawyer review

Every public clause on `/privacy` and `/terms`, including:

- Lawful basis and notice content vs DPDP s.5 / Rules
- Consent language and whether a contract/legitimate-use ground is preferred for B2B enquiries
- Data-principal rights wording (access, correction, erasure, withdrawal, grievance, nomination)
- Children’s definition and duties (Act: 18 years)
- Cross-border transfers
- Retention
- Grievance officer publication duty
- Breach notification content and timing (do not assume a universal 72-hour rule without checking the applicable Rule for that incident)
- Limitation of liability / indemnity vs Indian law
- Whether this site is in scope as Data Fiduciary for these datasets

---

## 10. Remaining open items

- Production Apps Script not redeployed from this repo automatically
- Webhook secret not forced
- No organisation-wide retention job
- No verified identity workflow for rights requests (email match only, manual)
- No cookie banner (none needed unless trackers are added)
- Grievance officer not in footer (awaiting confirmation)
- CSP / HSTS not enabled
- No automated test suite existed; none added (avoid a new framework just for the audit)
- `LegalDocument` still defaults to today’s IST date if `updated` is omitted — privacy/terms now pass an explicit version

---

## 11. Files changed

- `DPDP_PROGRESS.md` (this file)
- `BREACH_RUNBOOK.md`
- `.env.example`
- `next.config.ts`
- `scripts/google-apps-script.js`
- `src/constants/privacy.ts`
- `src/constants/seo.ts`
- `src/constants/navigation.ts`
- `src/lib/security/rate-limit.ts`
- `src/lib/security/client-ip.ts`
- `src/lib/security/origin.ts`
- `src/lib/leads/fields.ts`
- `src/lib/leads/webhook.ts`
- `src/app/api/contact/route.ts`
- `src/app/api/data-rights/route.ts`
- `src/app/privacy/page.tsx`
- `src/app/privacy/data-rights/page.tsx`
- `src/app/terms/page.tsx`
- `src/app/sitemap.ts`
- `src/app/contact/thank-you/page.tsx`
- `src/components/privacy/consent-checkbox.tsx`
- `src/components/privacy/legal-review-banner.tsx`
- `src/components/sections/contact-form.tsx`
- `src/components/sections/data-rights-form.tsx`
- `src/components/sections/contact-thank-you.tsx`

---

## 12. Tests performed and results

No Jest/Vitest/Playwright suite exists in `package.json`. None was added.

| Check | Result |
| --- | --- |
| `npm run typecheck` | Pass (`tsc --noEmit`) |
| `npm run lint` | Pass (exit 0). Remaining warnings are pre-existing in `section-header.tsx`. Apps Script entry-point warning suppressed. |
| `GET /` `/contact` `/privacy` `/privacy/data-rights` `/terms` `/contact/thank-you` | HTTP 200 on local dev |
| Security headers on those responses | `nosniff`, `strict-origin-when-cross-origin`, `DENY`, `Permissions-Policy` camera/mic/geo none |
| `POST /api/contact` with foreign Origin | 303 → `/contact?error=submit` |
| `POST /api/contact` same-origin, no checkbox | 303 → `/contact?error=consent` |
| `POST /api/contact` invalid email + consent | 303 → `/contact?error=email` |
| `POST /api/data-rights` no checkbox | 303 → `/privacy/data-rights?error=consent` |
| `POST /api/data-rights` honeypot filled | 303 → `/privacy/data-rights?sent=1` (no Sheet write intended) |
| Successful live Sheet write | **Not executed** against the configured webhook, to avoid inserting a test row into the real Leads sheet |

Existing contact, privacy navigation, and homepage still compile. Enquiry still submits only through `/api/contact`. Marketing features were not added or removed (none existed).

---

## 13. Overall technical compliance-readiness assessment

**Not fully DPDP compliant.**  

For a marketing site whose only write-path is a lead Sheet, the implementation is now closer to a defensible technical baseline: notice grounded in actual processing, purpose-specific opt-in, a rights inbox that does not dump data to the browser, and several personal-data security fixes.

It remains incomplete until a lawyer reviews the notice/terms, the business names a grievance contact and retention schedule, Google Sheet access is locked down with a webhook secret, and production operations match this branch.

---

## Phase notes

| Phase | Result |
| --- | --- |
| 1 Discovery | Complete — see §§2–4 |
| 2 Privacy information | `/privacy` rewritten from code facts |
| 3 Consent | Enquiry + rights checkboxes; record stored on Sheet; no marketing checkbox (marketing not implemented) |
| 4 Cookies / trackers | None non-essential found; no banner added |
| 5 Rights | `/privacy/data-rights` |
| 6 Grievance | Placeholder on Privacy Notice only; **not** in footer |
| 7 Terms | New personal-data section, marked for legal review |
| 8 Security | Findings in §7; several remediations shipped |
| 9 Breach | `BREACH_RUNBOOK.md` |
| 10 Testing | See §12 after commands |
