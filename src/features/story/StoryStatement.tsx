import { cn, typography } from "@/lib";

interface StoryStatementProps {
  id?: string;
  /** Semantic heading level. h2 = the section's main heading (Beat 1). */
  level: "h2" | "h3";
  lines: readonly string[];
  className?: string;
}

/**
 * A story statement rendered as a real heading. Lines are block spans so they
 * can stagger-reveal (data-reveal-stagger) while remaining a single, accessible
 * heading. Visual size is chosen independently of semantic level.
 */
export function StoryStatement({ id, level, lines, className }: StoryStatementProps) {
  const spans = lines.map((line) => (
    <span key={line} className="block">
      {line}
    </span>
  ));

  const base = "text-balance text-foreground";

  if (level === "h2") {
    return (
      <h2 id={id} data-reveal-stagger className={cn(typography.display, base, className)}>
        {spans}
      </h2>
    );
  }

  return (
    <h3 id={id} data-reveal-stagger className={cn(typography.h2, base, className)}>
      {spans}
    </h3>
  );
}
