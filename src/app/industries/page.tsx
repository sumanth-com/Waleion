import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/constants/site";
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

export const metadata: Metadata = createPageMetadata({
  title: "Industries",
  description: `${SITE.name} builds software for startups, healthcare, finance, education, retail, manufacturing, logistics, enterprise, and more—tailored to each sector's real challenges.`,
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
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
