import Link from "next/link";

import { cn, typography } from "@/lib";

interface Crumb {
  label: string;
  /** Omitted on the current (last) crumb. */
  href?: string;
}

interface BreadcrumbProps {
  items: readonly Crumb[];
  className?: string;
}

/**
 * Editorial breadcrumb — mono/uppercase labels with gold separators. Server
 * Component; the current page is the non-linked final crumb.
 */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(typography.label, "flex flex-wrap items-center gap-2 text-muted", className)}
    >
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-2">
            {item.href && !last ? (
              <Link
                href={item.href}
                className="transition-colors duration-[var(--duration-normal)] ease-out-quart hover:text-gold"
              >
                {item.label}
              </Link>
            ) : (
              <span className={last ? "text-foreground" : undefined}>{item.label}</span>
            )}
            {!last ? (
              <span aria-hidden className="text-gold/50">
                /
              </span>
            ) : null}
          </span>
        );
      })}
    </nav>
  );
}
