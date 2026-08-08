"use client";

import { useCallback, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { scrollToId } from "@/constants/homepage";
import { cn } from "@/lib/utils";

type SmoothAnchorProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
};

function getHash(href: string): string | null {
  if (href.startsWith("#")) return href.slice(1);
  if (href.startsWith("/#")) return href.slice(2);
  const i = href.indexOf("#");
  if (i >= 0) return href.slice(i + 1);
  return null;
}

/**
 * Smooth in-page navigation for homepage sections.
 * Handles `#id` and `/#id` from any route.
 */
export function SmoothAnchor({
  href,
  className,
  children,
  onNavigate,
}: SmoothAnchorProps) {
  const pathname = usePathname();
  const router = useRouter();
  const hash = getHash(href);
  const isHomeHash = Boolean(hash) && (href === `/#${hash}` || href === `#${hash}`);

  const onClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (!isHomeHash || !hash) return;

      e.preventDefault();
      onNavigate?.();

      if (pathname === "/") {
        scrollToId(hash);
        window.history.pushState(null, "", `/#${hash}`);
        return;
      }

      router.push(`/#${hash}`);
    },
    [hash, isHomeHash, onNavigate, pathname, router]
  );

  return (
    <Link href={href} onClick={onClick} className={cn(className)}>
      {children}
    </Link>
  );
}
