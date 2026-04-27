import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/section-eyebrow";
import animal from "@/assets/animal.jpg";

export const Route = createFileRoute("/tierkommunikation")({
  head: () => ({
    meta: [
      { title: "Schriftliche Tierkommunikation — AstroBalance" },
      {
        name: "description",
        content:
          "Achtsame Tierkommunikation in Textform — feinfühlige Wahrnehmung zur Vertiefung der Mensch-Tier-Verbindung.",
      },
      { property: "og:title", content: "Tierkommunikation — AstroBalance" },
      {
        property: "og:description",
        content: "Achtsame schriftliche Tierkommunikation mit Victoria Storer.",
      },
      { property: "og:image", content: animal },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10/60">
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-center gap-6">
            <SectionEyebrow>Tierkommunikation</SectionEyebrow>
            <h1 className="font-serif text-5xl leading-[1.05] text-mist md:text-6xl">
              Wirklich <span className="italic text-dusk">zuhören.</span>
            </h1>
            <p className="max-w-xl text-lg font-light leading-relaxed text-dusk">
              Tiere kommunizieren auf feinen Ebenen — über Verhalten, Emotionen und Stimmung.
              Tierkommunikation kann dabei helfen, diese Signale bewusster wahrzunehmen und das
              Zusammenleben zwischen Mensch und Tier besser zu verstehen.
            </p>
            <p className="max-w-xl text-sm font-light italic text-dusk">
              Sie ersetzt keinen Tierarzt und kein Training, kann aber eine wertvolle Ergänzung
              sein.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-[36px] bg-white/5 p-2.5">
            <div className="size-full overflow-hidden rounded-[26px]">
              <img src={animal} alt="Pferd im Morgennebel" width={1024} height={1280} className="size-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow>Wann sie unterstützen kann</SectionEyebrow>
            <h2 className="mt-5 font-serif text-3xl text-mist md:text-4xl">
              In Phasen, in denen Worte nicht reichen.
            </h2>
          </div>
          <ul className="space-y-4 lg:col-span-6 lg:col-start-7">
            {[
              "bei Verhaltensveränderungen",
              "bei Unsicherheiten oder Spannungen",
              "in Übergangsphasen (Umzug, Krankheit, Verlust)",
              "zur Stärkung der Mensch-Tier-Beziehung",
              "wenn Sie Ihr Tier besser verstehen möchten",
            ].map((s) => (
              <li
                key={s}
                className="flex items-start gap-4 border-b border-white/10/60 pb-4 text-base font-light text-dusk"
              >
                <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-clay" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-white/10/60 bg-black/15">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionEyebrow>Wie ich arbeite</SectionEyebrow>
              <p className="mt-6 text-base font-light leading-relaxed text-dusk">
                Ich begegne jedem Tier achtsam, respektvoll und ohne Erwartungen. Die Impulse aus
                der Tierkommunikation werden behutsam weitergegeben und gemeinsam eingeordnet —
                immer mit Blick auf das Wohl von Tier und Mensch.
              </p>
              <p className="mt-4 text-base font-light leading-relaxed text-dusk">
                Mir ist wichtig, bodenständig, transparent und verantwortungsvoll zu arbeiten.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
              <p className="font-serif text-xl italic leading-relaxed text-mist">
                „Manchmal entsteht Verständnis dort, wo wir bereit sind, wirklich zuzuhören.“
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-dusk">— Victoria Storer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-12">
        <Link to="/kontakt" className="inline-flex rounded-full bg-black/20 px-9 py-4 text-sm font-light text-mist hover:bg-white/5">
          Anfrage senden
        </Link>
      </section>
    </>
  );
}
