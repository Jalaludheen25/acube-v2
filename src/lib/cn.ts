import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Compose conditional class names and de-duplicate conflicting Tailwind
 * classes. Used by every UI component from the Design System (M03) onward.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
