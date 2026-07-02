import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants";

/**
 * Sitemap — homepage only for now. Add future page paths to `routes` and each
 * becomes an entry automatically; no structural change needed as the site grows.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: { path: string; priority: number }[] = [{ path: "", priority: 1 }];

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
