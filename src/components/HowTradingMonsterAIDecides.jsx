import iconMarket from "../assets/icons/Mark icon.png";
import iconAITrade from "../assets/icons/Ai trade Icon.png";
import iconMTF from "../assets/icons/MTF icon.png";
import iconTradeOnOff from "../assets/icons/Trade on Trade Icon.png";

function StepCard({ icon, title, body }) {
  return (
    <div className="relative flex h-[155px] w-full flex-col items-center justify-center gap-2 rounded-[22px] border border-[#FFB41480] bg-[#FFB4141A] px-4 py-4 text-center shadow-[0_0_0_1px_rgba(255,180,20,0.18),0_0_60px_rgba(255,180,20,0.06)] backdrop-blur sm:h-[175px] sm:w-[185px] sm:gap-3 sm:rounded-[26px] sm:px-5 sm:py-5">
      <div className="grid h-10 w-10 place-items-center sm:h-11 sm:w-11">{icon}</div>
      <div className="text-[12px] font-semibold tracking-normal text-white sm:text-[13px]">
        {title}
      </div>
      <p className="text-[10px] leading-4 text-white/65 sm:text-[10.5px]">{body}</p>
    </div>
  );
}

function IconImg({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-6 w-6 object-contain"
      loading="lazy"
      draggable={false}
    />
  );
}

export default function HowTradingMonsterAIDecides() {
  return (
    <section className="relative overflow-hidden py-6 sm:py-16" id="how-it-decides">
      {/* subtle section glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_25%,rgba(255,176,32,0.12),transparent_62%),radial-gradient(760px_380px_at_15%_55%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/40" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-xl font-bold leading-snug tracking-normal sm:text-3xl">
            How Trading Monster AI Decides
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-[11px] leading-5 text-white/60 sm:mt-3 sm:text-sm">
            Multi-Layer Confirmation ensures you only trade when the odds are stacked in your favor.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-10">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-8">
            <StepCard
              icon={<IconImg src={iconMarket} alt="Market data icon" />}
              title="Market Data"
              body="Real-Time Intake Of Price, Volume, And Volatility Metrics."
            />
            <StepCard
              icon={<IconImg src={iconAITrade} alt="AI trend engine icon" />}
              title="AI Trend Engine"
              body="Algorithms Filter Noise To Define The Dominant Institutional Flow."
            />
            <StepCard
              icon={<IconImg src={iconMTF} alt="MTF validator icon" />}
              title="MTF Validator"
              body="Triple-Confirmation Across Higher Timeframes For Maximum Safety."
            />
            <StepCard
              icon={<IconImg src={iconTradeOnOff} alt="Trade or no trade icon" />}
              title="TRADE OR NO TRADE."
              body="The System Decides Based On Confirmation. No Emotions Involved."
            />
          </div>
        </div>

        

        <div className="mt-10 border-t border-white/10 sm:mt-12" />
      </div>
    </section>
  );
}

