import { industries } from "@/constants";
import type { IndustrySector } from "@/types";

/** All sectors in display order (the roster). */
export const allSectors: readonly IndustrySector[] = industries.sectors;

/** Find a sector by its id (which doubles as its URL slug). */
export function getSectorBySlug(slug: string): IndustrySector | null {
  return industries.sectors.find((sector) => sector.id === slug) ?? null;
}

/** Sectors other than the given one — for the "related sectors" grid. */
export function getRelatedSectors(slug: string, limit = 6): readonly IndustrySector[] {
  return industries.sectors.filter((sector) => sector.id !== slug).slice(0, limit);
}
