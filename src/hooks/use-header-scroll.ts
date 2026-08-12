"use client";

import { useEffect, useState } from "react";
import type Lenis from "lenis";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

type UseHeaderScrollOptions = {
  /** Switch to the solid header after this offset */
  threshold?: number;
  pathname?: string;
};

function getLenis() {
  return (window as Window & { __lenis?: Lenis }).__lenis;
}

function getScrollY() {
  return getLenis()?.scroll ?? window.scrollY;
}

/**
 * True once the page has left the hero — used to switch the navbar
 * from transparent to a solid background.
 */
export function useHeaderScroll({
  threshold = 24,
  pathname,
}: UseHeaderScrollOptions = {}) {
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    let unsub: (() => void) | undefined;
    let pollId = 0;

    const update = (y: number) => {
      setScrolled(y > threshold);
    };

    const onNativeScroll = () => update(window.scrollY);

    const attachLenis = () => {
      const lenis = getLenis();
      if (!lenis) return false;
      if (unsub) return true;
      unsub = lenis.on("scroll", (instance) => update(instance.scroll));
      update(lenis.scroll);
      return true;
    };

    window.addEventListener("scroll", onNativeScroll, { passive: true });
    update(getScrollY());

    if (!attachLenis()) {
      pollId = window.setInterval(() => {
        if (attachLenis()) window.clearInterval(pollId);
      }, 50);
    }

    return () => {
      window.clearInterval(pollId);
      window.removeEventListener("scroll", onNativeScroll);
      unsub?.();
    };
  }, [threshold]);

  useEffect(() => {
    if (!pathname) return;
    setScrolled(getScrollY() > threshold);
  }, [pathname, threshold]);

  return { scrolled, prefersReducedMotion };
}
