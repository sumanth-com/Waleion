"use client";

import { AnimatePresence, motion, usePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { easings } from "@/lib/animations";
import { isHomeCanvas, sectionForPath } from "@/constants/homepage";

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

/**
 * macOS-style window open/close.
 * Pages overlap — the next screen is visible immediately, no empty frame.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const transitionKey = isHomeCanvas(pathname) ? "home" : pathname;

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (sectionForPath(pathname)) return;
    window.scrollTo(0, 0);
  }, [transitionKey, pathname]);

  if (reduceMotion) return <>{children}</>;

  return (
    <div className="relative min-h-dvh overflow-x-clip">
      <AnimatePresence initial={false}>
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
          className="min-h-dvh w-full bg-transparent"
        >
          <Frozen>{children}</Frozen>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
