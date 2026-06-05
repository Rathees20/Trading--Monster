import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config.js";

export const generateSlug = (title) => {
    if (!title) return "";
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
        .trim()
        .replace(/\s+/g, "-")        // Replace spaces with hyphens
        .replace(/-+/g, "-");        // Replace multiple hyphens with single hyphen
};

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
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_BASE_URL}/api/blogs`);
                if (!response.ok) {
                    throw new Error("Failed to fetch blog posts from server.");
                }
                const data = await response.json();
                setPosts(data);
                setError(null);
            } catch (err) {
                console.error("Error loading blog posts:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

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
                            className="absolute top-0 left-0 w-full h-full rounded-xl border-0"
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

    // Filter out drafts for public viewing
    const publishedPosts = posts.filter(p => p.status !== "draft");

    // Sort posts: newest first (higher ID first)
    const sortedPosts = [...publishedPosts].sort((a, b) => b.id - a.id);

    // Find featured post: post marked isFeatured, or the newest one
    const featuredPost = sortedPosts.find(p => p.isFeatured) || sortedPosts[0] || null;

    // Side posts: next 4 posts excluding featured
    const sidePosts = sortedPosts.filter(p => p.id !== (featuredPost ? featuredPost.id : null)).slice(0, 4);

    // Horizontal sections: newest 4 posts for each category
    const horizontalSections = [
        {
            title: "Trend Engine",
            posts: sortedPosts.filter(p => p.category === "Trend Engine").slice(0, 4)
        },
        {
            title: "Momentum Scanner",
            posts: sortedPosts.filter(p => p.category === "Momentum Scanner").slice(0, 4)
        },
        {
            title: "Breakout",
            posts: sortedPosts.filter(p => p.category === "Breakout").slice(0, 4)
        }
    ];

    const allPosts = sortedPosts;

    if (loading) {
        return (
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center min-h-[50vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4 sm:text-5xl">
                    Trading Monster <span className="text-amber-450">Blog</span>
                </h1>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                    Loading premium market insights...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center min-h-[50vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4 sm:text-5xl">
                    Trading Monster <span className="text-red-450">Blog</span>
                </h1>
                <p className="text-lg text-red-400 max-w-2xl mx-auto mb-4">
                    Error loading blog: {error}
                </p>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center min-h-[50vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4 sm:text-5xl">
                    Trading Monster <span className="text-amber-450">Blog</span>
                </h1>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                    No articles published yet. Check back soon!
                </p>
            </div>
        );
    }


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
                        <Link to={`/blog/${generateSlug(featuredPost.title)}`} className="lg:col-span-7 group cursor-pointer flex flex-col">
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
                                <Link to={`/blog/${generateSlug(post.title)}`} key={post.id} className="group cursor-pointer flex flex-col">
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
                                        <Link to={`/blog/${generateSlug(post.title)}`} key={post.id} className="group cursor-pointer flex flex-col">
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
                                <Link to={`/blog/${generateSlug(post.title)}`} key={post.id} className="group cursor-pointer flex flex-col">
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
