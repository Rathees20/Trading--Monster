import { useEffect, useRef, useState } from "react";

export default function VideoCard({ src }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [showSoundHint, setShowSoundHint] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // iOS Safari can be picky about autoplay; this helps ensure the element
    // is actually muted and we attempt playback as soon as possible.
    el.muted = muted;
    const tryPlay = async () => {
      try {
        await el.play();
      } catch {
        // Autoplay may still be blocked until user interacts.
      }
    };

    // Try immediately and again once metadata is ready.
    tryPlay();
    el.addEventListener("loadedmetadata", tryPlay);
    return () => el.removeEventListener("loadedmetadata", tryPlay);
  }, [src, muted]);

  const enableSound = async () => {
    const el = videoRef.current;
    setMuted(false);
    setShowSoundHint(false);
    if (!el) return;
    try {
      el.muted = false;
      el.volume = 1;
      await el.play();
    } catch {
      // If playback is blocked, user can still use controls.
    }
  };

  return (
    <div className="w-full max-w-[640px] sm:max-w-[720px] mx-auto lg:scale-[1.08] lg:origin-center">
      <div className="relative w-full h-[230px] sm:h-[280px] lg:h-[340px] overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 block h-full w-full object-cover"
          autoPlay
          muted={muted}
          loop
          controls
          playsInline
          webkitPlaysInline
          preload="metadata"
          onTouchStart={() => videoRef.current?.play?.()}
          onClick={() => videoRef.current?.play?.()}
        >
          <source src={src} type="video/mov" />
        </video>

        {/* Sound is blocked on iPhone unless user interacts */}
        {showSoundHint && muted && (
          <div className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-lg bg-black/60 px-3 py-2 text-[11px] font-semibold text-white/90 backdrop-blur">
            Tap to play, then unmute for sound
          </div>
        )}

        {muted && (
          <button
            type="button"
            onClick={enableSound}
            className="absolute bottom-3 right-3 z-10 inline-flex h-9 items-center justify-center rounded-lg bg-amber-450 px-4 text-[11px] font-extrabold text-black shadow-[0_14px_40px_rgba(255,180,20,0.22)] ring-1 ring-black/10 transition hover:bg-amber-450/90 active:translate-y-px"
          >
            Unmute
          </button>
        )}
      </div>
    </div>
  );
}

