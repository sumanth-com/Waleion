"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { WorkShowcase } from "@/components/sections/work-showcase";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { CTA_NAV } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";
import { easings } from "@/lib/animations";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.12,
      duration: 0.8,
      ease: easings.outExpo,
    },
  }),
};

const AVATARS = [
  "/images/reviews/1.png",
  "/images/reviews/2.png",
  "/images/reviews/3.png",
] as const;

/** Sharp 5-point star — solid black, no soft lucide curves. */
function SharpStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("size-3 shrink-0", className)}
    >
      <path
        fill="currentColor"
        d="M12 1.6 14.94 8.3l7.26.74-5.46 4.72 1.6 7.12L12 17.28 5.66 20.88l1.6-7.12L1.8 9.04l7.26-.74L12 1.6Z"
      />
    </svg>
  );
}

function HeroCta() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <SmoothAnchor
      href={CTA_NAV.href}
      className={cn(
        "group inline-flex items-center rounded-full bg-neutral-950 py-1.5 pl-1.5 pr-5",
        "shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
        "transition-[transform,box-shadow] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.22)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        "dark:bg-neutral-950"
      )}
    >
      <span
        aria-hidden
        className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-[13px] font-bold text-neutral-950"
      >
        {SITE.name.charAt(0)}
      </span>

      <span
        className={cn(
          "grid min-w-0 overflow-hidden transition-[grid-template-columns,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          reduceMotion
            ? "grid-cols-[1fr] opacity-100"
            : "grid-cols-[0fr] opacity-90 group-hover:grid-cols-[1fr] group-hover:opacity-100 group-focus-visible:grid-cols-[1fr] group-focus-visible:opacity-100"
        )}
      >
        <span className="flex min-w-0 items-center overflow-hidden">
          <span className="whitespace-nowrap px-1.5 text-sm font-medium text-white/70">
            +
          </span>
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#2b7fff] text-[11px] font-semibold text-white">
            You
          </span>
        </span>
      </span>

      <span
        className={cn(
          "text-sm font-medium text-white transition-[margin] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          reduceMotion
            ? "ml-2.5"
            : "ml-2 group-hover:ml-2.5 group-focus-visible:ml-2.5"
        )}
      >
        Book a 30-Min call
      </span>
    </SmoothAnchor>
  );
}

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative isolate bg-transparent">
      <Container
        size="wide"
        className="relative z-10 flex w-full flex-col items-center justify-center pt-[calc(var(--header-height)+2.5rem)] pb-16 text-center md:pb-24"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="mb-6"
          >
            <SmoothAnchor
              href={CTA_NAV.href}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/80 px-3.5 py-1.5",
                "text-[13px] font-medium text-foreground shadow-soft-xs backdrop-blur-md",
                "transition-colors duration-300 hover:bg-white",
                "dark:border-white/12 dark:bg-white/8 dark:hover:bg-white/12"
              )}
            >
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/50" />
                <span className="relative size-2 rounded-full bg-emerald-500" />
              </span>
              Now accepting new projects
              <span aria-hidden className="text-muted-foreground">
                →
              </span>
            </SmoothAnchor>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="font-semibold tracking-[var(--tracking-tight)] text-[clamp(2.15rem,5.4vw,3.75rem)] leading-[1.08] text-foreground"
          >
            <span className="block">We Build Software</span>
            <span className="block">That Grows Businesses.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="mt-5 max-w-lg text-pretty text-[0.9875rem] leading-relaxed text-muted-foreground md:text-base"
          >
            Custom SaaS, AI products, and business software for startups and
            enterprises—designed, built, and launched as lasting products.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="mt-8 flex flex-col items-center"
          >
            <HeroCta />

            <div
              className={cn(
                "mt-5 inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/50 px-3 py-1.5",
                "backdrop-blur-md dark:border-white/12 dark:bg-white/5"
              )}
            >
              <span className="flex" aria-hidden>
                {AVATARS.map((src, i) => (
                  <span
                    key={src}
                    className={cn(
                      "relative size-6 overflow-hidden rounded-full border-2 border-background",
                      i > 0 && "-ml-1.5"
                    )}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="24px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </span>
              <span className="text-[12px] font-medium text-muted-foreground">
                30+ projects
              </span>
              <span className="h-3 w-px bg-border" aria-hidden />
              <span className="flex items-center gap-1 text-[12px] font-medium text-foreground">
                5.0
                <span
                  className="ml-0.5 flex items-center gap-px text-neutral-950 dark:text-white"
                  aria-hidden
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SharpStar key={i} />
                  ))}
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="relative z-10">
        <WorkShowcase />
      </div>
    </section>
  );
}
