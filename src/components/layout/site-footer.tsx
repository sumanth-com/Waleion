import Link from "next/link";
import { SITE } from "@/constants/site";
import { FOOTER_NAV } from "@/constants/navigation";
import { Container } from "@/components/layout/container";
import { SectionAtmosphere } from "@/components/sections/hero-atmosphere";
import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type SiteFooterProps = {
  className?: string;
};

/**
 * Footer shell — structure only; expand when building pages.
 */
export function SiteFooter({ className }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t border-border/60 bg-[var(--hero-bg)]",
        className
      )}
    >
      <SectionAtmosphere />
      <Container size="wide" className="relative z-[1] section-space-sm">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-tight">{SITE.name}</p>
            <Text size="sm" muted className="max-w-xs">
              {SITE.tagline}. Building product-grade software for ambitious
              teams.
            </Text>
          </div>

          {(
            [
              ["Company", FOOTER_NAV.company],
              ["Work", FOOTER_NAV.work],
              ["Legal", FOOTER_NAV.legal],
            ] as const
          ).map(([title, items]) => (
            <div key={title} className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {title}
              </p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-subtle mt-12 mb-6" />

        <Text size="xs" muted>
          © {year} {SITE.legalName}. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
