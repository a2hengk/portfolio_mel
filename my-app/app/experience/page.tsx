import { experience } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";

export default function ExperiencePage() {
  return (
    <Section className="pt-16">
      <SectionHeading
        eyebrow="Werdegang"
        heading={experience.heading}
        text={experience.subheading}
      />

      <ol className="relative mt-12 flex flex-col gap-8 border-l-2 border-dashed border-[var(--accent-blue-soft)] pl-8">
        {experience.timeline.map((step, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden
              className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-[var(--primary)] text-xs font-bold text-white shadow-[0_6px_14px_-4px_rgba(79,140,197,0.7)]"
            >
              {i + 1}
            </span>
            <div className="card px-6 py-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="badge">{step.period}</span>
                <span className="text-xs font-medium text-[var(--muted)]">{step.place}</span>
              </div>
              <h3 className="heading-font mt-2 text-lg font-bold text-[var(--foreground)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
