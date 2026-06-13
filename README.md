# learnAREAL – Website

Statische Begleitseite zu den learnAREAL-Arbeitsheften.
Gebaut mit [Astro](https://astro.build), gehostet auf GitHub Pages:
**https://revecto.github.io/learnAREAL/**

## Grundprinzip

QR-Codes im Heft zeigen **nie direkt auf eine PDF-Datei**, sondern immer auf die
stabile Einzelseite eines Materials, z. B.:

```
https://revecto.github.io/learnAREAL/a1/heft-1/materialien/to-be-alle-formen/
```

So bleibt ein gedruckter QR-Code gültig, auch wenn die PDF später ersetzt oder
umbenannt wird. **Slugs in `src/data/materials.js` deshalb nie ändern, sobald ein
QR-Code gedruckt ist.**

## Lokal starten

Voraussetzung: [Node.js](https://nodejs.org) (Version 18 oder neuer).

```bash
npm install     # einmalig
npm run dev     # Entwicklungsserver auf http://localhost:4321/learnAREAL/
npm run build   # Produktions-Build nach dist/
npm run preview # Build lokal ansehen
```

## Neues Material ergänzen

1. In `src/data/materials.js` einen neuen Eintrag anfügen (Felder siehe Kommentar
   am Dateianfang).
2. Fertig – Materialübersicht und Einzelseite werden beim Build automatisch
   generiert.

## PDF ablegen / Material freischalten

1. PDF in `public/downloads/a1/heft-1/` legen. Der Dateiname muss dem
   `fileUrl`-Eintrag in `src/data/materials.js` entsprechen
   (z. B. `to-be-alle-formen.pdf`).
2. Im selben Eintrag `status` von `"in Arbeit"` auf `"verfügbar"` setzen.
3. Committen und pushen – der Download-Button erscheint automatisch.

## Neues Heft ergänzen (später)

1. Materialien mit `booklet: 2` in `src/data/materials.js` ergänzen.
2. Seiten `src/pages/a1/heft-2/` analog zu `heft-1/` anlegen
   (in `getMaterials('A1', 2)` ändern).
3. In `src/pages/a1/index.astro` das Heft auf `available: true` setzen.
4. PDF-Ordner `public/downloads/a1/heft-2/` anlegen.

## Deployen

Jeder Push auf `main` baut und veröffentlicht die Seite automatisch
(GitHub Actions, siehe `.github/workflows/deploy.yml`).

**Einmalig nötig:** Im Repository unter
*Settings → Pages → Build and deployment → Source* die Option
**„GitHub Actions"** wählen.

## Wichtige Konfiguration

`astro.config.mjs` – nicht ändern, sonst brechen alle Links:

```js
site: 'https://revecto.github.io',
base: '/learnAREAL',
```

Interne Links und Assets immer über den Helper `withBase()`
(`src/utils/withBase.js`) erzeugen, damit der Basispfad `/learnAREAL/` überall
korrekt gesetzt ist.

## Branding

- Markenname verbindlich: **learnAREAL** (learn = Dunkelblau, AREAL = Grün).
- Farbrollen: Blau (#3a70bf) führt (Buttons, Links, Struktur), Grün (#5ba62d)
  akzentuiert. Definiert in `src/styles/global.css`.
- Level-Farben als Niveau-Kennung: A1 Grün, A2 Gelb, B1 Orange, B2 Rot.
- Das Logo ist aktuell als SVG-Nachbau umgesetzt (`src/components/Logo.astro`).
  Original-Logodateien nach `public/images/` legen und dort referenzieren.

## Bilder

- Hero-Bild: `public/images/banner-startseite.png` ablegen — wird beim nächsten
  Build automatisch verwendet (Fallback: Kartenstapel aus dem Heft).
- Die Beispielbilder (Lernkarte, Lernposter, Lerncoach-Tipp) stammen aus dem
  GzD6-PDF und können in `public/images/` durch finale Versionen ersetzt werden
  (gleiche Dateinamen verwenden, dann ist kein Code-Anpassen nötig).

## Vor dem Livegang

- [ ] PDFs ablegen und Status auf `"verfügbar"` setzen
- [ ] Amazon-URL in `src/pages/a1/heft-1/index.astro` eintragen (`amazonUrl`)
- [ ] Hero-Bild `banner-startseite.png` in `public/images/` ablegen
