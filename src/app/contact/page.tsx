import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { Clock, Mail, MapPin } from "lucide-react";
import { createPageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/constants/site";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";
import aboutHeroBg from "@/assets/about.png";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.contact);

function ContactIntro() {
  return (
    <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Contact
      </p>
      <h1 className="mt-3 text-balance font-semibold tracking-[var(--tracking-tight)] text-[clamp(1.65rem,3.6vw,2.75rem)] leading-[1.12] text-foreground">
        Let’s build something that makes a real impact.
      </h1>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-[0.9875rem]">
        Share a short brief. {SITE.responseTime}. No pitch-deck cycle — a
        product conversation.
      </p>
    </div>
  );
}

function ContactDetails() {
  const cardClass =
    "flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white/80 px-3.5 py-3 text-left backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06] max-lg:flex-col max-lg:items-center max-lg:px-4 max-lg:py-4 max-lg:text-center";

  return (
    <ul className="flex flex-col space-y-3">
      <li>
        <a
          href={`mailto:${SITE.email}`}
          className={`${cardClass} transition-colors hover:border-black/10`}
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-black/[0.06] bg-white text-foreground dark:border-white/10 dark:bg-white/5">
            <Mail className="size-3.5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Email
            </span>
            <span className="mt-0.5 block text-[14px] font-medium tracking-tight text-foreground">
              {SITE.email}
            </span>
          </span>
        </a>
      </li>

      <li>
        <div className={cardClass}>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-black/[0.06] bg-white text-foreground dark:border-white/10 dark:bg-white/5">
            <Clock className="size-3.5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Hours
            </span>
            <span className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1.5 max-lg:justify-center">
              <span className="text-[14px] font-medium tracking-tight text-foreground">
                Mon–Fri, 9:00 AM–6:00 PM IST
              </span>
              <span className="demand-alive inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-tight text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200">
                <span
                  className="demand-alive-dot size-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400"
                  aria-hidden
                />
                Sat &amp; Sun — High demand
              </span>
            </span>
          </span>
        </div>
      </li>

      <li>
        <div className={cardClass}>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-black/[0.06] bg-white text-foreground dark:border-white/10 dark:bg-white/5">
            <MapPin className="size-3.5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Location
            </span>
            <span className="mt-0.5 block text-[14px] font-medium tracking-tight text-foreground">
              {SITE.location}
            </span>
          </span>
        </div>
      </li>
    </ul>
  );
}

function InquiryForm() {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-[1.75rem] border border-black/[0.06] bg-white/90 p-5 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.08] sm:p-7 lg:text-left">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        Project inquiry
      </p>
      <p className="mt-2 text-[1.15rem] font-semibold tracking-tight text-foreground">
        Tell us what you’re building
      </p>
      <div className="mt-6 flex min-h-0 flex-1 flex-col text-left">
        <Suspense
          fallback={
            <div className="h-64 animate-pulse rounded-2xl bg-neutral-100 dark:bg-white/5" />
          }
        >
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="relative box-border flex min-h-svh w-full flex-col overflow-hidden bg-[#f5f0e8] dark:bg-[#12100e]">
      <JsonLd
        data={webPageJsonLd({ ...PAGE_SEO.contact, type: "ContactPage" })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={aboutHeroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center dark:brightness-[0.92]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_45%,rgba(255,252,247,0.55),transparent_68%)] dark:bg-[radial-gradient(ellipse_75%_60%_at_50%_45%,rgba(18,16,14,0.45),transparent_68%)]"
        aria-hidden
      />

      <Container
        size="wide"
        className="relative z-10 flex flex-1 flex-col justify-center py-[calc(var(--header-height)+1.5rem)] pb-12 md:py-[calc(var(--header-height)+2.5rem)] md:pb-20"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-7 lg:hidden">
          <ContactIntro />
          <InquiryForm />
          <ContactDetails />
        </div>

        <div className="mx-auto hidden max-w-5xl gap-12 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex h-full min-h-0 flex-col">
            <ContactIntro />
            <div className="mt-auto pt-10">
              <ContactDetails />
            </div>
          </div>
          <InquiryForm />
        </div>
      </Container>
    </section>
  );
}
