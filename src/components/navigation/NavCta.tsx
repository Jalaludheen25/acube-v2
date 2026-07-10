"use client";

import Link from "next/link";

import { useHomeHref } from "@/hooks";
import { cn } from "@/lib";

type NavCtaVariant = "primary" | "secondary" | "contact";

interface NavCtaProps {
  href: string;
  label: string;
  variant?: NavCtaVariant;
  onClick?: () => void;
  external?: boolean;
  className?: string;
}

/**
 * Navigation call-to-action. `contact` = the header's premium journey-end
 * button: emerald gradient glass with a champagne edge, shine sweep, celadon
 * glow on hover, and a soft press. `primary` = brand-red solid (page-level
 * "Book Free Consultation"); `secondary` = plain glass (WhatsApp). All
 * styling consumes design tokens; ≥44px touch target.
 */
export function NavCta({
  href,
  label,
  variant = "primary",
  onClick,
  external,
  className,
}: NavCtaProps) {
  const toHref = useHomeHref();
  return (
    <Link
      href={toHref(href)}
      onClick={onClick}
      className={cn(
        "touch-target inline-flex items-center justify-center rounded-md px-5 text-button font-semibold transition duration-[var(--duration-normal)] ease-out-quart",
        variant === "primary" && "bg-grad-cta text-platinum hover:shadow-glow",
        variant === "secondary" && "glass-interactive text-foreground",
        variant === "contact" &&
          "btn-shine relative overflow-hidden rounded-full border border-champagne/40 bg-grad-emerald px-6 text-platinum shadow-[0_0_20px_-8px_color-mix(in_srgb,var(--color-celadon)_50%,transparent)] hover:-translate-y-0.5 hover:glow-celadon active:translate-y-0 active:scale-[0.97]",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </Link>
  );
}
