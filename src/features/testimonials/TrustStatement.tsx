import { trustContent } from "@/constants";
import { cn, typography } from "@/lib";

/**
 * The trust statement shown when no verified testimonials exist. A premium
 * editorial statement about ACUBE — permanence, professionalism, guidance.
 * The headline illuminates word-by-word as the reader scrolls through the
 * dark pine section ([data-words-scrub]); morphing celadon blobs drift on
 * parallax behind it. It never explains an absence and never compares.
 */
export function TrustStatement() {
  const { statement } = trustContent;

  return (
    <div className="relative">
      {/* Decorative parallax atmosphere — contained by the section's overflow. */}
      <div
        aria-hidden
        data-parallax="0.18"
        className="blob bg-grad-celadon pointer-events-none absolute -right-24 -top-32 size-80 opacity-15 blur-3xl"
      />
      <div
        aria-hidden
        data-parallax="-0.12"
        className="blob bg-grad-teal pointer-events-none absolute -bottom-40 -left-28 size-96 opacity-20 blur-3xl"
      />

      <div className="relative max-w-4xl">
        <p data-reveal className={cn(typography.label, "flex items-center gap-3 text-gold")}>
          <span aria-hidden className="h-px w-8 bg-gold/60" />
          {statement.eyebrow}
        </p>
        <h2
          data-words-scrub
          className={cn(typography.display, "mt-8 text-balance text-foreground")}
        >
          {statement.headline}
        </h2>
        <p data-reveal className={cn(typography.body, "mt-10 max-w-2xl text-muted")}>
          {statement.body}
        </p>
      </div>
    </div>
  );
}
