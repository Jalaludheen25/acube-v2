"use client";

import { Environment, Lightformer } from "@react-three/drei";

import { webglColors } from "@/constants";

/**
 * Studio lighting via Lightformers — no HDR file downloaded.
 *
 * A soft white key + fill establish premium metal reflections; a champagne-gold
 * key rim and a restrained lacquer-red accent graze the cube's edges (the only
 * place brand color appears — through reflection, never emissive faces).
 * `frames={1}` bakes the environment once (static lights) for performance.
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
        {/* Champagne-gold key rim — the lead accent, grazing the top edges */}
        <Lightformer
          form="rect"
          intensity={3}
          color={webglColors.gold}
          position={[4, 3, -2]}
          scale={[4, 4, 1]}
          target={[0, 0, 0]}
        />
        {/* Lacquer-red accent rim — restrained, from below */}
        <Lightformer
          form="rect"
          intensity={2}
          color={webglColors.brandRed}
          position={[-3, -2, -3]}
          scale={[3, 3, 1]}
          target={[0, 0, 0]}
        />
      </Environment>
    </>
  );
}
