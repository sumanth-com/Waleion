"use client";

import Image from "next/image";
import Link from "next/link";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/animations/reveal";
import { buttonVariants } from "@/components/ui/button";
import aboutHeroBg from "@/assets/about.png";
import { aboutPageCopy } from "@/data/about-page";
import { cn } from "@/lib/utils";

export function AboutHero() {
  const { hero } = aboutPageCopy;

  return (
    <section className="relative box-border flex h-svh max-h-svh w-full shrink-0 flex-col overflow-hidden bg-[#f5f0e8] pt-[var(--header-height)] dark:bg-[#12100e]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={aboutHeroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center dark:brightness-[0.92]"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_45%,rgba(255,252,247,0.55),transparent_68%)] dark:bg-[radial-gradient(ellipse_75%_60%_at_50%_45%,rgba(18,16,14,0.45),transparent_68%)]"
        aria-hidden
      />

      <Container
        size="wide"
        className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center text-center"
      >
        <FadeUp className="mx-auto flex max-w-3xl flex-col items-center">
          <Eyebrow className="mb-4">{hero.label}</Eyebrow>
          <h1 className="text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.75rem,3.8vw,3rem)] leading-[1.12] text-foreground">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-foreground/80 md:text-[0.9875rem]">
            {hero.description}
          </p>
          <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
            {hero.supporting}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-6 dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
              )}
            >
              {hero.primaryCta}
            </Link>
            <SmoothAnchor
              href="/work"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-black/10 bg-white/70 px-6 backdrop-blur-sm hover:bg-white/90 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              )}
            >
              {hero.secondaryCta}
            </SmoothAnchor>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
