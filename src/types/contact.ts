export type PhoneType = "landline" | "mobile" | "emergency";

export interface Phone {
  /** As printed on the client asset, e.g. "+971 55 775 4101". */
  display: string;
  /** Digits in E.164 form without "+", e.g. "971557754101" (for tel:/wa.me). */
  digits: string;
  type: PhoneType;
}

export interface PostalAddress {
  shop: string | null;
  building: string | null;
  landmark: string | null;
  area: string | null;
  city: string;
  country: string;
  /** Full one-line address exactly as printed on the client asset. */
  formatted: string;
}

export interface BusinessHours {
  days: string;
  opens: string;
  closes: string;
}

export type SocialPlatform =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "x"
  | "youtube"
  | "tiktok";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface ContactInfo {
  companyName: string;
  legalName: string;
  contactPerson: string | null;
  email: string;
  phones: Phone[];
  /** Number verified as WhatsApp on client assets; null until confirmed. */
  whatsapp: Phone | null;
  address: PostalAddress;
  /** Not present on supplied assets — null until client-verified. */
  businessHours: BusinessHours | null;
  /** Not present on supplied assets — null until client-verified. */
  googleMapsUrl: string | null;
  /** Not present on supplied assets — empty until client-verified. */
  socialLinks: SocialLink[];
}
