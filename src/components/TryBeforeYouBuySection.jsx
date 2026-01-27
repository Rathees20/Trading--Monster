import Button from "./ui/Button.jsx";

function Step({ day, title, desc, icon }) {
  return (
    <div className="text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-black/60 ring-1 ring-white/10">
        {icon}
      </div>
      <div className="mt-3 text-[10px] font-semibold tracking-wider text-white/70">
        DAY {day}
      </div>
      <div className="mt-1 text-[11px] font-extrabold tracking-wide text-amber-450">
        {title}
      </div>
      <p className="mx-auto mt-2 max-w-[220px] text-[10px] leading-4 text-white/55">
        {desc}
      </p>
    </div>
  );
}

function IconPulse() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="text-[#3B82F6]">
      <path
        d="M3 12h4l2-6 4 12 2-6h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="text-[#3B82F6]">
      <path
        d="M10 8a3 3 0 0 1 6 0 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 0 3 3 0 0 1-2-5 3 3 0 0 1 2-5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        opacity="0.95"
      />
      <path
        d="M12 7v10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.55"
      />
      <path
        d="M9.5 10.2h5M9.5 13.8h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.55"
      />
    </svg>
  );
}

function IconTelegram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="text-[#3B82F6]">
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

export default function TryBeforeYouBuySection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16" id="try-before-you-buy">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 ring-1 ring-white/10 sm:rounded-[34px] sm:p-10">
          {/* subtle inner glow + fingerprint-ish mark */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(700px_280px_at_50%_0%,rgba(255,176,32,0.12),transparent_60%),radial-gradient(600px_280px_at_85%_15%,rgba(59,130,246,0.10),transparent_55%)]" />
            <div className="absolute -right-14 -top-10 h-40 w-40 rounded-full bg-white/5 blur-[1px]" />
            <svg
              className="absolute right-6 top-4 h-20 w-20 opacity-[0.08]"
              viewBox="0 0 64 64"
              aria-hidden="true"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <path
                  key={i}
                  d={`M32 6 C50 ${10 + i * 2}, 58 ${24 + i * 2}, 58 34 C58 ${46 + i}, 47 ${58 - i}, 32 58 C17 ${58 - i}, 6 ${46 + i}, 6 34 C6 ${24 + i * 2}, 14 ${10 + i * 2}, 32 6 Z`}
                  fill="none"
                  stroke="white"
                  strokeWidth="1.2"
                  opacity={0.7 - i * 0.06}
                />
              ))}
            </svg>
          </div>

          <div className="relative">
            <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
              Try Before You Buy
            </h2>

            <div className="mt-9 grid gap-10 sm:grid-cols-3 sm:gap-6">
              <Step
                day="1"
                title="TEST SIGNALS"
                desc="See how the indicator works in real market conditions on live chart flow."
                icon={<IconPulse />}
              />
              <Step
                day="2"
                title="UNDERSTAND LOGIC"
                desc="Learn how the trend and bias filters block low‑probability trades."
                icon={<IconBrain />}
              />
              <Step
                day="3"
                title="JOIN THE ELITE"
                desc="Upgrade to the full suite and copy the rules, not emotions."
                icon={<IconTelegram />}
              />
            </div>

            <div className="mt-9 flex flex-col items-center gap-3">
              <Button
                variant="amber"
                size="sm"
                className="h-9 rounded-full px-5 text-[11px] font-extrabold"
              >
                Yes, I Want To Trade Smarter &gt;
              </Button>
              <div className="flex items-center gap-2 text-[11px] text-white/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.35)]" />
                <span>- Start 3-Day Demo Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

