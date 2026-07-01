"use client";

import dynamic from "next/dynamic";

import { useDeviceCapability, useMounted } from "@/hooks";

import { HeroPoster } from "./HeroPoster";

/**
 * Client boundary for the Hero background.
 *
 * The heavy WebGL scene is dynamically imported with `ssr: false` so Three.js
 * never touches the LCP path — the HTML Hero content renders first. Capability
 * detection decides between the full scene and the static CSS poster.
 *
 * `useMounted` gates rendering so SSR and the first client render both output
 * `null` (the page's dark background shows through) — no hydration mismatch,
 * no flash.
 */
const HeroScene = dynamic(
  () => import("./scene/HeroScene").then((m) => ({ default: m.HeroScene })),
  { ssr: false, loading: () => null },
);

export function HeroCanvasClient() {
  const mounted = useMounted();
  const capability = useDeviceCapability();

  if (!mounted) return null;
  if (!capability.useWebGL) return <HeroPoster />;
  return <HeroScene capability={capability} />;
}
