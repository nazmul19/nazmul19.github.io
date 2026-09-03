import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { brand } from "@/content/brand";

export function BrandLockup({
  href = "/",
  size = "md",
  showTagline = false,
  tone = "light",
}: {
  href?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  tone?: "light" | "dark";
}) {
  const markSize = size === "lg" ? "h-11 w-11" : size === "sm" ? "h-7 w-7" : "h-8 w-8";
  const wordSize =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : size === "sm"
        ? "text-lg"
        : "text-xl";
  const wordColor = tone === "dark" ? "text-white" : "text-[color:var(--ink)]";
  const tagColor = tone === "dark" ? "text-white/60" : "text-[color:var(--muted)]";

  return (
    <Link href={href} className="group inline-flex items-center gap-3">
      <BrandMark className={`${markSize} shrink-0 shadow-sm transition group-hover:scale-[1.03]`} />
      <span className="min-w-0">
        <span
          className={`block font-[family-name:var(--font-display)] font-semibold tracking-tight ${wordColor} ${wordSize}`}
        >
          {brand.name}
        </span>
        {showTagline ? (
          <span className={`mt-0.5 block text-xs tracking-[0.12em] uppercase ${tagColor}`}>
            {brand.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
