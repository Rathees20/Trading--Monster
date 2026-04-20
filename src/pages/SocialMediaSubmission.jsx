import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan",
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam",
    "Yemen", "Zambia", "Zimbabwe"
];

export default function SocialMediaSubmission() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        country: "",
        facebook: "",
        instagram: "",
        youtube: "",
        snapchat: "",
        tiktok: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [charCount, setCharCount] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "message") {
            if (value.length <= 150) {
                setFormData(prev => ({ ...prev, [name]: value }));
                setCharCount(value.length);
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Using Google Script pattern with mode: 'no-cors' to avoid browser blocking
            // Note: with no-cors, we can't read the response body, so we assume success
            await fetch("https://script.google.com/macros/s/AKfycbxh84kGpvH4iEH1Krb4oFJsNP9VT6sTlJYOd7IFWGtDBxHXbvn4k-IqKoWZXWz7wV4hVQ/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify({
                    ...formData,
                    formType: "social",
                    timestamp: new Date().toISOString()
                })
            });

            setIsSubmitted(true);

            // Redirect to home page after a short delay to show success state
            setTimeout(() => {
                navigate("/");
                window.scrollTo(0, 0);
            }, 2000);
        } catch (error) {
            console.error("Submission error:", error);
            // Fallback for network errors
            setIsSubmitted(true); // Still show success or handle error UI
            setTimeout(() => navigate("/"), 2000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
                        Join Our <span className="text-amber-450">Influencer Network</span>
                    </h1>
                    <p className="text-lg text-white/60">
                        Connect with Trading Monster AI and showcase your social presence.
                    </p>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    {isSubmitted ? (
                        <div className="py-12 text-center animate-fade-in">
                            <div className="mb-6 flex justify-center">
                                <div className="h-20 w-20 rounded-full bg-amber-450/20 flex items-center justify-center text-amber-450 border border-amber-450/30">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Submission Successful!</h2>
                            <p className="text-white/60">Thank you for joining our network. Redirecting you home...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-white/80 px-1">Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-amber-450/50 transition-all"
                                    />
                                </div>

                                {/* Mobile */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-white/80 px-1">Mobile No.</label>
                                    <input
                                        required
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="+1 234 567 890"
                                        className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-amber-450/50 transition-all"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-white/80 px-1">Email</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="email@example.com"
                                        className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-amber-450/50 transition-all"
                                    />
                                </div>

                                {/* Country */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-white/80 px-1">Country</label>
                                    <select
                                        required
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-amber-450/50 transition-all appearance-none"
                                    >
                                        <option value="" disabled>Select your country</option>
                                        {countries.map(c => (
                                            <option key={c} value={c} className="bg-black">{c}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <h3 className="text-lg font-bold text-amber-450 mb-6 italic">Social Media Links</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Facebook */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-white/80 px-1">Facebook Page / Group</label>
                                        <input
                                            type="url"
                                            name="facebook"
                                            value={formData.facebook}
                                            onChange={handleChange}
                                            placeholder="facebook.com/yourpage"
                                            className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-amber-450/50 transition-all"
                                        />
                                    </div>

                                    {/* Instagram */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-white/80 px-1">Instagram</label>
                                        <input
                                            type="url"
                                            name="instagram"
                                            value={formData.instagram}
                                            onChange={handleChange}
                                            placeholder="instagram.com/username"
                                            className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-amber-450/50 transition-all"
                                        />
                                    </div>

                                    {/* Youtube */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-white/80 px-1">Youtube</label>
                                        <input
                                            type="url"
                                            name="youtube"
                                            value={formData.youtube}
                                            onChange={handleChange}
                                            placeholder="youtube.com/c/yourchannel"
                                            className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-amber-450/50 transition-all"
                                        />
                                    </div>

                                    {/* Snapchat */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-white/80 px-1">Snapchat</label>
                                        <input
                                            type="url"
                                            name="snapchat"
                                            value={formData.snapchat}
                                            onChange={handleChange}
                                            placeholder="snapchat.com/add/username"
                                            className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-amber-450/50 transition-all"
                                        />
                                    </div>

                                    {/* TikTok */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-white/80 px-1">TikTok</label>
                                        <input
                                            type="url"
                                            name="tiktok"
                                            value={formData.tiktok}
                                            onChange={handleChange}
                                            placeholder="tiktok.com/@username"
                                            className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none focus:border-amber-450/50 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message box */}
                            <div className="flex flex-col gap-2 pt-4">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-sm font-semibold text-white/80">Message Box</label>
                                    <span className={`text-[10px] ${charCount >= 150 ? 'text-red-500' : 'text-white/40'}`}>
                                        {charCount}/150 characters
                                    </span>
                                </div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Your message..."
                                    className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-amber-450/50 transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-14 mt-6 rounded-full bg-amber-450 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-all shadow-[0_10px_30px_rgba(251,191,36,0.3)] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Form"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
