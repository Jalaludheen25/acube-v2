import { FloatingParticles } from "@/components/motion";

/**
 * The finale's living environment — layered pure CSS (no WebGL, keeping
 * Lighthouse intact): animated gradient washes, traversing champagne and
 * celadon light rays, floating brand cubes (the ACUBE mark's green/gold/red
 * faces), ambient particles, a fog band, grain, and a vignette. All
 * pointer-events-none; heavy layers drop out below `md`. The globally
 * mounted PointerGlow supplies the mouse-reactive lighting.
 */
export function ContactBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Deep gradient washes. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_80%_0%,color-mix(in_srgb,var(--color-pine-teal)_40%,transparent)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_5%_90%,color-mix(in_srgb,var(--color-blood-red)_15%,transparent)_0%,transparent_50%)]" />

      {/* Traversing light rays. */}
      <span className="absolute -top-1/4 left-0 h-[150%] w-40 bg-gradient-to-b from-transparent via-champagne/12 to-transparent blur-2xl motion-safe:[animation:light-ray_20s_linear_infinite] max-md:hidden" />
      <span
        className="absolute -top-1/4 left-0 h-[150%] w-24 bg-gradient-to-b from-transparent via-celadon/10 to-transparent blur-xl motion-safe:[animation:light-ray_28s_linear_infinite] motion-safe:[animation-delay:-13s] max-md:hidden"
        style={{ "--ray-opacity": "0.3" } as React.CSSProperties}
      />

      {/* Morphing blobs + fog band. */}
      <span data-parallax="0.1" className="blob bg-grad-celadon absolute -left-32 top-[20%] size-96 opacity-[0.07] blur-3xl" />
      <span data-parallax="-0.08" className="blob bg-grad-teal absolute -right-28 bottom-[15%] size-80 opacity-10 blur-3xl" />
      <span className="absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 bg-gradient-to-r from-transparent via-platinum/[0.03] to-transparent blur-2xl" />

      {/* Floating brand cubes. */}
      <div className="absolute right-[8%] top-[10%] [perspective:900px] max-lg:hidden">
        <div className="relative size-14 [transform-style:preserve-3d] motion-safe:[animation:cube-drift_13s_ease-in-out_infinite]">
          <span className="absolute inset-0 border border-celadon/35 bg-celadon/10 [transform:translateZ(1.75rem)]" />
          <span className="absolute inset-0 border border-champagne/35 bg-champagne/10 [transform:rotateY(90deg)_translateZ(1.75rem)]" />
          <span className="absolute inset-0 border border-blushed-brick/35 bg-blushed-brick/10 [transform:rotateX(90deg)_translateZ(1.75rem)]" />
        </div>
      </div>
      <div className="absolute bottom-[22%] left-[4%] [perspective:900px] max-lg:hidden">
        <div className="relative size-9 [transform-style:preserve-3d] motion-safe:[animation:cube-drift_17s_ease-in-out_infinite] motion-safe:[animation-delay:-7s]">
          <span className="absolute inset-0 border border-celadon/25 bg-celadon/5 [transform:translateZ(1.125rem)]" />
          <span className="absolute inset-0 border border-champagne/25 bg-champagne/5 [transform:rotateY(90deg)_translateZ(1.125rem)]" />
          <span className="absolute inset-0 border border-blushed-brick/25 bg-blushed-brick/5 [transform:rotateX(90deg)_translateZ(1.125rem)]" />
        </div>
      </div>

      {/* Ambient particles + grain + vignette. */}
      <FloatingParticles count={12} className="max-md:hidden" />
      <div className="texture absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_40%,transparent_55%,color-mix(in_srgb,var(--color-ink-black)_60%,transparent)_100%)]" />
    </div>
  );
}
