import acImg from "../assets/ac.jpeg";
import mbImg from "../assets/mb.png";
import tdImg from "../assets/td.png";
import Button from "./ui/Button.jsx";

function CardShell({ children, className = "" }) {
  return (
    <div
      className={`tm-card rounded-[32px] border border-white/10 bg-black/20 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
function AlignmentCheckCard() {
  return (
    <div className="w-full">
      <CardShell className="p-6 sm:p-8">
        <img
          src={acImg}
          alt="Alignment Check"
          className="block w-full rounded-3xl border border-white/10 bg-black/30"
          draggable="false"
        />
      </CardShell>
    </div>
  );
}


export default function MultiTimeframeTrendValidatorSection() {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20"
      id="mtf-validator"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/40" />
      </div>

      {/* Wider Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl 2xl:text-5xl">
            Multi-Timeframe Trend Validator
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-6 text-white/60 ">
            The Ultimate Filtering Layer. If the Timeframes Don&apos;t Align,
            There&apos;s No Trade.
          </p>
        </div>

        {/* Alignment Card */}
        <div className="mt-12">
          <AlignmentCheckCard />
        </div>

        {/* CTA Section */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <a href="#trial-form" className="inline-block w-full sm:w-auto">
            <Button
              variant="amber"
              className="h-12 w-full rounded-xl px-8 text-base font-semibold tracking-wide sm:w-auto"
            >
              Get 3 Days Free Demo &gt;
            </Button>
          </a>

          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.35)]" />
            <span>No Credit Card Required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
