export default function VideoCard({ src }) {
  return (
    <div className="w-full">
      <div className="relative aspect-video w-full overflow-hidden bg-black">
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
  );
}

