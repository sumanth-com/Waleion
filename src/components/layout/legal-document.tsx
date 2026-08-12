import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";

type LegalDocumentProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

/** Shared long-form layout using existing site typography. */
export function LegalDocument({ title, updated, children }: LegalDocumentProps) {
  return (
    <section className="relative bg-transparent">
      <Container
        size="narrow"
        className="relative z-10 py-[calc(var(--header-height)+2.5rem)] pb-16 md:pb-20"
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {updated}
        </p>
        <h1 className="mt-3 text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.12] text-foreground">
          {title}
        </h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
          {children}
        </div>
      </Container>
    </section>
  );
}
