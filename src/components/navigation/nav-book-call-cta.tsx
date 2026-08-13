"use client";

import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { CTA_NAV } from "@/constants/navigation";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { cn } from "@/lib/utils";

type NavBookCallCtaProps = {
  className?: string;
  fullWidth?: boolean;
  onNavigate?: () => void;
};

/**
 * Navbar Book a Call — compact on desktop, full-width in the mobile drawer.
 */
export function NavBookCallCta({
  className,
  fullWidth = false,
  onNavigate,
}: NavBookCallCtaProps) {
  return (
    <SmoothAnchor
      href={CTA_NAV.href}
      title={CTA_NAV.description}
      aria-label={CTA_NAV.description}
      onNavigate={onNavigate}
      className={cn(
        "group inline-flex h-9 shrink-0 items-center rounded-full bg-neutral-950",
        "shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
        "transition-[background-color,box-shadow,transform] duration-300 ease-out",
        "hover:bg-neutral-800 hover:shadow-[0_6px_20px_rgba(0,0,0,0.16)]",
        "active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
        fullWidth
          ? "h-10 w-full justify-center gap-2 py-2 pl-2 pr-2"
          : "gap-2 py-1 pl-1 pr-1.5",
        className
      )}
    >
      {!fullWidth ? (
        <BrandLogo
          size={28}
          alt=""
          className="size-7 shrink-0 rounded-full max-md:size-6"
        />
      ) : null}

      <span
        className={cn(
          "text-[13px] font-medium tracking-tight text-white",
          fullWidth ? "whitespace-nowrap" : "pr-0.5 max-md:text-[12px]"
        )}
      >
        {CTA_NAV.label}
      </span>

      <span
        aria-hidden
        className={cn(
          "grid shrink-0 place-items-center rounded-full bg-white/12 text-white",
          "transition-colors duration-300 group-hover:bg-white/20",
          fullWidth ? "size-7" : "size-6 sm:size-7"
        )}
      >
        <ArrowUpRight className={cn(fullWidth ? "size-3.5" : "size-3")} />
      </span>
    </SmoothAnchor>
  );
}
