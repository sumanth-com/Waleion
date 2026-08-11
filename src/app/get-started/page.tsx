import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/constants/site";
import { GetStarted } from "@/components/sections/get-started";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = createPageMetadata({
  title: "Get Started",
  description: `How to get started with ${SITE.name} — three clear steps from first conversation to a live product.`,
  path: "/get-started",
});

export default function GetStartedPage() {
  return (
    <div className="pt-[var(--header-height)]">
      <GetStarted />
      <FinalCta />
    </div>
  );
}
