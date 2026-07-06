import {
  Briefcase,
  Building2,
  Clapperboard,
  Cpu,
  Factory,
  GraduationCap,
  HardHat,
  HeartPulse,
  LayoutGrid,
  Ship,
  ShoppingCart,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the `icon` name stored in sector data to a Lucide component — keeps
 * `constants/industries.ts` free of component references (mirrors serviceIcons).
 */
export const industryIcons: Record<string, LucideIcon> = {
  ShoppingCart,
  Building2,
  HardHat,
  UtensilsCrossed,
  Store,
  Briefcase,
  Cpu,
  HeartPulse,
  Factory,
  Ship,
  GraduationCap,
  Clapperboard,
};

export const FallbackIndustryIcon: LucideIcon = LayoutGrid;
