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
import {
  FadeUp,
  Stagger,
  StaggerItem,
} from "@/components/animations/reveal";
import { solutionCategories } from "@/data/solutions";

/**
 * What We Build — product categories as business solutions.
 * Leads naturally into Work / case studies next.
 */
export function WhatWeBuild() {
  return (
    <PageSection id="capabilities" containerClassName="space-y-12 md:space-y-14">
      <SectionHeader
        label="Our Expertise"
        title="Building Digital Products That Power Modern Businesses."
        description="From startup MVPs to enterprise platforms, we design and develop scalable software that helps businesses launch faster, operate smarter, and grow with confidence."
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {solutionCategories.map((item) => (
          <StaggerItem key={item.id} className="h-full">
            <PremiumCard className="flex h-full flex-col p-6 md:p-7">
              <PremiumCardTitle>{item.title}</PremiumCardTitle>
              <PremiumCardBody className="flex-1 text-[0.875rem] leading-relaxed">
                {item.description}
              </PremiumCardBody>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-foreground"
              >
                Learn More
                <ArrowUpRight className="size-3.5 opacity-70" aria-hidden />
              </Link>
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
