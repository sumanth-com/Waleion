"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { easings } from "@/lib/animations";

type NavDropdownProps = {
  item: NavItem;
};

function isActivePath(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Accessible desktop dropdown with elegant open/close motion.
 */
export function NavDropdown({ item }: NavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const active =
    isActivePath(pathname, item.href) ||
    item.children?.some((child) => isActivePath(pathname, child.href));

  const clearClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const openMenu = () => {
    clearClose();
    setOpen(true);
  };

  const closeMenu = () => {
    clearClose();
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    return () => clearClose();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className={cn(
          "relative rounded-full px-3 py-1.5 text-sm transition-colors duration-300",
          "text-muted-foreground hover:text-foreground",
          "dark:text-white/75 dark:hover:text-white",
          active && "text-foreground dark:text-white"
        )}
      >
        {item.label}
        {active ? (
          <span
            aria-hidden
            className="absolute inset-x-3 -bottom-0.5 h-px bg-foreground/40 dark:bg-white/50"
          />
        ) : null}
      </Link>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocus={openMenu}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors duration-300",
          "text-muted-foreground hover:text-foreground",
          "dark:text-white/75 dark:hover:text-white",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
          (open || active) && "text-foreground dark:text-white"
        )}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "size-3.5 opacity-60 transition-transform duration-300",
            open && "rotate-180"
          )}
          aria-hidden
        />
        {active ? (
          <span
            aria-hidden
            className="absolute inset-x-3 -bottom-0.5 h-px bg-foreground/40 dark:bg-white/50"
          />
        ) : null}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="menu"
            aria-label={item.label}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.22, ease: easings.outExpo }}
            className={cn(
              "absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2",
              "rounded-2xl border border-border/70 bg-card/95 p-2 shadow-soft-lg backdrop-blur-xl",
              "dark:border-white/10 dark:bg-[#0f1520]/95"
            )}
          >
            <ul className="flex flex-col gap-0.5">
              {item.children.map((child) => (
                <li key={child.href} role="none">
                  <Link
                    role="menuitem"
                    href={child.href}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 transition-colors duration-200",
                      "hover:bg-foreground/[0.04] dark:hover:bg-white/[0.06]",
                      isActivePath(pathname, child.href) &&
                        "bg-foreground/[0.04] dark:bg-white/[0.06]"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span className="block text-sm font-medium tracking-tight text-foreground">
                      {child.label}
                    </span>
                    {child.description ? (
                      <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                        {child.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
