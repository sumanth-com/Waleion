import { Hero } from "@/components/sections/hero";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { FeaturedWork } from "@/components/sections/featured-work";
import { WhyChoose } from "@/components/sections/why-choose";
import { GetStarted } from "@/components/sections/get-started";
import { Compare } from "@/components/sections/compare";
import { FaqChat } from "@/components/sections/faq-chat";
import { FinalCta } from "@/components/sections/final-cta";
import { faqPageJsonLd, serializeJsonLd } from "@/lib/seo";
import { homeFaqs } from "@/data/faq";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(faqPageJsonLd(homeFaqs)),
        }}
      />
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
