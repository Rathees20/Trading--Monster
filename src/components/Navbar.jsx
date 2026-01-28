import { useEffect, useState } from "react";
import Button from "./ui/Button.jsx";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="relative z-10 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center gap-6">
          <div className="flex flex-1 items-center gap-3">
            <img
              src={logoImg}
              alt="Trading Monster"
              className="h-10 w-10 select-none"
              draggable="false"
            />
            <span className="text-sm font-semibold tracking-wide text-white/90">
              TRADING <span className="text-amber-450">MONSTER</span>
            </span>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
            <a
              href="#"
              className="hidden h-10 items-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white md:inline-flex"
            >
              Client Login
            </a>
            <Button
              variant="amber"
              size="sm"
              className="h-10 rounded-full px-4 font-extrabold tracking-wide sm:px-6"
            >
              Join US Now
            </Button>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/85 transition hover:bg-white/10 hover:text-white md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen ? (
        <div className="md:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
            <div className="mt-2 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur">
              <div className="mt-3 grid gap-2">
                <a
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  Client Login
                </a>
                <Button variant="amber" size="sm" className="h-10 w-full rounded-xl px-6">
                  Join US Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

