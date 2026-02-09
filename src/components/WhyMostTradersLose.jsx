import whyBg from "../assets/background whychase trade.jpg";
import logoMark from "../assets/logo.png";
import buyChartImg from "../assets/Picture3.png";
import sellChartImg from "../assets/Picture4.png";
import holdChartImg from "../assets/Picture5.png";

function MiniSignalChart({ variant = "buy" }) {
  const isBuy = variant === "buy";
  const isHold = variant === "hold";

  const accent = isBuy ? "#22c55e" : isHold ? "#facc15" : "#ef4444";
  const label = isBuy
    ? "Buy Signal"
    : isHold
    ? "Hold Zone"
    : "Sell Signal";

  let chartSrc = buyChartImg;
  if (variant === "sell") chartSrc = sellChartImg;
  if (variant === "hold") chartSrc = holdChartImg;

  return (
    <div className="relative w-full max-w-full overflow-hidden rounded-[30px] border border-white/10 bg-black/90 shadow-[0_22px_90px_rgba(0,0,0,0.9)] md:flex-[3]">
      <div className="relative aspect-[16/9] w-full bg-black sm:aspect-[16/8] lg:aspect-[16/7]">
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
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accent }}
          />
          Dominant Market Trend
        </div>

        {/* chart image from assets */}
        <img
          src={chartSrc}
          alt={isBuy ? "Buy chart" : isHold ? "Hold chart" : "Sell chart"}
          className="block h-full w-full object-contain"
          loading="lazy"
          draggable={false}
        />
      </div>
    </div>
  );
}

function ModePanel({ title, description, tone = "buy" }) {
  const isBuy = tone === "buy";
  const isHold = tone === "hold";

  const border = isBuy
    ? "border-emerald-500/35"
    : isHold
    ? "border-amber-400/40"
    : "border-red-500/35";
  const titleColor = isBuy
    ? "text-emerald-400"
    : isHold
    ? "text-amber-300"
    : "text-red-500";
  const bg =
    "bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.05),transparent_55%)]";

  return (
    <div
      className={`relative flex h-[160px] w-full max-w-[426px] items-center justify-center rounded-md border ${border} bg-black/20 ${bg} px-6 py-6 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.06)] sm:h-[170px]`}
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
        <p className="mt-4 text-[11px] leading-5 text-white/70 sm:text-xs">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhyMostTradersLose() {
  return (
    <section className="relative isolate overflow-hidden py-8 sm:py-16" id="why">
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
          Why Most Day Traders Lose
        </h2>
        <p className="mt-3 max-w-3xl text-xs leading-5 text-white/60 sm:text-sm">
          Most 15-minute traders lose because they trade without confirmation.
          They chase candles, trade against the trend, and overtrade choppy markets.
        </p>
        <div className="mt-3 text-xs font-semibold italic text-amber-450">
          ---&quot;Trading Monster AI forces discipline&quot;---
        </div>

        <div className="mt-6 grid gap-8">
          {/* Card 1 (Buy Example) */}
          <div className="mx-auto w-full max-w-6xl rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.65),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(249,115,22,0.75),transparent_55%)] p-[1px] shadow-[0_22px_80px_rgba(0,0,0,0.7)]">
            <div className="flex flex-col-reverse items-center justify-between gap-10 rounded-[30px] bg-black/90 px-4 py-8 backdrop-blur-md md:flex-row md:px-10 md:py-10">
              <MiniSignalChart variant="buy" />
              <div className="flex w-full max-w-md flex-col items-start text-left md:flex-[2]">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                  Buy Mode
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  The{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Ultimate
                  </span>{" "}
                  Trading Toolkit
                </h3>
                <p className="mt-4 text-xs leading-5 text-white/70 sm:text-sm">
                  Experience the next level of market analysis with our
                  revolutionary toolkit, seamlessly integrated into your
                  TradingView charts. Our trend‑focused signals are designed to
                  accurately identify market shifts early, giving you a clear
                  advantage in finding winning trades.
                </p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-2 text-xs font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition hover:brightness-110"
                >
                  Get Trading Monster AI
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 (Sell Example) */}
          <div className="mx-auto w-full max-w-6xl rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(248,113,113,0.7),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(55,65,81,0.9),transparent_55%)] p-[1px] shadow-[0_22px_80px_rgba(0,0,0,0.7)]">
            <div className="flex flex-col items-center justify-between gap-10 rounded-[30px] bg-black/90 px-4 py-8 backdrop-blur-md md:flex-row md:px-10 md:py-10">
              <div className="flex w-full max-w-md flex-col items-start text-left md:flex-[2]">
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-red-400">
                  Sell Mode
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  The{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Ultimate
                  </span>{" "}
                  Trading Toolkit
                </h3>
                <p className="mt-4 text-xs leading-5 text-white/70 sm:text-sm">
                  Experience the next level of market analysis with our
                  revolutionary toolkit, seamlessly integrated into your
                  TradingView charts. Our trend‑focused signals are designed to
                  accurately identify market shifts early, giving you a clear
                  advantage in finding winning trades.
                </p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-2 text-xs font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition hover:brightness-110"
                >
                  Get Trading Monster AI
                </button>
              </div>
              <MiniSignalChart variant="sell" />
            </div>
          </div>

          {/* Card 3 (Hold Example) */}
          <div className="mx-auto w-full max-w-6xl rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.75),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.7),transparent_55%)] p-[1px] shadow-[0_22px_80px_rgba(0,0,0,0.7)]">
            <div className="flex flex-col-reverse items-center justify-between gap-10 rounded-[30px] bg-black/90 px-4 py-8 backdrop-blur-md md:flex-row md:px-10 md:py-10">
              <MiniSignalChart variant="hold" />
              <div className="flex w-full max-w-md flex-col items-start text-left md:flex-[2]">
                <span className="rounded-full bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-300">
                  Hold Mode
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  The{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Ultimate
                  </span>{" "}
                  Trading Toolkit
                </h3>
                <p className="mt-4 text-xs leading-5 text-white/70 sm:text-sm">
                  Experience the next level of market analysis with our
                  revolutionary toolkit, seamlessly integrated into your
                  TradingView charts. Our trend‑focused signals are designed to
                  accurately identify market shifts early, giving you a clear
                  advantage in finding winning trades.
                </p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-2 text-xs font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition hover:brightness-110"
                >
                  Get Trading Monster AI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

