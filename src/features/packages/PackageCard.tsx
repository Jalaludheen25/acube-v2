"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { TiltCard } from "@/components/motion";
import { packageTiers } from "@/constants";
import { cn } from "@/lib";

import { tierAccents } from "./tierAccents";
import { TierCardContent } from "./TierCardContent";

type GsapModule = typeof import("@/animations/gsap");

interface PackageCardProps {
  stage: number;
}

/**
 * The pinned scene's single package card — ONE element mounted for the whole
 * experience (never unmounted, never DOM-replaced). On stage change it
 * morphs like a physical object: GSAP Flip records the old layout, React
 * swaps the content, Flip animates the height/size delta while the content
 * re-composes (blur/slide micro-tween) and the accent layers (gradient,
 * border, glow) crossfade via CSS transitions. A rotationY sweep sells the
 * "turning to a new face" feel. Idle float + reflection sweep + pointer
 * tilt (TiltCard) + cursor spotlight keep it alive between stages.
 */
export function PackageCard({ stage }: PackageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gsapRef = useRef<GsapModule | null>(null);
  const pendingFlipRef = useRef<ReturnType<GsapModule["Flip"]["getState"]> | null>(null);
  const prevStageRef = useRef(stage);
  const [displayed, setDisplayed] = useState(stage);

  useEffect(() => {
    let cancelled = false;
    void import("@/animations/gsap").then((mod) => {
      if (!cancelled) gsapRef.current = mod;
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Two-phase morph: (1) stage prop changed but DOM still shows the old tier
  // — capture the Flip state, then swap; (2) DOM now shows the new tier —
  // animate from the captured state.
  useLayoutEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    const mod = gsapRef.current;

    if (displayed !== stage) {
      if (card && mod) {
        pendingFlipRef.current = mod.Flip.getState(card);
      }
      setDisplayed(stage);
      return;
    }

    if (pendingFlipRef.current && card && mod) {
      const direction = stage >= prevStageRef.current ? 1 : -1;
      mod.Flip.from(pendingFlipRef.current, {
        duration: 0.7,
        ease: mod.ease.outQuart,
        scale: false,
        absolute: false,
      });
      mod.gsap.fromTo(
        card,
        { rotationY: 10 * direction, transformPerspective: 900 },
        { rotationY: 0, duration: 0.9, ease: mod.ease.outQuart },
      );
      if (content) {
        mod.gsap.fromTo(
          content,
          { opacity: 0.25, y: 16, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: mod.ease.outQuart },
        );
      }
      pendingFlipRef.current = null;
      prevStageRef.current = stage;
    }
  }, [stage, displayed]);

  const tier = packageTiers[displayed] ?? packageTiers[0];
  if (!tier) return null;
  const accent = tierAccents[tier.accent];

  return (
    <TiltCard maxTilt={5} className="w-full max-w-md">
      <div className="float">
        <div
          ref={cardRef}
          data-package-card
          className={cn(
            "card-spotlight texture relative overflow-hidden rounded-[var(--radius-2xl)] border bg-ink-black/55 backdrop-blur-xl transition-[border-color,box-shadow] duration-700 ease-out-quart",
            accent.border,
            accent.glow,
          )}
        >
          {/* Accent gradient layers — all mounted, active one crossfades in. */}
          {packageTiers.map((item, index) => (
            <span
              key={item.id}
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out-quart",
                tierAccents[item.accent].overlay,
                index === displayed ? "opacity-100" : "opacity-0",
              )}
            />
          ))}

          {/* Glass reflection sweep. */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-platinum/10 to-transparent motion-safe:[animation:card-sheen_7s_ease-in-out_infinite]"
          />

          <div ref={contentRef} className="relative">
            <TierCardContent tier={tier} />
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
