import type { Metadata } from "next";

import { Breadcrumb } from "@/components/sections";
import { FaqExperience } from "@/features/faq";
import { cn, container } from "@/lib";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about business setup, licensing, and documentation in the UAE.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <main id="main">
      <div className={cn(container.content, "pt-32 lg:pt-40")}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      </div>
      <FaqExperience as="h1" />
    </main>
  );
}
