import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";
import { SmoothAnchor } from "@/components/navigation/smooth-anchor";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/constants/site";
import { Container } from "@/components/layout/container";
import { PageSection } from "@/components/layout/page-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: `Start a project with ${SITE.name}. ${SITE.responseTime}.`,
  path: "/contact",
});

const details = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: SITE.businessHours,
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE.location,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-transparent">
        <Container
          size="wide"
          className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-[calc(var(--header-height)+3rem)] text-center"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </p>
          <h1 className="max-w-3xl text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.85rem,4vw,3.25rem)] leading-[1.12] text-foreground">
            Let’s build something that makes a real impact.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
            Tell us what you’re building. {SITE.responseTime}. No pitch deck
            cycle — a product conversation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`mailto:${SITE.email}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-6 dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
              )}
            >
              Email {SITE.name}
              <ArrowUpRight className="size-3.5" aria-hidden />
            </Link>
            <SmoothAnchor
              href="/work"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-6 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              )}
            >
              View our work
            </SmoothAnchor>
          </div>
        </Container>
      </section>

      <PageSection spacing="sm">
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          {details.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="grid size-10 place-items-center rounded-full border border-border/70 bg-background text-foreground">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </span>
                <span className="mt-1.5 text-sm font-medium tracking-tight text-foreground">
                  {item.value}
                </span>
              </>
            );

            return (
              <li key={item.label}>
                {"href" in item ? (
                  <a
                    href={item.href}
                    className="flex h-full flex-col rounded-3xl border border-border/70 bg-card px-6 py-7 transition-colors hover:border-border"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex h-full flex-col rounded-3xl border border-border/70 bg-card px-6 py-7">
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </PageSection>
    </>
  );
}
