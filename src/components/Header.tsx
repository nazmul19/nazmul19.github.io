"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand, navLinks } from "@/content/brand";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[color:var(--line)] bg-[color:var(--bg)]/90 backdrop-blur-md"
          : "border-transparent bg-[color:var(--bg)]/70 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl tracking-tight text-[color:var(--ink)]"
        >
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : !link.href.includes("#") &&
                  (pathname === link.href || pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition hover:text-[color:var(--accent-strong)] ${
                  active ? "text-[color:var(--accent-strong)]" : "text-[color:var(--muted)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" size="md">
            Discuss Your Project
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[color:var(--line)] px-3 py-2 text-sm text-[color:var(--ink)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[color:var(--line)] bg-[color:var(--bg)] lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2.5 text-sm text-[color:var(--ink)] hover:bg-[color:var(--surface)]"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/contact" className="mt-2 w-full" onClick={closeMenu}>
              Discuss Your Project
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
