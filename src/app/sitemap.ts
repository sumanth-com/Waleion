import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { caseStudies } from "@/data/work";
import { shippedProjects } from "@/data/projects";

/**
 * Core routes for SEO.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/industries",
    "/expertise",
    "/work",
    "/contact",
    "/get-started",
  ];

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
    priority: 0.5,
  }));

  const projectEntries = shippedProjects.map((project) => ({
    url: `${SITE.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...projectEntries, ...workEntries];
}
