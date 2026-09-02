"use client";

import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/Button";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroVisual } from "@/components/HeroVisual";
import { Section, SectionHeading } from "@/components/Section";
import { problems, audiences } from "@/content/audiences";
import { brand } from "@/content/brand";
import { capabilityGroups } from "@/content/capabilities";
import { differentiators, messagingExample } from "@/content/differentiators";
import { processSteps } from "@/content/process";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <p className="mb-4 text-sm font-medium tracking-[0.18em] text-[color:var(--accent)] uppercase">
              {brand.name}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl leading-[1.08] text-[color:var(--ink)] sm:text-5xl lg:text-[3.4rem]">
              {brand.heroHeadline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
              {brand.heroSupporting}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="lg">
                Discuss Your Problem
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" size="lg">
                Explore Our Work
              </ButtonLink>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <HeroVisual />
          </FadeIn>
        </div>
      </Section>

      <Section tone="muted">
        <FadeIn>
          <SectionHeading
            eyebrow="Business Challenges"
            title={brand.problemHeadline}
            description={messagingExample.lead}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem) => (
              <div
                key={problem}
                className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] px-5 py-4 text-[color:var(--ink)]"
              >
                <p className="text-sm leading-relaxed sm:text-base">{problem}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)] sm:text-3xl">
              {brand.introHeadline}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
              {brand.introBody}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
              {messagingExample.follow}
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Practical solutions for real operational problems"
            description="From custom software and integrations to AI agents and automation — built around the way your business works."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href="/services"
                className="group rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition hover:border-[color:var(--accent)] hover:shadow-[0_20px_40px_-28px_rgba(15,118,110,0.45)]"
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
              View all services
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      <Section tone="muted">
        <FadeIn>
          <SectionHeading
            eyebrow="Selected Work"
            title="Representative solutions we've built"
            description="Case studies framed around business challenges and outcomes — without confidential client details."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition hover:border-[color:var(--accent)]"
              >
                <p className="text-xs font-medium tracking-[0.14em] text-[color:var(--accent)] uppercase">
                  Selected Work
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[color:var(--ink)]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  {project.challenge}
                </p>
                <p className="mt-4 text-sm font-medium text-[color:var(--accent-strong)]">
                  View case study →
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/work" variant="secondary">
              Browse selected work
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      <Section id="how-we-work">
        <FadeIn>
          <SectionHeading
            eyebrow="How We Work"
            title="A clear path from problem to practical solution"
            description={brand.processHighlight}
          />
          <div className="grid gap-4 md:grid-cols-5">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
              >
                <p className="text-sm font-semibold text-[color:var(--accent)]">
                  {String(step.step).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[color:var(--ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section tone="muted">
        <FadeIn>
          <SectionHeading
            eyebrow="Capabilities"
            title="An interconnected technology practice"
            description="Not a laundry list of tools — a connected set of capabilities for applications, intelligence, integration, and automation."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {capabilityGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6"
              >
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[color:var(--line)] bg-[color:var(--bg)] px-3 py-1 text-xs text-[color:var(--muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/solutions" variant="secondary">
              Explore solutions
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Who We Work With"
            title="Built for businesses ready to improve how they work"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6"
              >
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section tone="muted">
        <FadeIn>
          <SectionHeading
            eyebrow="Why GrowStack"
            title="Practical technology. Built around your business."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6"
              >
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  {item.description}
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
