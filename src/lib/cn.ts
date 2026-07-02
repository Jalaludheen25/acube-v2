import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge must be told about our custom `@theme` font sizes. Otherwise it
 * treats `text-hero` / `text-display` / `text-h2` / … as text-COLOR utilities and
 * silently drops them whenever a heading also sets a colour like `text-foreground`
 * (same conflict group) — collapsing every `cn()`-composed heading to the
 * inherited body size. Registering them in the `font-size` group keeps size and
 * colour independent so both survive the merge.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "hero",
            "display",
            "h1",
            "h2",
            "h3",
            "body",
            "body-sm",
            "caption",
            "button",
            "label",
            "code",
          ],
        },
      ],
    },
  },
});

/**
 * Compose conditional class names and de-duplicate conflicting Tailwind
 * classes. Used by every UI component from the Design System (M03) onward.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
