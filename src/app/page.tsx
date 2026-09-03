"use client";

import { FadeIn } from "@/components/FadeIn";
import { ButtonLink } from "@/components/Button";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroVisual } from "@/components/HeroVisual";
import { KnowledgeMarquee } from "@/components/KnowledgeMarquee";
import { BrandMark } from "@/components/BrandMark";
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
              <ButtonLink href="/work" variant="secondary" size="lg">
                Explore Our Work
              </ButtonLink>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-[color:var(--line)] pt-6">
              {[
                { label: "Focus", value: "Business outcomes" },
                { label: "Approach", value: "Problem-first" },
                { label: "Delivery", value: "End-to-end build" },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="text-xs tracking-[0.14em] text-[color:var(--muted)] uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-[color:var(--ink)]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
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
            eyebrow="Business Challenges"
            title={brand.problemHeadline}
            description={messagingExample.lead}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <div key={problem} className="agency-panel rounded-2xl px-5 py-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-[color:var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)] sm:text-base">
                  {problem}
                </p>
              </div>
            ))}
          </div>
          <div className="agency-panel mt-12 max-w-3xl rounded-3xl p-7 sm:p-9">
            <p className="text-sm font-medium tracking-[0.16em] text-[color:var(--accent)] uppercase">
              GrowStack perspective
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)] sm:text-3xl">
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
                className="agency-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5 sm:p-7"
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
              <div key={step.step} className="agency-panel rounded-2xl p-5">
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
              <div key={group.title} className="agency-panel rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">{group.title}</h3>
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
              <div key={audience.title} className="agency-panel rounded-2xl p-6">
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
            eyebrow={`Why ${brand.name}`}
            title="Practical technology. Built around your business."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title} className="agency-panel rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[color:var(--ink)]">{item.title}</h3>
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
