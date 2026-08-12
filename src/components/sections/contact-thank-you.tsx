"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowLeft, ArrowUpRight, CalendarCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const RIPPLES = [0, 0.18, 0.36] as const;

const STEPS = [
  { label: "Brief received", detail: "Saved securely with your details" },
  { label: "Team review", detail: "We read every message carefully" },
  { label: "Personal reply", detail: "Expect a response within 1 business day" },
] as const;

function buildParticles(count: number) {
  return Array.from({ length: count }, (_, index) => {
    const angle = (index / count) * Math.PI * 2 + (index % 2 ? 0.12 : -0.08);
    const distance = 56 + (index % 5) * 10;
    return {
      id: index,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      size: 4 + (index % 3),
      delay: 0.38 + (index % 4) * 0.04,
    };
  });
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SuccessBurst({ reduced }: { reduced: boolean }) {
  const particles = useMemo(() => buildParticles(18), []);

  if (reduced) {
    return (
      <div className="relative mx-auto grid size-[5.5rem] place-items-center rounded-full bg-emerald-500 shadow-[0_16px_40px_rgba(16,185,129,0.35)]">
        <svg viewBox="0 0 64 64" className="size-8 text-white" aria-hidden>
          <path
            d="M18 33 L28 43 L46 23"
            fill="none"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative mx-auto size-[5.5rem]">
      {RIPPLES.map((delay) => (
        <motion.span
          key={delay}
          className="pointer-events-none absolute inset-0 rounded-full border-2 border-emerald-400/50"
          initial={{ scale: 0.55, opacity: 0.65 }}
          animate={{ scale: 2.35, opacity: 0 }}
          transition={{
            duration: 1.8,
            delay: 0.15 + delay,
            ease: [0.22, 1, 0.36, 1],
            repeat: Infinity,
            repeatDelay: 0.55,
          }}
          aria-hidden
        />
      ))}

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full bg-emerald-400"
          style={{
            width: particle.size,
            height: particle.size,
            marginLeft: -particle.size / 2,
            marginTop: -particle.size / 2,
          }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: [0, 1, 0],
            scale: [0, 1, 0.35],
          }}
          transition={{
            duration: 0.85,
            delay: particle.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-hidden
        />
      ))}

      <motion.div
        className="relative z-10 grid size-full place-items-center rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 shadow-[0_18px_44px_rgba(16,185,129,0.42)]"
        initial={{ scale: 0, rotate: -18 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 16,
          delay: 0.08,
        }}
      >
        <svg viewBox="0 0 64 64" className="size-9 text-white" aria-hidden>
          <motion.path
            d="M18 33 L28 43 L46 23"
            fill="none"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 0.45, delay: 0.42, ease: "easeOut" },
              opacity: { duration: 0.12, delay: 0.42 },
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

function ContactThankYouContent() {
  const searchParams = useSearchParams();
  const reduced = useReducedMotion();
  const rawName = searchParams.get("name")?.trim() ?? "";
  const firstName = rawName.split(/\s+/)[0]?.slice(0, 32) ?? "";

  return (
    <section className="relative min-h-[calc(100dvh-var(--header-height))] overflow-hidden bg-transparent">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(16,185,129,0.14),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[18%] size-[28rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden
      />

      <Container
        size="narrow"
        className="relative z-10 flex min-h-[calc(100dvh-var(--header-height))] flex-col items-center justify-center py-[calc(var(--header-height)+2rem)] pb-16"
      >
        <motion.div
          className="w-full max-w-lg rounded-[1.85rem] border border-black/[0.06] bg-white/92 px-6 py-10 text-center shadow-[0_24px_64px_rgba(0,0,0,0.07)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] sm:px-10 sm:py-12"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SuccessBurst reduced={!!reduced} />

          <motion.p
            className="mt-7 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-200"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
          >
            <Sparkles className="size-3" aria-hidden />
            Message sent
          </motion.p>

          <motion.h1
            className="mt-4 text-balance text-[clamp(1.65rem,4vw,2.25rem)] font-semibold leading-[1.12] tracking-[var(--tracking-tight)] text-foreground"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.62}
          >
            {firstName ? (
              <>
                You&apos;re in,{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  {firstName}
                </span>
                .
              </>
            ) : (
              "You're officially on our radar."
            )}
          </motion.h1>

          <motion.p
            className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.7}
          >
            Your project brief reached the {SITE.name} team. We&apos;ll review
            what you shared and reply with thoughtful next steps — usually
            within one business day.
          </motion.p>

          <motion.ul
            className="mt-8 space-y-2.5 text-left"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.78}
          >
            {STEPS.map((step, index) => (
              <motion.li
                key={step.label}
                className="flex items-start gap-3 rounded-2xl border border-black/[0.05] bg-neutral-50/80 px-3.5 py-3 dark:border-white/10 dark:bg-white/[0.04]"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.85 + index * 0.1,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-emerald-500/12 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                  {index + 1}
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold tracking-tight text-foreground">
                    {step.label}
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-snug text-muted-foreground">
                    {step.detail}
                  </span>
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:justify-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.05}
          >
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-full px-6",
                "dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
              )}
            >
              Back to home
              <ArrowUpRight className="size-3.5" aria-hidden />
            </Link>
            <Link
              href="/work"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-full px-6"
              )}
            >
              Explore our work
            </Link>
          </motion.div>

          <motion.p
            className="mt-6 inline-flex items-center justify-center gap-1.5 text-[12px] text-muted-foreground"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.12}
          >
            <CalendarCheck className="size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
            Sat &amp; Sun are high-demand days — we often respond faster on weekends.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            Send another message
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

export function ContactThankYou() {
  return <ContactThankYouContent />;
}
