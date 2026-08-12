import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { LegalDocument } from "@/components/layout/legal-document";
import { SITE } from "@/constants/site";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.terms);

export default function TermsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PAGE_SEO.terms)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <LegalDocument title="Terms of Use" updated="Last updated August 2026">
        <p>
          This website is provided by {SITE.name} to share who we are and how to
          start a software or digital product project. Content is for general
          information. It is not a proposal or a contract until we agree terms
          in writing.
        </p>
        <h2 className="pt-2 font-semibold tracking-tight text-foreground">
          Using this site
        </h2>
        <p>
          Do not misuse the site, attempt to disrupt it, or submit unlawful or
          misleading information through the contact form.
        </p>
        <h2 className="pt-2 font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <p>
          Any engagement for design or engineering is scoped separately. Sending
          a message through the{" "}
          <Link href="/contact" className="text-foreground underline-offset-4 hover:underline">
            contact form
          </Link>{" "}
          does not create a paid engagement.
        </p>
        <p>
          Questions:{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
          .
        </p>
      </LegalDocument>
    </>
  );
}
