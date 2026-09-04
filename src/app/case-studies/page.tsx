import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { FinalCTA } from "@/components/FinalCTA";
import { Section, SectionHeading } from "@/components/Section";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "GrowStack case studies across SaaS, integrations, modernization, AI platforms, and operational systems.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Case Studies"
            title="Representative solutions built around business problems"
            description="These case studies describe challenges, approaches, and value without revealing confidential client information."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/case-studies/${project.slug}`}
                className="agency-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5 sm:p-7"
              >
                <p className="text-xs font-medium tracking-[0.14em] text-[color:var(--accent)] uppercase">
                  Case Study
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
