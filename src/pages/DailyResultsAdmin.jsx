import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config.js";
import RichTextEditor from "../components/RichTextEditor.jsx";

export default function DailyResultsAdmin() {
    // Auth state
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [role, setRole] = useState("eadmin");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    // Results state
    const [results, setResults] = useState([]);
    
    // Form / Editor states
    const [editingResult, setEditingResult] = useState(null); // null if creating, result object if editing
    const [showFormModal, setShowFormModal] = useState(false);
    const [activeTab, setActiveTab] = useState("write"); // "write" or "preview"
    
    // Form fields
    const [formId, setFormId] = useState("");
    const [formTitle, setFormTitle] = useState("");
    const [formDate, setFormDate] = useState("");
    const [formImage, setFormImage] = useState("");
    const [formVideoUrl, setFormVideoUrl] = useState("");
    const [formContent, setFormContent] = useState("");

    // Fetch all daily results
    const fetchDailyResults = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/daily-results`);
            if (!response.ok) {
                throw new Error("Failed to load daily results.");
            }
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error("Error fetching daily results:", error);
        }
    };

    // Check sessionStorage for active login session on mount
    useEffect(() => {
        const storedToken = sessionStorage.getItem("tm_results_token");
        const storedRole = sessionStorage.getItem("tm_results_role") || "eadmin";
        if (storedToken && (storedRole === "eadmin" || storedRole === "admin")) {
            setIsLoggedIn(true);
            setToken(storedToken);
            setRole(storedRole);
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

            // Verify role is eadmin or admin
            if (data.role !== "eadmin" && data.role !== "admin") {
                throw new Error("Access denied: You do not have permissions for the Daily Results Panel.");
            }

            sessionStorage.setItem("tm_results_token", data.token);
            sessionStorage.setItem("tm_results_role", data.role || "eadmin");
            sessionStorage.setItem("tm_results_logged_in", "true");
            setToken(data.token);
            setRole(data.role || "eadmin");
            setIsLoggedIn(true);
            fetchDailyResults();
        } catch (error) {
            setLoginError(error.message || "Invalid username or password. Access denied.");
        }
    };

    // Handle Logout
    const handleLogout = () => {
        sessionStorage.removeItem("tm_results_token");
        sessionStorage.removeItem("tm_results_logged_in");
        sessionStorage.removeItem("tm_results_role");
        setToken("");
        setRole("eadmin");
        setIsLoggedIn(false);
        setResults([]);
    };

    // Open Form Modal for Creating a Daily Result
    const openCreateModal = () => {
        setEditingResult(null);
        setFormId("");
        setFormTitle("");
        
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        setFormDate(new Date().toLocaleDateString('en-US', options));
        
        setFormImage("");
        setFormVideoUrl("");
        setFormContent(`<p>Enter daily result description, profit/loss, and details...</p>`);
        setActiveTab("write");
        setShowFormModal(true);
    };

    // Open Form Modal for Editing a Daily Result
    const openEditModal = (res) => {
        setEditingResult(res);
        setFormId(res.id);
        setFormTitle(res.title);
        setFormDate(res.date || "");
        setFormImage(res.image || "");
        setFormVideoUrl(res.videoUrl || "");
        setFormContent(res.content || "");
        setActiveTab("write");
        setShowFormModal(true);
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

        const payload = {
            title: formTitle,
            date: formDate,
            image: formImage,
            videoUrl: formVideoUrl,
            content: formContent
        };

        try {
            let url = `${API_BASE_URL}/api/daily-results`;
            let method = "POST";

            if (editingResult) {
                url = `${API_BASE_URL}/api/daily-results/${editingResult.id}`;
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
                throw new Error(errData.error || "Failed to save daily result.");
            }

            fetchDailyResults();
            setShowFormModal(false);
        } catch (error) {
            alert(error.message);
        }
    };

    // Render Login Interface
    if (!isLoggedIn) {
        return (
            <div className="mx-auto max-w-md px-4 py-24 sm:px-6 min-h-[70vh] flex flex-col justify-center bg-[#050505]">
                <div className="w-full rounded-3xl border border-white/10 bg-black/45 p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="text-center mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-450 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                            Results Admin Portal
                        </span>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white mt-4">
                            Daily Results <span className="text-amber-450">Admin</span>
                        </h1>
                        <p className="text-sm text-white/50 mt-2">
                            Manage Trading Monster performance cards.
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
                                placeholder="Enter editor username"
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

    // Render Admin Form Modal (Write / Preview)
    if (isLoggedIn && showFormModal) {
        return (
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 min-h-[80vh] bg-[#050505] text-white">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            {editingResult ? "Edit" : "Create"} <span className="text-amber-450">Daily Result</span>
                        </h1>
                        <p className="text-sm text-white/50 mt-1">
                            {editingResult ? `Editing ID: ${formId}` : "Adding a new performance card to the results feed."}
                        </p>
                    </div>
                    
                    {/* Tab Toggle */}
                    <div className="flex bg-neutral-900 border border-white/10 rounded-xl p-1 gap-1">
                        <button
                            onClick={() => setActiveTab("write")}
                            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === "write" ? "bg-amber-450 text-black" : "text-white/60 hover:text-white"}`}
                        >
                            Write Content
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
                            {/* Title */}
                            <div>
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">
                                    Result Title *
                                </label>
                                <input
                                    type="text"
                                    value={formTitle}
                                    onChange={(e) => setFormTitle(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/80 outline-none transition-all placeholder-white/30"
                                    placeholder="e.g. XAUUSD Buy setup +120 pips profit..."
                                    required
                                />
                            </div>

                            {/* Metadata Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                            {/* Media Selection Panel */}
                            <div className="space-y-4 border-t border-white/5 pt-6">
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-1">
                                    Upload Image (Optional)
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
                            </div>

                            {/* Main Content Editor */}
                            <div className="space-y-3 border-t border-white/5 pt-6 flex flex-col">
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider flex justify-between">
                                    <span>Result Details *</span>
                                    <span className="text-[10px] text-white/40 normal-case font-medium">Explain trade context, indicators, or setup breakdown</span>
                                </label>
                                <RichTextEditor
                                    value={formContent}
                                    onChange={setFormContent}
                                    placeholder="Explain daily trades, results, or profit breakdowns..."
                                    minHeight="350px"
                                />
                            </div>
                        </form>
                    ) : (
                        /* Live Preview Tab */
                        <div className="max-w-4xl mx-auto rounded-2xl border border-white/5 bg-neutral-900/60 p-6 md:p-10 shadow-inner">
                            <article className="prose prose-invert prose-lg max-w-none">
                                {/* Preview Header */}
                                <div className="mb-6 border-b border-white/10 pb-6">
                                    <div className="flex items-center gap-3 mb-3 text-xs font-semibold text-amber-450 uppercase tracking-wider">
                                        <span>Preview Mode</span>
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                                        {formTitle || "Untitled"}
                                    </h1>
                                    <div className="flex items-center gap-2.5 text-xs text-white/50">
                                        <div>
                                            <span className="text-white/80 font-bold block">Daily Result Entry</span>
                                            <span>{formDate || "Draft"}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Preview Image */}
                                {formImage && (
                                    <div className="mb-8 rounded-xl overflow-hidden aspect-[16/9] max-h-96">
                                        <img
                                            src={formImage}
                                            alt="Preview Hero"
                                            className="w-full h-full object-cover"
                                        />
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
                        {editingResult ? "Save Changes" : "Publish Daily Result"}
                    </button>
                </div>
            </div>
        );
    }

    // Render Admin Dashboard Listing
    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 min-h-[80vh] bg-[#050505] text-white">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Daily Results <span className="text-amber-450">Admin Panel</span>
                    </h1>
                    <p className="text-sm text-white/60 mt-1">
                        Logged in as <span className="text-amber-450 font-bold capitalize">{role}</span>. Publish and manage daily performance results and setups.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        to="/daily-results"
                        className="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-bold text-white/80 hover:bg-white/5 hover:text-white transition"
                    >
                        View Results Page
                    </Link>
                    <button
                        onClick={openCreateModal}
                        className="rounded-xl bg-amber-450 hover:bg-amber-400 text-black font-bold px-4 py-2.5 text-xs transition duration-300 shadow-[0_0_10px_rgba(245,158,11,0.2)] hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                    >
                        + Create Daily Result
                    </button>
                    <button
                        onClick={handleLogout}
                        className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-2.5 text-xs font-bold text-red-400 hover:bg-red-500/10 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>

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
                            {results.map((res) => (
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
                                            onClick={() => openEditModal(res)}
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
                            {results.length === 0 && (
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
        </div>
    );
}
