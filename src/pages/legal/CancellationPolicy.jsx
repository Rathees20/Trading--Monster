export default function CancellationPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Cancellation Policy
      </h1>
      <p className="mt-2 text-sm text-white/60">
        Effective Date: <span className="font-medium text-white">04-02-2026</span>
      </p>

      <p className="mt-6 text-sm leading-6 text-white/70">
        Trading Monster AI operates on a recurring subscription model.
      </p>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-white">
          Subscription Cancellation
        </h2>
        <p className="text-sm leading-6 text-white/70">
          Customers must request cancellation at least{" "}
          <span className="font-medium text-white">24 hours</span> before the next
          billing date.
        </p>
        <p className="mt-2 text-sm leading-6 text-white/70">
          Cancellation requests must be sent to:
        </p>
        <p className="mt-1 text-sm font-medium text-amber-300">
          support@tradingmonster.ai
        </p>
        <p className="mt-2 text-sm leading-6 text-white/70">
          If cancellation is not requested at least 24 hours before renewal, the
          subscription fee may be charged for the next cycle.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold text-white">After Cancellation</h2>
        <ul className="list-disc pl-5 text-sm leading-6 text-white/70 space-y-1">
          <li>
            Access will remain active until the end of the current billing
            period.
          </li>
          <li>No refunds will be issued for the remaining unused days.</li>
        </ul>
      </section>
    </div>
  );
}

