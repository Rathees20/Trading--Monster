import Button from "./ui/Button.jsx";
import tb1 from "../assets/icons/tb1.png";
import tb2 from "../assets/icons/tb2.png";
import tb3 from "../assets/icons/tb3.png";
import tbr from "../assets/icons/tbr.png";

function Step({ day, title, desc, icon }) {
  return (
    <div className="text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-black/55 ring-1 ring-white/10">
        <img src={icon} alt="" className="h-6 w-6" draggable="false" />
      </div>
      <div className="mt-3 text-[10px] font-semibold tracking-wider text-white/70">
        DAY {day}
      </div>
      <div className="mt-1 text-[11px] font-extrabold tracking-wide text-amber-450">
        {title}
      </div>
      <p className="mx-auto mt-2 max-w-[220px] text-[10px] leading-4 text-white/55">
        {desc}
      </p>
    </div>
  );
}

export default function TryBeforeYouBuySection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16" id="try-before-you-buy">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.55))] p-6 ring-1 ring-white/10 sm:rounded-[34px] sm:p-10">
          {/* inner glow + top-right corner graphic */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(820px_320px_at_50%_0%,rgba(255,255,255,0.06),transparent_62%),radial-gradient(700px_300px_at_50%_85%,rgba(255,176,32,0.10),transparent_62%)]" />
            <img
              src={tbr}
              alt=""
              className="absolute right-6 top-4 h-24 w-24 select-none opacity-[0.10]"
              draggable="false"
            />
            <div className="absolute inset-6 rounded-[26px] ring-1 ring-white/5" />
          </div>

          <div className="relative">
            <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
              Try Before You Buy
            </h2>

            <div className="relative mt-10">
              {/* connector line behind icons */}
              <div className="pointer-events-none absolute left-6 right-6 top-6 hidden h-px bg-white/10 sm:block" />

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
                className="h-9 rounded-full px-5 text-[11px] font-extrabold"
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

