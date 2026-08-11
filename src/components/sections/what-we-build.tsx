"use client";

import { ArrowUpRight } from "lucide-react";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import {
  PremiumCard,
  PremiumCardTitle,
  PremiumCardBody,
} from "@/components/cards/premium-card";
import {
  FadeUp,
  Stagger,
  StaggerItem,
} from "@/components/animations/reveal";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { solutionCategories } from "@/data/solutions";

/**
 * Expertise — product categories as business solutions.
 */
export function WhatWeBuild() {
  return (
    <PageSection id="expertise" spacing="sm" containerClassName="space-y-8">
      <SectionHeader
        label="Our Expertise"
        title="Solutions Tailored for Your Growth"
        description="Full-service software for startups and enterprises—custom SaaS, AI products, and business platforms built for reliability, scalability, and lasting results."
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {solutionCategories.map((item) => (
          <StaggerItem key={item.id} className="h-full">
            <PremiumCard className="flex h-full flex-col p-6 md:p-7">
              <PremiumCardTitle>{item.title}</PremiumCardTitle>
              <PremiumCardBody className="flex-1 text-[0.875rem] leading-relaxed">
                {item.description}
              </PremiumCardBody>
              <SmoothAnchor
                href={item.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-foreground"
              >
                Learn More
                <ArrowUpRight className="size-3.5 opacity-70" aria-hidden />
              </SmoothAnchor>
            </PremiumCard>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeUp className="mx-auto max-w-lg text-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          See how these solutions come to life in real products—explore selected
          work and case studies next.
        </p>
      </FadeUp>
    </PageSection>
  );
}
