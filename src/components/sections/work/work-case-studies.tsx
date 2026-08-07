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
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { caseStudies } from "@/data/work";

export function WorkCaseStudies() {
  return (
    <PageSection id="case-studies" containerClassName="space-y-10">
      <SectionHeader
        label="Featured Case Studies"
        title="Real problems. Real products. Real business value."
        description="Each engagement is presented as a business case study—what was broken, what we built, and what changed for the organization."
      />

      <Stagger className="grid gap-5 md:grid-cols-2">
        {caseStudies.map((project) => (
          <StaggerItem key={project.id} className="h-full">
            <PremiumCard className="flex h-full flex-col p-6 md:p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-border/70 bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {project.industry}
                </span>
                <span className="rounded-full border border-border/70 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                  {project.clientType}
                </span>
              </div>

              <PremiumCardTitle className="text-lg md:text-xl">
                {project.name}
              </PremiumCardTitle>
              <PremiumCardBody>{project.overview}</PremiumCardBody>

              <div className="mt-5 space-y-3 text-sm">
                <p className="leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Challenge. </span>
                  {project.challenge}
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Solution. </span>
                  {project.solution}
                </p>
                <p className="leading-relaxed text-foreground/90">
                  <span className="font-medium text-foreground">Outcome. </span>
                  {project.outcome}
                </p>
              </div>

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

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span>Duration · {project.duration}</span>
                <span>Services · {project.services.slice(0, 2).join(", ")}</span>
              </div>

              <Link
                href={project.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                View Full Case Study
                <ArrowUpRight className="size-3.5 opacity-70" aria-hidden />
              </Link>
            </PremiumCard>
          </StaggerItem>
        ))}
      </Stagger>
    </PageSection>
  );
}
