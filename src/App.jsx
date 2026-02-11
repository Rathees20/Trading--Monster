import { Routes, Route, useLocation } from "react-router-dom";
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

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <div className="tm-bg min-h-dvh text-white flex flex-col">
      <div className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <WhyMostTradersLose />
                <LeadCtaForm />
                <HowTradingMonsterAIDecides />
                <AITrendEngineSection />
                <MultiTimeframeTrendValidatorSection />
                <RulesAINeverBreaksSection />
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

