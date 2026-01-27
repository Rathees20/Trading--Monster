export default function Logo() {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
      <div className="relative h-4 w-4">
        <div className="absolute inset-0 rounded-full bg-amber-450/25 blur-[6px]" />
        <div className="absolute inset-0 rounded-full border border-amber-450/40 bg-amber-450/20" />
        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-450" />
      </div>
    </div>
  );
}

