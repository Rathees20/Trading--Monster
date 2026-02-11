import iconMarket from "../assets/icons/Mark icon.png";
import iconAITrade from "../assets/icons/Ai trade Icon.png";
import iconMTF from "../assets/icons/MTF icon.png";
import iconTradeOnOff from "../assets/icons/Trade on Trade Icon.png";

/* ================= STEP CARD ================= */

function StepCard({ icon, title, body }) {
  return (
    <div className="relative flex min-h-[170px] w-full flex-col items-center justify-center gap-3 rounded-[26px] border border-[#FFB41480] bg-[#FFB4141A] px-4 py-6 text-center shadow-[0_0_0_1px_rgba(255,180,20,0.18),0_0_60px_rgba(255,180,20,0.06)] backdrop-blur transition duration-300 hover:scale-[1.03] sm:px-6">
      
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center">
        {icon}
      </div>

      {/* Title */}
      <div className="text-[16px] font-semibold text-white sm:text-[18px]">
        {title}
      </div>

      {/* Body */}
      <p className="text-[13px] leading-5 text-white/65 sm:text-[14px]">
        {body}
      </p>
    </div>
  );
}

/* ================= ICON IMAGE ================= */

function IconImg({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-8 w-8 object-contain"
      loading="lazy"
      draggable={false}
    />
  );
}

/* ================= MAIN SECTION ================= */

export default function HowTradingMonsterAIDecides() {
  return (
    <section
      className="relative overflow-hidden py-12 sm:py-20"
      id="how-it-decides"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_25%,rgba(255,176,32,0.14),transparent_65%),radial-gradient(800px_400px_at_15%_55%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/40" />
      </div>

      {/* Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-4xl">
            How Trading Monster AI Decides
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/60 sm:text-base">
            Multi-Layer Confirmation ensures you only trade when the odds are
            stacked in your favor.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-10">
            
            <StepCard
              icon={<IconImg src={iconMarket} alt="Market data icon" />}
              title="Market Data"
              body="Real-Time Analysis Of Price And Volatility Metrics."
            />

            <StepCard
              icon={<IconImg src={iconAITrade} alt="AI trend engine icon" />}
              title="AI Trend Engine"
              body="Algorithms Filter Noise To Define The Dominant Institutional Flow."
            />

            <StepCard
              icon={<IconImg src={iconMTF} alt="MTF validator icon" />}
              title="MTF Validator"
              body="Triple-Confirmation Across Higher Timeframes For High Probability Signals."
            />

            <StepCard
              icon={<IconImg src={iconTradeOnOff} alt="Trade or no trade icon" />}
              title="TRADE OR NO TRADE"
              body="The System Decides Using Advanced Proprietary Logic."
            />

          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 border-t border-white/10" />
      </div>
    </section>
  );
}
