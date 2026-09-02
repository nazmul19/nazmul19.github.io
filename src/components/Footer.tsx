import Link from "next/link";
import { brand } from "@/content/brand";
import { services } from "@/content/services";
import { Container } from "@/components/Container";
import { mailtoUrl, telUrl, whatsappUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface-strong)]">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)]">
            {brand.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
            {brand.tagline}
          </p>
          <p className="mt-4 text-sm text-[color:var(--muted)]">{brand.domain}</p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-[color:var(--ink)] uppercase">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href="/services"
                  className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--accent-strong)]"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-[color:var(--ink)] uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
            <li>
              <a
                href={telUrl()}
                className="transition hover:text-[color:var(--accent-strong)]"
              >
                {brand.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[color:var(--accent-strong)]"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={mailtoUrl()}
                className="transition hover:text-[color:var(--accent-strong)]"
              >
                {brand.email}
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition hover:text-[color:var(--accent-strong)]"
              >
                Contact form
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-[color:var(--line)]">
        <Container className="flex flex-col gap-2 py-6 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {brand.copyrightYear} {brand.name}. All rights reserved.
          </p>
          <p>Practical technology. Built around your business.</p>
        </Container>
      </div>
    </footer>
  );
}
