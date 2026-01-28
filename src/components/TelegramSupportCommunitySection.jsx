import teleIcon from "../assets/icons/tele1.png";
import phoneImg from "../assets/m1.png";
import glowOval from "../assets/Rectangle 31.png";

function Callout({ tone = "blue", children, className = "" }) {
  const isBlue = tone === "blue";
  const base = isBlue
    ? "bg-[#1B2F4F] text-white/85 ring-white/10"
    : "bg-emerald-600/90 text-white ring-emerald-300/20";

  return (
    <div
      className={[
        "inline-flex max-w-[170px] items-center justify-center rounded-full px-3 py-1.5 text-center text-[10px] font-semibold shadow-[0_14px_40px_rgba(0,0,0,0.25)] ring-1 sm:max-w-none sm:px-4 sm:py-2 sm:text-[11px]",
        base,
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="relative isolate mx-auto w-[280px] max-w-full sm:w-[340px] lg:w-[360px]">
      <img
        src={phoneImg}
        alt="Trading Monster Telegram support"
        className="relative z-10 mx-auto block w-full select-none drop-shadow-[0_28px_80px_rgba(0,0,0,0.55)]"
        draggable="false"
      />

      {/* callouts */}
      <Callout tone="blue" className="absolute left-2 top-10 z-20 translate-x-0 sm:left-0 sm:-translate-x-1/3">
        Priority Direct Support
      </Callout>
      <Callout tone="blue" className="absolute left-2 top-[150px] z-20 translate-x-0 sm:left-0 sm:-translate-x-1/3">
        Paid Member Access
      </Callout>
      <Callout tone="green" className="absolute right-2 top-12 z-20 translate-x-0 sm:right-0 sm:translate-x-1/3">
        Demo User Perks
      </Callout>
      <Callout tone="green" className="absolute right-2 top-[210px] z-20 translate-x-0 sm:right-0 sm:translate-x-1/3">
        Private Telegram Group
      </Callout>
    </div>
  );
}

export default function TelegramSupportCommunitySection() {
  return (
    <section className="relative isolate overflow-hidden pt-10 pb-8 sm:pt-16 sm:pb-0" id="telegram-support">
      {/* warm background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* full-width yellow oval background */}
        <img
          src={glowOval}
          alt=""
          className="absolute inset-0 h-full w-full select-none object-cover object-center opacity-100"
          draggable="false"
        />
        <div className="absolute inset-0 bg-[radial-gradient(920px_520px_at_55%_62%,rgba(255,176,32,0.34),transparent_60%),radial-gradient(760px_520px_at_15%_35%,rgba(255,255,255,0.05),transparent_62%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center sm:items-start">
          <div className="max-w-2xl text-center sm:text-left">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 text-2xl font-bold tracking-normal sm:justify-start sm:text-3xl">
              <img src={teleIcon} alt="" className="h-9 w-9" draggable="false" />
              <span className="text-[#2E6BFF]">Telegram</span>
              <span className="text-white/70">Support &amp; Community</span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-snug tracking-normal sm:text-4xl">
              <span className="text-amber-450">Expert Guidance For Every Market Move</span>
            </h2>
          </div>

          <div className="mt-10 w-full sm:mt-14">
            <div className="flex justify-center">
              <PhoneMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

