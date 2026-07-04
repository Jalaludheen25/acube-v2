import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib";

type IconTileVariant = "green" | "warm" | "glass";

interface IconTileProps {
  icon: LucideIcon;
  variant?: IconTileVariant;
  size?: "md" | "lg";
  className?: string;
}

const surfaces: Record<IconTileVariant, string> = {
  green: "bg-grad-emerald text-platinum",
  warm: "bg-grad-cta text-platinum",
  glass: "glass-depth text-foreground",
};

/**
 * 3D icon container — a rounded gradient tile with a soft depth shadow holding a
 * Lucide icon. The signature "3D icon" accent used across cards, features, and
 * process steps.
 */
export function IconTile({ icon: Icon, variant = "green", size = "md", className }: IconTileProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl shadow-3d ring-1 ring-inset ring-white/10",
        size === "md" ? "size-12" : "size-14",
        surfaces[variant],
        className,
      )}
    >
      <Icon className={size === "md" ? "size-6" : "size-7"} aria-hidden />
    </span>
  );
}
