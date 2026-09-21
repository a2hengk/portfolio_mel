// Alle Platzhaltertexte an einem Ort — hier anpassen, sobald die Inhalte mit ihr abgesprochen sind.

// Hinweis: echte Ziel-URLs (GitHub, Insta, TikTok, Mail) bewusst noch nicht eingetragen —
// eckige Klammern sind in einem href für Next.js' <Link> nicht erlaubt (werden als
// Routen-Parameter interpretiert), deshalb zeigen alle Platzhalter-Links unten auf "#".
export const site = {
  name: "[Name]",
  role: "[Rolle, z. B. Junior Webdesignerin]",
  status: "[Schülerin / Studentin / Azubi]",
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
  { href: "/experience", label: "Werdegang" },
  { href: "/projects", label: "Projekte" },
  { href: "/off-duty", label: "Freizeit" },
  { href: "/links", label: "Links" },
  { href: "/uses", label: "Uses" },
];

export const contact = {
  heading: "Lust, Hallo zu sagen?",
  text: "Der schnellste Weg mich zu erreichen ist über die Links-Seite oder direkt über GitHub und E-Mail. [Platzhaltertext — Ton/Wortwahl gern anpassen.]",
  ctas: [
    { label: "Links öffnen", href: "/links" },
    { label: "GitHub", href: site.github },
    { label: "E-Mail", href: "#" },
  ],
};

export const home = {
  hero: {
    greeting: "Hey, ich bin",
    name: site.name,
    subtitle: site.role,
    description:
      "[Platzhaltertext: 1–2 Sätze darüber, was sie aktuell macht, lernt oder aufbaut — z. B. Ausbildung, Studiengang oder Fachrichtung.]",
    primaryCta: { label: "Werdegang ansehen", href: "/experience" },
    secondaryCta: { label: "Mehr über mich", href: "/about" },
  },
  stats: [
    { label: "Erfahrung", value: "[X] Jahre" },
    { label: "Projekte", value: "[X]+ Builds" },
    { label: "Fokus", value: "[Bereich]" },
  ],
  featured: {
    eyebrow: "Featured Projekt",
    title: "[Projektname]",
    meta: [
      { label: "Stack", value: "[Tech 1], [Tech 2], [Tech 3]" },
      { label: "Basis", value: "[Schule / Unternehmen]" },
      { label: "Status", value: "[In Arbeit]" },
    ],
    description:
      "[Kurze Beschreibung: was das Projekt macht, welches Problem es löst und warum es ihr wichtig ist.]",
  },
};

export const about = {
  eyebrow: "Sector 01 — Über mich",
  heading: "Ein genauerer Blick darauf, wer ich bin",
  intro:
    "[Platzhaltertext: kurze Einleitung, worum es auf dieser Seite geht.]",
  bioHeading: "Die Person hinter [Fachbereich/Interesse]",
  bio: "[Platzhalter-Bio: Alter, Wohnort, aktuelle Schule/Ausbildung/Studium, was sie antreibt und wonach sie sucht.]",
  skillsHeading: "Skills & Werkzeuge",
  skillsIntro:
    "[Platzhaltertext über den aktuellen Stack, Tools und was sie gerade lernen möchte.]",
  skillGroups: [
    { title: "Design", items: ["[Skill]", "[Skill]", "[Skill]"] },
    { title: "Entwicklung", items: ["[Skill]", "[Skill]", "[Skill]"] },
    { title: "Workflow", items: ["[Tool]", "[Tool]", "[Tool]"] },
    { title: "Interessen", items: ["[Interesse]", "[Interesse]", "[Interesse]"] },
  ],
  proficiencies: [
    { label: "[Skill 1]", level: 3 },
    { label: "[Skill 2]", level: 2 },
    { label: "[Skill 3]", level: 4 },
  ],
  beyondHeading: "Abseits vom Bildschirm",
  beyondText:
    "[Platzhaltertext über Hobbys — z. B. Sport, Musik, Serien, Zeichnen.]",
};

export const experience = {
  heading: "Mein Werdegang",
  subheading: "[Platzhaltertext: kurzer Rückblick auf den bisherigen Weg.]",
  timeline: [
    {
      period: "[Jahr]",
      title: "[Station 1, z. B. Schule]",
      place: "[Ort / Institution]",
      description: "[Platzhaltertext zur ersten Station.]",
    },
    {
      period: "[Jahr]",
      title: "[Station 2]",
      place: "[Ort / Institution]",
      description: "[Platzhaltertext zur zweiten Station.]",
    },
    {
      period: "[Jahr]",
      title: "[Station 3]",
      place: "[Ort / Institution]",
      description: "[Platzhaltertext zur dritten Station.]",
    },
    {
      period: "[Jahr — heute]",
      title: "[Aktuelle Station]",
      place: "[Ort / Institution]",
      description: "[Platzhaltertext zur aktuellen Station.]",
    },
    {
      period: "[Ziel / Ausblick]",
      title: "[Nächster Schritt]",
      place: "[Ort / Institution]",
      description: "[Platzhaltertext zum geplanten nächsten Schritt.]",
    },
  ],
};

export const projects = {
  heading: "Ausgewählte Projekte",
  intro:
    "[Platzhaltertext: kurze Einleitung zu Apps, Experimenten und Dingen, die sie gerne baut.]",
  items: [
    {
      title: "[Projekt 1]",
      status: "Featured",
      description: "[Platzhalterbeschreibung des Projekts.]",
      stack: ["[Tech]", "[Tech]", "[Tech]"],
      links: [{ label: "GitHub", href: "#" }, { label: "Ansehen", href: "#" }],
    },
    {
      title: "[Projekt 2]",
      status: "In Arbeit",
      description: "[Platzhalterbeschreibung des Projekts.]",
      stack: ["[Tech]", "[Tech]"],
      links: [{ label: "GitHub", href: "#" }],
    },
    {
      title: "[Projekt 3]",
      status: "Live",
      description: "[Platzhalterbeschreibung des Projekts.]",
      stack: ["[Tech]", "[Tech]"],
      links: [{ label: "GitHub", href: "#" }],
    },
    {
      title: "[Projekt 4]",
      status: "In Arbeit",
      description: "[Platzhalterbeschreibung des Projekts.]",
      stack: ["[Tech]", "[Tech]", "[Tech]"],
      links: [{ label: "GitHub", href: "#" }],
    },
  ],
};

export const offDuty = {
  heading: "Was ich mache, wenn ich Feierabend habe",
  intro:
    "[Platzhaltertext: worauf sie in ihrer Freizeit steht — Spiele, Serien, Hobbys.]",
  categories: [
    { title: "Games", items: ["[Spiel]", "[Spiel]", "[Spiel]"] },
    { title: "Serien & Filme", items: ["[Titel]", "[Titel]", "[Titel]"] },
    { title: "Sonstiges", items: ["[Hobby]", "[Hobby]", "[Hobby]"] },
  ],
};

export const linksPage = {
  heading: "Willst du in Kontakt treten? Fang hier an.",
  intro: "[Platzhaltertext: kurze Einladung, sich zu melden.]",
  items: [
    { label: "GitHub", tag: "Code", handle: site.githubHandle, href: site.github },
    { label: "Discord", tag: "Chat", handle: site.discordHandle, href: "#" },
    { label: "Instagram", tag: "Fotos", handle: site.instagramHandle, href: site.instagram },
    { label: "TikTok", tag: "Videos", handle: site.tiktokHandle, href: site.tiktok },
  ],
};

export const usesPage = {
  heading: "Was ich täglich benutze",
  intro: "[Platzhaltertext: kurze Einleitung zu Tools & Setup.]",
  loadoutHeading: "Live Loadout",
  loadout: [
    { label: "[Tool 1]", percent: 90 },
    { label: "[Tool 2]", percent: 80 },
    { label: "[Tool 3]", percent: 65 },
    { label: "[Tool 4]", percent: 50 },
  ],
  setupHeading: "Setup",
  setup: [
    { label: "Gerät", value: "[Platzhalter]" },
    { label: "CPU", value: "[Platzhalter]" },
    { label: "RAM", value: "[Platzhalter]" },
    { label: "Speicher", value: "[Platzhalter]" },
    { label: "Bildschirm", value: "[Platzhalter]" },
    { label: "Peripherie", value: "[Platzhalter]" },
  ],
};

export const impressum = {
  heading: "Impressum",
  text: "[Platzhalter — hier später die gesetzlich vorgeschriebenen Angaben ergänzen: Name, Anschrift, Kontakt, ggf. Umsatzsteuer-ID etc.]",
};
