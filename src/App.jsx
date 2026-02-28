import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
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
import FAQ from "./components/FAQ.jsx";
import Blog from "./components/Blog.jsx";
import BlogPost from "./components/BlogPost.jsx";
import RefundPolicy from "./components/legal/RefundPolicy.jsx";
import TermsAndConditions from "./components/legal/TermsAndConditions.jsx";
import Disclaimer from "./components/legal/Disclaimer.jsx";
import LegalNoticePrivacy from "./components/legal/LegalNoticePrivacy.jsx";
import LegalNoticeCookie from "./components/legal/LegalNoticeCookie.jsx";
import CancellationPolicy from "./components/legal/CancellationPolicy.jsx";
import ThankYouPage from "./components/ThankYouPage.jsx";
import BlockedCountry from "./components/BlockedCountry.jsx";
import logoImg from "./assets/logo.jpeg";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const [isBlocked, setIsBlocked] = useState(null);

  useEffect(() => {
    const checkGeo = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        // Blocked: Russia (RU), Belarus (BY), North Korea (KP), Ukraine (UA)
        const blockedCountries = ["RU", "BY", "KP", "UA"];
        if (blockedCountries.includes(data.country_code)) {
          setIsBlocked(true);
        } else {
          setIsBlocked(false);
        }
      } catch (error) {
        console.error("Geo-blocking check failed:", error);
        // Default to not blocked if API fails, to avoid locking out everyone
        setIsBlocked(false);
      }
    };

    checkGeo();
  }, []);

  if (isBlocked === true) {
    return <BlockedCountry />;
  }

  // Still checking... show nothing or a loader
  if (isBlocked === null) {
    return <div className="tm-bg min-h-dvh flex items-center justify-center text-white">Loading...</div>;
  }

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
                <Navbar />
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<LegalNoticePrivacy />} />
          <Route path="/cookie-policy" element={<LegalNoticeCookie />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
      <TradingMonsterFooter />
    </div>
  );
}

