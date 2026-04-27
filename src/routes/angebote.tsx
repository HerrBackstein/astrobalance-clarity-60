import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const Route = createFileRoute("/angebote")({
  head: () => ({
    meta: [
      { title: "Angebote — AstroBalance" },
      {
        name: "description",
        content:
          "Astrologische Tiefenbegleitung, schriftliche Tierkommunikation und energetische Sterbebegleitung für Tiere.",
      },
      { property: "og:title", content: "Angebote — AstroBalance" },
      { property: "og:description", content: "Übersicht der Begleitungen bei AstroBalance." },
    ],
  }),
  component: Page,
});

const offers = [
  {
    n: "I",
    title: "Astrologische Tiefenbegleitung",
    duration: "90 Minuten · persönlich oder online",
    body: "Persönliche Standortbestimmung und Prozessbegleitung anhand Deines Geburtshoroskops. Wir betrachten gemeinsam aktuelle Themen, innere Muster und mögliche bewusste Schritte.",
    bullets: [
      "Vorbereitung der astrologischen Analyse mit Imperastro",
      "Gespräch in einem klaren, ruhigen Rahmen",
      "Impulse zur Verankerung im Alltag",
    ],
  },
  {
    n: "II",
    title: "Schriftliche Tierkommunikation",
    duration: "Ausarbeitung in Textform",
    body: "Achtsame Wahrnehmung in Textform — zur Vertiefung der Mensch-Tier-Verbindung. Du erhältst eine ausgearbeitete schriftliche Rückmeldung, die Du in Ruhe lesen und einordnen kannst.",
    bullets: [
      "Bild und kurze Beschreibung Deines Tieres",
      "Bis zu drei Fragen pro Sitzung",
      "Ausgearbeitete schriftliche Rückmeldung",
    ],
  },
  {
    n: "III",
    title: "Energetische Sterbebegleitung für Tiere",
    duration: "Achtsamer, gehaltener Raum",
    body: "Ein ruhiger, gehaltener Raum in Zeiten des Abschieds. Eine sanfte Begleitung für Tier und Mensch — wertfrei und achtsam.",
    bullets: [
      "Vorgespräch zur aktuellen Situation",
      "Energetische Begleitung im individuellen Rahmen",
      "Raum für Fragen und Nachklang",
    ],
  },
];

function Page() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <SectionEyebrow>Angebote</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-earth md:text-6xl lg:text-7xl">
            Drei Räume für <span className="italic text-dusk">Klarheit & Verbindung.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-dusk">
            Jede Begleitung folgt einem klaren Rahmen — zeitlich, inhaltlich und finanziell. Ich
            begleite Prozesse mit astrologischer Tiefe und achtsamer Struktur.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="space-y-16">
          {offers.map((o) => (
            <article
              key={o.n}
              className="grid gap-10 border-t border-border pt-12 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <span className="font-serif text-sm uppercase tracking-[0.25em] text-clay">
                  {o.n}
                </span>
                <h2 className="mt-5 font-serif text-3xl text-earth md:text-4xl">{o.title}</h2>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-dusk">{o.duration}</p>
              </div>
              <div className="space-y-5 md:col-span-7 md:col-start-6">
                <p className="text-base font-light leading-relaxed text-dusk">{o.body}</p>
                <ul className="space-y-2.5">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm font-light text-earth">
                      <span className="mt-2 block size-1 shrink-0 rounded-full bg-clay" />
                      <span className="text-dusk">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className="mt-4 inline-flex border-b border-earth/30 pb-1 text-sm text-earth hover:border-clay hover:text-clay"
                >
                  Diesen Rahmen anfragen →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-sand/30">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-12">
          <p className="text-sm font-light leading-relaxed text-dusk">
            Die Leistungen dienen der Selbsterkenntnis und persönlichen Orientierung. Sie ersetzen
            keine medizinische, psychotherapeutische, tierärztliche oder rechtliche Beratung oder
            Behandlung.
          </p>
        </div>
      </section>
    </>
  );
}
