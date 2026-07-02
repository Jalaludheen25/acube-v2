import { trustContent } from "@/constants";
import { cn, typography } from "@/lib";

/**
 * The trust statement shown when no verified testimonials exist. A premium
 * editorial statement about ACUBE — permanence, professionalism, guidance. It
 * carries the section entirely through typography and whitespace; it never
 * explains an absence and never compares to anything.
 */
export function TrustStatement() {
  const { statement } = trustContent;

  return (
    <div data-reveal className="max-w-3xl">
      <p className={cn(typography.label, "text-gold")}>{statement.eyebrow}</p>
      <h2 className={cn(typography.display, "mt-6 text-balance text-foreground")}>
        {statement.headline}
      </h2>
      <p className={cn(typography.body, "mt-8 text-muted")}>{statement.body}</p>
    </div>
  );
}
