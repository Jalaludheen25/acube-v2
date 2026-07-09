import type { ReactNode } from "react";

import { PageVeil } from "@/components/motion";

/**
 * Re-mounted by the App Router on every navigation — the hook point for the
 * route-entry transition. The children render immediately (no layout shift,
 * SEO/SSR untouched); the veil plays over them and removes itself.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <PageVeil />
      {children}
    </>
  );
}
