import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function TradingMonsterFooter() {
  return (
    <footer className="relative border-t border-[#1F1F1F] bg-black py-10 text-white sm:py-18">
      {/* Top constrained content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        {/* Top 4-column layout */}
        <div className="grid gap-10 border-b-2 border-white/20 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr,1fr,1fr,1.1fr]">
          {/* Brand + description + socials */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Trading Monster"
                className="h-10 w-10"
                draggable="false"
              />
              <div className="text-base font-semibold tracking-wide text-white">
                TRADING <span className="text-amber-450">MONSTER</span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-5 text-white/60">
              Next-generation trading intelligence powered by artificial
              intelligence. Make smarter trading decisions today.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-white">
              {/* Instagram icon */}
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-[#151515] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:bg-[#1f1f1f]"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <circle cx="12" cy="12" r="3.4" />
                  <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
                </svg>
              </button>
              {/* Telegram icon */}
              <a
                href="https://t.me/+LPMC3hHoRE5iYjQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-[#151515] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:bg-[#1f1f1f]"
              >
                <span className="sr-only">Telegram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M20.66 4.04c-.26-.21-.6-.26-.97-.15L4.3 8.34c-.86.26-.86.84-.16 1.07l3.9 1.22 1.52 4.87c.2.54.1.76.66.76.43 0 .62-.2.86-.43l2.07-2.02 3.9 2.87c.72.4 1.23.2 1.4-.66l2.1-12.37c.14-.6-.15-.94-.39-1.11ZM9.32 12.7l8.3-5.17c.41-.25.8-.12.49.16l-6.74 6.1-.26 2.78-1.79-3.87Z" />
                </svg>
              </a>
              {/* Discord icon */}
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-[#151515] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:bg-[#1f1f1f]"
              >
                <span className="sr-only">Discord</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M19.35 5.34A17.3 17.3 0 0 0 15.64 4l-.3.6a15.6 15.6 0 0 1 2.2.84 6.9 6.9 0 0 0-7.08 0c.72-.35 1.47-.64 2.25-.84L12.4 4a17.3 17.3 0 0 0-3.71 1.34C6.1 9.06 5.44 12.66 5.7 16.22c1.26 1.03 2.72 1.8 4.28 2.26l.87-1.17c-.48-.18-.94-.4-1.38-.65l.33-.23c2.62 1.23 5.66 1.23 8.28 0l.33.23c-.44.25-.9.47-1.38.65l.87 1.17a13.6 13.6 0 0 0 4.28-2.26c.26-3.56-.4-7.16-2.83-10.88ZM10.21 14.52c-.9 0-1.64-.8-1.64-1.78s.73-1.79 1.64-1.79c.9 0 1.64.8 1.64 1.79s-.73 1.78-1.64 1.78Zm3.58 0c-.9 0-1.64-.8-1.64-1.78s.73-1.79 1.64-1.79c.9 0 1.64.8 1.64 1.79s-.73 1.78-1.64 1.78Z" />
                </svg>
              </button>
              {/* YouTube icon */}
              <a
                href="https://www.youtube.com/channel/UCJcj-Z7Y7Q6f4GskvfVJc7g"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-[#151515] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:bg-[#1f1f1f]"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M21.6 8.2a2.6 2.6 0 0 0-1.82-1.84C18.18 6 12 6 12 6s-6.18 0-7.78.36A2.6 2.6 0 0 0 2.4 8.2 27.1 27.1 0 0 0 2 12a27.1 27.1 0 0 0 .4 3.8 2.6 2.6 0 0 0 1.82 1.84C5.82 18 12 18 12 18s6.18 0 7.78-.36a2.6 2.6 0 0 0 1.82-1.84A27.1 27.1 0 0 0 22 12a27.1 27.1 0 0 0-.4-3.8ZM10.5 14.75v-5.5L15 12l-4.5 2.75Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="#top" className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <a href="#unlock-full-access" className="transition hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#telegram-support" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>



          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact Us
            </h3>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-450/15 text-amber-300 shadow-[0_0_0_1px_rgba(250,204,21,0.35)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3.5" y="5" width="17" height="14" rx="2.2" />
                  <path d="M5 7.5 12 12l7-4.5" />
                </svg>
              </span>
              <a
                href="mailto:support@tradingmonster.ai"
                className="break-all transition hover:text-white"
              >
                support@tradingmonster.ai
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width legal links row */}
      <div className="mt-6 pt-4 text-[12px] text-white/55">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link to="/disclaimer" className="transition hover:text-white">
            Disclaimer
          </Link>
          <Link to="/privacy-policy" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="transition hover:text-white">
            T&amp;C
          </Link>
          <Link to="/refund-policy" className="transition hover:text-white">
            Refund Policy
          </Link>
          <Link to="/cookie-policy" className="transition hover:text-white">
            Cookie Policy
          </Link>
          <Link to="/cancellation-policy" className="transition hover:text-white">
            Cancellation Policy
          </Link>
        </div>
      </div>

      {/* Full-width copyright + risk text */}
      <div className="mt-4 pt-3 text-[12px] text-white/40 flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div className="text-left">
          © {new Date().getFullYear()} Trading Monster AI. All rights reserved.
        </div>
        <div className="text-[11px] leading-4 text-white/40 text-left sm:text-right">
          Disclaimer: Trading involves risk. Results not guaranteed. Past performance is not
          indicative of future results.
        </div>
      </div>
    </footer>
  );
}

