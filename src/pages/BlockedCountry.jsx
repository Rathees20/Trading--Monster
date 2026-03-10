import React from 'react';
import logoImg from "../assets/logo.jpeg";

export default function BlockedCountry() {
    return (
        <div className="tm-bg min-h-dvh flex flex-col items-center justify-center p-6 text-center text-white">
            <div className="relative mb-8">
                <div className="absolute inset-0 -z-10 animate-pulse bg-amber-400/20 blur-2xl rounded-full"></div>
                <img
                    src={logoImg}
                    alt="Trading Monster AI"
                    className="h-20 w-20 rounded-2xl border border-white/10 shadow-2xl"
                    draggable="false"
                />
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Access <span className="text-amber-450">Denied</span>
            </h1>

            <p className="max-w-md text-lg text-white/60 leading-relaxed">
                We apologize, but access to <span className="font-semibold text-white">Trading Monster AI</span> is currently not available in your region.
            </p>

            <div className="mt-12 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                Geographical Restriction
            </div>
        </div>
    );
}
