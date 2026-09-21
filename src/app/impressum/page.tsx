import { impressum } from "@/lib/content";
import { Section, SectionHeading } from "@/src/components/Section";

export default function ImpressumPage() {
  return (
    <Section className="pt-16">
      <SectionHeading heading={impressum.heading} />
      <p className="mt-6 max-w-2xl leading-relaxed text-[var(--muted)]">{impressum.text}</p>
    </Section>
  );
}
