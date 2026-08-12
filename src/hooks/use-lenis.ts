"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

type UseLenisOptions = {
  enabled?: boolean;
};

/**
 * Initializes Lenis smooth scroll. Disabled when the user prefers reduced motion.
 * Keeps scroll height in sync when images/layout change so the footer stays reachable.
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
      autoResize: true,
    });

    lenisRef.current = lenis;
    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    let resizeRaf = 0;
    const resize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        lenis.resize();
      });
    };

    window.addEventListener("resize", resize);
    window.addEventListener("load", resize);

    const root = document.documentElement;
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => resize())
        : null;
    ro?.observe(root);
    if (document.body) ro?.observe(document.body);

    const onImgLoad = (event: Event) => {
      if (event.target instanceof HTMLImageElement) resize();
    };
    document.addEventListener("load", onImgLoad, true);

    // Late layout passes after fonts / async images
    const t1 = window.setTimeout(resize, 120);
    const t2 = window.setTimeout(resize, 600);
    const t3 = window.setTimeout(resize, 1600);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeRaf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.removeEventListener("resize", resize);
      window.removeEventListener("load", resize);
      document.removeEventListener("load", onImgLoad, true);
      ro?.disconnect();
      lenis.destroy();
      lenisRef.current = null;
      delete (window as Window & { __lenis?: Lenis }).__lenis;
    };
  }, [enabled, prefersReducedMotion]);

  return lenisRef;
}
