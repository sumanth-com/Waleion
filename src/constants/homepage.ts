/**
 * Homepage visual language.
 * All post-hero sections must follow these standards.
 * Do not change the Hero to match — Hero is its own composition.
 */

export const HOMEPAGE = {
  /** Primary content width for section copy blocks */
  contentMax: "42rem",
  /** Wide layouts (grids, logo strips, card rows) */
  wideMax: "80rem",
  /** Section vertical rhythm — maps to --space-section (120–180px) */
  sectionPaddingClass: "section-space",
  /** Shared section intro pattern */
  intro: {
    label: "eyebrow",
    heading: "h2 oversized",
    paragraph: "2–3 lines max",
  },
  imagery: [
    "product dashboards",
    "browser mockups",
    "device mockups",
    "product interfaces",
    "software previews",
    "abstract product visuals",
  ],
  avoid: [
    "stock photos",
    "obvious section breaks",
    "large colored section backgrounds",
    "excessive gradients",
    "glowing card effects",
    "over-animation",
  ],
} as const;

/** Smooth in-page navigation (works with Lenis) */
export function scrollToId(id: string) {
  const el = document.getElementById(id.replace(/^#/, ""));
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
