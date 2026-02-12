import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function ThankYouPage() {
    return (
        <div className="tm-bg flex min-h-dvh flex-col items-center justify-center px-4 text-center">
            {/* Background spotlights */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_10%,rgba(255,176,32,0.18),transparent_60%),radial-gradient(760px_420px_at_20%_50%,rgba(59,130,246,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/35" />
            </div>

            <div className="relative mx-auto max-w-2xl rounded-[32px] border border-white/10 bg-black/45 px-8 py-12 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur sm:px-12 sm:py-16">
                {/* Logo */}
                <div className="mb-8 flex flex-col items-center gap-3">
                    <img
                        src={logoImg}
                        alt="Trading Monster AI"
                        className="h-12 w-12"
                        draggable="false"
                    />
                    <span className="text-xl font-bold tracking-wide text-white">
                        TRADING <span className="text-amber-450">MONSTER</span>
                    </span>
                </div>

                {/* Checkmark Icon */}
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 ring-1 ring-green-500/30">
                    <svg
                        className="h-10 w-10 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h1 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl">
                    Thank you for requesting your free trial
                </h1>

                <div className="space-y-6 text-lg leading-relaxed text-white/80">
                    <p>
                        Your trial pack will be activated in few minutes.
                    </p>
                    <p>
                        For more details reach us via chat or mail to{" "}
                        <a
                            href="mailto:Support@tradingmonster.ai"
                            className="font-semibold text-amber-450 underline decoration-amber-450/30 underline-offset-4 transition hover:text-amber-400"
                        >
                            Support@tradingmonster.ai
                        </a>{" "}
                        in unlockfull acess page.
                    </p>
                </div>

                <div className="mt-12">
                    <Link
                        to="/"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-[#2E6BFF] px-10 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(46,107,255,0.45)] transition hover:bg-[#2E6BFF]/90 active:translate-y-px"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
