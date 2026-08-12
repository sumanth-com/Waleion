import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/constants/seo";
import { caseStudies } from "@/data/work";
import { shippedProjects } from "@/data/projects";

/**
 * Canonical indexable URLs only.
 * Homepage section rewrites (/work, /expertise) are omitted to avoid duplicates.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[] =
    [
      { path: "/", changeFrequency: "weekly", priority: 1 },
      { path: "/about", changeFrequency: "monthly", priority: 0.8 },
      { path: "/industries", changeFrequency: "monthly", priority: 0.7 },
      { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
      { path: "/get-started", changeFrequency: "monthly", priority: 0.6 },
      { path: "/insights", changeFrequency: "weekly", priority: 0.6 },
      { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
      { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
    ];

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projectEntries = shippedProjects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workEntries = caseStudies.map((project) => ({
    url: absoluteUrl(`/work/${project.id}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...projectEntries, ...workEntries];
}
