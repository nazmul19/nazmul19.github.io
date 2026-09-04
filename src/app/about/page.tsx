import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroVisual } from "@/components/HeroVisual";
import { Section, SectionHeading } from "@/components/Section";
import { brand } from "@/content/brand";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "About GrowStack",
  description:
    "GrowStack is a technology consulting practice focused on SaaS, integration, modernization, cloud, and dedicated engineering.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="About GrowStack"
              title="Technology consulting focused on practical outcomes"
            />
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
              <p>{brand.aboutIntro}</p>
              <p>{brand.aboutBody}</p>
              <p>Our approach is simple:</p>
              <p className="agency-panel rounded-2xl p-5 font-[family-name:var(--font-display)] text-xl text-[color:var(--ink)]">
                {brand.aboutApproach}
              </p>
              <p>{brand.aboutBelief}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <HeroVisual />
          </FadeIn>
        </div>
      </Section>

      <Section tone="muted">
        <FadeIn>
          <SectionHeading
            eyebrow="How we engage"
            title="Clear service lines for product and engineering needs"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="agency-panel rounded-2xl p-5">
                <h3 className="font-semibold text-[color:var(--ink)]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <FinalCTA />
        </FadeIn>
      </Section>
    </>
  );
}
