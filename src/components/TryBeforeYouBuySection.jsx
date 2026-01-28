import Button from "./ui/Button.jsx";
import tb1 from "../assets/icons/tb1.png";
import tb2 from "../assets/icons/tb2.png";
import tb3 from "../assets/icons/tb3.png";
import tbr from "../assets/icons/tbr.png";

function Step({ day, title, desc, icon }) {
  return (
    <div className="text-center">
      <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-xl bg-black/85 ring-1 ring-white/10">
        <img src={icon} alt="" className="h-7 w-7" draggable="false" />
      </div>
      <div className="mt-3 text-[10px] font-semibold tracking-wider text-white/70">
        DAY {day}
      </div>
      <div className="mt-1 text-[11px] font-extrabold tracking-wide text-amber-450">
        {title}
      </div>
      <p className="mx-auto mt-2 max-w-[260px] text-[10px] leading-4 text-white/55">
        {desc}
      </p>
    </div>
  );
}

export default function TryBeforeYouBuySection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20" id="try-before-you-buy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] bg-[#252525] p-8 ring-1 ring-white/10 sm:rounded-[38px] sm:p-12">
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
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Try Before You Buy
            </h2>

            <div className="relative mt-12">
              {/* connector line behind icons */}
              <div className="pointer-events-none absolute left-6 right-6 top-6 z-0 hidden h-px bg-white/10 sm:block" />

              <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
              <Step
                day="1"
                title="TEST SIGNALS"
                desc="See how the indicator works in real market conditions on live chart flow."
                icon={tb1}
              />
              <Step
                day="2"
                title="UNDERSTAND LOGIC"
                desc="Learn how the trend and bias filters block low‑probability trades."
                icon={tb2}
              />
              <Step
                day="3"
                title="JOIN THE ELITE"
                desc="Upgrade to the full suite and copy the rules, not emotions."
                icon={tb3}
              />
              </div>
            </div>

            <div className="mt-9 flex flex-col items-center gap-3">
              <Button
                variant="amber"
                size="sm"
                className="h-11 rounded-md px-7 text-sm font-extrabold"
              >
                Yes, I Want To Trade Smarter &gt;
              </Button>
              <div className="flex items-center gap-2 text-[11px] text-white/60">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.35)]" />
                <span>- Start 3-Day Demo Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

