import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import WhyMostTradersLose from "../components/WhyMostTradersLose.jsx";
import RulesAINeverBreaksSection from "../components/RulesAINeverBreaksSection.jsx";
import MultiTimeframeTrendValidatorSection from "../components/MultiTimeframeTrendValidatorSection.jsx";
import HowTradingMonsterAIDecides from "../components/HowTradingMonsterAIDecides.jsx";
import AITrendEngineSection from "../components/AITrendEngineSection.jsx";
import TryBeforeYouBuySection from "../components/TryBeforeYouBuySection.jsx";
import Button from "../components/ui/Button.jsx";
import t2Image from "../assets/t2.jpeg";
import t1Image from "../assets/t5.jpeg";
import t4Image from "../assets/t4.jpeg";
import t3Image from "../assets/t3.jpeg";
import t5Image from "../assets/t1.jpeg";

// Mock data for the momentum scanner (kept for potential future use or other components, but Hero now uses image)
const scannerData = {
    USD: [
        { pair: "EURUSD", momentum: 457, zone: "buy" },
        { pair: "GBPUSD", momentum: 312, zone: "buy" },
        { pair: "USDJPY", momentum: -642, zone: "sell" },
        { pair: "USDCAD", momentum: -124, zone: "sell" },
        { pair: "AUDUSD", momentum: 521, zone: "buy" },
        { pair: "NZDUSD", momentum: 189, zone: "buy" },
        { pair: "USDCHF", momentum: -345, zone: "sell" },
    ],
    EUR: [
        { pair: "EURJPY", momentum: -854, zone: "sell" },
        { pair: "EURGBP", momentum: -380, zone: "sell" },
        { pair: "EURAUD", momentum: 172, zone: "buy" },
        { pair: "EURNZD", momentum: 237, zone: "buy" },
        { pair: "EURCAD", momentum: -298, zone: "sell" },
        { pair: "EURCHF", momentum: -214, zone: "sell" },
    ],
    GBP: [
        { pair: "GBPJPY", momentum: 512, zone: "buy" },
        { pair: "GBPAUD", momentum: -145, zone: "sell" },
        { pair: "GBPNZD", momentum: 623, zone: "buy" },
        { pair: "GBPCAD", momentum: -89, zone: "sell" },
    ],
    JPY: [
        { pair: "NZDJPY", momentum: 457, zone: "buy" },
        { pair: "AUDJPY", momentum: 231, zone: "buy" },
        { pair: "CADJPY", momentum: -564, zone: "sell" },
        { pair: "CHFJPY", momentum: 178, zone: "buy" },
    ],
    NZD: [
        { pair: "NZDCAD", momentum: 195, zone: "buy" },
        { pair: "NZDCHF", momentum: -412, zone: "sell" },
    ],
    CAD: [
        { pair: "CADCHF", momentum: 112, zone: "buy" },
    ],
    CHF: [
        { pair: "CHFJPY", momentum: 289, zone: "buy" },
    ],
    AUD: [
        { pair: "AUDCAD", momentum: -321, zone: "sell" },
        { pair: "AUDNZD", momentum: 45, zone: "buy" },
    ]
};

function ScannerHero() {
    const [activeCurrency, setActiveCurrency] = useState("USD");
    const currencies = ["USD", "EUR", "GBP", "JPY", "NZD", "CAD", "CHF", "AUD"];
    const currentData = scannerData[activeCurrency] || [];

    // Auto-cycling logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCurrency((prev) => {
                const currentIndex = currencies.indexOf(prev);
                const nextIndex = (currentIndex + 1) % currencies.length;
                return currencies[nextIndex];
            });
        }, 5000); // Cycle every 5 seconds

        return () => clearInterval(interval);
    }, [currencies]);

    return (
        <section className="relative bg-[#050505] pt-16 pb-24 overflow-hidden" id="scanner-hero">
            {/* Ambient background effects */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
                {/* Bigger font title as requested */}
                <div className="mb-12 text-center">
                    <h1 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-wide uppercase italic leading-[0.9]">
                        Momentum <span className="text-amber-450">Scanner</span> <br />
                        <span className="text-3xl sm:text-xl lg:text-2xl text-white/40">for Currency</span>
                    </h1>
                </div>

                {/* Main Scanner Container (Image Replace) */}
                <div className="relative mx-auto max-w-[950px] mb-12 rounded-[32px] border border-white/10 bg-black/40 p-2 backdrop-blur-xl shadow-2xl overflow-hidden">
                    <img
                        src={t5Image}
                        alt="Momentum Scanner Interface"
                        className="w-full h-[500px] rounded-[24px] object-cover shadow-2xl"
                    />
                    {/* Overlay to give it a premium feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Currency Selection & Demo CTA */}
                <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-end">
                    <div className="relative flex flex-wrap items-center justify-center gap-2 lg:-top-8 lg:left-20 lg:justify-start">
                        {currencies.map((curr) => (
                            <button
                                key={curr}
                                onClick={() => setActiveCurrency(curr)}
                                className={`relative px-2 py-1 text-xl sm:text-2xl font-black transition-all duration-300 ${activeCurrency === curr
                                    ? "text-amber-500 scale-110"
                                    : "text-white/30 hover:text-white/70 hover:scale-105"
                                    }`}
                            >
                                {curr}
                                <div className={`absolute -bottom-1 left-0 h-[2px] w-full bg-amber-500 transition-all duration-500 ${activeCurrency === curr ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}></div>
                            </button>
                        ))}
                    </div>

                    <div className="relative -top-2 lg:-left-20">
                        <a href="#trial-form">
                            <Button variant="white" size="lg" className="h-16 rounded-2xl px-16 text-lg font-black uppercase tracking-widest border-2 border-white bg-transparent text-white hover:border-amber-500 hover:bg-amber-500 hover:text-black hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all shadow-2xl lg:mb-1">
                                Get 3 day free demo
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MultiTimeframeMomentumSection() {
    return (
        <section className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
                <div className="mb-12 text-left">
                    <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-tight uppercase italic leading-none">
                        MULTI TIME FRAME <span className="text-amber-450">MOMENTUM ANALYSIS</span>
                    </h2>
                </div>

                <div className="relative group mx-auto max-w-5xl">
                    {/* Decorative frame elements */}
                    <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-amber-500/20 to-transparent blur-sm transition-opacity group-hover:opacity-100 opacity-50"></div>

                    <div className="relative rounded-[30px] border border-white/10 bg-black/40 p-2 backdrop-blur-xl overflow-hidden shadow-2xl">
                        <img
                            src={t2Image}
                            alt="Multi Timeframe Momentum Analysis"
                            className="w-full rounded-[24px] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                        />

                        {/* Feature Highlight: Timeframe Dropdown */}
                        <div className="absolute top-[22%] left-[46%] w-[22%] h-[45%] pointer-events-none">
                            <div className="absolute inset-0 rounded-lg border-2 border-amber-500/50 bg-amber-500/5 shadow-[0_0_20px_rgba(245,158,11,0.3)] animate-pulse"></div>
                            <div className="absolute -inset-4 rounded-full bg-amber-500/20 blur-2xl animate-pulse delay-700"></div>

                            {/* Label */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-amber-500 px-2 py-1 text-[10px] font-black text-black uppercase tracking-tighter shadow-lg">
                                Multi-Timeframe Selection
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-amber-500"></div>
                            </div>
                        </div>

                        {/* Overlay to give it a premium feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TrialFormSection() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tradingviewId, setTradingviewId] = useState("");
    const [whatsapp, setWhatsapp] = useState("");

    const isEmailValid = /^\S+@\S+\.\S+$/.test(email.trim());
    const canSubmit = name.trim().length > 0 && isEmailValid && tradingviewId.trim().length > 0;

    return (
        <section id="trial-form" className="relative bg-[#050505] py-24 border-t border-white/5">
            <div className="mx-auto max-w-3xl px-4">
                <div className="text-center mb-12">
                    <div className="inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-500 uppercase tracking-widest mb-4 ring-1 ring-amber-500/30">
                        Limited Time Offer
                    </div>
                    <h4 className="text-3xl font-black text-white mb-2 uppercase italic">Start Your trial now</h4>
                    <p className="text-white/50 text-sm font-medium">Experience the power of our real-time momentum scanner.</p>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-black/40 p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
                    <form className="grid gap-6 sm:grid-cols-2" onSubmit={async (e) => {
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
                        <label className="grid gap-2">
                            <span className="text-xs font-black text-white/50 uppercase tracking-widest ml-1">Full Name</span>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="John Doe" className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-6 text-white placeholder:text-white/20 outline-none focus:border-amber-500/50 transition-all font-bold" />
                        </label>
                        <label className="grid gap-2">
                            <span className="text-xs font-black text-white/50 uppercase tracking-widest ml-1">Email Address</span>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="john@example.com" className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-6 text-white placeholder:text-white/20 outline-none focus:border-amber-500/50 transition-all font-bold" />
                        </label>
                        <label className="grid gap-2">
                            <span className="text-xs font-black text-white/50 uppercase tracking-widest ml-1">TradingView ID</span>
                            <input type="text" value={tradingviewId} onChange={e => setTradingviewId(e.target.value)} required placeholder="Your ID" className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-6 text-white placeholder:text-white/20 outline-none focus:border-amber-500/50 transition-all font-bold" />
                        </label>
                        <label className="grid gap-2">
                            <span className="text-xs font-black text-white/50 uppercase tracking-widest ml-1">WhatsApp <span className="text-white/20 font-medium">(Optional)</span></span>
                            <input type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="+1..." className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-6 text-white placeholder:text-white/20 outline-none focus:border-amber-500/50 transition-all font-bold" />
                        </label>
                        <button type="submit" disabled={!canSubmit} className="mt-4 sm:col-span-2 h-16 w-full rounded-2xl bg-amber-500 text-black font-black uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50">
                            Request 3-Day Free Trial
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default function ScannerPro() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="overflow-x-hidden bg-black min-h-screen text-white">
            <Navbar />

            <ScannerHero />

            <MultiTimeframeMomentumSection />

            {/* BUY TRADE Section */}
            <section className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
                    <div className="mb-12 text-left">
                        <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-tight uppercase italic leading-none">
                            BUY <span className="text-emerald-500">TRADE</span>
                        </h2>
                        <p className="mt-4 text-lg font-bold text-white/40 uppercase tracking-widest">Strong Momentum in buy side</p>
                    </div>
                    <div className="relative group mx-auto max-w-5xl">
                        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-emerald-500/20 to-transparent blur-sm opacity-50 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative rounded-[30px] border border-white/10 bg-black/40 p-2 backdrop-blur-xl overflow-hidden shadow-2xl">
                            <img src={t1Image} alt="Buy Trade Analysis" className="w-full rounded-[24px] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]" />
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
                        <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-tight uppercase italic leading-none">
                            Sell <span className="text-rose-500">Trade</span>
                        </h2>
                        <p className="mt-4 text-lg font-bold text-white/40 uppercase tracking-widest">Strong Momentum in sell side</p>
                    </div>
                    <div className="relative group mx-auto max-w-5xl">
                        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-rose-500/20 to-transparent blur-sm opacity-50 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative rounded-[30px] border border-white/10 bg-black/40 p-2 backdrop-blur-xl overflow-hidden shadow-2xl">
                            <img src={t4Image} alt="Sell Trade Analysis" className="w-full rounded-[24px] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NO Trade Section */}
            <section className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
                    <div className="mb-12 text-left">
                        <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-tight uppercase italic leading-none">
                            NO <span className="text-white/60">Trade</span>
                        </h2>
                        <p className="mt-4 text-lg font-bold text-white/40 uppercase tracking-widest">Low Momentum - Side ways move</p>
                    </div>
                    <div className="relative group mx-auto max-w-5xl">
                        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent blur-sm opacity-50 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative rounded-[30px] border border-white/10 bg-black/40 p-2 backdrop-blur-xl overflow-hidden shadow-2xl">
                            <img src={t3Image} alt="No Trade Analysis" className="w-full rounded-[24px] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Summary Cards: How to Use & Benefits */}
            <section className="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Card 1: HOW TO USE */}
                        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 p-10 backdrop-blur-xl transition-all hover:border-amber-500/30">
                            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl transition-all group-hover:bg-amber-500/10"></div>

                            <h3 className="mb-8 text-2xl font-black text-white italic tracking-tight uppercase">
                                HOW TO USE <span className="text-amber-500">MOMENTUM SCANNER</span>
                            </h3>

                            <ul className="space-y-6">
                                {[
                                    "SELECT TOP BUY ZONE PAIR FOR LONG ENTRY",
                                    "SELECT TOP SELL ZONE PAIR FOR SHORT ENTRY",
                                    "STICK WITH HIGH MOMENTUM CURRENCY PAIRS",
                                    "KEEP PROPER RISK REWARD RATION"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-black">
                                            {i + 1}
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-wide text-white/70 group-hover:text-white transition-colors">
                                            {text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 2: BENEFITS */}
                        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 p-10 backdrop-blur-xl transition-all hover:border-blue-500/30">
                            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl transition-all group-hover:bg-blue-500/10"></div>

                            <h3 className="mb-8 text-2xl font-black text-white italic tracking-tight uppercase">
                                BENEFITS OF <span className="text-blue-500">MOMENTUM SCANNER</span>
                            </h3>

                            <ul className="space-y-6">
                                {[
                                    "FOCUS ONLY ON HIGH MOMENTUM CURRENCY PAIR",
                                    "AVOID SIDEWAYS CONDITIONS",
                                    "STRUCTURED TRADE MANAGEMENT",
                                    "SAVE TIME FROM SCANNING CHARTS",
                                    "DESIGNED FOR DISCIPLINED TRADING"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-wide text-white/70 group-hover:text-white transition-colors">
                                            {text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <TryBeforeYouBuySection />
            <TrialFormSection />
        </main>
    );
}
