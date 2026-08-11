"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import {
  PremiumCard,
  PremiumCardBody,
  PremiumCardTitle,
} from "@/components/cards/premium-card";
import {
  crossIndustryExpertise,
  industryBenefits,
  industryFaqs,
  industryStories,
  industriesPageCopy,
} from "@/data/industries-page";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function IndustryBenefits() {
  return (
    <PageSection id="benefits" containerClassName="space-y-10">
      <SectionHeader
        label="Industry Benefits"
        title="Why businesses choose us as a technology partner."
        description="We combine industry workflow understanding with product engineering—so software fits the business, not the other way around."
      />
      <Stagger className="mx-auto grid max-w-5xl gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {industryBenefits.map((item, index) => (
          <StaggerItem key={item.id} className="flex gap-4">
            <span className="mt-0.5 font-mono text-xs tabular-nums text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-sm font-medium tracking-tight text-foreground md:text-base">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function CrossIndustryExpertise() {
  return (
    <PageSection id="expertise" spacing="sm" containerClassName="space-y-8">
      <SectionHeader
        label="Cross-Industry Expertise"
        title="Capabilities that travel across sectors."
        description="The same product disciplines—applied carefully to each industry's workflows and constraints."
      />
      <Stagger className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
        {crossIndustryExpertise.map((item) => (
          <StaggerItem key={item}>
            <span className="inline-flex rounded-full border border-border/60 px-3 py-1.5 text-xs text-muted-foreground md:text-sm">
              {item}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function IndustrySuccessStories() {
  return (
    <PageSection id="success-stories" containerClassName="space-y-10">
      <SectionHeader
        label="Success Stories"
        title="Industry outcomes from real engagements."
        description="A snapshot of challenges, solutions, and business value—grouped by sector."
      />
      <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {industryStories.map((story) => (
          <StaggerItem key={story.id} className="h-full">
            <PremiumCard className="flex h-full flex-col p-6 md:p-7">
              <span className="mb-4 inline-flex w-fit rounded-full border border-border/70 bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                {story.industry}
              </span>
              <PremiumCardTitle>{story.project}</PremiumCardTitle>
              <PremiumCardBody className="mt-3 space-y-2">
                <span className="block">
                  <span className="font-medium text-foreground">Challenge. </span>
                  {story.challenge}
                </span>
                <span className="block">
                  <span className="font-medium text-foreground">Solution. </span>
                  {story.solution}
                </span>
                <span className="block text-foreground/90">
                  <span className="font-medium text-foreground">Outcome. </span>
                  {story.outcome}
                </span>
              </PremiumCardBody>
              <Link
                href={story.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                View case study
                <ArrowUpRight className="size-3.5 opacity-70" aria-hidden />
              </Link>
            </PremiumCard>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function IndustriesFaq() {
  return (
    <PageSection id="faq" containerClassName="space-y-10">
      <SectionHeader
        label="Frequently Asked Questions"
        title="Common questions from industry teams."
        description="Practical answers for organizations evaluating a long-term software partner."
      />
      <FadeUp className="mx-auto max-w-3xl divide-y divide-border/60 rounded-3xl border border-border/70 bg-card shadow-soft-sm">
        {industryFaqs.map((item) => (
          <details key={item.id} className="group px-5 py-4 md:px-7 md:py-5">
            <summary className="cursor-pointer list-none text-sm font-medium tracking-tight text-foreground outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span
                  aria-hidden
                  className="mt-0.5 text-muted-foreground transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
          </details>
        ))}
      </FadeUp>
    </PageSection>
  );
}

export function IndustriesFinalCta() {
  const { finalCta } = industriesPageCopy;

  return (
    <PageSection id="start" spacing="sm">
      <FadeUp className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl border border-border/70 bg-card px-6 py-12 text-center shadow-soft-sm md:px-10 md:py-14">
        <div className="space-y-2">
          {finalCta.lines.map((line) => (
            <p
              key={line}
              className="text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.35rem,2.8vw,1.85rem)] leading-[1.2] text-foreground"
            >
              {line}
            </p>
          ))}
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
          {finalCta.description}
        </p>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6 dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
          )}
        >
          Start Your Project
        </Link>
      </FadeUp>
    </PageSection>
  );
}
