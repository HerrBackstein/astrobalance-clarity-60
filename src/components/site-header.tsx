import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/selbstfindung", label: "Selbstfindung" },
  { to: "/tierkommunikation", label: "Tierkommunikation" },
  { to: "/angebote", label: "Angebote" },
  { to: "/haltung", label: "Haltung & Ethik" },
  { to: "/ueber-mich", label: "Über mich" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-mist/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12 lg:py-7">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl tracking-tight text-earth">AstroBalance</span>
          <span className="mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-dusk">
            by Victoria Storer
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-light transition-colors hover:text-clay ${
                  active ? "text-clay" : "text-earth"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/kontakt"
          className="hidden rounded-full border border-earth/30 px-5 py-2 text-sm font-light text-earth transition hover:bg-earth hover:text-mist lg:inline-flex"
        >
          Kontakt
        </Link>

        <button
          type="button"
          aria-label="Menü"
          onClick={() => setOpen((o) => !o)}
          className="text-earth lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-mist lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-earth hover:bg-sand/60"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-earth px-2 py-3 text-center text-sm text-mist"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
