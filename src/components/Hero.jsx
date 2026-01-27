import Badge from "./ui/Badge.jsx";
import Button from "./ui/Button.jsx";
import VideoCard from "./ui/VideoCard.jsx";
import heroBg from "../assets/bacground hero.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero background image: `src/assets/bacground hero.jpg` */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/65" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-12 sm:pb-20 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Badge>PROFESSIONAL AI TRADING SYSTEM</Badge>

            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-white">TRADING</span>
              <span className="block text-amber-450">MONSTER AI</span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-sm leading-6 text-white/70 sm:text-base">
              Professional AI Trend Trading System
              <br />
              Built for 15-Minute Forex Traders.
            </p>

            <p className="mt-4 max-w-xl text-xs font-bold tracking-wider text-amber-450/95">
              AI THAT THINKS IN TRENDS, NOT EMOTIONS.
            </p>

            <div className="mt-7 grid max-w-xl gap-5 sm:grid-cols-2">
              <ul className="space-y-3 text-sm font-semibold text-amber-450/90">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  15-Minute Optimized
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  MTT Indicator
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  Telegram Support
                </li>
              </ul>
              <ul className="space-y-3 text-sm font-semibold text-amber-450/90">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  AI Trend Engine
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  3-Day Demo
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  Institutional Rules
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-9">
              <Button
                variant="amber"
                className="h-10 w-full rounded-xl px-5 text-sm font-semibold tracking-wide sm:w-auto"
              >
                Yes, I Want To Trade Smarter &gt;
              </Button>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.35)]" />
                <span>- Start 3-Day Demo Now</span>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:pl-6">
            <VideoCard />
          </div>
        </div>
      </div>
    </section>
  );
}

