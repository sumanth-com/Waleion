"use client";

import Image from "next/image";
import Link from "next/link";
import { Link2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import { CountUp } from "@/components/animations/count-up";
import aboutStoryBg from "@/assets/about2.png";
import {
  PremiumCard,
  PremiumCardBody,
  PremiumCardTitle,
} from "@/components/cards/premium-card";
import { buttonVariants } from "@/components/ui/button";
import { CTA_NAV } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import {
  aboutCapabilities,
  aboutExperiencePillars,
  aboutPageCopy,
  getAboutStats,
} from "@/data/about-page";
import { cn } from "@/lib/utils";

export function AboutStory() {
  const { story } = aboutPageCopy;

  return (
    <section
      id="story"
      className="relative scroll-mt-[calc(var(--header-height)+1rem)] overflow-hidden bg-[#ebe3d6] py-20 md:py-28 dark:bg-[#141210]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={aboutStoryBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center md:object-[65%_center] dark:brightness-[0.88]"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f3ece2]/95 via-[#f3ece2]/78 to-[#f3ece2]/10 dark:from-[#12100e]/94 dark:via-[#12100e]/72 dark:to-[#12100e]/20"
        aria-hidden
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-xl">
          <SectionHeader
            align="left"
            narrow={false}
            className="max-w-none"
            label={story.label}
            title={
              <>
                {story.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </>
            }
          />
          <FadeUp className="mt-8 space-y-4">
            {story.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-sm leading-relaxed text-foreground/85 md:text-[0.9875rem]"
              >
                {paragraph}
              </p>
            ))}
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

export function AboutExperience() {
  const { experience } = aboutPageCopy;

  return (
    <PageSection id="experience" containerClassName="space-y-10">
      <SectionHeader
        label={experience.label}
        title={experience.title}
        description={experience.supporting}
      />
      <Stagger className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {aboutExperiencePillars.map((pillar) => (
          <StaggerItem key={pillar.id} className="h-full">
            <PremiumCard className="flex h-full flex-col p-6 md:p-8" interactive={false}>
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  {pillar.index}
                </span>
                <span className="rounded-full border border-black/[0.06] bg-neutral-50 px-2.5 py-0.5 text-[11px] font-semibold tracking-tight text-foreground dark:border-white/10 dark:bg-white/[0.05]">
                  {pillar.years}
                </span>
              </div>
              <PremiumCardTitle className="mt-4 text-lg md:text-xl">
                {pillar.title}
              </PremiumCardTitle>
              <ul className="mt-5 grid gap-x-3 gap-y-2 sm:grid-cols-2">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex min-w-0 items-center gap-2 text-[13px] text-muted-foreground"
                  >
                    <span
                      className="size-1 shrink-0 rounded-full bg-emerald-500/70"
                      aria-hidden
                    />
                    <span className="max-md:whitespace-normal md:whitespace-nowrap">{item}</span>
                  </li>
                ))}
              </ul>
            </PremiumCard>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function AboutCapabilities() {
  const { capabilities } = aboutPageCopy;

  return (
    <PageSection id="capabilities" containerClassName="space-y-10">
      <SectionHeader
        label={capabilities.label}
        title={capabilities.title}
        description={capabilities.description}
      />
      <Stagger className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aboutCapabilities.map((item, index) => (
          <StaggerItem key={item.id} className="h-full">
            <PremiumCard className="h-full p-5 md:p-6" interactive={false}>
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <PremiumCardTitle className="mt-3 text-base">
                {item.title}
              </PremiumCardTitle>
              <PremiumCardBody>{item.description}</PremiumCardBody>
            </PremiumCard>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function AboutStats() {
  const { stats } = aboutPageCopy;
  const items = getAboutStats();

  return (
    <PageSection id="numbers" spacing="sm" containerClassName="space-y-10">
      <SectionHeader
        label={stats.label}
        title={stats.title}
        description={stats.description}
      />
      <Stagger className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((stat) => (
          <StaggerItem key={stat.id} className="text-center">
            <p className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-foreground">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
              />
            </p>
            <p className="mt-1.5 text-xs leading-snug text-muted-foreground">
              {stat.label}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

function AboutActionButtons({ className }: { className?: string }) {
  const { commitment } = aboutPageCopy;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 sm:flex-nowrap sm:gap-3",
        className
      )}
    >
      <Link
        href="/contact"
        className={cn(
          buttonVariants({ size: "lg" }),
          "shrink-0 rounded-full px-4 text-sm sm:px-6 sm:text-base dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
        )}
      >
        {commitment.primaryCta}
      </Link>
      <Link
        href={CTA_NAV.href}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "shrink-0 rounded-full px-4 text-sm sm:px-6 sm:text-base dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        )}
      >
        {commitment.secondaryCta}
      </Link>
      {SITE.linkedin ? (
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 text-sm sm:gap-2 sm:px-6 sm:text-base dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          )}
        >
          <Link2 className="size-3.5 shrink-0" aria-hidden />
          Connect with {SITE.name}
        </a>
      ) : null}
    </div>
  );
}

export function AboutCommitment() {
  const { commitment } = aboutPageCopy;

  return (
    <PageSection id="commitment" spacing="sm">
      <FadeUp
        className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[1.75rem] border border-black/[0.06] bg-white/90 px-6 py-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06] md:px-10 md:py-14"
      >
        <div className="space-y-4">
          <h2 className="text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.5rem,3.2vw,2.35rem)] leading-[1.14] text-foreground">
            {commitment.title}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
            {commitment.description}
          </p>
        </div>
        <AboutActionButtons />
      </FadeUp>
    </PageSection>
  );
}
