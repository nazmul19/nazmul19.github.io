import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { FinalCTA } from "@/components/FinalCTA";
import { Section, SectionHeading } from "@/components/Section";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, AI-powered applications, AI agents, automation, system integration, and mobile development from GrowStack.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Technology services that start with the business problem"
            description="We design and build solutions around your workflows — not generic feature checklists."
          />
          <div className="space-y-6">
            {services.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:p-8"
              >
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)] sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-[color:var(--muted)]">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {service.examples.map((example) => (
                    <li
                      key={example}
                      className="rounded-lg border border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--ink)]"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
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
