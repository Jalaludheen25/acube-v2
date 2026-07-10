import { RevealRoot } from "@/components/motion";
import { Atmosphere, SectionIntro } from "@/components/sections";
import { faqContent } from "@/constants";
import { cn, container } from "@/lib";

import { FaqItem } from "./FaqItem";

/**
 * FAQ — the calm last practical step before Contact. Entirely a Server
 * Component: native <details>/<summary> means zero hydration for the accordion;
 * only the reused RevealRoot (section reveal) is client. No CTA — the section
 * transitions naturally into Contact. Adding an item to faqContent.items
 * renders another entry automatically.
 */
interface FaqExperienceProps {
  as?: "h1" | "h2";
}

export function FaqExperience({ as = "h2" }: FaqExperienceProps) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative bg-background">
      <RevealRoot>
        <Atmosphere particles={false} />
        <div className={cn(container.content, "relative pb-24 max-lg:pt-0 lg:py-32")}>
          <SectionIntro
            as={as}
            eyebrow={faqContent.eyebrow}
            title={faqContent.headline}
            titleId="faq-heading"
            split
          />

          <div data-reveal-blur className="mt-16">
            {faqContent.items.map((item, index) => (
              <FaqItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </RevealRoot>
    </section>
  );
}
