import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

import { FloatingParticles, Magnetic, RevealRoot } from "@/components/motion";
import { Logo } from "@/components/ui";
import { footerContent, siteConfig } from "@/constants";
import { cn, container, typography } from "@/lib";

import { FooterContact } from "./FooterContact";
import { FooterNavigation } from "./FooterNavigation";
import { FooterServices } from "./FooterServices";

/**
 * Footer — the site's grand finale. A giant "Let's talk." invitation (outlined
 * type that fills with the gold gradient on hover), then the four editorial
 * groups (brand · navigation · services · contact), a magnetic back-to-top
 * button, and the hairline bottom bar. Server Component; Magnetic is an inert
 * leaf.
 */
export function FooterExperience() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-ink texture relative overflow-hidden bg-grad-emerald">
      {/* Gradient hairline seam between the page and the footer. */}
      <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Ending atmosphere — the finale should feel as alive as the heroes. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute -top-1/4 left-0 h-[150%] w-36 bg-gradient-to-b from-transparent via-champagne/10 to-transparent blur-2xl motion-safe:[animation:light-ray_24s_linear_infinite] max-md:hidden" />
        <span className="blob bg-grad-teal absolute -left-24 bottom-0 size-80 opacity-15 blur-3xl" />
        <FloatingParticles count={12} className="max-md:hidden" />
      </div>

      <RevealRoot>
        <div className={cn(container.content, "relative py-20 lg:py-28")}>
          <div
            aria-hidden
            data-parallax="0.14"
            className="blob bg-grad-celadon pointer-events-none absolute -right-32 -top-24 size-96 opacity-10 blur-3xl"
          />

          {/* Pre-footer invitation — the biggest type on the site. */}
          <div data-reveal className="flex flex-col gap-10 border-b border-divider pb-16 lg:flex-row lg:items-end lg:justify-between">
            <Link
              href="/contact"
              data-cursor-label="Contact"
              className="group relative inline-block w-fit"
              aria-label={siteConfig.cta.primary}
            >
              <span
                aria-hidden
                className="text-stroke block font-display text-hero font-semibold tracking-tight"
              >
                Ready to begin?
              </span>
              <span className="text-shimmer absolute inset-0 block font-display text-hero font-semibold tracking-tight opacity-0 transition-opacity duration-[var(--duration-slow)] group-hover:opacity-100">
                Ready to begin?
              </span>
              <ArrowUpRight
                aria-hidden
                className="absolute -right-10 top-2 size-8 text-gold transition-transform duration-[var(--duration-normal)] ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1 max-lg:hidden"
              />
            </Link>

            <Magnetic strength={0.35} className="shrink-0">
              <a
                href="#main"
                aria-label="Back to top"
                className="glass-interactive inline-flex size-14 items-center justify-center rounded-full text-foreground"
              >
                <ArrowUp className="size-5" aria-hidden />
              </a>
            </Magnetic>
          </div>

          <div data-reveal className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div>
              <Logo className="mx-auto h-9 w-auto md:mx-0" />
              <p className={cn(typography.body, "mt-6 max-w-xs text-muted")}>
                {footerContent.brandStatement}
              </p>
            </div>
            <FooterNavigation />
            <FooterServices />
            <FooterContact />
          </div>

          <div className="mt-16 flex flex-col gap-2 border-t border-divider pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className={typography.caption}>
              © {year} {siteConfig.name}. {footerContent.rightsReserved}
            </p>
            <p className={typography.caption}>{footerContent.developerCredit}</p>
          </div>
        </div>
      </RevealRoot>
    </footer>
  );
}
