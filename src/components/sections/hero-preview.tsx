"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type HeroPreviewProps = {
  className?: string;
};

const rows = [
  ["Atlas Platform", "SaaS", "Live", "98.2%"],
  ["Nova Copilot", "AI", "Shipping", "94.7%"],
  ["Ledger Ops", "Enterprise", "Live", "99.1%"],
  ["Flow Automate", "Automation", "Beta", "91.4%"],
  ["Market Grid", "Marketplace", "Live", "96.8%"],
];

/**
 * Product-style dashboard peek — no stock art, studio UI language.
 */
export function HeroPreview({ className }: HeroPreviewProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn(
        "relative mx-auto w-full max-w-5xl overflow-hidden rounded-t-[1.75rem] border border-border/60 bg-card/80 shadow-soft-xl backdrop-blur-md",
        "dark:border-white/10 dark:bg-[#0b1220]/90",
        className
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top edge glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklch, var(--hero-glow-core) 80%, transparent), transparent)",
          boxShadow: "0 0 24px var(--hero-preview-glow)",
        }}
      />

      <div className="grid min-h-[280px] grid-cols-[11rem_1fr] md:min-h-[340px] md:grid-cols-[13rem_1fr]">
        {/* Sidebar */}
        <aside className="border-r border-border/50 bg-surface-sunken/40 p-4 dark:border-white/8 dark:bg-black/20">
          <div className="mb-6 flex items-center gap-2">
            <span className="size-2 rounded-full bg-[var(--hero-glow)] shadow-[0_0_12px_var(--hero-glow-soft)]" />
            <span className="text-xs font-medium tracking-tight text-foreground">
              Waleion Console
            </span>
          </div>
          <nav className="space-y-1">
            {["Overview", "Products", "Releases", "Systems", "Insights"].map(
              (item, i) => (
                <div
                  key={item}
                  className={cn(
                    "rounded-lg px-2.5 py-1.5 text-xs transition-colors",
                    i === 0
                      ? "bg-foreground/5 text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item}
                </div>
              )
            )}
          </nav>
        </aside>

        {/* Main */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-border/50 px-4 py-3 dark:border-white/8">
            <div className="h-7 w-full max-w-xs rounded-full border border-border/60 bg-background/50 px-3 text-[11px] leading-7 text-muted-foreground dark:border-white/10 dark:bg-white/5">
              Search products, systems…
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="rounded-full bg-foreground/5 px-2.5 py-1 text-[10px] text-muted-foreground">
                5 live
              </span>
              <span className="size-7 rounded-full bg-gradient-to-br from-[var(--hero-glow-core)] to-[var(--hero-glow)] opacity-80" />
            </div>
          </div>

          <div className="flex-1 overflow-hidden p-4">
            <div className="mb-3 flex items-end justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Active systems</p>
                <p className="text-sm font-medium text-foreground">
                  Product delivery
                </p>
              </div>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-6 w-14 rounded-md bg-foreground/[0.04] dark:bg-white/[0.04]"
                  />
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border/50 dark:border-white/8">
              <div className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.6fr] gap-2 border-b border-border/40 bg-foreground/[0.02] px-3 py-2 text-[10px] uppercase tracking-[0.08em] text-muted-foreground dark:border-white/8">
                <span>Product</span>
                <span>Type</span>
                <span>Status</span>
                <span>Health</span>
              </div>
              {rows.map((row, i) => (
                <motion.div
                  key={row[0]}
                  className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.6fr] gap-2 border-b border-border/30 px-3 py-2.5 text-xs last:border-b-0 dark:border-white/5"
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.65 + i * 0.06,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="font-medium text-foreground">{row[0]}</span>
                  <span className="text-muted-foreground">{row[1]}</span>
                  <span>
                    <span
                      className={cn(
                        "inline-flex rounded-full px-2 py-0.5 text-[10px]",
                        row[2] === "Live"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
                          : row[2] === "Shipping"
                            ? "bg-[color-mix(in_oklch,var(--hero-glow)_18%,transparent)] text-foreground"
                            : "bg-amber-500/10 text-amber-700 dark:text-amber-200"
                      )}
                    >
                      {row[2]}
                    </span>
                  </span>
                  <span className="tabular-nums text-muted-foreground">
                    {row[3]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
