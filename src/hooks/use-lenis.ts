"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

type UseLenisOptions = {
  enabled?: boolean;
};

/**
 * Initializes Lenis smooth scroll. Disabled when the user prefers reduced motion.
 */
export function useLenis({ enabled = true }: UseLenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!enabled || prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as Window & { __lenis?: Lenis }).__lenis;
    };
  }, [enabled, prefersReducedMotion]);

  return lenisRef;
}
