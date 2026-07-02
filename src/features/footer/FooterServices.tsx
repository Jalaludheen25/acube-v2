import { footerContent, servicesContent } from "@/constants";
import { cn, typography } from "@/lib";

const headingClass = cn(typography.label, "text-brand-green");
const linkClass = cn(
  typography.bodySmall,
  "text-muted transition-colors duration-[var(--duration-normal)] ease-out-quart hover:text-foreground",
);

/**
 * Footer services — category names only, reused from `servicesContent`. The
 * individual services are intentionally not repeated here; each category links
 * to the Services section.
 */
export function FooterServices() {
  return (
    <div>
      <h2 className={headingClass}>{footerContent.headings.services}</h2>
      <ul className="mt-6 flex flex-col gap-3">
        {servicesContent.categories.map((category) => (
          <li key={category.id}>
            <a href="#services" className={linkClass}>
              {category.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
