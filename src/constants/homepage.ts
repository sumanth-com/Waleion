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

/** Clean homepage section URLs — persist on refresh, no hash. */
export const HOME_SECTIONS = {
  "/expertise": "expertise",
  "/work": "work",
} as const;

export type HomeSectionPath = keyof typeof HOME_SECTIONS;

export function isHomeCanvas(pathname: string) {
  return pathname === "/" || pathname in HOME_SECTIONS;
}

export function sectionForPath(pathname: string) {
  if (pathname in HOME_SECTIONS) {
    return HOME_SECTIONS[pathname as HomeSectionPath];
  }
  return null;
}

type LenisLike = {
  scrollTo: (
    target: HTMLElement,
    options?: { offset?: number; immediate?: boolean; duration?: number }
  ) => void;
};

/** Smooth in-page navigation (works with Lenis) */
export function scrollToId(id: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(id.replace(/^#/, ""));
  if (!el) return;

  const header =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--header-height"
      )
    ) || 72;
  const offset = -(header + 8);
  const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;

  if (lenis) {
    lenis.scrollTo(el, {
      offset,
      immediate: behavior === "auto",
      duration: 1.05,
    });
    return;
  }

  el.scrollIntoView({ behavior, block: "start" });
}
