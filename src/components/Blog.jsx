import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
    const categories = [
        "Recent",
        "Trend Engine",
        "Momentum Scanner",
        "Breakout",
        "Gold Strategy"
    ];

    const categoryDescriptions = {
        "Trend Engine": "Everything you need to know about how our AI identifies trends, aligns multiple timeframes, and calculates probabilities.",
        "Momentum Scanner": "Updates and guides on spotting hidden divergences and capturing momentum shifts before they happen.",
        "Breakout": "Strategies, tips, and mechanics for recognizing and filtering out fake breakouts from the real moves.",
        "Gold Strategy": "Specific insights, backtests, and refinements for trading XAUUSD on the 15-minute timeframe using our proprietary logic."
    };

    const [activeCategory, setActiveCategory] = useState("Recent");

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Helper to render media (image or video)
    const renderMedia = (post) => {
        if (post.videoUrl) {
            const isYouTube = post.videoUrl.includes("youtube.com") || post.videoUrl.includes("youtu.be");
            if (isYouTube) {
                const videoId = post.videoUrl.split('v=')[1]?.split('&')[0] || post.videoUrl.split('/').pop();
                return (
                    <div className="relative w-full h-full pb-[56.25%]">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                            title={post.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full rounded-xl"
                        ></iframe>
                    </div>
                );
            }
            return (
                <video
                    controls
                    className="w-full h-full object-cover rounded-xl"
                    poster={post.image}
                >
                    <source src={post.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )
        }

        return (
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                draggable="false"
            />
        );
    };

    const featuredPost = {
        id: 1,
        title: "Mastering the Trend Engine: A Complete Guide",
        excerpt: "Learn how the AI Trend Engine processes multi-timeframe data to find the highest probability setups in the current market conditions.",
        category: "Product Updates",
        author: "Trading Monster Team",
        date: "Feb 15, 2026",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
        videoUrl: "https://youtu.be/xHU5MHuUSKI?si=1a2-jbWPz6t2dLJY"
    };

    const sidePosts = [
        {
            id: 2,
            title: "Spotting Reversals with Momentum Scanner",
            category: "Technical Analysis",
            author: "Alex Pierrefou",
            date: "Jan 22, 2026",
            image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Trading Gold (XAUUSD) like a Pro",
            category: "Strategies & Tips",
            author: "Brady Young",
            date: "Jan 18, 2026",
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Avoiding Fakeouts: The Breakout Checklist",
            category: "Strategies & Tips",
            author: "Sean Mackay",
            date: "Jan 12, 2026",
            image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "Why Multi-Timeframe Alignment is Crucial",
            category: "Technical Analysis",
            author: "Christopher Downie",
            date: "Jan 10, 2026",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    const horizontalSections = [
        {
            title: "Trend Engine",
            posts: [
                {
                    id: 10,
                    title: "Advanced Engine Adjustments",
                    category: "Trend Engine",
                    author: "Alex Pierrefou",
                    date: "Jan 08, 2026",
                    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    id: 11,
                    title: "Riding the Wave to Profit",
                    category: "Trend Engine",
                    author: "Brady Young",
                    date: "Jan 07, 2026",
                    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    id: 12,
                    title: "When to trust the Trend Line",
                    category: "Trend Engine",
                    author: "Brady Young",
                    date: "Jan 06, 2026",
                    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    id: 13,
                    title: "Is it a trend or a trap?",
                    category: "Trend Engine",
                    author: "Christopher Downie",
                    date: "Jan 05, 2026",
                    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000&auto=format&fit=crop"
                }
            ]
        },
        {
            title: "Momentum Scanner",
            posts: [
                {
                    id: 20,
                    title: "How to Use the Momentum Scanner Effectively",
                    category: "Momentum Scanner",
                    author: "Sean Mackay",
                    date: "Jan 12, 2026",
                    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    id: 21,
                    title: "Finding the Reversal: Momentum Tips",
                    category: "Momentum Scanner",
                    author: "Sean Mackay",
                    date: "Nov 26, 2025",
                    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    id: 22,
                    title: "Combining Momentum with Price Action",
                    category: "Momentum Scanner",
                    author: "Brady Young",
                    date: "Sep 29, 2025",
                    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    id: 23,
                    title: "Divergence Trading on the Scanner",
                    category: "Momentum Scanner",
                    author: "Alex Pierrefou",
                    date: "Sep 15, 2025",
                    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
                }
            ]
        },
        {
            title: "Breakout",
            posts: [
                {
                    id: 30,
                    title: "QUANT: AI for Pine Script Trading Breakouts",
                    category: "Breakout",
                    author: "Alex Pierrefou",
                    date: "Feb 10, 2026",
                    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    id: 31,
                    title: "Volume Pitfalls: How to avoid fakeouts",
                    category: "Breakout",
                    author: "Sean Mackay",
                    date: "Feb 08, 2026",
                    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    id: 32,
                    title: "Consolidations before the big move",
                    category: "Breakout",
                    author: "Brady Young",
                    date: "Feb 05, 2026",
                    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    id: 33,
                    title: "Analyzing the Breakout Logic",
                    category: "Breakout",
                    author: "Christopher Downie",
                    date: "Feb 01, 2026",
                    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000&auto=format&fit=crop"
                }
            ]
        }
    ];

    // Combine all posts for filtering
    const allPostsRaw = [
        featuredPost,
        ...sidePosts,
        ...horizontalSections.flatMap(s => s.posts)
    ];

    // Deduplicate posts based on id
    const allPosts = Array.from(new Map(allPostsRaw.map(p => [p.id, p])).values());

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-10 lg:mb-16 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4 sm:text-5xl">
                    Trading Monster <span className="text-amber-450">Blog</span>
                </h1>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                    Insights, strategies, and updates to help you dominate the market.
                </p>
            </div>

            {/* Category Navigation */}
            <div className="mb-12 border-b border-white/10">
                <div className="flex overflow-x-auto hide-scrollbar gap-8 pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`whitespace-nowrap text-lg font-semibold transition-colors relative ${activeCategory === cat
                                ? "text-amber-450"
                                : "text-white/60 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Dynamic Content Rendering */}
            {activeCategory === "Recent" ? (
                <>
                    {/* Grid Layout matching reference image for Recent */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Featured Post (Left Column) */}
                        <Link to={`/blog/${featuredPost.id}`} className="lg:col-span-7 group cursor-pointer flex flex-col">
                            <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl mb-6 tm-card p-1">
                                {renderMedia(featuredPost)}
                            </div>
                            <div className="flex-1 mt-4">
                                <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-450 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
                                    {featuredPost.category}
                                </span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors leading-tight">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-white/70 text-lg leading-relaxed line-clamp-3">
                                    {featuredPost.excerpt}
                                </p>
                            </div>
                        </Link>

                        {/* Right Column Grid (4 smaller posts) */}
                        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
                            {sidePosts.map(post => (
                                <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer flex flex-col">
                                    <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-4 tm-card p-1">
                                        {renderMedia(post)}
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="text-amber-450 text-xs font-semibold mb-2 block uppercase tracking-wide">
                                            {post.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                                            {post.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Category Sections (Technical Analysis, AI & Technology, Recent) */}
                    <div className="mt-20 space-y-16">
                        {horizontalSections.map((section, idx) => (
                            <div key={idx} className="border-t border-white/10 pt-10">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-bold text-white tracking-tight">
                                        {section.title}
                                    </h2>
                                    <button
                                        onClick={() => handleCategoryChange(section.title === "Recent" ? "Recent" : section.title)}
                                        className="text-sm font-semibold text-amber-450 hover:text-amber-400 transition-colors flex items-center gap-1"
                                    >
                                        View All
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {section.posts.map(post => (
                                        <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer flex flex-col">
                                            <div className="w-full aspect-[16/10] overflow-hidden rounded-xl mb-4 tm-card p-1">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                                                    draggable="false"
                                                />
                                            </div>
                                            <div className="flex-1 flex flex-col">
                                                <span className="text-amber-450 text-xs font-semibold mb-2 block uppercase tracking-wide">
                                                    {post.category}
                                                </span>
                                                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-3">
                                                    {post.title}
                                                </h3>
                                                <div className="mt-auto flex items-center gap-1.5 text-xs text-white/50 font-medium">
                                                    <span>By <span className="text-white/80">{post.author}</span></span>
                                                    <span className="w-1 h-1 rounded-full bg-white/30"></span>
                                                    <span>{post.date}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="mt-12">
                    <div className="mb-12 border-b border-white/10 pb-12">
                        <h2 className="text-5xl font-extrabold text-white mb-6">{activeCategory}</h2>
                        <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                            {categoryDescriptions[activeCategory] || "Explore the latest insights and updates for this topic."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {allPosts
                            .filter(p => activeCategory === "Recent" || p.category === activeCategory)
                            .map(post => (
                                <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer flex flex-col">
                                    <div className="w-full aspect-[16/10] overflow-hidden rounded-xl mb-4 tm-card p-1">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                                            draggable="false"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="text-amber-450 text-xs font-semibold mb-2 block uppercase tracking-wide">
                                            {post.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-3">
                                            {post.title}
                                        </h3>
                                        <div className="mt-auto flex items-center gap-1.5 text-xs text-white/50 font-medium">
                                            <span>By <span className="text-white/80">{post.author || "Trading Monster"}</span></span>
                                            <span className="w-1 h-1 rounded-full bg-white/30"></span>
                                            <span>{post.date || "Feb 2026"}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        {allPosts.filter(p => p.category === activeCategory).length === 0 && (
                            <div className="col-span-full py-20 text-center tm-card rounded-2xl border border-white/10">
                                <p className="text-white/60 text-lg">No posts found in this category yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
