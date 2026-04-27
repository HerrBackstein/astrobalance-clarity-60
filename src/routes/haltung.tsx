import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const Route = createFileRoute("/haltung")({
  head: () => ({
    meta: [
      { title: "Haltung & Ethik — AstroBalance" },
      {
        name: "description",
        content:
          "Klarer Rahmen, Eigenverantwortung und achtsamer Umgang mit Vertrauen — die Grundsätze meiner Arbeit.",
      },
      { property: "og:title", content: "Haltung & Ethik — AstroBalance" },
      { property: "og:description", content: "Begleitung mit Klarheit und Verantwortung." },
    ],
  }),
  component: Page,
});

const principles = [
  {
    title: "Eigenverantwortung",
    body: "Jede Begleitung setzt die Bereitschaft zur Eigenverantwortung voraus. Entscheidungen bleiben stets bei Dir. Ich gebe keine Handlungsanweisungen, treffe keine Prognosen und übernehme keine Lebensentscheidungen. Bewusstheit bedeutet, den eigenen Weg selbst zu wählen.",
  },
  {
    title: "Klarer Rahmen",
    body: "Ein klarer zeitlicher, inhaltlicher und finanzieller Rahmen ist Teil meiner Arbeit. Er schafft Sicherheit, Verbindlichkeit und schützt vor Abhängigkeiten. Grenzen werden respektvoll und konsequent gewahrt.",
  },
  {
    title: "Achtsamer Umgang mit Einfluss",
    body: "Ich bin mir der Wirkung meiner Arbeit bewusst. Deshalb arbeite ich transparent, ohne Manipulation und ohne Versprechen. Ich fördere keine Abhängigkeiten und nutze Vertrauen nicht aus.",
  },
  {
    title: "Würde & Respekt",
    body: "Jeder Mensch und jedes Tier wird wertfrei und respektvoll betrachtet. Meine Arbeit ersetzt keine medizinische, therapeutische oder tierärztliche Betreuung.",
  },
];

function Page() {
  return (
    <>
      <section className="border-b border-white/10/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <SectionEyebrow>Haltung & Ethik</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-mist md:text-6xl lg:text-7xl">
            Begleitung mit <span className="italic text-dusk">Klarheit & Verantwortung.</span>
          </h1>
          <div className="mt-10 max-w-3xl space-y-4 text-lg font-light leading-relaxed text-dusk">
            <p>Meine Arbeit basiert auf einem klaren, achtsamen Rahmen.</p>
            <p>Ich begleite Prozesse — ich übernehme sie nicht.</p>
            <p>Astrologie dient der Selbstreflexion und bewussten Ausrichtung.</p>
            <p>Tierkommunikation ist eine wertfreie Wahrnehmung — keine Entscheidungshilfe.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
          {principles.map((p, i) => (
            <article key={p.title} className="flex flex-col gap-5 border-t border-white/10 pt-8">
              <span className="font-serif text-sm uppercase tracking-[0.25em] text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-3xl text-mist">{p.title}</h2>
              <p className="text-base font-light leading-relaxed text-dusk">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10/60 bg-black/15">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-12">
          <p className="font-serif text-2xl italic leading-relaxed text-mist md:text-3xl">
            „Tiefe Erkenntnis entsteht, wenn Klarheit standhält und Bewusstheit den lichten Weg
            wählt.“
          </p>
        </div>
      </section>
    </>
  );
}
