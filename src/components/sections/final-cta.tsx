"use client";

import Link from "next/link";
import { PageSection } from "@/components/layout/page-section";
import { FadeUp } from "@/components/animations/reveal";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/constants/site";
import { CTA_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";

/**
 * Final homepage conversion — card close before the footer.
 */
export function FinalCta() {
  return (
    <PageSection id="contact" spacing="sm">
      <FadeUp className="mx-auto w-full max-w-5xl">
        <div className="rounded-[1.75rem] border border-black/[0.06] bg-white/90 px-6 py-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06] sm:px-10 sm:py-12 md:px-14 md:py-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Start Your Next Project
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-[clamp(1.65rem,3.4vw,2.75rem)] font-semibold leading-[1.12] tracking-[var(--tracking-tight)] text-foreground">
            Let&apos;s Build Something That Makes a Real Impact.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
            Whether you&apos;re launching a startup, modernizing your business,
            or building the next generation of software, {SITE.name} helps you
            turn ideas into scalable products.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
          </div>
        </div>
      </FadeUp>
    </PageSection>
  );
}
