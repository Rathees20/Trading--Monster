// import whyBg from "../assets/background whychase trade.jpg";
// import logoMark from "../assets/logo.png";
// import buyChartImg from "../assets/Picture3.png";
// import sellChartImg from "../assets/Picture4.png";
// import holdChartImg from "../assets/Picture5.png";

// function MiniSignalChart({ variant = "buy" }) {
//   const isBuy = variant === "buy";
//   const isHold = variant === "hold";

//   const accent = isBuy ? "#22c55e" : isHold ? "#facc15" : "#ef4444";
//   const label = isBuy
//     ? "Buy Signal"
//     : isHold
//     ? "Hold Zone"
//     : "Sell Signal";

//   let chartSrc = buyChartImg;
//   if (variant === "sell") chartSrc = sellChartImg;
//   if (variant === "hold") chartSrc = holdChartImg;

//   return (
//     <div className="relative w-full max-w-full overflow-hidden rounded-[30px] border border-white/10 bg-black/90 shadow-[0_22px_90px_rgba(0,0,0,0.9)] md:flex-[3.4]">
//       <div className="relative h-[220px] w-full bg-black sm:h-[280px] lg:h-[340px] xl:h-[380px]">
//         {/* top labels (like screenshot) */}
//         <div className="absolute left-3 top-3 z-10 flex items-center gap-2 text-[10px] font-semibold">
          
//           <span
//             className="rounded px-2 py-0.5 text-black"
//             style={{ backgroundColor: accent }}
//           >
//             {label}
//           </span>
//         </div>
        

//         {/* chart image from assets */}
//         <img
//           src={chartSrc}
//           alt={isBuy ? "Buy chart" : isHold ? "Hold chart" : "Sell chart"}
//           className="block h-full w-full object-contain"
//           loading="lazy"
//           draggable={false}
//         />
//       </div>
//     </div>
//   );
// }

// function ModePanel({ title, description, tone = "buy" }) {
//   const isBuy = tone === "buy";
//   const isHold = tone === "hold";

//   const border = isBuy
//     ? "border-emerald-500/35"
//     : isHold
//     ? "border-amber-400/40"
//     : "border-red-500/35";
//   const titleColor = isBuy
//     ? "text-emerald-400"
//     : isHold
//     ? "text-amber-300"
//     : "text-red-500";
//   const bg =
//     "bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.05),transparent_55%)]";

//   return (
//     <div
//       className={`relative flex h-[160px] w-full max-w-[426px] items-center justify-center rounded-md border ${border} bg-black/20 ${bg} px-6 py-6 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.06)] sm:h-[170px]`}
//     >
//       {/* watermark logo */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.07]"
//         style={{
//           backgroundImage: `url(${logoMark})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundSize: "220px auto",
//         }}
//       />
//       <div className="max-w-[360px]">
//         <div className={`text-2xl font-bold ${titleColor}`}>{title}</div>
//         <p className="mt-4 text-[11px] leading-5 text-white/70 sm:text-xs">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function WhyMostTradersLose() {
//   return (
//     <section className="relative isolate overflow-hidden py-8 sm:py-16" id="why">
//       {/* Section background image: `src/assets/background whychase trade.jpg` */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${whyBg})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        

//         <div className="mt-6 grid gap-8">
//           {/* Card 1 (Buy Example) */}
//           <div className="mx-auto w-full max-w-7xl rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.65),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(249,115,22,0.75),transparent_55%)] p-[1px] shadow-[0_22px_80px_rgba(0,0,0,0.7)]">
//             <div className="flex flex-col-reverse items-center justify-between gap-10 rounded-[30px] bg-black/90 px-6 py-10 backdrop-blur-md md:flex-row md:px-12 md:py-12">
//               <MiniSignalChart variant="buy" />
//               <div className="flex w-full max-w-lg flex-col items-start text-left md:flex-[2]">
//                 <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
//                   Buy Mode
//                 </span>
//                 <h3 className="mt-3 text-2xl font-bold text-white sm:text-4xl">
//                 Buy{" "} 
//                   <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
//                   Entry is active now
//                   </span>
                  
//                 </h3>
//                 <a
//                   href="#trial-form"
//                   className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-2 text-xs font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition hover:brightness-110"
//                 >
//                   Get Trading Monster AI
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 (Sell Example) */}
//           <div className="mx-auto w-full max-w-7xl rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(248,113,113,0.7),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(55,65,81,0.9),transparent_55%)] p-[1px] shadow-[0_22px_80px_rgba(0,0,0,0.7)]">
//             <div className="flex flex-col items-center justify-between gap-10 rounded-[30px] bg-black/90 px-6 py-10 backdrop-blur-md md:flex-row md:px-12 md:py-12">
//               <div className="flex w-full max-w-lg flex-col items-start text-left md:flex-[2]">
//                 <span className="rounded-full bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-red-400">
//                   Sell Mode
//                 </span>
//                 <h3 className="mt-3 text-2xl font-bold text-white sm:text-4xl">
//                 Sell {" "}
//                   <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
//                   Entry condition triggered
//                   </span>
//                 </h3>
//                 <a
//                   href="#trial-form"
//                   className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-2 text-xs font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition hover:brightness-110"
//                 >
//                   Get Trading Monster AI
//                 </a>
//               </div>
//               <MiniSignalChart variant="sell" />
//             </div>
//           </div>

//           {/* Card 3 (Hold Example) */}
//           <div className="mx-auto w-full max-w-7xl rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.75),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.7),transparent_55%)] p-[1px] shadow-[0_22px_80px_rgba(0,0,0,0.7)]">
//             <div className="flex flex-col-reverse items-center justify-between gap-10 rounded-[30px] bg-black/90 px-6 py-10 backdrop-blur-md md:flex-row md:px-12 md:py-12">
//               <MiniSignalChart variant="hold" />
//               <div className="flex w-full max-w-lg flex-col items-start text-left md:flex-[2]">
//                 <span className="rounded-full bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-300">
//                   Hold Mode
//                 </span>
//                 <h3 className="mt-3 text-2xl font-bold text-white sm:text-4xl">
//                 Choppy Market,{" "}
//                   <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
//                   Hold your Entry
//                   </span>
//                 </h3>
//                 <a
//                   href="#trial-form"
//                   className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-2 text-xs font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition hover:brightness-110"
//                 >
//                   Get Trading Monster AI
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import whyBg from "../assets/background whychase trade.jpg";
import buyChartImg from "../assets/Picture3.png";
import sellChartImg from "../assets/Picture4.png";
import holdChartImg from "../assets/Picture5.png";

/* ================= CARD ================= */

function SignalCard({ variant, mode, title }) {
  const isBuy = variant === "buy";
  const isHold = variant === "hold";

  const accent = isBuy ? "#22c55e" : isHold ? "#facc15" : "#ef4444";

  let chartSrc = buyChartImg;
  if (variant === "sell") chartSrc = sellChartImg;
  if (variant === "hold") chartSrc = holdChartImg;

  return (
    <div className="rounded-[30px] border border-white/10 bg-black/90 p-6 sm:p-8 shadow-[0_22px_80px_rgba(0,0,0,0.7)]">

      {/* 🔝 HEADER: LEFT CONTENT + RIGHT BUTTON */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        {/* LEFT */}
        <div>
          <span
            className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black"
            style={{ backgroundColor: accent }}
          >
            {mode}
          </span>

          <h3 className="mt-3 text-2xl font-bold text-white sm:text-4xl">
            {title}
          </h3>
        </div>

        {/* RIGHT BUTTON */}
        <div className="shrink-0">
          <a
            href="#trial-form"
            className="inline-flex rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-2 text-xs font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition hover:brightness-110"
          >
            Get Trading Monster AI
          </a>
        </div>
      </div>

      {/* 📈 IMAGE */}
      <div className="mt-6 overflow-hidden rounded-[24px] bg-black">
        <img
          src={chartSrc}
          alt={variant}
          className="h-[220px] w-full object-contain sm:h-[280px] lg:h-[340px] xl:h-[380px]"
          loading="lazy"
          draggable={false}
        />
      </div>
    </div>
  );
}

/* ================= MAIN SECTION ================= */

export default function WhyMostTradersLose() {
  return (
    <section className="relative isolate overflow-hidden py-8 sm:py-16" id="why">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${whyBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8">

          {/* BUY */}
          <div className="rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.65),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(249,115,22,0.75),transparent_55%)] p-[1px]">
            <SignalCard
              variant="buy"
              mode="Buy Mode"
              title={
                <>
                  Buy{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Entry is active now
                  </span>
                </>
              }
            />
          </div>

          {/* SELL */}
          <div className="rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(248,113,113,0.7),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(55,65,81,0.9),transparent_55%)] p-[1px]">
            <SignalCard
              variant="sell"
              mode="Sell Mode"
              title={
                <>
                  Sell{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Entry condition triggered
                  </span>
                </>
              }
            />
          </div>

          {/* HOLD */}
          <div className="rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.75),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.7),transparent_55%)] p-[1px]">
            <SignalCard
              variant="hold"
              mode="Hold Mode"
              title={
                <>
                  Choppy Market,{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Hold your Entry
                  </span>
                </>
              }
            />
          </div>

        </div>
      </div>
    </section>
  );
}
