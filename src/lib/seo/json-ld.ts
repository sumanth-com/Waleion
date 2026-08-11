import { SITE } from "@/constants/site";
import type { OrganizationJsonLd, WebSiteJsonLd } from "@/types";
import type { HomeFaq } from "@/data/faq";

export function organizationJsonLd(): OrganizationJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.svg`,
    description: SITE.description,
    email: SITE.email,
    sameAs: [
      // Add social profiles when available
    ],
  };
}

export function websiteJsonLd(): WebSiteJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
    },
  };
}

export function faqPageJsonLd(faqs: HomeFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
