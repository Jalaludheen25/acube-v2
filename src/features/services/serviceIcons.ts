import {
  Archive,
  BadgeCheck,
  Briefcase,
  Building,
  Building2,
  Circle,
  FileSignature,
  FileText,
  Handshake,
  Rocket,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the `icon` name stored in service data to a Lucide component. Keeping the
 * data as icon-name strings keeps `constants/services.ts` free of component refs.
 */
export const serviceIcons: Record<string, LucideIcon> = {
  Rocket,
  Building2,
  BadgeCheck,
  Handshake,
  Building,
  Briefcase,
  FileText,
  FileSignature,
  Archive,
  Scale,
  ShieldCheck,
};

export const FallbackServiceIcon: LucideIcon = Circle;
