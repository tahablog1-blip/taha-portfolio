import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { saveMessage, getContent } from "@/lib/store";
import { limited, clientIp } from "@/lib/rate";

const clean = (v: unknown, max: number) => String(v ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);

export async function POST(req: Request) {
  if (limited("contact:" + clientIp(req), 5, 60 * 60 * 1000)) return NextResponse.json({ error: "Too many messages. Try again later." }, { status: 429 });
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Bad request" }, { status: 400 }); }
  if (clean(b.website, 200)) return NextResponse.json({ ok: true }); // honeypot: silently drop bots
  const m = {
    id: randomUUID(), createdAt: new Date().toISOString(),
    name: clean(b.name, 120), email: clean(b.email, 200), company: clean(b.company, 160),
    subject: clean(b.subject, 200), message: clean(b.message, 5000), lang: b.lang === "en" ? "en" : "ar",
  };
  if (m.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email) || m.subject.length < 2 || m.message.length < 3) {
    return NextResponse.json({ error: "Check the form fields." }, { status: 422 });
  }
  try { await saveMessage(m); }
  catch { return NextResponse.json({ error: "Storage isn't connected." }, { status: 500 }); }

  // Optional e-mail notification through Resend (set RESEND_API_KEY and CONTACT_TO_EMAIL).
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || (await getContent()).profile.email;
  if (key && to) {
    const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: [to], reply_to: m.email, subject: `New message: ${m.subject}`,
        html: `<p><b>${esc(m.name)}</b>${m.company ? " · " + esc(m.company) : ""} &lt;${esc(m.email)}&gt;</p><p><b>${esc(m.subject)}</b></p><p style="white-space:pre-wrap">${esc(m.message)}</p>`,
      }),
    }).catch(() => {});
  }
  return NextResponse.json({ ok: true });
}
