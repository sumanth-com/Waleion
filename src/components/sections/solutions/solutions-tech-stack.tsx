"use client";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import { techStackGroups } from "@/data/solutions-page";

export function SolutionsTechStack() {
  return (
    <PageSection id="technology" containerClassName="space-y-10">
      <SectionHeader
        label="Technology Stack"
        title="Reliable tools your team can grow with."
        description="We choose technologies for maintainability, hiring depth, and production readiness—not novelty."
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techStackGroups.map((group) => (
          <StaggerItem
            key={group.id}
            className="rounded-3xl border border-border/70 bg-card p-5 shadow-soft-sm md:p-6"
          >
            <h3 className="text-sm font-medium tracking-tight text-foreground">
              {group.title}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeUp className="mx-auto max-w-xl text-center text-sm text-muted-foreground">
        Stack choices always follow product goals, constraints, and your
        team&apos;s ability to maintain what we ship.
      </FadeUp>
    </PageSection>
  );
}
