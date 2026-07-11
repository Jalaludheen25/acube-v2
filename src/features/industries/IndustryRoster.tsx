import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { TiltCard } from "@/components/motion";
import { industries } from "@/constants";
import { cn } from "@/lib";

import { FallbackIndustryIcon, industryIcons } from "./industryIcons";

interface IndustryRosterProps {
  className?: string;
}

/**
 * The industries roster as pointer-tracked 3D glass cards — tilt + cursor
 * spotlight + hover lift (the premium card treatment shared with Services
 * and Values), gold fill sweep, icon micro-animation, and an arrow that
 * slides in on hover. Cards stagger in; each links to its sector detail page.
 */
export function IndustryRoster({ className }: IndustryRosterProps) {
  return (
    <ul
      data-reveal-stagger
      className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}
    >
      {industries.sectors.map((sector, index) => {
        const Icon = (sector.icon && industryIcons[sector.icon]) || FallbackIndustryIcon;
        return (
          <li key={sector.id}>
            <TiltCard maxTilt={6} className="h-full">
              <Link
                href={`/industries/${sector.id}`}
                data-cursor-label="Explore"
                className="glass card-spotlight group relative flex h-full min-h-[8rem] flex-col justify-between overflow-hidden rounded-xl p-5 shadow-3d transition-[transform,box-shadow,border-color] duration-[var(--duration-normal)] ease-out-quart hover:-translate-y-1 hover:shadow-3d-lg"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-t from-gold/12 to-transparent transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:scale-y-100"
                />
                <span className="relative flex items-start justify-between gap-3">
                  <span className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-grad-celadon text-ink-black shadow-3d transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-mono text-label uppercase tracking-wider text-muted/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 -translate-x-1 translate-y-1 text-gold opacity-0 transition-all duration-[var(--duration-normal)] ease-out-quart group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    aria-hidden
                  />
                </span>
                <span className="relative font-heading text-h3 font-medium text-foreground transition-colors duration-[var(--duration-normal)] ease-out-quart group-hover:text-gold">
                  {sector.name}
                </span>
              </Link>
            </TiltCard>
          </li>
        );
      })}
    </ul>
  );
}
