import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/constants/site";
import { HashScroll } from "@/components/navigation/hash-scroll";
import {
  SolutionsHero,
  SolutionsCatalog,
  WhoWeHelp,
  WhyChooseSolutions,
  SolutionsTechStack,
  SolutionsFaq,
  SolutionsFinalCta,
} from "@/components/sections/solutions";

export const metadata: Metadata = createPageMetadata({
  title: "Solutions",
  description: `Software solutions from ${SITE.name}—AI, SaaS, web, mobile, enterprise systems, automation, and long-term product partnership.`,
  path: "/capabilities",
});

export default function SolutionsPage() {
  return (
    <>
      <HashScroll />
      <SolutionsHero />
      <SolutionsCatalog />
      <WhoWeHelp />
      <WhyChooseSolutions />
      <SolutionsTechStack />
      <SolutionsFaq />
      <SolutionsFinalCta />
    </>
  );
}
