import acImg from "../assets/ac.png";
import mbImg from "../assets/mb.png";
import tdImg from "../assets/td.png";

function CardShell({ children, className = "" }) {
  return (
    <div
      className={`tm-card rounded-[28px] border border-white/10 bg-black/20 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function AlignmentCheckCard() {
  return (
    <div className="mx-auto max-w-3xl">
      <CardShell className="p-4 sm:p-5">
        <img
          src={acImg}
          alt="Alignment Check"
          className="block w-full rounded-2xl border border-white/10 bg-black/30"
          draggable="false"
        />
      </CardShell>
      <div className="mt-3 text-center text-sm font-extrabold text-white">Alignment Check</div>
    </div>
  );
}

function MarketBiasCard() {
  return (
    <div>
      <img
        src={mbImg}
        alt="Market Bias"
        className="mx-auto block w-full max-w-[420px] rounded-[22px] bg-white p-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
        draggable="false"
      />
      <div className="mt-3 text-center text-sm font-extrabold text-white">Market Bias</div>
    </div>
  );
}

function TradeDecisionCard() {
  return (
    <div>
      <img
        src={tdImg}
        alt="Trade Decision"
        className="mx-auto block w-full max-w-[420px] rounded-[22px] bg-white p-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
        draggable="false"
      />
      <div className="mt-3 text-center text-sm font-extrabold text-white">Trade Decision</div>
    </div>
  );
}

export default function MultiTimeframeTrendValidatorSection() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16" id="mtf-validator">
      {/* keep it consistent with the dark theme */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/35" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-snug tracking-normal sm:text-3xl">
            Multi-Timeframe Trend Validator
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-xs leading-5 text-white/60 sm:text-sm">
            The Ultimate Filtering Layer. If the Timeframes Don&apos;t Align, There&apos;s No Trade. Period.
          </p>
        </div>

        <div className="mt-8">
          <AlignmentCheckCard />
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10">
          <MarketBiasCard />
          <TradeDecisionCard />
        </div>
      </div>
    </section>
  );
}

