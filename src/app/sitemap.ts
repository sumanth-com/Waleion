import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { caseStudies } from "@/data/work";

/**
 * Core routes for SEO. Extend as pages are built.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/capabilities",
    "/industries",
    "/process",
    "/about",
    "/insights",
    "/contact",
  ];

  const staticEntries = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
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
