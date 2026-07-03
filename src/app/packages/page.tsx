import type { Metadata } from "next";

import { Breadcrumb } from "@/components/sections";
import { PackagesExperience } from "@/features/packages";
import { cn, container } from "@/lib";

export const metadata: Metadata = {
  title: "Business Structures",
  description:
    "Understand the UAE business structures and choose the right setup for your company, with guidance from ACUBE.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <main id="main">
      <div className={cn(container.content, "pt-32 lg:pt-40")}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Business Structures" }]} />
      </div>
      <PackagesExperience as="h1" />
    </main>
  );
}
