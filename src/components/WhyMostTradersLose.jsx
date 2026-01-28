import whyBg from "../assets/background whychase trade.jpg";
import logoMark from "../assets/logo.png";
import buyChartImg from "../assets/Buy image.jpeg";
import sellChartImg from "../assets/Sell image.jpeg";

function MiniSignalChart({ variant = "buy" }) {
  const isBuy = variant === "buy";
  const accent = isBuy ? "#22c55e" : "#ef4444";
  const label = isBuy ? "Buy Signal" : "Sell Signal";
  const chartSrc = isBuy ? buyChartImg : sellChartImg;

  return (
    <div className="relative h-[190px] w-[190px] overflow-hidden rounded-2xl border border-white/10 bg-[#070B12] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
      {/* top labels (like screenshot) */}
      <div className="absolute left-3 top-3 z-10 flex items-center gap-2 text-[10px] font-semibold">
        <span className="rounded bg-white/90 px-2 py-0.5 text-black">
          TM Indicator
        </span>
        <span
          className="rounded px-2 py-0.5 text-black"
          style={{ backgroundColor: accent }}
        >
          {label}
        </span>
      </div>
      <div className="absolute left-3 top-8 z-10 flex items-center gap-2 text-[10px] text-white/70">
        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
        Dominant Market Trend
      </div>

      {/* chart image from assets */}
      <img
        src={chartSrc}
        alt={isBuy ? "Buy chart" : "Sell chart"}
        className="block h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

function ModePanel({ title, description, tone = "buy" }) {
  const isBuy = tone === "buy";
  const border = isBuy ? "border-emerald-500/35" : "border-red-500/35";
  const glow = isBuy
    ? "shadow-[0_0_0_1px_rgba(34,197,94,0.12),0_0_60px_rgba(34,197,94,0.10)]"
    : "shadow-[0_0_0_1px_rgba(239,68,68,0.12),0_0_60px_rgba(239,68,68,0.10)]";
  const titleColor = isBuy ? "text-emerald-400" : "text-red-500";
  const bg =
    "bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.05),transparent_55%)]";

  return (
    <div
      className={`relative flex h-[190px] w-full max-w-[426px] items-center justify-center rounded-3xl border ${border} ${glow} ${bg} px-6 py-10 text-center`}
    >
      {/* watermark logo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${logoMark})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "220px auto",
        }}
      />
      <div className="max-w-[360px]">
        <div className={`text-2xl font-bold ${titleColor}`}>{title}</div>
        <p className="mt-4 text-xs leading-5 text-white/70">{description}</p>
      </div>
    </div>
  );
}

export default function WhyMostTradersLose() {
  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-16" id="why">
      {/* Section background image: `src/assets/background whychase trade.jpg` */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${whyBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold leading-snug tracking-normal sm:text-3xl">
          Why Most 15-Minute Traders Lose
        </h2>
        <p className="mt-3 max-w-3xl text-xs leading-5 text-white/60 sm:text-sm">
          Most 15-minute traders lose because they trade without confirmation.
          They chase candles, trade against the trend, and overtrade choppy markets.
        </p>
        <div className="mt-3 text-xs font-semibold italic text-amber-450">
          ---&quot;Trading Monster AI forces discipline&quot;---
        </div>

        <div className="mt-8 grid gap-6">
          {/* Card 1 (Buy) */}
          <div className="mx-auto w-full max-w-[800px] rounded-[2.25rem] border border-white/10 bg-black/20 p-4 backdrop-blur sm:p-6">
            <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-10">
              <MiniSignalChart variant="buy" />
              <ModePanel
                tone="buy"
                title="Buy Mode"
                description={
                  <>
                    Green bars indicate Buy-only conditions.
                    <br />
                    Trades are allowed only in the direction of the trend.
                  </>
                }
              />
            </div>
          </div>

          {/* Card 2 (Sell) */}
          <div className="mx-auto w-full max-w-[800px] rounded-[2.25rem] border border-white/10 bg-black/20 p-4 backdrop-blur sm:p-6">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-10">
              <ModePanel
                tone="sell"
                title="Sell Mode"
                description={
                  <>
                    Red Bars indicate Sell-Only Conditions.
                    <br />
                    Counter-Trend Trades Are Blocked.
                  </>
                }
              />
              <MiniSignalChart variant="sell" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

