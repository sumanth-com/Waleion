"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/constants/site";
import { MAIN_NAV } from "@/constants/navigation";
import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { NavBookCallCta } from "@/components/navigation/nav-book-call-cta";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { useHeaderScroll } from "@/hooks/use-header-scroll";
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
 * Site header — transparent on the hero, solid after scroll.
 */
export function SiteHeader({ className }: SiteHeaderProps) {
  const pathname = usePathname();
  const { scrolled, prefersReducedMotion } = useHeaderScroll({
    pathname,
  });

  if (/^\/projects\/[^/]+$/.test(pathname)) return null;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 isolate",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-[var(--hero-bg)] dark:bg-[#12100e]",
          prefersReducedMotion ? "transition-none" : "transition-opacity duration-300 ease-out",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />
      <Container
        size="wide"
        className="relative z-10 flex h-[var(--header-height)] items-center gap-3 md:gap-8"
      >
        <Link
          href="/"
          scroll={false}
          className="group flex min-w-0 shrink-0 items-center gap-2 md:gap-2.5 text-[0.9375rem] font-semibold tracking-tight text-foreground md:text-[0.9875rem]"
          aria-label={`${SITE.name} — ${SITE.tagline}`}
          title={`${SITE.name} home`}
        >
          <span
            aria-hidden
            className={cn(
              "grid size-8 place-items-center rounded-full",
              "bg-foreground text-xs font-bold text-background",
              "transition-transform duration-300 group-hover:scale-105",
              "dark:bg-white dark:text-neutral-950"
            )}
          >
            {SITE.name.charAt(0)}
          </span>
          <span className="truncate">{SITE.name}</span>
        </Link>

        <nav
          className="hidden flex-1 justify-center md:flex"
          aria-label="Main site navigation"
        >
          <ul className="flex items-center gap-6 lg:gap-8">
            {MAIN_NAV.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <SmoothAnchor
                    href={item.href}
                    title={item.description}
                    className={cn(
                      "block py-1 text-[13px] font-medium tracking-[0.04em] transition-colors duration-200",
                      "text-neutral-500 hover:text-neutral-950",
                      active && "text-neutral-950"
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

        <div className="ml-auto flex items-center gap-1.5">
          <NavBookCallCta className="max-md:h-8 max-md:gap-1.5 max-md:pl-1 max-md:pr-1 max-[400px]:[&>span:first-of-type]:hidden" />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
