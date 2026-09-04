const items = [
  "SaaS development",
  "System integration",
  "Platform modernization",
  "Cloud engineering",
  "Dedicated engineering teams",
  "Problem-first consulting",
];

export function KnowledgeMarquee() {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-[color:var(--line)] bg-[color:var(--ink)] py-3.5 text-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[color:var(--ink)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[color:var(--ink)] to-transparent" />
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-10 whitespace-nowrap px-6">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-3 text-sm tracking-wide text-white/85"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
