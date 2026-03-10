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

// Mock data for the momentum scanner
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
                    <h1 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-tighter uppercase italic leading-[0.9]">
                        Momentum <span className="text-amber-450">Scanner</span> <br />
                        <span className="text-3xl sm:text-xl lg:text-2xl text-white/40">for Currency</span>
                    </h1>
                </div>

                {/* Main Scanner Container (Chart + Table) */}
                <div className="relative mb-12 rounded-[32px] border border-white/10 bg-black/40 p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
                    <div className="grid gap-6 lg:grid-cols-12">
                        {/* Left: Chart Representation */}
                        <div className="relative min-h-[400px] rounded-2xl border border-white/5 bg-[#0a0a0a] lg:col-span-8 overflow-hidden group">
                            {/* Grid background to look like a chart */}
                            <div className="absolute inset-0 opacity-20" style={{
                                backgroundImage: `linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)`,
                                backgroundSize: '40px 40px'
                            }}></div>

                            {/* Representative Chart Elements (Static Visuals) */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 animate-pulse">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white/40 tracking-widest uppercase">Live Market Feed</h3>
                                    <p className="text-sm text-white/20">Analyzing {activeCurrency} Pairs...</p>
                                </div>
                            </div>

                            {/* Top Left info like in the image */}
                            <div className="absolute top-4 left-4 flex items-center gap-3">
                                <div className="rounded bg-black/60 px-2 py-1 text-[10px] font-bold text-white/60 border border-white/10">
                                    NEW ZEALAND DOLLAR / JAPANESE YEN · 15 · OANDA
                                </div>
                            </div>
                        </div>

                        {/* Right: Scanner Table */}
                        <div className="lg:col-span-4">
                            <div className="rounded-2xl border border-white/10 bg-black/60 overflow-hidden h-full">
                                {/* Table Header */}
                                <div className="grid grid-cols-12 border-b border-white/10 bg-white/5 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-white/40">
                                    <div className="col-span-2">#</div>
                                    <div className="col-span-5">Pair</div>
                                    <div className="col-span-5 text-right">Momentum</div>
                                </div>

                                {/* Table Body - Matches the style in the image */}
                                <div className="divide-y divide-white/5 max-h-[400px] overflow-y-auto custom-scrollbar">
                                    {currentData.map((item, index) => (
                                        <div
                                            key={item.pair}
                                            className="grid grid-cols-12 items-center px-4 py-3 transition-colors hover:bg-white/5"
                                        >
                                            <div className="col-span-2 text-[10px] font-bold text-white/20">{index + 1}</div>
                                            <div className="col-span-5">
                                                <span className="text-sm font-bold text-white tracking-tight">{item.pair}</span>
                                            </div>
                                            <div className="col-span-5 text-right">
                                                <div className={`inline-block px-2 py-1 rounded text-xs font-black min-w-[60px] ${item.zone === "buy" ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]" : "bg-rose-500 text-black shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                                                    }`}>
                                                    {item.momentum > 0 ? `+${item.momentum}` : item.momentum}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Currency Selection & Demo CTA */}
                <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-end">
                    <div className="relative flex flex-wrap items-center justify-center gap-2 lg:-top-4 lg:left-10 lg:justify-start">
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

                    <div className="relative lg:-left-10">
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

            <WhyMostTradersLose />
            <RulesAINeverBreaksSection />

            <MultiTimeframeTrendValidatorSection />
            <HowTradingMonsterAIDecides />
            <AITrendEngineSection />

            <TryBeforeYouBuySection />
            <TrialFormSection />
        </main>
    );
}
