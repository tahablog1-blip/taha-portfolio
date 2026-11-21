import { NextResponse } from "next/server";
import { listMessages, deleteMessage } from "@/lib/store";
import { isOwner } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isOwner()) return NextResponse.json({ error: "Sign in again. / سجّل دخول تاني." }, { status: 401 });
  const messages = (await listMessages()).map(({ _ref, ...m }) => m);
  return NextResponse.json({ messages });
}

export async function DELETE(req: Request) {
  if (!isOwner()) return NextResponse.json({ error: "Sign in again." }, { status: 401 });
  const id = new URL(req.url).searchParams.get("id");
  if (id) await deleteMessage(id);
  return NextResponse.json({ ok: true });
}
