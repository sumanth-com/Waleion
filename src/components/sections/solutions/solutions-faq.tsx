"use client";

import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp } from "@/components/animations/reveal";
import { solutionsFaqs } from "@/data/solutions-page";

export function SolutionsFaq() {
  return (
    <PageSection id="faq" containerClassName="space-y-10">
      <SectionHeader
        label="Frequently Asked Questions"
        title="Clear answers before you commit."
        description="Practical questions teams ask when evaluating a software development partner."
      />

      <FadeUp className="mx-auto max-w-3xl divide-y divide-border/60 rounded-3xl border border-border/70 bg-card shadow-soft-sm">
        {solutionsFaqs.map((item) => (
          <details
            key={item.id}
            className="group px-5 py-4 md:px-7 md:py-5"
          >
            <summary className="cursor-pointer list-none text-sm font-medium tracking-tight text-foreground outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span
                  aria-hidden
                  className="mt-0.5 text-muted-foreground transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
          </details>
        ))}
      </FadeUp>
    </PageSection>
  );
}
