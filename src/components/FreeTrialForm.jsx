import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FreeTrialForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tradingviewId, setTradingviewId] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const isEmailValid = /^\S+@\S+\.\S+$/.test(email.trim());

  const canSubmit =
    name.trim().length > 0 &&
    isEmailValid &&
    tradingviewId.trim().length > 0;

  return (
    <div
      id="trial-form"
      className="mt-14 rounded-[26px] border border-white/12 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(255,176,32,0.18),transparent_65%),radial-gradient(860px_520px_at_0%_100%,rgba(59,130,246,0.20),transparent_65%)] px-6 py-7 shadow-[0_26px_90px_rgba(0,0,0,0.55)] sm:px-10 sm:py-10"
    >
      <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
        <div className="rounded-full bg-amber-450/95 px-6 py-2.5 text-[13px] font-extrabold uppercase tracking-wide text-black shadow-[0_18px_55px_rgba(255,180,20,0.35)] ring-1 ring-black/10 sm:text-sm">
          Start Your 3-Day Free Trial
        </div>
        <p className="max-w-2xl text-[11px] leading-5 text-white/70 sm:text-xs">
          Fill the below form to activate your 3-day free trial.
        </p>
      </div>

      <form
        className="mt-8 grid gap-4 sm:grid-cols-2"
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            const res = await fetch(
              "https://script.google.com/macros/s/AKfycbzwKPhQ3vEOeEK6K29gteY3M_NkLWCMTXReSVI-PpqTiTVjmHg0lbZbQyqTYbj0FkaNng/exec",
              {
                method: "POST",
                body: JSON.stringify({
                  name: name.trim(),
                  email: email.trim(),
                  tradingviewId: tradingviewId.trim(),
                  whatsapp: whatsapp.trim(),
                }),
              }
            );

            const data = await res.json();

            if (data.success) {
              setName("");
              setEmail("");
              setTradingviewId("");
              setWhatsapp("");
              navigate("/thank-you");
            } else {
              alert("Something went wrong");
            }
          } catch (err) {
            console.error(err);
            alert("Submission failed");
          }
        }}
      >
        <label className="grid gap-1 sm:col-span-1">
          <span className="text-xs font-semibold tracking-wide text-white/80 sm:text-[15px]">
            Name
          </span>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-12 w-full rounded-lg border border-white/15 bg-black/50 px-3 text-[15px] text-white placeholder:text-white/35 outline-none ring-0 transition focus:border-[#2E6BFF]/70 focus:ring-2 focus:ring-[#2E6BFF]/30 sm:text-[14px]"
            autoComplete="name"
          />
        </label>

        <label className="grid gap-1 sm:col-span-1">
          <span className="text-xs font-semibold tracking-wide text-white/80 sm:text-[15px]">
            Email
          </span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 w-full rounded-lg border border-white/15 bg-black/50 px-3 text-[15px] text-white placeholder:text-white/35 outline-none ring-0 transition focus:border-[#2E6BFF]/70 focus:ring-2 focus:ring-[#2E6BFF]/30 sm:text-[14px]"
            autoComplete="email"
          />
        </label>

        <label className="grid gap-1 sm:col-span-1">
          <span className="text-xs font-semibold tracking-wide text-white/80 sm:text-[15px]">
            TradingView User ID
          </span>
          <input
            type="text"
            name="tradingviewId"
            placeholder="Your TradingView username"
            value={tradingviewId}
            onChange={(e) => setTradingviewId(e.target.value)}
            required
            className="h-12 w-full rounded-lg border border-white/15 bg-black/50 px-3 text-[15px] text-white placeholder:text-white/35 outline-none ring-0 transition focus:border-[#2E6BFF]/70 focus:ring-2 focus:ring-[#2E6BFF]/30 sm:text-[14px]"
            autoComplete="off"
          />
        </label>

        <label className="grid gap-1 sm:col-span-1">
          <span className="text-xs font-semibold tracking-wide text-white/80 sm:text-[15px]">
            WhatsApp No. <span className="text-white/40">(optional)</span>
          </span>
          <input
            type="tel"
            name="whatsapp"
            placeholder="Include country code, e.g. +1 555 123 4567"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="h-12 w-full rounded-lg border border-white/15 bg-black/50 px-3 text-[15px] text-white placeholder:text-white/35 outline-none ring-0 transition focus:border-[#2E6BFF]/70 focus:ring-2 focus:ring-[#2E6BFF]/30 sm:text-[14px]"
            autoComplete="tel"
          />
        </label>

        <button
          type="submit"
          disabled={!canSubmit}
          className="mt-3 h-12 w-full rounded-full bg-[#2E6BFF] px-6 text-[12px] font-extrabold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(46,107,255,0.45)] transition hover:bg-[#2E6BFF]/90 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2"
        >
          Submit & Request Access
        </button>
      </form>
    </div>
  );
}
