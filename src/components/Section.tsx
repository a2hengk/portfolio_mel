import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto w-full max-w-5xl px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  text,
}: {
  eyebrow?: string;
  heading: string;
  text?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading-font text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
        {heading}
      </h2>
      {text && <p className="max-w-2xl text-[var(--muted)]">{text}</p>}
    </div>
  );
}
