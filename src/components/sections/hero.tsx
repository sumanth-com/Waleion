"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
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

function HeroCta() {
  return (
    <SmoothAnchor
      href={CTA_NAV.href}
      className={cn(
        "group inline-flex items-center rounded-full bg-neutral-950 py-1.5 pl-1.5 pr-5",
        "shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
        "transition-transform duration-300 hover:-translate-y-0.5",
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

      <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr]">
        <span className="flex min-w-0 items-center overflow-hidden">
          <span className="px-1.5 text-sm font-medium text-white/70">+</span>
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#2b7fff] text-[11px] font-semibold text-white">
            You
          </span>
        </span>
      </span>

      <span className="ml-2.5 text-sm font-medium text-white">
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
                <span className="flex" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-3 fill-foreground text-foreground"
                    />
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
