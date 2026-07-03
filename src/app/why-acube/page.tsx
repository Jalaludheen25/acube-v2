import type { Metadata } from "next";

import { Breadcrumb } from "@/components/sections";
import { WhyAcube } from "@/features/why";
import { cn, container } from "@/lib";

export const metadata: Metadata = {
  title: "Why ACUBE",
  description:
    "The principles behind how ACUBE works — end-to-end support, personal guidance, local and government knowledge, transparency, and a long-term partnership.",
  alternates: { canonical: "/why-acube" },
};

export default function WhyAcubePage() {
  return (
    <main id="main">
      <div className={cn(container.content, "pt-32 lg:pt-40")}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Why ACUBE" }]} />
      </div>
      <WhyAcube as="h1" />
    </main>
  );
}
