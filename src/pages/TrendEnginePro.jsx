import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Hero from "../components/Hero.jsx";
import WhyMostTradersLose from "../components/WhyMostTradersLose.jsx";
import RulesAINeverBreaksSection from "../components/RulesAINeverBreaksSection.jsx";
import MultiTimeframeTrendValidatorSection from "../components/MultiTimeframeTrendValidatorSection.jsx";
import HowTradingMonsterAIDecides from "../components/HowTradingMonsterAIDecides.jsx";
import AITrendEngineSection from "../components/AITrendEngineSection.jsx";
import TryBeforeYouBuySection from "../components/TryBeforeYouBuySection.jsx";
import Button from "../components/ui/Button.jsx";
import targetIcon from "../assets/icons/target.png";
import aiTradeIcon from "../assets/icons/Ai trade Icon.png";
import mtfIcon from "../assets/icons/MTF icon.png";
import markIcon from "../assets/icons/Mark icon.png";

function FeatureCard({ icon, title, description }) {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl transition-all hover:border-amber-500/50 hover:bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/5 blur-3xl transition-all group-hover:bg-amber-500/10"></div>
            <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/5 ring-1 ring-white/10 group-hover:ring-amber-500/30">
                    <img src={icon} alt={title} className="h-8 w-8 object-contain" draggable="false" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{title}</h3>
                <p className="text-base leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">{description}</p>
            </div>
        </div>
    );
}

function ProfessionalIndicatorSection() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tradingviewId, setTradingviewId] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [activePlanType, setActivePlanType] = useState("pro"); // Default to Pro


    const isEmailValid = /^\S+@\S+\.\S+$/.test(email.trim());
    const canSubmit = name.trim().length > 0 && isEmailValid && tradingviewId.trim().length > 0;

    return (
        <section className="relative bg-[#050505] py-24 sm:py-32 overflow-hidden border-t border-white/5" id="professional-indicator">
            <div id="unlock-full-access" className="absolute top-0 left-0" />
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 2xl:max-w-[1440px]">
                <div className="mb-20 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 mb-6">
                        Elite Performance
                    </div>
                    <h2 className="text-4xl font-black text-white sm:text-6xl tracking-tight uppercase italic">
                        Professional <span className="text-amber-450">Indicator toolkit</span>
                    </h2>
                    <p className="mt-8 text-xl text-white/60 max-w-3xl mx-auto font-medium leading-relaxed">
                        We've processed countless data points to build the final evolution of trend trading. This isn't just an indicator—it's your unfair advantage.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-32">
                    <FeatureCard
                        icon={aiTradeIcon}
                        title="AI Trend Detection"
                        description="Proprietary algorithms analyze price action and volatility to identify the start of major market shifts before they happen."
                    />
                    <FeatureCard
                        icon={mtfIcon}
                        title="Multi-Timeframe Analysis"
                        description="Instantly validate trends across multiple timeframes to ensure you're always trading with the higher-order momentum."
                    />
                    <FeatureCard
                        icon={targetIcon}
                        title="Smart Exit Zones"
                        description="Dynamic take-profit levels that adjust in real-time based on market expansion, maximizing your winning trades."
                    />
                    <FeatureCard
                        icon={markIcon}
                        title="Institutional Bias"
                        description="See where the big money is positioned. Our bias indicator helps you stay on the right side of institutional flow."
                    />
                    <FeatureCard
                        icon={aiTradeIcon}
                        title="Volatility Guards"
                        description="Protect your capital during choppy markets. The system automatically identifies low-probability environments to avoid."
                    />
                    <FeatureCard
                        icon={mtfIcon}
                        title="Custom Alerts"
                        description="Never miss a setup. Get instant notifications in real-time when the Pro Engine confirms a high-probability entry."
                    />
                </div>

                <div className="relative mt-32 rounded-[32px] border border-white/10 bg-black/40 p-8 sm:p-12 backdrop-blur-xl shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-white/5">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557L3.04 10.385a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345l2.125-5.111Z" />
                        </svg>
                    </div>


                    {/* Integrated Trial Form */}
                    <div id="trial-form" className="">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-10">
                                <div className="inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-500 uppercase tracking-widest mb-4 ring-1 ring-amber-500/30">
                                    Limited Time Offer
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">Get 3 Days Free Pro Access</h4>
                                <p className="text-white/50 text-sm">Experience the power of our AI trend engine before committed.</p>
                            </div>

                            <form className="grid gap-4 sm:grid-cols-2" onSubmit={async (e) => {
                                e.preventDefault();
                                try {
                                    const res = await fetch("https://script.google.com/macros/s/AKfycbzwKPhQ3vEOeEK6K29gteY3M_NkLWCMTXReSVI-PpqTiTVjmHg0lbZbQyqTYbj0FkaNng/exec", {
                                        method: "POST",
                                        body: JSON.stringify({ name, email, tradingviewId, whatsapp })
                                    });
                                    const data = await res.json();
                                    if (data.success) navigate("/thank-you");
                                    else alert("Something went wrong");
                                } catch (err) { alert("Submission failed"); }
                            }}>
                                <label className="grid gap-1">
                                    <span className="text-xs font-bold text-white/70 ml-1">Name</span>
                                    <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Your full name" className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/20 outline-none focus:border-amber-500/50 transition" />
                                </label>
                                <label className="grid gap-1">
                                    <span className="text-xs font-bold text-white/70 ml-1">Email</span>
                                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/20 outline-none focus:border-amber-500/50 transition" />
                                </label>
                                <label className="grid gap-1">
                                    <span className="text-xs font-bold text-white/70 ml-1">TradingView ID</span>
                                    <input type="text" value={tradingviewId} onChange={e => setTradingviewId(e.target.value)} required placeholder="Your TradingView ID" className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/20 outline-none focus:border-amber-500/50 transition" />
                                </label>
                                <label className="grid gap-1">
                                    <span className="text-xs font-bold text-white/70 ml-1">WhatsApp <span className="text-white/30">(Optional)</span></span>
                                    <input type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="+1..." className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/20 outline-none focus:border-amber-500/50 transition" />
                                </label>
                                <button type="submit" disabled={!canSubmit} className="mt-4 sm:col-span-2 h-14 w-full rounded-xl bg-amber-500 text-black font-black uppercase tracking-widest shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition active:scale-[0.99] disabled:opacity-50">
                                    Request 3-Day Free Trial
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function TrendEnginePro() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <WhyMostTradersLose />
            <RulesAINeverBreaksSection />
            <MultiTimeframeTrendValidatorSection />
            <HowTradingMonsterAIDecides />
            <AITrendEngineSection />

            {/* The "Processed" Professional Indicator Section */}
            <ProfessionalIndicatorSection />

            <TryBeforeYouBuySection />
        </main>
    );
}
