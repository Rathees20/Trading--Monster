import targetIcon from "../assets/icons/target.png";
import tiImg from "../assets/ti.jpeg";

function BiasCard({ title, subtitle, tone = "green" }) {
  const isGreen = tone === "green";
  const border = isGreen ? "border-emerald-500" : "border-red-500";
  const titleColor = isGreen ? "text-[#2BFF00]" : "text-[#FF2B2B]";

  return (
    <div className={`rounded-xl border ${border} bg-black px-5 py-4`}>
      <div className={`text-[11px] font-extrabold ${titleColor}`}>{title}</div>
      <div className="mt-2 text-[12px] font-extrabold text-white">{subtitle}</div>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="rounded-2xl border border-[#E5AC1C] bg-black px-5 py-4 shadow-[0_0_0_1px_rgba(255,152,0,0.18)]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-sky-300">
          <img
            src={targetIcon}
            alt="Target"
            className="h-5 w-5 object-contain"
            loading="lazy"
            draggable={false}
          />
        </div>
        <div>
          <div className="text-sm font-extrabold text-white">3 Targets + Trailing Stop</div>
          <p className="mt-1 text-[10.5px] leading-5 text-white/65">
            Automatically projects high-probability exit zones based on volatility expansion. The trailing stop logic
            protects your capital as the move develops.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AITrendEngineSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#F6F3EC] py-10 text-slate-900 sm:py-16"
      id="ai-trend-engine"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="p-0 sm:p-2">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            {/* LEFT: Indicators Integration */}
            <div>
              <div className="text-center text-2xl font-bold text-black">
                Indicators Integration
              </div>

              <div className="mt-4 flex justify-center">
                <div className="w-full max-w-[280px] overflow-hidden rounded-2xl border border-black bg-white shadow-[0_18px_55px_rgba(0,0,0,0.10)]">
                  <img
                    src={tiImg}
                    alt="Indicators integration"
                    className="block w-full select-none object-cover"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Copy + cards */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold leading-snug tracking-normal text-slate-900 sm:text-3xl">
                AI Trend Engine
              </h3>
              <p className="mx-auto mt-3 max-w-md text-center text-xs leading-5 text-slate-600 sm:text-sm lg:mx-0 lg:text-left">
                The Core Engine Clearly Shows The Dominant Market Trend, Allowing You To Filter Out Noise Efficiently.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <BiasCard title="Green Bars" subtitle="Buy-Only Bias" tone="green" />
                <BiasCard title="Red Bars" subtitle="Sell-Only Bias" tone="red" />
              </div>

              <div className="mt-5">
                <FeatureCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

