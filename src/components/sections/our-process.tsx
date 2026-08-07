"use client";

import Link from "next/link";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import { buttonVariants } from "@/components/ui/button";
import { processHighlights, processPhases } from "@/data/process";
import { cn } from "@/lib/utils";

/**
 * Our Process — structured product journey, not a generic timeline.
 * Leads into Testimonials next.
 */
export function OurProcess() {
  return (
    <PageSection id="process" containerClassName="space-y-14 md:space-y-16">
      <SectionHeader
        label="Our Process"
        title="From First Conversation to Product Launch."
        description="Every successful product starts with a clear process. Our approach keeps projects transparent, collaborative, and focused on delivering measurable business outcomes."
      />

      {/* Journey — connected phases, editorial not a gimmick timeline */}
      <Stagger className="mx-auto max-w-3xl">
        <ol className="relative space-y-0">
          {processPhases.map((phase, index) => {
            const isLast = index === processPhases.length - 1;
            return (
              <StaggerItem key={phase.id} className="relative flex gap-5 md:gap-8">
                <div className="flex w-10 shrink-0 flex-col items-center self-stretch md:w-12">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">
                    {phase.step}
                  </span>
                  {!isLast ? (
                    <span
                      aria-hidden
                      className="mt-3 w-px flex-1 bg-border/70"
                    />
                  ) : null}
                </div>
                <div className={cn("pb-10", isLast && "pb-0")}>
                  <h3 className="text-base font-medium tracking-tight text-foreground md:text-lg">
                    {phase.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </ol>
      </Stagger>

      <FadeUp className="mx-auto max-w-2xl text-center">
        <p className="text-base font-medium tracking-tight text-foreground md:text-lg">
          Our partnership doesn&apos;t end at launch.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
          We continue working with our clients to improve performance, introduce
          new features, and support long-term business growth.
        </p>
      </FadeUp>

      <Stagger className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3 sm:gap-6">
        {processHighlights.map((item) => (
          <StaggerItem key={item.id} className="text-center sm:text-left">
            <h3 className="text-sm font-medium tracking-tight text-foreground md:text-base">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeUp className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          Have an idea you&apos;d like to build?
        </p>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6",
            "dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
          )}
        >
          Let&apos;s Talk
        </Link>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground md:text-sm">
          See how this process has helped other businesses succeed—client
          stories next.
        </p>
      </FadeUp>
    </PageSection>
  );
}
