export default function Stat({ label, value }) {
  return (
    <div className="tm-card rounded-2xl px-4 py-3">
      <div className="text-xs text-white/55">{label}</div>
      <div className="mt-1 text-lg font-bold text-white">{value}</div>
    </div>
  );
}

