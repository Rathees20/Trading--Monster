function Bubble({ className = "", children }) {
  return (
    <div
      className={`grid h-10 w-10 place-items-center rounded-2xl bg-white/80 text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.12)] ring-1 ring-black/5 ${className}`}
    >
      {children}
    </div>
  );
}

function MiniPill({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-[10px] font-semibold tracking-wide text-slate-600">{label}</div>
      <div className="mt-1 inline-flex items-center rounded-full bg-black px-3 py-1 text-[11px] font-extrabold text-emerald-400 shadow-[0_0_0_1px_rgba(16,185,129,0.25)]">
        {value}
      </div>
    </div>
  );
}

function BiasCard({ title, subtitle, tone = "green" }) {
  const isGreen = tone === "green";
  const border = isGreen ? "border-emerald-500/35" : "border-red-500/35";
  const chip = isGreen ? "bg-emerald-500/15 text-emerald-300" : "bg-red-500/15 text-red-300";
  const subtitleColor = isGreen ? "text-emerald-400" : "text-red-400";

  return (
    <div className={`rounded-xl border ${border} bg-black px-4 py-3`}>
      <div className={`inline-flex rounded-md px-2 py-1 text-[10px] font-bold ${chip}`}>
        {title}
      </div>
      <div className={`mt-2 text-xs font-extrabold ${subtitleColor}`}>{subtitle}</div>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black px-5 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2l7 4v6c0 5-3.2 9.4-7 10-3.8-.6-7-5-7-10V6l7-4Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              opacity="0.9"
            />
            <path
              d="M8.5 12.2l2.2 2.2 4.8-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
          </svg>
        </div>
        <div>
          <div className="text-sm font-extrabold text-white">Targets + Trailing Stop</div>
          <p className="mt-1 text-[11px] leading-5 text-white/65">
            Automatically track high probability exit zones based on volatility expansion. The trailing stop logic
            protects your capital in fast moving markets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AITrendEngineSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F3EC] py-12 text-slate-900 sm:py-16" id="ai-trend-engine">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="p-1 sm:p-2">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            {/* LEFT: Illustration */}
            <div>
              <div className="text-center text-[11px] font-semibold text-slate-700">
                Dynamic Trend Density
              </div>

              <div className="relative mt-4 overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_30%_35%,#FFD9A6,transparent_55%),radial-gradient(circle_at_70%_55%,#FFB36A,transparent_55%),linear-gradient(135deg,#FFF7EA,#FFF)] p-6 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
                {/* soft connectors */}
                <svg
                  className="pointer-events-none absolute inset-0"
                  viewBox="0 0 420 260"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <g opacity="0.28" stroke="#0F172A" strokeWidth="2">
                    <path d="M210 128 C150 90, 120 95, 90 85" fill="none" />
                    <path d="M210 128 C260 92, 295 90, 330 78" fill="none" />
                    <path d="M210 128 C150 150, 120 165, 92 182" fill="none" />
                    <path d="M210 128 C260 154, 295 165, 332 178" fill="none" />
                  </g>
                </svg>

                {/* center AI chip */}
                <div className="mx-auto grid h-[84px] w-[84px] place-items-center rounded-3xl bg-white/85 text-slate-800 shadow-[0_16px_40px_rgba(15,23,42,0.18)] ring-1 ring-black/5">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900/90 text-white">
                    <span className="text-xs font-extrabold">AI</span>
                  </div>
                </div>

                {/* bubbles */}
                <Bubble className="absolute left-10 top-10">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12Z"
                      fill="currentColor"
                      opacity="0.9"
                    />
                    <path
                      d="M4.5 21c1.4-4.2 5-6 7.5-6s6.1 1.8 7.5 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                  </svg>
                </Bubble>
                <Bubble className="absolute left-20 top-24">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 7h10v8H9l-2 2V7Z" fill="currentColor" opacity="0.9" />
                    <circle cx="10" cy="11" r="1" fill="#fff" opacity="0.85" />
                    <circle cx="13" cy="11" r="1" fill="#fff" opacity="0.85" />
                    <circle cx="16" cy="11" r="1" fill="#fff" opacity="0.85" />
                  </svg>
                </Bubble>
                <Bubble className="absolute left-12 top-40">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 4a8 8 0 1 0 8 8h-8V4Z"
                      fill="currentColor"
                      opacity="0.9"
                    />
                    <path
                      d="M13 3a8 8 0 0 1 8 8h-8V3Z"
                      fill="currentColor"
                      opacity="0.45"
                    />
                  </svg>
                </Bubble>

                <Bubble className="absolute right-10 top-10">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 7h16v10H7l-3 3V7Z"
                      fill="currentColor"
                      opacity="0.9"
                    />
                  </svg>
                </Bubble>
                <Bubble className="absolute right-20 top-24">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M7 18V6l12 6-12 6Z"
                      fill="currentColor"
                      opacity="0.9"
                    />
                  </svg>
                </Bubble>
                <Bubble className="absolute right-12 top-40">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 16l5-5 4 4 7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.9"
                    />
                    <path
                      d="M20 8v5h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.9"
                    />
                  </svg>
                </Bubble>

                <div className="mt-7 grid grid-cols-3 gap-4">
                  <MiniPill label="T1 REACHED" value="+45Pips" />
                  <MiniPill label="T2 REACHED" value="+45Pips" />
                  <MiniPill label="T3 REACHED" value="+45Pips" />
                </div>
              </div>
            </div>

            {/* RIGHT: Copy + cards */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                AI Trend Engine
              </h3>
              <p className="mx-auto mt-3 max-w-md text-xs leading-5 text-slate-600 sm:text-sm lg:mx-0">
                The Core Engine Clearly Shows The Dominant Market Trend, Allowing You To Filter Out Noise Efficiently.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <BiasCard title="Green Bars" subtitle="Buy-Only Bias" tone="green" />
                <BiasCard title="Red Bars" subtitle="Sell-Only Bias" tone="red" />
              </div>

              <div className="mt-5">
                <FeatureCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

