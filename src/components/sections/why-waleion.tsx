"use client";

import Link from "next/link";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import { buttonVariants } from "@/components/ui/button";
import { whyComparison, whyPrinciples } from "@/data/why";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

/**
 * Why Waleion — philosophy and differentiation, not generic feature cards.
 * Leads into Our Process next.
 */
export function WhyWaleion() {
  return (
    <PageSection id="why" containerClassName="space-y-14 md:space-y-16">
      <SectionHeader
        label={`Why ${SITE.name}`}
        title={
          <>
            More Than a Development Partner.
            <br className="hidden sm:block" />
            A Team Focused on Building Products That Last.
          </>
        }
        description="We don't just deliver websites or applications. We work closely with businesses to understand their goals, solve meaningful problems, and build software that continues creating value long after launch."
        className="max-w-3xl"
      />

      {/* Principles — editorial numbered list, not feature cards */}
      <Stagger className="mx-auto grid max-w-5xl gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {whyPrinciples.map((item, index) => (
          <StaggerItem key={item.id} className="flex gap-4">
            <span
              className="mt-0.5 font-mono text-xs tabular-nums text-muted-foreground"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-medium tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Comparison */}
      <FadeUp className="mx-auto w-full max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft-sm">
          <div className="border-b border-border/60 px-5 py-4 md:px-8">
            <p className="text-sm font-medium tracking-tight text-foreground">
              How we compare
            </p>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">
              {SITE.name} as a complete long-term technology partner.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-surface-sunken/40">
                  <th className="px-5 py-3.5 font-medium text-muted-foreground md:px-8">
                    Capability
                  </th>
                  <th className="px-4 py-3.5 font-medium text-foreground">
                    {SITE.name}
                  </th>
                  <th className="px-4 py-3.5 font-medium text-muted-foreground">
                    Freelancers
                  </th>
                  <th className="px-4 py-3.5 font-medium text-muted-foreground md:pr-8">
                    Traditional Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {whyComparison.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-border/40 last:border-b-0"
                  >
                    <td className="px-5 py-3.5 text-foreground/90 md:px-8">
                      {row.criterion}
                    </td>
                    <td className="px-4 py-3.5 font-medium text-foreground">
                      {row.waleion}
                    </td>
                    <td className="px-4 py-3.5 text-muted-foreground">
                      {row.freelancers}
                    </td>
                    <td className="px-4 py-3.5 text-muted-foreground md:pr-8">
                      {row.agencies}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="mx-auto max-w-2xl space-y-8 text-center">
        <div className="space-y-3">
          <p className="text-base font-medium tracking-tight text-foreground md:text-lg">
            Businesses don&apos;t just need software.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
            They need technology that helps them grow, adapt, and compete.
            <br className="hidden sm:block" />
            That&apos;s exactly what we build.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Let&apos;s Build Something That Lasts
          </p>
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-6",
              "dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
            )}
          >
            Schedule a Discovery Call
          </Link>
          <p className="max-w-md text-xs leading-relaxed text-muted-foreground md:text-sm">
            Next, see how we turn ideas into successful products—our process,
            step by step.
          </p>
        </div>
      </FadeUp>
    </PageSection>
  );
}
