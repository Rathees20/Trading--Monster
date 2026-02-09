import { useEffect, useRef, useState } from "react";

export default function VideoCard({ src }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [showSoundHint, setShowSoundHint] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // iOS Safari can be picky about autoplay; this helps ensure the element
    // is actually muted and we attempt playback as soon as possible.
    el.muted = muted;

    const tryPlay = async () => {
      try {
        await el.play();
        setIsPlaying(true);
      } catch {
        // Autoplay may still be blocked until user interacts.
        setIsPlaying(false);
      }
    };

    // Try immediately and again once metadata is ready.
    tryPlay();
    el.addEventListener("loadedmetadata", () => {
      setDuration(el.duration);
      tryPlay();
    });
    el.addEventListener("play", () => setIsPlaying(true));
    el.addEventListener("pause", () => setIsPlaying(false));
    el.addEventListener("error", () => setVideoError(true));

    return () => {
      el.removeEventListener("loadedmetadata", () => {
        setDuration(el.duration);
        tryPlay();
      });
      el.removeEventListener("play", () => setIsPlaying(true));
      el.removeEventListener("pause", () => setIsPlaying(false));
      el.removeEventListener("error", () => setVideoError(true));
    };
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
      setIsPlaying(true);
    } catch {
      // If playback is blocked, user can still use controls.
      setIsPlaying(false);
    }
  };

  const formatDuration = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = async () => {
    const el = videoRef.current;
    if (!el) return;

    try {
      if (isPlaying) {
        el.pause();
        setIsPlaying(false);
      } else {
        await el.play();
        setIsPlaying(true);
      }
    } catch {
      // Fallback to letting browser controls handle it
    }
  };

  return (
    <div className="w-full max-w-[720px] sm:max-w-[880px] lg:max-w-[960px] mx-auto lg:scale-[1.08] lg:origin-center">
      <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[400px] overflow-hidden bg-black">
        {videoError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
            <div className="text-center px-4">
              <div className="text-lg font-semibold mb-2">Video Unavailable</div>
              <div className="text-sm text-white/70">
                This video format is not supported in your browser.
                <br />
                Please try a different browser or device.
              </div>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 block h-full w-full object-cover cursor-pointer"
            autoPlay
            muted={muted}
            loop
            playsInline
            webkitPlaysInline
            preload="metadata"
            controls
            onTouchStart={handlePlayPause}
            onClick={handlePlayPause}
          >
            <source src={src} />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Sound is blocked on iPhone unless user interacts */}
        {showSoundHint && muted && !videoError && (
          <div className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-lg bg-black/60 px-3 py-2 text-[11px] font-semibold text-white/90 backdrop-blur">
            Tap to play, then unmute for sound
          </div>
        )}

        {/* Video duration display */}
        {duration > 0 && !videoError && (
          <div className={`absolute bottom-3 z-10 rounded-lg bg-black/60 px-3 py-2 text-[11px] font-semibold text-white/90 backdrop-blur ${muted ? 'left-3' : 'right-3'}`}>
            {formatDuration(duration)}
          </div>
        )}

        {muted && !videoError && (
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

