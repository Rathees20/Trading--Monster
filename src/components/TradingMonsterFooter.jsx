import logoImg from "../assets/logo.png";

function SocialIcon({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-amber-450/10 text-amber-450 ring-1 ring-amber-450/20 transition hover:bg-amber-450/15"
      aria-label="Social link"
    >
      {children}
    </a>
  );
}

export default function TradingMonsterFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black/10 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:items-start">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Trading Monster" className="h-10 w-10" draggable="false" />
              <div className="text-xs font-semibold tracking-wide text-white/90">
                TRADING <span className="text-amber-450">MONSTER</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <SocialIcon>
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M21 5 3.7 11.2c-1.1.4-1.1 1.1-.2 1.4l4.5 1.4 1.7 5.2c.2.6.4.6.8.2l2.6-2.5 5 3.7c.9.5 1.5.2 1.7-.8L22 6.4c.2-1-.4-1.6-1-1.4Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Z"
                    fill="currentColor"
                    opacity="0.18"
                  />
                  <path
                    d="M13.2 20v-7.2h2.4l.4-2.8h-2.8V8.2c0-.8.2-1.4 1.4-1.4h1.5V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4v2.8h2.4V20h3.4Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                    fill="currentColor"
                    opacity="0.18"
                  />
                  <path
                    d="M12 8.2A3.8 3.8 0 1 0 12 16a3.8 3.8 0 0 0 0-7.8Zm0 6.2A2.4 2.4 0 1 1 12 9.6a2.4 2.4 0 0 1 0 4.8Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                  <circle cx="17.6" cy="6.4" r="1" fill="currentColor" opacity="0.9" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-white/70">
            <a href="#" className="underline-offset-4 hover:text-white hover:underline">
              Terms of Service
            </a>
            <a href="#" className="underline-offset-4 hover:text-white hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="underline-offset-4 hover:text-white hover:underline">
              Telegram Demo
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="text-[10px] font-semibold tracking-widest text-white/35">
            RISK DISCLAIMER
          </div>
          <p className="mx-auto mt-3 max-w-4xl text-[10px] leading-5 text-white/35">
            Trading Forex on margin carries a high level of risk and may not be suitable for all investors. High
            leverage can work against you as well as for you. Before deciding to trade Forex, you should carefully
            consider your investment objectives, level of experience, and risk appetite. Trading Monster AI is a
            decision-support system, not a guaranteed profit generator. Past performance is not indicative of future
            results.
          </p>
          <div className="mt-6 text-[10px] text-white/35">
            © {new Date().getFullYear()} TRADING MONSTER. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}

