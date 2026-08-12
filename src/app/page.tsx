import { Hero } from "@/components/sections/hero";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { FeaturedWork } from "@/components/sections/featured-work";
import { WhyChoose } from "@/components/sections/why-choose";
import { GetStarted } from "@/components/sections/get-started";
import { Compare } from "@/components/sections/compare";
import { FaqChat } from "@/components/sections/faq-chat";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import {
  createPageMetadata,
  faqPageJsonLd,
  webPageJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { PAGE_SEO } from "@/constants/seo";
import { homeFaqs } from "@/data/faq";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata(PAGE_SEO.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(PAGE_SEO.home)} />
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }])}
      />
      <JsonLd data={faqPageJsonLd(homeFaqs)} />
      <Hero />
      <SolutionsGrid />
      <FeaturedWork />
      <WhyChoose />
      <GetStarted />
      <Compare />
      <FaqChat />
      <FinalCta />
    </>
  );
}
