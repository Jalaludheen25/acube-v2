import type { NavGroup, NavItem } from "@/types";

/**
 * Primary header navigation — all pages, in the client-approved order
 * (Services ahead of About). Also reused by the footer's Explore column.
 */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Why ACUBE", href: "/why-acube" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
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
