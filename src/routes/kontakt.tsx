import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — AstroBalance" },
      {
        name: "description",
        content: "Kontaktiere Victoria Storer für eine astrologische Begleitung oder schriftliche Tierkommunikation.",
      },
      { property: "og:title", content: "Kontakt — AstroBalance" },
      { property: "og:description", content: "Termin nach Vereinbarung." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionEyebrow>Kontakt</SectionEyebrow>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-earth md:text-6xl">
            Schreib mir <span className="italic text-dusk">in Ruhe.</span>
          </h1>
          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-dusk">
            Ich melde mich persönlich zurück. Für ein erstes Gespräch oder eine konkrete Anfrage zu
            Tierkommunikation oder astrologischer Begleitung.
          </p>

          <div className="mt-12 space-y-5 text-base font-light text-earth">
            <a href="mailto:astrobalance@gmail.com" className="flex items-start gap-4 hover:text-clay">
              <Mail className="mt-0.5 size-5 text-clay" />
              <span>astrobalance@gmail.com</span>
            </a>
            <a href="tel:+436644541213" className="flex items-start gap-4 hover:text-clay">
              <Phone className="mt-0.5 size-5 text-clay" />
              <span>0664 4541213</span>
            </a>
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 size-5 text-clay" />
              <span>
                Oberfeistritz 212<br />
                8184 Anger, Österreich
              </span>
            </div>
          </div>
        </div>

        <form
          className="space-y-6 rounded-3xl border border-border bg-card p-8 lg:col-span-6 lg:col-start-7 lg:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent("Anfrage über AstroBalance");
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nE-Mail: ${data.get("email")}\n\n${data.get("message")}`,
            );
            window.location.href = `mailto:astrobalance@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-dusk">Name</label>
            <input
              id="name" name="name" required
              className="border-b border-border bg-transparent py-3 text-base text-earth placeholder:text-dusk/60 focus:border-clay focus:outline-none"
              placeholder="Dein Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-dusk">E-Mail</label>
            <input
              id="email" name="email" type="email" required
              className="border-b border-border bg-transparent py-3 text-base text-earth placeholder:text-dusk/60 focus:border-clay focus:outline-none"
              placeholder="dein@beispiel.at"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-dusk">Nachricht</label>
            <textarea
              id="message" name="message" rows={5} required
              className="border-b border-border bg-transparent py-3 text-base text-earth placeholder:text-dusk/60 focus:border-clay focus:outline-none"
              placeholder="Worum geht es?"
            />
          </div>
          <button type="submit" className="w-full rounded-full bg-earth px-8 py-4 text-sm font-light text-mist transition hover:bg-earth/90">
            Anfrage senden
          </button>
          <p className="text-xs text-dusk">
            Mit dem Absenden öffnest Du Dein E-Mail-Programm. Deine Daten werden ausschließlich zur
            Bearbeitung Deiner Anfrage verwendet.
          </p>
        </form>
      </div>
    </section>
  );
}
