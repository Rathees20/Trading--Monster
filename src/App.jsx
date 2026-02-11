import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Hero from "./components/Hero.jsx";
import TradingMonsterFooter from "./components/TradingMonsterFooter.jsx";
import WhyMostTradersLose from "./components/WhyMostTradersLose.jsx";
import LeadCtaForm from "./components/LeadCtaForm.jsx";
import HowTradingMonsterAIDecides from "./components/HowTradingMonsterAIDecides.jsx";
import AITrendEngineSection from "./components/AITrendEngineSection.jsx";
import MultiTimeframeTrendValidatorSection from "./components/MultiTimeframeTrendValidatorSection.jsx";
import RulesAINeverBreaksSection from "./components/RulesAINeverBreaksSection.jsx";
import TryBeforeYouBuySection from "./components/TryBeforeYouBuySection.jsx";
import UnlockFullAccessSection from "./components/UnlockFullAccessSection.jsx";
import About from "./components/About.jsx";
import RefundPolicy from "./components/legal/RefundPolicy.jsx";
import TermsAndConditions from "./components/legal/TermsAndConditions.jsx";
import Disclaimer from "./components/legal/Disclaimer.jsx";
import PrivacyPolicy from "./components/legal/PrivacyPolicy.jsx";
import CookiePolicy from "./components/legal/CookiePolicy.jsx";
import CancellationPolicy from "./components/legal/CancellationPolicy.jsx";
import logoImg from "./assets/logo.png";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="tm-bg min-h-dvh text-white flex flex-col">
      {/* Global top bar with logo and Home button (hidden on main home page) */}
      {location.pathname !== "/" && (
        <header className="border-b border-white/10 bg-black/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 lg:px-10">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Trading Monster AI"
                className="h-8 w-8"
                draggable="false"
              />
              <span className="text-sm font-semibold tracking-wide text-white">
                TRADING <span className="text-amber-450">MONSTER</span>
              </span>
            </Link>
            <Link
              to="/"
              className="rounded-full border border-amber-400/60 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-300 shadow-[0_0_0_1px_rgba(250,204,21,0.2)] transition hover:bg-amber-500/20"
            >
              Home
            </Link>
          </div>
        </header>
      )}

      <div className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <WhyMostTradersLose />
                <RulesAINeverBreaksSection />
                <MultiTimeframeTrendValidatorSection />
                <LeadCtaForm />
                <HowTradingMonsterAIDecides />
                <AITrendEngineSection />
                <TryBeforeYouBuySection />
                <UnlockFullAccessSection />
              </main>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        </Routes>
      </div>
      <TradingMonsterFooter />
    </div>
  );
}

