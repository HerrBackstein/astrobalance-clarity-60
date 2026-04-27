import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-dusk">404</p>
        <h1 className="mt-6 font-serif text-5xl text-earth">Seite nicht gefunden</h1>
        <p className="mt-4 text-sm text-dusk">Diese Seite existiert nicht oder wurde verschoben.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-earth px-7 py-3 text-sm text-mist transition hover:bg-earth/90"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AstroBalance — Astrologische Begleitung & Tierkommunikation" },
      {
        name: "description",
        content:
          "AstroBalance by Victoria Storer: astrologische Tiefenbegleitung, schriftliche Tierkommunikation und energetische Begleitung — mit Klarheit, Achtsamkeit und Verantwortung.",
      },
      { name: "author", content: "Victoria Storer" },
      { property: "og:title", content: "AstroBalance — Innere Balance finden" },
      {
        property: "og:description",
        content: "Astrologische Begleitung & achtsame Tierkommunikation in Österreich.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&family=Outfit:wght@300;400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
