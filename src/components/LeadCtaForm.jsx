import Button from "./ui/Button.jsx";

function Star({ className = "" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 17.3 6.18 20.7l1.56-6.63L2.5 9.8l6.9-.6L12 2.9l2.6 6.3 6.9.6-5.24 4.27 1.56 6.63L12 17.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function QuoteMark() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="text-[#6B0F13]/55"
    >
      <path
        d="M8.5 11.2c-1.2 0-2.1.4-2.8 1.1-.7.7-1 1.6-1 2.7 0 1.1.4 2 1.1 2.8.8.8 1.7 1.2 2.8 1.2 1.1 0 2-.4 2.8-1.2.8-.8 1.2-1.7 1.2-2.8V8.2c0-1.8.5-3.2 1.6-4.2 1.1-1 2.5-1.5 4.2-1.5v2.2c-1.1 0-2 .3-2.6.9-.6.6-.9 1.5-.9 2.6v.6c.6.1 1.1.4 1.5.9.5.6.7 1.3.7 2.1 0 1.1-.4 2-1.2 2.8-.8.8-1.7 1.2-2.8 1.2s-2-.4-2.8-1.2c-.8-.8-1.2-1.7-1.2-2.8 0-1.1.3-2 .9-2.7.6-.7 1.4-1.1 2.3-1.2V8.2c0-.9.1-1.7.4-2.5-1 .4-1.8 1-2.3 1.8-.6.9-.9 2-.9 3.4v.3Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M18.6 11.2c-1.2 0-2.1.4-2.8 1.1-.7.7-1 1.6-1 2.7 0 1.1.4 2 1.1 2.8.8.8 1.7 1.2 2.8 1.2 1.1 0 2-.4 2.8-1.2.8-.8 1.2-1.7 1.2-2.8V8.2c0-1.8.5-3.2 1.6-4.2 1.1-1 2.5-1.5 4.2-1.5v2.2c-1.1 0-2 .3-2.6.9-.6.6-.9 1.5-.9 2.6v.6c.6.1 1.1.4 1.5.9.5.6.7 1.3.7 2.1 0 1.1-.4 2-1.2 2.8-.8.8-1.7 1.2-2.8 1.2s-2-.4-2.8-1.2c-.8-.8-1.2-1.7-1.2-2.8 0-1.1.3-2 .9-2.7.6-.7 1.4-1.1 2.3-1.2V8.2c0-.9.1-1.7.4-2.5-1 .4-1.8 1-2.3 1.8-.6.9-.9 2-.9 3.4v.3Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

function TestimonialCard({ quote, name, role, initials }) {
  return (
    <div className="relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[#0E0E10] px-7 py-7 shadow-[0_22px_70px_rgba(0,0,0,0.45)]">
      <div className="absolute right-6 top-6 opacity-80">
        <QuoteMark />
      </div>

      <div className="flex items-center gap-1 text-[#FFB414]">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>

      <p className="mt-5 text-[14px] leading-6 text-white/80">{quote}</p>

      <div className="mt-8 flex items-center gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#F97316] to-[#FBBF24] text-[13px] font-extrabold text-white">
          {initials}
        </div>
        <div className="min-w-0">
          <div className="text-[14px] font-bold text-white">{name}</div>
          <div className="mt-1 text-[12px] text-white/55">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function LeadCtaForm() {
  const telegramUrl = "https://t.me/tradingmonsterpro";

  return (
    <section className="relative overflow-hidden py-14 sm:py-16" id="cta-form">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_20%,rgba(255,176,32,0.16),transparent_60%),radial-gradient(760px_420px_at_20%_55%,rgba(59,130,246,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/35" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-snug tracking-normal sm:text-3xl">
            Get Started with Trading Monster AI
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-white/60 sm:text-sm">
            See why traders trust Trading Monster AI.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl">
          <div className="-mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:auto-rows-fr sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
            <div className="w-[85%] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-start">
              <TestimonialCard
                quote="&quot;Trading Monster FX transformed my trading journey. The AI signals are incredibly accurate, and I've seen consistent profits since joining. The community support is amazing!&quot;"
                name="Michael Chen"
                role="Forex Trader"
                initials="MC"
              />
            </div>
            <div className="w-[85%] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-start">
              <TestimonialCard
                quote="&quot;As a beginner, I was overwhelmed by the markets. The educational resources and risk-managed strategies helped me build confidence and grow my portfolio steadily.&quot;"
                name="Sarah Williams"
                role="Crypto Investor"
                initials="SW"
              />
            </div>
            <div className="w-[85%] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-start">
              <TestimonialCard
                quote="&quot;The market insights are spot-on. I've tried many signal providers, but Trading Monster FX is the only one that delivers consistent, actionable intelligence.&quot;"
                name="James Rodriguez"
                role="Day Trader"
                initials="JR"
              />
            </div>
            <div className="w-[85%] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-start">
              <TestimonialCard
                quote="&quot;Perfect for someone with a busy schedule. The AI does the heavy lifting, and I just follow the signals. My win rate has improved dramatically.&quot;"
                name="Emily Parker"
                role="Part-time Trader"
                initials="EP"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              className="h-11 w-full max-w-md rounded-xl px-6 text-sm font-semibold tracking-wide"
              onClick={() => window.open(telegramUrl, "_blank", "noopener,noreferrer")}
            >
              Join Our Telegram Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

