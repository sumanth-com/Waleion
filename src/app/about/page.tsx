import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { aboutMetadataDescription } from "@/data/about-page";
import {
  AboutHero,
  AboutStory,
  AboutExperience,
  AboutCapabilities,
  AboutStats,
  AboutCommitment,
} from "@/components/sections/about";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: aboutMetadataDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutExperience />
      <AboutCapabilities />
      <AboutStats />
      <AboutCommitment />
    </>
  );
}
