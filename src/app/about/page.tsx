import Image from "next/image";
import { about } from "@/lib/content";
import { Section, SectionHeading } from "@/src/components/Section";

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16">
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} text={about.intro} />
      </Section>

      <Section className="pt-0">
        <div className="card px-8 py-10">
          <span className="eyebrow">Über mich</span>
          <h3 className="heading-font mt-2 text-xl font-bold text-[var(--foreground)]">
            {about.bioHeading}
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-[var(--muted)]">{about.bio}</p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="card px-8 py-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="eyebrow">{about.bike.eyebrow}</span>
            <span className="badge-alt">{about.bike.meta[2].value}</span>
          </div>
          <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-md">
              <h3 className="heading-font text-2xl font-bold text-[var(--foreground)]">
                {about.bike.title}
              </h3>
              <p className="mt-3 text-[var(--muted)]">{about.bike.description}</p>
            </div>
            <Image
              src={about.bike.image}
              alt={about.bike.title}
              width={632}
              height={395}
              className="h-auto w-full max-w-sm self-center drop-shadow-[0_20px_30px_rgba(200,30,60,0.35)]"
            />
          </div>
          <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-[var(--border)] pt-6 sm:grid-cols-3">
            {about.bike.meta.map((item) => (
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

      <Section className="pt-0">
        <SectionHeading eyebrow="Freizeit" heading={about.beyondHeading} text={about.beyondText} />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {about.hobbies.map((category) => (
            <div key={category.title} className="card px-6 py-6">
              <h4 className="heading-font text-sm font-bold text-[var(--primary-light)]">
                {category.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2">
                {category.items.map((item, i) => (
                  <li
                    key={`${item}-${i}`}
                    className="rounded-xl bg-[var(--accent-soft)]/50 px-3 py-2 text-sm text-[var(--foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
