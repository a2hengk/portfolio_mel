import { offDuty } from "@/lib/content";
import { Section, SectionHeading } from "@/src/components/Section";

export default function OffDutyPage() {
  return (
    <Section className="pt-16">
      <SectionHeading eyebrow="Freizeit" heading={offDuty.heading} text={offDuty.intro} />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {offDuty.categories.map((category) => (
          <div key={category.title} className="card px-6 py-6">
            <h3 className="heading-font text-sm font-bold text-[var(--primary-dark)]">
              {category.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-[var(--accent-blue-soft)]/50 px-3 py-2 text-sm text-[var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
