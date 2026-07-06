import { CheckCircle2, Clock, Eye, MapPin, UserRound } from "lucide-react";

import { RevealRoot } from "@/components/motion";
import { SectionIntro, StatBand } from "@/components/sections";
import { Figure } from "@/components/ui";
import { why } from "@/constants";
import { cn, container, typography } from "@/lib";

import { WhyBenefits } from "./WhyBenefits";
import { WhyPrinciples } from "./WhyPrinciples";
import { WhyProcess } from "./WhyProcess";

interface WhyAcubeProps {
  as?: "h1" | "h2";
}

/** Placeholder metrics — the client supplies verified figures (renders "—"). */
const whyStats = [
  { value: "—", label: "Businesses guided" },
  { value: "—", label: "Setups completed" },
  { value: "—", label: "Client rating" },
  { value: "—", label: "Avg. turnaround" },
] as const;

/** Qualitative commitments shown as trust chips. */
const trustIndicators = [
  { icon: Eye, label: "Transparent advice" },
  { icon: UserRound, label: "One personal consultant" },
  { icon: MapPin, label: "Local & government knowledge" },
  { icon: Clock, label: "Long-term partnership" },
];

/**
 * Why ACUBE — a high-impact trust page. Split headline over a parallax blob,
 * principle tilt-cards, an animated stat band (placeholder metrics), a "what
 * to expect" process flow, a "what we handle" benefits grid, an image
 * placeholder, and trust-indicator chips. Every claim is a commitment to how
 * ACUBE works — never an achievement or a competitor comparison.
 */
export function WhyAcube({ as = "h2" }: WhyAcubeProps) {
  return (
    <section
      id="why-acube"
      aria-labelledby="why-heading"
      className="relative section-exhale overflow-hidden"
    >
      <RevealRoot>
        <div className={cn(container.content, "relative pb-24 max-lg:pt-0 lg:pt-12")}>
          <div
            aria-hidden
            data-parallax="0.16"
            className="blob bg-grad-celadon pointer-events-none absolute -right-32 top-10 size-96 opacity-15 blur-3xl"
          />

          {/* Intro + image */}
          <div className="lg:grid lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-16">
            <SectionIntro
              as={as}
              eyebrow={why.eyebrow}
              title={why.headline}
              titleId="why-heading"
              split
              lede={why.intro}
            />
            <Figure
              image={{
                src: "/images/why-partnership.jpg",
                alt: "A handshake between an ACUBE consultant and a client, with Dubai's skyline at sunset",
                width: 1536,
                height: 1024,
              }}
              fill
              focus="center"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[3/4] shadow-3d-lg mt-12 lg:mt-0"
            />
          </div>

          {/* Principle cards */}
          <div className="mt-20">
            <WhyPrinciples />
          </div>

          {/* Stats */}
          <div className="mt-20 border-t border-divider pt-16">
            <p data-reveal className={cn(typography.label, "text-center text-gold")}>
              The picture, in brief
            </p>
            <StatBand items={whyStats} className="mt-8" />
            <p data-reveal className={cn(typography.caption, "mt-6 text-center")}>
              Figures confirmed with the client before launch.
            </p>
          </div>

          {/* Process flow */}
          <div className="mt-24">
            <SectionIntro
              eyebrow="What to expect"
              title="How working with us goes."
              size="h2"
              split
            />
            <div className="mt-16">
              <WhyProcess />
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-24">
            <SectionIntro
              eyebrow="What we handle for you"
              title="You focus on the business. We handle the rest."
              size="h2"
            />
            <div className="mt-12">
              <WhyBenefits />
            </div>
          </div>

          {/* Trust indicators */}
          <ul data-reveal-stagger className="mt-20 flex flex-wrap justify-center gap-4">
            {trustIndicators.map((indicator) => (
              <li
                key={indicator.label}
                className="glass hover-lift inline-flex items-center gap-3 rounded-full px-5 py-3"
              >
                <indicator.icon className="size-4 text-gold" aria-hidden />
                <span className={cn(typography.bodySmall, "font-medium text-foreground")}>
                  {indicator.label}
                </span>
                <CheckCircle2 className="size-4 text-gold/60" aria-hidden />
              </li>
            ))}
          </ul>
        </div>
      </RevealRoot>
    </section>
  );
}
