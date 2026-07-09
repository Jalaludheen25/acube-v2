import type { Metadata } from "next";

import { RevealRoot } from "@/components/motion";
import { Breadcrumb, LetsTalk, SectionIntro } from "@/components/sections";
import {
  PackagesComparison,
  PackagesShowcase,
  PackagesStack,
  SetupStructureList,
} from "@/features/packages";
import { packagesContent } from "@/constants";
import { cn, container } from "@/lib";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "ACUBE's business setup packages — Starter, Professional, and Enterprise — from your first trade licence to a full corporate partnership, tailored on a free consultation.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <main id="main" className="relative bg-background">
      {/* Two renderings, one visible at a time (CSS-gated): the pinned scene
          and the stacked fallback both use h2s, so the page's single h1 is
          the screen-reader heading here. */}
      <h1 className="sr-only">Business Setup Packages</h1>

      <PackagesShowcase />
      <PackagesStack />

      <RevealRoot>
        <div className={cn(container.content, "pt-16 lg:pt-20")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Packages" }]} />
        </div>

        <PackagesComparison />

        {/* Business structures — supporting guidance, unchanged content. */}
        <section aria-label="Business structures" className="relative bg-background">
          <div className={cn(container.content, "pb-24 lg:pb-32")}>
            <SectionIntro
              eyebrow={packagesContent.eyebrow}
              title={packagesContent.headline}
              size="h2"
              lede={packagesContent.intro}
            />
            <SetupStructureList />
          </div>
        </section>
      </RevealRoot>

      <LetsTalk lede="Tell us where you are, and we'll recommend the right package — no pressure, no obligation." />
    </main>
  );
}
