import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Hero from "../components/Hero.jsx";
import WhyMostTradersLose from "../components/WhyMostTradersLose.jsx";
import RulesAINeverBreaksSection from "../components/RulesAINeverBreaksSection.jsx";
import MultiTimeframeTrendValidatorSection from "../components/MultiTimeframeTrendValidatorSection.jsx";
import LeadCtaForm from "../components/LeadCtaForm.jsx";
import HowTradingMonsterAIDecides from "../components/HowTradingMonsterAIDecides.jsx";
import AITrendEngineSection from "../components/AITrendEngineSection.jsx";
import TryBeforeYouBuySection from "../components/TryBeforeYouBuySection.jsx";
import FreeTrialForm from "../components/FreeTrialForm.jsx";

export default function TrendEnginePro() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <Hero
                customHeading={
                    <h1 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-wide uppercase italic leading-[0.9]">
                        Best Trading Indicators <br />
                        <span className="text-amber-450">for Forex and XAUUSD</span>
                    </h1>
                }
            />
            <WhyMostTradersLose />
            <RulesAINeverBreaksSection />
            <MultiTimeframeTrendValidatorSection />
            <LeadCtaForm />
            <HowTradingMonsterAIDecides />
            <AITrendEngineSection />

            <TryBeforeYouBuySection />
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px] pb-24">
                <FreeTrialForm />
            </div>
        </main>
    );
}
