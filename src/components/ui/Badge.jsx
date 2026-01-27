export default function Badge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-amber-450/25 bg-amber-450/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-450 shadow-[0_0_0_1px_rgba(255,176,32,0.08)]">
      <span className="h-2 w-2 rounded-full bg-amber-450 shadow-glow" />
      {children}
    </div>
  );
}

