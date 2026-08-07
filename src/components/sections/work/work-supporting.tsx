"use client";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import {
  workCapabilities,
  workCategories,
  workImpactItems,
  workPrinciples,
} from "@/data/work";
import { testimonials } from "@/data/testimonials";
import {
  PremiumCard,
  PremiumCardBody,
} from "@/components/cards/premium-card";

export function WorkCategories() {
  return (
    <PageSection id="categories" spacing="sm" containerClassName="space-y-8">
      <SectionHeader
        label="Project Categories"
        title="Products across the systems businesses rely on."
        description="From customer-facing platforms to internal operations software."
      />
      <Stagger className="flex flex-wrap justify-center gap-2 md:gap-3">
        {workCategories.map((category) => (
          <StaggerItem key={category}>
            <span className="inline-flex rounded-full border border-border/70 bg-card px-3.5 py-1.5 text-sm text-foreground/85 shadow-soft-xs">
              {category}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function WorkImpact() {
  return (
    <PageSection id="impact" containerClassName="space-y-10">
      <SectionHeader
        label="Impact"
        title="Business value over vanity metrics."
        description="When exact numbers aren't the right story, we focus on the operational and product outcomes that matter."
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workImpactItems.map((item) => (
          <StaggerItem key={item.id} className="space-y-2">
            <h3 className="text-sm font-medium tracking-tight text-foreground md:text-base">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function WorkCapabilities() {
  return (
    <PageSection id="capabilities-shown" containerClassName="space-y-8">
      <SectionHeader
        label="Capabilities Demonstrated"
        title="End-to-end product engineering in practice."
        description="Design, build, infrastructure, and ongoing quality—shown through shipped work."
      />
      <Stagger className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
        {workCapabilities.map((item) => (
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

export function WorkTestimonials() {
  return (
    <PageSection id="testimonials" containerClassName="space-y-10">
      <SectionHeader
        label="Client Testimonials"
        title="What partners say about working with us."
        description="Feedback tied to business impact—not generic praise."
      />
      <Stagger className="grid gap-5 md:grid-cols-2">
        {testimonials.map((item) => (
          <StaggerItem key={item.id} className="h-full">
            <PremiumCard className="flex h-full flex-col p-6 md:p-7">
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
                “{item.quote}”
              </blockquote>
              <div className="mt-5 border-t border-border/50 pt-4">
                <p className="text-sm font-medium text-foreground">{item.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {item.role}, {item.company}
                </p>
                <PremiumCardBody className="mt-3 text-xs md:text-sm">
                  <span className="font-medium text-foreground">Impact. </span>
                  {item.outcome}
                </PremiumCardBody>
              </div>
            </PremiumCard>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}

export function WorkPrinciples() {
  return (
    <PageSection id="principles" containerClassName="space-y-10">
      <SectionHeader
        label="Our Development Principles"
        title="How we approach every engagement."
        description="Consistent standards that keep projects clear, durable, and useful after launch."
      />
      <Stagger className="mx-auto grid max-w-5xl gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {workPrinciples.map((item, index) => (
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
