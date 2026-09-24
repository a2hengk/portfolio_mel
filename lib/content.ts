// Alle Platzhaltertexte an einem Ort — hier anpassen, sobald die Inhalte mit ihr abgesprochen sind.

// Hinweis: echte Ziel-URLs (GitHub, Insta, TikTok, Mail) bewusst noch nicht eingetragen —
// eckige Klammern sind in einem href für Next.js' <Link> nicht erlaubt (werden als
// Routen-Parameter interpretiert), deshalb zeigen alle Platzhalter-Links unten auf "#".
export const site = {
  name: "Mel",
  role: "Auszubildende Bürokauffrau",
  status: "Azubi",
  age: 19,
  location: "Berlin",
  email: "[email@platzhalter.de]",
  github: "#",
  githubHandle: "@[username]",
  discordHandle: "@[discord-tag]",
  instagram: "#",
  instagramHandle: "@[handle]",
  tiktok: "#",
  tiktokHandle: "@[handle]",
};

export const nav = [
  { href: "/about", label: "Über mich" },
  { href: "/links", label: "Links" },
];

export const contact = {
  heading: "Lust, Hallo zu sagen?",
  text: "Du willst dich austauschen, zocken oder einfach mal über Motorräder quatschen? Über die Links-Seite erreichst du mich am schnellsten.",
  ctas: [
    { label: "Links öffnen", href: "/links" },
    { label: "Instagram", href: site.instagram },
    { label: "E-Mail", href: "#" },
  ],
};

export const home = {
  hero: {
    greeting: "Hey, ich bin",
    name: site.name,
    subtitle: site.role,
    description:
      "19 Jahre alt, aus Berlin und in der Ausbildung zur Bürokauffrau. Zwischen Organisation und Ordnung im Büro und Vollgas auf der Kawasaki Ninja 650 — abends gern mit Valorant und Alicia Online.",
    primaryCta: { label: "Mehr über mich", href: "/about" },
    secondaryCta: { label: "Links öffnen", href: "/links" },
  },
  stats: [
    { label: "Alter", value: "19 Jahre" },
    { label: "Wohnort", value: "Berlin" },
    { label: "Ausbildung", value: "Bürokauffrau" },
  ],
};

export const about = {
  eyebrow: "Sector 01 — Über mich",
  heading: "Ein genauerer Blick darauf, wer ich bin",
  intro:
    "Kurz und knapp: wer ich bin, was ich mache und was mich antreibt.",
  bioHeading: "Die Person hinter dem Schreibtisch (und dem Helm)",
  bio: "Ich bin 19, wohne in Berlin und mache aktuell meine Ausbildung zur Bürokauffrau. Im Job liebe ich es, Abläufe zu organisieren und den Überblick zu behalten. In meiner Freizeit bin ich Bikergirl mit Leib und Seele — am liebsten auf meiner Kawasaki Ninja 650 — und zocke abends Valorant und Alicia Online.",
  bike: {
    eyebrow: "Auf zwei Rädern",
    title: "Kawasaki Ninja 650",
    image: "/ninja-650.png",
    meta: [
      { label: "Motor", value: "649 ccm Reihen-Zweizylinder" },
      { label: "Typ", value: "Sportlicher Allrounder" },
      { label: "Bikergirl", value: "Aus Leidenschaft" },
    ],
    description:
      "Wenn der Feierabend ruft, geht es aufs Bike. Die Ninja 650 ist mein Ausgleich zum Büroalltag — Freiheit, Fahrspaß und Berlin bei Nacht.",
  },
  beyondHeading: "Abseits vom Büro",
  beyondText:
    "Motorrad fahren, zocken und abschalten — das ist mein Ausgleich zum Büroalltag. Wenn ich nicht fahre, findest du mich vor dem PC bei Valorant oder Alicia Online.",
  hobbies: [
    { title: "Games", items: ["Valorant", "Alicia Online"] },
    { title: "Serien & Filme", items: ["Off Campus", "Game of Thrones", "1883"] },
    { title: "Sonstiges", items: ["Bikergirl", "[Hobby]"] },
  ],
};

export const linksPage = {
  heading: "Willst du in Kontakt treten? Fang hier an.",
  intro: "Ob Frage, Zocken oder Motorrad-Talk — melde dich einfach.",
  items: [
    { label: "Discord", tag: "Chat", handle: site.discordHandle, href: "#" },
    { label: "Instagram", tag: "Fotos", handle: site.instagramHandle, href: site.instagram },
    { label: "TikTok", tag: "Videos", handle: site.tiktokHandle, href: site.tiktok },
  ],
};

export const impressum = {
  heading: "Impressum",
  text: "[Platzhalter — hier später die gesetzlich vorgeschriebenen Angaben ergänzen: Name, Anschrift, Kontakt, ggf. Umsatzsteuer-ID etc.]",
};
