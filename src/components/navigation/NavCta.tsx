"use client";

import Link from "next/link";

import { useHomeHref } from "@/hooks";
import { cn } from "@/lib";

type NavCtaVariant = "primary" | "secondary";

interface NavCtaProps {
  href: string;
  label: string;
  variant?: NavCtaVariant;
  onClick?: () => void;
  external?: boolean;
  className?: string;
}

/**
 * Navigation call-to-action. `primary` = brand-red solid (Book Free
 * Consultation); `secondary` = glass (WhatsApp, rendered only when a verified
 * number exists). All styling consumes design tokens; ≥44px touch target.
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
        variant === "primary" && "bg-grad-cta text-white hover:shadow-glow",
        variant === "secondary" && "glass-interactive text-foreground",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </Link>
  );
}
