import Image from "next/image";
import Link from "next/link";
import { home } from "@/lib/content";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      <Section className="relative overflow-hidden pt-16 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--accent-blue-soft)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-32 -left-20 h-56 w-56 rounded-full bg-[var(--accent-pink)]/50 blur-3xl"
        />

        <div className="relative flex flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between">
          <div className="flex max-w-xl flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <span className="eyebrow">Portfolio</span>
            <h1 className="heading-font text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl">
              {home.hero.greeting} {home.hero.name}
              <br />
              <span className="text-[var(--primary-dark)]">{home.hero.subtitle}</span>
            </h1>
            <p className="text-base leading-relaxed text-[var(--muted)]">
              {home.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              <Link href={home.hero.primaryCta.href} className="btn-primary">
                {home.hero.primaryCta.label}
              </Link>
              <Link href={home.hero.secondaryCta.href} className="btn-secondary">
                {home.hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 scale-110 rounded-full bg-white blur-2xl"
            />
            <Image
              src="/image.png"
              alt="Profilbild"
              width={260}
              height={260}
              className="float-soft h-56 w-56 rounded-full border-4 border-white object-cover shadow-[0_25px_50px_-15px_rgba(79,140,197,0.55)] sm:h-64 sm:w-64"
              priority
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {home.stats.map((stat) => (
            <div key={stat.label} className="card px-6 py-6 text-center">
              <p className="heading-font text-2xl font-bold text-[var(--primary-dark)]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="card px-8 py-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="eyebrow">{home.featured.eyebrow}</span>
            <span className="badge-pink">{home.featured.meta[2].value}</span>
          </div>
          <h3 className="heading-font mt-3 text-2xl font-bold text-[var(--foreground)]">
            {home.featured.title}
          </h3>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">{home.featured.description}</p>
          <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-[var(--border)] pt-6 sm:grid-cols-3">
            {home.featured.meta.map((item) => (
              <div key={item.label}>
                <dt className="heading-font text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-[var(--foreground)]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </>
  );
}
