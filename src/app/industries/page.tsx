import type { Metadata } from "next";
import { createPageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { HashScroll } from "@/components/navigation/hash-scroll";
import {
  IndustriesHero,
  IndustriesCatalog,
  IndustryBenefits,
  CrossIndustryExpertise,
  IndustrySuccessStories,
  IndustriesFaq,
  IndustriesFinalCta,
} from "@/components/sections/industries";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.industries);

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PAGE_SEO.industries)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <HashScroll />
      <IndustriesHero />
      <IndustriesCatalog />
      <IndustryBenefits />
      <CrossIndustryExpertise />
      <IndustrySuccessStories />
      <IndustriesFaq />
      <IndustriesFinalCta />
    </>
  );
}
