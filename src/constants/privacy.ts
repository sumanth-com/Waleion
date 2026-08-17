/**
 * Privacy-notice and consent constants derived from the current implementation.
 *
 * Legal copy that uses these values is marked REQUIRES LEGAL REVIEW on the page.
 * Do not treat version dates as a lawyer-approved effective date until confirmed.
 */
export const PRIVACY_NOTICE_VERSION = "2026-08-17";
export const PRIVACY_NOTICE_LABEL = "17 August 2026";

export const CONSENT_PURPOSES = {
  enquiry_response: {
    id: "enquiry_response",
    form: "contact",
    description:
      "Processing contact details and the enquiry message in order to review and respond to a project inquiry submitted through this website.",
  },
  data_rights_request: {
    id: "data_rights_request",
    form: "data-rights",
    description:
      "Processing the details of a data-principal request in order to receive, verify, and handle that request.",
  },
} as const;

export type ConsentPurposeId = keyof typeof CONSENT_PURPOSES;

export type ConsentRecord = {
  subject_email: string;
  purpose_id: ConsentPurposeId;
  status: "given";
  timestamp: string;
  notice_version: string;
  source_form: string;
  source_page: string;
};

export const DATA_RIGHTS_TYPES = [
  { id: "access", label: "Access / information about personal data" },
  { id: "correction", label: "Correction of personal data" },
  { id: "erasure", label: "Erasure of personal data" },
  { id: "withdraw_consent", label: "Withdrawal of consent" },
  { id: "grievance", label: "Grievance" },
  { id: "other", label: "Other request" },
] as const;

export type DataRightsTypeId = (typeof DATA_RIGHTS_TYPES)[number]["id"];

/**
 * Business / legal facts that are not present in the codebase.
 * Rendered as visible placeholders — do not invent values.
 */
export const UNCONFIRMED = {
  legalEntity:
    "[PLACEHOLDER — legal entity name, registration number, and constitution not confirmed in this codebase]",
  registeredAddress:
    "[PLACEHOLDER — registered / principal business address not confirmed in this codebase]",
  grievanceOfficerName:
    "[PLACEHOLDER — grievance officer / Data Protection Officer not designated in this codebase]",
  grievanceOfficerContact:
    "[PLACEHOLDER — statutory grievance contact not confirmed. Do not assume the public site email is the DPDP grievance channel until the business confirms it.]",
  enquiryRetention:
    "[PLACEHOLDER — no retention period is coded, scheduled, or documented for Google Sheet enquiry rows]",
  rightsRetention:
    "[PLACEHOLDER — no retention period is coded, scheduled, or documented for data-rights request rows]",
  hostingRegion:
    "[PLACEHOLDER — production hosting region / subprocessors list not confirmed in this codebase]",
  googleWorkspaceAccount:
    "[PLACEHOLDER — which Google account owns the Apps Script and Sheet is an operational fact, not in source control]",
} as const;
