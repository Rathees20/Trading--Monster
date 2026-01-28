function RuleCard({ icon, title, body }) {
  return (
    <div className="rounded-[28px] bg-[#142238] px-7 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.25)] ring-1 ring-white/5">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1B2F4F] ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(46,107,255,0.12)]">
        {icon}
      </div>
      <div className="mt-6 text-base font-semibold tracking-normal text-white">{title}</div>
      <p className="mt-3 text-xs leading-5 text-white/55">{body}</p>
    </div>
  );
}

function IconClock() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="text-[#2E6BFF] drop-shadow-[0_10px_24px_rgba(46,107,255,0.20)]"
    >
      {/* stopwatch style to match reference */}
      <path
        d="M10 2h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 5.5a8.5 8.5 0 1 0 8.5 8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2 6.2l1.4-1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M12 9v4.4l2.4 1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPlane() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="text-[#2E6BFF] drop-shadow-[0_10px_24px_rgba(46,107,255,0.20)]">
      <path
        d="M21 5 3.8 11.2c-1.1.4-1.1 1.1-.2 1.4l5 1.6 1.7 5.1c.2.6.5.6.9.2l2.6-2.5 4.8 3.5c.9.5 1.6.2 1.8-.8L22 6.4c.2-1-.4-1.6-1-1.4Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M8.5 14.1 18.8 7.7"
        fill="none"
        stroke="rgba(0,0,0,0.35)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function IconCloudSlash() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="text-[#2E6BFF] drop-shadow-[0_10px_24px_rgba(46,107,255,0.20)]">
      <path
        d="M7.5 18.5H17a4 4 0 0 0 .8-7.9 5.5 5.5 0 0 0-10.7 1.6A3.5 3.5 0 0 0 7.5 18.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6l12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

function IconMinusCircle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="text-[#2E6BFF] drop-shadow-[0_10px_24px_rgba(46,107,255,0.20)]">
      <path
        d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8.5 12h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function RulesAINeverBreaksSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20" id="rules">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-snug tracking-normal sm:text-4xl">
            The Rules AI Never Breaks
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/60 sm:text-base">
            Discipline is the only bridge between good ideas and real accomplishment.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <RuleCard
            icon={<IconClock />}
            title="Wait For Candle Close"
            body="Signals only validate after the candle closes. No jumping in, no guessing."
          />
          <RuleCard
            icon={<IconPlane />}
            title="Trend Direction Only"
            body="We trade in the direction of the trend only. No counter‑trend entries."
          />
          <RuleCard
            icon={<IconCloudSlash />}
            title="Avoid Choppy Market"
            body="If volatility is sideways, the AI stays neutral. No cash is position."
          />
          <RuleCard
            icon={<IconMinusCircle />}
            title="Ignore Late Signals"
            body="No chasing. If the trade has already moved, the AI won’t follow."
          />
        </div>
      </div>
    </section>
  );
}

