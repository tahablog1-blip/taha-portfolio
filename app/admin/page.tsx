import type { Metadata } from "next";
import Site from "@/components/Site";
import { getContent } from "@/lib/store";
import { isOwner } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Dashboard", robots: { index: false, follow: false } };

export default async function Admin({ searchParams }: { searchParams: { e?: string } }) {
  if (isOwner()) return <Site content={await getContent()} admin />;
  const err = searchParams.e === "1" ? "Wrong password. Try again. / كلمة السر غلط، جرّب تاني."
    : searchParams.e === "2" ? "Too many attempts. Wait a few minutes. / محاولات كتير، استنى شوية."
    : searchParams.e === "3" ? "The dashboard isn't configured yet (ADMIN_PASSWORD / SESSION_SECRET). / لوحة التحكم لسه مش متظبطة."
    : "";
  return (
    <main className="login">
      <form method="post" action="/api/login" className="glass login-box">
        <div className="login-mark grad-text">TAHA</div>
        <h1>Dashboard / لوحة التحكم</h1>
        <label className="f" htmlFor="pw">Password / كلمة السر
          <input id="pw" name="password" type="password" autoComplete="current-password" required autoFocus dir="ltr" />
        </label>
        {err && <p className="err" role="alert">{err}</p>}
        <button className="btn primary" type="submit">Sign in / دخول</button>
        <a className="note" href="/">← Back to site / رجوع للموقع</a>
      </form>
    </main>
  );
}
