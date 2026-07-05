import Link from "next/link";

import { footerContent, mainNav } from "@/constants";
import { cn, typography } from "@/lib";

const headingClass = cn(typography.label, "text-gold");
const linkClass = cn(
  typography.bodySmall,
  "text-muted transition-colors duration-[var(--duration-normal)] ease-out-quart hover:text-foreground",
  "max-lg:touch-target max-lg:flex max-lg:items-center max-lg:-mx-2 max-lg:px-2",
);

/**
 * Footer navigation — reuses the primary `mainNav` section anchors (single
 * source of truth; labels stay consistent with the header). Plain anchors keep
 * the footer pure HTML (no hydration).
 */
export function FooterNavigation() {
  return (
    <nav aria-label={footerContent.headings.navigation}>
      <h2 className={headingClass}>{footerContent.headings.navigation}</h2>
      <ul className="mt-6 flex flex-col gap-3">
        {mainNav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href.startsWith("#") ? `/${item.href}` : item.href}
              className={linkClass}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
