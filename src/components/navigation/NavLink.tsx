"use client";

import Link from "next/link";

import type { NavItem } from "@/types";
import { useHomeHref } from "@/hooks";
import { cn } from "@/lib";

interface NavLinkProps {
  item: NavItem;
  active?: boolean;
  /** Called on click — used to close the mobile menu. */
  onNavigate?: () => void;
  className?: string;
}

/**
 * A single navigation link with an animated (CSS) underline and active state.
 * Size/weight can be overridden via `className` (small on desktop, large in the
 * mobile menu) — the component itself hardcodes no design values.
 */
export function NavLink({ item, active = false, onNavigate, className }: NavLinkProps) {
  const toHref = useHomeHref();
  return (
    <Link
      href={toHref(item.href)}
      onClick={onNavigate}
      aria-current={active ? "true" : undefined}
      className={cn(
        "group relative inline-flex w-fit items-center text-body-sm font-medium text-muted transition-colors duration-[var(--duration-normal)] ease-out-quart hover:text-foreground",
        active && "text-foreground",
        className,
      )}
      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{item.label}</span>
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-1 left-0 h-px w-full origin-left bg-brand-red transition-transform duration-[var(--duration-normal)] ease-out-quart motion-reduce:transition-none",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}
