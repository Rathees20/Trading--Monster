import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BlogPost() {
    const { id } = useParams();

    const categories = [
        "Recent",
        "Trend Engine",
        "Momentum Scanner",
        "Breakout",
        "Gold Strategy"
    ];

    const [activeRelatedCategory, setActiveRelatedCategory] = useState("Recent");

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Mock post data based on user screenshots
    const post = {
        title: "Auto Trading with Trading Monster: AI Strategy Alerts",
        category: "Product Updates",
        author: "Sean Mackay",
        date: "Nov 26, 2025",
        // Using a general trading/chart image as placeholder
        heroImage: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2070&auto=format&fit=crop",
        // Secondary media inside content
        contentVideo: "https://youtu.be/xHU5MHuUSKI?si=1a2-jbWPz6t2dLJY",
        content: `
            <p>Turn AI-built strategies into live, automated signals with Trading Monster's AI Strategy Alerts. Discover, stress-test, and "Dive Deeper" into any strategy, then stream precise entry/exit alerts to your screen, inbox, or bots. All synced with your existing Trading Monster workflow.</p>
            
            <h3>The next step for our AI Platform</h3>
            <p>Markets aren't getting easier. Institutional models are getting faster, retail tools are more automated, and the edge now belongs to traders who can combine human intelligence with machine-level execution.</p>
            <p>Over the last year, our <a href="#">AI platform</a> has grown from a simple strategy finder into a full backtesting engine: it understands the majority of technical analysis concepts traders use every day (yes, even order blocks, mean reversion, market structure, etc), it searches through millions of backtested strategies across every market, and it lets you save those strategies to your account & do further analysis on-platform or even on TradingView too.</p>
            <p>Today's update is about what happens next.</p>
        `,
        bottomContent: `
            <p>With <strong>AI Strategy Alerts</strong>, you're no longer just discovering & analyzing strategies, you're deploying them. Any strategy you pull from the Trading Monster AI can now fire live alerts: to your screen, your inbox, or via webhooks to route orders to your broker, exchange, or prop firm.</p>
            <p>This is the missing bridge between "that backtest looks great" and "this setup is actually firing on my account right now."</p>
            
            <h3>From millions of strategies to the one you actually trade</h3>
            <p>Stop trying to manually execute complex, multi-timeframe strategies. Let the engine do the heavy lifting while you focus on risk management and overall market direction.</p>
        `
    };

    const relatedArticles = [
        {
            id: 30,
            title: "QUANT: AI for Pine Script Trading",
            category: "Product Updates",
            author: "Alex Pierrefou",
            date: "Feb 10, 2026",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 31,
            title: "Volume Pitfalls: How to avoid them",
            category: "Strategies & Tips",
            author: "Sean Mackay",
            date: "Feb 08, 2026",
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 32,
            title: "How I use GPT-5 to Analyze and Trade Stocks",
            category: "AI & Technology",
            author: "Brady Young",
            date: "Feb 05, 2026",
            image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 33,
            title: "Analyzing the 15M Gold Strategy",
            category: "Gold Strategy",
            author: "Christopher Downie",
            date: "Feb 01, 2026",
            image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    // Simple helper to render video or image
    const renderVideo = (videoUrl) => {
        if (!videoUrl) return null;

        const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
        if (isYouTube) {
            const videoId = videoUrl.split('v=')[1]?.split('&')[0] || videoUrl.split('/').pop();
            return (
                <div className="relative w-full h-full pb-[56.25%] overflow-hidden rounded-xl tm-card p-1">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                        title="Embedded Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                    ></iframe>
                </div>
            );
        }

        return (
            <div className="overflow-hidden rounded-xl tm-card p-1">
                <video controls className="w-full h-full object-cover rounded-lg">
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    };

    return (
        <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

            {/* Header Section */}
            <div className="mb-8 border-b border-white/10 pb-8">
                <div className="flex items-center gap-4 mb-4">
                    <Link to="/blog" className="text-amber-450 text-sm font-semibold hover:text-amber-400 transition-colors uppercase tracking-wider flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Blog
                    </Link>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    <span className="text-amber-450 text-sm font-semibold uppercase tracking-wider">
                        {post.category}
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    {post.title}
                </h1>

                <div className="flex items-center gap-3 text-sm font-medium text-white/60">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-lg border border-amber-300 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                        {post.author.charAt(0)}
                    </div>
                    <div>
                        <span className="text-white/90 font-bold block">{post.author}</span>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden tm-card p-1 shadow-2xl">
                <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-auto max-h-[600px] object-cover rounded-xl"
                />
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none prose-p:text-white/80 prose-headings:text-white prose-a:text-amber-450 hover:prose-a:text-amber-400 prose-strong:text-amber-450 prose-strong:font-bold mb-12 custom-prose">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Inline Video Example */}
            {post.contentVideo && (
                <div className="my-12">
                    {renderVideo(post.contentVideo)}
                </div>
            )}

            <div className="prose prose-invert prose-lg max-w-none prose-p:text-white/80 prose-headings:text-white prose-a:text-amber-450 hover:prose-a:text-amber-400 prose-strong:text-amber-450 prose-strong:font-bold mb-16 custom-prose">
                <div dangerouslySetInnerHTML={{ __html: post.bottomContent }} />
            </div>

            {/* Custom CSS for Prose to clean up spacing from raw HTML */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-prose h3 {
                    margin-top: 2.5em;
                    margin-bottom: 1em;
                    font-size: 1.8rem;
                    font-weight: 800;
                    letter-spacing: -0.025em;
                }
                .custom-prose p {
                    line-height: 1.8;
                    margin-bottom: 1.5em;
                }
                .custom-prose a {
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
            `}} />

            {/* Related Articles Section */}
            <div className="border-t border-white/10 pt-16 mt-8 mb-8 w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                {/* Break out of max-w constraints to match the wide grid on blog index */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            Related Articles
                        </h2>
                        <Link to="/blog" className="text-sm font-semibold text-amber-450 hover:text-amber-400 transition-colors flex items-center gap-1 mt-1">
                            More Articles
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    </div>

                    {/* Category Navigation for Related Articles */}
                    <div className="flex overflow-x-auto hide-scrollbar gap-8 pb-4 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveRelatedCategory(cat)}
                                className={`whitespace-nowrap text-lg font-semibold transition-colors relative ${activeRelatedCategory === cat
                                    ? "text-amber-450"
                                    : "text-white/60 hover:text-white"
                                    }`}
                            >
                                {cat}
                                {activeRelatedCategory === cat && (
                                    <span className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-amber-450 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedArticles
                            .filter(article => activeRelatedCategory === "Recent" || article.category === activeRelatedCategory)
                            .map(article => (
                                <Link to={`/blog/${article.id}`} key={article.id} className="group cursor-pointer flex flex-col">
                                    <div className="w-full aspect-[16/10] overflow-hidden rounded-xl mb-4 tm-card p-1">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                                            draggable="false"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="text-amber-450 text-xs font-semibold mb-2 block uppercase tracking-wide">
                                            {article.category}
                                        </span>
                                        <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-3">
                                            {article.title}
                                        </h3>
                                        <div className="mt-auto flex items-center gap-1.5 text-xs text-white/50 font-medium">
                                            <span>By <span className="text-white/80">{article.author}</span></span>
                                            <span className="w-1 h-1 rounded-full bg-white/30"></span>
                                            <span>{article.date}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        {relatedArticles.filter(article => article.category === activeRelatedCategory).length === 0 && activeRelatedCategory !== "Recent" && (
                            <div className="col-span-full py-10 text-center tm-card rounded-2xl border border-white/10">
                                <p className="text-white/60 text-lg">No related posts found for {activeRelatedCategory}.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </article>
    );
}
