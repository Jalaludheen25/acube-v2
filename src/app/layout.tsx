import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

import { ScrollProgress } from "@/components/motion";
import { Navbar } from "@/components/navigation";
import { OrganizationSchema } from "@/components/seo";
import { siteConfig, themeColorHex } from "@/constants";
import { FooterExperience } from "@/features/footer";
import { Providers } from "@/providers";

import "./globals.css";

/**
 * Self-hosted via next/font — no render-blocking network request and no CLS.
 * Each font is exposed as a CSS variable consumed by the Tailwind v4 @theme
 * token layer (see src/app/globals.css).
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/**
 * Site-level metadata is driven entirely by `siteConfig` (no hardcoded copy).
 * `description`/`keywords` are null until client-approved in the SEO milestone,
 * so they are omitted here rather than invented (Decision b).
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description ?? undefined,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  icons: { icon: "/brand/acube-logo.png" },
  ...(siteConfig.keywords ? { keywords: siteConfig.keywords } : {}),
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title.default,
    description: siteConfig.description ?? undefined,
    url: siteConfig.url,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary",
    title: siteConfig.title.default,
    description: siteConfig.description ?? undefined,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: themeColorHex,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <OrganizationSchema />
        <Providers>
          <a
            href="#main"
            className="sr-only rounded-md bg-surface px-4 py-2 text-foreground focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[var(--z-max)]"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          {children}
          <FooterExperience />
        </Providers>
      </body>
    </html>
  );
}
