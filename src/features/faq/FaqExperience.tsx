import { RevealRoot } from "@/components/motion";
import { Atmosphere, SectionIntro } from "@/components/sections";
import { faqContent } from "@/constants";
import { cn, container } from "@/lib";

import { FaqList } from "./FaqList";

/**
 * FAQ — the calm last practical step before Contact. The entries are native
 * <details> glass cards (keyboard/AT semantics for free); FaqList adds a thin
 * client layer for the live search filter. A soft conic mesh gives the page
 * its own backdrop flavor. No CTA — the section transitions naturally into
 * Contact. Adding an item to faqContent.items renders another entry
 * automatically.
 */
interface FaqExperienceProps {
  as?: "h1" | "h2";
}

export function FaqExperience({ as = "h2" }: FaqExperienceProps) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative overflow-hidden bg-background">
      <RevealRoot>
        <Atmosphere particles={false} />
        {/* Soft conic mesh — FAQ's distinct atmospheric note. */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-40 top-20 size-[30rem] rounded-full opacity-[0.07] blur-3xl [background:conic-gradient(from_120deg,var(--color-celadon),var(--color-champagne),var(--color-pine-teal),var(--color-celadon))]"
        />
        <div className={cn(container.content, "relative pb-24 max-lg:pt-0 lg:py-32")}>
          <SectionIntro
            as={as}
            eyebrow={faqContent.eyebrow}
            title={faqContent.headline}
            titleId="faq-heading"
            split
          />

          <div data-reveal-blur className="mt-16">
            <FaqList />
          </div>
        </div>
      </RevealRoot>
    </section>
  );
}
