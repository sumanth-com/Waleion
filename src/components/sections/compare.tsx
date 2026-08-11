"use client";

import { Check, Star, X } from "lucide-react";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp } from "@/components/animations/reveal";
import {
  compareColumns,
  compareRows,
  type CompareCell,
} from "@/data/compare";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

function ToneMark({ tone }: { tone: CompareCell["tone"] }) {
  if (tone === "yes") {
    return (
      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500/12 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
        <Check className="size-3" strokeWidth={2.6} />
      </span>
    );
  }

  if (tone === "mixed") {
    return (
      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500/12 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
        <Check className="size-3" strokeWidth={2.6} />
      </span>
    );
  }

  return (
    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-rose-500/10 text-rose-600 dark:bg-rose-400/15 dark:text-rose-300">
      <X className="size-2.5" strokeWidth={2.6} />
    </span>
  );
}

function Cell({
  cell,
  featured,
}: {
  cell: CompareCell;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 px-4 py-4 md:px-5",
        featured && "bg-neutral-950/[0.03] dark:bg-white/[0.04]"
      )}
    >
      <ToneMark tone={cell.tone} />
      <span
        className={cn(
          "text-[13px] leading-snug",
          featured
            ? "font-medium text-foreground"
            : "text-muted-foreground"
        )}
      >
        {cell.text}
      </span>
    </div>
  );
}

/**
 * Decision table — studio vs hiring vs agencies.
 */
export function Compare() {
  return (
    <PageSection id="compare" spacing="sm" containerClassName="space-y-10">
      <SectionHeader
        label="What makes us different"
        title="Why leading businesses choose us."
        description="Not hiring. Not another agency. A product studio that ships — and stays."
        className="max-w-3xl"
      />

      <FadeUp>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
          <div className="overflow-x-auto">
            <div className="min-w-[44rem]">
              <div className="grid grid-cols-[8.5rem_1fr_1fr_1fr] border-b border-black/[0.05] dark:border-white/10 md:grid-cols-[10rem_1fr_1fr_1fr]">
                <div className="px-4 py-4 md:px-5" />
                <div className="flex items-center gap-2 bg-neutral-950/[0.03] px-4 py-4 dark:bg-white/[0.04] md:px-5">
                  <Star
                    className="size-3.5 fill-foreground text-foreground"
                    strokeWidth={1.5}
                  />
                  <span className="text-[13px] font-semibold tracking-tight text-foreground">
                    {SITE.name}
                  </span>
                </div>
                <div className="px-4 py-4 md:px-5">
                  <span className="text-[13px] font-semibold tracking-tight text-foreground/80">
                    {compareColumns.hiring}
                  </span>
                </div>
                <div className="px-4 py-4 md:px-5">
                  <span className="text-[13px] font-semibold tracking-tight text-foreground/80">
                    {compareColumns.agency}
                  </span>
                </div>
              </div>

              {compareRows.map((row, i) => (
                <div
                  key={row.id}
                  className={cn(
                    "grid grid-cols-[8.5rem_1fr_1fr_1fr] md:grid-cols-[10rem_1fr_1fr_1fr]",
                    i < compareRows.length - 1 &&
                      "border-b border-black/[0.05] dark:border-white/10"
                  )}
                >
                  <div className="flex items-center px-4 py-4 md:px-5">
                    <span className="text-[13px] font-medium tracking-tight text-foreground">
                      {row.label}
                    </span>
                  </div>
                  <Cell cell={row.studio} featured />
                  <Cell cell={row.hiring} />
                  <Cell cell={row.agency} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-center text-[13px] leading-relaxed text-muted-foreground">
          One team. One product. No hiring loop, no agency handoff.
        </p>
      </FadeUp>
    </PageSection>
  );
}
