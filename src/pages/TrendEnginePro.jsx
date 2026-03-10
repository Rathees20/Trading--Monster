import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Hero from "../components/Hero.jsx";
import WhyMostTradersLose from "../components/WhyMostTradersLose.jsx";
import RulesAINeverBreaksSection from "../components/RulesAINeverBreaksSection.jsx";
import HowTradingMonsterAIDecides from "../components/HowTradingMonsterAIDecides.jsx";
import AITrendEngineSection from "../components/AITrendEngineSection.jsx";
import TryBeforeYouBuySection from "../components/TryBeforeYouBuySection.jsx";

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
                        Trend Engine <span className="text-amber-450">Pro</span> <br />
                        <span className="text-3xl sm:text-xl lg:text-2xl text-white/40">for Currency</span>
                    </h1>
                }
            />
            <WhyMostTradersLose />
            <RulesAINeverBreaksSection />

            <HowTradingMonsterAIDecides />
            <AITrendEngineSection />

            <TryBeforeYouBuySection />
        </main>
    );
}
