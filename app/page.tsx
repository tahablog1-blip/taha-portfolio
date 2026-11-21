import Site from "@/components/Site";
import { getContent } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getContent();
  const p = content.profile;
  const ld = {
    "@context": "https://schema.org", "@type": "Person",
    name: p.name.en, alternateName: p.name.ar, jobTitle: p.title.en,
    address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
    knowsLanguage: ["ar", "en"],
    sameAs: [p.linkedin, p.github].filter(Boolean),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Site content={content} />
    </>
  );
}
