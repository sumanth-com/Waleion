"use client";

import Link from "next/link";
import { PageSection } from "@/components/layout/page-section";
import { FadeUp } from "@/components/animations/reveal";
import { buttonVariants } from "@/components/ui/button";
import { solutionsPageCopy } from "@/data/solutions-page";
import { CTA_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function SolutionsFinalCta() {
  const { finalCta } = solutionsPageCopy;

  return (
    <PageSection id="get-started" spacing="sm">
      <FadeUp className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl border border-border/70 bg-card px-6 py-12 text-center shadow-soft-sm md:px-10 md:py-14">
        <h2 className="text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] text-foreground">
          {finalCta.title}
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
          {finalCta.description}
        </p>
        <Link
          href={CTA_NAV.href}
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6 dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
          )}
        >
          Schedule a Discovery Call
        </Link>
      </FadeUp>
    </PageSection>
  );
}
