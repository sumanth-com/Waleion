"use client";

import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
