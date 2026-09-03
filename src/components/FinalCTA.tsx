import { BrandMark } from "@/components/BrandMark";
import { ButtonLink } from "@/components/Button";
import { mailtoUrl, telUrl, whatsappUrl } from "@/lib/contact";
import { brand } from "@/content/brand";

export function FinalCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(135deg,rgba(15,118,110,0.18),rgba(37,99,235,0.1)_42%,rgba(15,23,42,0.04))] px-6 py-12 sm:px-10 sm:py-14">
      <div className="pointer-events-none absolute -right-8 -top-10 opacity-20" aria-hidden>
        <BrandMark className="h-40 w-40" />
      </div>
      <div className="relative max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1.5">
          <BrandMark className="h-5 w-5" />
          <span className="text-sm font-semibold text-[color:var(--ink)]">{brand.name}</span>
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl">
          {brand.finalCtaHeadline}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
          {brand.finalCtaBody}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="lg">
            Discuss Your Project
          </ButtonLink>
          <ButtonLink
            href={whatsappUrl()}
            variant="secondary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </ButtonLink>
          <ButtonLink href={telUrl()} variant="ghost" size="lg">
            Call {brand.phoneDisplay}
          </ButtonLink>
          <ButtonLink href={mailtoUrl()} variant="ghost" size="lg">
            Email
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
