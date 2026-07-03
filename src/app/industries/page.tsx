import type { Metadata } from "next";

import { Breadcrumb } from "@/components/sections";
import { IndustriesExperience } from "@/features/industries";
import { cn, container } from "@/lib";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "The sectors where ACUBE helps entrepreneurs and companies establish themselves across the UAE.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main id="main">
      <div className={cn(container.content, "pt-32 lg:pt-40")}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      </div>
      <IndustriesExperience as="h1" />
    </main>
  );
}
