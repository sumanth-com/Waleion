"use client";

import { useCallback, type MouseEvent } from "react";
import Link from "next/link";
import { scrollToId } from "@/constants/homepage";
import { cn } from "@/lib/utils";

type SmoothAnchorProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Smooth anchor navigation — uses Lenis-friendly scrollIntoView for hash links.
 */
export function SmoothAnchor({ href, className, children }: SmoothAnchorProps) {
  const isHash = href.startsWith("#");

  const onClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (!isHash) return;
      e.preventDefault();
      scrollToId(href);
      window.history.pushState(null, "", href);
    },
    [href, isHash]
  );

  return (
    <Link href={href} onClick={onClick} className={cn(className)}>
      {children}
    </Link>
  );
}
