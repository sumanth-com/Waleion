"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HeroAtmosphere } from "@/components/sections/hero-atmosphere";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { CTA_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { easings } from "@/lib/animations";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.08,
      duration: 0.7,
      ease: easings.outExpo,
    },
  }),
};

const STATS = [
  { value: "30+", label: "Projects Delivered" },
  { value: "AI", label: "Solutions" },
  { value: "100%", label: "Custom Built" },
  { value: "End-to-End", label: "Development" },
] as const;

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden bg-[var(--hero-bg)]">
      <HeroAtmosphere />

      <Container
        size="wide"
        className="relative z-10 flex w-full flex-col items-center justify-center py-[calc(var(--header-height)+2rem)] text-center"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="mb-6"
          >
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-md",
                "dark:border-white/15 dark:bg-white/5 dark:text-white/75",
                "transition-all duration-300 hover:border-[color-mix(in_oklch,var(--hero-glow)_45%,var(--border))] hover:shadow-[0_0_24px_var(--hero-glow-soft)]"
              )}
            >
              <Sparkles className="size-3 text-[var(--hero-glow)]" />
              Trusted by startups, founders & growing businesses
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.65rem,4.2vw,3.25rem)] leading-[1.12]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--hero-headline-from) 35%, var(--hero-headline-to) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            <span className="block text-center sm:whitespace-nowrap">
              We Build Software That
            </span>
            <span className="block text-center sm:whitespace-nowrap">
              Moves Businesses Forward.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="mt-5 max-w-2xl text-pretty text-body-lg text-muted-foreground"
          >
            Waleion partners with startups, SMEs, and enterprises to design and
            develop high-quality software—from AI applications and SaaS
            platforms to business websites, automation systems, and enterprise
            solutions.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href={CTA_NAV.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-6 shadow-[0_0_0_0_transparent] transition-all duration-300",
                "hover:-translate-y-0.5 hover:shadow-[0_0_32px_var(--hero-glow-soft)]",
                "dark:bg-white dark:text-neutral-900 dark:hover:bg-white/95"
              )}
            >
              Start Your Project
            </Link>
            <Link
              href="/work"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-border/80 bg-background/30 px-6 backdrop-blur-md transition-all duration-300",
                "hover:-translate-y-0.5 hover:border-[color-mix(in_oklch,var(--hero-glow)_40%,var(--border))] hover:bg-background/50 hover:shadow-[0_0_28px_var(--hero-glow-soft)]",
                "dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              )}
            >
              Explore Our Work
            </Link>
          </motion.div>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="mt-5 max-w-md text-sm text-muted-foreground"
          >
            Trusted by founders building the next generation of digital
            products.
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
