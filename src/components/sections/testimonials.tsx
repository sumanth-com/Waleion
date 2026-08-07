"use client";

import Link from "next/link";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import {
  PremiumCard,
  PremiumCardBody,
} from "@/components/cards/premium-card";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import { buttonVariants } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";
import { CTA_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";

/**
 * Testimonials & Client Success Stories.
 * Proof that the process delivers business outcomes.
 */
export function Testimonials() {
  return (
    <PageSection id="stories" containerClassName="space-y-12 md:space-y-14">
      <SectionHeader
        label="Client Success"
        title="Trusted by Teams Building Real Products."
        description="Hear from founders and operators who partnered with us to solve concrete business problems—and keep improving after launch."
      />

      <Stagger className="grid gap-5 md:grid-cols-2">
        {testimonials.map((item) => (
          <StaggerItem key={item.id} className="h-full">
            <PremiumCard className="flex h-full flex-col p-6 md:p-8">
              <span className="mb-5 inline-flex w-fit rounded-full border border-border/70 bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-muted-foreground">
                {item.industry}
              </span>

              <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90 md:text-[0.9875rem]">
                “{item.quote}”
              </blockquote>

              <div className="mt-6 border-t border-border/50 pt-5">
                <p className="text-sm font-medium tracking-tight text-foreground">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {item.role}, {item.company}
                </p>
                <PremiumCardBody className="mt-3 text-xs md:text-sm">
                  <span className="font-medium text-foreground">Outcome. </span>
                  {item.outcome}
                </PremiumCardBody>
              </div>
            </PremiumCard>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeUp className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Ready to write the next success story with us?
        </p>
        <Link
          href={CTA_NAV.href}
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6",
            "dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
          )}
        >
          Start Your Project
        </Link>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground md:text-sm">
          When you&apos;re ready, start the conversation—we&apos;re here to help
          you build.
        </p>
      </FadeUp>
    </PageSection>
  );
}
