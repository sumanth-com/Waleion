import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { createPageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/json-ld";
import {
  LegalDocument,
  LegalSectionBlock,
} from "@/components/layout/legal-document";
import { LegalReviewBanner } from "@/components/privacy/legal-review-banner";
import { DataRightsForm } from "@/components/sections/data-rights-form";
import { PRIVACY_NOTICE_LABEL } from "@/constants/privacy";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.dataRights);

export default function DataRightsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PAGE_SEO.dataRights)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Notice", path: "/privacy" },
          { name: "Data rights request", path: "/privacy/data-rights" },
        ])}
      />
      <LegalDocument
        title="Data rights request"
        updated={`Notice version dated ${PRIVACY_NOTICE_LABEL}`}
        effective={PRIVACY_NOTICE_LABEL}
        summary="Use this form to ask Waleion to access, correct, erase, or otherwise handle personal data associated with a website enquiry. Requests are routed for internal review and are not answered by automatically exposing stored records in the browser."
        related={[
          { label: "Privacy Notice", href: "/privacy" },
          { label: "Contact", href: "/contact" },
        ]}
      >
        <LegalReviewBanner />

        <LegalSectionBlock id="how-this-works" title="How this works">
          <p>
            This form creates an internal request record. It does not search
            Google Sheets, email inboxes, or hosting logs from the browser, and
            it does not return personal data in the response page.
          </p>
          <p>
            Identity may need to be verified before a request can be completed.
            Timeframes and the exact rights that apply are a legal question.{" "}
            <span className="font-medium text-foreground">
              REQUIRES LEGAL REVIEW.
            </span>
          </p>
          <p>
            Prefer email instead? Use the address on the{" "}
            <Link href="/privacy#contact" className="font-medium text-foreground">
              Privacy Notice contact section
            </Link>
            .
          </p>
        </LegalSectionBlock>

        <LegalSectionBlock id="request-form" title="Request form">
          <Suspense
            fallback={
              <div className="h-64 animate-pulse rounded-2xl bg-neutral-100 dark:bg-white/5" />
            }
          >
            <DataRightsForm />
          </Suspense>
        </LegalSectionBlock>
      </LegalDocument>
    </>
  );
}
