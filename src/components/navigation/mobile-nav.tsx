"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { MAIN_NAV } from "@/constants/navigation";
import { NavBookCallCta } from "@/components/navigation/nav-book-call-cta";
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
    const lenis = (window as Window & { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      lenis?.start();
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className={cn(
          "inline-flex size-11 items-center justify-center rounded-full text-foreground",
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
              className="fixed inset-0 top-[var(--header-height)] z-40 bg-[var(--hero-bg)]/70 backdrop-blur-sm dark:bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id={panelId}
              aria-label="Mobile"
              className={cn(
                "mobile-nav-panel",
                "fixed inset-x-0 top-[var(--header-height)] z-50 max-h-[calc(100dvh-var(--header-height))] overflow-y-auto overscroll-contain",
                "border-b border-black/[0.06] bg-[var(--hero-bg)] px-4 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)]",
                "dark:border-white/10 dark:bg-[#12100e]"
              )}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: easings.outExpo }}
            >
              <ul className="flex flex-col gap-0.5">
                {MAIN_NAV.map((item) => {
                  const hasChildren = !!item.children?.length;
                  const isExpanded = expanded === item.label;

                  if (!hasChildren) {
                    return (
                      <li key={item.href}>
                        <SmoothAnchor
                          href={item.href}
                          title={item.description}
                          className={cn(
                            "block rounded-2xl px-3.5 py-3.5 text-[15px] font-medium tracking-tight text-foreground",
                            "hover:bg-foreground/[0.04] dark:hover:bg-white/[0.06]",
                            isActivePath(pathname, item.href) &&
                              "bg-foreground/[0.05] dark:bg-white/[0.07]"
                          )}
                          aria-current={
                            isActivePath(pathname, item.href) ? "page" : undefined
                          }
                          onNavigate={() => setOpen(false)}
                        >
                          {item.label}
                        </SmoothAnchor>
                      </li>
                    );
                  }

                  return (
                    <li key={item.href} className="rounded-2xl">
                      <button
                        type="button"
                        className="flex min-h-11 w-full items-center justify-between rounded-2xl px-3.5 py-3.5 text-left text-[15px] font-medium tracking-tight text-foreground hover:bg-foreground/[0.04] dark:hover:bg-white/[0.06]"
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
                                  className="block rounded-xl px-3.5 py-2.5 text-sm text-muted-foreground hover:text-foreground"
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

              <NavBookCallCta
                fullWidth
                className="mt-5"
                onNavigate={() => setOpen(false)}
              />
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
