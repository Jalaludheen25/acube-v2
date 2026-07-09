import type { AboutTeamSlot } from "@/types";

/**
 * Team roster — HONESTY FLAG.
 *
 * No verified team roster (names, roles, photos) exists yet. Rather than
 * invent people, these are labeled placeholder slots — the same pattern as
 * StatBand's "—" values and ImagePlaceholder's captioned slots — so the
 * section ships with the full card design and the client fills in real
 * details later with no code change.
 */
export const aboutTeam: readonly AboutTeamSlot[] = [
  { id: "team-1", name: "Team Member", role: "Role to be confirmed" },
  { id: "team-2", name: "Team Member", role: "Role to be confirmed" },
  { id: "team-3", name: "Team Member", role: "Role to be confirmed" },
];
