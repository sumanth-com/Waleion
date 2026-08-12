"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { easings } from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type GrowthChartProps = {
  color: string;
  label: string;
  value: string;
  story: string;
  className?: string;
};

const LINE =
  "M0 78 C 28 78, 36 62, 58 58 C 86 52, 96 84, 124 70 C 148 58, 164 28, 196 34 C 228 40, 236 18, 268 22 C 292 24, 304 12, 320 8";
const AREA = `${LINE} L 320 110 L 0 110 Z`;

/** Keep chart stroke readable on the dark panel when brand is near-black. */
function chartAccent(hex: string) {
  const raw = hex.replace("#", "");
  if (raw.length !== 6) return hex;
  const r = parseInt(raw.slice(0, 2), 16);
  const g = parseInt(raw.slice(2, 4), 16);
  const b = parseInt(raw.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.28 ? "#5eead4" : hex;
}

/**
 * Growth close — fades in on scroll, line draws once and stays visible.
 */
export function GrowthChart({
  color,
  label,
  value,
  story,
  className,
}: GrowthChartProps) {
  const reduceMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.35,
    margin: "0px 0px -8% 0px",
  });
  const play = reduceMotion || inView;
  const accent = chartAccent(color);

  return (
    <motion.section
      ref={ref}
      className={cn("overflow-hidden rounded-[28px] p-6 md:p-10", className)}
      style={{
        background: `radial-gradient(ellipse 70% 80% at 85% 50%, ${accent}40, transparent 62%), #111`,
      }}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.75, ease: easings.outExpo }}
    >
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <motion.span
            className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/70"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.55, delay: 0.08, ease: easings.outExpo }}
          >
            Growth
          </motion.span>
          <motion.h2
            className="mt-4 text-[clamp(1.5rem,3vw,2.1rem)] font-semibold tracking-tight text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.65, delay: 0.14, ease: easings.outExpo }}
          >
            It’s compounding.
          </motion.h2>
          <motion.p
            className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.65, delay: 0.22, ease: easings.outExpo }}
          >
            {story}
          </motion.p>
        </div>

        <motion.div
          className="rounded-[22px] border border-white/10 bg-black/40 p-5 shadow-[0_0_48px_color-mix(in_srgb,var(--glow)_35%,transparent)]"
          style={{ ["--glow" as string]: accent }}
          initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.97 }}
          animate={
            play
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 20, scale: 0.97 }
          }
          transition={{ duration: 0.7, delay: 0.18, ease: easings.outExpo }}
        >
          <div className="flex justify-end">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/12 px-2.5 py-1 text-[11px] text-white/55">
              Monthly
              <span aria-hidden className="text-[9px]">
                ▾
              </span>
            </span>
          </div>

          <p className="mt-8 text-[11px] uppercase tracking-[0.16em] text-white/45">
            {label}
          </p>
          <motion.p
            className="mt-1 flex items-center gap-2 text-[2.4rem] font-semibold tracking-tight text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.55, delay: 0.32, ease: easings.outExpo }}
          >
            {value}
            <span
              aria-hidden
              className="mb-1 inline-block border-x-[5px] border-b-[8px] border-x-transparent"
              style={{ borderBottomColor: accent }}
            />
          </motion.p>

          <svg
            viewBox="0 0 320 110"
            className="mt-4 h-[88px] w-full overflow-visible"
            aria-hidden
          >
            <defs>
              <linearGradient id="growth-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={accent} stopOpacity="0.45" />
                <stop offset="100%" stopColor={accent} stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d={AREA}
              fill="url(#growth-area)"
              initial={{ opacity: 0 }}
              animate={{ opacity: play ? 1 : 0 }}
              transition={{
                duration: 0.7,
                delay: reduceMotion ? 0 : 0.85,
                ease: easings.outExpo,
              }}
            />
            <motion.path
              d={LINE}
              fill="none"
              stroke={accent}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
                opacity: reduceMotion ? 1 : 0,
              }}
              animate={{
                pathLength: play ? 1 : 0,
                opacity: play ? 1 : 0,
              }}
              transition={{
                pathLength: {
                  duration: reduceMotion ? 0 : 1.15,
                  delay: reduceMotion ? 0 : 0.4,
                  ease: easings.outExpo,
                },
                opacity: {
                  duration: 0.25,
                  delay: reduceMotion ? 0 : 0.4,
                },
              }}
            />
            <motion.circle
              cx="320"
              cy="8"
              r="4"
              fill={accent}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: play ? 1 : 0,
                scale: play ? 1 : 0.5,
              }}
              transition={{
                duration: 0.35,
                delay: reduceMotion ? 0 : 1.35,
                ease: easings.outExpo,
              }}
            />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
}
