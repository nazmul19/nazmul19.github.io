import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { FinalCTA } from "@/components/FinalCTA";
import { Section } from "@/components/Section";
import { getProjectBySlug, projects } from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Selected Work" };

  return {
    title: project.title,
    description: project.challenge,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <FadeIn>
          <p className="text-sm font-medium tracking-[0.18em] text-[color:var(--accent)] uppercase">
            Selected Work
          </p>
          <h1 className="mt-3 max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[color:var(--ink)] sm:text-5xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1 text-xs text-[color:var(--muted)]"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-[color:var(--ink)]">
                Business Challenge
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                {project.challenge}
              </p>
            </article>
            <article className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-[color:var(--ink)]">Solution</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                {project.solution}
              </p>
            </article>
          </div>

          <article className="mt-8 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-[color:var(--ink)]">
              Key Capabilities
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {project.capabilities.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {project.extras?.map((extra) => (
            <article
              key={extra.label}
              className="mt-8 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:p-8"
            >
              <h2 className="text-lg font-semibold text-[color:var(--ink)]">
                {extra.label}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {extra.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[color:var(--line)] bg-[color:var(--bg)] px-3 py-1.5 text-xs text-[color:var(--muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="mt-8 rounded-2xl border border-[color:var(--accent)]/30 bg-[linear-gradient(135deg,rgba(15,118,110,0.1),transparent)] p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-[color:var(--ink)]">
              Outcome / Value
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
              {project.value}
            </p>
          </article>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Discuss a similar problem</ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              Back to selected work
            </ButtonLink>
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
