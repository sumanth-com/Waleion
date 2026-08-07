"use client";

import type { ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  cardReveal,
  fadeIn,
  fadeUp,
  imageReveal,
  revealViewport,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

type MotionBaseProps = {
  children: ReactNode;
  className?: string;
  id?: string;
} & Omit<MotionProps, "children" | "id">;

function Static({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
}

/** Fade Up — primary section / block reveal */
export function FadeUp({
  children,
  className,
  delay = 0,
  id,
  ...props
}: MotionBaseProps & { delay?: number }) {
  const reduced = usePrefersReducedMotion();
  if (reduced)
    return (
      <Static id={id} className={className}>
        {children}
      </Static>
    );

  return (
    <motion.div
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={fadeUp}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Alias used across the design system */
export function Reveal(props: MotionBaseProps & { delay?: number }) {
  return <FadeUp {...props} />;
}

export function FadeIn({ children, className, ...props }: MotionBaseProps) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <Static className={className}>{children}</Static>;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={fadeIn}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, ...props }: MotionBaseProps) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <Static className={className}>{children}</Static>;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={scaleIn}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className, ...props }: MotionBaseProps) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <Static className={className}>{children}</Static>;

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={imageReveal}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardReveal({ children, className, ...props }: MotionBaseProps) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <Static className={className}>{children}</Static>;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={cardReveal}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, ...props }: MotionBaseProps) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <Static className={className}>{children}</Static>;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: MotionBaseProps) {
  return (
    <motion.div className={cn(className)} variants={fadeUp} {...props}>
      {children}
    </motion.div>
  );
}
