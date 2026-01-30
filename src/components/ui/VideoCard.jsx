import { useEffect, useRef } from "react";

export default function VideoCard({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // iOS Safari can be picky about autoplay; this helps ensure the element
    // is actually muted and we attempt playback as soon as possible.
    el.muted = true;
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
  }, [src]);

  return (
    <div className="w-full">
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 block h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          webkitPlaysInline
          preload="metadata"
          onTouchStart={() => videoRef.current?.play?.()}
          onClick={() => videoRef.current?.play?.()}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

