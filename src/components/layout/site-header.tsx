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
 * Floating pill navbar — larger, cleaner, more presence.
 */
export function SiteHeader({ className }: SiteHeaderProps) {
  const pathname = usePathname();

  if (/^\/projects\/[^/]+$/.test(pathname)) return null;

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50", className)}>
      <Container
        size="wide"
        className="flex h-[var(--header-height)] items-center justify-between gap-4"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 text-[1.05rem] font-semibold tracking-tight text-foreground"
          aria-label={`${SITE.name} home`}
        >
          <span
            aria-hidden
            className={cn(
              "grid size-9 place-items-center rounded-full",
              "bg-foreground text-sm font-bold text-background",
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
            "items-center gap-1 rounded-full px-2 py-2",
            "border border-black/[0.05] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]",
            "dark:border-black/5 dark:bg-white dark:shadow-[0_10px_40px_rgba(0,0,0,0.28)]"
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
                  "rounded-full px-5 py-2.5 text-[15px] font-medium tracking-tight transition-colors duration-200",
                  "text-neutral-500 hover:text-neutral-950",
                  active && "bg-neutral-100 text-neutral-950"
                )}
              >
                {item.label}
              </SmoothAnchor>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle className="size-10 text-muted-foreground hover:text-foreground" />
          <SmoothAnchor
            href={CTA_NAV.href}
            className={cn(
              "hidden items-center gap-2.5 rounded-full bg-neutral-950 py-2 pl-5 pr-2 sm:inline-flex",
              "text-[15px] font-medium text-white transition-colors duration-300",
              "hover:bg-neutral-800",
              "dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-800"
            )}
          >
            {CTA_NAV.label}
            <span
              aria-hidden
              className="grid size-8 place-items-center rounded-full bg-white/15 text-white"
            >
              <ArrowUpRight className="size-4" />
            </span>
          </SmoothAnchor>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
