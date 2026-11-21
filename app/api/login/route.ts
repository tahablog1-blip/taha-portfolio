import { NextResponse } from "next/server";
import { checkPassword, createSession, COOKIE } from "@/lib/auth";
import { limited, clientIp } from "@/lib/rate";

export async function POST(req: Request) {
  const back = (e: string) => NextResponse.redirect(new URL(`/admin?e=${e}`, req.url), 303);
  if (!process.env.ADMIN_PASSWORD || (process.env.SESSION_SECRET || "").length < 32) return back("3");
  if (limited("login:" + clientIp(req), 8, 10 * 60 * 1000)) return back("2");
  const form = await req.formData();
  if (!checkPassword(String(form.get("password") || ""))) return back("1");
  const s = createSession("owner");
  const res = NextResponse.redirect(new URL("/admin#admin", req.url), 303);
  res.cookies.set(COOKIE, s.value, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: s.maxAge });
  return res;
}
