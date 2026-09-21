import { usesPage } from "@/lib/content";
import { Section, SectionHeading } from "@/src/components/Section";

export default function UsesPage() {
  return (
    <Section className="pt-16">
      <SectionHeading eyebrow="Uses" heading={usesPage.heading} text={usesPage.intro} />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="card px-6 py-6">
          <h3 className="heading-font text-sm font-bold text-[var(--primary-dark)]">
            {usesPage.loadoutHeading}
          </h3>
          <div className="mt-4 flex flex-col gap-4">
            {usesPage.loadout.map((tool) => (
              <div key={tool.label}>
                <div className="flex justify-between text-sm font-medium text-[var(--foreground)]">
                  <span>{tool.label}</span>
                  <span className="text-[var(--muted)]">{tool.percent}%</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[var(--accent-blue-soft)]">
                  <div
                    className="h-full rounded-full bg-[var(--primary)]"
                    style={{ width: `${tool.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card px-6 py-6">
          <h3 className="heading-font text-sm font-bold text-[var(--primary-dark)]">
            {usesPage.setupHeading}
          </h3>
          <dl className="mt-4 flex flex-col divide-y divide-[var(--border)]">
            {usesPage.setup.map((spec) => (
              <div key={spec.label} className="flex justify-between py-2.5 text-sm">
                <dt className="text-[var(--muted)]">{spec.label}</dt>
                <dd className="font-medium text-[var(--foreground)]">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
