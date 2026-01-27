export default function VideoCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-amber-450/10 blur-2xl" />

      <div className="tm-card overflow-hidden rounded-[2.25rem] p-4">
        <div className="relative overflow-hidden rounded-[1.85rem] bg-ink-900">
          {/* deep blue world-map-like glow + grid */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_70%_65%,rgba(255,176,32,0.18),transparent_55%)]" />
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:42px_42px]" />
          </div>

          {/* world-map dots + candles */}
          <svg
            className="relative block h-[340px] w-full sm:h-[380px] lg:h-[420px]"
            viewBox="0 0 780 520"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="candles" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="rgba(34,197,94,0.0)" />
                <stop offset="0.55" stopColor="rgba(34,197,94,0.25)" />
                <stop offset="1" stopColor="rgba(255,176,32,0.25)" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* dotted "map" cluster (stylized) */}
            <g opacity="0.55" filter="url(#glow)">
              {Array.from({ length: 140 }).map((_, i) => {
                const x = 120 + (i % 20) * 14 + ((i % 3) * 2);
                const y = 110 + Math.floor(i / 20) * 12 + ((i % 4) * 2);
                const keep =
                  (x < 320 && y < 250 && (i % 2 === 0 || i % 5 === 0)) ||
                  (x < 280 && y > 210 && y < 320 && i % 3 === 0);
                if (!keep) return null;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={1.6}
                    fill="rgba(59,130,246,0.85)"
                  />
                );
              })}
            </g>

            {/* candle sticks on right */}
            <g opacity="0.95">
              <path
                d="M365 360 L410 345 L445 355 L480 330 L515 342 L550 305 L585 320 L620 270 L655 285 L690 240 L730 265"
                fill="none"
                stroke="url(#candles)"
                strokeWidth="6"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {Array.from({ length: 22 }).map((_, i) => {
                const x = 400 + i * 17;
                const base = 365 - i * 5.2;
                const h = 24 + (i % 6) * 6;
                const up = i % 3 !== 0;
                return (
                  <g key={i}>
                    <line
                      x1={x}
                      y1={base - h}
                      x2={x}
                      y2={base + h}
                      stroke="rgba(255,255,255,0.22)"
                      strokeWidth="2"
                    />
                    <rect
                      x={x - 5}
                      y={base - (up ? h * 0.55 : h * 0.2)}
                      width="10"
                      height={h * 0.7}
                      rx="2"
                      fill={
                        up ? "rgba(34, 197, 94, 0.78)" : "rgba(239, 68, 68, 0.72)"
                      }
                    />
                  </g>
                );
              })}
            </g>
          </svg>

          {/* play button - match screenshot style */}
          <div className="absolute inset-0 grid place-items-center">
            <button
              className="grid h-14 w-14 place-items-center rounded-full bg-amber-450 shadow-glow transition active:scale-95"
              aria-label="Play video"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-amber-450/15 blur-2xl md:block" />
    </div>
  );
}

