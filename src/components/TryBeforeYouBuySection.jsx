import { useEffect, useRef } from "react";
import Button from "./ui/Button.jsx";
import tb1 from "../assets/icons/tb1.png";
import tb2 from "../assets/icons/tb2.png";
import tb3 from "../assets/icons/tb3.png";
import tbr from "../assets/icons/tbr.png";

function Step({ day, title, desc, icon }) {
  return (
    <div className="mx-auto w-full max-w-[520px] shrink-0 snap-center text-center sm:max-w-none sm:snap-start">
      <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-xl bg-black/85 ring-1 ring-white/10">
        <img src={icon} alt="" className="h-7 w-7" draggable="false" />
      </div>
      <div className="mt-3 text-[10px] font-semibold tracking-wider text-white/70">
        DAY {day}
      </div>
      <div className="mt-1 text-[11px] font-semibold tracking-wide text-amber-450">
        {title}
      </div>
      <p className="mx-auto mt-2 max-w-[260px] text-[10px] leading-4 text-white/55">
        {desc}
      </p>
    </div>
  );
}

export default function TryBeforeYouBuySection() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(min-width: 640px)").matches;
    if (isDesktop) return;

    let intervalId = null;
    let resumeTimeoutId = null;

    const getSlides = () => Array.from(el.children);

    const getCurrentIndex = (slides) => {
      const viewportCenter = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      for (let i = 0; i < slides.length; i += 1) {
        const s = slides[i];
        const slideCenter = s.offsetLeft + s.clientWidth / 2;
        const dist = Math.abs(slideCenter - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      }
      return bestIdx;
    };

    const scrollToIndex = (idx) => {
      const slides = getSlides();
      if (!slides.length) return;
      const slide = slides[idx % slides.length];
      const left = slide.offsetLeft + slide.clientWidth / 2 - el.clientWidth / 2;
      el.scrollTo({ left, behavior: "smooth" });
    };

    const start = () => {
      if (intervalId) return;
      intervalId = window.setInterval(() => {
        const slides = getSlides();
        if (slides.length <= 1) return;
        const current = getCurrentIndex(slides);
        scrollToIndex(current + 1);
      }, 3800);
    };

    const stop = () => {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
      if (resumeTimeoutId) {
        window.clearTimeout(resumeTimeoutId);
        resumeTimeoutId = null;
      }
    };

    const pauseThenResume = () => {
      stop();
      resumeTimeoutId = window.setTimeout(() => start(), 5500);
    };

    start();
    el.addEventListener("pointerdown", pauseThenResume, { passive: true });
    el.addEventListener("touchstart", pauseThenResume, { passive: true });
    el.addEventListener("wheel", pauseThenResume, { passive: true });

    return () => {
      stop();
      el.removeEventListener("pointerdown", pauseThenResume);
      el.removeEventListener("touchstart", pauseThenResume);
      el.removeEventListener("wheel", pauseThenResume);
    };
  }, []);

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
            <h2 className="text-center text-3xl font-bold leading-snug tracking-normal sm:text-4xl">
              Try Before You Buy
            </h2>

            <div className="relative mt-12">
              {/* connector line behind icons */}
              <div className="pointer-events-none absolute left-6 right-6 top-6 z-0 hidden h-px bg-white/10 sm:block" />

              <div
                ref={scrollerRef}
                className="-mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0"
              >
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

