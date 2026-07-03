import type { Metadata } from "next";

import { Breadcrumb } from "@/components/sections";
import { ContactExperience } from "@/features/contact";
import { cn, container } from "@/lib";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with ACUBE about setting up or running your business in the UAE. Call, email, or send a message — we'll get back to you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <div className={cn(container.content, "pt-32 lg:pt-40")}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      </div>
      <ContactExperience as="h1" />
    </main>
  );
}
