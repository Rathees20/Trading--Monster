import Button from "./ui/Button.jsx";
import tst1 from "../assets/tst1.jpeg";
import tst3 from "../assets/tst3.jpeg";
import tst4 from "../assets/tst4.jpeg";
import tst5 from "../assets/tst5.jpeg";

function TestimonialImageCard({ src, alt }) {
  return (
    <div className="h-full overflow-hidden rounded-[22px] border border-white/10 bg-[#0E0E10] p-3 shadow-[0_22px_70px_rgba(0,0,0,0.45)]">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px] sm:aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function LeadCtaForm() {
  const telegramUrl = "https://t.me/tradingmonsterpro";
  const testimonialImages = [tst1, tst3, tst4, tst5];

  return (
    <section className="relative overflow-hidden py-10 sm:py-16" id="cta-form">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_20%,rgba(255,176,32,0.16),transparent_60%),radial-gradient(760px_420px_at_20%_55%,rgba(59,130,246,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/35" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-snug tracking-normal sm:text-3xl">
            Get Started with Trading Monster AI
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-white/60 sm:text-sm">
            See why traders trust Trading Monster AI.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl lg:max-w-7xl">
          <div className="-mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:auto-rows-fr sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-4">
            {testimonialImages.map((src, idx) => (
              <div
                key={src}
                className="w-[85%] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-start lg:w-auto"
              >
                <TestimonialImageCard
                  src={src}
                  alt={`Testimonial ${idx + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              className="h-11 w-full max-w-md rounded-xl px-6 text-sm font-semibold tracking-wide"
              onClick={() => window.open(telegramUrl, "_blank", "noopener,noreferrer")}
            >
              Join Our Telegram Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

