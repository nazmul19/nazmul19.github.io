import { type ReactNode } from "react";
import { Container } from "@/components/Container";

export function Section({
  id,
  children,
  className = "",
  tone = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "accent";
}) {
  const tones = {
    default: "bg-transparent",
    muted: "bg-[color:var(--surface)]",
    accent: "bg-[color:var(--surface-strong)]",
  };

  return (
    <section id={id} className={`py-20 sm:py-24 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium tracking-[0.18em] text-[color:var(--accent)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
