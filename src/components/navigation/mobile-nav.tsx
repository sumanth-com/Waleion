"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { MAIN_NAV, CTA_NAV } from "@/constants/navigation";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { cn } from "@/lib/utils";
import { easings } from "@/lib/animations";

function isActivePath(pathname: string, href: string) {
  if (href.startsWith("/#") || href.startsWith("#")) {
    return pathname === "/";
  }
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Mobile navigation drawer — keyboard accessible, animated open/close.
 */
export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className={cn(
          "inline-flex size-9 items-center justify-center rounded-full text-foreground",
          "transition-colors hover:bg-foreground/5 dark:hover:bg-white/8",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        )}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              aria-hidden
              className="fixed inset-0 top-[var(--header-height)] z-40 bg-background/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id={panelId}
              aria-label="Mobile"
              className={cn(
                "fixed inset-x-0 top-[var(--header-height)] z-50 max-h-[calc(100dvh-var(--header-height))] overflow-y-auto",
                "border-b border-border/60 bg-background/95 px-4 py-4 shadow-soft-lg backdrop-blur-xl",
                "dark:border-white/10 dark:bg-[#0b1220]/96"
              )}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: easings.outExpo }}
            >
              <ul className="flex flex-col gap-1">
                {MAIN_NAV.map((item) => {
                  const hasChildren = !!item.children?.length;
                  const isExpanded = expanded === item.label;

                  if (!hasChildren) {
                    return (
                      <li key={item.href}>
                        <SmoothAnchor
                          href={item.href}
                          className={cn(
                            "block rounded-xl px-3 py-3 text-sm font-medium text-foreground",
                            "hover:bg-foreground/[0.04] dark:hover:bg-white/[0.06]",
                            isActivePath(pathname, item.href) &&
                              "bg-foreground/[0.04] dark:bg-white/[0.06]"
                          )}
                          onNavigate={() => setOpen(false)}
                        >
                          {item.label}
                        </SmoothAnchor>
                      </li>
                    );
                  }

                  return (
                    <li key={item.href} className="rounded-xl">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium text-foreground hover:bg-foreground/[0.04] dark:hover:bg-white/[0.06]"
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setExpanded((v) =>
                            v === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "size-4 opacity-60 transition-transform duration-300",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isExpanded ? (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.25,
                              ease: easings.outExpo,
                            }}
                            className="overflow-hidden pl-2"
                          >
                            {item.children!.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground"
                                  onClick={() => setOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        ) : null}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>

              <SmoothAnchor
                href={CTA_NAV.href}
                className={cn(
                  "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 py-3 pl-5 pr-2",
                  "text-sm font-medium text-white",
                  "dark:bg-white dark:text-neutral-950"
                )}
                onNavigate={() => setOpen(false)}
              >
                {CTA_NAV.label}
                <span
                  aria-hidden
                  className="grid size-8 place-items-center rounded-full bg-white/15 dark:bg-neutral-950/10"
                >
                  <ArrowUpRight className="size-3.5" />
                </span>
              </SmoothAnchor>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
