import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body as { email: string };
  if (!email) return res.status(400).json({ error: "Email manquant" });

  await resend.emails.send({
    from: "NACRESS <onboarding@resend.dev>",
    to: "nacress.jewlery@gmail.com",
    subject: `Nouvelle inscription newsletter : ${email}`,
    text: `${email} s'est inscrit·e à la newsletter NACRESS.`,
    html: `<p><strong>${email}</strong> s'est inscrit·e à la newsletter NACRESS.</p>`,
  });

  res.status(200).json({ ok: true });
}
