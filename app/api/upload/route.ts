import { NextResponse } from "next/server";
import { saveUpload, readLocalUpload } from "@/lib/store";
import { isOwner } from "@/lib/auth";

const TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif", "application/pdf"];
const MAX = 8 * 1024 * 1024;

export async function POST(req: Request) {
  if (!isOwner()) return NextResponse.json({ error: "Sign in again. / سجّل دخول تاني." }, { status: 401 });
  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "Choose a file. / اختار ملف." }, { status: 400 });
  if (!TYPES.includes(file.type)) return NextResponse.json({ error: "Use JPG, PNG, WebP, GIF or PDF. / استخدم صورة أو PDF." }, { status: 415 });
  if (file.size > MAX) return NextResponse.json({ error: "Files must be 8 MB or smaller. / الملف لازم يكون 8 ميجا أو أقل." }, { status: 413 });
  try { return NextResponse.json({ url: await saveUpload(file.name, await file.arrayBuffer(), file.type) }); }
  catch { return NextResponse.json({ error: "Storage isn't connected. / التخزين مش متوصل." }, { status: 500 }); }
}

// Local development only: serves files saved without Vercel Blob.
export async function GET(req: Request) {
  const key = new URL(req.url).searchParams.get("key") || "";
  const data = await readLocalUpload(key);
  if (!data) return new NextResponse("Not found", { status: 404 });
  const ext = key.split(".").pop() || "";
  const type = ({ jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", gif: "image/gif", avif: "image/avif", pdf: "application/pdf" } as Record<string, string>)[ext] || "application/octet-stream";
  return new NextResponse(data, { headers: { "Content-Type": type } });
}
