import { useState, useRef, useEffect } from "react";
import Button from "./ui/Button.jsx";
import t5Image from "../assets/t5.jpeg"; // Same image used in ScannerPro for Momentum Scanner

const scannerData = {
  USD: [
    { pair: "EURUSD", momentum: 457, zone: "buy" },
    { pair: "GBPUSD", momentum: 312, zone: "buy" },
    { pair: "USDJPY", momentum: -642, zone: "sell" },
    { pair: "USDCAD", momentum: -124, zone: "sell" },
    { pair: "AUDUSD", momentum: 521, zone: "buy" },
    { pair: "NZDUSD", momentum: 189, zone: "buy" },
    { pair: "USDCHF", momentum: -345, zone: "sell" },
  ],
  EUR: [
    { pair: "EURJPY", momentum: -854, zone: "sell" },
    { pair: "EURGBP", momentum: -380, zone: "sell" },
    { pair: "EURAUD", momentum: 172, zone: "buy" },
    { pair: "EURNZD", momentum: 237, zone: "buy" },
    { pair: "EURCAD", momentum: -298, zone: "sell" },
    { pair: "EURCHF", momentum: -214, zone: "sell" },
  ],
  GBP: [
    { pair: "GBPJPY", momentum: 512, zone: "buy" },
    { pair: "GBPAUD", momentum: -145, zone: "sell" },
    { pair: "GBPNZD", momentum: 623, zone: "buy" },
    { pair: "GBPCAD", momentum: -89, zone: "sell" },
  ],
  JPY: [
    { pair: "NZDJPY", momentum: 457, zone: "buy" },
    { pair: "AUDJPY", momentum: 231, zone: "buy" },
    { pair: "CADJPY", momentum: -564, zone: "sell" },
    { pair: "CHFJPY", momentum: 178, zone: "buy" },
  ],
  NZD: [
    { pair: "NZDCAD", momentum: 195, zone: "buy" },
    { pair: "NZDCHF", momentum: -412, zone: "sell" },
  ],
  CAD: [
    { pair: "CADCHF", momentum: 112, zone: "buy" },
  ],
  CHF: [
    { pair: "CHFJPY", momentum: 289, zone: "buy" },
  ],
  AUD: [
    { pair: "AUDCAD", momentum: -321, zone: "sell" },
    { pair: "AUDNZD", momentum: 45, zone: "buy" },
  ]
};

export default function HomeHeroThird() {
  const [activeCurrency, setActiveCurrency] = useState("USD");
  const currencies = ["USD", "EUR", "GBP", "JPY", "NZD", "CAD", "CHF", "AUD"];

  const scrollContainerRef = useRef(null);

  // Auto-cycling logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCurrency((prev) => {
        const currentIndex = currencies.indexOf(prev);
        const nextIndex = (currentIndex + 1) % currencies.length;

        // Optionally scroll the container to keep active item in view if it overflows
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const items = container.children;
          if (items[nextIndex]) {
            const item = items[nextIndex];
            const containerWidth = container.offsetWidth;
            const itemLeft = item.offsetLeft;
            const itemWidth = item.offsetWidth;

            // Scroll to center the active item
            container.scrollTo({
              left: itemLeft - (containerWidth / 2) + (itemWidth / 2),
              behavior: 'smooth'
            });
          }
        }

        return currencies[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currencies]);

  const currentData = scannerData[activeCurrency] || [];

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-normal text-white sm:text-4xl lg:text-[44px]">
            Momentum Scanner
            <span className="mt-2 block text-amber-450">for Currency</span>
          </h2>
        </div>

        {/* Main Card Layout */}
        <div className="relative group w-full rounded-[32px] border border-white/10 bg-black/40 p-4 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-amber-450/20 sm:p-6 lg:p-8">
          
          {/* Top of Card: Currency Tabs (Moving Words) */}
          <div className="mb-8 flex flex-col items-center justify-between gap-6 border-b border-white/5 pb-8 lg:flex-row">
            <div className="w-full lg:w-3/4">
              <div
                ref={scrollContainerRef}
                className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-hide sm:gap-10 text-xl font-black uppercase italic"
              >
                <style dangerouslySetInnerHTML={{
                  __html: `
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
              `}} />

                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setActiveCurrency(curr)}
                    className={[
                      "relative transition-all duration-300 flex-shrink-0",
                      activeCurrency === curr ? "text-amber-450 scale-110" : "text-white/30 hover:text-white/70"
                    ].join(" ")}
                  >
                    {curr}
                    <div
                      className={[
                        "absolute -bottom-2 left-0 h-[2px] bg-amber-450 transition-all duration-500 ease-out",
                        activeCurrency === curr ? "w-full opacity-100" : "w-0 opacity-0"
                      ].join(" ")}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-amber-450/70 opacity-60">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-450 animate-pulse" />
              Real-Time Updates
            </div>
          </div>

          {/* Middle of Card: Split Proportions (Chart Left, Table Right) */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            
            {/* Left Column: Chart (Image) */}
            <div className="lg:col-span-8">
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 shadow-inner">
                <img
                  src={t5Image}
                  alt="tradingview-momentum-scanner-dashboard"
                  className="w-full h-auto object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Dynamic Table */}
            <div className="lg:col-span-4 h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-md">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-black uppercase tracking-widest text-white/40">Pair</span>
                  <span className="text-xs font-black uppercase tracking-widest text-white/40">Momentum</span>
                </div>
                
                <div className="flex flex-col gap-2">
                  {currentData.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between rounded-lg bg-black/30 p-3 ring-1 ring-white/5 transition-all hover:bg-black/50 hover:ring-white/20 animate-fade-in"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <span className="text-sm font-black italic tracking-tight text-white">{item.pair}</span>
                      <div className="flex items-center gap-3">
                        <span className={[
                          "text-sm font-black",
                          item.zone === 'buy' ? "text-emerald-400" : "text-rose-400"
                        ].join(" ")}>
                          {item.momentum > 0 ? `+${item.momentum}` : item.momentum}
                        </span>
                        <span className={[
                          "rounded px-1.5 py-0.5 text-[9px] font-black uppercase",
                          item.zone === 'buy' ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                        ].join(" ")}>
                          {item.zone}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 text-center">
                   <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Live Data Feed Enabled</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom of Card: Action Row */}
          <div className="mt-10 flex flex-col items-center justify-center gap-6 pt-8 border-t border-white/5 sm:flex-row sm:justify-between">
             <div className="hidden sm:flex flex-col">
                <p className="text-sm font-black italic text-white/40 uppercase">Secure your demo access</p>
                <div className="mt-1 flex items-center gap-1.5">
                   <div className="h-1 w-12 rounded-full bg-amber-450/40" />
                   <div className="h-1 w-4 rounded-full bg-amber-450" />
                </div>
             </div>

             <a href="#trial-form" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="h-14 w-full sm:w-[320px] rounded-2xl border-2 border-white px-10 text-[18px] font-black uppercase tracking-widest text-white hover:border-amber-450 hover:bg-amber-450 hover:text-black hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all bg-transparent shadow-[0_20px_60px_rgba(0,0,0,0.5)] active:translate-y-1"
                >
                  Get 3 day free demo
                </Button>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
