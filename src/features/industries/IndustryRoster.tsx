import { industries } from "@/constants";
import { cn } from "@/lib";

interface IndustryRosterProps {
  className?: string;
}

/**
 * The industries roster — a perfectly-aligned two-column (desktop) / single
 * column (mobile) typographic list. Every sector name is always visible for a
 * one-scan recognition; no icons, no cards, no glass. The whole list reveals as
 * one group (data-reveal on the <ul>). Hover is a restrained color-only
 * transition (no movement, scaling, or glass).
 *
 * Semantics: a plain list of sectors we help set up (not sub-headings).
 */
export function IndustryRoster({ className }: IndustryRosterProps) {
  return (
    <ul
      data-reveal
      className={cn("grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16", className)}
    >
      {industries.sectors.map((sector) => (
        <li
          key={sector.id}
          className="border-t border-divider py-6 font-heading text-h3 font-medium text-foreground transition-colors duration-[var(--duration-normal)] ease-out-quart hover:text-brand-green"
        >
          {sector.name}
        </li>
      ))}
    </ul>
  );
}
