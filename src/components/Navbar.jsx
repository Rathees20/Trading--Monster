import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button.jsx";
import logoImg from "../assets/logo.jpeg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const menuItems = [
    { label: "FAQ", to: "/faq" },
    { label: "Pricing", href: "#unlock-full-access" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header className="relative z-10 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
            <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
              <div className="mt-2 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur">
                <div className="grid gap-1">
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

