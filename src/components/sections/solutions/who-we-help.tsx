"use client";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { whoWeHelp } from "@/data/solutions-page";

export function WhoWeHelp() {
  return (
    <PageSection id="who-we-help" containerClassName="space-y-10">
      <SectionHeader
        label="Who We Help"
        title="Built for teams at every stage of growth."
        description="From first product to enterprise platforms, we partner with organizations that need software that supports real business momentum."
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {whoWeHelp.map((item) => (
          <StaggerItem
            key={item.id}
            className="rounded-3xl border border-border/70 bg-card p-5 shadow-soft-sm transition-[box-shadow,border-color] duration-300 hover:border-border hover:shadow-soft-md md:p-6"
          >
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
