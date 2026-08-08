import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteAtmosphere } from "@/components/sections/hero-atmosphere";

type SiteShellProps = {
  children: ReactNode;
};

/**
 * Primary site chrome on one continuous canvas.
 */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative flex min-h-dvh flex-col bg-[var(--hero-bg)]">
      <SiteAtmosphere />
      <SiteHeader />
      <main id="main-content" className="relative z-[1] flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
