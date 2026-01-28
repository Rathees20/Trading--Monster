import logoImg from "../assets/logo.png";

export default function TradingMonsterFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black/10 py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex w-full flex-col items-center gap-2 sm:w-auto sm:items-start sm:gap-3">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Trading Monster" className="h-10 w-10" draggable="false" />
              <div className="text-xs font-semibold tracking-wide text-white/90">
                TRADING <span className="text-amber-450">MONSTER</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* full-width divider (end-to-end) */}
      <div className="mt-6 border-t border-white/10 sm:mt-10" />

      <div className="mx-auto max-w-6xl px-4 pt-8 text-center sm:px-6">
        <div className="text-[10px] font-semibold tracking-widest text-white/35">
          RISK DISCLAIMER
        </div>
        <p className="mx-auto mt-3 max-w-4xl text-[10px] leading-5 text-white/35">
          Trading Forex on margin carries a high level of risk and may not be suitable for all investors. High
          leverage can work against you as well as for you. Before deciding to trade Forex, you should carefully
          consider your investment objectives, level of experience, and risk appetite. Trading Monster AI is a
          decision-support system, not a guaranteed profit generator. Past performance is not indicative of future
          results.
        </p>
      </div>

      {/* full-width divider (end-to-end) above copyright */}
      <div className="mt-8 border-t border-white/10" />

      <div className="mx-auto max-w-6xl px-4 pt-6 text-center sm:px-6">
        <div className="text-[10px] text-white/35">
          © {new Date().getFullYear()} TRADING MONSTER. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

