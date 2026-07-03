import type { ReactNode } from "react";

import { cn, typography } from "@/lib";

interface SectionIntroProps {
  /** Small mono/uppercase label, preceded by a gold rule. */
  eyebrow: string;
  /** Section title — a string, or an array rendered as stacked lines. */
  title: string | readonly string[];
  /** id for the <h2>, referenced by the section's aria-labelledby. */
  titleId?: string;
  /** Optional framing line beneath the title. */
  lede?: string;
  /** Title scale: the larger editorial "display" (default) or "h2". */
  size?: "display" | "h2";
  /** Heading level — "h2" for in-page sections (default), "h1" for a page hero. */
  as?: "h1" | "h2";
  /** Extra classes on the wrapper (e.g. width overrides). */
  className?: string;
  /** Optional trailing node (e.g. a small aside) — rarely needed. */
  children?: ReactNode;
}

/**
 * Editorial section header — the shared rhythm for every section intro.
 *
 * A gold rule + mono eyebrow, a large serif (Fraunces) title, and an optional
 * lede, in a consistent measure. Carries `data-reveal` so the reused RevealRoot
 * animates it as one group. Token-driven, so it inverts correctly inside a
 * `.section-exhale` (ivory) section with no changes.
 */
export function SectionIntro({
  eyebrow,
  title,
  titleId,
  lede,
  size = "display",
  as = "h2",
  className,
  children,
}: SectionIntroProps) {
  const lines = Array.isArray(title) ? title : [title];
  const Heading = as;

  return (
    <div data-reveal className={cn("max-w-3xl", className)}>
      <p className={cn(typography.label, "flex items-center gap-3 text-gold")}>
        <span aria-hidden className="h-px w-8 bg-gold/60" />
        {eyebrow}
      </p>
      <Heading
        id={titleId}
        className={cn(
          size === "display" ? typography.display : typography.h2,
          "mt-6 text-balance text-foreground",
        )}
      >
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </Heading>
      {lede ? (
        <p className={cn(typography.body, "mt-6 max-w-2xl text-muted")}>{lede}</p>
      ) : null}
      {children}
    </div>
  );
}
