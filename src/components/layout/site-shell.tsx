import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

type SiteShellProps = {
  children: ReactNode;
};

/**
 * Primary site chrome. Header overlays content for full-bleed heroes.
 */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
