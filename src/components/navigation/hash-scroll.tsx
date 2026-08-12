"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { isHomeCanvas, scrollToId, sectionForPath } from "@/constants/homepage";

/**
 * Refresh and inbound nav: `/work` and `/expertise` open on that section.
 * In-canvas clicks are handled by SmoothAnchor so we don't kill the smooth scroll.
 */
export function HashScroll() {
  const pathname = usePathname();
  const previous = useRef<string | null>(null);

  useLayoutEffect(() => {
    const section = sectionForPath(pathname);
    const from = previous.current;
    previous.current = pathname;

    if (!section) return;
    if (from !== null && isHomeCanvas(from) && isHomeCanvas(pathname)) return;

    scrollToId(section, "auto");
    const frame = window.requestAnimationFrame(() => {
      scrollToId(section, "auto");
      (window as Window & { __lenis?: { resize: () => void } }).__lenis?.resize();
    });
    const timer = window.setTimeout(() => {
      scrollToId(section, "auto");
      (window as Window & { __lenis?: { resize: () => void } }).__lenis?.resize();
    }, 80);
    const later = window.setTimeout(() => {
      (window as Window & { __lenis?: { resize: () => void } }).__lenis?.resize();
    }, 700);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.clearTimeout(later);
    };
  }, [pathname]);

  return null;
}
