import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

/**
 * Single-owner authentication.
 * ADMIN_PASSWORD   — the password for /admin
 * SESSION_SECRET   — a long random string used to sign the session cookie
 * The cookie carries the role ("owner") and an expiry, signed with HMAC-SHA256.
 */
export const COOKIE = "tp_session";
const MAX_AGE = 60 * 60 * 12; // 12 hours

export type Role = "owner";

function secret() {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 32) throw new Error("SESSION_SECRET must be set (32+ characters).");
  return s;
}
const sign = (v: string) => createHmac("sha256", secret()).update(v).digest("base64url");

export function safeEqual(a: string, b: string) {
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function checkPassword(pw: string) {
  const real = process.env.ADMIN_PASSWORD;
  if (!real) return false;
  const h = (v: string) => createHmac("sha256", "pw").update(v).digest("hex");
  return safeEqual(h(pw), h(real));
}

export function createSession(role: Role = "owner") {
  const payload = `${role}.${Math.floor(Date.now() / 1000) + MAX_AGE}`;
  return { value: `${payload}.${sign(payload)}`, maxAge: MAX_AGE };
}

export function readSession(): { role: Role } | null {
  const raw = cookies().get(COOKIE)?.value;
  if (!raw) return null;
  const i = raw.lastIndexOf(".");
  const payload = raw.slice(0, i), sig = raw.slice(i + 1);
  try { if (!safeEqual(sign(payload), sig)) return null; } catch { return null; }
  const [role, exp] = payload.split(".");
  if (role !== "owner" || Number(exp) < Date.now() / 1000) return null;
  return { role };
}

export const isOwner = () => readSession()?.role === "owner";
