import Link from "next/link";
import { contact, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white/70">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="card flex flex-col items-center gap-6 px-8 py-12 text-center">
          <span className="eyebrow">Kontakt</span>
          <h2 className="heading-font text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            {contact.heading}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[var(--muted)]">
            {contact.text}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {contact.ctas.map((cta, i) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={i === 0 ? "btn-primary" : "btn-secondary"}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-[var(--muted)] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name} · gebaut mit ☁️ und viel Geduld
          </p>
          <Link href="/impressum" className="heading-font font-semibold hover:text-[var(--primary-dark)]">
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}
