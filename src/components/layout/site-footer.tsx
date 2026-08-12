"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/constants/site";
import { FOOTER_NAV, MAIN_NAV } from "@/constants/navigation";
import { Container } from "@/components/layout/container";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
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
  const className =
    "text-[13px] text-neutral-500 transition-colors hover:text-neutral-950 dark:text-white/55 dark:hover:text-white";

  if (href.startsWith("/") && !href.includes(".")) {
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
 * Footer — same width as Final CTA, aligned links, centered copyright.
 */
export function SiteFooter({ className }: SiteFooterProps) {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname.startsWith("/projects")) return null;

  const pages = [
    { label: "Home", href: "/" },
    ...MAIN_NAV.map((item) => ({ label: item.label, href: item.href })),
  ];

  const social = [
    { label: "Email", href: `mailto:${SITE.email}` },
    ...(SITE.linkedin
      ? [{ label: "LinkedIn", href: SITE.linkedin }]
      : []),
  ];

  return (
    <footer className={cn("relative z-[1] bg-transparent pb-8 md:pb-10", className)}>
      <Container size="wide">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
            <div className="max-w-[16rem]">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-full bg-neutral-950 text-[12px] font-semibold text-white dark:bg-white dark:text-neutral-950">
                  {SITE.name.charAt(0)}
                </span>
                <span className="text-[14px] font-semibold tracking-tight text-neutral-950 dark:text-white">
                  {SITE.name}
                </span>
              </Link>
              <p className="mt-3 text-[12.5px] leading-relaxed text-neutral-500 dark:text-white/50">
                Creating refined product experiences with clarity, intention,
                and thoughtful execution.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 sm:gap-10 md:gap-14">
              <div className="space-y-3">
                <p className="text-[12px] font-medium text-neutral-950 dark:text-white">
                  Pages
                </p>
                <ul className="space-y-2">
                  {pages.map((item) => (
                    <li key={item.href}>
                      <FooterLink href={item.href}>{item.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-[12px] font-medium text-neutral-950 dark:text-white">
                  Work
                </p>
                <ul className="space-y-2">
                  {FOOTER_NAV.work.map((item) => (
                    <li key={item.href}>
                      <FooterLink href={item.href}>{item.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-[12px] font-medium text-neutral-950 dark:text-white">
                  Connect
                </p>
                <ul className="space-y-2">
                  {social.map((item) => (
                    <li key={item.href}>
                      <FooterLink href={item.href}>{item.label}</FooterLink>
                    </li>
                  ))}
                  {FOOTER_NAV.legal.map((item) => (
                    <li key={item.href}>
                      <FooterLink href={item.href}>{item.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center md:mt-14">
            <p className="text-center text-[12px] text-neutral-500 dark:text-white/50">
              © {year} {SITE.legalName}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
