import { ButtonLink } from "@/components/Button";
import { mailtoUrl, telUrl, whatsappUrl } from "@/lib/contact";
import { brand } from "@/content/brand";

export function FinalCTA() {
  return (
    <div className="overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(135deg,rgba(15,118,110,0.16),rgba(37,99,235,0.08)_45%,rgba(15,23,42,0.02))] px-6 py-12 sm:px-10 sm:py-14">
      <div className="max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl">
          {brand.finalCtaHeadline}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
          {brand.finalCtaBody}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="lg">
            Start a Conversation
          </ButtonLink>
          <ButtonLink href={whatsappUrl()} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
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
