import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { FinalCTA } from "@/components/FinalCTA";
import { Section, SectionHeading } from "@/components/Section";
import { capabilityGroups } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Solutions & Capabilities",
  description:
    "Explore GrowStack capabilities across AI, applications, system integration, and business automation.",
};

export default function SolutionsPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Solutions"
            title="A connected capability ecosystem"
            description="Applications, intelligence, integrations, and automation working together to solve operational challenges."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {capabilityGroups.map((group, index) => (
              <div
                key={group.title}
                className="relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface)] p-7"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-40"
                  style={{
                    background:
                      index % 2 === 0
                        ? "radial-gradient(circle, rgba(20,184,166,0.35), transparent 70%)"
                        : "radial-gradient(circle, rgba(59,130,246,0.28), transparent 70%)",
                  }}
                  aria-hidden
                />
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)]">
                  {group.title}
                </h2>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-[color:var(--muted)]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
