function CardShell({ children, className = "" }) {
  return (
    <div
      className={`tm-card rounded-[28px] border border-white/10 bg-black/20 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function FakeChartPanel({ tone = "green" }) {
  const isGreen = tone === "green";
  const accent = isGreen ? "rgba(34,197,94,0.95)" : "rgba(239,68,68,0.95)";
  const accentSoft = isGreen ? "rgba(34,197,94,0.25)" : "rgba(239,68,68,0.22)";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
      {/* top tiny header */}
      <div className="absolute left-3 top-3 z-10 text-[10px] font-semibold text-white/70">
        TM Indicator
      </div>
      <div className="absolute right-3 top-3 z-10 text-[10px] font-semibold text-white/70">
        {isGreen ? "BUY" : "SELL"}
      </div>

      <svg className="block h-[150px] w-full" viewBox="0 0 360 150" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={`bg-${tone}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={accentSoft} />
            <stop offset="1" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
          <linearGradient id={`line-${tone}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={accent} />
            <stop offset="1" stopColor="rgba(255,255,255,0.25)" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="360" height="150" fill={`url(#bg-${tone})`} opacity="0.85" />

        {/* grid */}
        {Array.from({ length: 9 }).map((_, i) => (
          <g key={i} opacity="0.12">
            <line x1="0" y1={i * 18} x2="360" y2={i * 18} stroke="white" strokeWidth="1" />
            <line x1={i * 45} y1="0" x2={i * 45} y2="150" stroke="white" strokeWidth="1" />
          </g>
        ))}

        {/* candles */}
        {Array.from({ length: 18 }).map((_, i) => {
          const x = 18 + i * 18;
          const base = isGreen ? 95 - i * 1.2 : 55 + i * 1.2;
          const h = 8 + (i % 5) * 2;
          const up = isGreen ? i % 3 !== 0 : i % 3 === 0;
          const fill = up ? "rgba(34,197,94,0.85)" : "rgba(239,68,68,0.85)";
          return (
            <g key={i} opacity="0.95">
              <line
                x1={x}
                y1={base - h * 1.2}
                x2={x}
                y2={base + h * 1.2}
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1.4"
              />
              <rect x={x - 4} y={base - h / 2} width="8" height={h} rx="1.4" fill={fill} />
            </g>
          );
        })}

        {/* moving average lines */}
        <path
          d={isGreen ? "M0 105 C60 92, 110 98, 160 86 S260 80, 360 60" : "M0 45 C60 58, 110 52, 160 64 S260 70, 360 90"}
          fill="none"
          stroke={`url(#line-${tone})`}
          strokeWidth="2.2"
          opacity="0.9"
        />
        <path
          d={isGreen ? "M0 115 C70 110, 120 108, 170 100 S270 90, 360 78" : "M0 35 C70 40, 120 42, 170 50 S270 62, 360 72"}
          fill="none"
          stroke="rgba(59,130,246,0.85)"
          strokeWidth="1.8"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}

function AlignmentCheckCard() {
  return (
    <div className="mx-auto max-w-3xl">
      <CardShell className="p-4 sm:p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <FakeChartPanel tone="green" />
          <FakeChartPanel tone="red" />
        </div>
      </CardShell>
      <div className="mt-3 text-center text-sm font-extrabold text-white">Alignment Check</div>
    </div>
  );
}

function MarketBiasCard() {
  return (
    <div>
      <div className="mx-auto max-w-[420px] rounded-[22px] bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-emerald-500/15 p-3 ring-1 ring-emerald-500/25">
            <div className="text-[10px] font-extrabold text-emerald-700">BULLISH</div>
            <svg className="mt-2 block h-10 w-full" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 30 C25 22, 40 28, 60 18 S85 10, 100 8" fill="none" stroke="#16a34a" strokeWidth="3" />
            </svg>
          </div>
          <div className="rounded-xl bg-red-500/15 p-3 ring-1 ring-red-500/25">
            <div className="text-[10px] font-extrabold text-red-700">BEARISH</div>
            <svg className="mt-2 block h-10 w-full" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 10 C25 18, 40 12, 60 22 S85 30, 100 32" fill="none" stroke="#ef4444" strokeWidth="3" />
            </svg>
          </div>
          <div className="rounded-xl bg-slate-200 p-3 ring-1 ring-slate-300">
            <div className="text-[10px] font-extrabold text-slate-700">FLAT</div>
            <svg className="mt-2 block h-10 w-full" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 20 C20 20, 40 20, 60 20 S80 20, 100 20" fill="none" stroke="#64748b" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center text-sm font-extrabold text-white">Market Bias</div>
    </div>
  );
}

function TradeDecisionCard() {
  return (
    <div>
      <div className="mx-auto max-w-[420px] rounded-[22px] bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
        <div className="text-center text-[11px] font-extrabold text-slate-700">Trade Direction</div>
        <div className="mt-3 grid grid-cols-3 items-end gap-3">
          <div className="rounded-xl bg-emerald-500/12 p-3 ring-1 ring-emerald-500/20">
            <div className="flex justify-center">
              <svg width="44" height="44" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M10 32l8-8 6 6 12-14" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36 16v10H26" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="mt-2 text-center text-[11px] font-extrabold text-emerald-700">LONG</div>
          </div>

          <div className="rounded-xl bg-amber-500/12 p-3 ring-1 ring-amber-500/20">
            <div className="flex justify-center">
              <svg width="44" height="44" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M16 30h16" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
                <path d="M16 22h16" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                <path d="M18 12c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4Z" fill="#f59e0b" opacity="0.9" />
                <path d="M30 26c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4Z" fill="#f59e0b" opacity="0.8" />
              </svg>
            </div>
            <div className="mt-2 text-center text-[11px] font-extrabold text-amber-700">HOLD</div>
          </div>

          <div className="rounded-xl bg-red-500/12 p-3 ring-1 ring-red-500/20">
            <div className="flex justify-center">
              <svg width="44" height="44" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M10 16l8 8 6-6 12 14" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36 32V22H26" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="mt-2 text-center text-[11px] font-extrabold text-red-700">SHORT</div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center text-sm font-extrabold text-white">Trade Decision</div>
    </div>
  );
}

export default function MultiTimeframeTrendValidatorSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16" id="mtf-validator">
      {/* keep it consistent with the dark theme */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/35" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Multi-Timeframe Trend Validator
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-xs leading-5 text-white/60 sm:text-sm">
            The Ultimate Filtering Layer. If the Timeframes Don&apos;t Align, There&apos;s No Trade. Period.
          </p>
        </div>

        <div className="mt-8">
          <AlignmentCheckCard />
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10">
          <MarketBiasCard />
          <TradeDecisionCard />
        </div>
      </div>
    </section>
  );
}

