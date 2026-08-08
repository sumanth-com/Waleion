"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { SITE } from "@/constants/site";
import { MAIN_NAV, CTA_NAV } from "@/constants/navigation";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  className?: string;
};

function isActivePath(pathname: string, href: string) {
  if (href.startsWith("/#") || href.startsWith("#")) {
    return false;
  }
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Floating pill navbar — logo · centered links · CTA.
 */
export function SiteHeader({ className }: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        className
      )}
    >
      <Container
        size="wide"
        className="flex h-[var(--header-height)] items-center justify-between gap-3"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 text-[15px] font-semibold tracking-tight text-foreground"
          aria-label={`${SITE.name} home`}
        >
          <span
            aria-hidden
            className={cn(
              "grid size-7 place-items-center rounded-full",
              "bg-foreground text-[11px] font-bold text-background",
              "transition-transform duration-300 group-hover:scale-105",
              "dark:bg-white dark:text-neutral-950"
            )}
          >
            {SITE.name.charAt(0)}
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        <nav
          className={cn(
            "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex",
            "items-center gap-0.5 rounded-full px-1.5 py-1.5",
            "border border-black/[0.06] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
            "dark:border-white/10 dark:bg-white dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          )}
          aria-label="Primary"
        >
          {MAIN_NAV.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <SmoothAnchor
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-[13px] font-medium tracking-tight transition-colors duration-200",
                  "text-neutral-600 hover:text-neutral-950",
                  active && "bg-neutral-100 text-neutral-950"
                )}
              >
                {item.label}
              </SmoothAnchor>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="text-muted-foreground hover:text-foreground" />
          <SmoothAnchor
            href={CTA_NAV.href}
            className={cn(
              "hidden items-center gap-2 rounded-full bg-neutral-950 pl-4 pr-1.5 py-1.5 sm:inline-flex",
              "text-[13px] font-medium text-white transition-all duration-300",
              "hover:bg-neutral-800",
              "dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
            )}
          >
            {CTA_NAV.label}
            <span
              aria-hidden
              className={cn(
                "grid size-7 place-items-center rounded-full",
                "bg-white/15 text-white",
                "dark:bg-neutral-950/10 dark:text-neutral-950"
              )}
            >
              <ArrowUpRight className="size-3.5" />
            </span>
          </SmoothAnchor>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
