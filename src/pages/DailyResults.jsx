import React, { useState, useEffect, useRef } from "react";
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

    const [selectedImage, setSelectedImage] = useState(null);
    const scrollContainerRef = useRef(null);

    const scrollSlider = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -360 : 360;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSelectedImage(null);
            }
        };
        if (selectedImage) {
            window.addEventListener("keydown", handleKeyDown);
            // Prevent scrolling on body when modal is open
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    const renderMedia = (result, isCompact = false) => {
        const spacingClass = isCompact ? "mb-0" : "mb-6";

        if (result.videoUrl) {
            const isYouTube = result.videoUrl.includes("youtube.com") || result.videoUrl.includes("youtu.be");
            if (isYouTube) {
                const videoId = result.videoUrl.split('v=')[1]?.split('&')[0] || result.videoUrl.split('/').pop();
                return (
                    <div className={`relative w-full aspect-video rounded-xl overflow-hidden ${spacingClass} border border-white/10`}>
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
                <div className={`relative w-full aspect-video rounded-xl overflow-hidden ${spacingClass} border border-white/10`}>
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
                <div className={`flex flex-col gap-1.5 w-full ${spacingClass}`}>
                    <div 
                        onClick={() => setSelectedImage(result.image)}
                        className="relative w-full overflow-hidden rounded-xl border border-white/10 aspect-video group-hover:border-amber-500/35 transition-colors cursor-zoom-in group/media"
                    >
                        <img
                            src={result.image}
                            alt={result.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            draggable="false"
                        />
                        {/* Premium hover overlay for zoom reminder */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                            <span className="bg-black/60 border border-white/10 text-white/95 text-[10px] font-black uppercase tracking-widest px-3.5 py-2 rounded-full flex items-center gap-1.5 backdrop-blur-sm shadow-xl">
                                🔍 Click to view full screen
                            </span>
                        </div>
                    </div>
                    {!isCompact && (
                        <span className="text-[10px] font-medium text-white/40 italic block text-right mt-0.5 pr-1">
                            * Click image to view full screen
                        </span>
                    )}
                </div>
            );
        }

        return null;
    };

    const renderCard = (result, isCompact = false) => {
        const hasContent = result.content && result.content.replace(/<[^>]*>/g, '').trim().length > 0;
        const cleanContent = result.content ? result.content.replace(/<[^>]*>/g, '').trim() : "";
        const showContent = hasContent && !cleanContent.includes("Enter daily result description");

        if (isCompact) {
            return (
                <div 
                    key={result.id} 
                    className="group relative rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5 backdrop-blur-xl transition-all hover:border-amber-500/20 hover:bg-black/60 shadow-xl flex flex-col h-full gap-4"
                >
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-amber-500/5 blur-xl transition-all group-hover:bg-amber-500/10 pointer-events-none"></div>
                    
                    {/* Media on top */}
                    {(result.image || result.videoUrl) && (
                        <div className="w-full shrink-0">
                            {renderMedia(result, true)}
                        </div>
                    )}

                    {/* Metadata & Title below media */}
                    <div className="flex flex-col justify-between flex-1 gap-2">
                        <div>
                            <span className="inline-block px-2.5 py-0.5 bg-amber-500/10 text-amber-450 rounded-full text-[10px] font-black uppercase tracking-wider border border-amber-500/20 mb-2">
                                {result.date}
                            </span>
                            <h3 className="text-sm sm:text-base font-black text-white group-hover:text-amber-450 transition-colors leading-tight italic line-clamp-2">
                                {result.title}
                            </h3>
                            {showContent && (
                                <p 
                                    className="text-white/60 text-xs mt-2 line-clamp-3 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: result.content }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div 
                key={result.id} 
                className="group relative rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-amber-500/20 shadow-xl"
            >
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-amber-500/5 blur-2xl transition-all group-hover:bg-amber-500/10 pointer-events-none"></div>
                
                {showContent ? (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {(result.image || result.videoUrl) && (
                            <div className="w-full lg:w-1/2 shrink-0">
                                {renderMedia(result, false)}
                            </div>
                        )}
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
                ) : (
                    <div className="flex flex-col gap-6 max-w-3xl mx-auto text-center">
                        <div>
                            <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-450 rounded-full text-xs font-black uppercase tracking-wider border border-amber-500/20 mb-3">
                                {result.date}
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-450 transition-colors leading-tight italic">
                                {result.title}
                            </h2>
                        </div>
                        {(result.image || result.videoUrl) && (
                            <div className="w-full">
                                {renderMedia(result, false)}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
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
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
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
                    <div>
                        {results.length >= 5 ? (
                            <div className="relative">
                                {/* Slider Navigation Header */}
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-lg font-black text-amber-450 uppercase tracking-widest italic">
                                        All Trading History
                                    </h2>
                                    <div className="flex gap-3 relative z-10">
                                        <button 
                                            onClick={() => scrollSlider("left")}
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/70 transition-all hover:bg-amber-500 hover:text-black hover:scale-105 active:scale-95"
                                            aria-label="Previous slide"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button 
                                            onClick={() => scrollSlider("right")}
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/70 transition-all hover:bg-amber-500 hover:text-black hover:scale-105 active:scale-95"
                                            aria-label="Next slide"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Snap Carousel Container */}
                                <div 
                                    ref={scrollContainerRef}
                                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
                                >
                                    {results.map((result) => (
                                        <div key={result.id} className="w-[280px] sm:w-[340px] shrink-0 snap-start">
                                            {renderCard(result, true)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : results.length === 1 ? (
                            <div className="max-w-4xl mx-auto">
                                {renderCard(results[0], false)}
                            </div>
                        ) : results.length === 2 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                {results.map((res) => renderCard(res, true))}
                            </div>
                        ) : results.length === 3 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {results.map((res) => renderCard(res, true))}
                            </div>
                        ) : (
                            /* results.length === 4 */
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                                {results.map((res) => renderCard(res, true))}
                            </div>
                        )}
                    </div>
                )}
            </section>

            {/* Premium Fullscreen Image Viewer Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-300 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button 
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95"
                        aria-label="Close image viewer"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image Container with maximum size constraint & zoom-out cursor */}
                    <div 
                        className="relative max-w-full max-h-[85vh] md:max-h-[90vh] flex items-center justify-center select-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Full View"
                            className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-xl border border-white/10 shadow-2xl transition-all duration-300 cursor-zoom-out"
                            onClick={() => setSelectedImage(null)}
                        />
                    </div>
                </div>
            )}
        </main>
    );
}
