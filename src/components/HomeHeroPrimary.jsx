import { useNavigate } from "react-router-dom";
import Button from "./ui/Button.jsx";
import rejectionZoneImg from "../assets/tmimages/Rejection Zone.png";

export default function HomeHeroPrimary() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-black pt-10 pb-16 lg:pt-14 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          
          {/* Left Content - Matching 2nd Section Style */}
          <div className="flex flex-col justify-center text-left lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight tracking-normal text-white sm:text-4xl lg:text-[44px]">
              DYNAMIC <br />
              <span className="mt-3 block text-amber-450">SUPPORT AND <br /> RESISTANCE PRO</span>
            </h1>
            
            <p className="mt-4 text-lg font-medium text-white/60 sm:text-xl tracking-wide">
              Live support and resistance Bands as price structure changes.
            </p>

            <ul className="mt-8 space-y-4 sm:ml-2 sm:mt-10 lg:space-y-6">
              {[
                "Rejection zone",
                "Multi market Compatible",
                "No Emotional Analysis"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-base font-semibold text-white/90 sm:text-lg lg:text-xl tracking-wide">
                  <span className="flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-amber-450 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 lg:mt-12">
              <Button
                onClick={() => navigate("/dynamic-support-resistance-pro")}
                className="group relative h-14 w-full text-base font-bold uppercase tracking-widest sm:w-auto sm:px-10"
              >
                DYNAMIC SUPPORT AND RESISTANCE PRO
                <div className="absolute inset-0 -z-10 rounded-2xl bg-amber-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
              </Button>
            </div>
          </div>

          {/* Right Image - Larger Proportion */}
          <div className="relative lg:col-span-3">
            <img
              src={rejectionZoneImg}
              alt="dynamic-support-resistance-pro-analysis"
              className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
