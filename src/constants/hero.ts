import { Building2, Compass, MapPin, ShieldCheck } from "lucide-react";

import type { HeroContent } from "@/types";

/**
 * Hero content.
 *
 * Copy aligns with the approved positioning (PROJECT_BIBLE, Decision #1) and
 * names only verified services (company formation, corporate services from the
 * client business card) — no invented marketing claims (visas/banking omitted
 * until verified).
 *
 * `stats` is intentionally empty: numeric statistics render only once
 * client-verified and will activate automatically with no code change. Until
 * then the Hero shows qualitative, verifiable trust signals.
 */
export const hero: HeroContent = {
  eyebrow: "Business Setup & Corporate Consultancy",
  headlineLines: ["Build Your Business.", "Grow With Confidence.", "In The UAE."],
  subhead:
    "Helping entrepreneurs establish and grow successful businesses across the UAE — " +
    "with expert consultation, company formation, and end-to-end corporate services.",
  trustSignals: [
    { id: "guidance", label: "Professional Guidance", Icon: Compass },
    { id: "setup", label: "Business Setup", Icon: Building2 },
    { id: "location", label: "Bur Dubai · UAE", Icon: MapPin },
    { id: "consultancy", label: "UAE Consultancy", Icon: ShieldCheck },
  ],
  stats: [],
};
