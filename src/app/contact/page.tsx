import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { Section, SectionHeading } from "@/components/Section";
import { brand } from "@/content/brand";
import { mailtoUrl, telUrl, whatsappUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell GrowStack about your business problem. Call, WhatsApp, email, or use the contact form to start a conversation.",
};

export default function ContactPage() {
  return (
    <Section className="pt-10 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Talk About Your Problem"
            description="Tell us about what your business does, the problem you are trying to solve, your current process, systems you use, and what you would like to improve."
          />
          <div className="space-y-4 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
            <p className="text-sm font-semibold tracking-wide text-[color:var(--ink)] uppercase">
              Direct channels
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              Call / WhatsApp:{" "}
              <a
                href={telUrl()}
                className="font-medium text-[color:var(--accent-strong)]"
              >
                {brand.phoneDisplay}
              </a>
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              Email:{" "}
              <a
                href={mailtoUrl()}
                className="font-medium text-[color:var(--accent-strong)]"
              >
                {brand.email}
              </a>
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </ButtonLink>
              <ButtonLink href={telUrl()} variant="secondary">
                Call now
              </ButtonLink>
              <ButtonLink href={mailtoUrl()} variant="secondary">
                Email us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-[color:var(--ink)]">
              Project inquiry
            </h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Share a few details and we&apos;ll follow up to discuss the problem and
              what can be built.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
