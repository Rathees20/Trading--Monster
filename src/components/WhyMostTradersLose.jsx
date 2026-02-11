
import whyBg from "../assets/background whychase trade.jpg";
import buyChartImg from "../assets/Picture3.jpeg";
import sellChartImg from "../assets/Picture4.jpeg";
import holdChartImg from "../assets/Picture5.jpeg";

/* ================= CARD ================= */

function SignalCard({ variant, mode, title }) {
  const isBuy = variant === "buy";
  const isHold = variant === "hold";

  const accent = isBuy ? "#22c55e" : isHold ? "#facc15" : "#ef4444";

  let chartSrc = buyChartImg;
  if (variant === "sell") chartSrc = sellChartImg;
  if (variant === "hold") chartSrc = holdChartImg;

  return (
    <div className="rounded-[30px] border border-white/10 bg-black/90 p-6 sm:p-8 shadow-[0_22px_80px_rgba(0,0,0,0.7)]">

      {/* 🔝 HEADER: LEFT CONTENT + RIGHT BUTTON */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        {/* LEFT */}
        <div>
          <span
            className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black"
            style={{ backgroundColor: accent }}
          >
            {mode}
          </span>

          <h3 className="mt-3 text-2xl font-bold text-white sm:text-4xl">
            {title}
          </h3>
        </div>

        {/* RIGHT BUTTON */}
        <div className="shrink-0">
          <a
            href="#trial-form"
            className="inline-flex items-center justify-center rounded-xl border border-amber-450/30 bg-amber-450 px-5 py-2 text-xs font-semibold tracking-wide text-black shadow-glow transition hover:bg-amber-450/90 active:translate-y-px"
          >
            Get Trading Monster AI
          </a>
        </div>
      </div>

      {/* 📈 IMAGE */}
      <div className="mt-6 overflow-hidden rounded-[24px] bg-black">
        <img
          src={chartSrc}
          alt={variant}
          className="h-[220px] w-full object-contain sm:h-[280px] lg:h-[340px] xl:h-[380px]"
          loading="lazy"
          draggable={false}
        />
      </div>
    </div>
  );
}

/* ================= MAIN SECTION ================= */

export default function WhyMostTradersLose() {
  return (
    <section className="relative isolate overflow-hidden py-8 sm:py-16" id="why">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${whyBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8">

          {/* BUY */}
          <div className="rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.65),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(249,115,22,0.75),transparent_55%)] p-[1px]">
            <SignalCard
              variant="buy"
              mode="Buy Mode"
              title={
                <>
                  Buy Entry triggered 

                </>
              }
            />
          </div>

          {/* SELL */}
          <div className="rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(248,113,113,0.7),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(55,65,81,0.9),transparent_55%)] p-[1px]">
            <SignalCard
              variant="sell"
              mode="Sell Mode"
              title={
                <>
                  Sell Entry triggered 

                </>
              }
            />
          </div>

          {/* HOLD */}
          <div className="rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.75),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.7),transparent_55%)] p-[1px]">
            <SignalCard
              variant="hold"
              mode="Hold Mode"
              title={
                <>
                  Choppy Market, Hold your Entry 

                </>
              }
            />
          </div>

        </div>
      </div>
    </section>
  );
}
