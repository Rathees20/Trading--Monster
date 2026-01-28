export default function VideoCard({ src }) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-amber-450/10 blur-2xl" />

      <div className="tm-card overflow-hidden rounded-[2.25rem] p-4">
        <div className="relative overflow-hidden rounded-[1.85rem] bg-black/40">
          <video
            className="block h-[340px] w-full object-cover sm:h-[380px] lg:h-[420px]"
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

