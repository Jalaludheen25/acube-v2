/**
 * Pure link/format helpers. No side effects — tree-shakeable and safe on both
 * server and client. Consumed by contact CTAs, navigation, and the footer.
 */

/** Strip everything except digits. */
function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

/** Build a `tel:` href from E.164 digits (no leading "+"). */
export function telHref(digits: string): string {
  return `tel:+${digitsOnly(digits)}`;
}

/** Build a WhatsApp (`wa.me`) href, with an optional prefilled message. */
export function whatsappHref(digits: string, message?: string): string {
  const base = `https://wa.me/${digitsOnly(digits)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Build a `mailto:` href, with an optional subject. */
export function mailtoHref(email: string, subject?: string): string {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}
