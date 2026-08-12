"use client";

import { useEffect } from "react";
import { resetPageScroll } from "@/lib/scroll-reset";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    resetPageScroll();

    const raf = requestAnimationFrame(resetPageScroll);
    const timers = [0, 50, 120, 400, 800].map((ms) =>
      window.setTimeout(resetPageScroll, ms)
    );

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return <div className="about-page w-full">{children}</div>;
}
