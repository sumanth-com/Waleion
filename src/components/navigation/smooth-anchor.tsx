"use client";

import { useCallback, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HOME_SECTIONS,
  isHomeCanvas,
  scrollToId,
  type HomeSectionPath,
} from "@/constants/homepage";
import { cn } from "@/lib/utils";

type SmoothAnchorProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  "aria-label"?: string;
  "aria-current"?: "page" | undefined;
  onNavigate?: () => void;
};

function resolveHomeSection(
  href: string
): { path: HomeSectionPath; section: string } | null {
  if (href in HOME_SECTIONS) {
    const path = href as HomeSectionPath;
    return { path, section: HOME_SECTIONS[path] };
  }
  return null;
}

/**
 * Homepage section links use real URLs (`/work`, `/expertise`).
 * On the home canvas: smooth-scroll and update the URL in place.
 * From other pages: navigate, then land on that section.
 */
export function SmoothAnchor({
  href,
  className,
  children,
  title,
  "aria-label": ariaLabel,
  "aria-current": ariaCurrent,
  onNavigate,
}: SmoothAnchorProps) {
  const pathname = usePathname();
  const router = useRouter();
  const home = resolveHomeSection(href);

  const onClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (!home) return;

      e.preventDefault();
      onNavigate?.();

      if (isHomeCanvas(pathname)) {
        scrollToId(home.section);
        if (pathname !== home.path) {
          router.replace(home.path, { scroll: false });
        }
        return;
      }

      router.push(home.path, { scroll: false });
    },
    [home, onNavigate, pathname, router]
  );

  return (
    <Link
      href={href}
      scroll={false}
      onClick={onClick}
      className={cn(className)}
      title={title}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
    >
      {children}
    </Link>
  );
}
