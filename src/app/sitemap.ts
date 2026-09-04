import type { MetadataRoute } from "next";
import { brand } from "@/content/brand";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services/", "/case-studies/", "/about/", "/contact/"].map(
    (path) => ({
      url: `${brand.siteUrl}${path === "" ? "/" : path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const caseStudyRoutes = projects.map((project) => ({
    url: `${brand.siteUrl}/case-studies/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
