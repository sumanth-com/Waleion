import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export type LegalSection = {
  id: string;
  title: string;
};

type LegalDocumentProps = {
  title: string;
  updated?: string;
  effective?: string;
  summary?: string;
  sections?: LegalSection[];
  related?: { label: string; href: string }[];
  children: ReactNode;
};

function todayInIst() {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

/**
 * Legal page shell — Suprabase-style centered document card.
 * Light Waleion palette; layout only matches the reference.
 */
export function LegalDocument({
  title,
  updated,
  effective,
  summary,
  related,
  children,
}: LegalDocumentProps) {
  const today = todayInIst();
  const updatedLabel = updated ?? `Last updated ${today}`;
  const effectiveLabel = effective ?? today;

  return (
    <section className="relative bg-transparent">
      <Container
        size="wide"
        className="relative z-10 py-[calc(var(--header-height)+2rem)] pb-16 md:pb-24"
      >
        <article className="mx-auto w-full max-w-[68rem] rounded-[1.75rem] border border-black/[0.06] bg-white/90 px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05] sm:rounded-[2rem] sm:px-10 sm:py-12 md:px-16 md:py-14 lg:px-20">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Legal
            </p>
            <h1 className="mt-3 text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.65rem,3.4vw,2.35rem)] leading-[1.15] text-foreground">
              {title}
            </h1>
            {summary ? (
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                {summary}
              </p>
            ) : null}
            <p className="mt-4 text-[12.5px] text-muted-foreground">
              {updatedLabel}
              {effectiveLabel ? ` · Effective ${effectiveLabel}` : null}
            </p>
            {related && related.length > 0 ? (
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                {related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[12.5px] font-medium text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </header>

          <div className="mt-10 space-y-9 border-t border-black/[0.06] pt-10 text-left text-sm leading-relaxed text-muted-foreground dark:border-white/10 md:mt-12 md:space-y-10 md:pt-12 md:text-[0.95rem]">
            {children}
          </div>
        </article>
      </Container>
    </section>
  );
}

type LegalSectionBlockProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function LegalSectionBlock({
  id,
  title,
  children,
}: LegalSectionBlockProps) {
  return (
    <section id={id} className="scroll-mt-[calc(var(--header-height)+1.25rem)]">
      <h2 className="text-[1rem] font-semibold tracking-tight text-foreground md:text-[1.0625rem]">
        {title}
      </h2>
      <div className="mt-3 space-y-3 [&_a]:underline [&_a]:underline-offset-4 [&_ul]:mt-1">
        {children}
      </div>
    </section>
  );
}
