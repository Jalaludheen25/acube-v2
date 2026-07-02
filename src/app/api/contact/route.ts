import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { contactSchema } from "@/features/contact/contactSchema";

export const runtime = "nodejs";

/**
 * Contact submissions. Never trusts the client:
 *  - re-validates with the shared Zod schema
 *  - silently drops honeypot spam
 *  - sends via nodemailer/SMTP (env-configured)
 *  - returns a graceful, informative response when email isn't configured yet
 *    (the form always renders; delivery activates once SMTP env vars are set)
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }
  const data = parsed.data;

  // Honeypot — accept silently without sending (never tip off bots).
  if (data.website && data.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_TO_EMAIL) {
    return NextResponse.json({ ok: false, error: "unconfigured" }, { status: 503 });
  }

  try {
    const port = Number(SMTP_PORT ?? 587);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    await transporter.sendMail({
      from: `ACUBE Website <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject: `New consultation request — ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone && data.phone.length > 0 ? data.phone : "—"}`,
        "",
        data.message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send" }, { status: 500 });
  }
}
