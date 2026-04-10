/**
 * BuyerList.tsx — Private Deals Only (by Hydraone Deals)
 * Production-wired buyer intake form
 * Sends directly to Hydra master Apps Script webhook
 */
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";
import { CheckCircle2, Globe, Layers, Lock, Star } from "lucide-react";
import { submitHydraLead } from "@/lib/hydraWebhook";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/hero-bg-XXPKUV2weenKknaeSfuqPi.webp";

const dealTypeOptions = [
  { value: "", label: "Select Deal Type Interest" },
  { value: "real_estate", label: "Real Estate" },
  { value: "cars", label: "Cars" },
  { value: "crypto", label: "Crypto" },
  { value: "gold", label: "Gold" },
  { value: "multiple", label: "Multiple Categories" },
];

const budgetRanges = [
  { value: "", label: "Select Budget Range" },
  { value: "under-500k", label: "Under $500K" },
  { value: "500k-1m", label: "$500K – $1M" },
  { value: "1m-5m", label: "$1M – $5M" },
  { value: "5m-25m", label: "$5M – $25M" },
  { value: "25m-100m", label: "$25M – $100M" },
  { value: "100m-plus", label: "$100M+" },
  { value: "flexible", label: "Flexible / Deal Dependent" },
];

const whyJoin = [
  {
    icon: Lock,
    title: "Access to Private Opportunities",
    desc: "Deals that never reach public markets. Exclusively for vetted buyers in our network.",
  },
  {
    icon: Star,
    title: "Serious and Vetted Deal Flow",
    desc: "Every deal and every seller is reviewed before reaching your inbox. No noise, no speculation.",
  },
  {
    icon: Layers,
    title: "Multi-Asset Focus",
    desc: "Real estate, luxury cars, crypto OTC, and gold — all under one private brokerage.",
  },
  {
    icon: Globe,
    title: "Canada and International Reach",
    desc: "We operate across borders. Whether local or global, we source and match accordingly.",
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  dealType: string;
  location: string;
  budget: string;
  notes: string;
  submissionType: string;
};

const emptyForm: FormData = {
  name: "",
  email: "",
  phone: "",
  dealType: "",
  location: "",
  budget: "",
  notes: "",
  submissionType: "Buyer",
};

export default function BuyerList() {
  useScrollReveal();

  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setForm(emptyForm);

  const buildMessage = () => {
    const lines = [
      form.notes.trim(),
      `Submission type: ${form.submissionType}`,
      "Brand: Private Deals Only",
    ].filter(Boolean);

    return lines.join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.dealType.trim()) {
      toast.error("Please complete name, email, and deal type.");
      return;
    }

    if (!form.phone.trim() && !form.email.trim()) {
      toast.error("Please provide at least a phone number or email.");
      return;
    }

    setLoading(true);

    try {
      const result = await submitHydraLead({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        deal_type: form.dealType.trim(),
        location: form.location.trim(),
        budget: form.budget.trim(),
        message: buildMessage(),
        source: "PRIVATE_DEALS_ONLY_BUYER",
      });

      setSubmitted(true);
      resetForm();

      if (result.duplicate) {
        toast.success("Buyer profile received and merged with an existing record.");
      } else {
        toast.success("You have been added to the buyer list.");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong while joining the buyer list.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[oklch(0.10_0.005_60)] min-h-screen">
      <div
        className="relative pt-36 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.08_0.004_60)/90]" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[oklch(0.10_0.005_60)] to-transparent" />
        <div className="relative z-10 container max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[oklch(0.72_0.12_75)]" />
            <span className="section-label">Buyers &amp; Investors</span>
            <div className="h-px w-8 bg-[oklch(0.72_0.12_75)]" />
          </div>
          <h1
            className="text-[oklch(0.93_0.012_75)] leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 400,
            }}
          >
            Join the Buyer List
          </h1>
          <p className="text-[oklch(0.60_0.008_75)] max-w-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}>
            Get access to private off-market opportunities in real estate, cars, crypto, and gold.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container max-w-2xl mx-auto">
          <div className="reveal mb-10 text-center">
            <p className="text-[oklch(0.55_0.008_75)] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}>
              <span className="text-[oklch(0.72_0.12_75)] font-medium">For serious buyers only.</span> Submit your criteria and we will review your request for fit, seriousness, and opportunity alignment.
            </p>
          </div>

          <div className="reveal gold-divider mb-12" />

          {submitted ? (
            <div className="reveal card-dark p-14 flex flex-col items-center gap-6 text-center">
              <div className="w-16 h-16 flex items-center justify-center border border-[oklch(0.72_0.12_75)/50]">
                <CheckCircle2 size={28} className="text-[oklch(0.72_0.12_75)]" />
              </div>
              <h2 className="text-[oklch(0.93_0.012_75)]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 400 }}>
                You're on the List
              </h2>
              <p className="text-[oklch(0.55_0.008_75)] leading-relaxed max-w-md" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}>
                Your profile has been received. We will review your criteria and reach out when a matching opportunity becomes available.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-gold text-[0.75rem] mt-2">
                Update My Criteria
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal card-dark p-10 flex flex-col gap-7">
              <input type="hidden" name="submissionType" value="Buyer" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="section-label text-[0.65rem]">
                    Full Name <span className="text-[oklch(0.72_0.12_75)]">*</span>
                  </label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="input-dark" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="section-label text-[0.65rem]">
                    Email Address <span className="text-[oklch(0.72_0.12_75)]">*</span>
                  </label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="input-dark" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="section-label text-[0.65rem]">Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (000) 000-0000" className="input-dark" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="section-label text-[0.65rem]">
                  Deal Type Interest <span className="text-[oklch(0.72_0.12_75)]">*</span>
                </label>
                <select name="dealType" value={form.dealType} onChange={handleChange} className="input-dark" required>
                  {dealTypeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="section-label text-[0.65rem]">Preferred Location</label>
                  <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="e.g. Toronto, Dubai, Anywhere" className="input-dark" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="section-label text-[0.65rem]">Budget</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className="input-dark">
                    {budgetRanges.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="section-label text-[0.65rem]">Buying Criteria / Notes</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Describe what you are looking for — deal size, type, timeline, and any specific requirements."
                  className="input-dark resize-none"
                  rows={5}
                />
              </div>

              <p className="text-[oklch(0.38_0.006_75)] text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                By submitting this form, you confirm that you are a serious buyer or investor. Your information will be kept strictly confidential and will not be shared with third parties without your consent.
              </p>

              <button type="submit" disabled={loading} className="btn-gold-solid py-4 text-[0.8rem] tracking-[0.16em] mt-1 disabled:opacity-60 w-full" style={{ letterSpacing: "0.16em" }}>
                {loading ? "Submitting..." : "JOIN BUYER LIST"}
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="py-20 border-t border-[oklch(0.18_0.006_60)]">
        <div className="container">
          <div className="reveal flex items-center gap-4 mb-14 max-w-5xl mx-auto">
            <span className="section-label">Why Join</span>
            <div className="h-px flex-1 bg-[oklch(0.22_0.007_60)]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {whyJoin.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="reveal card-dark p-7 flex flex-col gap-4" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.72_0.12_75)/40]">
                    <Icon size={17} className="text-[oklch(0.72_0.12_75)]" />
                  </div>
                  <h3 className="text-[oklch(0.93_0.012_75)]" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 500 }}>
                    {item.title}
                  </h3>
                  <p className="text-[oklch(0.55_0.008_75)] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
