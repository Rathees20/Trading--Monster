export default function TermsAndConditions() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-white/60">
        Effective Date: <span className="font-medium text-white">04-02-2026</span>
      </p>

      <p className="mt-6 text-sm leading-6 text-white/70">
        These Terms govern your use of{" "}
        <span className="font-medium text-white">tradingmonster.ai</span> and
        services provided under the brand Trading Monster AI.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold text-white">1. Company Information</h2>
        <p className="text-sm leading-6 text-white/70">
          Trading Monster AI is operated by:
        </p>
        <p className="text-sm leading-6 text-white/70">
          <span className="font-medium text-white">
            Daksh Analytics Technologies FZCO
          </span>
          <br />
          Registered in the United Arab Emirates.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold text-white">2. Nature of Service</h2>
        <p className="text-sm leading-6 text-white/70">We provide:</p>
        <ul className="list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
          <li>Algorithmic trading indicators</li>
          <li>Invite-only TradingView scripts</li>
          <li>Trading education content</li>
        </ul>
        <p className="mt-3 text-sm leading-6 text-white/70">We do NOT:</p>
        <ul className="list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
          <li>Provide investment advice</li>
          <li>Manage funds</li>
          <li>Offer brokerage services</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold text-white">3. Eligibility</h2>
        <p className="text-sm leading-6 text-white/70">Users must:</p>
        <ul className="list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
          <li>Be at least 18 years old</li>
          <li>Comply with local financial regulations</li>
          <li>Not reside in sanctioned jurisdictions</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold text-white">4. Risk Disclosure</h2>
        <p className="text-sm leading-6 text-white/70">
          Trading financial markets involves substantial risk. Users may lose part
          or all of their invested capital.
        </p>
        <p className="mt-2 text-sm leading-6 text-white/70">
          You agree that:
        </p>
        <ul className="list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
          <li>You are responsible for your own trading decisions.</li>
          <li>Past performance does not guarantee future results.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold text-white">5. Payments</h2>
        <p className="text-sm leading-6 text-white/70">
          Payments are processed securely via Stripe.
        </p>
        <p className="mt-2 text-sm leading-6 text-white/70">
          By subscribing:
        </p>
        <ul className="list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
          <li>You authorize recurring billing.</li>
          <li>You agree to pricing displayed at checkout.</li>
          <li>
            You accept the{" "}
            <span className="font-medium text-white">
              Refund and Cancellation policies
            </span>
            .
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold text-white">6. Account Termination</h2>
        <p className="text-sm leading-6 text-white/70">
          We reserve the right to suspend or terminate accounts for:
        </p>
        <ul className="list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
          <li>Sharing access</li>
          <li>Misuse of software</li>
          <li>Chargebacks or payment disputes</li>
          <li>Violation of terms</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold text-white">7. Intellectual Property</h2>
        <p className="text-sm leading-6 text-white/70">
          All scripts, systems, branding, and materials are proprietary to Daksh
          Analytics Technologies FZCO.
        </p>
        <p className="mt-2 text-sm leading-6 text-white/70">
          Reselling, copying, or redistribution is strictly prohibited.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold text-white">8. Limitation of Liability</h2>
        <p className="text-sm leading-6 text-white/70">
          Daksh Analytics Technologies FZCO shall not be liable for:
        </p>
        <ul className="list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
          <li>Trading losses</li>
          <li>Indirect damages</li>
          <li>Service interruptions</li>
          <li>Platform outages (TradingView or brokers)</li>
        </ul>
      </section>
    </div>
  );
}

