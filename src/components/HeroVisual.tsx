export function HeroVisual() {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[radial-gradient(circle_at_20%_20%,rgba(13,148,136,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.12),transparent_40%),linear-gradient(160deg,#0b1220,#111827_55%,#0f172a)]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 640 480"
        className="absolute inset-0 h-full w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        <g stroke="url(#flow)" strokeWidth="1.5" fill="none" opacity="0.7">
          <path d="M80 360 C160 280, 220 260, 300 240" />
          <path d="M120 120 C210 160, 250 190, 300 240" />
          <path d="M300 240 C390 210, 470 180, 560 140" />
          <path d="M300 240 C360 300, 430 340, 540 380" />
          <path d="M300 240 C250 320, 180 350, 90 400" />
        </g>

        {[
          [80, 360],
          [120, 120],
          [300, 240],
          [560, 140],
          [540, 380],
          [90, 400],
          [420, 200],
          [200, 300],
        ].map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <circle
              cx={cx}
              cy={cy}
              r={index === 2 ? 14 : 8}
              fill={index === 2 ? "#14b8a6" : "#94a3b8"}
              opacity={index === 2 ? 0.95 : 0.75}
            />
            <circle
              cx={cx}
              cy={cy}
              r={index === 2 ? 28 : 18}
              fill="none"
              stroke="#5eead4"
              strokeOpacity="0.25"
            />
          </g>
        ))}

        <rect
          x="430"
          y="250"
          width="120"
          height="72"
          rx="10"
          fill="#0f172a"
          stroke="#334155"
        />
        <rect x="446" y="268" width="56" height="8" rx="4" fill="#14b8a6" opacity="0.8" />
        <rect x="446" y="286" width="88" height="6" rx="3" fill="#64748b" />
        <rect x="446" y="300" width="70" height="6" rx="3" fill="#64748b" />
      </svg>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.35),transparent_40%)]" />
    </div>
  );
}
