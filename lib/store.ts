import { put, list, del } from "@vercel/blob";
import { promises as fs } from "fs";
import path from "path";
import defaultContent from "./default-content.json";

/**
 * Storage layer.
 * - On Vercel with a Blob store connected (BLOB_READ_WRITE_TOKEN set), content,
 *   uploads and contact messages live in Vercel Blob.
 * - Locally without a token, everything is written under ./.data so the site
 *   still works in development.
 */
export type Content = typeof defaultContent;
export type Message = {
  id: string; createdAt: string; name: string; email: string;
  company: string; subject: string; message: string; lang: string;
};

const useBlob = () => !!process.env.BLOB_READ_WRITE_TOKEN;
const LOCAL = path.join(process.cwd(), ".data");
const CONTENT_KEY = "site/content.json";

async function localWrite(key: string, data: string | Buffer) {
  const f = path.join(LOCAL, key);
  await fs.mkdir(path.dirname(f), { recursive: true });
  await fs.writeFile(f, data);
}

export async function getContent(): Promise<Content> {
  try {
    if (useBlob()) {
      const { blobs } = await list({ prefix: CONTENT_KEY, limit: 1 });
      if (blobs[0]) {
        const r = await fetch(blobs[0].url, { cache: "no-store" });
        if (r.ok) return (await r.json()) as Content;
      }
    } else {
      return JSON.parse(await fs.readFile(path.join(LOCAL, CONTENT_KEY), "utf8"));
    }
  } catch { /* fall back to the bundled content */ }
  return defaultContent as Content;
}

export async function saveContent(c: Content) {
  const body = JSON.stringify(c, null, 2);
  if (useBlob()) {
    await put(CONTENT_KEY, body, { access: "public", contentType: "application/json", addRandomSuffix: false, cacheControlMaxAge: 0 });
  } else {
    await localWrite(CONTENT_KEY, body);
  }
}

export async function saveUpload(name: string, data: ArrayBuffer, type: string): Promise<string> {
  const safe = name.toLowerCase().replace(/[^a-z0-9.\-]+/g, "-").slice(-80);
  const key = `uploads/${Date.now().toString(36)}-${safe}`;
  if (useBlob()) {
    const r = await put(key, Buffer.from(data), { access: "public", contentType: type });
    return r.url;
  }
  await localWrite(path.join("public-uploads", key), Buffer.from(data));
  return `/api/upload?key=${encodeURIComponent(key)}`;
}

export async function readLocalUpload(key: string) {
  if (key.includes("..")) return null;
  try { return await fs.readFile(path.join(LOCAL, "public-uploads", key)); } catch { return null; }
}

// Messages are stored with an unguessable random path segment so their public
// blob URLs can't be discovered; only the admin API lists them.
export async function saveMessage(m: Message) {
  const key = `messages/${m.createdAt.replace(/[:.]/g, "-")}-${m.id}.json`;
  const body = JSON.stringify(m);
  if (useBlob()) await put(key, body, { access: "public", contentType: "application/json", addRandomSuffix: true });
  else await localWrite(key, body);
}

export async function listMessages(): Promise<(Message & { _ref: string })[]> {
  if (useBlob()) {
    const { blobs } = await list({ prefix: "messages/", limit: 500 });
    const items = await Promise.all(blobs.map(async b => {
      try { const r = await fetch(b.url, { cache: "no-store" }); return { ...(await r.json()), _ref: b.url }; } catch { return null; }
    }));
    return items.filter(Boolean).sort((a, b) => b!.createdAt.localeCompare(a!.createdAt)) as (Message & { _ref: string })[];
  }
  const dir = path.join(LOCAL, "messages");
  const files = await fs.readdir(dir).catch(() => [] as string[]);
  const items = await Promise.all(files.map(async f => ({ ...JSON.parse(await fs.readFile(path.join(dir, f), "utf8")), _ref: f })));
  return items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function deleteMessage(id: string) {
  const all = await listMessages();
  const m = all.find(x => x.id === id);
  if (!m) return;
  if (useBlob()) await del(m._ref);
  else await fs.unlink(path.join(LOCAL, "messages", m._ref)).catch(() => {});
}
