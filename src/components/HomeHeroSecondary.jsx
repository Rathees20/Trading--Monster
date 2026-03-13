import { useNavigate } from "react-router-dom";
import Button from "./ui/Button.jsx";
import hs2Img from "../assets/HS2.png";

export default function HomeHeroSecondary() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      {/* Background gradients for premium feel without the background image since we use HS2 as main visual */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(250,204,21,0.08),transparent_50%),radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.05),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 sm:pt-16 sm:pb-20 lg:pt-12 lg:pb-28 2xl:max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-12 xl:gap-16">
          
          {/* Left Image (Order 1 on desktop, but Order 2 on mobile usually—let's keep image top on mobile just like the text was top on mobile for HS1, or mirror it exactly. Standard is Image top, text bottom on mobile) */}
          <div className="order-1 perspective-[1000px] lg:col-span-3">
             {/* Adding a gentle glassmorphism frame around the image layout */}
             <div className="relative group rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-2 shadow-2xl backdrop-blur-sm sm:p-4 transition-transform duration-500 hover:-rotate-y-2 hover:rotate-x-2">
                {/* Glow effect that intensifies on hover */}
                <div className="absolute inset-0 -z-10 rounded-2xl sm:rounded-3xl bg-amber-450/10 opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-100 group-hover:bg-amber-450/20" />
                <img
                  src={hs2Img}
                  alt="gold-trading-indicator-xauusd"
                  className="w-full h-auto rounded-xl sm:rounded-2xl border border-white/10 shadow-inner object-cover"
                />
             </div>
          </div>

          {/* Right Content */}
          <div className="order-2 flex flex-col justify-center lg:col-span-2">
            <h2 className="text-3xl font-bold leading-tight tracking-normal text-white sm:text-4xl lg:text-[44px]">
              Trading Monster
              <span className="mt-3 block text-amber-450">Trend Engine</span>
            </h2>

            <ul className="mt-8 space-y-4 sm:ml-2 sm:mt-10 lg:space-y-6">
              {[
                "AI Trend Engine",
                "Alert System",
                "MTF Validator",
                "Stop Loss & Target Bands",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-base font-semibold text-white/90 sm:text-lg lg:text-xl tracking-wide">
                  <span className="flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-amber-450 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 lg:mt-12">
              <Button 
                onClick={() => navigate("/trend-engine-pro")}
                className="group relative h-14 w-full text-base font-bold uppercase tracking-widest sm:w-auto sm:px-10"
              >
                Trend Engine Pro
                <div className="absolute inset-0 -z-10 rounded-2xl bg-amber-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
