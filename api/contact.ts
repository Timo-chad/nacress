import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, message } = req.body as { email: string; message: string };

  if (!email || !message) {
    return res.status(400).json({ error: "Champs manquants" });
  }

  await resend.emails.send({
    from: "NACRESS Contact <onboarding@resend.dev>",
    to: "nacress.jewlery@gmail.com",
    replyTo: email,
    subject: `Message de ${email}`,
    text: `De : ${email}\n\n${message}`,
    html: `<p><strong>De :</strong> ${email}</p><br/><p>${message.replace(/\n/g, "<br/>")}</p>`,
  });

  res.status(200).json({ ok: true });
}
