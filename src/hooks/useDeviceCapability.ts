import { useState } from "react";

export type DeviceTier = "high" | "medium" | "low";

export interface DeviceCapability {
  tier: DeviceTier;
  /** Whether to render the WebGL scene at all (false → CSS poster fallback). */
  useWebGL: boolean;
  particleCount: number;
  enableParallax: boolean;
  dpr: [number, number];
  reducedMotion: boolean;
}

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function detect(): DeviceCapability {
  if (typeof window === "undefined") {
    return { tier: "low", useWebGL: false, particleCount: 0, enableParallax: false, dpr: [1, 1], reducedMotion: true };
  }

  const mm = (query: string) => window.matchMedia(query).matches;
  const reducedMotion = mm("(prefers-reduced-motion: reduce)");
  const reducedData = mm("(prefers-reduced-data: reduce)");
  const coarse = mm("(pointer: coarse)");
  const cores = navigator.hardwareConcurrency ?? 4;
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const width = window.innerWidth;
  const canWebGL = detectWebGL();

  // Static, atmospheric fallback for reduced-motion / data-saver / no-WebGL.
  const useWebGL = canWebGL && !reducedMotion && !reducedData;

  let tier: DeviceTier = "high";
  if (coarse || width < 768 || mem <= 4 || cores <= 4) tier = width < 768 ? "low" : "medium";
  if (mem <= 2 || cores <= 2) tier = "low";

  const particleCount = tier === "high" ? 120 : tier === "medium" ? 60 : 25;
  const enableParallax = useWebGL && tier !== "low";
  const dpr: [number, number] = tier === "high" ? [1, 2] : tier === "medium" ? [1, 1.5] : [1, 1];

  return { tier, useWebGL, particleCount, enableParallax, dpr, reducedMotion };
}

/**
 * Detects device capability once on the client to tier the Hero scene.
 * Consumed inside an `ssr:false` boundary, so `detect()` runs client-side.
 */
export function useDeviceCapability(): DeviceCapability {
  const [capability] = useState<DeviceCapability>(detect);
  return capability;
}
