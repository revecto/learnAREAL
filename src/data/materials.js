// Zentrale Datendatei für alle Zusatzmaterialien.
// Neue Materialien: hier einen Eintrag ergänzen — Übersicht und Einzelseite
// werden automatisch generiert.
//
// Felder:
//   title       Anzeigetitel
//   slug        URL-Teil der Einzelseite (nie ändern, sobald ein QR-Code gedruckt ist!)
//   type        "PDF" | "Video"
//   kind        "Referenz" (Überblick/Tabelle) | "Vertiefung" (Ausnahmen/Sonderfälle)
//   level       "A1" | "A2" | "B1" | "B2"
//   booklet     Heftnummer (1–8)
//   block       Heft-Block / Thema
//   description Kurzbeschreibung für Übersicht und Einzelseite
//   fileUrl     Pfad zur Datei unter public/ (ohne Basispfad — wird automatisch ergänzt)
//   status      "verfügbar" | "in Arbeit"  → Download-Button erscheint nur bei "verfügbar"

export const materials = [
  {
    title: 'Subjektpronomen – Übersicht',
    slug: 'subjektpronomen-uebersicht',
    type: 'PDF',
    kind: 'Referenz',
    level: 'A1',
    booklet: 1,
    block: 'Block 1 · Subjektpronomen',
    description:
      'Übersichtstabelle aller Subjektpronomen (I, you, he, she, it, we, they) mit deutscher Entsprechung – inklusive der Stolperstellen «you» und «it».',
    fileUrl: '/downloads/a1/heft-1/subjektpronomen-uebersicht.pdf',
    status: 'verfügbar',
  },
  {
    title: 'to be – alle Formen',
    slug: 'to-be-alle-formen',
    type: 'PDF',
    kind: 'Referenz',
    level: 'A1',
    booklet: 1,
    block: 'Block 2 · to be',
    description:
      'Vollständige Konjugation von «to be» (am, is, are) in allen Personen – inklusive Verneinung und Abkürzungen wie I’m und you’re.',
    fileUrl: '/downloads/a1/heft-1/to-be-alle-formen.pdf',
    status: 'verfügbar',
  },
  {
    title: 'Geschlecht – weibliche Sonderformen',
    slug: 'geschlecht-weibliche-sonderformen',
    type: 'PDF',
    kind: 'Vertiefung',
    level: 'A1',
    booklet: 1,
    block: 'Block 3 · Geschlecht',
    description:
      'Weibliche Sonderformen in zwei Gruppen: Berufe und Personen sowie Familie und Tiere – als Ergänzung zum Lernposter.',
    fileUrl: '/downloads/a1/heft-1/geschlecht-weibliche-sonderformen.pdf',
    status: 'verfügbar',
  },
  {
    title: 'Possessivartikel – Übersicht',
    slug: 'possessivartikel-uebersicht',
    type: 'PDF',
    kind: 'Referenz',
    level: 'A1',
    booklet: 1,
    block: 'Block 5 · Possessivartikel',
    description:
      'Zuordnung Subjektpronomen → Possessivartikel (I → my, you → your, he → his …) mit deutscher Entsprechung.',
    fileUrl: '/downloads/a1/heft-1/possessivartikel-uebersicht.pdf',
    status: 'verfügbar',
  },
  {
    title: 'a/an – wenn der Klang entscheidet',
    slug: 'a-an-klang',
    type: 'PDF',
    kind: 'Vertiefung',
    level: 'A1',
    booklet: 1,
    block: 'Block 6 · a/an',
    description:
      'Häufige Ausnahmen, bei denen der Klang – nicht die Schreibung – über a oder an entscheidet: an hour, a university, an MP und mehr.',
    fileUrl: '/downloads/a1/heft-1/a-an-klang.pdf',
    status: 'verfügbar',
  },
  {
    title: 'Zahlen 0–100 und darüber',
    slug: 'zahlen-0-100',
    type: 'PDF',
    kind: 'Referenz',
    level: 'A1',
    booklet: 1,
    block: 'Block 9 · Kardinalzahlen',
    description:
      'Zahlen von 0 bis 20, Zehner, zusammengesetzte Zahlen mit Bindestrich, Hunderter, Tausender und Million – mit britischen und amerikanischen Besonderheiten.',
    fileUrl: '/downloads/a1/heft-1/zahlen-0-100.pdf',
    status: 'verfügbar',
  },
  {
    title: 'this / that / these / those – Übersicht',
    slug: 'this-that-these-those',
    type: 'PDF',
    kind: 'Referenz',
    level: 'A1',
    booklet: 1,
    block: 'Block 10 · Hinweisende Pronomen',
    description:
      'Die 2×2-Übersicht: nah oder fern, Einzahl oder Mehrzahl – this, that, these und those mit Beispielen.',
    fileUrl: '/downloads/a1/heft-1/this-that-these-those.pdf',
    status: 'verfügbar',
  },
  {
    title: 'WH-Fragewörter – Übersicht',
    slug: 'wh-fragewoerter',
    type: 'PDF',
    kind: 'Referenz',
    level: 'A1',
    booklet: 1,
    block: 'Block 12 · WH-Fragen',
    description:
      'Die Fragewörter who, what, where, when und why plus what time und what day – mit deutscher Entsprechung und je einem Beispiel.',
    fileUrl: '/downloads/a1/heft-1/wh-fragewoerter.pdf',
    status: 'verfügbar',
  },
  {
    title: 'How-Fragen – Übersicht',
    slug: 'how-fragen',
    type: 'PDF',
    kind: 'Referenz',
    level: 'A1',
    booklet: 1,
    block: 'Block 13 · How-Fragen',
    description:
      'how, how often, how old, how are you, how many, how far und how long – mit deutscher Entsprechung und je einem Beispiel.',
    fileUrl: '/downloads/a1/heft-1/how-fragen.pdf',
    status: 'verfügbar',
  },
  {
    title: 'Kurzantworten mit to be – Tabelle',
    slug: 'kurzantworten-to-be',
    type: 'PDF',
    kind: 'Referenz',
    level: 'A1',
    booklet: 1,
    block: 'Block 14 · Ja/Nein-Fragen mit to be',
    description:
      'Alle Kurzantworten auf einen Blick: Yes, I am / No, I’m not – über alle Personen, inklusive Abkürzungen.',
    fileUrl: '/downloads/a1/heft-1/kurzantworten-to-be.pdf',
    status: 'verfügbar',
  },
];

export function getMaterials(level, booklet) {
  return materials.filter((m) => m.level === level && m.booklet === booklet);
}
