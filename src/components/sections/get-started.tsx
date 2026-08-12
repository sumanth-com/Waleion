"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Lightbulb, Sparkles } from "lucide-react";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { getStartedSteps, type GetStartedStep } from "@/data/get-started";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";
import { easings } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

function VisionPanel() {
  return (
    <div
      className="flex h-full items-center justify-center px-6 py-10"
      style={{ perspective: "900px" }}
    >
      <div className="relative h-[240px] w-full max-w-[20rem]">
        <div
          className="absolute left-2 top-6 h-[190px] w-[70%] rounded-[1.6rem] border border-black/[0.05] bg-neutral-100 shadow-[0_12px_32px_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-white/8"
          style={{ transform: "rotateX(16deg) rotateZ(-22deg)" }}
        />
        <div
          className="absolute right-0 top-0 flex h-[200px] w-[74%] flex-col justify-end rounded-[1.6rem] border border-black/[0.06] bg-white p-5 shadow-[0_18px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950"
          style={{ transform: "rotateX(16deg) rotateZ(14deg)" }}
        >
          <span className="grid size-9 place-items-center rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">
            <Lightbulb className="size-4" strokeWidth={1.75} />
          </span>
          <p className="mt-4 text-[15px] font-semibold tracking-tight text-foreground">
            Tell us the goal
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            One conversation. That’s the start.
          </p>
        </div>
      </div>
    </div>
  );
}

function CollaboratePanel() {
  const rows = [
    "Clear scope",
    "Smart strategy",
    "Signed off",
    "Locked alignment",
  ];

  return (
    <div className="flex h-full items-center justify-center px-5 py-8">
      <div className="w-full max-w-sm origin-center -rotate-2 rounded-[1.75rem] border border-black/[0.06] bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-white/[0.07]">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Shared plan
        </p>
        <p className="mt-2 text-[15px] font-semibold tracking-tight text-foreground">
          Shape the plan, together
        </p>
        <ul className="mt-5 space-y-2">
          {rows.map((row) => (
            <li
              key={row}
              className="flex items-center gap-3 rounded-2xl bg-neutral-50 px-3 py-2.5 dark:bg-white/8"
            >
              <span className="grid size-5 place-items-center rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">
                <Check className="size-3" strokeWidth={2.4} />
              </span>
              <span className="flex-1 text-[13px] font-medium text-foreground">
                {row}
              </span>
              <span className="text-[11px] text-muted-foreground">Done</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BuildPanel() {
  return (
    <div className="relative flex h-full items-center justify-center px-3 py-8">
      <div className="relative h-[300px] w-full max-w-md">
        <div className="absolute left-0 top-10 w-[58%] -rotate-6 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
          <div className="mb-2 flex items-center gap-1 px-0.5">
            <span className="size-1.5 rounded-full bg-white/25" />
            <span className="size-1.5 rounded-full bg-white/25" />
            <span className="size-1.5 rounded-full bg-white/25" />
          </div>
          <div className="rounded-xl bg-white/8 p-3.5">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">
              Live product
            </p>
            <p className="mt-2 text-[13px] font-semibold tracking-tight text-white">
              Your idea, in market.
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-white/50">
              Shipping with updates you can see.
            </p>
            <span className="mt-3 inline-flex rounded-full bg-white px-2.5 py-1 text-[10px] font-medium text-neutral-950">
              Open live
            </span>
          </div>
        </div>

        <div className="absolute right-0 top-0 w-[64%] rotate-6 overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-neutral-950">
          <div className="mb-2 flex items-center gap-1 px-0.5">
            <span className="size-1.5 rounded-full bg-neutral-300 dark:bg-white/25" />
            <span className="size-1.5 rounded-full bg-neutral-300 dark:bg-white/25" />
            <span className="size-1.5 rounded-full bg-neutral-300 dark:bg-white/25" />
          </div>
          <div className="rounded-xl bg-neutral-50 p-3.5 dark:bg-white/8">
            <div className="flex items-center gap-1.5 text-foreground">
              <Sparkles className="size-3.5" strokeWidth={1.75} />
              <p className="text-[12px] font-semibold tracking-tight">
                Shipped this week
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-white px-2.5 py-2 dark:bg-white/10">
                <p className="text-[10px] text-muted-foreground">Users</p>
                <p className="text-[15px] font-semibold tracking-tight">2.4k</p>
              </div>
              <div className="rounded-xl bg-white px-2.5 py-2 dark:bg-white/10">
                <p className="text-[10px] text-muted-foreground">Uptime</p>
                <p className="text-[15px] font-semibold tracking-tight">99.9%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepVisual({ id }: { id: GetStartedStep["id"] }) {
  if (id === "vision") return <VisionPanel />;
  if (id === "collaborate") return <CollaboratePanel />;
  return <BuildPanel />;
}

/**
 * How to get started — hover a step, left visual slides up.
 */
export function GetStarted({ asPage = false }: { asPage?: boolean }) {
  const [active, setActive] = useState<GetStartedStep["id"]>("vision");
  const reduceMotion = usePrefersReducedMotion();
  const current = getStartedSteps.find((s) => s.id === active)!;

  return (
    <PageSection id="get-started" spacing="sm" containerClassName="space-y-8">
      <SectionHeader
        label="Getting started"
        title={`How to Get Started with ${SITE.name}`}
        description="Skip the old hiring-and-managing loop. Three clear steps from first conversation to a live product."
        headingAs={asPage ? "h1" : "h2"}
      />

      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="relative mx-auto h-[380px] w-full max-w-lg overflow-hidden lg:h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={
                reduceMotion ? { opacity: 0 } : { opacity: 0, y: 72 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                reduceMotion ? { opacity: 0 } : { opacity: 0, y: 48 }
              }
              transition={{
                duration: 0.55,
                ease: easings.outExpo,
              }}
              className="absolute inset-0"
              aria-hidden
            >
              <StepVisual id={active} />
            </motion.div>
          </AnimatePresence>
          <p className="sr-only">{current.visualLabel}</p>
        </div>

        <ol className="flex flex-col gap-2">
          {getStartedSteps.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(item.id)}
                  onFocus={() => setActive(item.id)}
                  className={cn(
                    "w-full rounded-2xl px-5 py-5 text-left transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                    isActive
                      ? "bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:bg-white/[0.07] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                      : "bg-transparent hover:bg-foreground/[0.03] dark:hover:bg-white/[0.03]"
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-medium tracking-wide",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.step}
                  </span>
                  <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground md:text-lg">
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground",
                      !isActive && "lg:line-clamp-2"
                    )}
                  >
                    {item.description}
                  </p>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </PageSection>
  );
}
