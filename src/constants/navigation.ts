import type { NavGroup, NavItem } from "@/types";

/**
 * Primary header navigation — in-page section anchors (sections built in later
 * milestones). "About" maps to the Business Story section; the Business Journey
 * section (between Services and Industries) is intentionally not in the primary nav.
 */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Why ACUBE", href: "/why-acube" },
  { label: "Packages", href: "/packages" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/** Footer navigation groups. */
export const footerNav: NavGroup[] = [
  {
    title: "Explore",
    items: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Industries", href: "#industries" },
      { label: "Packages", href: "#packages" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Why ACUBE", href: "#why-acube" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
