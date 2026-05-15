import { useNavigate } from "react-router-dom";
import Button from "./ui/Button.jsx";
import rejectionZoneImg from "../assets/tmimages/Rejection Zone.png";

export default function HomeHeroPrimary() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 2xl:max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
          
          {/* Left Content - Smaller Size */}
          <div className="flex flex-col justify-center text-left lg:col-span-2">
            <h1 className="text-xl font-black leading-tight tracking-wide text-white sm:text-2xl lg:text-3xl uppercase">
              DYNAMIC <br />
              <span className="text-amber-450">SUPPORT AND <br /> RESISTANCE PRO</span>
            </h1>
            
            <p className="mt-3 text-sm font-bold text-white tracking-wide">
              Live support and resistance Bands as price structure changes.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Rejection zone",
                "Multi market Compatible",
                "No Emotional Analysis"
              ].map((item, idx) => (
                <li key={idx} className="text-base font-bold text-white tracking-wide">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button
                onClick={() => navigate("/dynamic-support-resistance-pro")}
                className="inline-block border-[3px] border-amber-450 bg-transparent px-6 py-2.5 text-base font-black uppercase tracking-widest text-white transition-all hover:bg-amber-450 hover:text-black"
              >
                DYNAMIC SUPPORT AND RESISTANCE PRO
              </button>
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
