import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/section-eyebrow";
import celestial from "@/assets/celestial.jpg";

export const Route = createFileRoute("/selbstfindung")({
  head: () => ({
    meta: [
      { title: "Astrologisches Selbstfindungstraining — AstroBalance" },
      {
        name: "description",
        content:
          "Astrologie als Spiegel: Selbstreflexion, Klarheit und bewusste Entscheidungen mit Deinem persönlichen Geburtshoroskop.",
      },
      { property: "og:title", content: "Astrologisches Selbstfindungstraining — AstroBalance" },
      { property: "og:description", content: "Selbstreflexion und Orientierung durch Astrologie." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute -right-40 top-0 size-[600px] rounded-full bg-sand/50 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <SectionEyebrow>Astrologisches Selbstfindungstraining</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-earth md:text-6xl lg:text-7xl">
            Astrologie als Werkzeug der <span className="italic text-dusk">Selbsterkenntnis.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-dusk">
            AstroBalance steht für astrologische Begleitung und achtsame Tierkommunikation. Im
            Mittelpunkt stehen Selbstreflexion, Klarheit und bewusste Entscheidungen — individuell,
            wertschätzend und bodenständig.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[36px] bg-sand/40 p-2.5">
              <div className="size-full overflow-hidden rounded-[26px]">
                <img src={celestial} alt="" loading="lazy" width={1024} height={1280} className="size-full object-cover" />
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:col-span-6 lg:col-start-7">
            <div>
              <SectionEyebrow>Was dahintersteht</SectionEyebrow>
              <h2 className="mt-5 font-serif text-3xl text-earth md:text-4xl">
                Sich selbst und das Umfeld bewusster wahrnehmen.
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-dusk">
                AstroBalance begleitet Menschen dabei, sich selbst und ihr Umfeld bewusster
                wahrzunehmen. Im Mittelpunkt stehen Selbstreflexion, Klarheit und achtsame Verbindung
                — zu sich selbst und zu den Tieren, die uns begleiten.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-earth">Astrologie kann unterstützen bei:</h3>
              <ul className="mt-5 space-y-3 text-base font-light text-earth">
                {[
                  "Lebens- und Entscheidungsphasen",
                  "beruflicher oder persönlicher Neuorientierung",
                  "Beziehungsthemen",
                  "dem Wunsch nach mehr innerer Klarheit",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-4">
                    <span className="mt-2.5 block size-1.5 shrink-0 rounded-full bg-clay" />
                    <span className="text-dusk">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base font-light leading-relaxed text-dusk">
                Ziel ist es, sich selbst besser zu verstehen und bewusste, stimmige Schritte zu
                gehen.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-earth">Wie ich arbeite</h3>
              <p className="mt-5 text-base font-light leading-relaxed text-dusk">
                Meine Arbeit ist geprägt von Achtsamkeit, Klarheit und Verantwortung. Ich begegne
                Mensch und Tier respektvoll, ohne Erwartungen oder Bewertungen, und gebe Impulse
                behutsam weiter. Mir ist wichtig, dass alles bodenständig, nachvollziehbar und
                alltagstauglich bleibt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-sand/30">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-12">
          <p className="font-serif text-2xl italic leading-relaxed text-earth md:text-3xl">
            „Verstehen beginnt dort, wo wir bereit sind, achtsam hinzusehen.“
          </p>
          <Link to="/kontakt" className="mt-10 inline-flex rounded-full bg-earth px-8 py-4 text-sm font-light text-mist hover:bg-earth/90">
            Beratung anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
