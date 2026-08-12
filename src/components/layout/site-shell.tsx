import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteAtmosphere } from "@/components/sections/hero-atmosphere";
import { PageTransition } from "@/components/layout/page-transition";
import { HashScroll } from "@/components/navigation/hash-scroll";

type SiteShellProps = {
  children: ReactNode;
};

/**
 * Primary site chrome on one continuous canvas.
 * Page content genies in/out; atmosphere + header stay put.
 */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative flex min-h-dvh flex-col bg-[var(--hero-bg)]">
      <SiteAtmosphere />
      <SiteHeader />
      <HashScroll />
      <main id="main-content" className="relative z-[1] flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <SiteFooter />
    </div>
  );
}
