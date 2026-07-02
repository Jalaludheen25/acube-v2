import { z } from "zod";

/**
 * Shared contact form schema. Used by React Hook Form on the client (unobtrusive
 * validation) and re-validated server-side in the API route — the client is
 * never trusted. `website` is a honeypot: real users never see or fill it; the
 * server silently drops any submission that has it filled.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(40, "Please enter a valid phone number.").optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more.")
    .max(2000, "That message is a little long."),
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
