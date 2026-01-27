export default function Button({
  children,
  variant = "amber",
  size = "md",
  className = "",
  ...props
}) {
  const sizes = {
    sm: "h-9 px-4 text-sm rounded-xl",
    md: "h-11 px-5 text-sm rounded-2xl"
  };

  const variants = {
    amber:
      "bg-amber-450 text-black hover:bg-amber-450/90 shadow-glow border border-amber-450/30",
    ghost:
      "bg-white/0 text-white/85 hover:text-white border border-white/15 hover:border-white/25 hover:bg-white/5",
    subtle:
      "bg-white/5 text-white/85 hover:bg-white/8 border border-white/10 hover:border-white/15"
  };

  return (
    <button
      className={[
        "inline-flex items-center justify-center font-semibold tracking-wide transition active:translate-y-px",
        sizes[size] ?? sizes.md,
        variants[variant] ?? variants.amber,
        className
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

