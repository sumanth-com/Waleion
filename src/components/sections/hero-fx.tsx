"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Hero motion layer — dot grid, breathing glow, bottom aurora, mouse parallax.
 */
export function HeroFx() {
  const reduceMotion = useReducedMotion();
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const layer = glowRef.current;
    if (!layer) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.45] dark:opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, color-mix(in oklch, var(--foreground) 18%, transparent) 1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 42%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 42%, black 20%, transparent 75%)",
        }}
      />

      <div
        ref={glowRef}
        className={cn(
          "absolute inset-0 will-change-transform",
          !reduceMotion && "transition-transform duration-700 ease-out"
        )}
      >
        <div
          className={cn(
            "absolute left-1/2 top-[42%] h-[28rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full",
            "bg-[radial-gradient(circle,var(--hero-glow-soft)_0%,transparent_68%)]",
            "blur-2xl opacity-70 dark:opacity-90",
            !reduceMotion && "hero-glow-breathe"
          )}
        />
      </div>

      <div
        className={cn(
          "absolute inset-x-[-10%] bottom-[-18%] h-[42%] rounded-[100%]",
          "bg-[radial-gradient(ellipse_at_center,var(--hero-glow)_0%,transparent_70%)]",
          "opacity-40 blur-3xl dark:opacity-70",
          !reduceMotion && "hero-arc-breathe"
        )}
      />
    </div>
  );
}
