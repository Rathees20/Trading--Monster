import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config.js";
import RichTextEditor from "../components/RichTextEditor.jsx";

export default function BlogAdmin() {
    // Auth state
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [role, setRole] = useState("admin");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    // Blog states
    const [posts, setPosts] = useState([]);
    const [dailyResults, setDailyResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    
    // Form / Editor states
    const [editingPost, setEditingPost] = useState(null); // null if creating, post object if editing/result editing
    const [showFormModal, setShowFormModal] = useState(false);
    const [activeTab, setActiveTab] = useState("write"); // "write" or "preview"
    const [adminViewTab, setAdminViewTab] = useState("blog"); // "blog", "results", or "dashboards"
    const [formMode, setFormMode] = useState("blog"); // "blog" or "result"
    
    // Form fields
    const [formId, setFormId] = useState("");
    const [formTitle, setFormTitle] = useState("");
    const [formExcerpt, setFormExcerpt] = useState("");
    const [formCategory, setFormCategory] = useState("Trend Engine");
    const [formAuthor, setFormAuthor] = useState("Trading Monster Team");
    const [formDate, setFormDate] = useState("");
    const [formImage, setFormImage] = useState("");
    const [formVideoUrl, setFormVideoUrl] = useState("");
    const [formContent, setFormContent] = useState("");
    const [formBottomContent, setFormBottomContent] = useState("");
    const [formStatus, setFormStatus] = useState("published"); // "published" or "draft"
    const [formIsFeatured, setFormIsFeatured] = useState(false);

    const categories = [
        "Trend Engine",
        "Momentum Scanner",
        "Breakout",
        "Gold Strategy"
    ];

    const authorSuggestions = [
        "Trading Monster Team",
        "Alex Pierrefou",
        "Sean Mackay",
        "Brady Young",
        "Christopher Downie"
    ];

    // Quick pick stock images to make post creation beautiful and easy
    const stockImages = [
        { label: "Chart Analysis", url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" },
        { label: "Laptop Trading", url: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000&auto=format&fit=crop" },
        { label: "Gold Bars", url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop" },
        { label: "Stock Market Board", url: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000&auto=format&fit=crop" }
    ];

    // Fetch all blogs (public or admin based on token presence)
    const fetchBlogs = async (authToken) => {
        try {
            const headers = {};
            if (authToken) {
                headers["Authorization"] = `Bearer ${authToken}`;
            }

            const response = await fetch(`${API_BASE_URL}/api/blogs`, { headers });
            
            if (response.status === 401 || response.status === 403) {
                // Token invalid or expired
                handleLogout();
                return;
            }

            if (!response.ok) {
                throw new Error("Failed to load blog posts.");
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    // Fetch all daily results
    const fetchDailyResults = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/daily-results`);
            if (!response.ok) {
                throw new Error("Failed to load daily results.");
            }
            const data = await response.json();
            setDailyResults(data);
        } catch (error) {
            console.error("Error fetching daily results:", error);
        }
    };

    // Check sessionStorage for active login session on mount
    useEffect(() => {
        const storedToken = sessionStorage.getItem("tm_admin_token");
        const storedRole = sessionStorage.getItem("tm_admin_role") || "admin";
        if (storedToken) {
            setIsLoggedIn(true);
            setToken(storedToken);
            setRole(storedRole);
            if (storedRole === "eadmin") {
                setAdminViewTab("results");
            } else {
                setAdminViewTab("blog");
            }
            fetchBlogs(storedToken);
            fetchDailyResults();
        }
    }, []);

    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoginError("");
            const response = await fetch(`${API_BASE_URL}/api/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error("Invalid username or password.");
            }

            sessionStorage.setItem("tm_admin_token", data.token);
            sessionStorage.setItem("tm_admin_role", data.role || "admin");
            sessionStorage.setItem("tm_admin_logged_in", "true");
            setToken(data.token);
            const userRole = data.role || "admin";
            setRole(userRole);
            setIsLoggedIn(true);
            if (userRole === "eadmin") {
                setAdminViewTab("results");
            } else {
                setAdminViewTab("blog");
            }
            fetchBlogs(data.token);
            fetchDailyResults();
        } catch (error) {
            setLoginError("Invalid username or password. Access denied.");
        }
    };

    // Handle Logout
    const handleLogout = () => {
        sessionStorage.removeItem("tm_admin_token");
        sessionStorage.removeItem("tm_admin_logged_in");
        sessionStorage.removeItem("tm_admin_role");
        setToken("");
        setRole("admin");
        setIsLoggedIn(false);
        setPosts([]);
        setDailyResults([]);
    };

    // Open Form Modal for Creating a New Post
    const openCreateModal = () => {
        setFormMode("blog");
        setEditingPost(null);
        setFormId("");
        setFormTitle("");
        setFormExcerpt("");
        setFormCategory("Trend Engine");
        setFormAuthor("Trading Monster Team");
        
        // Auto set current date like "May 21, 2026"
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        setFormDate(new Date().toLocaleDateString('en-US', options));
        
        setFormImage(stockImages[0].url);
        setFormVideoUrl("");
        setFormContent(`
<p>Write your engaging introduction here. Keep it structured and punchy to hook your readers immediately.</p>

<h3>Section Heading</h3>
<p>Elaborate on your strategy details, settings, or recent results. Ensure you explain key concepts in detail.</p>
        `);
        setFormBottomContent(`<p>Add concluding remarks, risk warnings, or a call-to-action to try the indicator.</p>`);
        setFormStatus("published");
        setFormIsFeatured(false);
        setActiveTab("write");
        setShowFormModal(true);
    };

    // Open Form Modal for Editing a Post
    const openEditModal = (post) => {
        setFormMode("blog");
        setEditingPost(post);
        setFormId(post.id);
        setFormTitle(post.title);
        setFormExcerpt(post.excerpt || "");
        setFormCategory(post.category);
        setFormAuthor(post.author || "Trading Monster Team");
        setFormDate(post.date || "");
        setFormImage(post.heroImage || post.image || "");
        setFormVideoUrl(post.contentVideo || post.videoUrl || "");
        setFormContent(post.content || "");
        setFormBottomContent(post.bottomContent || "");
        setFormStatus(post.status || "published");
        setFormIsFeatured(!!post.isFeatured);
        setActiveTab("write");
        setShowFormModal(true);
    };

    // Open Form Modal for Creating a Daily Result
    const openCreateResultModal = () => {
        setFormMode("result");
        setEditingPost(null);
        setFormId("");
        setFormTitle("");
        setFormExcerpt("");
        setFormCategory("");
        setFormAuthor("");
        
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        setFormDate(new Date().toLocaleDateString('en-US', options));
        
        setFormImage("");
        setFormVideoUrl("");
        setFormContent(`<p>Enter daily result description, profit/loss, and details...</p>`);
        setFormBottomContent("");
        setFormStatus("published");
        setFormIsFeatured(false);
        setActiveTab("write");
        setShowFormModal(true);
    };

    // Open Form Modal for Editing a Daily Result
    const openEditResultModal = (res) => {
        setFormMode("result");
        setEditingPost(res);
        setFormId(res.id);
        setFormTitle(res.title);
        setFormExcerpt("");
        setFormCategory("");
        setFormAuthor("");
        setFormDate(res.date || "");
        setFormImage(res.image || "");
        setFormVideoUrl(res.videoUrl || "");
        setFormContent(res.content || "");
        setFormBottomContent("");
        setFormStatus("published");
        setFormIsFeatured(false);
        setActiveTab("write");
        setShowFormModal(true);
    };

    // Delete a Post
    const handleDeletePost = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
            try {
                const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
                    method: "DELETE",
                    headers: { "Authorization": `Bearer ${token}` }
                });
                if (!response.ok) {
                    const errData = await response.json();
                    throw new Error(errData.error || "Failed to delete post.");
                }
                fetchBlogs(token);
            } catch (error) {
                alert(error.message);
            }
        }
    };

    // Delete a Daily Result
    const handleDeleteResult = async (id) => {
        if (window.confirm("Are you sure you want to delete this daily result? This action cannot be undone.")) {
            try {
                const response = await fetch(`${API_BASE_URL}/api/daily-results/${id}`, {
                    method: "DELETE",
                    headers: { "Authorization": `Bearer ${token}` }
                });
                if (!response.ok) {
                    const errData = await response.json();
                    throw new Error(errData.error || "Failed to delete daily result.");
                }
                fetchDailyResults();
            } catch (error) {
                alert(error.message);
            }
        }
    };

    // Set a post as featured
    const handleSetFeatured = async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ isFeatured: true })
            });
            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || "Failed to make post featured.");
            }
            fetchBlogs(token);
        } catch (error) {
            alert(error.message);
        }
    };

    // Handle Image Upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle Form Submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        if (!formTitle.trim()) {
            alert("Title is required.");
            return;
        }

        const payload = formMode === "result" ? {
            title: formTitle,
            date: formDate,
            image: formImage,
            videoUrl: formVideoUrl,
            content: formContent
        } : {
            title: formTitle,
            excerpt: formExcerpt,
            category: formCategory,
            author: formAuthor,
            date: formDate,
            image: formImage,
            heroImage: formImage,
            videoUrl: formVideoUrl,
            contentVideo: formVideoUrl,
            content: formContent,
            bottomContent: formBottomContent,
            status: formStatus,
            isFeatured: formIsFeatured
        };

        try {
            let url = formMode === "result" 
                ? `${API_BASE_URL}/api/daily-results`
                : `${API_BASE_URL}/api/blogs`;
            let method = "POST";

            if (editingPost) {
                url = formMode === "result"
                    ? `${API_BASE_URL}/api/daily-results/${editingPost.id}`
                    : `${API_BASE_URL}/api/blogs/${editingPost.id}`;
                method = "PUT";
            }

            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || `Failed to save ${formMode === "result" ? "daily result" : "blog post"}.`);
            }

            if (formMode === "result") {
                fetchDailyResults();
            } else {
                fetchBlogs(token);
            }
            setShowFormModal(false);
        } catch (error) {
            alert(error.message);
        }
    };

    // Statistics Calculation
    const totalPosts = posts.length;
    const publishedCount = posts.filter(p => p.status !== "draft").length;
    const draftCount = posts.filter(p => p.status === "draft").length;
    const featuredTitle = posts.find(p => p.isFeatured)?.title || "None (Newest overall used)";

    // Filtering & Searching posts
    const filteredPosts = posts.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              p.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === "All" || p.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    // Render Login Interface
    if (!isLoggedIn) {
        return (
            <div className="mx-auto max-w-md px-4 py-24 sm:px-6 min-h-[70vh] flex flex-col justify-center">
                <div className="w-full rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
                    {/* Glowing Accent Ring */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="text-center mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-450 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                            Secure Portal
                        </span>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white mt-4">
                            Blog <span className="text-amber-450">Admin Panel</span>
                        </h1>
                        <p className="text-sm text-white/50 mt-2">
                            Manage the Trading Monster publications.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        {loginError && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-xl text-center">
                                {loginError}
                            </div>
                        )}
                        <div>
                            <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/80 outline-none transition-all"
                                placeholder="Enter admin username"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/80 outline-none transition-all"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-amber-450 hover:bg-amber-400 text-black font-bold py-3 text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                        >
                            Access Dashboard
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Render Admin Dashboard
    if (isLoggedIn && showFormModal) {
        return (
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 min-h-[80vh]">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            {editingPost ? "Edit" : "Create"} <span className="text-amber-450">{formMode === "result" ? "Daily Result" : "Blog Article"}</span>
                        </h1>
                        <p className="text-sm text-white/50 mt-1">
                            {editingPost ? `Editing ID: ${formId}` : `Adding a new ${formMode === "result" ? "daily result entry" : "publication"} to the Trading Monster feed.`}
                        </p>
                    </div>
                    
                    {/* Tab Toggle */}
                    <div className="flex bg-neutral-900 border border-white/10 rounded-xl p-1 gap-1">
                        <button
                            onClick={() => setActiveTab("write")}
                            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === "write" ? "bg-amber-450 text-black" : "text-white/60 hover:text-white"}`}
                        >
                            Write Post
                        </button>
                        <button
                            onClick={() => setActiveTab("preview")}
                            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === "preview" ? "bg-amber-450 text-black" : "text-white/60 hover:text-white"}`}
                        >
                            Live Preview
                        </button>
                    </div>
                </div>

                {/* Form Body */}
                <div className="mb-8">
                    {activeTab === "write" ? (
                        <form className="max-w-7xl mx-auto space-y-6 bg-neutral-900/40 p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl">
                            {/* Title & Excerpt */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">
                                        {formMode === "result" ? "Result Title *" : "Article Title *"}
                                    </label>
                                    <input
                                        type="text"
                                        value={formTitle}
                                        onChange={(e) => setFormTitle(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/80 outline-none transition-all placeholder-white/30"
                                        placeholder={formMode === "result" ? "e.g. Gold Strategy +150 pips profit..." : "Enter article title..."}
                                        required
                                    />
                                </div>
                                {formMode === "blog" && (
                                    <div>
                                        <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">
                                            Short Excerpt / Summary *
                                        </label>
                                        <textarea
                                            value={formExcerpt}
                                            onChange={(e) => setFormExcerpt(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-xs text-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/80 outline-none h-20 resize-none transition-all placeholder-white/30"
                                            placeholder="A brief 1-2 sentence overview for the index page card."
                                            required
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Metadata Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {formMode === "blog" && (
                                    <>
                                        <div>
                                            <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">
                                                Category
                                            </label>
                                            <input
                                                type="text"
                                                value={formCategory}
                                                onChange={(e) => setFormCategory(e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/80 outline-none transition-all placeholder-white/30"
                                                placeholder="e.g. Trend Engine"
                                                list="blog-categories"
                                            />
                                            <datalist id="blog-categories">
                                                {categories.map(cat => (
                                                    <option key={cat} value={cat} />
                                                ))}
                                            </datalist>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">
                                                Author
                                            </label>
                                            <input
                                                type="text"
                                                value={formAuthor}
                                                onChange={(e) => setFormAuthor(e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/80 outline-none transition-all placeholder-white/30"
                                                placeholder="Author Name"
                                                list="authors"
                                            />
                                            <datalist id="authors">
                                                {authorSuggestions.map(author => (
                                                    <option key={author} value={author} />
                                                ))}
                                            </datalist>
                                        </div>
                                    </>
                                )}
                                <div>
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">
                                        Date
                                    </label>
                                    <input
                                        type="text"
                                        value={formDate}
                                        onChange={(e) => setFormDate(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/80 outline-none transition-all"
                                        placeholder="e.g. Feb 15, 2026"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">
                                        Video URL (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        value={formVideoUrl}
                                        onChange={(e) => setFormVideoUrl(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/80 outline-none transition-all"
                                        placeholder="YouTube / mp4 URL"
                                    />
                                </div>
                            </div>

                            {/* Hero Image & Settings Panel */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/5 pt-6">
                                <div className="md:col-span-2 space-y-4">
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-1">
                                        {formMode === "result" ? "Upload Image (Optional)" : "Hero Image Selection *"}
                                    </label>
                                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                                        <div className="w-full sm:w-auto">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:ring-1 focus:ring-amber-500 outline-none file:mr-4 file:py-1.5 file:px-3.5 file:rounded-full file:border-0 file:text-[10px] file:font-semibold file:bg-amber-500/10 file:text-amber-450 hover:file:bg-amber-500/20"
                                            />
                                        </div>
                                        {formImage && (
                                            <div className="relative w-36 h-20 rounded-xl overflow-hidden border border-white/10 group flex-shrink-0">
                                                <img src={formImage} alt="Hero Preview" className="w-full h-full object-cover" />
                                                <button type="button" onClick={() => setFormImage("")} className="absolute top-1 right-1 bg-black/70 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 hover:bg-red-500 transition-all">✕</button>
                                            </div>
                                        )}
                                    </div>
                                    {/* Quick Pick Stock Images - Only for blog */}
                                    {formMode === "blog" && (
                                        <div>
                                            <span className="text-[10px] font-semibold text-white/40 block mb-2">Or choose a premium stock photo:</span>
                                            <div className="grid grid-cols-4 gap-2">
                                                {stockImages.map((img, idx) => (
                                                    <button
                                                        key={idx}
                                                        type="button"
                                                        onClick={() => setFormImage(img.url)}
                                                        className={`relative rounded-lg overflow-hidden border aspect-video transition ${formImage === img.url ? 'border-amber-450 scale-[1.03] shadow-[0_0_10px_rgba(245,158,11,0.3)]' : 'border-white/10 opacity-70 hover:opacity-100'}`}
                                                        title={img.label}
                                                    >
                                                        <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {formMode === "blog" && (
                                    <div className="space-y-3">
                                        <label className="block text-xs font-bold text-white/50 uppercase tracking-wider">
                                            Publication Settings
                                        </label>
                                        <div className="flex flex-col gap-3 border border-white/5 bg-white/5 p-4 rounded-xl">
                                            <label className="flex items-center gap-2 text-xs text-white/80 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formIsFeatured}
                                                    onChange={(e) => setFormIsFeatured(e.target.checked)}
                                                    className="rounded text-amber-500 focus:ring-amber-500/50 bg-neutral-900 border-white/20 h-4 w-4"
                                                />
                                                Set as Featured
                                            </label>
                                            <div className="w-full border-t border-white/5 my-0.5" />
                                            <div className="flex flex-col gap-2">
                                                <label className="flex items-center gap-1.5 text-xs text-white/80 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value="published"
                                                        checked={formStatus === "published"}
                                                        onChange={() => setFormStatus("published")}
                                                        className="text-amber-500 focus:ring-amber-500/50 bg-neutral-900 border-white/20"
                                                    />
                                                    Publish immediately
                                                </label>
                                                <label className="flex items-center gap-1.5 text-xs text-white/80 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="status"
                                                        value="draft"
                                                        checked={formStatus === "draft"}
                                                        onChange={() => setFormStatus("draft")}
                                                        className="text-amber-500 focus:ring-amber-500/50 bg-neutral-900 border-white/20"
                                                    />
                                                    Save as Draft
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Main Centered Content Editor */}
                            <div className="space-y-3 border-t border-white/5 pt-6 flex flex-col">
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider flex justify-between">
                                    <span>{formMode === "result" ? "Result Details *" : "Article Content *"}</span>
                                    <span className="text-[10px] text-white/40 normal-case">Gmail-style editor. Switch to HTML view to edit code directly.</span>
                                </label>
                                <RichTextEditor
                                    value={formContent}
                                    onChange={setFormContent}
                                    placeholder={formMode === "result" ? "Explain daily trades, results, or profit breakdowns..." : "Write your amazing post paragraphs here..."}
                                    minHeight="350px"
                                />
                            </div>

                            {/* Bottom Content Editor - Only for blog */}
                            {formMode === "blog" && (
                                <div className="space-y-3">
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-wider flex justify-between">
                                        <span>Bottom Content (Optional)</span>
                                        <span className="text-[10px] text-white/40 normal-case font-medium">Renders below the inline video</span>
                                    </label>
                                    <RichTextEditor
                                        value={formBottomContent}
                                        onChange={setFormBottomContent}
                                        placeholder="Write concluding remarks..."
                                        minHeight="180px"
                                    />
                                </div>
                            )}
                        </form>
                    ) : (
                        /* Live Preview Tab */
                        <div className="max-w-4xl mx-auto rounded-2xl border border-white/5 bg-neutral-900/60 p-6 md:p-10 shadow-inner">
                            <article className="prose prose-invert prose-lg max-w-none">
                                {/* Preview Header */}
                                <div className="mb-6 border-b border-white/10 pb-6">
                                    <div className="flex items-center gap-3 mb-3 text-xs font-semibold text-amber-450 uppercase tracking-wider">
                                        <span>Preview Mode</span>
                                        {formMode === "blog" && (
                                            <>
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                                                <span>{formCategory}</span>
                                            </>
                                        )}
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                                        {formTitle || "Untitled"}
                                    </h1>
                                    <div className="flex items-center gap-2.5 text-xs text-white/50">
                                        {formMode === "blog" ? (
                                            <>
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-sm">
                                                    {(formAuthor || "T").charAt(0)}
                                                </div>
                                                <div>
                                                    <span className="text-white/80 font-bold block">{formAuthor}</span>
                                                    <span>{formDate || "Draft"}</span>
                                                </div>
                                            </>
                                        ) : (
                                            <div>
                                                <span className="text-white/80 font-bold block">Daily Result Entry</span>
                                                <span>{formDate || "Draft"}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Preview Hero Image */}
                                {formImage && (
                                    <div className="mb-8 rounded-xl overflow-hidden aspect-[16/9] max-h-96">
                                        <img
                                            src={formImage}
                                            alt="Preview Hero"
                                            className="w-full h-full object-cover"
                                            onError={(e) => { if (formMode === "blog") e.target.src = stockImages[0].url }}
                                        />
                                    </div>
                                )}

                                {/* Preview Excerpt */}
                                {formExcerpt && (
                                    <div className="border-l-4 border-amber-400 pl-4 py-1 my-6 italic text-white/70 text-sm md:text-base bg-white/5 rounded-r-xl">
                                        <span className="font-bold uppercase tracking-wider text-[10px] text-amber-400 block mb-1">Summary Excerpt</span>
                                        {formExcerpt}
                                    </div>
                                )}

                                {/* Preview Content Body */}
                                <div className="prose prose-invert prose-p:text-white/80 prose-headings:text-white prose-a:text-amber-400 custom-prose text-sm md:text-base">
                                    {formContent ? (
                                        <div dangerouslySetInnerHTML={{ __html: formContent }} />
                                    ) : (
                                        <p className="text-white/30 italic">No content written yet.</p>
                                    )}
                                </div>

                                {/* Preview Video */}
                                {formVideoUrl && (
                                    <div className="my-8">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-2">Video Element Preview</span>
                                        <div className="border border-white/10 rounded-xl p-4 bg-black/40 text-center text-white/50 text-xs flex flex-col justify-center items-center h-48">
                                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="text-amber-400 mb-2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                                            Video source connected:
                                            <div className="text-[10px] text-white/40 mt-1 font-mono truncate max-w-md">{formVideoUrl}</div>
                                        </div>
                                    </div>
                                )}

                                {/* Preview Bottom Content */}
                                {formBottomContent && (
                                    <div className="prose prose-invert prose-p:text-white/80 custom-prose text-sm md:text-base border-t border-white/5 pt-6 mt-6">
                                        <div dangerouslySetInnerHTML={{ __html: formBottomContent }} />
                                    </div>
                                )}
                            </article>
                        </div>
                    )}
                </div>

                {/* Actions Footer */}
                <div className="flex items-center justify-end gap-3 border-t border-white/10 pt-6">
                    <button
                        type="button"
                        onClick={() => setShowFormModal(false)}
                        className="rounded-xl border border-white/10 px-6 py-2.5 text-xs font-bold text-white/70 hover:bg-white/5 hover:text-white transition"
                    >
                        Cancel / Back to Dashboard
                    </button>
                    <button
                        type="button"
                        onClick={handleFormSubmit}
                        className="rounded-xl bg-amber-450 hover:bg-amber-400 text-black font-bold px-6 py-2.5 text-xs transition duration-300 shadow-[0_0_10px_rgba(245,158,11,0.2)] hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                    >
                        {editingPost ? "Save Changes" : "Publish Article"}
                    </button>
                </div>
            </div>
        );
    }

    // Render Admin Dashboard Listing
    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 min-h-[80vh]">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Blog & Results <span className="text-amber-450">Admin Panel</span>
                    </h1>
                    <p className="text-sm text-white/60 mt-1">
                        Logged in as <span className="text-amber-450 font-bold capitalize">{role}</span>. Publish articles, configure layouts, and manage external system sheets in one place.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        to="/blog"
                        className="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-bold text-white/80 hover:bg-white/5 hover:text-white transition"
                    >
                        View Blog
                    </Link>
                    <Link
                        to="/daily-results"
                        className="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-bold text-white/80 hover:bg-white/5 hover:text-white transition"
                    >
                        View Results Page
                    </Link>
                    {role === "admin" && adminViewTab === "blog" ? (
                        <button
                            onClick={openCreateModal}
                            className="rounded-xl bg-amber-450 hover:bg-amber-400 text-black font-bold px-4 py-2.5 text-xs transition duration-300 shadow-[0_0_10px_rgba(245,158,11,0.2)] hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                        >
                            + Create Article
                        </button>
                    ) : adminViewTab === "results" ? (
                        <button
                            onClick={openCreateResultModal}
                            className="rounded-xl bg-amber-450 hover:bg-amber-400 text-black font-bold px-4 py-2.5 text-xs transition duration-300 shadow-[0_0_10px_rgba(245,158,11,0.2)] hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                        >
                            + Create Daily Result
                        </button>
                    ) : null}
                    <button
                        onClick={handleLogout}
                        className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-2.5 text-xs font-bold text-red-400 hover:bg-red-500/10 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-white/10 mb-8 gap-6">
                {role === "admin" && (
                    <button
                        onClick={() => setAdminViewTab("blog")}
                        className={`pb-4 text-sm font-bold tracking-wider uppercase transition-all relative ${
                            adminViewTab === "blog" ? "text-amber-450 font-extrabold" : "text-white/40 hover:text-white"
                        }`}
                    >
                        Blog Manager
                        {role === "admin" && adminViewTab === "blog" && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-450 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                        )}
                    </button>
                )}
                <button
                    onClick={() => setAdminViewTab("results")}
                    className={`pb-4 text-sm font-bold tracking-wider uppercase transition-all relative ${
                        adminViewTab === "results" ? "text-amber-450 font-extrabold" : "text-white/40 hover:text-white"
                    }`}
                >
                    Daily Results Manager
                    {adminViewTab === "results" && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-450 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                    )}
                </button>
                {role === "admin" && (
                    <button
                        onClick={() => setAdminViewTab("dashboards")}
                        className={`pb-4 text-sm font-bold tracking-wider uppercase transition-all relative ${
                            adminViewTab === "dashboards" ? "text-amber-450 font-extrabold" : "text-white/40 hover:text-white"
                        }`}
                    >
                        System Dashboards
                        {adminViewTab === "dashboards" && (
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-450 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                        )}
                    </button>
                )}
            </div>

            {role === "admin" && adminViewTab === "dashboards" && (
                /* Premium External Dashboards */
                <div className="mb-10 relative">
                    {/* Decorative background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-sky-500/10 blur-3xl pointer-events-none rounded-3xl" />
                    
                    <div className="relative rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8 backdrop-blur-md shadow-2xl overflow-hidden">
                        {/* Corner accents */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full blur-2xl pointer-events-none" />
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                                    <svg className="w-6 h-6 text-amber-450" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-white tracking-tight">System <span className="text-amber-450">Dashboards</span></h2>
                                    <p className="text-xs text-white/50 mt-1">Live synchronized data feeds and process management</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Primary Dashboard Card */}
                            <a href="https://docs.google.com/spreadsheets/d/1IYBWzE3lx-RlSw5ppyZLZ_D9A7UfM19kAGLcbAK1Wic/edit?gid=0#gid=0" target="_blank" rel="noreferrer" 
                               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/50 p-1 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full rounded-xl bg-black/50 p-6 backdrop-blur-sm border border-white/5 flex flex-col justify-between">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 14H8v-2h1.5v2zm0-3H8v-2h1.5v2zm0-3H8V9h1.5v2zm4 6h-1.5v-2H13.5v2zm0-3h-1.5v-2H13.5v2zm0-3h-1.5V9H13.5v2zm4 6H16v-2h1.5v2zm0-3H16v-2h1.5v2zm0-3H16V9h1.5v2z"/></svg>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:text-emerald-400 text-white/30 transition-colors">
                                            <svg className="w-4 h-4 translate-x-px -translate-y-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Primary Data Hub</h3>
                                        <p className="text-xs text-white/50 mt-2 line-clamp-2">Access the main operational spreadsheet. Manage primary records, track progress, and review live data points.</p>
                                    </div>
                                </div>
                            </a>

                            {/* Secondary Dashboard Card */}
                            <a href="https://docs.google.com/spreadsheets/d/1IYBWzE3lx-RlSw5ppyZLZ_D9A7UfM19kAGLcbAK1Wic/edit?gid=826489533#gid=826489533" target="_blank" rel="noreferrer" 
                               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/50 p-1 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full rounded-xl bg-black/50 p-6 backdrop-blur-sm border border-white/5 flex flex-col justify-between">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 14H8v-2h1.5v2zm0-3H8v-2h1.5v2zm0-3H8V9h1.5v2zm4 6h-1.5v-2H13.5v2zm0-3h-1.5v-2H13.5v2zm0-3h-1.5V9H13.5v2zm4 6H16v-2h1.5v2zm0-3H16v-2h1.5v2zm0-3H16V9h1.5v2z"/></svg>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:text-sky-400 text-white/30 transition-colors">
                                            <svg className="w-4 h-4 translate-x-px -translate-y-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">Secondary Tracker</h3>
                                        <p className="text-xs text-white/50 mt-2 line-clamp-2">Access the supplementary data sheet. Monitor secondary metrics and auxiliary process information.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {role === "admin" && adminViewTab === "blog" && (
                <>
                    {/* Metrics Dashboard */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
                        <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                            <span className="text-xs font-semibold text-white/40 uppercase tracking-wider block">Total Posts</span>
                            <span className="text-3xl font-extrabold text-white mt-1 block">{totalPosts}</span>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                            <span className="text-xs font-semibold text-white/40 uppercase tracking-wider block">Published Posts</span>
                            <span className="text-3xl font-extrabold text-amber-400 mt-1 block">{publishedCount}</span>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                            <span className="text-xs font-semibold text-white/40 uppercase tracking-wider block">Draft Articles</span>
                            <span className="text-3xl font-extrabold text-neutral-400 mt-1 block">{draftCount}</span>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm overflow-hidden whitespace-nowrap text-ellipsis">
                            <span className="text-xs font-semibold text-white/40 uppercase tracking-wider block">Featured Article</span>
                            <span className="text-lg font-bold text-white mt-2 block truncate" title={featuredTitle}>{featuredTitle}</span>
                        </div>
                    </div>

                    {/* Post Filter & Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
                        <div className="w-full md:w-96 relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search posts by title or author..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none"
                            />
                            <svg className="absolute left-3.5 top-3.5 h-4 w-4 text-white/40" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <span className="text-xs text-white/55 font-semibold whitespace-nowrap">Category:</span>
                            <select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white/80 focus:ring-1 focus:ring-amber-500 outline-none w-full md:w-44"
                            >
                                <option value="All">All Categories</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Posts Dashboard Grid/List */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-white/5 text-left text-xs text-white/70">
                                <thead className="bg-neutral-900/60 font-semibold text-white/50 uppercase tracking-wider text-[10px]">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Article</th>
                                        <th scope="col" className="px-6 py-4">Category</th>
                                        <th scope="col" className="px-6 py-4">Author</th>
                                        <th scope="col" className="px-6 py-4">Date</th>
                                        <th scope="col" className="px-6 py-4">Status</th>
                                        <th scope="col" className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 bg-transparent">
                                    {filteredPosts.map((post) => (
                                        <tr key={post.id} className="hover:bg-white/5 transition duration-150">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-16 overflow-hidden rounded-lg bg-neutral-800 flex-shrink-0">
                                                        <img
                                                            src={post.heroImage || post.image}
                                                            alt={post.title}
                                                            className="h-full w-full object-cover"
                                                            onError={(e) => { e.target.src = stockImages[0].url }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-white text-sm line-clamp-1">{post.title}</div>
                                                        <div className="flex items-center gap-2 mt-0.5">
                                                            {post.isFeatured && (
                                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-extrabold bg-amber-500/25 text-amber-400 border border-amber-500/35 uppercase tracking-wide">
                                                                    Featured
                                                                </span>
                                                            )}
                                                            {post.videoUrl && (
                                                                <span className="text-[10px] text-amber-400/70 flex items-center gap-0.5">
                                                                    <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> Video
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 align-middle whitespace-nowrap text-white/90">
                                                {post.category}
                                            </td>
                                            <td className="px-6 py-4 align-middle whitespace-nowrap">
                                                {post.author}
                                            </td>
                                            <td className="px-6 py-4 align-middle whitespace-nowrap">
                                                {post.date}
                                            </td>
                                            <td className="px-6 py-4 align-middle whitespace-nowrap">
                                                {post.status === "draft" ? (
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-neutral-500/10 text-neutral-400 border border-neutral-500/20">
                                                        Draft
                                                    </span>
                                                ) : (
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                        Published
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 align-middle text-right space-x-2 whitespace-nowrap">
                                                {!post.isFeatured && post.status !== "draft" && (
                                                    <button
                                                        onClick={() => handleSetFeatured(post.id)}
                                                        className="text-[10px] font-bold text-amber-450 hover:text-amber-400 bg-amber-500/5 hover:bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/10 transition"
                                                        title="Make Featured"
                                                    >
                                                        Feature
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => openEditModal(post)}
                                                    className="text-[10px] font-bold text-sky-400 hover:text-sky-300 bg-sky-500/5 hover:bg-sky-500/10 px-2.5 py-1 rounded-lg border border-sky-500/10 transition"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeletePost(post.id)}
                                                    className="text-[10px] font-bold text-red-400 hover:text-red-300 bg-red-500/5 hover:bg-red-500/10 px-2.5 py-1 rounded-lg border border-red-500/10 transition"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredPosts.length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="text-center py-12 text-white/40">
                                                No articles found. Create one to get started!
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {adminViewTab === "results" && (
                <>
                    {/* Daily Results Dashboard Grid/List */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-white/5 text-left text-xs text-white/70">
                                <thead className="bg-neutral-900/60 font-semibold text-white/50 uppercase tracking-wider text-[10px]">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Result Entry</th>
                                        <th scope="col" className="px-6 py-4">Date</th>
                                        <th scope="col" className="px-6 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 bg-transparent">
                                    {dailyResults.map((res) => (
                                        <tr key={res.id} className="hover:bg-white/5 transition duration-150">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    {res.image && (
                                                        <div className="h-10 w-16 overflow-hidden rounded-lg bg-neutral-800 flex-shrink-0 border border-white/10">
                                                            <img
                                                                src={res.image}
                                                                alt={res.title}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div className="font-bold text-white text-sm line-clamp-1">{res.title}</div>
                                                        {res.videoUrl && (
                                                            <div className="text-[10px] text-amber-450/70 flex items-center gap-0.5 mt-0.5">
                                                                <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> Video Connected
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 align-middle whitespace-nowrap">
                                                {res.date}
                                            </td>
                                            <td className="px-6 py-4 align-middle text-right space-x-2 whitespace-nowrap">
                                                <button
                                                    onClick={() => openEditResultModal(res)}
                                                    className="text-[10px] font-bold text-sky-400 hover:text-sky-300 bg-sky-500/5 hover:bg-sky-500/10 px-2.5 py-1 rounded-lg border border-sky-500/10 transition"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteResult(res.id)}
                                                    className="text-[10px] font-bold text-red-400 hover:text-red-300 bg-red-500/5 hover:bg-red-500/10 px-2.5 py-1 rounded-lg border border-red-500/10 transition"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {dailyResults.length === 0 && (
                                        <tr>
                                            <td colSpan="3" className="text-center py-12 text-white/40">
                                                No daily results found. Create one to get started!
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
