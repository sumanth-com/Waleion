"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToId } from "@/constants/homepage";

/**
 * Scrolls to hash targets after navigation (sticky header offset via scroll-mt).
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    const timer = window.setTimeout(() => {
      scrollToId(hash);
    }, 100);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
