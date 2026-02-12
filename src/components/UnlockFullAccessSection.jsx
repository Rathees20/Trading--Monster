import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe("pk_test_51SyrIqLS6iYGsALv1chYkq1daw4ktPhCPmtUA3btl9eRX6JEedmg9WFqReVwP6ycebdqYOCMxBBNzgXMz0Og2UqC00df1BM6HF");

function Pill({ children, active = false }) {
  return (
    <div
      className={[
        "rounded-full px-4 py-2 text-[10px] font-semibold sm:text-[11px]",
        active
          ? "bg-[#1B2F4F] text-white ring-1 ring-[#2E6BFF]/45 shadow-[0_10px_26px_rgba(46,107,255,0.18)]"
          : "bg-[#1B2F4F] text-white/80 ring-1 ring-white/10"
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function UnlockFullAccessSection() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tradingviewId, setTradingviewId] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  const handleCheckout = (plan) => {
    setSelectedPlan(plan);
    fetch("http://127.0.0.1:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: plan.label, amount: plan.price }] }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.error("Payment initiation failed:", error);
        alert("Could not connect to payment server. Please ensure 'node server.js' is running.");
        setSelectedPlan(null);
      });
  };

  const isEmailValid = /^\S+@\S+\.\S+$/.test(email.trim());

  const canSubmit =
    name.trim().length > 0 &&
    isEmailValid &&
    tradingviewId.trim().length > 0;

  return (
    <section className="relative overflow-hidden py-12 sm:py-12" id="unlock-full-access">
      {/* subtle spotlight like the screenshot */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_10%,rgba(255,176,32,0.18),transparent_60%),radial-gradient(760px_420px_at_20%_50%,rgba(59,130,246,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/35" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* <div className="text-center">
          <h2 className="text-3xl font-bold leading-snug tracking-normal sm:text-4xl">
            Unlock Full Access
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/60 sm:text-base">
            Transition from testing to high-conviction professional trading.
          </p>
        </div> */}

        {/* Main pricing panel */}
        <div className="relative mt-12 rounded-[24px] border border-white/10 bg-black/45 px-6 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur sm:rounded-[32px] sm:px-10 sm:py-10">
          {/* top-right star */}
          <div className="absolute right-4 top-4 text-white/35">
            <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557L3.04 10.385a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345l2.125-5.111Z"
                fill="currentColor"
                opacity="0.9"
              />
            </svg>
          </div>

          <div className="text-center">
            <div className="text-lg font-semibold leading-snug text-white sm:text-2xl">
              Trading Monster
              <br />
              <span className="text-white/90">Professional Indicator</span>
            </div>
          </div>

          {/* <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
            <Pill active>Full AI Trend Indicator Suite</Pill>
            <Pill>Private Telegram Community</Pill>
            <Pill>Priority Technical Support</Pill>
            <Pill>Free Lifetime Updates</Pill>
          </div> */}

          {/* Pricing cards - new design */}
          <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Monthly", price: 55, term: "Month" },
              { label: "Quarterly", price: 149, term: "3 Months" },
              { label: "Half-yearly", price: 289, term: "6 Months" },
              { label: "Yearly", price: 559, term: "Year" },
            ].map((plan) => {
              const isPopular = plan.label === "Quarterly";
              const isBest = plan.label === "Yearly";

              return (
                <div
                  key={plan.label}
                  className={[
                    "relative flex h-full flex-col overflow-hidden rounded-[22px] border bg-gradient-to-b from-slate-900/90 via-slate-950 to-black/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.65)] transition duration-200",
                    isPopular || isBest
                      ? "border-amber-400/60 ring-1 ring-amber-400/40 scale-[1.02]"
                      : "border-white/10 hover:border-amber-300/40 hover:scale-[1.01]",
                  ].join(" ")}
                >
                  {/* soft spotlight */}
                  <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div className="absolute -inset-12 bg-[radial-gradient(65%_60%_at_50%_0%,rgba(56,189,248,0.18),transparent_70%)]" />
                  </div>

                  {/* badges (reserve space so all buttons align) */}
                  <div className="relative mb-3 flex min-h-[26px] justify-end">
                    {(isPopular || isBest) && (
                      <span className="rounded-full bg-amber-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-300 ring-1 ring-amber-400/40">
                        {isBest ? "Best Value" : "Most Popular"}
                      </span>
                    )}
                  </div>

                  <div className="relative text-center">
                    {/* <div className="text-[12px] font-semibold uppercase tracking-wide text-white/60">
                      Institutional Pricing
                    </div> */}
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-white">
                      {plan.label}
                    </div>

                    <div className="mt-6 flex items-end justify-center gap-2">
                      <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        ${plan.price}
                      </span>
                      <span className="pb-1.5 text-[11px] font-semibold text-white/70">
                        USD / {plan.term}
                      </span>
                    </div>
                  </div>

                  <div className="relative mt-auto border-t border-white/5 pt-4">
                    <button
                      className={[
                        "inline-flex h-11 w-full items-center justify-center rounded-xl text-center text-[12px] font-extrabold leading-tight shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition",
                        isPopular || isBest
                          ? "bg-amber-400 text-black ring-1 ring-amber-300 hover:bg-amber-300"
                          : "bg-white text-black ring-1 ring-white/30 hover:bg-white/90",
                      ].join(" ")}
                      onClick={(e) => {
                        e.preventDefault();
                        handleCheckout(plan);
                      }}
                    >
                      Subscribe Now
                    </button>
                    <div className="mt-2 text-center">
                      <a
                        className="text-[10px] text-white/50 hover:text-white underline"
                        href="#trial-form"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("trial-form")
                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                      >
                        Get 3 Days Free Demo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {clientSecret && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
              <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
                <button
                  onClick={() => {
                    setClientSecret("");
                    setSelectedPlan(null);
                  }}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Subscribe to {selectedPlan?.label}</h3>
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </div>
            </div>
          )}

          {/* Trial form below pricing cards */}
          <div
            id="trial-form"
            className="mt-14 rounded-[26px] border border-white/12 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(255,176,32,0.18),transparent_65%),radial-gradient(860px_520px_at_0%_100%,rgba(59,130,246,0.20),transparent_65%)] px-6 py-7 shadow-[0_26px_90px_rgba(0,0,0,0.55)] sm:px-10 sm:py-10"
          >
            <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
              <div className="rounded-full bg-amber-450/95 px-6 py-2.5 text-[13px] font-extrabold uppercase tracking-wide text-black shadow-[0_18px_55px_rgba(255,180,20,0.35)] ring-1 ring-black/10 sm:text-sm">
                Start Your 3-Day Free Trial
              </div>
              <p className="max-w-2xl text-[11px] leading-5 text-white/70 sm:text-xs">
                Fill the below form  to activate your 3days free trail.
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
        </div>

      </div>
    </section>
  );
}

