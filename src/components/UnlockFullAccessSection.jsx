import { useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const COUNTRY_DIAL_CODES = {
  Afghanistan: "+93",
  Albania: "+355",
  Algeria: "+213",
  Angola: "+244",
  Argentina: "+54",
  Armenia: "+374",
  Australia: "+61",
  Austria: "+43",
  Azerbaijan: "+994",
  Bahrain: "+973",
  Bangladesh: "+880",
  Belgium: "+32",
  Benin: "+229",
  Bolivia: "+591",
  BosniaandHerzegovina: "+387",
  Brazil: "+55",
  Brunei: "+673",
  Bulgaria: "+359",
  Cambodia: "+855",
  Cameroon: "+237",
  Canada: "+1",
  Chile: "+56",
  China: "+86",
  Colombia: "+57",
  CostaRica: "+506",
  Croatia: "+385",
  Cyprus: "+357",
  CzechiaCzechRepublic: "+420",
  Denmark: "+45",
  DominicanRepublic: "+1",
  Ecuador: "+593",
  Egypt: "+20",
  ElSalvador: "+503",
  Estonia: "+372",
  Ethiopia: "+251",
  Finland: "+358",
  France: "+33",
  Georgia: "+995",
  Germany: "+49",
  Ghana: "+233",
  Greece: "+30",
  Guatemala: "+502",
  Haiti: "+509",
  Honduras: "+504",
  HongKong: "+852",
  Hungary: "+36",
  Iceland: "+354",
  India: "+91",
  Indonesia: "+62",
  Iran: "+98",
  Iraq: "+964",
  Ireland: "+353",
  Israel: "+972",
  Italy: "+39",
  Jamaica: "+1",
  Japan: "+81",
  Jordan: "+962",
  Kazakhstan: "+7",
  Kenya: "+254",
  Kuwait: "+965",
  Kyrgyzstan: "+996",
  Laos: "+856",
  Latvia: "+371",
  Lebanon: "+961",
  Libya: "+218",
  Lithuania: "+370",
  Luxembourg: "+352",
  Malaysia: "+60",
  Mexico: "+52",
  Moldova: "+373",
  Morocco: "+212",
  MyanmarformerlyBurma: "+95",
  Nepal: "+977",
  Netherlands: "+31",
  NewZealand: "+64",
  Nigeria: "+234",
  Norway: "+47",
  Oman: "+968",
  Pakistan: "+92",
  Panama: "+507",
  Peru: "+51",
  Philippines: "+63",
  Poland: "+48",
  Portugal: "+351",
  Qatar: "+974",
  Romania: "+40",
  Russia: "+7",
  SaudiArabia: "+966",
  Senegal: "+221",
  Serbia: "+381",
  Singapore: "+65",
  Slovakia: "+421",
  Slovenia: "+386",
  Somalia: "+252",
  SouthAfrica: "+27",
  SouthKorea: "+82",
  Spain: "+34",
  SriLanka: "+94",
  Sudan: "+249",
  Sweden: "+46",
  Switzerland: "+41",
  Syria: "+963",
  Taiwan: "+886",
  Tanzania: "+255",
  Thailand: "+66",
  Tunisia: "+216",
  Turkey: "+90",
  Uganda: "+256",
  Ukraine: "+380",
  UnitedArabEmirates: "+971",
  UnitedKingdom: "+44",
  UnitedStates: "+1",
  Uruguay: "+598",
  Uzbekistan: "+998",
  Venezuela: "+58",
  Vietnam: "+84",
  Yemen: "+967",
  Zambia: "+260",
  Zimbabwe: "+263",
};

function normalizeCountryKey(country) {
  return String(country || "").replace(/[^A-Za-z]/g, "");
}

function sanitizePhoneE164Like(input) {
  let cleaned = String(input || "").trim();
  cleaned = cleaned.replace(/\s+/g, "");
  cleaned = cleaned.replace(/(?!^)\+/g, ""); // only one leading +
  cleaned = cleaned.replace(/[^\d+]/g, "");
  if (cleaned && cleaned[0] !== "+") cleaned = `+${cleaned.replace(/\D/g, "")}`;
  return cleaned;
}

function Pill({ children, active = false }) {
  return (
    <div
      className={[
        "rounded-full px-4 py-2 text-[10px] font-semibold sm:text-[11px]",
        active
          ? "bg-[#1B2F4F] text-white ring-1 ring-[#2E6BFF]/45 shadow-[0_10px_26px_rgba(46,107,255,0.18)]"
          : "bg-[#1B2F4F] text-white/80 ring-1 ring-white/10"
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function UnlockFullAccessSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);

  const isEmailValid = /^\S+@\S+\.\S+$/.test(email.trim());
  const selectedDialCode =
    COUNTRY_DIAL_CODES[normalizeCountryKey(country.trim())] || "";

  const phoneClean = sanitizePhoneE164Like(phone);
  const parsedPhone = phoneClean ? parsePhoneNumberFromString(phoneClean) : null;
  const isPhoneValid =
    !!parsedPhone &&
    parsedPhone.isValid() &&
    (selectedDialCode ? `+${parsedPhone.countryCallingCode}` === selectedDialCode : true) &&
    (selectedDialCode ? phoneClean.startsWith(selectedDialCode) : true);

  const canSubmit =
    name.trim().length > 0 &&
    isEmailValid &&
    country.trim().length > 0 &&
    phone.trim().length > 0 &&
    isPhoneValid;

  return (
    <section className="relative overflow-hidden py-12 sm:py-12" id="unlock-full-access">
      {/* subtle spotlight like the screenshot */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_10%,rgba(255,176,32,0.18),transparent_60%),radial-gradient(760px_420px_at_20%_50%,rgba(59,130,246,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/35" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* <div className="text-center">
          <h2 className="text-3xl font-bold leading-snug tracking-normal sm:text-4xl">
            Unlock Full Access
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/60 sm:text-base">
            Transition from testing to high-conviction professional trading.
          </p>
        </div> */}

        {/* Main pricing panel */}
        <div className="relative mt-12 rounded-[24px] border border-white/10 bg-black/45 px-6 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur sm:rounded-[32px] sm:px-10 sm:py-10">
          {/* top-right star */}
          <div className="absolute right-4 top-4 text-white/35">
            <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557L3.04 10.385a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345l2.125-5.111Z"
                fill="currentColor"
                opacity="0.9"
              />
            </svg>
          </div>

          <div className="text-center">
            <div className="text-lg font-semibold leading-snug text-white sm:text-2xl">
              Trading Monster
              <br />
              <span className="text-white/90">Professional Indicator</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
            <Pill active>Full AI Trend Indicator Suite</Pill>
            <Pill>Private Telegram Community</Pill>
            <Pill>Priority Technical Support</Pill>
            <Pill>Free Lifetime Updates</Pill>
          </div>

          {/* Pricing cards - new design */}
          <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Monthly", price: 55, term: "Month" },
              { label: "Quarterly", price: 149, term: "3 Months" },
              { label: "Half-yearly", price: 289, term: "6 Months" },
              { label: "Yearly", price: 559, term: "Year" },
            ].map((plan) => {
              const isPopular = plan.label === "Quarterly";
              const isBest = plan.label === "Yearly";

              return (
                <div
                  key={plan.label}
                  className={[
                    "relative flex h-full flex-col overflow-hidden rounded-[22px] border bg-gradient-to-b from-slate-900/90 via-slate-950 to-black/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.65)] transition duration-200",
                    isPopular || isBest
                      ? "border-amber-400/60 ring-1 ring-amber-400/40 scale-[1.02]"
                      : "border-white/10 hover:border-amber-300/40 hover:scale-[1.01]",
                  ].join(" ")}
                >
                  {/* soft spotlight */}
                  <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div className="absolute -inset-12 bg-[radial-gradient(65%_60%_at_50%_0%,rgba(56,189,248,0.18),transparent_70%)]" />
                  </div>

                  {/* badges (reserve space so all buttons align) */}
                  <div className="relative mb-3 flex min-h-[26px] justify-end">
                    {(isPopular || isBest) && (
                      <span className="rounded-full bg-amber-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-300 ring-1 ring-amber-400/40">
                        {isBest ? "Best Value" : "Most Popular"}
                      </span>
                    )}
                  </div>

                  <div className="relative text-center">
                    <div className="text-[12px] font-semibold uppercase tracking-wide text-white/60">
                      Institutional Pricing
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-white">
                      {plan.label}
                    </div>

                    <div className="mt-6 flex items-end justify-center gap-2">
                      <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        ${plan.price}
                      </span>
                      <span className="pb-1.5 text-[11px] font-semibold text-white/70">
                        USD / {plan.term}
                      </span>
                    </div>
                  </div>

                  <div className="relative mt-auto border-t border-white/5 pt-4">
                    <a
                      className={[
                        "inline-flex h-11 w-full items-center justify-center rounded-xl text-center text-[12px] font-extrabold leading-tight shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition",
                        isPopular || isBest
                          ? "bg-amber-400 text-black ring-1 ring-amber-300 hover:bg-amber-300"
                          : "bg-white text-black ring-1 ring-white/30 hover:bg-white/90",
                      ].join(" ")}
                      href="#trial-form"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("trial-form")
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      Get 3 Days Free Demo
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trial form below pricing cards */}
          <div
            id="trial-form"
            className="mt-10 rounded-[20px] border border-white/10 bg-black/70 p-7 shadow-[0_18px_70px_rgba(0,0,0,0.28)]"
          >
            <div className="mx-auto w-fit rounded-md bg-amber-450 px-5 py-2.5 text-[13px] font-extrabold text-black shadow-[0_14px_40px_rgba(255,180,20,0.20)] ring-1 ring-black/10">
              Start Your 3-Day Free Trial
            </div>

            <form
              className="mt-6 grid gap-3 sm:grid-cols-2"
              onSubmit={async (e) => {
                    e.preventDefault();
                  
                    try {
                      const res = await fetch(
                        "https://script.google.com/macros/s/AKfycbwyFl8LeVL2ajt1t394rn_qA2ThQ2Vvqe_K0XAa5am_3QPbH_ZpuTq5nSeO6t5uUEWicg/exec",
                        {
                          method: "POST",
                          
                          body: JSON.stringify({
                            name: name.trim(),
                            email: email.trim(),
                            country: country.trim(),
                            phone: phone.trim(),
                          }),
                        }
                      );
                      const data = await res.json();
                  
                      if (data.success) {
                        alert("Submitted successfully 🚀");
                        setName("");
                        setEmail("");
                        setCountry("");
                        setPhone("");
                      } else {
                        alert("Something went wrong");
                      }
                    } catch (err) {
                      console.error(err);
                      alert("Submission failed");
                    }
                  }}
            >
                  <label className="grid gap-1">
                    <span className="text-[10px] font-semibold tracking-wide text-white/70">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-10 w-full rounded-md border border-white/10 bg-black/40 px-3 text-[11px] text-white placeholder:text-white/35 outline-none ring-0 transition focus:border-[#2E6BFF]/60 focus:ring-2 focus:ring-[#2E6BFF]/25"
                      autoComplete="name"
                    />
                  </label>

                  <label className="grid gap-1">
                    <span className="text-[10px] font-semibold tracking-wide text-white/70">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-10 w-full rounded-md border border-white/10 bg-black/40 px-3 text-[11px] text-white placeholder:text-white/35 outline-none ring-0 transition focus:border-[#2E6BFF]/60 focus:ring-2 focus:ring-[#2E6BFF]/25"
                      autoComplete="email"
                    />
                  </label>

                  <label className="grid gap-1">
                    <span className="text-[10px] font-semibold tracking-wide text-white/70">
                      Country
                    </span>
                    <input
                      type="text"
                      name="country"
                      list="countries"
                      value={country}
                      onChange={(e) => {
                        const nextCountry = e.target.value;
                        setCountry(nextCountry);

                        const nextCode =
                          COUNTRY_DIAL_CODES[normalizeCountryKey(nextCountry)];
                        if (!nextCode) return;

                        setPhone((prev) => {
                          const prevTrim = String(prev || "").trim();
                          const prevCode =
                            COUNTRY_DIAL_CODES[normalizeCountryKey(country)];

                          if (prevTrim === "") return `${nextCode}`;
                          if (prevCode && prevTrim.startsWith(prevCode)) {
                            const rest = prevTrim
                              .slice(prevCode.length)
                              .replace(/^\s+/, "");
                            return `${nextCode}${rest}`;
                          }
                          if (prevTrim.startsWith("+")) return `${nextCode}`;
                          return prev;
                        });
                      }}
                      placeholder="Your country"
                      required
                      className="h-10 w-full rounded-md border border-white/10 bg-black/40 px-3 text-[11px] text-white placeholder:text-white/35 outline-none ring-0 transition focus:border-[#2E6BFF]/60 focus:ring-2 focus:ring-[#2E6BFF]/25"
                      autoComplete="country"
                    />
                    <datalist id="countries">
                      <option value="Afghanistan" />
                      <option value="Albania" />
                      <option value="Algeria" />
                      <option value="Andorra" />
                      <option value="Angola" />
                      <option value="Antigua and Barbuda" />
                      <option value="Argentina" />
                      <option value="Armenia" />
                      <option value="Australia" />
                      <option value="Austria" />
                      <option value="Azerbaijan" />
                      <option value="Bahamas" />
                      <option value="Bahrain" />
                      <option value="Bangladesh" />
                      <option value="Barbados" />
                      <option value="Belarus" />
                      <option value="Belgium" />
                      <option value="Belize" />
                      <option value="Benin" />
                      <option value="Bhutan" />
                      <option value="Bolivia" />
                      <option value="Bosnia and Herzegovina" />
                      <option value="Botswana" />
                      <option value="Brazil" />
                      <option value="Brunei" />
                      <option value="Bulgaria" />
                      <option value="Burkina Faso" />
                      <option value="Burundi" />
                      <option value="Cabo Verde" />
                      <option value="Cambodia" />
                      <option value="Cameroon" />
                      <option value="Canada" />
                      <option value="Central African Republic" />
                      <option value="Chad" />
                      <option value="Chile" />
                      <option value="China" />
                      <option value="Colombia" />
                      <option value="Comoros" />
                      <option value="Congo (Congo-Brazzaville)" />
                      <option value="Costa Rica" />
                      <option value="Croatia" />
                      <option value="Cuba" />
                      <option value="Cyprus" />
                      <option value="Czechia (Czech Republic)" />
                      <option value="Democratic Republic of the Congo" />
                      <option value="Denmark" />
                      <option value="Djibouti" />
                      <option value="Dominica" />
                      <option value="Dominican Republic" />
                      <option value="Ecuador" />
                      <option value="Egypt" />
                      <option value="El Salvador" />
                      <option value="Equatorial Guinea" />
                      <option value="Eritrea" />
                      <option value="Estonia" />
                      <option value="Eswatini (fmr. Swaziland)" />
                      <option value="Ethiopia" />
                      <option value="Fiji" />
                      <option value="Finland" />
                      <option value="France" />
                      <option value="Gabon" />
                      <option value="Gambia" />
                      <option value="Georgia" />
                      <option value="Germany" />
                      <option value="Ghana" />
                      <option value="Greece" />
                      <option value="Grenada" />
                      <option value="Guatemala" />
                      <option value="Guinea" />
                      <option value="Guinea-Bissau" />
                      <option value="Guyana" />
                      <option value="Haiti" />
                      <option value="Honduras" />
                      <option value="Hungary" />
                      <option value="Iceland" />
                      <option value="India" />
                      <option value="Indonesia" />
                      <option value="Iran" />
                      <option value="Iraq" />
                      <option value="Ireland" />
                      <option value="Israel" />
                      <option value="Italy" />
                      <option value="Jamaica" />
                      <option value="Japan" />
                      <option value="Jordan" />
                      <option value="Kazakhstan" />
                      <option value="Kenya" />
                      <option value="Kiribati" />
                      <option value="Kuwait" />
                      <option value="Kyrgyzstan" />
                      <option value="Laos" />
                      <option value="Latvia" />
                      <option value="Lebanon" />
                      <option value="Lesotho" />
                      <option value="Liberia" />
                      <option value="Libya" />
                      <option value="Liechtenstein" />
                      <option value="Lithuania" />
                      <option value="Luxembourg" />
                      <option value="Madagascar" />
                      <option value="Malawi" />
                      <option value="Malaysia" />
                      <option value="Maldives" />
                      <option value="Mali" />
                      <option value="Malta" />
                      <option value="Marshall Islands" />
                      <option value="Mauritania" />
                      <option value="Mauritius" />
                      <option value="Mexico" />
                      <option value="Micronesia" />
                      <option value="Moldova" />
                      <option value="Monaco" />
                      <option value="Mongolia" />
                      <option value="Montenegro" />
                      <option value="Morocco" />
                      <option value="Mozambique" />
                      <option value="Myanmar (formerly Burma)" />
                      <option value="Namibia" />
                      <option value="Nauru" />
                      <option value="Nepal" />
                      <option value="Netherlands" />
                      <option value="New Zealand" />
                      <option value="Nicaragua" />
                      <option value="Niger" />
                      <option value="Nigeria" />
                      <option value="North Korea" />
                      <option value="North Macedonia" />
                      <option value="Norway" />
                      <option value="Oman" />
                      <option value="Pakistan" />
                      <option value="Palau" />
                      <option value="Panama" />
                      <option value="Papua New Guinea" />
                      <option value="Paraguay" />
                      <option value="Peru" />
                      <option value="Philippines" />
                      <option value="Poland" />
                      <option value="Portugal" />
                      <option value="Qatar" />
                      <option value="Romania" />
                      <option value="Russia" />
                      <option value="Rwanda" />
                      <option value="Saint Kitts and Nevis" />
                      <option value="Saint Lucia" />
                      <option value="Saint Vincent and the Grenadines" />
                      <option value="Samoa" />
                      <option value="San Marino" />
                      <option value="Sao Tome and Principe" />
                      <option value="Saudi Arabia" />
                      <option value="Senegal" />
                      <option value="Serbia" />
                      <option value="Seychelles" />
                      <option value="Sierra Leone" />
                      <option value="Singapore" />
                      <option value="Slovakia" />
                      <option value="Slovenia" />
                      <option value="Solomon Islands" />
                      <option value="Somalia" />
                      <option value="South Africa" />
                      <option value="South Korea" />
                      <option value="South Sudan" />
                      <option value="Spain" />
                      <option value="Sri Lanka" />
                      <option value="Sudan" />
                      <option value="Suriname" />
                      <option value="Sweden" />
                      <option value="Switzerland" />
                      <option value="Syria" />
                      <option value="Taiwan" />
                      <option value="Tajikistan" />
                      <option value="Tanzania" />
                      <option value="Thailand" />
                      <option value="Timor-Leste" />
                      <option value="Togo" />
                      <option value="Tonga" />
                      <option value="Trinidad and Tobago" />
                      <option value="Tunisia" />
                      <option value="Turkey" />
                      <option value="Turkmenistan" />
                      <option value="Tuvalu" />
                      <option value="Uganda" />
                      <option value="Ukraine" />
                      <option value="United Arab Emirates" />
                      <option value="United Kingdom" />
                      <option value="United States" />
                      <option value="Uruguay" />
                      <option value="Uzbekistan" />
                      <option value="Vanuatu" />
                      <option value="Vatican City" />
                      <option value="Venezuela" />
                      <option value="Vietnam" />
                      <option value="Yemen" />
                      <option value="Zambia" />
                      <option value="Zimbabwe" />
                    </datalist>
                  </label>

                  <label className="grid gap-1">
                    <span className="text-[10px] font-semibold tracking-wide text-white/70">
                      Phone
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number in the format country code"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={() => setPhoneTouched(true)}
                      required
                      className="h-10 w-full rounded-md border border-white/10 bg-black/40 px-3 text-[11px] text-white placeholder:text-white/35 outline-none ring-0 transition focus:border-[#2E6BFF]/60 focus:ring-2 focus:ring-[#2E6BFF]/25"
                      autoComplete="tel-national"
                    />
                    {phoneTouched && !isPhoneValid && (
                      <div className="text-[10px] font-semibold text-red-400">
                        Enter your phone number in the format +{country || "your country"}.
                      </div>
                    )}
                  </label>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="mt-2 h-10 w-full rounded-md bg-[#2E6BFF] px-6 text-[11px] font-extrabold text-white shadow-[0_14px_40px_rgba(46,107,255,0.30)] transition hover:bg-[#2E6BFF]/90 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2"
                  >
                    Submit
                  </button>
                </form>
          </div>
        </div>

      </div>
    </section>
  );
}

