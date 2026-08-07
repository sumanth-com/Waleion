"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp } from "@/components/animations/reveal";
import { solutionDetails, type SolutionDetail } from "@/data/solutions-page";
import { cn } from "@/lib/utils";

function SolutionBlock({
  solution,
  index,
}: {
  solution: SolutionDetail;
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <FadeUp
      id={solution.id}
      className="scroll-mt-[calc(var(--header-height)+1.5rem)] border-t border-border/50 py-12 md:py-16 first:border-t-0 first:pt-0"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div
          className={cn("lg:col-span-5", reverse && "lg:order-2")}
        >
          <p className="font-mono text-xs tabular-nums text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {solution.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
            {solution.overview}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-foreground/90">
            <span className="font-medium text-foreground">Outcome. </span>
            {solution.outcome}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Discuss this solution
            <ArrowUpRight className="size-3.5 opacity-70" aria-hidden />
          </Link>
        </div>

        <div
          className={cn(
            "grid gap-6 sm:grid-cols-2 lg:col-span-7",
            reverse && "lg:order-1"
          )}
        >          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Problems we solve
            </h4>
            <ul className="mt-3 space-y-2">
              {solution.problems.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-foreground/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Deliverables
            </h4>
            <ul className="mt-3 space-y-2">
              {solution.deliverables.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-foreground/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Technologies
            </h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {solution.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-foreground/[0.04] px-2 py-0.5 text-[11px] text-muted-foreground dark:bg-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Industries
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              {solution.industries.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export function SolutionsCatalog() {
  return (
    <PageSection id="core-solutions" containerClassName="space-y-10">
      <SectionHeader
        label="Core Solutions"
        title="Product engineering for the problems that matter."
        description="Each solution is framed around business outcomes—not a menu of technologies. Explore how we help teams design, build, and grow software that lasts."
        align="left"
        className="max-w-2xl"
        narrow={false}
      />

      <div>
        {solutionDetails.map((solution, index) => (
          <SolutionBlock
            key={solution.id}
            solution={solution}
            index={index}
          />
        ))}
      </div>
    </PageSection>
  );
}
