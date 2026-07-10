import { FloatingParticles } from "@/components/motion";
import { cn } from "@/lib";

interface AtmosphereProps {
  /** Surface the layer sits on — tunes opacities so light pages stay clean. */
  tone?: "light" | "dark";
  /** Include the drifting particle field (md+ only). */
  particles?: boolean;
  /** Include a traversing light ray (md+ only). */
  ray?: boolean;
  className?: string;
}

/**
 * Ambient environment layer — the proven backdrop recipe (parallax gradient
 * blobs, an optional traversing light ray, optional particles) bundled so
 * every page can inherit the same living atmosphere the set-piece heroes
 * have. Server Component, pointer-events-none; parallax attributes are
 * activated by the page's RevealRoot. Heavier pieces drop out below `md`,
 * and all animation stops under the global reduced-motion rule.
 */
export function Atmosphere({
  tone = "light",
  particles = true,
  ray = true,
  className,
}: AtmosphereProps) {
  const dark = tone === "dark";

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <span
        data-parallax="0.12"
        className={cn(
          "blob bg-grad-celadon absolute -left-32 top-[15%] size-96 blur-3xl",
          dark ? "opacity-[0.08]" : "opacity-[0.14]",
        )}
      />
      <span
        data-parallax="-0.08"
        className={cn(
          "blob bg-grad-teal absolute -right-28 bottom-[10%] size-80 blur-3xl",
          dark ? "opacity-10" : "opacity-[0.12]",
        )}
      />
      {ray ? (
        <span
          className={cn(
            "absolute -top-1/4 left-0 h-[150%] w-32 bg-gradient-to-b from-transparent to-transparent blur-2xl motion-safe:[animation:light-ray_28s_linear_infinite] max-md:hidden",
            dark ? "via-champagne/10" : "via-champagne/15",
          )}
        />
      ) : null}
      {particles ? <FloatingParticles count={10} className="max-md:hidden" /> : null}
    </div>
  );
}
