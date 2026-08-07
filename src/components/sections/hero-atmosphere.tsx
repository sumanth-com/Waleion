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
      {/* Base wash */}
      <div
        className="absolute inset-0"
        style={{
          background: isHero
            ? `
              radial-gradient(ellipse 90% 55% at 50% -8%, var(--hero-glow-soft), transparent 58%),
              radial-gradient(ellipse 50% 40% at 18% 30%, color-mix(in oklch, var(--hero-glow) 18%, transparent), transparent 70%),
              radial-gradient(ellipse 45% 35% at 82% 42%, color-mix(in oklch, var(--hero-glow) 14%, transparent), transparent 72%),
              radial-gradient(ellipse 70% 50% at 50% 100%, color-mix(in oklch, var(--hero-glow) 12%, transparent), transparent 65%),
              var(--hero-bg)
            `
            : `
              radial-gradient(ellipse 85% 45% at 50% -5%, color-mix(in oklch, var(--hero-glow-soft) 70%, transparent), transparent 60%),
              radial-gradient(ellipse 55% 40% at 20% 40%, color-mix(in oklch, var(--hero-glow) 12%, transparent), transparent 72%),
              radial-gradient(ellipse 50% 35% at 80% 55%, color-mix(in oklch, var(--hero-glow) 10%, transparent), transparent 74%),
              radial-gradient(ellipse 65% 45% at 50% 110%, color-mix(in oklch, var(--hero-glow) 10%, transparent), transparent 68%),
              transparent
            `,
        }}
      />

      {/* Top glow arc */}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2",
          isHero
            ? "top-[-2%] h-[42%] w-[120%] max-w-[1400px]"
            : "top-[-8%] h-[36%] w-[110%] max-w-[1200px] opacity-70"
        )}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse 55% 35% at 50% 18%,
                var(--hero-glow-core) 0%,
                var(--hero-glow-soft) ${isHero ? "48%" : "42%"},
                transparent 72%
              )
            `,
            filter: isHero
              ? "blur(2px)"
              : "blur(4px)",
            opacity: isHero ? 1 : 0.75,
          }}
        />
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 rounded-[100%]",
            isHero
              ? "top-[18%] h-px w-[58%] max-w-[720px]"
              : "top-[22%] h-px w-[48%] max-w-[560px]"
          )}
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--hero-glow-core), var(--hero-glow), var(--hero-glow-core), transparent)",
            boxShadow: isHero
              ? `
                0 0 18px 2px var(--hero-glow-soft),
                0 0 48px 8px color-mix(in oklch, var(--hero-glow) 45%, transparent),
                0 12px 60px 4px color-mix(in oklch, var(--hero-glow) 25%, transparent)
              `
              : `
                0 0 14px 1px color-mix(in oklch, var(--hero-glow-soft) 80%, transparent),
                0 0 36px 6px color-mix(in oklch, var(--hero-glow) 30%, transparent)
              `,
          }}
        />
      </div>

      {/* Soft beams */}
      <div
        ref={layerRef}
        className={cn(
          "absolute inset-0 will-change-transform",
          !reduceMotion && isHero && "transition-transform duration-700 ease-out"
        )}
      >
        <div
          className={cn(
            "absolute top-[8%] left-[12%] h-[55%] w-[28%] -rotate-[18deg] rounded-full blur-3xl",
            isHero ? "opacity-100" : "opacity-50"
          )}
          style={{
            background:
              "linear-gradient(180deg, var(--hero-beam), transparent 70%)",
          }}
        />
        <div
          className={cn(
            "absolute top-[6%] right-[10%] h-[50%] w-[26%] rotate-[16deg] rounded-full blur-3xl",
            isHero ? "opacity-100" : "opacity-45"
          )}
          style={{
            background:
              "linear-gradient(180deg, var(--hero-beam), transparent 70%)",
          }}
        />
        <div
          className={cn(
            "absolute top-[4%] left-1/2 h-[48%] w-[18%] -translate-x-1/2 rounded-full blur-3xl",
            isHero ? "opacity-100" : "opacity-40"
          )}
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklch, var(--hero-glow) 35%, transparent), transparent 75%)",
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

      {/* Bottom fade — hero only, blends into next section */}
      {isHero && (
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(180deg, transparent, var(--hero-bg))",
          }}
        />
      )}
    </div>
  );
}

/** Soft continuous atmosphere for content sections */
export function SectionAtmosphere({ className }: { className?: string }) {
  return <HeroAtmosphere variant="section" className={className} />;
}
