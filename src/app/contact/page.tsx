import type { Metadata } from "next";
import { MapPin } from "lucide-react";

import { RevealRoot } from "@/components/motion";
import { Breadcrumb } from "@/components/sections";
import { Button, IconTile } from "@/components/ui";
import { contact, siteConfig } from "@/constants";
import { ContactExperience, ContactHero } from "@/features/contact";
import { cn, container, typography } from "@/lib";
import { whatsappHref } from "@/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with ACUBE about setting up or running your business in the UAE. Call, email, or send a message — we'll get back to you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main" className="relative">
      <ContactHero />

      {/* Dark immersive experience — breadcrumb sits on the dark surface. */}
      <div className="theme-dark bg-ink-black">
        <div className={cn(container.content, "pt-10")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        </div>
      </div>

      <ContactExperience />

      {/* Closing: visit us in person — the last human touchpoint before the footer. */}
      <section aria-label="Visit us" className="theme-dark relative overflow-hidden bg-ink-black">
        <RevealRoot>
          <div className={cn(container.content, "relative pb-24 lg:pb-32")}>
            <div
              data-reveal-scale
              className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-platinum/10 bg-ink-black/55 p-8 backdrop-blur-xl lg:p-12"
            >
              <span
                aria-hidden
                data-parallax="0.15"
                className="blob bg-grad-celadon pointer-events-none absolute -right-20 -top-24 size-72 opacity-20 blur-3xl"
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
                {contact.whatsapp ? (
                  <Button
                    href={whatsappHref(contact.whatsapp.digits)}
                    variant="secondary"
                    size="lg"
                    external
                    className="shrink-0"
                  >
                    {siteConfig.cta.whatsapp}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </RevealRoot>
      </section>
    </main>
  );
}
