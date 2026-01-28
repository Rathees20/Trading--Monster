import Button from "./ui/Button.jsx";

function Pill({ children, active = false }) {
  return (
    <div
      className={[
        "rounded-full px-4 py-2 text-[10px] font-semibold sm:text-[11px]",
        active
          ? "bg-[#1B2F4F] text-white ring-1 ring-[#2E6BFF]/45 shadow-[0_10px_26px_rgba(46,107,255,0.18)]"
          : "bg-[#1B2F4F] text-white/80 ring-1 ring-white/10"
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function CheckRow({ children }) {
  return (
    <div className="flex items-center justify-center gap-2 text-[11px] leading-5 text-white/70">
      <span className="mt-[2px] inline-grid h-4 w-4 place-items-center rounded-full bg-[#2E6BFF] text-white shadow-[0_10px_22px_rgba(46,107,255,0.25)]">
        <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20 6 9 17l-5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{children}</span>
    </div>
  );
}

export default function UnlockFullAccessSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16" id="unlock-full-access">
      {/* subtle spotlight like the screenshot */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_10%,rgba(255,176,32,0.18),transparent_60%),radial-gradient(760px_420px_at_20%_50%,rgba(59,130,246,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/35" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Unlock Full Access</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-white/60 sm:text-sm">
            Transition from testing to high-conviction professional trading.
          </p>
        </div>

        {/* Main pricing panel */}
        <div className="relative mt-10 rounded-[22px] border border-white/10 bg-black/45 px-5 py-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur sm:rounded-[28px] sm:px-8 sm:py-8">
          {/* top-right star */}
          <div className="absolute right-4 top-4 text-white/35">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2l2.7 6.1 6.6.6-5 4.3 1.5 6.4L12 16.9 6.2 19.4 7.7 13 2.7 8.7l6.6-.6L12 2Z"
                fill="currentColor"
                opacity="0.9"
              />
            </svg>
          </div>

          <div className="text-center">
            <div className="text-[14px] font-extrabold text-white sm:text-[15px]">
              Trading Monster
              <br />
              <span className="text-white/90">Professional Indicator</span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Pill active>Full AI Trend Indicator Suite</Pill>
            <Pill>Private Telegram Community</Pill>
            <Pill>Priority Technical Support</Pill>
            <Pill>Free Lifetime Updates</Pill>
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6">
            {/* Left: Pricing box */}
            <div className="rounded-[18px] border border-red-500/45 bg-black/70 p-6 shadow-[0_0_0_1px_rgba(239,68,68,0.10),0_0_70px_rgba(239,68,68,0.10)]">
              <div className="text-center text-[11px] font-semibold text-white/60">
                Institutional Pricing
              </div>

              <div className="mt-4 flex items-end justify-center gap-2">
                <div className="text-4xl font-extrabold text-white">$599</div>
                <div className="pb-1 text-[10px] font-semibold text-white/60">USD / LIFETIME</div>
              </div>

              <div className="mt-3 text-center text-[10px] text-white/55">
                No Monthly Fees. No Recurring Billing.
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  className="h-9 rounded-md bg-white px-6 text-[11px] font-extrabold text-black shadow-[0_12px_36px_rgba(255,255,255,0.12)] ring-1 ring-white/25 transition hover:bg-white/90 active:translate-y-px"
                >
                  Unlock Trading Monster AI
                </button>
              </div>
            </div>

            {/* Center divider */}
            <div className="hidden w-px bg-white/10 lg:block" />

            {/* Right: Trial box */}
            <div className="flex flex-col">
              <div className="rounded-[18px] border border-white/10 bg-black/70 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.28)]">
                <div className="mx-auto w-fit rounded-md bg-white px-4 py-2 text-[12px] font-extrabold text-black">
                  Start Your 3-Day Free Trial
                </div>

                <div className="mt-4 space-y-2 text-center">
                  <CheckRow>Experience the Full Features</CheckRow>
                  <CheckRow>Unlock All Premium Tools</CheckRow>
                  <CheckRow>And Expert Support for 72 Hours</CheckRow>
                </div>

                <div className="mt-5 flex justify-center">
                  <button
                    className="h-8 rounded-md bg-[#2E6BFF] px-6 text-[11px] font-extrabold text-white shadow-[0_14px_40px_rgba(46,107,255,0.30)] transition hover:bg-[#2E6BFF]/90 active:translate-y-px"
                    type="button"
                  >
                    Start Now
                  </button>
                </div>
              </div>

              <div className="mt-3 text-center text-[9px] text-white/45">
                *3-Day Free Trial - No Credit Card Required - Cancel Anytime
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mx-auto mt-12 max-w-5xl text-center">
          <div className="mx-auto max-w-4xl text-lg font-extrabold tracking-tight text-white sm:text-2xl">
            Trade with Confirmation, Not Hope
          </div>
          <div className="mt-6 flex justify-center">
            <button
              className="h-12 w-full max-w-2xl rounded-md bg-[#2E6BFF] px-8 text-sm font-extrabold text-white shadow-[0_14px_40px_rgba(46,107,255,0.30)] transition hover:bg-[#2E6BFF]/90 active:translate-y-px sm:h-14 sm:px-12 sm:text-base"
              type="button"
            >
              Start Your Trading Monster AI Indicator Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

