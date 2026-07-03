import type { Metadata } from "next";

import { RevealRoot } from "@/components/motion";
import { Breadcrumb, SectionIntro } from "@/components/sections";
import { Button } from "@/components/ui";
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

          <SectionIntro
            as="h1"
            className="mt-8"
            eyebrow="About"
            title={why.headline}
            lede={siteConfig.description ?? undefined}
          />

          <div
            data-reveal
            className="mt-16 grid gap-x-16 gap-y-10 border-t border-divider pt-12 md:grid-cols-2"
          >
            {why.principles.map((principle) => (
              <div key={principle.id}>
                <h2 className={cn(typography.h3, "text-foreground")}>{principle.term}</h2>
                <p className={cn(typography.body, "mt-2 text-muted")}>{principle.description}</p>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-16 border-t border-divider pt-12">
            <p className={cn(typography.label, "flex items-center gap-3 text-gold")}>
              <span aria-hidden className="h-px w-8 bg-gold/60" />
              Visit us
            </p>
            <p className={cn(typography.body, "mt-4 max-w-md text-muted")}>
              {contact.address.formatted}
            </p>
            <Button href="/contact" variant="primary" size="lg" className="mt-8">
              {siteConfig.cta.primary}
            </Button>
          </div>
        </div>
      </RevealRoot>
    </main>
  );
}
