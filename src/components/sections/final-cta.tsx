"use client";

import Link from "next/link";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeUp, Stagger, StaggerItem } from "@/components/animations/reveal";
import { buttonVariants } from "@/components/ui/button";
import { finalCtaSteps } from "@/data/final-cta";
import { SITE } from "@/constants/site";
import { CTA_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";

const contactDetails = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Business Hours", value: SITE.businessHours },
  { label: "Location", value: SITE.location },
  { label: "Response Time", value: SITE.responseTime },
  { label: "LinkedIn", value: "Connect with us", href: SITE.linkedin },
] as const;

/**
 * Final homepage conversion — start of a long-term partnership, not a generic contact block.
 */
export function FinalCta() {
  return (
    <PageSection id="contact" containerClassName="space-y-12 md:space-y-14">
      <SectionHeader
        label="Start Your Next Project"
        title="Let's Build Something That Makes a Real Impact."
        description={`Whether you're launching a startup, modernizing your business, or building the next generation of software, we're here to help you turn ambitious ideas into scalable digital products. From strategy and design to development, deployment, and long-term support, ${SITE.name} becomes your technology partner at every stage.`}
        className="max-w-3xl"
      />

      <FadeUp className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={CTA_NAV.href}
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6",
            "dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
          )}
        >
          Start Your Project
        </Link>
        <Link
          href="/#contact"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full px-6",
            "dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          )}
        >
          Schedule a Discovery Call
        </Link>
      </FadeUp>

      <div className="mx-auto w-full max-w-4xl space-y-6">
        <FadeUp>
          <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            What Happens Next
          </p>
        </FadeUp>

        <Stagger className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {finalCtaSteps.map((step) => (
            <StaggerItem key={step.id} className="text-center sm:text-left">
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {step.step}
              </span>
              <h3 className="mt-2 text-sm font-medium tracking-tight text-foreground md:text-base">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <FadeUp className="mx-auto max-w-lg text-center">
        <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
          No sales pressure.
          <br />
          No unnecessary complexity.
          <br />
          Just honest conversations, thoughtful planning, and exceptional
          software.
        </p>
      </FadeUp>

      <FadeUp className="mx-auto w-full max-w-3xl">
        <dl className="grid gap-5 rounded-3xl border border-border/70 bg-card p-6 shadow-soft-sm sm:grid-cols-2 sm:gap-6 md:p-8">
          {contactDetails.map((item) => (
            <div key={item.label}>
              <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-sm text-foreground">
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="transition-colors duration-300 hover:text-foreground/80"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </FadeUp>

      <FadeUp className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
        <div className="space-y-2">
          <p className="text-base font-medium tracking-tight text-foreground md:text-lg">
            The best products begin with a conversation.
          </p>
          <p className="text-sm text-muted-foreground">Let&apos;s build yours.</p>
        </div>
        <Link
          href="/#contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6",
            "dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
          )}
        >
          Book Your Free Consultation
        </Link>
      </FadeUp>
    </PageSection>
  );
}
