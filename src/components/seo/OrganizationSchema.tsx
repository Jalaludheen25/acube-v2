import { contact, siteConfig } from "@/constants";

/**
 * Organization JSON-LD (server-rendered <script>, zero client JS). Includes ONLY
 * verified facts from client assets: name, website, email, primary telephone,
 * postal address, and logo. Ratings, reviews, employees, awards, statistics,
 * business hours, social links, and geo-coordinates are intentionally omitted
 * until verified — they can be added here later with no structural change.
 */
export function OrganizationSchema() {
  const { address } = contact;
  const landline = contact.phones.find((phone) => phone.type === "landline");

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    email: contact.email,
    ...(landline ? { telephone: `+${landline.digits}` } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: [address.shop, address.building, address.landmark, address.area]
        .filter(Boolean)
        .join(", "),
      addressLocality: address.city,
      addressCountry: "AE",
    },
    logo: `${siteConfig.url}/brand/acube-logo.png`,
  };

  return (
    <script
      type="application/ld+json"
      // Data is entirely first-party/verified constants — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
