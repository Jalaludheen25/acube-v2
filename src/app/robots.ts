import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants";

/**
 * robots.txt — allow full indexing (development/review baseline) and point
 * crawlers at the sitemap. Tightened later, before production if needed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
