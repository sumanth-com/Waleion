"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/constants/site";
import { FOOTER_NAV } from "@/constants/navigation";
import { Container } from "@/components/layout/container";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type SiteFooterProps = {
  className?: string;
};

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isHash = href.includes("#");
  const className =
    "text-sm text-foreground/80 transition-colors hover:text-foreground";

  if (isHash) {
    return (
      <SmoothAnchor href={href} className={className}>
        {children}
      </SmoothAnchor>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/**
 * Footer on the shared continuous canvas — no band / border cut.
 */
export function SiteFooter({ className }: SiteFooterProps) {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname.startsWith("/projects")) return null;

  return (
    <footer className={cn("relative z-[1] bg-transparent", className)}>
      <Container size="wide" className="section-space-sm">
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
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          © {year} {SITE.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
