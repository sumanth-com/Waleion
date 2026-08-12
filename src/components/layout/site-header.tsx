"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { SITE } from "@/constants/site";
import { MAIN_NAV, CTA_NAV } from "@/constants/navigation";
import { Container } from "@/components/layout/container";
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
          aria-label={`${SITE.name} — ${SITE.tagline}`}
          title={`${SITE.name} home`}
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
            "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block",
            "rounded-full px-2 py-2",
            "border border-black/[0.05] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]",
            "dark:border-black/5 dark:bg-white dark:shadow-[0_10px_40px_rgba(0,0,0,0.28)]"
          )}
          aria-label="Main site navigation"
        >
          <ul className="flex items-center gap-1">
            {MAIN_NAV.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <SmoothAnchor
                    href={item.href}
                    title={item.description}
                    className={cn(
                      "block rounded-full px-5 py-2.5 text-[15px] font-medium tracking-tight transition-colors duration-200",
                      "text-neutral-500 hover:text-neutral-950",
                      active && "bg-neutral-100 text-neutral-950"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </SmoothAnchor>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <SmoothAnchor
            href={CTA_NAV.href}
            title={CTA_NAV.description}
            aria-label={CTA_NAV.description}
            className={cn(
              "inline-flex items-center gap-2 rounded-full bg-neutral-950 py-2 pl-4 pr-2 sm:gap-2.5 sm:pl-5",
              "text-sm font-medium text-white transition-colors duration-300 sm:text-[15px]",
              "hover:bg-neutral-800",
              "dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-800"
            )}
          >
            <span className="whitespace-nowrap">{CTA_NAV.label}</span>
            <span
              aria-hidden
              className="grid size-7 place-items-center rounded-full bg-white/15 text-white sm:size-8"
            >
              <ArrowUpRight className="size-3.5 sm:size-4" />
            </span>
          </SmoothAnchor>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
