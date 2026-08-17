import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/json-ld";
import {
  LegalDocument,
  LegalSectionBlock,
} from "@/components/layout/legal-document";
import { LegalReviewBanner } from "@/components/privacy/legal-review-banner";
import { SITE } from "@/constants/site";
import {
  PRIVACY_NOTICE_LABEL,
  PRIVACY_NOTICE_VERSION,
  UNCONFIRMED,
} from "@/constants/privacy";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.privacy);
export const revalidate = 86400;

const SECTIONS = [
  { id: "legal-status", title: "Status of this notice" },
  { id: "who-we-are", title: "Who we are" },
  { id: "scope", title: "Scope" },
  { id: "categories", title: "Categories of personal data" },
  { id: "purposes", title: "Purposes of processing" },
  { id: "how-handled", title: "How data is handled" },
  { id: "consent", title: "Consent and withdrawal" },
  { id: "retention", title: "Retention" },
  { id: "third-parties", title: "Third parties and processors" },
  { id: "cookies", title: "Cookies and similar technologies" },
  { id: "rights", title: "Rights of data principals" },
  { id: "grievance", title: "Grievance and contact" },
  { id: "children", title: "Children" },
  { id: "security", title: "Security (technical)" },
  { id: "changes", title: "Changes" },
] as const;

const linkClass =
  "font-medium text-foreground underline-offset-4 hover:underline";

function Placeholder({ children }: { children: string }) {
  return (
    <span className="rounded-md bg-black/[0.04] px-1 py-0.5 font-medium text-foreground dark:bg-white/10">
      {children}
    </span>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PAGE_SEO.privacy)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Notice", path: "/privacy" },
        ])}
      />
      <LegalDocument
        title="Privacy Notice"
        updated={`Version ${PRIVACY_NOTICE_VERSION} · ${PRIVACY_NOTICE_LABEL}`}
        effective={PRIVACY_NOTICE_LABEL}
        summary={`${SITE.name} publishes this notice to describe personal data handling that is visible in the current website codebase. It is a technical draft for DPDP readiness, not a certified privacy policy.`}
        sections={[...SECTIONS]}
        related={[
          { label: "Terms of Use", href: "/terms" },
          { label: "Data rights request", href: "/privacy/data-rights" },
          { label: "Contact", href: "/contact" },
        ]}
      >
        <LegalReviewBanner />

        <LegalSectionBlock id="legal-status" title="1. Status of this notice">
          <p>
            <span className="font-medium text-foreground">
              REQUIRES LEGAL REVIEW.
            </span>{" "}
            This notice is written from the current implementation only. It does
            not invent legal entity details, retention periods, processor
            contracts, or grievance-officer appointments.
          </p>
          <p>
            Notice version stored with consent records:{" "}
            <span className="font-medium text-foreground">
              {PRIVACY_NOTICE_VERSION}
            </span>
            .
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="who-we-are" title="2. Who we are">
          <p>
            The website is operated under the brand name {SITE.name}. The public
            site email published in code is{" "}
            <a href={`mailto:${SITE.email}`} className={linkClass}>
              {SITE.email}
            </a>
            .
          </p>
          <p>
            Legal entity: <Placeholder>{UNCONFIRMED.legalEntity}</Placeholder>
          </p>
          <p>
            Address:{" "}
            <Placeholder>{UNCONFIRMED.registeredAddress}</Placeholder>
          </p>
          <p>
            Whether {SITE.name} is a Data Fiduciary for website enquiries, and
            whether any Significant Data Fiduciary obligations apply,{" "}
            <span className="font-medium text-foreground">
              REQUIRES LEGAL REVIEW
            </span>
            .
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="scope" title="3. Scope">
          <p>This notice covers personal data processed when you:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>browse this website;</li>
            <li>
              submit the project enquiry form on{" "}
              <Link href="/contact" className={linkClass}>
                /contact
              </Link>
              ;
            </li>
            <li>
              submit a data-rights request on{" "}
              <Link href="/privacy/data-rights" className={linkClass}>
                /privacy/data-rights
              </Link>
              ; or
            </li>
            <li>
              email the published address{" "}
              <a href={`mailto:${SITE.email}`} className={linkClass}>
                {SITE.email}
              </a>{" "}
              from your own email client (the website does not operate that
              mailbox; mailbox retention is not in this codebase).
            </li>
          </ul>
          <p>
            It does not cover client products built for other organisations,
            third-party websites linked from this Site, or offline sales
            processes that are not implemented here.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock
          id="categories"
          title="4. Categories of personal data"
        >
          <p>
            The website does not collect account passwords, payment card data,
            government identifiers, file uploads, or precise geolocation through
            any implemented form.
          </p>
          <p className="font-medium text-foreground">Enquiry form</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Full name (required)</li>
            <li>Work email (required)</li>
            <li>Phone number (optional)</li>
            <li>Company name (optional)</li>
            <li>Enquiry message (required)</li>
            <li>
              Optional campaign parameters if present in the URL: source, UTM
              source/medium/campaign/term/content
            </li>
            <li>Page URL at submit time; browser document referrer if present</li>
            <li>
              Consent flag, consent timestamp (set on the server), notice
              version, and form identifier
            </li>
          </ul>
          <p className="font-medium text-foreground">Data-rights form</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Full name</li>
            <li>Email</li>
            <li>Request type</li>
            <li>Free-text details</li>
            <li>Consent metadata as above</li>
          </ul>
          <p className="font-medium text-foreground">
            Technical data not collected by application code
          </p>
          <p>
            This repository does not implement application-level IP logging.
            Hosting, CDN, or Google infrastructure may still process IP
            addresses, user-agent strings, and request metadata as part of
            delivering the Site. Those logs are not configured in this codebase.{" "}
            <Placeholder>{UNCONFIRMED.hostingRegion}</Placeholder>
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="purposes" title="5. Purposes of processing">
          <p>
            From the implemented forms, personal data is used to:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              review and respond to a project enquiry (purpose id{" "}
              <span className="font-medium text-foreground">
                enquiry_response
              </span>
              ); and
            </li>
            <li>
              receive, verify, and handle a data-principal request (purpose id{" "}
              <span className="font-medium text-foreground">
                data_rights_request
              </span>
              ).
            </li>
          </ul>
          <p>
            Attribution fields are stored with an enquiry when present so the
            operator can see how that enquiry arrived. There is no analytics,
            advertising pixel, or marketing-list feature in this codebase.
            Unrelated marketing is not an implemented purpose.
          </p>
          <p>
            Lawful basis mapping (consent vs other DPDP grounds){" "}
            <span className="font-medium text-foreground">
              REQUIRES LEGAL REVIEW
            </span>
            . The website collects an unticked opt-in for the enquiry and
            request purposes above; that is a technical control, not a legal
            conclusion.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="how-handled" title="6. How data is handled">
          <p>Implemented path:</p>
          <ol className="list-decimal space-y-1.5 pl-5">
            <li>
              The browser submits a same-origin POST to this website’s API
              route.
            </li>
            <li>
              The API validates fields and, if configured, forwards JSON to a
              Google Apps Script web app URL stored in server environment
              variable <span className="font-medium text-foreground">GOOGLE_APPS_SCRIPT_URL</span>.
            </li>
            <li>
              The Apps Script appends a row to a Google Sheet tab named{" "}
              <span className="font-medium text-foreground">Leads</span>{" "}
              (enquiries) or{" "}
              <span className="font-medium text-foreground">
                DataRightsRequests
              </span>{" "}
              (rights requests), as implemented in{" "}
              <span className="font-medium text-foreground">
                scripts/google-apps-script.js
              </span>
              .
            </li>
          </ol>
          <p>
            There is no application database, user login, or in-app deletion
            UI. Correction and erasure, if required, are operational actions on
            the Sheet (and any copies people make of it).{" "}
            <Placeholder>{UNCONFIRMED.googleWorkspaceAccount}</Placeholder>
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="consent" title="7. Consent and withdrawal">
          <p>
            Enquiry submission requires a checkbox that is off by default. The
            checkbox covers responding to that enquiry only. It is not bundled
            with marketing.
          </p>
          <p>
            Data-rights submission requires a separate checkbox, off by default,
            covering handling of that request only.
          </p>
          <p>
            To withdraw consent or ask for erasure, use the{" "}
            <Link href="/privacy/data-rights" className={linkClass}>
              data rights request form
            </Link>{" "}
            or email{" "}
            <a href={`mailto:${SITE.email}`} className={linkClass}>
              {SITE.email}
            </a>
            . There is no self-service toggle that immediately deletes Sheet
            rows. Whether a particular withdrawal must stop all processing{" "}
            <span className="font-medium text-foreground">
              REQUIRES LEGAL REVIEW
            </span>
            .
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="retention" title="8. Retention">
          <p>
            The application does not delete enquiry or request rows on a timer.
            Google Sheets rows remain until someone with access to the Sheet
            deletes them.
          </p>
          <p>
            Enquiry retention:{" "}
            <Placeholder>{UNCONFIRMED.enquiryRetention}</Placeholder>
          </p>
          <p>
            Data-rights request retention:{" "}
            <Placeholder>{UNCONFIRMED.rightsRetention}</Placeholder>
          </p>
          <p>
            <span className="font-medium text-foreground">
              REQUIRES LEGAL REVIEW
            </span>{" "}
            — DPDP retention must be purpose-limited; a period cannot be invented
            in engineering copy.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock
          id="third-parties"
          title="9. Third parties and processors"
        >
          <p>
            The following services appear in code or deployment configuration.
            Contractual processor status{" "}
            <span className="font-medium text-foreground">
              REQUIRES LEGAL REVIEW
            </span>
            .
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <span className="font-medium text-foreground">
                Google Apps Script / Google Sheets
              </span>{" "}
              — stores enquiry and data-rights rows when the webhook URL is
              configured.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Hosting / Next.js production runtime
              </span>{" "}
              — environment comments refer to Vercel for production. Confirm
              the live host and region operationally.{" "}
              <Placeholder>{UNCONFIRMED.hostingRegion}</Placeholder>
            </li>
            <li>
              <span className="font-medium text-foreground">
                Email mailbox for {SITE.email}
              </span>{" "}
              — used if a person emails that address; provider not specified in
              this repo.
            </li>
          </ul>
          <p>
            Not found in this codebase: advertising pixels, Google Analytics /
            gtag, Meta Pixel, Hotjar, Mixpanel, PostHog, WhatsApp Business API,
            payment processors, CAPTCHA vendors, CRM SDKs, or auth providers.
          </p>
          <p>
            LinkedIn is linked as an outbound company page URL. That is not a
            tracking pixel in this repository.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock
          id="cookies"
          title="10. Cookies and similar technologies"
        >
          <p>
            No analytics, advertising, or non-essential tracking cookies are
            implemented in application code. No cookie consent banner is
            therefore gating third-party trackers, because none were found.
          </p>
          <p>
            <span className="font-medium text-foreground">next-themes</span> is
            mounted in the root provider and, by library default, may persist a
            theme preference in browser localStorage. That is not a marketing
            cookie. The theme toggle component exists but is not rendered in the
            current header/footer.
          </p>
          <p>
            Fonts are loaded through <span className="font-medium text-foreground">next/font</span>,
            which self-hosts at build time rather than calling Google Fonts in
            the visitor’s browser from this app code.
          </p>
          <p>
            The hosting platform may still set essential cookies for security
            or routing. Those are not declared in this repository. If marketing
            or analytics tags are added later, they must be gated and this
            notice updated.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="rights" title="11. Rights of data principals">
          <p>
            <span className="font-medium text-foreground">
              REQUIRES LEGAL REVIEW.
            </span>{" "}
            Under the Digital Personal Data Protection Act, 2023, a Data
            Principal may have rights including access to information about
            processing, correction and erasure, withdrawal of consent where
            processing is based on consent, and grievance redressal. Nomination
            and other rights may also apply under the Act and Rules. This
            paragraph is a pointer to the statute, not a complete statement of
            law.
          </p>
          <p>
            Technical channel implemented:{" "}
            <Link href="/privacy/data-rights" className={linkClass}>
              /privacy/data-rights
            </Link>
            . The form does not automatically expose stored personal data.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="grievance" title="12. Grievance and contact">
          <p>
            Public website contact currently published in code:{" "}
            <a href={`mailto:${SITE.email}`} className={linkClass}>
              {SITE.email}
            </a>
            . This is the enquiry mailbox, not a confirmed statutory grievance
            officer.
          </p>
          <p>
            Grievance officer name:{" "}
            <Placeholder>{UNCONFIRMED.grievanceOfficerName}</Placeholder>
          </p>
          <p>
            Grievance officer contact:{" "}
            <Placeholder>{UNCONFIRMED.grievanceOfficerContact}</Placeholder>
          </p>
          <p>
            That placeholder is not repeated in the site footer until the
            business confirms the correct contact.{" "}
            <span className="font-medium text-foreground">
              REQUIRES LEGAL REVIEW
            </span>{" "}
            and business confirmation before it is published as an official
            DPDP grievance channel.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="children" title="13. Children">
          <p>
            The Site is presented as a business / professional enquiry channel.
            The DPDP Act defines a child as a person who has not completed
            eighteen years of age. Whether additional verifiable-consent or
            restriction duties apply to this Site{" "}
            <span className="font-medium text-foreground">
              REQUIRES LEGAL REVIEW
            </span>
            .
          </p>
          <p>
            The forms do not implement age verification. Do not submit a child’s
            personal data through the enquiry form.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="security" title="14. Security (technical)">
          <p>
            Implemented in this audit branch: same-origin checks, in-memory rate
            limits, honeypot field, server-side validation, optional webhook
            secret, and basic security headers. No method of transmission or
            storage is guaranteed secure. A personal-data incident should follow
            the organisation’s breach process once that process is confirmed
            with counsel.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="changes" title="15. Changes">
          <p>
            When this notice changes, the version string{" "}
            <span className="font-medium text-foreground">
              {PRIVACY_NOTICE_VERSION}
            </span>{" "}
            should be updated in code so new consent records point to the new
            text. Automatically changing a “last updated” date every day without
            a policy change is not used for this page.
          </p>
        </LegalSectionBlock>
      </LegalDocument>
    </>
  );
}
