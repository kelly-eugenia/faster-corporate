import { useState } from "react";
import emailjs from "@emailjs/browser";

// ─── EmailJS keys ────────────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ─────────────────────────────────────────────

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  investmentCapacity: string;
  investorType: string;
};

const INVESTMENT_OPTIONS = [
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000 – $500,000",
  "$500,000 – $1,000,000",
  "$1,000,000+",
];

const INVESTOR_TYPES = [
  "Sophisticated Investor (s708)",
  "Professional Investor",
  "SMSF / Super Fund",
  "Family Office",
  "Institutional",
];

const INITIAL: FormState = {
  fullName: "",
  email: "",
  phone: "",
  investmentCapacity: "",
  investorType: "",
};

type Status = "idle" | "sending" | "success" | "error";

export default function RegistrationForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const isValid =
    form.fullName.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.phone.trim() &&
    form.investmentCapacity &&
    form.investorType;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus("sending");

    // Match EmailJS template variables
    const templateParams = {
      to_email: "duncan@faster.com.au",
      from_name: form.fullName,
      from_email: form.email,
      phone: form.phone,
      investment_capacity: form.investmentCapacity,
      investor_type: form.investorType,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm(INITIAL);
    } catch (err: any) {
      setErrorMsg(err?.text ?? "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  // Styling
  const labelCls = "block text-base font-semibold text-text-primary mb-1";
  const inputCls =
    "w-full rounded-[8px] border border-muted-primary bg-bg-secondary/50 px-4 py-3 text-base text-text-primary placeholder-muted-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary";

  return (
    <div className="w-full bg-bg-primary rounded-2xl shadow-2xl overflow-hidden">
      {/* Form */}
      <form onSubmit={handleSubmit} className="px-8 py-10 space-y-6" noValidate>
        {/* Full Name */}
        <div>
          <label className={labelCls} htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="e.g. John Doe"
            value={form.fullName}
            onChange={handleChange}
            required
            className={inputCls}
          />
        </div>

        {/* Email */}
        <div>
          <label className={labelCls} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="e.g. your@email.com"
            value={form.email}
            onChange={handleChange}
            required
            className={inputCls}
          />
        </div>

        {/* Phone */}
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. +61 4XX XXX XXX"
            value={form.phone}
            onChange={handleChange}
            required
            className={inputCls}
          />
        </div>

        {/* Investment Capacity */}
        <div>
          <label className={labelCls} htmlFor="investmentCapacity">
            Investment Capacity
          </label>
          <select
            id="investmentCapacity"
            name="investmentCapacity"
            value={form.investmentCapacity}
            onChange={handleChange}
            required
            className={`${inputCls} cursor-pointer`}
          >
            <option value="" disabled>
              Select an amount
            </option>
            {INVESTMENT_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        {/* Investor Type */}
        <div>
          <label className={labelCls} htmlFor="investorType">
            Investor Type
          </label>
          <select
            id="investorType"
            name="investorType"
            value={form.investorType}
            onChange={handleChange}
            required
            className={`${inputCls} cursor-pointer`}
          >
            <option value="" disabled>
              Select investor type
            </option>
            {INVESTOR_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Error message */}
        {status === "error" && (
          <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            Error: {errorMsg}
          </div>
        )}

        {/* Success message */}
        {status === "success" && (
          <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800 font-medium">
            Thank you! We've received your registration and will be in touch
            shortly.
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid || status === "sending"}
          className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : "Register Interest"}
        </button>

        <p className="text-center text-xs text-muted-primary/70">
          For sophisticated investors only (s708 Corporations Act 2001). Not
          financial advice. Past performance is not indicative of future
          results.
        </p>
      </form>
    </div>
  );
}
