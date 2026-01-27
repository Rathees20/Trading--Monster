function StepCard({ icon, title, body }) {
  return (
    <div className="tm-card relative rounded-[26px] border border-amber-450/18 bg-black/20 px-6 py-6 shadow-[0_0_0_1px_rgba(255,176,32,0.10),0_0_50px_rgba(255,176,32,0.06)] backdrop-blur">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-amber-450/25 bg-black/30 shadow-[0_0_0_1px_rgba(255,176,32,0.10)]">
          {icon}
        </div>
        <div>
          <div className="text-sm font-extrabold tracking-wide text-white">{title}</div>
          <p className="mt-2 text-xs leading-5 text-white/60">{body}</p>
        </div>
      </div>
    </div>
  );
}

function IconCoin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="text-amber-450">
      <path
        d="M12 4c-4.418 0-8 1.79-8 4s3.582 4 8 4 8-1.79 8-4-3.582-4-8-4Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M4 8v4c0 2.21 3.582 4 8 4s8-1.79 8-4V8"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        opacity="0.75"
      />
      <path
        d="M4 12v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="text-amber-450">
      <path
        d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M5 14l.9 2.8L9 18l-3.1 1.2L5 22l-.9-2.8L1 18l3.1-1.2L5 14Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="text-amber-450">
      <path
        d="M12 2l7 4v6c0 5-3.2 9.4-7 10-3.8-.6-7-5-7-10V6l7-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M8.5 12.2l2.2 2.2 4.8-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}

function IconWave() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="text-amber-450">
      <path
        d="M3 15c3 0 3-6 6-6s3 6 6 6 3-6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M3 19c3 0 3-6 6-6s3 6 6 6 3-6 6-6"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

export default function HowTradingMonsterAIDecides() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16" id="how-it-decides">
      {/* subtle section glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_25%,rgba(255,176,32,0.12),transparent_62%),radial-gradient(760px_380px_at_15%_55%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/40" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            How Trading Monster AI Decides
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-xs leading-5 text-white/60 sm:text-sm">
            Multi-Layer Confirmation ensures you only trade when the odds are stacked in your favor.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StepCard
            icon={<IconCoin />}
            title="Market Data"
            body="Real-time market data (open, volume, and volatility metrics)."
          />
          <StepCard
            icon={<IconSpark />}
            title="AI Trend Engine"
            body="Algorithm filters noise to define the dominant institutional flow."
          />
          <StepCard
            icon={<IconShieldCheck />}
            title="MTF Validator"
            body="Confirms alignment across higher timeframes for maximum safety."
          />
          <StepCard
            icon={<IconWave />}
            title="TRADE OR NO TRADE."
            body="The system decides based on confirmation. No emotions involved."
          />
        </div>

        <div className="mt-8 flex justify-center">
          <div className="rounded-full border border-amber-450/20 bg-black/30 px-5 py-2 text-[11px] font-semibold text-white/70 shadow-[0_0_0_1px_rgba(255,176,32,0.08)]">
            <span className="text-amber-450/90">Highlight:</span> 3+ confirmation filters, this trade is blocked
          </div>
        </div>

        <div className="mt-12 border-t border-white/10" />
      </div>
    </section>
  );
}

