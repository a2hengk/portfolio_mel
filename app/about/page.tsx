import Link from "next/link";
import { about } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16">
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} text={about.intro} />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/experience" className="btn-primary">
            Werdegang ansehen
          </Link>
          <Link href="/projects" className="btn-secondary">
            Projekte ansehen
          </Link>
        </div>
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
        <SectionHeading heading={about.skillsHeading} text={about.skillsIntro} />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {about.skillGroups.map((group) => (
            <div key={group.title} className="card px-6 py-6">
              <h4 className="heading-font text-sm font-bold text-[var(--primary-dark)]">
                {group.title}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card mt-4 px-6 py-6">
          <h4 className="heading-font text-sm font-bold text-[var(--primary-dark)]">
            Erfahrungslevel
          </h4>
          <div className="mt-4 flex flex-col gap-4">
            {about.proficiencies.map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between text-sm font-medium text-[var(--foreground)]">
                  <span>{skill.label}</span>
                  <span className="text-[var(--muted)]">{skill.level}/5</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[var(--accent-blue-soft)]">
                  <div
                    className="h-full rounded-full bg-[var(--primary)]"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="card px-8 py-10">
          <span className="eyebrow">Freizeit</span>
          <h3 className="heading-font mt-2 text-xl font-bold text-[var(--foreground)]">
            {about.beyondHeading}
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-[var(--muted)]">{about.beyondText}</p>
          <Link href="/off-duty" className="btn-secondary mt-6 inline-flex">
            Mehr dazu
          </Link>
        </div>
      </Section>
    </>
  );
}
