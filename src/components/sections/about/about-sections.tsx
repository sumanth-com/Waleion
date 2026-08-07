"use client";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import {
  aboutBeliefs,
  aboutCulture,
  aboutHowWeWork,
  aboutMission,
  aboutStats,
  aboutTeam,
  aboutTrustPoints,
  aboutValues,
  aboutVision,
  aboutWhoWeAre,
  aboutPageCopy,
} from "@/data/about-page";
import {
  PremiumCard,
  PremiumCardBody,
  PremiumCardTitle,
} from "@/components/cards/premium-card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CTA_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function AboutWhoWeAre() {
  const items = [
    { label: "Who we are", body: aboutWhoWeAre.who },
    { label: "What we believe", body: aboutWhoWeAre.believe },
    { label: "Who we work with", body: aboutWhoWeAre.workWith },
    { label: "What we build", body: aboutWhoWeAre.products },
    { label: "How we approach projects", body: aboutWhoWeAre.approach },
  ];

  return (
    <PageSection id="who-we-are" containerClassName="space-y-10">
      <SectionHeader
        label="Who We Are"
        title="A product engineering partner for teams that need lasting software."
        description="We sit at the intersection of strategy, design, and engineering—focused on outcomes businesses can rely on."
      />
      <Stagger className="mx-auto grid max-w-4xl gap-6 md:gap-8">
        {items.map((item) => (
          <StaggerItem key={item.label} className="grid gap-2 md:grid-cols-[14rem_1fr] md:gap-8">
            <h3 className="text-sm font-medium tracking-tight text-foreground">
              {item.label}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
              {item.body}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function AboutMissionVision() {
  return (
    <PageSection id="mission" spacing="sm" containerClassName="space-y-8">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <FadeUp className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft-sm md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Our Mission
          </p>
          <p className="mt-4 text-base font-medium leading-snug tracking-tight text-foreground md:text-lg">
            {aboutMission}
          </p>
        </FadeUp>
        <FadeUp className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft-sm md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Our Vision
          </p>
          <p className="mt-4 text-base font-medium leading-snug tracking-tight text-foreground md:text-lg">
            {aboutVision}
          </p>
        </FadeUp>
      </div>
    </PageSection>
  );
}

export function AboutBeliefs() {
  return (
    <PageSection id="beliefs" containerClassName="space-y-10">
      <SectionHeader
        label="What We Believe"
        title="Principles that guide every engagement."
        description="Simple standards that keep us focused on useful software and honest partnership."
      />
      <Stagger className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
        {aboutBeliefs.map((item, index) => (
          <StaggerItem
            key={item.id}
            className="flex gap-3 rounded-2xl border border-border/60 bg-card/60 px-4 py-3.5"
          >
            <span className="font-mono text-xs tabular-nums text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-sm font-medium tracking-tight text-foreground">
              {item.title}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function AboutValues() {
  return (
    <PageSection id="values" containerClassName="space-y-10">
      <SectionHeader
        label="Our Values"
        title="How we show up for clients and for each other."
        description="These aren't posters on a wall—they're the behaviors we expect in delivery."
      />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aboutValues.map((item) => (
          <StaggerItem key={item.id} className="h-full">
            <PremiumCard className="h-full p-5 md:p-6" interactive={false}>
              <PremiumCardTitle className="text-sm md:text-base">
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

export function AboutHowWeWork() {
  return (
    <PageSection id="how-we-work" containerClassName="space-y-10">
      <SectionHeader
        label="How We Work"
        title="A clear path from conversation to lasting product."
        description="Structured enough to create confidence. Flexible enough for real businesses."
      />
      <Stagger className="mx-auto max-w-3xl space-y-0">
        {aboutHowWeWork.map((item, index) => {
          const isLast = index === aboutHowWeWork.length - 1;
          return (
            <StaggerItem key={item.id} className="relative flex gap-5 md:gap-8">
              <div className="flex w-10 shrink-0 flex-col items-center self-stretch">
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  {item.step}
                </span>
                {!isLast ? (
                  <span aria-hidden className="mt-3 w-px flex-1 bg-border/70" />
                ) : null}
              </div>
              <div className={cn("pb-8", isLast && "pb-0")}>
                <h3 className="text-sm font-medium tracking-tight text-foreground md:text-base">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </PageSection>
  );
}

export function AboutTeam() {
  return (
    <PageSection id="team" containerClassName="space-y-10">
      <SectionHeader
        label="Meet the Team"
        title="The people behind the work."
        description="A compact team spanning founding leadership, engineering, design, product, AI, and operations."
      />
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {aboutTeam.map((member) => (
          <StaggerItem key={member.id} className="h-full">
            <PremiumCard className="flex h-full flex-col p-6" interactive={false}>
              <div className="mb-4 grid size-11 place-items-center rounded-full bg-foreground text-sm font-semibold text-background dark:bg-white dark:text-neutral-950">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <PremiumCardTitle>{member.name}</PremiumCardTitle>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                {member.role}
              </p>
              <PremiumCardBody className="mt-3 flex-1">{member.intro}</PremiumCardBody>
              <p className="mt-4 border-t border-border/50 pt-4 text-xs leading-relaxed text-muted-foreground">
                {member.expertise}
              </p>
            </PremiumCard>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function AboutCulture() {
  return (
    <PageSection id="culture" containerClassName="space-y-10">
      <SectionHeader
        label="Our Culture"
        title="How we work when no one is watching."
        description="A culture built for learning, clarity, and software that stays maintainable."
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aboutCulture.map((item) => (
          <StaggerItem key={item.id}>
            <h3 className="text-sm font-medium tracking-tight text-foreground md:text-base">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function AboutTrust() {
  return (
    <PageSection id="trust" containerClassName="space-y-10">
      <SectionHeader
        label="Why Businesses Trust Us"
        title="Confidence built through delivery—not slogans."
        description="What clients consistently value when they partner with us."
      />
      <Stagger className="mx-auto grid max-w-5xl gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {aboutTrustPoints.map((item, index) => (
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

export function AboutStats() {
  return (
    <PageSection id="numbers" spacing="sm" containerClassName="space-y-10">
      <SectionHeader
        label="By the Numbers"
        title="A snapshot of our work so far."
        description="Directional markers of experience—not inflated vanity metrics."
      />
      <Stagger className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
        {aboutStats.map((stat) => (
          <StaggerItem key={stat.id} className="text-center">
            <p className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function AboutCommitment() {
  const { commitment } = aboutPageCopy;

  return (
    <PageSection id="commitment" spacing="sm">
      <FadeUp className="mx-auto max-w-2xl space-y-4 text-center">
        <p className="text-base font-medium leading-snug tracking-tight text-foreground md:text-lg">
          {commitment.lead}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
          {commitment.close}
        </p>
      </FadeUp>
    </PageSection>
  );
}

export function AboutFinalCta() {
  const { finalCta } = aboutPageCopy;

  return (
    <PageSection id="start" spacing="sm">
      <FadeUp className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl border border-border/70 bg-card px-6 py-12 text-center shadow-soft-sm md:px-10 md:py-14">
        <h2 className="text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15] text-foreground">
          {finalCta.title}
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
          {finalCta.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-6 dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
            )}
          >
            Start Your Project
          </Link>
          <Link
            href={CTA_NAV.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-6 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            )}
          >
            Book a Discovery Call
          </Link>
        </div>
      </FadeUp>
    </PageSection>
  );
}
