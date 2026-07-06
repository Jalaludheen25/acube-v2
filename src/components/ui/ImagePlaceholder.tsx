import { ImageIcon } from "lucide-react";

import { cn } from "@/lib";

type Aspect = "video" | "square" | "portrait" | "wide" | "banner";
type Variant = "emerald" | "teal" | "sand" | "celadon" | "glass";

interface ImagePlaceholderProps {
  /** Short caption shown on the tile, e.g. "Corporate Team". */
  suggestion: string;
  /** Optional second line of art direction. */
  hint?: string;
  aspect?: Aspect;
  variant?: Variant;
  className?: string;
}

const aspects: Record<Aspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
  banner: "aspect-[21/9]",
};

const variants: Record<Variant, string> = {
  emerald: "bg-grad-emerald theme-dark",
  teal: "bg-grad-teal theme-dark",
  sand: "bg-grad-sand",
  celadon: "bg-grad-celadon",
  glass: "glass-depth",
};

/**
 * Swap-in image slot. Until real photography is supplied, this renders an
 * attractive labeled surface (gradient/glass + texture + hover spotlight) that
 * names the shot to source, e.g. `suggestion="Corporate Team"`. Replace with a
 * `next/image` (or the shared `<Figure>`) once the asset exists — the caption
 * tells the client exactly what to drop in.
 */
export function ImagePlaceholder({
  suggestion,
  hint,
  aspect = "video",
  variant = "emerald",
  className,
}: ImagePlaceholderProps) {
  const dark = variant === "emerald" || variant === "teal";

  return (
    <div
      role="img"
      aria-label={`Image placeholder — ${suggestion}`}
      className={cn(
        "card-spotlight texture group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-border/60 p-8 shadow-3d",
        aspects[aspect],
        variants[variant],
        className,
      )}
    >
      {/* Decorative morphing glow. */}
      <span
        aria-hidden
        className="blob bg-grad-celadon pointer-events-none absolute -right-16 -top-16 size-48 opacity-20 blur-3xl"
      />
      <span
        aria-hidden
        className={cn(
          "relative flex size-14 items-center justify-center rounded-2xl shadow-3d transition-transform duration-[var(--duration-medium)] ease-out-quart group-hover:scale-110",
          dark ? "bg-white/10 text-platinum" : "bg-white/50 text-ink-black",
        )}
      >
        <ImageIcon className="size-6" aria-hidden />
      </span>
      <div className="relative text-center">
        <p className="font-mono text-label uppercase tracking-widest text-gold">Image</p>
        <p className={cn("mt-1 font-heading text-h3 font-medium", dark ? "text-platinum" : "text-foreground")}>
          {suggestion}
        </p>
        {hint ? <p className="mt-1 text-caption text-muted">{hint}</p> : null}
      </div>
    </div>
  );
}
