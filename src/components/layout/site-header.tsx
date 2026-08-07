"use client";

import Link from "next/link";
import { SITE } from "@/constants/site";
import { MAIN_NAV, CTA_NAV } from "@/constants/navigation";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { NavDropdown } from "@/components/navigation/nav-dropdown";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  className?: string;
};

/**
 * Solid sticky navigation — Solutions, Work, About, Contact.
 */
export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[var(--header-height)]",
        "border-b border-border/70 bg-[var(--hero-bg)] shadow-soft-xs",
        "dark:border-white/10",
        className
      )}
    >
      <Container
        size="wide"
        className="flex h-full items-center justify-between gap-3"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
          aria-label={`${SITE.name} home`}
        >
          <span
            aria-hidden
            className="grid size-5 place-items-center rounded-md bg-foreground text-[10px] font-bold text-background transition-transform duration-300 group-hover:scale-105 dark:bg-white dark:text-neutral-950"
          >
            {SITE.name.charAt(0)}
          </span>
          {SITE.name}
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          {MAIN_NAV.map((item) => (
            <NavDropdown key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle className="dark:text-white/80 dark:hover:text-white" />
          <Link
            href={CTA_NAV.href}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden rounded-full px-3.5 transition-all duration-300 sm:inline-flex",
              "dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
            )}
          >
            {CTA_NAV.label}
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
