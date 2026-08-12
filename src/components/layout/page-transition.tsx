"use client";

import { AnimatePresence, motion, usePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { easings } from "@/lib/animations";
import { isHomeCanvas, sectionForPath } from "@/constants/homepage";
import { resetPageScroll, shouldSkipPageTransition } from "@/lib/scroll-reset";

const EASE = easings.springSoft;

function dockOrigin() {
  if (typeof window === "undefined") return "50% 100%";
  return `50% ${Math.round(window.scrollY + window.innerHeight)}px`;
}

function Frozen({ children }: { children: ReactNode }) {
  const [isPresent] = usePresence();
  const cache = useRef(children);
  if (isPresent) cache.current = children;
  return <>{cache.current}</>;
}

function useScrollToTop(pathname: string, enabled: boolean) {
  useEffect(() => {
    if (!enabled || sectionForPath(pathname)) return;

    resetPageScroll();

    const raf = requestAnimationFrame(resetPageScroll);
    const timers = [0, 50, 120, 400].map((ms) =>
      window.setTimeout(resetPageScroll, ms)
    );

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(window.clearTimeout);
    };
  }, [pathname, enabled]);
}

/**
 * macOS-style window open/close.
 * Pages overlap — the next screen is visible immediately, no empty frame.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const transitionKey = isHomeCanvas(pathname) ? "home" : pathname;
  const skipTransition = shouldSkipPageTransition(pathname);

  useScrollToTop(pathname, !sectionForPath(pathname));

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const lenis = (window as Window & { __lenis?: { resize: () => void } }).__lenis;
    const id = window.setTimeout(() => lenis?.resize(), 420);
    return () => window.clearTimeout(id);
  }, [transitionKey]);

  if (reduceMotion || skipTransition) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <div className="relative w-full">
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => {
          resetPageScroll();
          (window as Window & { __lenis?: { resize: () => void } }).__lenis?.resize();
        }}
      >
        <motion.div
          key={transitionKey}
          initial="enter"
          animate="rest"
          exit="leave"
          variants={{
            enter: { opacity: 1, scaleX: 0.92, scaleY: 0.92, y: 24 },
            rest: { opacity: 1, scaleX: 1, scaleY: 1, y: 0 },
            leave: () => ({
              opacity: 0,
              scaleX: 0.42,
              scaleY: 0.14,
              y: 80,
              position: "absolute" as const,
              top: 0,
              left: 0,
              right: 0,
              transformOrigin: dockOrigin(),
            }),
          }}
          transition={{
            duration: 0.38,
            ease: EASE,
            opacity: { duration: 0.22, ease: EASE },
            transformOrigin: { duration: 0 },
          }}
          style={{ transformOrigin: "50% 100%" }}
          className="w-full bg-transparent"
        >
          <Frozen>{children}</Frozen>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
