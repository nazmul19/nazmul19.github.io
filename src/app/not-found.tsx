import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24">
      <p className="text-sm font-medium tracking-[0.18em] text-[color:var(--accent)] uppercase">
        404
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-[color:var(--ink)]">
        Page not found
      </h1>
      <p className="mt-4 max-w-lg text-[color:var(--muted)]">
        The page you are looking for does not exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact GrowStack
        </ButtonLink>
        <Link
          href="/case-studies"
          className="inline-flex items-center text-sm text-[color:var(--muted)] hover:text-[color:var(--accent-strong)]"
        >
          Case studies
        </Link>
      </div>
    </Container>
  );
}
