/**
 * The guide line for the journey.
 *
 * Intentionally understated — a whisper-thin (1px) line carrying an EXTREMELY
 * subtle brand-red → brand-green wash that fades to transparent at both ends,
 * so it reads as architectural light grazing an edge, not a UI progress bar.
 * It is a guide; typography and spacing dominate the section. Static (no draw
 * animation, so it never "fills"). Decorative → aria-hidden.
 */
export function JourneyPath() {
  return (
    <div
      aria-hidden
      className="absolute left-0 top-0 h-full w-px"
      style={{
        background: [
          "linear-gradient(180deg,",
          "transparent 0%,",
          "color-mix(in srgb, var(--color-brand-red) 30%, transparent) 12%,",
          "color-mix(in srgb, var(--color-brand-green) 30%, transparent) 88%,",
          "transparent 100%)",
        ].join(" "),
      }}
    />
  );
}
