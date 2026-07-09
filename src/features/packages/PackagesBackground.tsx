import { FloatingParticles } from "@/components/motion";

/**
 * Immersive layered backdrop for the pinned packages scene — all CSS, all
 * transform/opacity animation, zero WebGL (the page must hold Lighthouse):
 * a deep radial wash, two traversing light rays (champagne + celadon),
 * morphing gradient blobs, a floating 3D CSS cube echoing the ACUBE logo
 * (green/gold/red faces), ambient particles, the site grain, and a vignette.
 * Every layer is pointer-events-none; heavy pieces drop out below `md`.
 */
export function PackagesBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Deep atmospheric wash. */}
      <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_70%_0%,color-mix(in_srgb,var(--color-pine-teal)_45%,transparent)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_10%_100%,color-mix(in_srgb,var(--color-blood-red)_18%,transparent)_0%,transparent_50%)]" />

      {/* Traversing luxury light rays. */}
      <span className="absolute -top-1/4 left-0 h-[150%] w-44 bg-gradient-to-b from-transparent via-champagne/15 to-transparent blur-2xl motion-safe:[animation:light-ray_18s_linear_infinite] max-md:hidden" />
      <span
        className="absolute -top-1/4 left-0 h-[150%] w-28 bg-gradient-to-b from-transparent via-celadon/12 to-transparent blur-xl motion-safe:[animation:light-ray_26s_linear_infinite] motion-safe:[animation-delay:-11s] max-md:hidden"
        style={{ "--ray-opacity": "0.3" } as React.CSSProperties}
      />

      {/* Morphing gradient blobs. */}
      <span className="blob bg-grad-celadon absolute -left-32 top-1/4 size-96 opacity-[0.07] blur-3xl" />
      <span className="blob bg-grad-teal absolute -right-24 bottom-1/4 size-80 opacity-10 blur-3xl" />

      {/* Floating CSS cube — the ACUBE mark's three faces (green/gold/red). */}
      <div className="absolute right-[7%] top-[14%] [perspective:900px] max-lg:hidden">
        <div className="relative size-16 [transform-style:preserve-3d] motion-safe:[animation:cube-drift_12s_ease-in-out_infinite]">
          <span className="absolute inset-0 border border-celadon/40 bg-celadon/10 [transform:translateZ(2rem)]" />
          <span className="absolute inset-0 border border-champagne/40 bg-champagne/10 [transform:rotateY(90deg)_translateZ(2rem)]" />
          <span className="absolute inset-0 border border-blushed-brick/40 bg-blushed-brick/10 [transform:rotateX(90deg)_translateZ(2rem)]" />
        </div>
      </div>
      <div className="absolute bottom-[18%] left-[5%] [perspective:900px] max-lg:hidden">
        <div className="relative size-10 [transform-style:preserve-3d] motion-safe:[animation:cube-drift_16s_ease-in-out_infinite] motion-safe:[animation-delay:-6s]">
          <span className="absolute inset-0 border border-celadon/25 bg-celadon/5 [transform:translateZ(1.25rem)]" />
          <span className="absolute inset-0 border border-champagne/25 bg-champagne/5 [transform:rotateY(90deg)_translateZ(1.25rem)]" />
          <span className="absolute inset-0 border border-blushed-brick/25 bg-blushed-brick/5 [transform:rotateX(90deg)_translateZ(1.25rem)]" />
        </div>
      </div>

      {/* Ambient particles + grain + vignette. */}
      <FloatingParticles count={14} className="max-md:hidden" />
      <div className="texture absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_45%,transparent_55%,color-mix(in_srgb,var(--color-ink-black)_65%,transparent)_100%)]" />
    </div>
  );
}
