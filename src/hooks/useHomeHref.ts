"use client";

import { usePathname } from "next/navigation";

/**
 * Keeps in-page `#anchor` links working from any route. On a sub-page they are
 * rewritten to `/#anchor` (navigate home, then scroll); on the homepage they
 * stay as-is so hash scrolling and scrollspy are unaffected.
 */
export function useHomeHref(): (href: string) => string {
  const pathname = usePathname();
  const onHome = pathname === "/";
  return (href) => (href.startsWith("#") && !onHome ? `/${href}` : href);
}
