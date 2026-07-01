import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

/**
 * Self-hosted via next/font — no render-blocking network request and no CLS.
 * Each font is exposed as a CSS variable consumed by the Tailwind v4 @theme
 * token layer (see src/app/globals.css).
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://acube.ae";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ACUBE — Business Setup & Corporate Consultancy in the UAE",
    template: "%s | ACUBE",
  },
  description:
    "ACUBE helps entrepreneurs and investors establish and grow businesses in the UAE — " +
    "company formation, business setup, visas, banking assistance and corporate services.",
  applicationName: "ACUBE",
  keywords: [
    "business setup UAE",
    "company formation Dubai",
    "business consultancy UAE",
    "UAE company registration",
    "PRO services Dubai",
    "corporate services UAE",
  ],
  openGraph: {
    type: "website",
    siteName: "ACUBE",
    title: "ACUBE — Business Setup & Corporate Consultancy in the UAE",
    description:
      "Establish and grow your business in the UAE with expert consultation, company " +
      "formation, visas and corporate services.",
    url: siteUrl,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACUBE — Business Setup & Corporate Consultancy in the UAE",
    description:
      "Establish and grow your business in the UAE with expert consultation, company " +
      "formation, visas and corporate services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
