import { createFileRoute, Link } from "@tanstack/react-router";
import heroMeadow from "@/assets/hero-meadow.jpg";
import moonLogo from "@/assets/moon-logo.png";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AstroBalance — Innere Balance finden" },
      {
        name: "description",
        content:
          "Astrologische Tiefenbegleitung und schriftliche Tierkommunikation in Österreich. Klarheit, Selbsterkenntnis und bewusste Entscheidungen mit Victoria Storer.",
      },
      { property: "og:title", content: "AstroBalance — Innere Balance finden" },
      {
        property: "og:description",
        content: "Astrologische Begleitung & achtsame Tierkommunikation.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[700px] rounded-full bg-clay/10 blur-[160px]" />
        <div className="pointer-events-none absolute -left-40 top-1/2 size-[500px] rounded-full bg-clay/5 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-12 lg:gap-20 lg:px-12 lg:py-28">
          <div className="flex flex-col justify-center gap-8 lg:col-span-6">
            <SectionEyebrow>Raum für Reflexion</SectionEyebrow>
            <h1 className="text-balance font-serif text-5xl leading-[1.05] text-mist md:text-6xl lg:text-7xl">
              Innere Balance{" "}
              <span className="italic text-clay">finden</span>
            </h1>
            <p className="max-w-[44ch] text-pretty text-lg font-light leading-relaxed text-dusk">
              Durch Selbsterkenntnis, Übernahme von Verantwortung und bewusst den lichten Weg
              wählen. AstroBalance begleitet Menschen in Übergangs- und Entwicklungsphasen — mit
              astrologischer Tiefe und achtsamer Struktur.
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Link
                to="/angebote"
                className="rounded-full bg-clay px-8 py-4 text-sm font-light text-earth transition-all duration-300 hover:bg-mist hover:shadow-lg hover:shadow-clay/20"
              >
                Angebote ansehen
              </Link>
              <Link
                to="/ueber-mich"
                className="text-sm font-light text-mist underline-offset-4 hover:text-clay hover:underline"
              >
                Mehr über meine Arbeit ↓
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:col-span-6">
            {/* Mond als zentrales Brand-Element */}
            <div className="relative aspect-square w-full max-w-[520px]">
              <div className="absolute inset-0 rounded-full bg-clay/10 blur-3xl" />
              <img
                src={moonLogo}
                alt="AstroBalance Mond-Emblem"
                width={1024}
                height={1024}
                className="relative size-full object-contain"
                style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.4))" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow>Wenn innere Klarheit gebraucht wird</SectionEyebrow>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-mist md:text-5xl">
              Es gibt Lebensphasen, in denen alte Antworten <em className="text-clay">nicht mehr tragen.</em>
            </h2>
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-dusk lg:col-span-6 lg:col-start-7">
            <p>
              Entscheidungen stehen an, Orientierung fehlt oder ein innerer Wandel kündigt sich an.
              In einem klar gehaltenen Rahmen unterstütze ich Dich dabei, Dein persönliches
              Horoskop als Spiegel Deiner aktuellen Themen zu verstehen und bewusste Schritte zu
              gehen.
            </p>
            <p>
              AstroBalance begleitet Dich dabei, Dich selbst besser zu verstehen, innere Balance zu
              finden und stimmige Entscheidungen zu treffen — für Dich und für Dein Tier.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-white/10 bg-black/15">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-3 lg:px-12">
          {[
            {
              n: "I",
              title: "Astrologische Tiefenbegleitung",
              body: "90 Minuten — persönliche Standortbestimmung und Prozessbegleitung.",
            },
            {
              n: "II",
              title: "Schriftliche Tierkommunikation",
              body: "Achtsame Wahrnehmung in Textform — zur Vertiefung der Mensch-Tier-Verbindung.",
            },
            {
              n: "III",
              title: "Energetische Sterbebegleitung",
              body: "Ein ruhiger, gehaltener Raum in Zeiten des Abschieds — für Tiere.",
            },
          ].map((p) => (
            <div key={p.n} className="flex flex-col gap-5">
              <span className="font-serif text-sm uppercase tracking-[0.25em] text-clay">
                {p.n}
              </span>
              <h3 className="font-serif text-2xl text-mist">{p.title}</h3>
              <p className="max-w-[34ch] text-sm font-light leading-relaxed text-dusk">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ASTROLOGY AS MIRROR */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] panel p-2.5">
            <div className="size-full overflow-hidden rounded-[26px]">
              <img
                src={heroMeadow}
                alt="Stille Wiese im Morgenlicht"
                width={1280}
                height={960}
                loading="lazy"
                className="size-full object-cover opacity-80 mix-blend-luminosity"
              />
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <SectionEyebrow>Astrologie als Spiegel — nicht als Vorhersage</SectionEyebrow>
            <h2 className="font-serif text-4xl leading-tight text-mist md:text-5xl">
              Selbstreflexion und <span className="italic text-clay">Orientierung.</span>
            </h2>
            <div className="space-y-5 text-base font-light leading-relaxed text-dusk">
              <p>
                Meine Arbeit dient der Selbstreflexion und Orientierung. Ich biete keine
                Zukunftsprognosen, sondern begleite bewusste Entwicklungsprozesse.
              </p>
              <p>
                Ergänzend arbeite ich mit praktischen Werkzeugen wie Ritualen, Glaubenssatzarbeit
                sowie dem achtsamen Einsatz ätherischer Öle und Räucherkräuter — um Erkenntnisse
                nachhaltig im Alltag zu verankern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPERASTRO */}
      <section className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[0.7rem] uppercase tracking-[0.25em] text-clay">
                Präzision in der Analyse
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-mist md:text-5xl">
                Imperastro <span className="italic text-clay">— Tiefe & Klarheit.</span>
              </h2>
            </div>
            <div className="space-y-5 text-base font-light leading-relaxed text-dusk lg:col-span-7 lg:col-start-6">
              <p>
                Für die astrologische Ausarbeitung verwende ich das professionelle Astroprogramm
                Imperastro — entwickelt von Frank & Rainer, dort, wo langjährige Erfahrung auf
                konzeptionelle Klarheit und durchdachte Struktur trifft.
              </p>
              <p>
                Das Programm ermöglicht eine differenzierte Betrachtung komplexer Zusammenhänge und
                unterstützt eine astrologische Analyse auf höchstem fachlichen Niveau. Die
                Interpretation bleibt dabei stets individuell und verantwortungsvoll.
              </p>
              <p className="border-l-2 border-clay/60 pl-5 italic text-mist/85">
                Technische Präzision und intuitive Wahrnehmung stehen in Balance. Die astrologische
                Analyse dient als Grundlage — die bewusste Integration geschieht im Gespräch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-12">
        <p className="font-serif text-3xl italic leading-relaxed text-mist md:text-4xl">
          „Tiefe Erkenntnis entsteht, wenn Klarheit standhält und Bewusstheit den lichten Weg
          wählt.“
        </p>
        <Link
          to="/kontakt"
          className="mt-12 inline-flex rounded-full bg-clay px-9 py-4 text-sm font-light text-earth transition hover:bg-mist"
        >
          Termin anfragen
        </Link>
      </section>
    </>
  );
}
