import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroVisual } from "@/components/HeroVisual";
import { Section, SectionHeading } from "@/components/Section";
import { brand } from "@/content/brand";

export const metadata: Metadata = {
  title: "About GrowStack",
  description:
    "GrowStack is a technology consulting and software development practice focused on solving operational and growth challenges through practical digital solutions.",
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
              <p className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5 font-[family-name:var(--font-display)] text-xl text-[color:var(--ink)]">
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
          <FinalCTA />
        </FadeIn>
      </Section>
    </>
  );
}
