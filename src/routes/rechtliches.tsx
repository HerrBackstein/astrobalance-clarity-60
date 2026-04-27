import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const Route = createFileRoute("/rechtliches")({
  head: () => ({
    meta: [
      { title: "Impressum, Datenschutz & AGB — AstroBalance" },
      { name: "description", content: "Rechtliche Hinweise, Datenschutzerklärung und Allgemeine Geschäftsbedingungen von AstroBalance." },
    ],
  }),
  component: Page,
});

function Section({ title, children, id }: { title: string; children: React.ReactNode; id: string }) {
  return (
    <section id={id} className="border-t border-white/10 pt-12">
      <h2 className="font-serif text-3xl text-mist md:text-4xl">{title}</h2>
      <div className="mt-6 space-y-4 text-base font-light leading-relaxed text-dusk">{children}</div>
    </section>
  );
}

function Page() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:px-12 lg:py-32">
      <SectionEyebrow>Rechtliches</SectionEyebrow>
      <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-mist md:text-6xl">
        Impressum, Datenschutz & <span className="italic text-dusk">AGB</span>
      </h1>

      <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-dusk">
        <a href="#impressum" className="border-b border-white/10 hover:text-clay">Impressum</a>
        <a href="#datenschutz" className="border-b border-white/10 hover:text-clay">Datenschutz</a>
        <a href="#agb" className="border-b border-white/10 hover:text-clay">AGB</a>
      </nav>

      <div className="mt-16 space-y-16">
        <Section id="impressum" title="Impressum">
          <p>Angaben gemäß § 5 ECG und Offenlegung gemäß § 24 Mediengesetz</p>
          <p>
            <strong className="text-mist">AstroBalance</strong><br />
            Victoria Storer<br />
            Oberfeistritz 212<br />
            8184 Anger, Österreich
          </p>
          <p>
            Telefon: 0664 4541213<br />
            E-Mail: astrobalance@gmail.com
          </p>
          <p>Unternehmensform: Einzelunternehmerin</p>
          <p>Unternehmensgegenstand: Astrologische Beratung, schriftliche Tierkommunikation, energetische Begleitung</p>
          <p>Aufsichtsbehörde: Bezirkshauptmannschaft Weiz</p>
          <p>
            Anwendbare Rechtsvorschriften: Gewerbeordnung (GewO) — abrufbar unter{" "}
            <a className="text-clay underline-offset-2 hover:underline" href="https://www.ris.bka.gv.at" target="_blank" rel="noreferrer">www.ris.bka.gv.at</a>
          </p>

          <h3 className="mt-8 font-serif text-xl text-mist">Haftungsausschluss</h3>
          <p>
            Die angebotenen Leistungen dienen der Selbsterkenntnis und persönlichen Orientierung.
            Sie ersetzen keine medizinische, psychotherapeutische, tierärztliche oder rechtliche
            Beratung oder Behandlung. Es werden keine Heilversprechen oder Garantien abgegeben. Für
            externe Links wird keine Haftung übernommen.
          </p>
          <h3 className="mt-8 font-serif text-xl text-mist">Urheberrecht</h3>
          <p>
            Alle Inhalte dieser Website (Texte, Bilder, Gestaltung) sind urheberrechtlich
            geschützt. Eine Verwendung oder Vervielfältigung ist ohne ausdrückliche Zustimmung nicht
            gestattet.
          </p>
        </Section>

        <Section id="datenschutz" title="Datenschutzerklärung">
          <h3 className="font-serif text-xl text-mist">1. Allgemeine Hinweise</h3>
          <p>
            Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Die Verarbeitung
            Ihrer Daten erfolgt ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO,
            TKG 2003).
          </p>
          <h3 className="mt-6 font-serif text-xl text-mist">2. Kontaktaufnahme</h3>
          <p>
            Wenn Sie per E-Mail oder Kontaktformular Kontakt aufnehmen, werden die von Ihnen
            angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zum Zweck der Bearbeitung Ihrer
            Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
          </p>
          <h3 className="mt-6 font-serif text-xl text-mist">3. Verarbeitung im Rahmen der Angebote</h3>
          <p>
            Im Rahmen astrologischer Beratung oder schriftlicher Tierkommunikation können folgende
            Daten verarbeitet werden:
          </p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Name</li>
            <li>Geburtsdaten (bei astrologischer Beratung)</li>
            <li>E-Mail-Adresse</li>
            <li>Foto des Tieres (bei Tierkommunikation)</li>
            <li>freiwillig übermittelte Informationen zur Fragestellung</li>
          </ul>
          <p>Die Verarbeitung erfolgt ausschließlich zur Durchführung der vereinbarten Leistung.</p>

          <h3 className="mt-6 font-serif text-xl text-mist">4. Speicherung und Löschung</h3>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie es zur Erfüllung der
            Leistung oder aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">5. Ihre Rechte</h3>
          <p>Sie haben grundsätzlich das Recht auf:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Auskunft</li><li>Berichtigung</li><li>Löschung</li>
            <li>Einschränkung</li><li>Datenübertragbarkeit</li>
            <li>Widerruf einer Einwilligung</li><li>Widerspruch gegen die Verarbeitung</li>
          </ul>
          <p>
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
            verstößt, können Sie sich bei der österreichischen Datenschutzbehörde beschweren.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">6. Server-Logfiles</h3>
          <p>
            Der Hosting-Provider dieser Website erhebt automatisch Informationen über Zugriffe
            (z. B. IP-Adresse, Zeitpunkt des Zugriffs). Diese Daten dienen der technischen
            Sicherheit und werden nicht personenbezogen ausgewertet.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">7. Cookies</h3>
          <p>
            Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine
            Tracking- oder Marketing-Cookies eingesetzt.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">8. SSL-Verschlüsselung</h3>
          <p>
            Diese Website nutzt eine SSL-Verschlüsselung zur sicheren Übertragung vertraulicher
            Inhalte.
          </p>
        </Section>

        <Section id="agb" title="Allgemeine Geschäftsbedingungen">
          <p className="italic">AstroBalance — Victoria Storer</p>

          <h3 className="mt-6 font-serif text-xl text-mist">1. Geltungsbereich</h3>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche Leistungen von AstroBalance
            — Victoria Storer, Oberfeistritz 212, 8184 Anger, Österreich. Mit der Terminvereinbarung
            oder Beauftragung einer schriftlichen Leistung gelten diese AGB als akzeptiert.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">2. Leistungsbeschreibung</h3>
          <p>AstroBalance bietet:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>astrologische Beratungen</li>
            <li>astrologische Tiefenbegleitung</li>
            <li>schriftliche Tierkommunikation</li>
            <li>energetische Sterbebegleitung für Tiere</li>
          </ul>
          <p>
            Die Leistungen dienen der Selbsterkenntnis, persönlichen Orientierung und achtsamen
            Begleitung. Es handelt sich ausdrücklich nicht um medizinische, psychotherapeutische,
            tierärztliche oder rechtliche Beratung oder Behandlung. Es werden keine Diagnosen
            gestellt, keine Heilversprechen abgegeben und keine Garantien übernommen.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">3. Eigenverantwortung</h3>
          <p>
            Die Inanspruchnahme der Leistungen erfolgt freiwillig und eigenverantwortlich.
            Entscheidungen, die auf Grundlage der Begleitung getroffen werden, liegen ausschließlich
            im Verantwortungsbereich der Kunden bzw. Tierhalter.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">4. Terminvereinbarung und Stornierung</h3>
          <p>
            Vereinbarte Termine sind verbindlich. Eine kostenfreie Stornierung ist bis 24 Stunden
            vor dem vereinbarten Termin möglich. Bei späterer Absage oder Nichterscheinen wird das
            volle Honorar in Rechnung gestellt.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">5. Schriftliche Leistungen</h3>
          <p>
            Bei schriftlicher Tierkommunikation oder energetischer Begleitung erfolgt die
            Ausarbeitung nach Zahlungseingang (sofern Vorkasse vereinbart ist). Da es sich um
            individuell erstellte Leistungen handelt, besteht kein Rücktrittsrecht nach
            Fertigstellung der Ausarbeitung.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">6. Honorar und Zahlungsbedingungen</h3>
          <p>
            Es gelten die auf der Website veröffentlichten Preise. Sofern nicht anders vereinbart,
            ist das Honorar unmittelbar nach Rechnungsstellung ohne Abzug fällig. Bei Zahlungsverzug
            behält sich AstroBalance vor, gesetzliche Verzugszinsen zu berechnen.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">7. Haftungsausschluss</h3>
          <p>AstroBalance übernimmt keine Haftung für:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Entscheidungen oder Handlungen der Kunden</li>
            <li>gesundheitliche, medizinische oder tierärztliche Folgen</li>
            <li>Erwartungen an konkrete Ergebnisse</li>
          </ul>
          <p>Die Haftung ist — soweit gesetzlich zulässig — auf Vorsatz und grobe Fahrlässigkeit beschränkt.</p>

          <h3 className="mt-6 font-serif text-xl text-mist">8. Vertraulichkeit</h3>
          <p>
            Alle persönlichen Informationen werden vertraulich behandelt und nicht an Dritte
            weitergegeben, außer es besteht eine gesetzliche Verpflichtung.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">9. Urheberrecht</h3>
          <p>
            Alle schriftlichen Ausarbeitungen sind urheberrechtlich geschützt. Eine Weitergabe,
            Veröffentlichung oder Vervielfältigung ist nur mit schriftlicher Zustimmung gestattet.
          </p>

          <h3 className="mt-6 font-serif text-xl text-mist">10. Gerichtsstand und anwendbares Recht</h3>
          <p>
            Es gilt österreichisches Recht. Gerichtsstand ist — soweit gesetzlich zulässig — das
            sachlich zuständige Gericht am Unternehmenssitz.
          </p>

          <p className="mt-8 text-sm italic">
            Sprachhinweis: Aus Gründen der Lesbarkeit wird eine einheitliche Sprachform verwendet.
            Selbstverständlich sind stets alle Geschlechter gleichermaßen gemeint.
          </p>
        </Section>
      </div>
    </div>
  );
}
