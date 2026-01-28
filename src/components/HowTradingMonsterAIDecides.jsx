import { useRef } from "react";
import iconMarket from "../assets/icons/Mark icon.png";
import iconAITrade from "../assets/icons/Ai trade Icon.png";
import iconMTF from "../assets/icons/MTF icon.png";
import iconTradeOnOff from "../assets/icons/Trade on Trade Icon.png";

function StepCard({ icon, title, body }) {
  return (
    <div className="relative flex h-[190px] w-full shrink-0 snap-center flex-col items-center justify-center gap-3 rounded-[26px] border border-[#FFB41480] bg-[#FFB4141A] px-5 py-5 text-center shadow-[0_0_0_1px_rgba(255,180,20,0.18),0_0_60px_rgba(255,180,20,0.06)] backdrop-blur sm:h-[175px] sm:w-[185px]">
      <div className="grid h-11 w-11 place-items-center">{icon}</div>
      <div className="text-[13px] font-semibold tracking-normal text-white">{title}</div>
      <p className="text-[10.5px] leading-4 text-white/65">{body}</p>
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
  const scrollerRef = useRef(null);

  function scrollByPage(direction) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden py-14 sm:py-16" id="how-it-decides">
      {/* subtle section glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_25%,rgba(255,176,32,0.12),transparent_62%),radial-gradient(760px_380px_at_15%_55%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/40" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-snug tracking-normal sm:text-3xl">
            How Trading Monster AI Decides
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-xs leading-5 text-white/60 sm:text-sm">
            Multi-Layer Confirmation ensures you only trade when the odds are stacked in your favor.
          </p>
        </div>

        <div className="relative mt-10">
          {/* Mobile slider arrows */}
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByPage(-1)}
            className="absolute left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white/85 ring-1 ring-white/15 backdrop-blur transition hover:bg-black/65 active:scale-95 sm:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByPage(1)}
            className="absolute right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white/85 ring-1 ring-white/15 backdrop-blur transition hover:bg-black/65 active:scale-95 sm:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            ref={scrollerRef}
            className=" -mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-8 sm:overflow-visible sm:px-0 sm:pb-0"
          >
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

        <div className="mt-8 flex justify-center">
          <div className="rounded-full border border-[#FFB41480] bg-[#FFB4141A] px-5 py-2 text-[10px] font-semibold text-white/75 shadow-[0_0_0_1px_rgba(255,180,20,0.10)] backdrop-blur">
            Highlight Rule: &quot;If Confirmation Fails, The Trade Is Blocked.&quot;
          </div>
        </div>

        <div className="mt-12 border-t border-white/10" />
      </div>
    </section>
  );
}

