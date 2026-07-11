import { cn } from "@/lib";

type CubeSize = "sm" | "md" | "lg";

interface FloatingCubeProps {
  /** Positioning classes on the wrapper (e.g. "right-[8%] top-24"). */
  className?: string;
  size?: CubeSize;
  /** Negative delays de-sync multiple cubes. */
  delay?: string;
  /** Drift loop duration. */
  duration?: string;
  /** Brighter faces/borders for hero-adjacent placements. */
  intensity?: "subtle" | "bold";
}

/** Half-depth per size (translateZ = size / 2). */
const SIZES: Record<CubeSize, { box: string; z: string }> = {
  sm: { box: "size-12", z: "1.5rem" },
  md: { box: "size-16", z: "2rem" },
  lg: { box: "size-24", z: "3rem" },
};

/**
 * Decorative floating ACUBE cube — the brand mark's three faces (emerald
 * green / luxury gold / premium red) as a pure-CSS 3D object with a slow
 * drift, glowing edges, and a soft colored light bloom. Server-renderable,
 * aria-hidden, pointer-events-none; drift stops under the global
 * reduced-motion rule. Place inside a `relative overflow-hidden` section.
 */
export function FloatingCube({
  className,
  size = "md",
  delay = "0s",
  duration = "13s",
  intensity = "bold",
}: FloatingCubeProps) {
  const { box, z } = SIZES[size];
  const face =
    intensity === "bold"
      ? { celadon: "border-celadon/60 bg-celadon/20", champagne: "border-champagne/60 bg-champagne/20", brick: "border-blushed-brick/60 bg-blushed-brick/20" }
      : { celadon: "border-celadon/30 bg-celadon/10", champagne: "border-champagne/30 bg-champagne/10", brick: "border-blushed-brick/30 bg-blushed-brick/10" };

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute [perspective:900px]", className)}
      style={{
        filter:
          intensity === "bold"
            ? "drop-shadow(0 0 22px color-mix(in srgb, var(--color-celadon) 30%, transparent)) drop-shadow(0 0 34px color-mix(in srgb, var(--color-champagne) 18%, transparent))"
            : undefined,
      }}
    >
      <div
        className={cn(box, "relative [transform-style:preserve-3d] motion-safe:[animation:cube-drift_ease-in-out_infinite]")}
        style={{ animationDuration: duration, animationDelay: delay }}
      >
        <span className={cn("absolute inset-0 border backdrop-blur-[2px]", face.celadon)} style={{ transform: `translateZ(${z})` }} />
        <span className={cn("absolute inset-0 border backdrop-blur-[2px]", face.champagne)} style={{ transform: `rotateY(90deg) translateZ(${z})` }} />
        <span className={cn("absolute inset-0 border backdrop-blur-[2px]", face.brick)} style={{ transform: `rotateX(90deg) translateZ(${z})` }} />
      </div>
    </div>
  );
}
