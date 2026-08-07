/**
 * GSAP helpers — import only where meaningful (scroll timelines, complex sequences).
 * Prefer Framer Motion for declarative UI reveals.
 */

import gsap from "gsap";

let registered = false;

export function getGsap() {
  if (typeof window === "undefined") return gsap;
  if (!registered) {
    registered = true;
  }
  return gsap;
}

export { gsap };
