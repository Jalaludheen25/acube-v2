import { RevealRoot } from "@/components/motion";
import { Logo } from "@/components/ui";
import { footerContent, siteConfig } from "@/constants";
import { cn, container, typography } from "@/lib";

import { FooterContact } from "./FooterContact";
import { FooterNavigation } from "./FooterNavigation";
import { FooterServices } from "./FooterServices";

/**
 * Footer — the quiet, editorial conclusion of the ACUBE experience. Four groups
 * (brand · navigation · services · contact) over a hairline bottom bar. Pure
 * Server Component: no new client components, no added hydration or runtime JS
 * (RevealRoot is the shared, site-wide reveal boundary). All data is reused from
 * existing constants; only the brand statement, headings, and bottom-bar copy
 * live in footerContent.
 */
export function FooterExperience() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-ink texture relative bg-grad-emerald">
      <RevealRoot>
        <div data-reveal className={cn(container.content, "py-20 lg:py-28")}>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
