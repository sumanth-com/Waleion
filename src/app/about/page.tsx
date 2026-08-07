import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/constants/site";
import {
  AboutHero,
  AboutWhoWeAre,
  AboutMissionVision,
  AboutBeliefs,
  AboutValues,
  AboutHowWeWork,
  AboutTeam,
  AboutCulture,
  AboutTrust,
  AboutStats,
  AboutCommitment,
  AboutFinalCta,
} from "@/components/sections/about";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: `About ${SITE.name}—a product engineering partner helping startups and enterprises build software that drives lasting business growth.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutMissionVision />
      <AboutBeliefs />
      <AboutValues />
      <AboutHowWeWork />
      <AboutTeam />
      <AboutCulture />
      <AboutTrust />
      <AboutStats />
      <AboutCommitment />
      <AboutFinalCta />
    </>
  );
}
