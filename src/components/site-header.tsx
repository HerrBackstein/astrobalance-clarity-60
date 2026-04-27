import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import moonLogo from "@/assets/moon-logo.png";

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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-earth/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12 lg:py-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={moonLogo}
            alt=""
            width={48}
            height={48}
            className="size-10 lg:size-12"
            style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))" }}
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-tight text-mist">AstroBalance</span>
            <span className="mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-clay">
              by Victoria
            </span>
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
                  active ? "text-clay" : "text-mist/85"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/kontakt"
          className="hidden rounded-full border border-clay/50 px-5 py-2 text-sm font-light text-clay transition hover:bg-clay hover:text-earth lg:inline-flex"
        >
          Kontakt
        </Link>

        <button
          type="button"
          aria-label="Menü"
          onClick={() => setOpen((o) => !o)}
          className="text-mist lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-earth lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-mist hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-clay px-2 py-3 text-center text-sm text-earth"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
