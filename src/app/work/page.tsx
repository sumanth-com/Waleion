import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/constants/site";
import {
  WorkHero,
  WorkCaseStudies,
  WorkCategories,
  WorkImpact,
  WorkCapabilities,
  WorkTestimonials,
  WorkPrinciples,
  WorkFinalCta,
} from "@/components/sections/work";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description: `Case studies from ${SITE.name}—products built to solve business problems, improve operations, and support long-term growth.`,
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkCaseStudies />
      <WorkCategories />
      <WorkImpact />
      <WorkCapabilities />
      <WorkTestimonials />
      <WorkPrinciples />
      <WorkFinalCta />
    </>
  );
}
