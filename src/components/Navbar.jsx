import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button.jsx";
import logoImg from "../assets/logo.jpeg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [proOpen, setProOpen] = useState(false);
  const [mobileProOpen, setMobileProOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setProOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (!e.target.closest(".pro-dropdown-trigger")) {
        setProOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { label: "FAQ", to: "/faq" },
    { label: "Pricing", href: "#unlock-full-access" },
    { label: "Blog", href: "#blog" },
  ];

  const proIndicators = [
    { label: "Trend Engine Pro", href: "#ai-trend-engine" },
    { label: "Breakout Pro", href: "#breakout-pro" },
  ];

  return (
    <header className="relative z-10 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Trading Monster"
                className="h-10 w-10 select-none"
                draggable="false"
              />
              <span className="text-sm font-semibold tracking-wide text-white/90">
                TRADING <span className="text-amber-450">MONSTER</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6 sm:gap-8">
              {/* Pro Indicators Dropdown */}
              <div className="relative pro-dropdown-trigger">
                <button
                  onClick={() => setProOpen(!proOpen)}
                  className="flex items-center gap-1 text-sm font-semibold text-white/70 transition hover:text-white"
                >
                  Pro Indicators
                  <svg
                    className={`h-4 w-4 transition-transform ${proOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {proOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-2xl border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-xl">
                    {proIndicators.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setProOpen(false)}
                        className="block rounded-xl px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {menuItems.map((item) => (
                item.to ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-sm font-semibold text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-semibold text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a href="#trial-form" className="hidden sm:block">
                <Button
                  variant="amber"
                  size="sm"
                  className="h-10 rounded-full px-4 font-extrabold tracking-wide sm:px-6"
                >
                  Signup
                </Button>
              </a>

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
            <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 2xl:max-w-[1440px]">
              <div className="mt-2 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur">
                <div className="grid gap-1">
                  {/* Mobile Pro Indicators */}
                  <div>
                    <button
                      onClick={() => setMobileProOpen(!mobileProOpen)}
                      className="flex w-full items-center justify-between px-4 h-10 text-sm font-semibold text-white/80 transition hover:text-white hover:bg-white/5 rounded-xl"
                    >
                      Pro Indicators
                      <svg
                        className={`h-4 w-4 transition-transform ${mobileProOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileProOpen && (
                      <div className="mt-1 ml-4 space-y-1">
                        {proIndicators.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileProOpen(false);
                            }}
                            className="flex h-10 items-center px-4 text-sm font-semibold text-white/60 transition hover:text-white hover:bg-white/5 rounded-xl"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {menuItems.map((item) => (
                    item.to ? (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="flex h-10 items-center px-4 text-sm font-semibold text-white/80 transition hover:text-white hover:bg-white/5 rounded-xl"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex h-10 items-center px-4 text-sm font-semibold text-white/80 transition hover:text-white hover:bg-white/5 rounded-xl"
                      >
                        {item.label}
                      </a>
                    )
                  ))}
                </div>
                <div className="mt-3 grid gap-2">
                  <a href="#trial-form" onClick={() => setMobileOpen(false)}>
                    <Button variant="amber" size="sm" className="h-10 w-full rounded-xl px-6">
                      Signup
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

