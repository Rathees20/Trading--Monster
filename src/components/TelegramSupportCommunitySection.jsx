function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="text-[#3B82F6]">
      <path
        d="M21 5 3.7 11.2c-1.1.4-1.1 1.1-.2 1.4l4.5 1.4 1.7 5.2c.2.6.4.6.8.2l2.6-2.5 5 3.7c.9.5 1.5.2 1.7-.8L22 6.4c.2-1-.4-1.6-1-1.4Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M8.2 13.9 18.7 7.5"
        fill="none"
        stroke="rgba(0,0,0,0.35)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function Callout({ tone = "blue", children, className = "" }) {
  const isBlue = tone === "blue";
  const base = isBlue
    ? "bg-[#1B2F4F] text-white/85 ring-white/10"
    : "bg-emerald-600/90 text-white ring-emerald-300/20";

  return (
    <div
      className={[
        "inline-flex items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold shadow-[0_14px_40px_rgba(0,0,0,0.25)] ring-1",
        base,
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[260px] max-w-full sm:w-[300px]">
      {/* phone body */}
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0B1321] shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
        <div className="h-8 bg-[#0A1020]" />
        <div className="px-4 pb-4 pt-3">
          <div className="mx-auto mb-3 h-1.5 w-24 rounded-full bg-white/10" />

          <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
            <div className="text-[10px] font-extrabold text-white/85">
              Trading Monster AI Support
            </div>
            <div className="mt-1 text-[9px] text-white/55">Chat &amp; Signals</div>
          </div>

          <div className="mt-3 space-y-3">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-3">
              <div className="text-[10px] font-semibold text-white/70">
                System says: INVALID (M15 MTF Alignment)
              </div>
              <div className="mt-1 text-[9px] text-white/55">
                Conditions not met — trade blocked.
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3">
              <div className="text-[10px] font-semibold text-white/70">
                Checking timeframe alignments...
              </div>
              <div className="mt-1 text-[9px] text-white/55">
                Aligned. Trade is valid.
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/25 px-3 py-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.35)]" />
            <div className="text-[9px] text-white/55">Message</div>
          </div>
        </div>
      </div>

      {/* callouts */}
      <Callout tone="blue" className="absolute -left-10 top-8 sm:-left-20">
        Priority Direct Support
      </Callout>
      <Callout tone="blue" className="absolute -left-10 top-[132px] sm:-left-20">
        Paid Member Access
      </Callout>
      <Callout tone="green" className="absolute -right-10 top-12 sm:-right-20">
        Demo User Picks
      </Callout>
      <Callout tone="green" className="absolute -right-10 top-[176px] sm:-right-20">
        Private Telegram Group
      </Callout>
    </div>
  );
}

export default function TelegramSupportCommunitySection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16" id="telegram-support">
      {/* warm background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_55%_55%,rgba(255,176,32,0.30),transparent_62%),radial-gradient(700px_460px_at_20%_35%,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/45" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/70">
              <TelegramIcon />
              <span className="text-[#3B82F6]">Telegram</span>
              <span className="text-white/55">Support &amp; Community</span>
            </div>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
              <span className="text-amber-450">Expert Guidance For Every Market</span>
              <br />
              <span className="text-amber-450">Move</span>
            </h2>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  );
}

