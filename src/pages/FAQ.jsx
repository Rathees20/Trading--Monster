import React, { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What market and time frame is this optimized for?",
            answer: "The system is optimized for XAUUSD (Gold) on the 15-minute timeframe. It may also be used on other high-volatility forex pairs. This is suitable for intraday traders."
        },
        {
            question: "How does the indicator work?",
            answer: "The indicator has two components. The top marks green (buy) or red (sell) zones. Trades are initiated only when all bottom confirmation filters align with the same color at candle close. If alignment is incomplete, no trade is taken."
        },
        {
            question: "What are the stop-loss and target levels?",
            answer: "The yellow line is your stop-loss. Place the initial SL at entry, and trail only after a candle closes using the updated level. The grey bands are your targets. Use the levels shown at entry and follow a set-and-forget approach."
        },
        {
            question: "The indicator shows three target levels. Which target should I use?",
            answer: "There are three target levels. For higher probability, use the closest target (Target 1). If Target 1 is already achieved or price is very close to it at entry, use Target 2 instead for better trade positioning."
        },
        {
            question: "How do I know if this system is right for me?",
            answer: "We offer a 3-day free demo so you can evaluate the system yourself. During the trial, we recommend using a demo trading account to observe its behavior and performance. If it suits your style and expectations, you can then proceed with a subscription."
        }
    ];

    return (
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4 sm:text-5xl">
                    Frequently Asked <span className="text-amber-450">Questions</span>
                </h1>
                <p className="text-lg text-white/60">
                    Everything you need to know about Trading Monster AI
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div
                            key={idx}
                            className="group rounded-[24px] border border-white/10 bg-black/45 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur transition-all duration-300 hover:border-amber-450/30"
                        >
                            <button
                                onClick={() => toggleAccordion(idx)}
                                className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8"
                            >
                                <h3 className={`text-lg font-bold transition-colors duration-300 sm:text-xl ${isOpen ? 'text-amber-450' : 'text-white'}`}>
                                    {faq.question}
                                </h3>
                                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-450/20 border-amber-450/30' : ''}`}>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`transition-colors duration-300 ${isOpen ? 'text-amber-450' : 'text-white/60'}`}
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="border-t border-white/5 p-6 pt-0 text-sm leading-7 text-white/70 sm:p-8 sm:pt-0 sm:text-base">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
