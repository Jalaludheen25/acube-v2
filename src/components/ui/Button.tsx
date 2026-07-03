import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  /** Renders an anchor (Link) when provided; otherwise a <button>. */
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  children: ReactNode;
}

/**
 * Shared button/CTA primitive. `primary` = brand-red solid, `secondary` = glass.
 * All styling consumes design tokens; ≥44px touch target. Renders as a Next
 * Link when `href` is set, else a native button.
 */
export function Button({
  href,
  variant = "primary",
  size = "md",
  external,
  onClick,
  type = "button",
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    "touch-target inline-flex items-center justify-center rounded-md font-semibold transition duration-[var(--duration-normal)] ease-out-quart",
    size === "md" && "px-5 text-button",
    size === "lg" && "px-7 py-4 text-button",
    // Emerald gradient CTA; `text-white` (not text-foreground) so the label
    // stays legible even inside a `.section-exhale` (foreground → dark ink).
    variant === "primary" && "bg-grad-cta text-white hover:shadow-glow",
    variant === "secondary" && "glass-interactive text-foreground",
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
