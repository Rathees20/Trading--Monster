export default function VideoCard({ src }) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-amber-450/10 blur-2xl" />

      <div className="tm-card overflow-hidden rounded-[2.25rem] p-4">
        <div className="relative aspect-video w-full overflow-hidden rounded-[1.85rem] bg-black/40">
          <video
            className="absolute inset-0 block h-full w-full object-cover"
            src={src}
            autoPlay
            muted
            loop
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-amber-450/15 blur-2xl md:block" />
    </div>
  );
}

