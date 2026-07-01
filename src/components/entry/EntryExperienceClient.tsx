"use client";

import dynamic from "next/dynamic";

/**
 * Client-side boundary for the Entry Experience dynamic import.
 *
 * `ssr: false` is only valid inside a Client Component (Next.js 15 rule).
 * This thin wrapper is the Client Component; page.tsx (Server Component) imports
 * this, keeping the RSC architecture clean.
 *
 * The null fallback means nothing flashes while the bundle loads — the page
 * behind is the dark background, matching the overlay's own background.
 */
const EntryExperienceDynamic = dynamic(
  () => import("./EntryExperience").then((m) => ({ default: m.EntryExperience })),
  { ssr: false, loading: () => null },
);

export function EntryExperienceClient() {
  return <EntryExperienceDynamic />;
}
