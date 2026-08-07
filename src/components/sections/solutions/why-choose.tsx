"use client";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { whyChooseSolutions } from "@/data/solutions-page";

export function WhyChooseSolutions() {
  return (
    <PageSection id="why-choose" containerClassName="space-y-10">
      <SectionHeader
        label="Why Businesses Choose Our Solutions"
        title="Outcomes over output."
        description="We measure success by whether the software helps your business operate better, grow faster, and stay adaptable."
      />

      <Stagger className="mx-auto grid max-w-5xl gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseSolutions.map((item, index) => (
          <StaggerItem key={item.id} className="flex gap-4">
            <span
              className="mt-0.5 font-mono text-xs tabular-nums text-muted-foreground"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-medium tracking-tight text-foreground">
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
