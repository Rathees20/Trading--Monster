function RuleCard({ icon, title, body }) {
  return (
    <div className="rounded-[26px] bg-[#142238] px-6 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.25)] ring-1 ring-white/5">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#1B2F4F] ring-1 ring-white/10">
        {icon}
      </div>
      <div className="mt-5 text-sm font-extrabold tracking-tight text-white">{title}</div>
      <p className="mt-2 text-[11px] leading-5 text-white/55">{body}</p>
    </div>
  );
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="text-[#3B82F6]">
      <path
        d="M12 22a10 10 0 1 1 10-10 10.01 10.01 0 0 1-10 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        opacity="0.95"
      />
      <path
        d="M12 7v5l3 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
    </svg>
  );
}

function IconArrowTrend() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="text-[#3B82F6]">
      <path
        d="M4 16l6-6 4 4 6-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
      <path
        d="M20 6v6h-6"
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

function IconNoChop() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="text-[#3B82F6]">
      <path
        d="M4 15c2 0 2-6 4-6s2 6 4 6 2-6 4-6 2 6 4 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.95"
      />
      <path
        d="M6 6l12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

function IconIgnore() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="text-[#3B82F6]">
      <path
        d="M7 7h10v10H7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        opacity="0.95"
      />
      <path
        d="M9 12h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.95"
      />
      <path
        d="M6 6l12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

export default function RulesAINeverBreaksSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16" id="rules">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            The Rules AI Never Breaks
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-white/60 sm:text-sm">
            Discipline is the only bridge between good ideas and real accomplishment.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <RuleCard
            icon={<IconClock />}
            title="Wait For Candle Close"
            body="Signals only validate after the candle closes. No jumping in, no guessing."
          />
          <RuleCard
            icon={<IconArrowTrend />}
            title="Trend Direction Only"
            body="We trade in the direction of the trend only. No counter‑trend entries."
          />
          <RuleCard
            icon={<IconNoChop />}
            title="Avoid Choppy Market"
            body="If volatility is sideways, the AI stays neutral. No cash is position."
          />
          <RuleCard
            icon={<IconIgnore />}
            title="Ignore Late Signals"
            body="No chasing. If the trade has already moved, the AI won’t follow."
          />
        </div>
      </div>
    </section>
  );
}

