import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import { createPageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { insightTopics } from "@/data/insights";
import { JsonLd } from "@/components/seo/json-ld";
import { PageSection } from "@/components/layout/page-section";
import { SectionHeader } from "@/components/layout/section-header";
import { SITE } from "@/constants/site";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.insights);

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({ ...PAGE_SEO.insights, type: "CollectionPage" })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <div className="pt-[var(--header-height)]">
        <PageSection spacing="sm" containerClassName="space-y-10">
          <SectionHeader
            headingAs="h1"
            label="Insights"
            title="Useful writing on software and digital products."
            description={`${SITE.name} publishes guides when they help a founder or operator make a better decision — not as keyword pages. Use these topics to brief a project, or ask us the same questions.`}
          />

          <ul className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {insightTopics.map((topic) => (
              <li key={topic.id} className="h-full">
                <article className="flex h-full flex-col rounded-[1.5rem] border border-black/[0.06] bg-white/90 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:border-white/10 dark:bg-white/[0.05] sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-black/[0.08] bg-neutral-50 px-2.5 py-0.5 text-[11px] font-semibold tracking-tight text-foreground dark:border-white/10 dark:bg-white/[0.06]">
                      {topic.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Clock className="size-3" aria-hidden />
                      {topic.readTime} read
                    </span>
                  </div>

                  <h2 className="mt-4 text-[1.05rem] font-semibold tracking-tight text-foreground md:text-[1.125rem]">
                    {topic.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {topic.summary}
                  </p>

                  <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    You’ll walk away with
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {topic.takeaways.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] leading-snug text-foreground/80"
                      >
                        <span
                          className="mt-1.5 size-1 shrink-0 rounded-full bg-emerald-500/70"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground">
                      <Users className="size-3.5" aria-hidden />
                      {topic.audience}
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <p className="mx-auto max-w-xl text-center text-sm text-muted-foreground">
            Have a question that should be on this list?{" "}
            <Link
              href="/contact"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Start a project conversation
            </Link>{" "}
            or read{" "}
            <Link
              href="/about"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              how Waleion works
            </Link>
            .
          </p>
        </PageSection>
      </div>
    </>
  );
}
