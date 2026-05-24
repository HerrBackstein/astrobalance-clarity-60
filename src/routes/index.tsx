import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { useEffect, useState } from "react";
import mirror1 from "@/assets/mirror-1.jpg";
import mirror2 from "@/assets/mirror-2.jpg";
import mirror3 from "@/assets/mirror-3.jpg";
import mirror4 from "@/assets/mirror-4.jpg";
import mirror5 from "@/assets/mirror-5.jpg";
import mirror6 from "@/assets/mirror-6.jpg";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";

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
  const mirrorImages = [
    { src: mirror1, alt: "Astrologische Karten im Kerzenlicht" },
    { src: mirror3, alt: "Horoskop-Analyse mit Imperastro" },
    { src: mirror2, alt: "Ätherische Öle und Kristalle" },
  ];
  const dogImages = [
    { src: dog1, alt: "Hund schnuppert an der Hand" },
    { src: dog2, alt: "Achtsamer Moment mit Hund" },
    { src: dog3, alt: "Begleitung im Freien" },
  ];
  const [activeMirror, setActiveMirror] = useState(0);
  const [activeDog, setActiveDog] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setActiveMirror((i) => (i + 1) % 3),
      4000,
    );
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const id = setInterval(
      () => setActiveDog((i) => (i + 1) % 3),
      4000,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[700px] rounded-full bg-clay/10 blur-[160px]" />
        <div className="pointer-events-none absolute -left-40 top-1/2 size-[500px] rounded-full bg-clay/5 blur-[140px]" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-28 text-center lg:py-40">
          <SectionEyebrow>Raum für Reflexion</SectionEyebrow>
          <h1 className="text-balance font-serif text-6xl leading-[1.02] text-mist md:text-7xl lg:text-[7.5rem]">
            Innere Balance{" "}
            <span className="italic text-clay">finden</span>
          </h1>
          <p className="max-w-[52ch] text-pretty text-lg font-light leading-relaxed text-dusk md:text-xl">
            Durch Selbsterkenntnis, Übernahme von Verantwortung und bewusst den lichten Weg
            wählen. AstroBalance begleitet Menschen in Übergangs- und Entwicklungsphasen — mit
            astrologischer Tiefe und achtsamer Struktur.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              to="/angebote"
              className="rounded-full bg-clay px-9 py-4 text-sm font-light text-earth transition-all duration-300 hover:bg-mist hover:shadow-lg hover:shadow-clay/20"
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
          </div>
        </div>
      </section>

      {/* PILLARS */}
      {/* ASTROLOGY BLOCK */}
      <section className="relative border-y border-white/10 bg-black/20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-clay/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div>
              <span className="font-serif text-xs uppercase tracking-[0.35em] text-clay">
                — Ein —
              </span>
              <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-mist md:text-6xl">
                Astrologie<span className="italic text-clay">.</span>
              </h2>
            </div>
            <Link
              to="/angebote"
              className="hidden text-sm font-light text-dusk underline-offset-4 hover:text-clay hover:underline md:inline"
            >
              Zu den Angeboten →
            </Link>
          </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col items-center gap-5">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[36px] panel p-2.5">
              <div className="relative size-full overflow-hidden rounded-[26px]">
                {mirrorImages.map((img, i) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={1280}
                    height={1600}
                    loading={i === 0 ? "eager" : "lazy"}
                    className={`absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
                      i === activeMirror ? "opacity-90" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div
              aria-hidden="true"
              className="flex items-center justify-center gap-2"
            >
              <span className="size-1.5 rounded-full bg-clay/70" />
              <span className="size-1.5 rounded-full bg-clay/40" />
              <span className="size-1.5 rounded-full bg-clay/20" />
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <SectionEyebrow>Spiegel — nicht Vorhersage</SectionEyebrow>
            <h3 className="font-serif text-3xl leading-tight text-mist md:text-4xl">
              Selbstreflexion und <span className="italic text-clay">Orientierung.</span>
            </h3>
            <div className="space-y-5 text-base font-light leading-relaxed text-dusk">
              <p>
                In 90 Minuten entsteht eine persönliche Standortbestimmung — Dein Horoskop als
                Spiegel der aktuellen Themen, gelesen mit dem professionellen Astroprogramm
                <span className="text-mist"> Imperastro</span> von Frank &amp; Rainer.
              </p>
              <p className="border-l-2 border-clay/60 pl-5 italic text-mist/80">
                Technische Präzision und intuitive Wahrnehmung in Balance.
              </p>
            </div>
            <Link
              to="/selbstfindung"
              className="mt-2 inline-flex w-fit rounded-full border border-clay/40 px-7 py-3 text-sm font-light text-mist transition hover:border-clay hover:bg-clay/10"
            >
              Astrologische Begleitung
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-16 lg:px-12">
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-serif text-xs uppercase tracking-[0.4em] text-dusk">
          &amp; — und —
        </span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      {/* TIERKOMMUNIKATION BLOCK */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-1/3 size-[420px] rounded-full bg-clay/5 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div className="text-right md:text-left">
              <span className="font-serif text-xs uppercase tracking-[0.35em] text-clay">
                — Zwei —
              </span>
              <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-mist md:text-6xl">
                Tierkommunikation<span className="italic text-clay">.</span>
              </h2>
            </div>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 flex flex-col gap-7 lg:order-1">
              <SectionEyebrow>Achtsam — in Schriftform</SectionEyebrow>
              <h3 className="font-serif text-3xl leading-tight text-mist md:text-4xl">
                Wirklich <span className="italic text-clay">zuhören.</span>
              </h3>
              <p className="text-base font-light leading-relaxed text-dusk">
                Tiere kommunizieren auf feinen Ebenen. In Textform entsteht ein ruhiger Raum, in
                dem ihre Signale Platz finden — zur Vertiefung der Mensch-Tier-Verbindung, in
                Übergangsphasen und auf dem letzten Weg.
              </p>
              <ul className="space-y-3 text-sm font-light text-dusk">
                <li className="flex items-start gap-3">
                  <span className="mt-2 size-1 rounded-full bg-clay" />
                  Schriftliche Tierkommunikation
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 size-1 rounded-full bg-clay" />
                  Energetische Sterbebegleitung
                </li>
              </ul>
              <Link
                to="/tierkommunikation"
                className="mt-2 inline-flex w-fit rounded-full border border-clay/40 px-7 py-3 text-sm font-light text-mist transition hover:border-clay hover:bg-clay/10"
              >
                Mehr erfahren
              </Link>
            </div>
            <div className="order-1 flex flex-col items-center gap-5 lg:order-2 lg:items-end">
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[36px] panel p-2.5">
                <div className="relative size-full overflow-hidden rounded-[26px]">
                  {dogImages.map((img, i) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      width={1280}
                      height={1600}
                      loading="lazy"
                      className={`absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
                        i === activeDog ? "opacity-90" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div
                aria-hidden="true"
                className="flex items-center justify-center gap-2"
              >
                <span className="size-1.5 rounded-full bg-clay/70" />
                <span className="size-1.5 rounded-full bg-clay/40" />
                <span className="size-1.5 rounded-full bg-clay/20" />
              </div>
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
