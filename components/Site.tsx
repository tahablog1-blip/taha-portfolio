import Script from "next/script";
import { SHELL_HTML } from "@/lib/shell";
import type { Content } from "@/lib/store";

/** Renders the page chrome, the site content as JSON, and the client app. */
export default function Site({ content, admin = false }: { content: Content; admin?: boolean }) {
  const json = JSON.stringify(content).replace(/</g, "\\u003c");
  const p = content.profile;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: SHELL_HTML }} />
      {/* Readable summary for search engines and no-JS visitors */}
      <noscript>
        <div style={{ padding: 24 }}>
          <h1>{p.name.en} — {p.name.ar}</h1>
          <p>{p.title.en}</p>
          <p>{p.intro.en}</p>
          <p>{p.location.en}</p>
        </div>
      </noscript>
      <script id="site-content" type="application/json" dangerouslySetInnerHTML={{ __html: json }} />
      {admin && <script dangerouslySetInnerHTML={{ __html: "window.__ADMIN__=true;" }} />}
      <Script src="https://cdn.jsdelivr.net/npm/three@0.147.0/build/three.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/loaders/GLTFLoader.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/environments/RoomEnvironment.js" strategy="beforeInteractive" />
      <Script src="https://unpkg.com/lucide@0.453.0/dist/umd/lucide.min.js" strategy="beforeInteractive" />
      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
}
