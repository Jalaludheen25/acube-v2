import { Button } from "@/components/ui";
import { RevealRoot } from "@/components/motion";
import { SectionIntro } from "@/components/sections";
import { packagesContent } from "@/constants";
import { cn, container, typography } from "@/lib";

import { SetupStructureList } from "./SetupStructureList";

/**
 * Business setup guidance (nav label "Packages", but never called that here).
 *
 * Presents the UAE business structures editorially and reinforces guidance — the
 * CTA never asks the visitor to choose, it offers help choosing. No prices, no
 * package cards, no comparison. The verified-packages data slot is intentionally
 * NOT referenced here (data layer only). Server Component; the reused RevealRoot
 * enhances the DOM.
 */
interface PackagesExperienceProps {
  as?: "h1" | "h2";
}

export function PackagesExperience({ as = "h2" }: PackagesExperienceProps) {
  return (
    <section id="packages" aria-labelledby="packages-heading" className="relative bg-background">
      <RevealRoot>
        <div className={cn(container.content, "pb-24 max-lg:pt-0 lg:py-32")}>
          <SectionIntro
            as={as}
            eyebrow={packagesContent.eyebrow}
            title={packagesContent.headline}
            titleId="packages-heading"
            lede={packagesContent.intro}
          />

          <SetupStructureList />

          <div data-reveal className="mt-16 max-w-3xl border-t border-divider pt-12">
            <p className={cn(typography.body, "text-muted")}>{packagesContent.cta.line}</p>
            <Button href={packagesContent.cta.href} variant="primary" size="lg" className="mt-6">
              {packagesContent.cta.label}
            </Button>
          </div>
        </div>
      </RevealRoot>
    </section>
  );
}
