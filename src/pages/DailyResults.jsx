import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import { API_BASE_URL } from "../config.js";

export default function DailyResults() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_BASE_URL}/api/daily-results`);
                if (!response.ok) {
                    throw new Error("Failed to fetch daily results from server.");
                }
                const data = await response.json();
                setResults(data);
                setError(null);
            } catch (err) {
                console.error("Error loading daily results:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, []);

    const renderMedia = (result) => {
        if (result.videoUrl) {
            const isYouTube = result.videoUrl.includes("youtube.com") || result.videoUrl.includes("youtu.be");
            if (isYouTube) {
                const videoId = result.videoUrl.split('v=')[1]?.split('&')[0] || result.videoUrl.split('/').pop();
                return (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-white/10">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                            title={result.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full border-0"
                        ></iframe>
                    </div>
                );
            }
            return (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-white/10">
                    <video
                        controls
                        className="w-full h-full object-cover"
                        poster={result.image}
                    >
                        <source src={result.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            );
        }

        if (result.image) {
            return (
                <div className="w-full overflow-hidden rounded-xl mb-6 border border-white/10 aspect-video group-hover:border-amber-500/35 transition-colors">
                    <img
                        src={result.image}
                        alt={result.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        draggable="false"
                    />
                </div>
            );
        }

        return null;
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden border-b border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center relative z-10">
                    <h1 className="text-4xl font-black tracking-tight text-white mb-4 sm:text-5xl uppercase italic">
                        Daily <span className="text-amber-450">Trading Results</span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
                        Track our daily performance, setups, and trade breakdowns powered by AI.
                    </p>
                </div>
            </section>

            {/* Results Grid / Feed */}
            <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mb-4"></div>
                        <p className="text-white/60 text-lg font-bold">Loading results feed...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-20 border border-white/10 rounded-2xl bg-black/40 p-8">
                        <p className="text-red-450 text-lg font-bold mb-2">Error loading daily results</p>
                        <p className="text-white/60">{error}</p>
                    </div>
                ) : results.length === 0 ? (
                    <div className="text-center py-20 border border-white/10 rounded-2xl bg-black/40 p-8">
                        <p className="text-white/60 text-lg font-bold">No daily results posted yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="space-y-16">
                        {results.map((result) => (
                            <div 
                                key={result.id} 
                                className="group relative rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-amber-500/20 shadow-xl"
                            >
                                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-amber-500/5 blur-2xl transition-all group-hover:bg-amber-500/10"></div>
                                
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Left / Top side: Media */}
                                    {(result.image || result.videoUrl) && (
                                        <div className="w-full lg:w-1/2 shrink-0">
                                            {renderMedia(result)}
                                        </div>
                                    )}

                                    {/* Right / Bottom side: Content */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-3 py-1 bg-amber-500/10 text-amber-450 rounded-full text-xs font-black uppercase tracking-wider border border-amber-500/20">
                                                    {result.date}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-amber-450 transition-colors leading-tight italic">
                                                {result.title}
                                            </h2>
                                            <div 
                                                className="text-white/70 text-base leading-relaxed prose prose-invert max-w-none"
                                                dangerouslySetInnerHTML={{ __html: result.content }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
