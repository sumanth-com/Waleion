"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp } from "@/components/animations/reveal";
import {
  industryDetails,
  type IndustryDetail,
} from "@/data/industries-page";
import { cn } from "@/lib/utils";

function IndustryBlock({
  industry,
  index,
}: {
  industry: IndustryDetail;
  index: number;
}) {
  return (
    <FadeUp
      id={industry.id}
      className="scroll-mt-[calc(var(--header-height)+1.5rem)] py-12 md:py-16 first:pt-0"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs tabular-nums text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {industry.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
            {industry.overview}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {industry.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-foreground/[0.04] px-2 py-0.5 text-[11px] text-muted-foreground dark:bg-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Talk about {industry.name.toLowerCase()}
            <ArrowUpRight className="size-3.5 opacity-70" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
          {(
            [
              ["Business challenges", industry.challenges],
              ["Digital opportunities", industry.opportunities],
              ["Solutions we build", industry.solutions],
              ["Expected outcomes", industry.outcomes],
            ] as const
          ).map(([label, items]) => (
            <div key={label}>
              <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {label}
              </h4>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "text-sm leading-relaxed",
                      label === "Expected outcomes"
                        ? "text-foreground/90"
                        : "text-foreground/85"
                    )}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

export function IndustriesCatalog() {
  return (
    <PageSection id="industries-we-serve" containerClassName="space-y-10">
      <SectionHeader
        align="left"
        narrow={false}
        className="max-w-2xl"
        label="Industries We Serve"
        title="Sector-specific problems. Practical digital solutions."
        description="Each industry section explains the challenges we see, the opportunities available, and the software we build to create lasting business value."
      />
      <div>
        {industryDetails.map((industry, index) => (
          <IndustryBlock
            key={industry.id}
            industry={industry}
            index={index}
          />
        ))}
      </div>
    </PageSection>
  );
}
