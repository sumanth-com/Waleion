import type { Metadata } from "next";
import { createPageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/json-ld";
import {
  AboutHero,
  AboutStory,
  AboutExperience,
  AboutCapabilities,
  AboutStats,
  AboutCommitment,
} from "@/components/sections/about";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.about);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({ ...PAGE_SEO.about, type: "AboutPage" })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutHero />
      <AboutStory />
      <AboutExperience />
      <AboutCapabilities />
      <AboutStats />
      <AboutCommitment />
    </>
  );
}
