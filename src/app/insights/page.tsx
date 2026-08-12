import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { PAGE_SEO, INSIGHT_TOPICS } from "@/constants/seo";
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
            description={`${SITE.name} will publish guides when they help a founder or operator make a better decision — not as keyword pages. Nothing here is filler.`}
          />

          <ul className="mx-auto max-w-2xl space-y-4">
            {INSIGHT_TOPICS.map((topic) => (
              <li
                key={topic.title}
                className="rounded-[1.25rem] border border-black/[0.06] bg-white/80 px-5 py-4 dark:border-white/10 dark:bg-white/[0.05]"
              >
                <p className="text-[15px] font-medium tracking-tight text-foreground">
                  {topic.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {topic.summary}
                </p>
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
