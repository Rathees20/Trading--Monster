import targetIcon from "../assets/icons/target.png";
import tiImg from "../assets/ti.jpeg";

function BiasCard({ title, subtitle, tone = "green" }) {
  const isGreen = tone === "green";
  const border = isGreen ? "border-emerald-500" : "border-red-500";
  const titleColor = isGreen ? "text-[#2BFF00]" : "text-[#FF2B2B]";

  return (
    <div className={`rounded-xl border ${border} bg-black px-6 py-5`}>
      <div className={`text-[12px] font-extrabold ${titleColor}`}>
        {title}
      </div>
      <div className="mt-2 text-[13px] font-extrabold text-white">
        {subtitle}
      </div>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="rounded-2xl border border-[#E5AC1C] bg-black px-6 py-5 shadow-[0_0_0_1px_rgba(255,152,0,0.18)]">
      <div className="flex items-start gap-4">
        <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-white/10">
          <img
            src={targetIcon}
            alt="Target"
            className="h-6 w-6 object-contain"
            loading="lazy"
            draggable={false}
          />
        </div>
        <div>
          <div className="text-base font-extrabold text-white">
            3 Targets + Trailing Stop Loss
          </div>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Automatically projects high-probability exit zones based on volatility
            expansion. The trailing stop logic protects your capital as the move
            develops.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AITrendEngineSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#F6F3EC] py-14 sm:py-20"
      id="ai-trend-engine"
    >
      {/* Wider Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT: Indicators Integration */}
          <div>
            <div className="text-center text-3xl font-bold text-black lg:text-left">
              Indicator Integration
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <div className="w-full max-w-[360px] overflow-hidden rounded-3xl border border-black bg-white shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
                <img
                  src={tiImg}
                  alt="Indicators integration"
                  className="block w-full object-cover select-none"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Copy + cards */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              AI Trend Engine
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base lg:mx-0">
              The Core Engine Clearly Shows The Dominant Market Trend,
              Allowing You To Filter Out Noise Efficiently.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <BiasCard
                title="Green Bars"
                subtitle="Buy-Only Bias"
                tone="green"
              />
              <BiasCard
                title="Red Bars"
                subtitle="Sell-Only Bias"
                tone="red"
              />
            </div>

            <div className="mt-8">
              <FeatureCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
