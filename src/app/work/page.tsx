import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { FinalCTA } from "@/components/FinalCTA";
import { Section, SectionHeading } from "@/components/Section";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Representative technology solutions from GrowStack — AI companions, monitoring platforms, dashboards, automation, and more.",
};

export default function WorkPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Selected Work"
            title="Representative solutions built around business problems"
            description="These case studies describe challenges, approaches, and value without revealing confidential client information."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition hover:border-[color:var(--accent)] sm:p-7"
              >
                <p className="text-xs font-medium tracking-[0.14em] text-[color:var(--accent)] uppercase">
                  Selected Work
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)]">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  {project.challenge}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techCategories.slice(0, 3).map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs text-[color:var(--muted)]"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </Section>
      <Section tone="muted">
        <FadeIn>
          <FinalCTA />
        </FadeIn>
      </Section>
    </>
  );
}
