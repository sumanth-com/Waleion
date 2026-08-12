import type { Metadata } from "next";
import { createPageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { GetStarted } from "@/components/sections/get-started";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.getStarted);

export default function GetStartedPage() {
  return (
    <div className="pt-[var(--header-height)]">
      <JsonLd data={webPageJsonLd(PAGE_SEO.getStarted)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Get started", path: "/get-started" },
        ])}
      />
      <GetStarted asPage />
      <FinalCta />
    </div>
  );
}
