import { Link } from "@tanstack/react-router";
import moonLogo from "@/assets/moon-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-black/15">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={moonLogo} alt="" width={40} height={40} className="size-10" loading="lazy" />
              <div>
                <p className="font-serif text-2xl text-mist">AstroBalance</p>
                <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.25em] text-clay">
                  by Victoria
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-dusk">
              Astrologische Begleitung und achtsame Tierkommunikation — mit Klarheit, Struktur und
              Verantwortung.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-clay">Navigation</p>
            <ul className="mt-5 space-y-2.5 text-sm text-mist/90">
              <li><Link to="/" className="hover:text-clay">Startseite</Link></li>
              <li><Link to="/selbstfindung" className="hover:text-clay">Selbstfindung</Link></li>
              <li><Link to="/tierkommunikation" className="hover:text-clay">Tierkommunikation</Link></li>
              <li><Link to="/angebote" className="hover:text-clay">Angebote</Link></li>
              <li><Link to="/haltung" className="hover:text-clay">Haltung & Ethik</Link></li>
              <li><Link to="/ueber-mich" className="hover:text-clay">Über mich</Link></li>
              <li><Link to="/kontakt" className="hover:text-clay">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-clay">Kontakt</p>
            <address className="mt-5 space-y-1 text-sm not-italic text-mist/90">
              <p>Victoria Storer</p>
              <p>Oberfeistritz 212</p>
              <p>8184 Anger, Österreich</p>
              <p className="pt-2">
                <a href="tel:+436644541213" className="hover:text-clay">0664 4541213</a>
              </p>
              <p>
                <a href="mailto:astrobalance@gmail.com" className="hover:text-clay">
                  astrobalance@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-dusk md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} AstroBalance — Victoria Storer</p>
          <Link to="/rechtliches" className="hover:text-clay">
            Impressum · Datenschutz · AGB
          </Link>
        </div>
      </div>
    </footer>
  );
}
