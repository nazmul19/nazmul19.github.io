"use client";

import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/Button";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroVisual } from "@/components/HeroVisual";
import { KnowledgeMarquee } from "@/components/KnowledgeMarquee";
import { BrandMark } from "@/components/BrandMark";
import { Section, SectionHeading } from "@/components/Section";
import { brand } from "@/content/brand";
import { messagingExample } from "@/content/differentiators";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Section className="pt-8 sm:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)]/90 px-3 py-1.5 shadow-sm">
              <BrandMark className="h-7 w-7" />
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[color:var(--ink)] sm:text-xl">
                {brand.name}
              </span>
            </div>

            <p className="mb-4 max-w-xl text-sm font-medium tracking-[0.16em] text-[color:var(--accent)] uppercase">
              Technology consulting & digital transformation
            </p>

            <h1 className="font-[family-name:var(--font-display)] text-[2.55rem] leading-[1.05] text-[color:var(--ink)] sm:text-5xl lg:text-[3.55rem]">
              {brand.heroHeadline}
            </h1>

            <p className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-xl text-[color:var(--ink)]/80 sm:text-2xl">
              {brand.positioning}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
              {brand.heroSupporting}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="lg">
                Discuss Your Project
              </ButtonLink>
              <ButtonLink href="/case-studies" variant="secondary" size="lg">
                View Case Studies
              </ButtonLink>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <HeroVisual />
          </FadeIn>
        </div>
      </Section>

      <KnowledgeMarquee />

      <Section tone="muted">
        <FadeIn>
          <SectionHeading
            eyebrow="What we do"
            title={brand.introHeadline}
            description={messagingExample.follow}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/#${service.slug}`}
                className="agency-panel group rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent-strong)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/services" variant="secondary">
              Explore services
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Case Studies"
            title="Selected work across products, platforms, and operations"
            description="Representative solutions framed around business challenges and outcomes — without confidential client details."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.slug}
                href={`/case-studies/${project.slug}`}
                className="agency-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5 sm:p-7"
              >
                <p className="text-xs font-medium tracking-[0.14em] text-[color:var(--accent)] uppercase">
                  Case Study
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[color:var(--ink)]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  {project.challenge}
                </p>
                <p className="mt-4 text-sm font-medium text-[color:var(--accent-strong)]">
                  Read case study →
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/case-studies" variant="secondary">
              All case studies
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      <Section tone="muted">
        <FadeIn>
          <div className="agency-panel grid gap-8 rounded-3xl p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.16em] text-[color:var(--accent)] uppercase">
                About GrowStack
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[color:var(--ink)]">
                {brand.aboutApproach}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                {brand.aboutIntro}
              </p>
              <div className="mt-6">
                <ButtonLink href="/about" variant="secondary">
                  About GrowStack
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)] p-6">
              <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                {brand.aboutBelief}
              </p>
              <p className="mt-4 text-sm font-semibold text-[color:var(--ink)]">
                {brand.processHighlight}
              </p>
            </div>
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
