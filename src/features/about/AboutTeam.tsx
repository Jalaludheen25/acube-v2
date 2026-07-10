import { User } from "lucide-react";

import { TiltCard } from "@/components/motion";
import { aboutTeam } from "@/constants";
import { cn, typography } from "@/lib";

/**
 * Team — placeholder card grid. No verified roster exists yet (see the
 * honesty note on `aboutTeam`), so this ships the full premium card
 * treatment — TiltCard + card-spotlight + hover-lift, matching Values and
 * Services — with clearly-labeled placeholder content instead of invented
 * names or photos. The client drops real details in later with no code
 * change, the same pattern as StatBand and ImagePlaceholder.
 */
export function AboutTeam() {
  return (
    <ul data-reveal-tilt className="grid gap-6 sm:grid-cols-3">
      {aboutTeam.map((member) => (
        <li key={member.id}>
          <TiltCard className="h-full">
            <div className="card-spotlight glass group relative flex h-full flex-col items-center overflow-hidden rounded-2xl p-8 text-center shadow-3d transition-transform duration-[var(--duration-normal)] ease-out-quart hover:-translate-y-1 hover:shadow-3d-lg">
              <span className="flex size-20 items-center justify-center rounded-full bg-grad-celadon text-ink-black shadow-3d transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:scale-110">
                <User className="size-8" aria-hidden />
              </span>
              <p className={cn(typography.h3, "mt-5 text-foreground")}>{member.name}</p>
              <p className={cn(typography.bodySmall, "mt-1 text-gold")}>{member.role}</p>
              <p className={cn(typography.caption, "mt-4")}>Photo &amp; bio to be added</p>
            </div>
          </TiltCard>
        </li>
      ))}
    </ul>
  );
}
