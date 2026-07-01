import type { Service } from "@/types";
import { cn, typography } from "@/lib";

import { FallbackServiceIcon, serviceIcons } from "./serviceIcons";

interface ServiceRowProps {
  service: Service;
}

/**
 * A single primary service — an editorial row (icon · title · descriptor ·
 * optional "ideal for"). Hairline divider, no glass — quieter than the Hero.
 * Answers what / why / who without paragraphs.
 */
export function ServiceRow({ service }: ServiceRowProps) {
  const Icon = serviceIcons[service.icon] ?? FallbackServiceIcon;

  return (
    <div className="group flex gap-4 border-t border-divider py-6">
      <Icon className="mt-1 size-6 shrink-0 text-brand-green" aria-hidden />
      <div>
        <h4 className="font-heading text-body font-semibold text-foreground">{service.title}</h4>
        <p className={cn(typography.bodySmall, "mt-1 max-w-xl text-muted")}>{service.description}</p>
        {service.idealFor ? (
          <p className="mt-2 text-caption text-muted">
            <span className="text-brand-green">Ideal for</span> · {service.idealFor}
          </p>
        ) : null}
      </div>
    </div>
  );
}
