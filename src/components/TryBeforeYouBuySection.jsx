import Button from "./ui/Button.jsx";
import tbr from "../assets/icons/tbr.png";

export default function TryBeforeYouBuySection() {
  const telegramUrl = "https://t.me/tradingmonsterpro";

  return (
    <section className="relative overflow-hidden py-10 sm:py-20" id="try-before-you-buy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] bg-[#252525] p-6 ring-1 ring-white/10 sm:rounded-[38px] sm:p-12">
          {/* inner glow + top-right corner graphic */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(820px_320px_at_50%_0%,rgba(255,255,255,0.06),transparent_62%),radial-gradient(700px_300px_at_50%_85%,rgba(255,176,32,0.10),transparent_62%)]" />
            <img
              src={tbr}
              alt=""
              className="absolute right-5 top-5 h-28 w-28 select-none opacity-[5.14] sm:right-7 sm:top-5 sm:h-32 sm:w-32"
              draggable="false"
            />
          </div>

          <div className="relative">
            <h2 className="text-center text-2xl font-bold leading-snug tracking-normal sm:text-4xl">
               Start Your{" "}
              <span className="text-amber-450">3-Day Free Trial</span>
            </h2>

            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
            <a href="#trial-form" className="inline-block w-full sm:w-auto">
                <Button
                  variant="amber"
                  className="h-10 w-full rounded-xl px-5 text-sm font-semibold tracking-wide sm:w-auto"
                >
                  Get 3 Days Free Demo &gt;
                </Button>
              </a>
              <div className="flex items-center gap-2 text-[11px] text-white/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.35)]" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

