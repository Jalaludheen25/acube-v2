import type { ContactInfo } from "@/types";

/**
 * Sourced exclusively from the client's supplied business card.
 *
 * Fields NOT present on supplied assets are null/empty and must never be
 * invented (Decision b):
 *   - businessHours, googleMapsUrl, socialLinks
 *   - whatsapp: no number is explicitly labelled as WhatsApp on the asset.
 *
 * Phone `digits` are normalized to E.164 (country code 971, no "+"/spaces) for
 * tel:/wa.me links; `display` preserves the printed formatting.
 */
export const contact: ContactInfo = {
  companyName: "ACUBE",
  legalName: "ACUBE Documents Services",
  contactPerson: "Boban Varghese",
  email: "acubedubai@gmail.com",
  phones: [
    { display: "+971 4 39 33 826", digits: "97143933826", type: "landline" },
    { display: "+971 55 775 4101", digits: "971557754101", type: "mobile" },
    { display: "+971 50 531 7272", digits: "971505317272", type: "mobile" },
    { display: "055 658 9001", digits: "971556589001", type: "emergency" },
  ],
  whatsapp: null,
  address: {
    shop: "Shop No. 09",
    building: "Saeyed Building",
    landmark: "Opp. Old Al Madeena Super Market",
    area: "Bur Dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    formatted:
      "Shop No. 09, Saeyed Building, Opp. Old Al Madeena Super Market, Bur Dubai, Dubai, United Arab Emirates",
  },
  businessHours: null,
  googleMapsUrl: null,
  socialLinks: [],
};
