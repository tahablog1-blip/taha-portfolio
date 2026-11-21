import { NextResponse } from "next/server";
import { getContent, saveContent, type Content } from "@/lib/store";
import { isOwner } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(await getContent());
}

export async function PUT(req: Request) {
  if (!isOwner()) return NextResponse.json({ error: "Sign in again. / سجّل دخول تاني." }, { status: 401 });
  // Same-origin check (the cookie is SameSite=Strict too)
  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(req.url).host) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  let body: Content;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid content. / المحتوى مش صحيح." }, { status: 400 }); }
  if (!body || typeof body !== "object" || !body.profile || !Array.isArray(body.projects)) {
    return NextResponse.json({ error: "Invalid content. / المحتوى مش صحيح." }, { status: 400 });
  }
  if (JSON.stringify(body).length > 1_000_000) return NextResponse.json({ error: "Content is too large. / المحتوى كبير جداً." }, { status: 413 });
  try { await saveContent(body); }
  catch { return NextResponse.json({ error: "Storage isn't connected. Connect a Vercel Blob store. / التخزين مش متوصل." }, { status: 500 }); }
  return NextResponse.json({ ok: true });
}
