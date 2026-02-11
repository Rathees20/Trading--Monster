export default function Disclaimer() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Disclaimer
      </h1>

      <p className="mt-6 text-sm leading-6 text-white/70">
        Trading Monster AI provides tools and market insights for educational and
        informational purposes only.
      </p>

      <p className="mt-4 text-sm leading-6 text-white/70">We are not:</p>
      <ul className="mt-1 list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
        <li>Financial advisors</li>
        <li>Investment advisors</li>
        <li>Portfolio managers</li>
        <li>Broker-dealers</li>
      </ul>

      <p className="mt-6 text-sm leading-6 text-white/70">
        No content on this website constitutes financial advice. Users trade at
        their own risk.
      </p>

      <p className="mt-4 text-sm leading-6 text-white/70">
        Forex, CFD, and derivatives trading involve high risk and may not be
        suitable for all investors.
      </p>
    </div>
  );
}

