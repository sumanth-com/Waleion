import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/constants/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/private/",
          "/contact/thank-you",
        ],
      },
    ],
    sitemap: `${absoluteUrl()}/sitemap.xml`,
    host: absoluteUrl(),
  };
}
