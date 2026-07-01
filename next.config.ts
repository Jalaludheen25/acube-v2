import type { NextConfig } from "next";

/**
 * ACUBE V2 — Next.js configuration.
 *
 * `output: "standalone"` produces a self-contained server bundle for the
 * Hostinger Node.js deployment (PM2 + Nginx). It is gated behind
 * BUILD_STANDALONE=true because the standalone step symlinks node_modules,
 * which requires admin / Developer Mode on Windows. The Hostinger (Linux)
 * production build sets BUILD_STANDALONE=true; local dev builds skip it.
 *
 * Library-specific config (e.g. Three.js transpilation) is added in the
 * milestone that introduces it.
 */
const useStandalone = process.env.BUILD_STANDALONE === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(useStandalone ? { output: "standalone" as const } : {}),
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
