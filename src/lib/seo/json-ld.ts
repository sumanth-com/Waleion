import { SITE } from "@/constants/site";
import {
  SCHEMA_IDS,
  SCHEMA_SERVICES,
  absoluteUrl,
} from "@/constants/seo";
import type { HomeFaq } from "@/data/faq";

type JsonLd = Record<string, unknown>;

export function organizationJsonLd(): JsonLd {
  const sameAs = [SITE.linkedin].filter(Boolean);

  return {
    "@type": "Organization",
    "@id": SCHEMA_IDS.organization,
    name: SITE.legalName,
    url: absoluteUrl(),
    logo: {
      "@type": "ImageObject",
      "@id": SCHEMA_IDS.logo,
      url: absoluteUrl("/images/logo.svg"),
    },
    image: { "@id": SCHEMA_IDS.logo },
    description: SITE.description,
    email: SITE.email,
    sameAs,
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "AdministrativeArea", name: "International" },
    ],
    knowsAbout: [...SCHEMA_SERVICES],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      availableLanguage: ["English"],
      areaServed: "IN",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Waleion software and digital product services",
      itemListElement: SCHEMA_SERVICES.map((name, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@id": SCHEMA_IDS.organization },
          areaServed: { "@type": "Country", name: "India" },
        },
        position: index + 1,
      })),
    },
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    name: SITE.name,
    url: absoluteUrl(),
    description: SITE.description,
    inLanguage: "en",
    publisher: { "@id": SCHEMA_IDS.organization },
  };
}

export function siteGraphJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), websiteJsonLd()],
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}): JsonLd {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.organization },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageJsonLd(faqs: HomeFaq[]): JsonLd {
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
