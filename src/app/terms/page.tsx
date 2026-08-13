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

export const metadata: Metadata = createPageMetadata(PAGE_SEO.terms);
export const revalidate = 86400;

const SECTIONS = [
  { id: "agreement", title: "Agreement to these terms" },
  { id: "about", title: "About this site" },
  { id: "eligibility", title: "Eligibility" },
  { id: "acceptable-use", title: "Acceptable use" },
  { id: "intellectual-property", title: "Intellectual property" },
  { id: "inquiries", title: "Inquiries and proposals" },
  { id: "no-reliance", title: "No reliance; no warranties" },
  { id: "limitation", title: "Limitation of liability" },
  { id: "indemnity", title: "Indemnity" },
  { id: "third-parties", title: "Third-party links" },
  { id: "governing-law", title: "Governing law" },
  { id: "changes", title: "Changes" },
  { id: "contact", title: "Contact" },
] as const;

const linkClass =
  "font-medium text-foreground underline-offset-4 hover:underline";

export default function TermsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PAGE_SEO.terms)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ])}
      />
      <LegalDocument
        title="Terms of Use"
        summary={`These Terms of Use govern your access to and use of the ${SITE.name} website. Please read them carefully before using the Site or submitting an inquiry.`}
        sections={[...SECTIONS]}
        related={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Contact", href: "/contact" },
        ]}
      >
        <LegalSectionBlock id="agreement" title="1. Agreement to these terms">
          <p>
            These Terms of Use (“Terms”) are a legally binding agreement between
            you and {SITE.legalName} (“{SITE.name},” “we,” “us,” or “our”)
            regarding your use of{" "}
            <a href="https://waleion.com" className={linkClass}>
              waleion.com
            </a>{" "}
            and any related pages, forms, or content we make available on this
            domain (collectively, the “Site”).
          </p>
          <p>
            By accessing or using the Site, you agree to these Terms and to our{" "}
            <Link href="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            . If you do not agree, do not use the Site.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="about" title="2. About this site">
          <p>
            The Site is provided to describe {SITE.name}’s software development
            and digital product capabilities, showcase selected work, and allow
            prospective clients to start a conversation. Content on the Site is
            for general informational purposes only.
          </p>
          <p>
            Nothing on the Site is an offer to enter a contract, a guarantee of
            availability, pricing, timelines, or outcomes, or professional,
            legal, or investment advice. Binding commercial terms apply only
            when set out in a signed proposal, statement of work, or other
            written agreement.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="eligibility" title="3. Eligibility">
          <p>
            You may use the Site only if you can form a binding contract with{" "}
            {SITE.name} and only in compliance with these Terms and applicable
            law. If you use the Site on behalf of a company or other entity, you
            represent that you have authority to bind that entity to these
            Terms.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="acceptable-use" title="4. Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              use the Site in any way that violates applicable law or
              regulation;
            </li>
            <li>
              submit false, misleading, defamatory, or unlawful content through
              any form or channel on the Site;
            </li>
            <li>
              attempt to gain unauthorized access to the Site, related systems,
              or data;
            </li>
            <li>
              interfere with or disrupt the Site’s operation, security, or
              integrity (including by introducing malware or overloading
              infrastructure);
            </li>
            <li>
              scrape, harvest, or systematically extract content or contact
              details except as allowed by ordinary browser use or written
              permission; or
            </li>
            <li>
              impersonate any person or entity, or misrepresent your affiliation
              with any person or entity.
            </li>
          </ul>
          <p>
            We may suspend or restrict access to the Site if we reasonably
            believe these Terms have been violated.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock
          id="intellectual-property"
          title="5. Intellectual property"
        >
          <p>
            The Site—including its design, text, graphics, logos, layout, and
            other materials—is owned by {SITE.name} or its licensors and is
            protected by intellectual property laws. Except for the limited
            right to access and use the Site as intended, no license is granted
            to you.
          </p>
          <p>
            You may not copy, modify, distribute, sell, lease, or create
            derivative works from Site content without our prior written
            consent, except for fair dealing or other rights that cannot be
            waived under applicable law.
          </p>
          <p>
            Client project names, marks, and materials shown in case studies
            remain the property of their respective owners and are used for
            illustration of work delivered.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="inquiries" title="6. Inquiries and proposals">
          <p>
            Submitting a message through our{" "}
            <Link href="/contact" className={linkClass}>
              contact form
            </Link>{" "}
            or email does not create a client relationship, retainer, or paid
            engagement. We may decline any inquiry at our discretion.
          </p>
          <p>
            Any estimate, roadmap, or recommendation shared before a signed
            agreement is preliminary and non-binding. Project scope, fees,
            timelines, ownership of deliverables, and confidentiality are
            defined only in a written agreement executed by both parties.
          </p>
          <p>
            Information you send in an inquiry is handled under our{" "}
            <Link href="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            . Do not send confidential product details you are not prepared to
            share for evaluation purposes until a non-disclosure agreement is in
            place if you require one.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock
          id="no-reliance"
          title="7. No reliance; no warranties"
        >
          <p>
            The Site is provided on an “as is” and “as available” basis. To the
            fullest extent permitted by law, {SITE.name} disclaims all
            warranties, whether express, implied, or statutory, including
            implied warranties of merchantability, fitness for a particular
            purpose, title, and non-infringement.
          </p>
          <p>
            We do not warrant that the Site will be uninterrupted, secure, or
            error-free, or that content is complete, accurate, or current. Case
            studies and metrics describe historical or illustrative outcomes and
            are not promises of similar results for your business.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="limitation" title="8. Limitation of liability">
          <p>
            To the fullest extent permitted by law, {SITE.name} and its
            principals, contractors, and suppliers will not be liable for any
            indirect, incidental, special, consequential, exemplary, or punitive
            damages, or any loss of profits, revenue, data, goodwill, or
            business opportunity, arising out of or related to your use of (or
            inability to use) the Site, even if advised of the possibility of
            such damages.
          </p>
          <p>
            To the fullest extent permitted by law, our aggregate liability
            arising out of or relating to the Site or these Terms will not
            exceed one hundred U.S. dollars (USD $100) or the equivalent in
            local currency. Some jurisdictions do not allow certain limitations;
            in those cases, our liability is limited to the maximum extent
            permitted by law.
          </p>
          <p>
            This section applies to Site use only. Liability for paid project
            work is governed exclusively by the applicable client agreement.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="indemnity" title="9. Indemnity">
          <p>
            You agree to defend, indemnify, and hold harmless {SITE.name} and
            its principals and contractors from and against claims, damages,
            losses, and expenses (including reasonable legal fees) arising out
            of your misuse of the Site, your violation of these Terms, or your
            infringement of any third-party right in connection with content you
            submit.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="third-parties" title="10. Third-party links">
          <p>
            The Site may link to third-party websites or resources. We are not
            responsible for their content, policies, or practices. Your use of
            third-party sites is at your own risk and subject to their terms.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="governing-law" title="11. Governing law">
          <p>
            These Terms are governed by the laws of India, without regard to
            conflict-of-law principles. Courts in India shall have exclusive
            jurisdiction over disputes arising from these Terms or the Site,
            subject to any mandatory consumer protections that apply in your
            jurisdiction.
          </p>
          <p>
            If any provision of these Terms is held unenforceable, the remaining
            provisions will continue in full force and effect. Our failure to
            enforce a provision is not a waiver of our right to do so later.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="changes" title="12. Changes">
          <p>
            We may revise these Terms from time to time. The “Last updated” date
            indicates when changes were published. Continued use of the Site
            after changes become effective constitutes acceptance of the revised
            Terms where permitted by law. If you do not agree, stop using the
            Site.
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="contact" title="13. Contact">
          <p>Questions about these Terms:</p>
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
