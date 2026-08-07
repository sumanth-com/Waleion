"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import {
  PremiumCard,
  PremiumCardTitle,
  PremiumCardBody,
} from "@/components/cards/premium-card";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import { buttonVariants } from "@/components/ui/button";
import { featuredProjects } from "@/data/work";
import { CTA_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";

/**
 * Featured Work — business success stories, not a portfolio gallery.
 * Flows into Why Waleion next.
 */
export function FeaturedWork() {
  return (
    <PageSection id="work" containerClassName="space-y-12 md:space-y-14">
      <SectionHeader
        label="Featured Work"
        title="Real Products. Real Business Impact."
        description="Every project we build is designed to solve real business challenges, improve operational efficiency, and create long-term value. Here's a glimpse of the products we've helped bring to life."
      />

      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <StaggerItem key={project.id} className="h-full">
            <PremiumCard className="flex h-full flex-col gap-0 p-6 md:p-7">
              <span className="mb-4 inline-flex w-fit rounded-full border border-border/70 bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-muted-foreground">
                {project.industry}
              </span>

              <PremiumCardTitle>{project.name}</PremiumCardTitle>
              <PremiumCardBody className="line-clamp-2">
                {project.overview}
              </PremiumCardBody>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-foreground/[0.04] px-2 py-0.5 text-[11px] text-muted-foreground dark:bg-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-5 border-t border-border/50 pt-4 text-sm leading-relaxed text-foreground/85">
                <span className="font-medium text-foreground">Outcome. </span>
                {project.outcome}
              </p>

              <Link
                href={project.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-foreground"
              >
                View Case Study
                <ArrowUpRight className="size-3.5 opacity-70" aria-hidden />
              </Link>
            </PremiumCard>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeUp className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
        <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
          Interested in building something similar?
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
          Next, see what makes our approach different from freelancers and
          traditional agencies.
        </p>
      </FadeUp>
    </PageSection>
  );
}
