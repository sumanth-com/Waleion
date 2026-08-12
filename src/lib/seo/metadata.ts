import type { Metadata } from "next";
import { SITE } from "@/constants/site";
import { PAGE_SEO, absoluteUrl } from "@/constants/seo";

const ogImageUrl = absoluteUrl(SITE.ogImage);

export const defaultMetadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: PAGE_SEO.home.title,
    template: `%s | ${SITE.name}`,
  },
  description: PAGE_SEO.home.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: absoluteUrl() }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "software development company in India",
    "digital product agency",
    "custom software development",
    "UI/UX design",
    "full-stack development",
    "SaaS development",
    "web application development",
    "Waleion",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/images/logo.svg", type: "image/svg+xml" }],
    shortcut: ["/images/logo.svg"],
    apple: [{ url: "/images/logo.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: absoluteUrl(),
    siteName: SITE.name,
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: PAGE_SEO.home.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    site: SITE.twitter,
    creator: SITE.twitter,
    images: [ogImageUrl],
  },
  alternates: {
    canonical: absoluteUrl(),
  },
  category: "technology",
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : ogImageUrl;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE.twitter,
      creator: SITE.twitter,
      images: [ogImage],
    },
  };
}
