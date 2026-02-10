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

export default function App() {
  return (
    <div className="tm-bg min-h-dvh text-white">
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
      <TradingMonsterFooter />
    </div>
  );
}

