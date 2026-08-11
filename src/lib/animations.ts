/**
 * Homepage motion language — Framer Motion first.
 * Elegant · slow · smooth · purposeful. Do not over-animate.
 */

export const easings = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutSoft: [0.4, 0, 0.2, 1] as const,
  springSoft: [0.22, 1, 0.36, 1] as const,
} as const;

export const durations = {
  fast: 0.2,
  base: 0.35,
  genie: 0.38,
  slow: 0.55,
  reveal: 0.8,
  count: 1.4,
} as const;

/** Viewport defaults for section reveals */
export const revealViewport = {
  once: true,
  margin: "-12% 0px",
  amount: 0.25,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.reveal,
      ease: easings.outExpo,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.slow,
      ease: easings.inOutSoft,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.reveal,
      ease: easings.outExpo,
    },
  },
};

export const imageReveal = {
  hidden: { opacity: 0, y: 36, clipPath: "inset(8% 8% 8% 8% round 24px)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0% round 24px)",
    transition: {
      duration: 1,
      ease: easings.outExpo,
    },
  },
};

export const cardReveal = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.reveal,
      ease: easings.outExpo,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

/** Hover lift for premium cards / interactive surfaces */
export const hoverLift = {
  whileHover: { y: -4, scale: 1.01 },
  whileTap: { scale: 0.995 },
  transition: { duration: 0.35, ease: easings.springSoft },
} as const;

/** @deprecated use fadeUp */
export const revealVariants = fadeUp;
/** @deprecated use fadeIn */
export const fadeVariants = fadeIn;

export const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
