"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useEffect, type ReactNode } from "react";
import { easings } from "@/lib/animations";
import { isHomeCanvas, sectionForPath } from "@/constants/homepage";
import { resetPageScroll } from "@/lib/scroll-reset";

/**
 * Instant route swap + short fade. No wait / freeze — new page content
 * is visible on the first paint after navigation.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const transitionKey = isHomeCanvas(pathname) ? "home" : pathname;

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useLayoutEffect(() => {
    if (sectionForPath(pathname)) return;
    resetPageScroll();
  }, [pathname]);

  useEffect(() => {
    if (sectionForPath(pathname)) return;

    const raf = requestAnimationFrame(resetPageScroll);
    const timers = [40, 160].map((ms) => window.setTimeout(resetPageScroll, ms));

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(window.clearTimeout);
    };
  }, [pathname]);

  if (reduceMotion) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <motion.div
      key={transitionKey}
      initial={{ opacity: 0.01 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.18, ease: easings.outExpo }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
