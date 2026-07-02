import { packagesContent } from "@/constants";
import { cn, typography } from "@/lib";

/**
 * The UAE business structures as calm editorial entries — name + one natural
 * sentence, nothing else. No prices, no "ideal for" labels, no bullets, no
 * cards, no icons. Hairline dividers only; typography dominates. Reveals as one
 * group (data-reveal). Semantics: named options (h3) with a short description.
 */
export function SetupStructureList() {
  return (
    <div data-reveal className="mt-16">
      {packagesContent.structures.map((structure) => (
        <div
          key={structure.id}
          className="grid gap-2 border-t border-divider py-10 lg:grid-cols-3 lg:gap-8"
        >
          <h3 className="font-heading text-h3 font-medium text-foreground lg:col-span-1">
            {structure.name}
          </h3>
          <p className={cn(typography.body, "text-muted lg:col-span-2 lg:pt-2")}>
            {structure.description}
          </p>
        </div>
      ))}
    </div>
  );
}
