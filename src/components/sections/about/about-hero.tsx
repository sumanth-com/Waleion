"use client";

import Link from "next/link";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/animations/reveal";
import { buttonVariants } from "@/components/ui/button";
import { aboutPageCopy } from "@/data/about-page";
import { cn } from "@/lib/utils";

export function AboutHero() {
  const { hero } = aboutPageCopy;
  const [line1, line2] = hero.title.split("\n");

  return (
    <section className="relative bg-transparent">
      <Container
        size="wide"
        className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-[calc(var(--header-height)+3rem)] text-center"
      >
        <FadeUp className="mx-auto flex max-w-3xl flex-col items-center">
          <Eyebrow className="mb-4">{hero.label}</Eyebrow>
          <h1 className="text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.75rem,3.8vw,3.1rem)] leading-[1.12] text-foreground">
            {line1}
            <br />
            {line2}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-6 dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
              )}
            >
              Start Your Project
            </Link>
            <SmoothAnchor
              href="/work"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-6 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              )}
            >
              View Our Work
            </SmoothAnchor>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
