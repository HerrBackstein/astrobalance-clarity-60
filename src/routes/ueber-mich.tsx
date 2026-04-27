import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/section-eyebrow";
import victoria from "@/assets/victoria.jpg";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich — Victoria Storer · AstroBalance" },
      {
        name: "description",
        content:
          "Victoria Storer begleitet Menschen mit astrologischer Klarheit und achtsamer Präsenz in Übergangs- und Entwicklungsphasen.",
      },
      { property: "og:title", content: "Victoria Storer · AstroBalance" },
      { property: "og:description", content: "Astrologische Begleitung mit Tiefe und Struktur." },
      { property: "og:image", content: victoria },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-center gap-7 lg:col-span-6">
            <SectionEyebrow>Über mich</SectionEyebrow>
            <h1 className="font-serif text-5xl leading-[1.05] text-earth md:text-6xl">
              Victoria Storer <span className="italic text-dusk">· AstroBalance</span>
            </h1>
            <p className="text-lg font-light leading-relaxed text-dusk">
              Veränderungsprozesse gehören zum Leben. Doch nicht jede Phase lässt sich allein
              durchdenken oder „lösen". Manchmal braucht es einen klaren Raum, in dem Zusammenhänge
              sichtbar werden und innere Ordnung entstehen darf.
            </p>
            <p className="text-base font-light leading-relaxed text-dusk">
              Ich begleite Menschen in Übergangs- und Entwicklungsphasen mit astrologischer
              Klarheit und achtsamer Präsenz. Meine Arbeit verbindet Tiefe mit Struktur —
              Sensibilität mit Verantwortung.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="aspect-[4/5] overflow-hidden rounded-[36px] bg-sand/40 p-2.5">
              <div className="size-full overflow-hidden rounded-[26px]">
                <img src={victoria} alt="Victoria Storer" width={1024} height={1280} className="size-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-earth">Astrologie als Bewusstwerdung</h2>
            <p className="mt-5 text-base font-light leading-relaxed text-dusk">
              Astrologie ist für mich kein Mittel zur Vorhersage, sondern ein Instrument zur
              Bewusstwerdung innerer Prozesse. Sie hilft, Themen bewusst zu erkennen, eigene Muster
              zu verstehen und Entscheidungen in Einklang mit dem eigenen Weg zu treffen.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-earth">Werkzeuge für den Alltag</h2>
            <p className="mt-5 text-base font-light leading-relaxed text-dusk">
              Ergänzend arbeite ich mit Ritualen, Glaubenssatzarbeit sowie dem achtsamen Einsatz
              ätherischer Öle und Räucherkräuter — um Erkenntnisse nicht nur zu verstehen, sondern
              im Alltag zu verankern.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-earth">Tierkommunikation in Schriftform</h2>
            <p className="mt-5 text-base font-light leading-relaxed text-dusk">
              Auch in der Tierkommunikation steht für mich die respektvolle Wahrnehmung im
              Vordergrund. Die schriftliche Form ermöglicht Ruhe, Klarheit und Eigenverantwortung.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-earth">Haltung</h2>
            <p className="mt-5 text-base font-light leading-relaxed text-dusk">
              Meine Haltung ist geprägt von einem klaren Rahmen, bewusster Abgrenzung und einem
              respektvollen Umgang mit Vertrauen. Ich begleite — ich entscheide nicht.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-earth py-24 text-mist">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <p className="font-serif text-3xl italic leading-relaxed md:text-4xl">
            „Klarheit schafft Raum. Bewusstheit wählt den lichten Weg.“
          </p>
          <Link
            to="/kontakt"
            className="mt-12 inline-flex rounded-full border border-mist/30 px-8 py-4 text-sm font-light text-mist transition hover:bg-mist hover:text-earth"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
