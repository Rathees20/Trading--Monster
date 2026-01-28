import { useMemo, useState } from "react";
import Button from "./ui/Button.jsx";

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-semibold text-white/75">{label}</div>
      {children}
    </label>
  );
}

const inputClassName =
  "h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white/90 placeholder:text-white/35 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] outline-none transition focus:border-amber-450/45 focus:shadow-[0_0_0_3px_rgba(255,176,32,0.14)]";

export default function LeadCtaForm() {
  const recipientEmail = "support@tradingmonster.org";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const canSubmit = useMemo(() => {
    return name.trim().length > 1 && email.trim().length > 3 && phone.trim().length > 5;
  }, [name, email, phone]);

  function onSubmit(e) {
    e.preventDefault();
    setError("");

    const n = name.trim();
    const em = email.trim();
    const ph = phone.trim();

    if (!n || !em || !ph) {
      setError("Please fill in name, email, and phone number.");
      return;
    }

    const subject = `New lead — ${n}`;
    const body = [
      "New CTA Form Submission",
      "",
      `Name: ${n}`,
      `Email: ${em}`,
      `Phone: ${ph}`,
      "",
      "Sent from Trading Monster website."
    ].join("\n");

    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <section className="relative overflow-hidden py-14 sm:py-16" id="cta-form">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_20%,rgba(255,176,32,0.16),transparent_60%),radial-gradient(760px_420px_at_20%_55%,rgba(59,130,246,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/35" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold leading-snug tracking-normal sm:text-3xl">
            Get Started with Trading Monster AI
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-white/60 sm:text-sm">
            Enter your details and we’ll reach out with next steps.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[26px] border border-white/10 bg-black/45 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur sm:p-8">
          <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Field label="Name">
                <input
                  className={inputClassName}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </Field>
            </div>

            <Field label="Email">
              <input
                className={inputClassName}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                type="email"
                required
              />
            </Field>

            <Field label="Phone number">
              <input
                className={inputClassName}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 555 000 0000"
                autoComplete="tel"
                type="tel"
                required
              />
            </Field>

            {error ? (
              <div className="sm:col-span-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-200">
                {error}
              </div>
            ) : null}

            <div className="sm:col-span-2 flex flex-col items-center gap-2">
              <Button
                type="submit"
                className="h-11 w-full max-w-md rounded-xl px-6 text-sm font-semibold tracking-wide"
                disabled={!canSubmit}
              >
                Submit
              </Button>
              <div className="text-[12px] text-white">
                This will open your email app to send the message to{" "}
                <span className="font-semibold text-white/60">{recipientEmail}</span>.
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

