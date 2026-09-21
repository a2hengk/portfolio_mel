import Link from "next/link";
import { projects } from "@/lib/content";
import { Section, SectionHeading } from "@/components/Section";

export default function ProjectsPage() {
  return (
    <Section className="pt-16">
      <SectionHeading eyebrow="Projekte" heading={projects.heading} text={projects.intro} />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.items.map((project) => (
          <div key={project.title} className="card flex flex-col px-6 py-6">
            <div className="flex items-start justify-between gap-2">
              <h3 className="heading-font text-lg font-bold text-[var(--foreground)]">
                {project.title}
              </h3>
              <span className={project.status === "Featured" ? "badge-pink" : "badge"}>
                {project.status}
              </span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3 border-t border-[var(--border)] pt-4">
              {project.links.map((link, i) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className={
                    i === 0
                      ? "heading-font text-sm font-semibold text-[var(--primary-dark)] hover:underline"
                      : "heading-font text-sm font-semibold text-[var(--muted)] hover:underline"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
