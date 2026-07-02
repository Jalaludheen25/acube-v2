import { testimonials, trustContent } from "@/constants";
import { cn, typography } from "@/lib";

/**
 * Verified testimonials as editorial blockquotes — quote + attribution only.
 * No stars, ratings, avatars, photos, carousels, sliders, speech bubbles, or
 * cards; hairline dividers and typography carry it. Rendered only when
 * `testimonials` is non-empty (adding an object makes it appear automatically —
 * no component or layout changes).
 */
export function TestimonialList() {
  const { quotes } = trustContent;

  return (
    <div data-reveal>
      <p className={cn(typography.label, "text-brand-green")}>{quotes.eyebrow}</p>
      <h2 className={cn(typography.display, "mt-6 text-foreground")}>{quotes.headline}</h2>

      <div className="mt-16">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.id} className="max-w-3xl border-t border-divider py-10">
            <blockquote className={cn(typography.h3, "text-balance text-foreground")}>
              {`“${testimonial.quote}”`}
            </blockquote>
            <figcaption className="mt-4 text-caption text-muted">
              {testimonial.name}
              {testimonial.business ? ` · ${testimonial.business}` : ""}
              {testimonial.country ? ` · ${testimonial.country}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
