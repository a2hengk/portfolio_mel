import Link from "next/link";
import { linksPage } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";

export default function LinksPage() {
  return (
    <Section className="pt-16">
      <SectionHeading eyebrow="Links" heading={linksPage.heading} text={linksPage.intro} />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {linksPage.items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="card flex items-center justify-between px-6 py-5 transition-transform hover:-translate-y-0.5"
          >
            <div>
              <p className="heading-font text-base font-bold text-[var(--foreground)]">
                {item.label}
              </p>
              <p className="text-sm text-[var(--muted)]">{item.handle}</p>
            </div>
            <span className="badge">{item.tag}</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
