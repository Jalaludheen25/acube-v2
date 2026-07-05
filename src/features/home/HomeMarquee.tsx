import Link from "next/link";

import { Marquee } from "@/components/motion";
import { industries } from "@/constants";
import { cn } from "@/lib";

/**
 * Full-bleed industries marquee — a kinetic divider between the pillars and
 * the trust statement. Two counter-scrolling rows of the real sector names
 * (serif, ghosted second row) on the dark pine surface; the whole band links
 * to /industries. Server Component, CSS-driven, zero JS.
 */
export function HomeMarquee() {
  return (
    <section aria-label="Industries we serve" className="section-exhale texture relative overflow-hidden py-14 lg:py-20">
      <Link href="/industries" data-cursor-label="Industries" className="block" aria-label="Explore the industries we serve">
        <Marquee speed={44}>
          {industries.sectors.map((sector) => (
            <span
              key={sector.id}
              className="flex shrink-0 items-center font-display text-h2 font-semibold tracking-tight text-foreground"
            >
              <span className="px-6">{sector.name}</span>
              <span aria-hidden className="text-gold/70">
                ✦
              </span>
            </span>
          ))}
        </Marquee>
        <Marquee speed={58} reverse className="mt-4 opacity-35">
          {industries.sectors.map((sector) => (
            <span
              key={sector.id}
              className={cn("flex shrink-0 items-center font-display text-h3 font-medium tracking-tight text-muted")}
            >
              <span className="px-5">{sector.name}</span>
              <span aria-hidden className="text-gold/50">
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </Link>
    </section>
  );
}
