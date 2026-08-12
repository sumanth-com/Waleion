import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { LegalDocument } from "@/components/layout/legal-document";
import { SITE } from "@/constants/site";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.privacy);

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PAGE_SEO.privacy)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <LegalDocument title="Privacy Policy" updated="Last updated August 2026">
        <p>
          {SITE.name} (“we”) operates {SITE.url.replace("https://", "")}. This
          page explains how we handle information you choose to send us through
          this website.
        </p>
        <h2 className="pt-2 font-semibold tracking-tight text-foreground">
          What we collect
        </h2>
        <p>
          If you submit the contact form, we receive the details you enter —
          typically your name, email, phone (if provided), company, and message
          — along with optional campaign parameters from the URL (such as UTM
          fields) so we know how you found us.
        </p>
        <p>
          We do not sell this information. We use it to reply to your inquiry
          and, if we work together, to deliver the project.
        </p>
        <h2 className="pt-2 font-semibold tracking-tight text-foreground">
          How to reach us
        </h2>
        <p>
          Questions about this policy:{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
          . You can also start from our{" "}
          <Link href="/contact" className="text-foreground underline-offset-4 hover:underline">
            contact page
          </Link>
          .
        </p>
      </LegalDocument>
    </>
  );
}
