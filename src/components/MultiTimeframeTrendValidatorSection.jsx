import acImg from "../assets/ac.jpeg";
import mbImg from "../assets/mb.png";
import tdImg from "../assets/td.png";
import Button from "./ui/Button.jsx";

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
        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-5">
              <a href="#trial-form" className="inline-block w-full sm:w-auto">
                <Button
                  variant="amber"
                  className="h-10 w-full rounded-xl px-5 text-sm font-semibold tracking-wide sm:w-auto"
                >
                  Get 3 Days Free Demo &gt;
                </Button>
              </a>
              <div className="mt-0 flex items-center gap-2 text-xs text-white/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.35)]" />
                <span>No Credit Card Required</span>
              </div>
            </div>
        {/* Market Bias and Trade Decision cards removed as requested */}
      </div>
    </section>
  );
}

