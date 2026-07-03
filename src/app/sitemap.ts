import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants";
import { allServices } from "@/features/services";

/**
 * Sitemap — homepage, the top-level routes, and every service detail page
 * (generated from the services data). Add a path to `routes` and it appears
 * automatically; new services need no change here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
    ...allServices.map((service) => ({ path: `/services/${service.slug}`, priority: 0.7 })),
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
