import targetIcon from "../assets/icons/target.png";
import tiImg from "../assets/ti.jpeg";

function BiasCard({ title, subtitle, tone = "green" }) {
  const isGreen = tone === "green";
  const border = isGreen ? "border-emerald-500" : "border-red-500";
  const titleColor = isGreen ? "text-[#2BFF00]" : "text-[#FF2B2B]";

  return (
    <div className={`w-full rounded-3xl border ${border} bg-black px-8 py-7`}>
      <div className={`text-[15px] font-extrabold ${titleColor}`}>
        {title}
      </div>
      <div className="mt-3 text-base font-extrabold text-white">
        {subtitle}
      </div>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="w-full rounded-3xl border border-[#E5AC1C] bg-black px-8 py-7 shadow-[0_0_0_1px_rgba(255,152,0,0.18)]">
      <div className="flex items-start gap-5">
        <div className="mt-1 grid h-12 w-12 place-items-center rounded-xl bg-white/10">
          <img
            src={targetIcon}
            alt="Target"
            className="h-7 w-7 object-contain"
            loading="lazy"
            draggable={false}
          />
        </div>

        <div>
          <div className="text-lg font-extrabold text-white">
            3 Targets + Trailing Stop Loss
          </div>
          <p className="mt-3 text-base leading-7 text-white/65">
            Automatically projects high-probability exit zones based on
            volatility expansion. The trailing stop logic protects your
            capital as the move develops.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AITrendEngineSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#F6F3EC] py-16 sm:py-24"
      id="ai-trend-engine"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Increased Right Side Weight */}
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          
          {/* LEFT */}
          <div>
            <div className="text-center text-3xl font-bold text-black lg:text-left">
              Indicator Integration
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="w-full max-w-[420px] overflow-hidden rounded-3xl border border-black bg-white shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
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

          {/* RIGHT - WIDER */}
          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-bold text-slate-900">
              AI Trend Engine
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:mx-0">
              The core engine clearly shows the dominant market trend,
              allowing you to filter out noise efficiently.
            </p>

            {/* Bigger Bias Cards */}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
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

            {/* Bigger Feature Card */}
            <div className="mt-10">
              <FeatureCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}