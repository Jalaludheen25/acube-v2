import type { JourneyStage as Stage } from "@/types";
import { cn, typography } from "@/lib";

interface JourneyStageProps {
  stage: Stage;
}

/**
 * A single journey stage — title + one short line, nothing else. No number, no
 * icon, no card. Typography dominates; generous vertical rhythm gives the
 * section its calm, editorial feel.
 */
export function JourneyStage({ stage }: JourneyStageProps) {
  return (
    <li className="py-8 lg:py-12">
      <h3 className={cn(typography.h2, "text-foreground")}>{stage.title}</h3>
      <p className={cn(typography.body, "mt-3 max-w-xl text-muted")}>{stage.description}</p>
    </li>
  );
}
