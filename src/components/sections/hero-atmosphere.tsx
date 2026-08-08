"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";

type AtmosphereVariant = "hero" | "section";

type HeroAtmosphereProps = {
  className?: string;
  /** `hero` = full intensity (homepage hero). `section` = softer continuous glow. */
  variant?: AtmosphereVariant;
};

type Particle = {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

function createParticles(count: number, seed: number): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const n = ((i * 37 + seed * 17) % 100) / 100;
    const m = ((i * 53 + seed * 29) % 100) / 100;
    const o = ((i * 71 + seed * 41) % 100) / 100;
    return {
      left: `${8 + n * 84}%`,
      top: `${10 + m * 75}%`,
      size: 1 + (i % 3) * 0.55,
      delay: o * 4,
      duration: 5 + n * 5,
      opacity: 0.2 + m * 0.45,
    };
  });
}

export function HeroAtmosphere({
  className,
  variant = "hero",
}: HeroAtmosphereProps) {
  const reduceMotion = useReducedMotion();
  const layerRef = useRef<HTMLDivElement>(null);
  const isHero = variant === "hero";

  const particles = useMemo(
    () => createParticles(isHero ? 28 : 14, isHero ? 1 : 7),
    [isHero]
  );

  useEffect(() => {
    if (reduceMotion || !isHero) return;
    const layer = layerRef.current;
    if (!layer) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion, isHero]);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* Soft ambient wash — no top glow behind the navbar */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 45% 35% at 12% 45%, color-mix(in oklch, var(--hero-glow) 10%, transparent), transparent 72%),
            radial-gradient(ellipse 40% 30% at 88% 55%, color-mix(in oklch, var(--hero-glow) 8%, transparent), transparent 74%),
            radial-gradient(ellipse 60% 40% at 50% 100%, color-mix(in oklch, var(--hero-glow) 8%, transparent), transparent 68%)
          `,
        }}
      />

      {/* Soft side beams — kept low so they don't sit behind the nav */}
      <div
        ref={layerRef}
        className={cn(
          "absolute inset-0 will-change-transform",
          !reduceMotion && isHero && "transition-transform duration-700 ease-out"
        )}
      >
        <div
          className="absolute top-[28%] left-[8%] h-[40%] w-[24%] -rotate-[18deg] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "linear-gradient(180deg, var(--hero-beam), transparent 70%)",
          }}
        />
        <div
          className="absolute top-[32%] right-[6%] h-[36%] w-[22%] rotate-[16deg] rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "linear-gradient(180deg, var(--hero-beam), transparent 70%)",
          }}
        />
      </div>

      {/* Particles / stardust */}
      {!reduceMotion &&
        particles.map((p, i) => (
          <span
            key={`${variant}-${i}`}
            className="absolute rounded-full bg-[var(--hero-particle)]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: isHero ? p.opacity : p.opacity * 0.7,
              boxShadow: "0 0 6px var(--hero-glow-soft)",
              animation: `hero-particle-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
    </div>
  );
}

/** Soft continuous atmosphere for content sections */
export function SectionAtmosphere({ className }: { className?: string }) {
  return <HeroAtmosphere variant="section" className={className} />;
}

/** One fixed canvas glow for the whole site — no per-section bands */
export function SiteAtmosphere({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <HeroAtmosphere variant="hero" className="!absolute inset-0" />
    </div>
  );
}
