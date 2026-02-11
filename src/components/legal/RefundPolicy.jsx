export default function RefundPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Refund Policy
      </h1>
      <p className="mt-2 text-sm text-white/60">
        Effective Date: <span className="font-medium text-white">04-02-2026</span>
      </p>

      <p className="mt-6 text-sm leading-6 text-white/70">
        Trading Monster AI (operated by Daksh Analytics Technologies FZCO, UAE)
        provides digital trading tools, indicators, and subscription-based access
        to invite-only TradingView scripts.
      </p>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-white">Free Trial</h2>
        <p className="text-sm leading-6 text-white/70">
          We offer a 3-day free trial for new users. Customers are strongly
          encouraged to evaluate the service during this trial period before
          purchasing any subscription.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-white">No Refund Policy</h2>
        <p className="text-sm leading-6 text-white/70">
          Due to the digital nature of our services:
        </p>
        <ul className="list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
          <li>All subscriptions are non-refundable.</li>
          <li>Once access to the service has been granted, it is considered “utilised”.</li>
        </ul>
        <p className="mt-2 text-sm leading-6 text-white/70">
          No refunds will be provided for:
        </p>
        <ul className="list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
          <li>Partial subscription periods</li>
          <li>Failure to use the service</li>
          <li>Trading losses</li>
          <li>Dissatisfaction after trial period</li>
        </ul>
        <p className="mt-2 text-sm leading-6 text-white/70">
          By purchasing a subscription, you acknowledge and agree to this
          no-refund policy.
        </p>
      </section>

      <section className="mt-10 border-t border-white/10 pt-8">
        <h2 className="text-lg font-semibold text-white">Cancellation Policy</h2>
        <p className="mt-3 text-sm leading-6 text-white/70">
          Trading Monster AI operates on a recurring subscription model.
        </p>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-white">
              Subscription Cancellation
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Customers must request cancellation at least{" "}
              <span className="font-medium text-white">24 hours</span> before the
              next billing date.
            </p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Cancellation requests must be sent to:
            </p>
            <p className="mt-1 text-sm font-medium text-amber-300">
              support@tradingmonster.ai
            </p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              If cancellation is not requested at least 24 hours before renewal,
              the subscription fee may be charged for the next cycle.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">After Cancellation</h3>
            <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
              <li>
                Access will remain active until the end of the current billing
                period.
              </li>
              <li>No refunds will be issued for the remaining unused days.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

