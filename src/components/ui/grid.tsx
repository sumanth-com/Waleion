import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GridProps = {
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: ReactNode;
};

const colsClass = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

const gapClass = {
  sm: "gap-4",
  md: "gap-6 md:gap-8",
  lg: "gap-8 md:gap-10",
  xl: "gap-10 md:gap-14",
} as const;

/**
 * Responsive product-studio grid. Prefer generous gaps over dense cards.
 */
export function Grid({
  cols = 3,
  gap = "md",
  className,
  children,
}: GridProps) {
  return (
    <div className={cn("grid", colsClass[cols], gapClass[gap], className)}>
      {children}
    </div>
  );
}

type StackProps = {
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  children: ReactNode;
};

const stackGap = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
} as const;

export function Stack({ gap = "md", className, children }: StackProps) {
  return (
    <div className={cn("flex flex-col", stackGap[gap], className)}>
      {children}
    </div>
  );
}
