import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { TiltCard } from "@/components/motion";
import { packagesContent } from "@/constants";
import { cn, typography } from "@/lib";

const surfaces = [
  { surface: "bg-grad-emerald", dark: true },
  { surface: "bg-grad-teal", dark: true },
  { surface: "bg-grad-sand", dark: false },
] as const;

/**
 * The three UAE business structures as pointer-tracked 3D cards — each with
 * its own gradient surface, an outlined index numeral, and an invitation to
 * discuss (never a price, never a "choose this" push). Server Component;
 * TiltCard is an inert leaf.
 */
export function SetupStructureList() {
  return (
    <ul data-reveal-stagger className="mt-16 grid gap-6 lg:grid-cols-3">
      {packagesContent.structures.map((structure, index) => {
        const look = surfaces[index % surfaces.length] ?? surfaces[0];
        return (
          <li key={structure.id}>
            <TiltCard className="h-full">
              <Link
                href={packagesContent.cta.href}
                data-cursor-label="Discuss"
                className={cn(
                  "card-spotlight texture group relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-2xl p-8 shadow-3d",
                  look.surface,
                  look.dark && "theme-dark",
                )}
              >
                <span
                  aria-hidden
                  className="index-corner text-stroke pointer-events-none absolute right-6 top-6 select-none opacity-40"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <h3 className={cn(typography.h2, "text-foreground")}>{structure.name}</h3>
                  <p className={cn(typography.bodySmall, "mt-4 text-muted")}>
                    {structure.description}
                  </p>
                </div>
                <span className="relative mt-10 inline-flex items-center gap-2 text-body-sm font-medium text-gold">
                  Discuss this structure
                  <ArrowUpRight
                    className="size-4 transition-transform duration-[var(--duration-normal)] ease-out-quart group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </TiltCard>
          </li>
        );
      })}
    </ul>
  );
}
