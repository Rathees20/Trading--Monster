import Badge from "./ui/Badge.jsx";
import Button from "./ui/Button.jsx";
import VideoCard from "./ui/VideoCard.jsx";
import heroBg from "../assets/bacground hero.jpg";
import heroVideo from "../assets/hero video.mov";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Hero background image: `src/assets/bacground hero.jpg` */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/65" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-5 pb-10 sm:px-6 sm:pt-8 sm:pb-14 lg:pt-8 lg:pb-12">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-10">
          {/* Video first on mobile so it shows above-the-fold */}
          <div className="order-1 mt-2 lg:order-2 lg:mt-0">
            {/* Mobile-only heading above the video */}
            <h1 className="mb-5 text-center text-4xl font-bold leading-[1.05] tracking-normal text-white sm:text-6xl lg:hidden">
              TRADING <span className="text-amber-450">MONSTER AI</span>
            </h1>
            {/* Mobile-only badge below the heading */}
            <div className="mb-4 flex justify-center lg:hidden">
              <Badge>Professional AI Trend Trading System</Badge>
            </div>
            <VideoCard src={heroVideo} />
          </div>

          <div className="order-2 lg:order-1">
            {/* Desktop badge (hidden on mobile) */}
            <div className="hidden lg:block">
              <Badge>PROFESSIONAL AI TRADING SYSTEM</Badge>
            </div>

            {/* Desktop heading (hidden on mobile) */}
            <h1 className="mt-5 hidden text-balance text-4xl font-bold leading-[1.05] tracking-normal sm:text-6xl lg:block lg:text-6xl xl:text-7xl">
              <span className="block text-white">TRADING</span>
              <span className="block text-amber-450">MONSTER AI</span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-sm leading-6 text-white/70 sm:text-base">
              Professional AI Trend Trading System
              <br />
              Built for intraday traders.
            </p>

            <p className="mt-4 max-w-xl text-xs font-semibold tracking-wide text-amber-450/95 sm:text-sm">
              AI THAT THINKS IN TRENDS, NOT EMOTIONS.
            </p>

            <div className="mt-7 grid max-w-xl grid-cols-2 gap-5">
              <ul className="space-y-3 text-sm font-semibold text-amber-450/90">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  MTF Validator
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  Telegram Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  15-Minute Optimized 
                </li>
              </ul>
              <ul className="space-y-3 text-sm font-semibold text-amber-450/90">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  AI Trend Engine
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  Access in Trading View
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-450/90 shadow-glow" />
                  Institutional Rules
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-9">
              <a href="#trial-form" className="inline-block w-full sm:w-auto">
                <Button
                  variant="amber"
                  className="h-10 w-full rounded-xl px-5 text-sm font-semibold tracking-wide sm:w-auto"
                >
                  Get 3 Days Free Demo &gt;
                </Button>
              </a>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.35)]" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

