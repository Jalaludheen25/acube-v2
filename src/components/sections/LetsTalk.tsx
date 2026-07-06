import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Magnetic, RevealRoot } from "@/components/motion";
import { siteConfig } from "@/constants";
import { cn, container, typography } from "@/lib";

interface LetsTalkProps {
  /** Supporting line under the wordmark. */
  lede?: string;
  className?: string;
}

/**
 * Pre-footer "Let's Talk" band — the recurring conversion moment on inner
 * pages. A huge display wordmark with a continuous gold shimmer that fills
 * solid on hover, a magnetic CTA, and drifting parallax blobs on the dark
 * exhale surface. Server Component; Magnetic is an inert leaf.
 */
export function LetsTalk({
  lede = "Tell us where you are — we'll take it from there. No pressure, no obligation.",
  className,
}: LetsTalkProps) {
  return (
    <section
      aria-label="Start a conversation"
      className={cn("section-exhale texture relative overflow-hidden", className)}
    >
      <RevealRoot>
        <div className={cn(container.content, "relative py-24 text-center lg:py-32")}>
          <span
            aria-hidden
            data-parallax="0.2"
            className="blob bg-grad-celadon pointer-events-none absolute -left-24 top-0 size-80 opacity-15 blur-3xl"
          />
          <span
            aria-hidden
            data-parallax="-0.14"
            className="blob bg-grad-teal pointer-events-none absolute -right-24 bottom-0 size-96 opacity-20 blur-3xl"
          />

          <Link
            href="/contact"
            data-cursor-label="Contact"
            aria-label={siteConfig.cta.primary}
            className="group relative mx-auto inline-flex w-fit items-center gap-4"
          >
            <span className="relative block">
              <span
                aria-hidden
                className="text-stroke block font-display text-hero font-semibold tracking-tight"
              >
                Let&apos;s talk.
              </span>
              <span className="text-shimmer absolute inset-0 block font-display text-hero font-semibold tracking-tight opacity-0 transition-opacity duration-[var(--duration-slow)] group-hover:opacity-100">
                Let&apos;s talk.
              </span>
            </span>
            <ArrowUpRight
              aria-hidden
              className="size-10 shrink-0 text-gold transition-transform duration-[var(--duration-normal)] ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1 max-lg:hidden"
            />
          </Link>

          <p data-reveal className={cn(typography.body, "relative mx-auto mt-8 max-w-xl text-muted")}>
            {lede}
          </p>

          <Magnetic className="relative mt-10 inline-block">
            <Link
              href="/contact"
              className="btn-shine bg-grad-cta inline-flex items-center gap-2 rounded-md px-8 py-4 text-button font-semibold text-platinum shadow-glow transition-transform duration-[var(--duration-normal)] ease-out-quart hover:-translate-y-0.5"
            >
              {siteConfig.cta.primary}
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </Magnetic>
        </div>
      </RevealRoot>
    </section>
  );
}
