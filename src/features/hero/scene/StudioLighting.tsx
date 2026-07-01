"use client";

import { Environment, Lightformer } from "@react-three/drei";

import { webglColors } from "@/constants";

/**
 * Studio lighting via Lightformers — no HDR file downloaded.
 *
 * A soft white key + fill establish premium metal reflections; brand-red and
 * brand-green rim lights graze the cube's edges (the only place brand color
 * appears — through reflection, never emissive faces). `frames={1}` bakes the
 * environment once (static lights) for performance.
 */
export function StudioLighting() {
  return (
    <>
      <ambientLight intensity={0.12} />
      <Environment frames={1} resolution={256}>
        {/* Key */}
        <Lightformer
          form="rect"
          intensity={2}
          color={webglColors.foreground}
          position={[3, 4, 4]}
          scale={[6, 6, 1]}
          target={[0, 0, 0]}
        />
        {/* Fill */}
        <Lightformer
          form="rect"
          intensity={0.6}
          color={webglColors.foreground}
          position={[-4, 1, 3]}
          scale={[5, 5, 1]}
          target={[0, 0, 0]}
        />
        {/* Brand-red rim */}
        <Lightformer
          form="rect"
          intensity={2.6}
          color={webglColors.brandRed}
          position={[-3, -2, -3]}
          scale={[3, 3, 1]}
          target={[0, 0, 0]}
        />
        {/* Brand-green rim */}
        <Lightformer
          form="rect"
          intensity={2}
          color={webglColors.brandGreen}
          position={[4, -1, -3]}
          scale={[3, 3, 1]}
          target={[0, 0, 0]}
        />
      </Environment>
    </>
  );
}
