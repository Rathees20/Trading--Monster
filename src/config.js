// Trading Monster Frontend Configuration

export const API_BASE_URL =
    window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
        ? "https://trading-back-ky7j.onrender.com"
        : ""; // Relative paths in production if hosted on single domain/Vercel serverless functions
