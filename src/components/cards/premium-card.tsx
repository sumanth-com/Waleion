"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { hoverLift } from "@/lib/animations";

type PremiumCardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

/**
 * Premium homepage card — large radius, soft shadow, thin border, generous padding.
 * Hover: soft elevation + subtle scale. No glows or heavy gradients.
 */
export function PremiumCard({
  children,
  className,
  interactive = true,
}: PremiumCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const classes = cn(
    "rounded-3xl border border-border/70 bg-card p-6 shadow-soft-sm md:p-8",
    "transition-[box-shadow,border-color] duration-300",
    interactive && "hover:border-border hover:shadow-soft-md",
    className
  );

  if (interactive && !prefersReducedMotion) {
    return (
      <motion.article className={classes} {...hoverLift}>
        {children}
      </motion.article>
    );
  }

  return <article className={classes}>{children}</article>;
}

export function PremiumCardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-base font-medium tracking-tight text-foreground md:text-lg",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function PremiumCardBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-2 text-sm leading-relaxed text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}
