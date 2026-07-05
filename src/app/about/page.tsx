import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { RevealRoot } from "@/components/motion";
import { Breadcrumb, SectionIntro } from "@/components/sections";
import { Button, IconTile } from "@/components/ui";
import { contact, siteConfig, why } from "@/constants";
import { cn, container, typography } from "@/lib";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.description ?? undefined,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "py-32 lg:py-40")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

          {/* Editorial spread — sticky manifesto left, numbered principles right. */}
          <div className="mt-8 lg:grid lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionIntro
                as="h1"
                eyebrow="About"
                title={why.headline}
                split
                lede={siteConfig.description ?? undefined}
              />
              <div data-reveal className="mt-10 hidden lg:block">
                <Button href="/contact" variant="primary" size="lg">
                  {siteConfig.cta.primary}
                </Button>
              </div>
            </div>

            <div className="relative mt-16 lg:mt-4">
              <span
                aria-hidden
                data-spine
                className="absolute -left-6 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-gold/60 via-divider to-transparent lg:block"
              />
              <div data-reveal-stagger className="space-y-14">
                {why.principles.map((principle, index) => (
                  <article key={principle.id} className="relative">
                    <span aria-hidden className="index-giant text-stroke block opacity-50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className={cn(typography.h3, "-mt-5 text-foreground")}>
                      {principle.term}
                    </h2>
                    <p className={cn(typography.body, "mt-3 max-w-xl text-muted")}>
                      {principle.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Visit us — glass panel finale. */}
          <div
            data-reveal-scale
            className="glass-depth relative mt-24 overflow-hidden rounded-[var(--radius-2xl)] p-8 lg:p-12"
          >
            <div
              aria-hidden
              data-parallax="0.15"
              className="blob bg-grad-celadon pointer-events-none absolute -right-20 -top-24 size-72 opacity-25 blur-3xl"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-5">
                <IconTile icon={MapPin} variant="green" size="lg" className="float" />
                <div>
                  <p className={cn(typography.label, "text-gold")}>Visit us</p>
                  <p className={cn(typography.body, "mt-3 max-w-md text-muted")}>
                    {contact.address.formatted}
                  </p>
                </div>
              </div>
              <Button href="/contact" variant="primary" size="lg" className="shrink-0 lg:hidden">
                {siteConfig.cta.primary}
              </Button>
            </div>
          </div>
        </div>
      </RevealRoot>
    </main>
  );
}
