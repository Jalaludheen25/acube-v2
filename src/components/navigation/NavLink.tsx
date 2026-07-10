"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/types";
import { cn } from "@/lib";

interface NavLinkProps {
  item: NavItem;
  /** Active override (the desktop nav computes it once for the sliding
   *  indicator); when omitted, derived from the current route. */
  active?: boolean;
  /** Called on click — used to close the mobile menu. */
  onNavigate?: () => void;
  className?: string;
}

/**
 * A single navigation link. Hover language: soft color transition, a subtle
 * lift, a whisper of letter-spacing, and a celadon→champagne gradient
 * underline sweeping in under the label. Active links read at full
 * foreground (the desktop nav adds its sliding gradient pill behind them).
 */
export function NavLink({ item, active: activeProp, onNavigate, className }: NavLinkProps) {
  const pathname = usePathname();
  const active =
    activeProp ??
    (item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`));

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group inline-flex w-fit items-center text-body-sm font-medium text-muted transition-[color,transform,letter-spacing] duration-[var(--duration-normal)] ease-out-quart hover:-translate-y-px hover:tracking-[0.035em] hover:text-foreground motion-reduce:transition-none",
        active && "text-foreground",
        className,
      )}
      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="relative">
        {item.label}
        <span
          aria-hidden
          className={cn(
            "absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-celadon via-champagne to-transparent transition-transform duration-[var(--duration-normal)] ease-out-quart motion-reduce:transition-none",
            active ? "scale-x-0" : "scale-x-0 group-hover:scale-x-100",
          )}
        />
      </span>
    </Link>
  );
}
