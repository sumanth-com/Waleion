"use client";

import Link from "next/link";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp } from "@/components/animations/reveal";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/constants/site";
import { CTA_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";

/**
 * Final homepage conversion — compact close, no extra process blocks.
 */
export function FinalCta() {
  return (
    <PageSection id="contact" spacing="sm" containerClassName="space-y-7">
      <SectionHeader
        label="Start Your Next Project"
        title="Let's Build Something That Makes a Real Impact."
        description={`Whether you're launching a startup, modernizing your business, or building the next generation of software, ${SITE.name} helps you turn ideas into scalable products.`}
        className="max-w-3xl"
      />

      <FadeUp className="flex flex-wrap items-center justify-center gap-3">
        <SmoothAnchor
          href={CTA_NAV.href}
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6",
            "dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
          )}
        >
          Start Your Project
        </SmoothAnchor>
        <Link
          href={`mailto:${SITE.email}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full px-6",
            "dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          )}
        >
          Schedule a Discovery Call
        </Link>
      </FadeUp>
    </PageSection>
  );
}
