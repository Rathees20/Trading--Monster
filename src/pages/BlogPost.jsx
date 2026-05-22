import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../config.js";

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
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Scroll to top and load data on load / id change
    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchPostData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch single post
                const postRes = await fetch(`${API_BASE_URL}/api/blogs/${id}`);
                if (!postRes.ok) {
                    if (postRes.status === 404) {
                        throw new Error("Article not found.");
                    }
                    throw new Error("Failed to load article from server.");
                }
                const postData = await postRes.json();
                setPost(postData);

                // Fetch list of articles for related section
                const listRes = await fetch(`${API_BASE_URL}/api/blogs`);
                if (listRes.ok) {
                    const listData = await listRes.json();
                    setPosts(listData);
                }
            } catch (err) {
                console.error("Error loading blog details:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPostData();
    }, [id]);

    // Get all other published posts for related section
    const allPosts = posts.filter(p => p.status !== "draft");
    const relatedArticles = post ? allPosts.filter(a => String(a.id) !== String(post.id)) : [];

    const filteredRelated = relatedArticles
        .filter(article => activeRelatedCategory === "Recent" || article.category === activeRelatedCategory)
        .slice(0, 4);

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
                        className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
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

    if (loading) {
        return (
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center min-h-[50vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4 sm:text-5xl">
                    Trading Monster <span className="text-amber-450">Blog</span>
                </h1>
                <p className="text-lg text-white/60 max-w-2xl mx-auto">
                    Loading article...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center min-h-[55vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4 sm:text-5xl">
                    Error <span className="text-red-450">Occurred</span>
                </h1>
                <p className="text-lg text-red-400 max-w-2xl mx-auto mb-8">
                    {error}
                </p>
                <Link to="/blog" className="rounded-full bg-amber-450 px-6 py-2.5 text-sm font-semibold text-black shadow-lg hover:bg-amber-400 transition-all">
                    Back to Blog
                </Link>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center min-h-[55vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-4 sm:text-5xl">
                    Post <span className="text-amber-450">Not Found</span>
                </h1>
                <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
                    The article you are looking for does not exist or has been set to draft.
                </p>
                <Link to="/blog" className="rounded-full bg-amber-450 px-6 py-2.5 text-sm font-semibold text-black shadow-lg hover:bg-amber-400 transition-all">
                    Back to Blog
                </Link>
            </div>
        );
    }

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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-lg border border-amber-300 shadow-[0_0_15px_rgba(250,204,21,0.3)] select-none">
                        {(post.author || "T").charAt(0)}
                    </div>
                    <div>
                        <span className="text-white/90 font-bold block">{post.author || "Trading Monster"}</span>
                        <span>{post.date || "Feb 2026"}</span>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden tm-card p-1 shadow-2xl">
                <img
                    src={post.heroImage || post.image}
                    alt={post.title}
                    className="w-full h-auto max-h-[600px] object-cover rounded-xl"
                />
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none prose-p:text-white/80 prose-headings:text-white prose-a:text-amber-450 hover:prose-a:text-amber-400 prose-strong:text-amber-450 prose-strong:font-bold mb-12 custom-prose">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Inline Video Example */}
            {(post.contentVideo || post.videoUrl) && (
                <div className="my-12">
                    {renderVideo(post.contentVideo || post.videoUrl)}
                </div>
            )}

            {post.bottomContent && (
                <div className="prose prose-invert prose-lg max-w-none prose-p:text-white/80 prose-headings:text-white prose-a:text-amber-450 hover:prose-a:text-amber-400 prose-strong:text-amber-450 prose-strong:font-bold mb-16 custom-prose">
                    <div dangerouslySetInnerHTML={{ __html: post.bottomContent }} />
                </div>
            )}

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
                .custom-prose ul {
                    list-style-type: disc;
                    margin-left: 1.5rem;
                    margin-bottom: 1.5em;
                }
                .custom-prose li {
                    margin-bottom: 0.5em;
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
                        {filteredRelated.map(article => (
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
                        {filteredRelated.length === 0 && (
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

