import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import WhyMostTradersLose from "../components/WhyMostTradersLose.jsx";
import RulesAINeverBreaksSection from "../components/RulesAINeverBreaksSection.jsx";
import MultiTimeframeTrendValidatorSection from "../components/MultiTimeframeTrendValidatorSection.jsx";
import LeadCtaForm from "../components/LeadCtaForm.jsx";
import HowTradingMonsterAIDecides from "../components/HowTradingMonsterAIDecides.jsx";
import TryBeforeYouBuySection from "../components/TryBeforeYouBuySection.jsx";
import FreeTrialForm from "../components/FreeTrialForm.jsx";
import HomeHeroSecondary from "../components/HomeHeroSecondary.jsx";
import Button from "../components/ui/Button.jsx";
import xauusdImg from "../assets/tmimages/XAUUSD.png";
import rejectionZoneImg from "../assets/tmimages/Rejection Zone.png";
import scannerImg from "../assets/t1.jpeg";
import buyEntryImg from "../assets/tmimages/BUY ENTRY.png";
import sellEntryImg from "../assets/tmimages/Sell Entry.png";
import avoidTradeImg from "../assets/tmimages/Avoid trade.png";
import hs1Img from "../assets/HS1.png"; // Using the same premium visual as home hero

function DynamicHero() {
    const navigate = useNavigate();
    return (
        <section id="top" className="relative overflow-hidden bg-black">
            {/* Background gradients for premium feel */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(250,204,21,0.08),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.05),transparent_50%)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 sm:pt-16 sm:pb-20 lg:pt-12 lg:pb-28 2xl:max-w-[1440px]">
                {/* Main Page Heading */}
                <div className="mb-16 text-center">
                    <h1 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-wide uppercase italic leading-[0.9]">
                        Dynamic <span className="text-amber-450">Support and Resistance Pro</span>
                    </h1>
                </div>

                <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-12 xl:gap-16">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center lg:col-span-2">
                        <h2 className="text-3xl font-bold leading-tight tracking-normal text-white sm:text-4xl lg:text-[44px]">
                            Identify Momentum. <br />
                            <span className="mt-3 block text-amber-450">Trade With Structure.</span>
                        </h2>

                        <h2 className="mt-4 text-lg font-medium text-white/60 sm:text-xl">
                            Advanced Dynamic Support & Resistance for TradingView
                        </h2>

                        <ul className="mt-8 space-y-4 sm:ml-2 sm:mt-10 lg:space-y-6">
                            {[
                                "Dynamic Support & Resistance",
                                "Live Market Structure",
                                "Precision Entry Zones",
                                "Real Time Updates",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-base font-semibold text-white/90 sm:text-lg lg:text-xl tracking-wide">
                                    <span className="flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-amber-450 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 lg:mt-12">
                            <a href="#trial-form" className="block w-full sm:w-auto">
                                <Button className="group relative h-14 w-full text-base font-bold uppercase tracking-widest sm:w-auto sm:px-10">
                                    Get 3 Days Free Demo
                                    <div className="absolute inset-0 -z-10 rounded-2xl bg-amber-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 lg:order-2 perspective-[1000px] lg:col-span-3">
                        <div className="relative group rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-2 shadow-2xl backdrop-blur-sm sm:p-4 transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
                            <div className="absolute inset-0 -z-10 rounded-2xl sm:rounded-3xl bg-amber-450/10 opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-100 group-hover:bg-amber-450/20" />
                            <img
                                src={hs1Img}
                                alt="dynamic-support-resistance-tradingmonster-ai"
                                className="w-full h-auto rounded-xl sm:rounded-2xl border border-white/10 shadow-inner object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function DynamicSupportResistancePro() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <DynamicHero />

            {/* Dynamic Support and Resistance Section */}
            <section className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
                    <div className="mb-12 text-left">
                        <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-wide italic leading-none">
                            Dynamic <span className="text-amber-450">Support and Resistance</span>
                        </h2>
                    </div>

                    <div className="relative group mx-auto max-w-5xl">
                        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-amber-500/20 to-transparent blur-sm opacity-50 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative rounded-[30px] border border-white/10 bg-black/40 p-2 backdrop-blur-xl overflow-hidden shadow-2xl">
                            <img
                                src={xauusdImg}
                                alt="Dynamic Support and Resistance"
                                className="w-full rounded-[24px] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-lg font-bold text-white/70 tracking-wide">
                            Live support and resistance Bands as price structure changes.
                        </p>
                    </div>
                </div>
            </section>

            <HomeHeroSecondary />

            {/* Feature Highlights Section (Scanner Style) */}
            <section className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
                    <div className="flex flex-col gap-12 mt-12 mb-16 px-4 mx-auto max-w-4xl">
                        {/* Image on Top - Full View, Slightly More Compact */}
                        <div className="w-full">
                            <div className="relative group rounded-[32px] border border-white/10 bg-black/40 p-2 backdrop-blur-xl shadow-2xl overflow-hidden transition-all hover:border-amber-500/30">
                                <img
                                    src={scannerImg}
                                    alt="momentum-scanner-preview"
                                    className="w-full h-auto rounded-[24px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Points Below - Left Aligned */}
                        <div className="grid gap-8 sm:grid-cols-3">
                            {[
                                "Multi-Market Compatible",
                                "Rejection Zone",
                                "No Emotional Analysis"
                            ].map((text, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 group/item"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all group-hover/item:scale-110 group-hover/item:bg-amber-500 group-hover/item:text-black">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-black tracking-wide text-white italic leading-none group-hover/item:text-amber-450 transition-colors">
                                            {text}
                                        </span>
                                        <div className="mt-1 h-[2px] w-0 bg-amber-450 transition-all duration-300 group-hover/item:w-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Rejection Zone Identification Section */}
            <section className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-wide italic leading-none">
                            Rejection Zone <span className="text-amber-450">Identification</span>
                        </h2>
                    </div>

                    <div className="relative group mx-auto max-w-4xl">
                        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-amber-500/20 to-transparent blur-sm opacity-50 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative rounded-[30px] border border-white/10 bg-black/40 p-2 backdrop-blur-xl overflow-hidden shadow-2xl">
                            <img
                                src={rejectionZoneImg}
                                alt="Rejection Zone Identification"
                                className="w-full h-auto rounded-[24px] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    <div className="mt-8 text-center max-w-3xl mx-auto">
                        <p className="text-lg font-bold text-white/70 tracking-wide">
                            Spot high-probability reversal areas where institutional reactions may occur.
                        </p>
                    </div>
                </div>
            </section>

            {/* Buy Trade Section */}
            <section className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
                    <div className="mb-12 text-left">
                        <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-wide italic leading-none">
                            Buy <span className="text-emerald-500">Trade</span>
                        </h2>
                        <p className="mt-4 text-lg font-bold text-emerald-500/80 tracking-widest">High Probability Long Entry</p>
                    </div>
                    <div className="relative group mx-auto max-w-5xl">
                        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-emerald-500/20 to-transparent blur-sm opacity-50 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative rounded-[30px] border border-white/10 bg-black/40 p-2 backdrop-blur-xl overflow-hidden shadow-2xl">
                            <img src={buyEntryImg} alt="Buy Trade Analysis" className="w-full rounded-[24px] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sell Trade Section */}
            <section className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
                    <div className="mb-12 text-left">
                        <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-wide italic leading-none">
                            Sell <span className="text-rose-500">Trade</span>
                        </h2>
                        <p className="mt-4 text-lg font-bold text-rose-500/80 tracking-widest">High Probability Short Entry</p>
                    </div>
                    <div className="relative group mx-auto max-w-5xl">
                        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-rose-500/20 to-transparent blur-sm opacity-50 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative rounded-[30px] border border-white/10 bg-black/40 p-2 backdrop-blur-xl overflow-hidden shadow-2xl">
                            <img src={sellEntryImg} alt="Sell Trade Analysis" className="w-full rounded-[24px] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* No Trade Section */}
            <section className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
                    <div className="mb-12 text-left">
                        <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-wide italic leading-none">
                            NO <span className="text-white/60">Trade</span>
                        </h2>
                        <p className="mt-4 text-lg font-bold text-white/40 tracking-widest uppercase">We avoid entry during high volatility</p>
                    </div>
                    <div className="relative group mx-auto max-w-5xl">
                        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent blur-sm opacity-50 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative rounded-[30px] border border-white/10 bg-black/40 p-2 backdrop-blur-xl overflow-hidden shadow-2xl">
                            <img src={avoidTradeImg} alt="No Trade - High Volatility" className="w-full rounded-[24px] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
                    <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-black/40 p-10 sm:p-16 backdrop-blur-xl transition-all hover:border-blue-500/30">
                        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl transition-all group-hover:bg-blue-500/10"></div>

                        <div className="mb-12 text-center">
                            <h3 className="text-3xl font-black text-white italic tracking-tight sm:text-4xl">
                                Benefits of <span className="text-blue-500">Dynamic Support and Resistance</span>
                            </h3>
                        </div>

                        <ul className="grid gap-8 sm:grid-cols-2">
                            {[
                                "Identify High-Probability Entry Zones",
                                "Improves Breakout Confirmation",
                                "Reduces Manual Chart Work",
                                "Works Across All Markets"
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 group/item">
                                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-500 group-hover/item:bg-blue-500 group-hover/item:text-black transition-all">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className="text-lg font-bold tracking-wide text-white/70 group-hover/item:text-white transition-colors">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <TryBeforeYouBuySection />
            <RulesAINeverBreaksSection />
            <MultiTimeframeTrendValidatorSection />
            <LeadCtaForm />
            <HowTradingMonsterAIDecides />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px] pb-24">
                <FreeTrialForm />
            </div>
        </main>
    );
}
