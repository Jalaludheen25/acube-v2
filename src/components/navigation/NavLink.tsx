"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/types";
import { cn } from "@/lib";

interface NavLinkProps {
  item: NavItem;
  /** Called on click — used to close the mobile menu. */
  onNavigate?: () => void;
  className?: string;
}

/**
 * A single navigation link with an animated (CSS) underline. Active state is
 * derived from the current route — exact for "/", prefix for sections so detail
 * pages (e.g. /services/[slug]) keep their parent tab highlighted.
 */
export function NavLink({ item, onNavigate, className }: NavLinkProps) {
  const pathname = usePathname();
  const active =
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`);

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
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
          "absolute -bottom-1 left-0 h-px w-full origin-left bg-gold transition-transform duration-[var(--duration-normal)] ease-out-quart motion-reduce:transition-none",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}
