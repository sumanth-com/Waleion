import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { caseStudies } from "@/data/work";

/**
 * Core routes for SEO. Homepage sections cover Expertise / Work / Contact.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/industries"];

  const staticEntries = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const workEntries = caseStudies.map((project) => ({
    url: `${SITE.url}/work/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...workEntries];
}
