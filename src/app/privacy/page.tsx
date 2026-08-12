import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/json-ld";
import {
  LegalDocument,
  LegalSectionBlock,
} from "@/components/layout/legal-document";
import { SITE } from "@/constants/site";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.privacy);

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "scope", title: "Scope" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "how-we-use", title: "How we use information" },
  { id: "sharing", title: "Sharing and processors" },
  { id: "cookies", title: "Cookies and analytics" },
  { id: "retention", title: "Retention" },
  { id: "security", title: "Security" },
  { id: "international", title: "International transfers" },
  { id: "your-rights", title: "Your rights" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes" },
  { id: "contact", title: "Contact" },
] as const;

const linkClass =
  "font-medium text-foreground underline-offset-4 hover:underline";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PAGE_SEO.privacy)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <LegalDocument
        title="Privacy Policy"
        updated="Last updated 12 August 2026"
        effective="12 August 2026"
        summary={`${SITE.name} respects the information you share with us. This Privacy Policy explains what we collect through this website, why we collect it, how we use it, and the choices available to you.`}
        sections={[...SECTIONS]}
        related={[
          { label: "Terms of Use", href: "/terms" },
          { label: "Contact", href: "/contact" },
        ]}
      >
        <LegalSectionBlock id="introduction" title="1. Introduction">
          <p>
            This Privacy Policy applies to the website operated by {SITE.name}{" "}
            at{" "}
            <a href="https://waleion.com" className={linkClass}>
              waleion.com
            </a>{" "}
            (the “Site”). When we say “{SITE.name},” “we,” “us,” or “our,” we
            mean the team operating this Site and responding to inquiries
            submitted through it.
          </p>
          <p>
            By using the Site or submitting information through our forms, you
            acknowledge that you have read this Policy. If you do not agree,
            please do not submit personal information through the Site.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="scope" title="2. Scope">
          <p>This Policy covers information collected:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>when you browse the Site;</li>
            <li>when you submit a project inquiry or contact form;</li>
            <li>
              when you email us at{" "}
              <a href={`mailto:${SITE.email}`} className={linkClass}>
                {SITE.email}
              </a>
              ; and
            </li>
            <li>
              when you interact with links that include campaign or referral
              parameters (for example UTM fields).
            </li>
          </ul>
          <p>
            It does not cover third-party websites, apps, or services that we
            may link to, or products we build for clients under separate
            agreements. Client project work is governed by the contract for that
            engagement.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock
          id="information-we-collect"
          title="3. Information we collect"
        >
          <p>
            <span className="font-medium text-foreground">
              Information you provide.
            </span>{" "}
            When you use the contact or project inquiry form, we may receive:
            your name, work email, phone number (optional), company name
            (optional), and the content of your message. If you contact us by
            email, we receive whatever you include in that correspondence.
          </p>
          <p>
            <span className="font-medium text-foreground">
              Technical and usage data.
            </span>{" "}
            Like most websites, our hosting and security providers may process
            standard server logs such as IP address, browser type, device type,
            referring URL, pages requested, and timestamps. This data is used
            for security, reliability, and basic traffic understanding.
          </p>
          <p>
            <span className="font-medium text-foreground">
              Attribution data.
            </span>{" "}
            If you arrive from a campaign URL, optional parameters (such as
            source, medium, or campaign identifiers) may be stored with your
            inquiry so we understand how you found us.
          </p>
          <p>
            We do not intentionally collect special-category sensitive data
            through the Site. Please do not submit passwords, payment card
            numbers, government IDs, or health information in the contact form.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="how-we-use" title="4. How we use information">
          <p>We use the information described above to:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>respond to your inquiry and continue a product conversation;</li>
            <li>
              evaluate fit for a potential engagement and prepare a proposal when
              appropriate;
            </li>
            <li>operate, secure, and improve the Site;</li>
            <li>
              understand which channels introduce serious inquiries (when UTM or
              similar data is present); and
            </li>
            <li>
              comply with legal obligations and enforce our{" "}
              <Link href="/terms" className={linkClass}>
                Terms of Use
              </Link>
              .
            </li>
          </ul>
          <p>
            We do not sell your personal information. We do not use contact-form
            submissions for unrelated mass marketing lists.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="sharing" title="5. Sharing and processors">
          <p>
            We may share information with service providers who process it on
            our behalf, solely to operate the Site and our inquiry workflow. That
            may include:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>website hosting and content delivery;</li>
            <li>
              form delivery tools (for example spreadsheet or automation
              endpoints used to capture inquiries); and
            </li>
            <li>email and collaboration tools used to reply to you.</li>
          </ul>
          <p>
            These providers are instructed to process information only as needed
            to perform their services. We may also disclose information if
            required by law, regulation, legal process, or to protect the
            rights, safety, or integrity of {SITE.name}, our users, or others.
          </p>
          <p>
            If we ever transfer business assets in a reorganization or sale,
            inquiry records may be part of that transfer under appropriate
            confidentiality.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="cookies" title="6. Cookies and analytics">
          <p>
            The Site may use essential cookies or similar technologies required
            for security, session continuity, or preference storage (such as
            theme). If we enable analytics in the future, we will update this
            Policy to describe those tools and any choices available to you.
          </p>
          <p>
            You can control cookies through your browser settings. Blocking
            essential cookies may affect Site functionality.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="retention" title="7. Retention">
          <p>
            We retain inquiry information for as long as needed to respond,
            evaluate a potential engagement, maintain business records, and meet
            legal or accounting requirements. When information is no longer
            needed, we delete or de-identify it within a commercially reasonable
            period, subject to backup and archival systems.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="security" title="8. Security">
          <p>
            We use commercially reasonable administrative, technical, and
            organizational measures appropriate to the nature of the information
            we handle through this Site. No method of transmission or storage is
            completely secure. If you believe your interaction with us has been
            compromised, contact us promptly at{" "}
            <a href={`mailto:${SITE.email}`} className={linkClass}>
              {SITE.email}
            </a>
            .
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock
          id="international"
          title="9. International transfers"
        >
          <p>
            {SITE.name} operates as a remote-first team serving clients
            worldwide. Information you submit may be processed in India and in
            other countries where our service providers operate. Those locations
            may have different data-protection laws than your home country. By
            submitting information through the Site, you understand that your
            information may be transferred internationally for the purposes
            described in this Policy.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="your-rights" title="10. Your rights">
          <p>
            Depending on where you live, you may have rights to access, correct,
            update, or delete personal information we hold about you, or to
            object to or restrict certain processing. To make a request, email{" "}
            <a href={`mailto:${SITE.email}`} className={linkClass}>
              {SITE.email}
            </a>{" "}
            with enough detail for us to verify and respond. We may need to
            confirm your identity before acting on a request.
          </p>
          <p>
            If your request relates to a client product we built for another
            organization, that organization is typically the controller of that
            product’s data. We will point you to the right contact when
            applicable.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="children" title="11. Children">
          <p>
            The Site is intended for business and professional use. It is not
            directed to children under 16, and we do not knowingly collect
            personal information from children. If you believe a child has
            submitted information to us, contact us and we will take appropriate
            steps to delete it.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="changes" title="12. Changes">
          <p>
            We may update this Privacy Policy from time to time. The “Last
            updated” date at the top of this page will change when we do. Material
            changes will be reflected on this page. Continued use of the Site
            after an update constitutes acceptance of the revised Policy where
            permitted by law.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="contact" title="13. Contact">
          <p>
            For privacy questions or requests, contact:
          </p>
          <p>
            {SITE.legalName}
            <br />
            Email:{" "}
            <a href={`mailto:${SITE.email}`} className={linkClass}>
              {SITE.email}
            </a>
            <br />
            Web:{" "}
            <Link href="/contact" className={linkClass}>
              Contact page
            </Link>
          </p>
          <p>
            Business hours: {SITE.businessHours}. {SITE.responseTime}.
          </p>
        </LegalSectionBlock>
      </LegalDocument>
    </>
  );
}
