"use client";

import type { ReactNode } from "react";
import { useLenis } from "@/hooks/use-lenis";

type SmoothScrollProps = {
  children: ReactNode;
};

/**
 * Lenis smooth-scroll shell. Respects prefers-reduced-motion via useLenis.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  useLenis();
  return <>{children}</>;
}
