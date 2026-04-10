/**
 * SubmitDeal.tsx — Hydra One Deals
 * Production-wired seller intake form
 * Sends directly to Hydra master Apps Script webhook
 */
import { useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";
import { CheckCircle2, Upload } from "lucide-react";
import { submitHydraLead } from "@/lib/hydraWebhook";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663496411445/2z4eQ63zZX7wyiYKot74mf/hero-bg-XXPKUV2weenKknaeSfuqPi.webp";

const dealTypes = [
  { value: "", label: "Select Deal Type" },
  { value: "real_estate", label: "Real Estate" },
  { value: "cars", label: "Luxury Car" },
  { value: "crypto", label: "Crypto — BTC / USDT OTC" },
  { value: "gold", label: "Gold" },
  { value: "other", label: "Other" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  dealType: string;
  location: string;
  price: string;
  details: string;
  file: File | null;
};

const emptyForm: FormData = {
  name: "",
  email: "",
  phone: "",
  dealType: "",
  location: "",
  price: "",
  details: "",
  file: null,
};

export default function SubmitDeal() {
  useScrollReveal();

  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, file }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const buildMessage = () => {
    const lines = [
      form.details.trim(),
      form.file ? `Supporting file: ${form.file.name}` : "",
      "Submission type: Seller",
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
        budget: form.price.trim(),
        message: buildMessage(),
        source: "PRIVATE_DEALS_ONLY",
      });

      setSubmitted(true);
      resetForm();

      if (result.duplicate) {
        toast.success("Deal received and merged with an existing lead record.");
      } else {
        toast.success("Your deal has been submitted successfully.");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong while submitting the deal.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[oklch(0.10_0.005_60)] min-h-screen">
      <div
        className="relative pt-36 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.08_0.004_60)/90]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[oklch(0.10_0.005_60)] to-transparent" />
        <div className="relative z-10 container">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[oklch(0.72_0.12_75)]" />
            <span className="section-label">Sellers</span>
          </div>
          <h1
            className="text-[oklch(0.93_0.012_75)] leading-tight max-w-2xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 400,
            }}
          >
            Submit a Deal
          </h1>
          <p
            className="mt-4 text-[oklch(0.55_0.008_75)] max-w-xl leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
          >
            Have an off-market asset to sell? Submit your deal below. All information is treated with strict confidentiality and routed into our Hydra intake engine.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="card-dark p-12 flex flex-col items-center gap-6 text-center">
                <div className="w-16 h-16 flex items-center justify-center border border-[oklch(0.72_0.12_75)/50]">
                  <CheckCircle2 size={28} className="text-[oklch(0.72_0.12_75)]" />
                </div>
                <h2
                  className="text-[oklch(0.93_0.012_75)]"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 400 }}
                >
                  Submission Received
                </h2>
                <p
                  className="text-[oklch(0.55_0.008_75)] leading-relaxed max-w-md"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
                >
                  Thank you for submitting your deal. A member of our team will review your submission and follow up through our private intake process.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-gold text-[0.75rem] mt-2">
                  Submit Another Deal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="section-label text-[0.65rem]">
                      Full Name <span className="text-[oklch(0.72_0.12_75)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="input-dark"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="section-label text-[0.65rem]">
                      Email Address <span className="text-[oklch(0.72_0.12_75)]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="input-dark"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="section-label text-[0.65rem]">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (000) 000-0000"
                      className="input-dark"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="section-label text-[0.65rem]">
                      Deal Type <span className="text-[oklch(0.72_0.12_75)]">*</span>
                    </label>
                    <select name="dealType" value={form.dealType} onChange={handleChange} className="input-dark" required>
                      {dealTypes.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="section-label text-[0.65rem]">Location / Jurisdiction</label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="City, Province / Country"
                      className="input-dark"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="section-label text-[0.65rem]">Asking Price / Value</label>
                    <input
                      type="text"
                      name="price"
                      value={form.price}
                      onChange={handleChange}
                      placeholder="e.g. $2,500,000 CAD"
                      className="input-dark"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="section-label text-[0.65rem]">Deal Details</label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    placeholder="Provide a brief description of the deal — type, condition, timeline, urgency, and any relevant details."
                    className="input-dark resize-none"
                    rows={5}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="section-label text-[0.65rem]">Supporting Document (Optional)</label>
                  <div
                    className="border border-dashed border-[oklch(0.30_0.008_60)] p-6 flex flex-col items-center gap-3 cursor-pointer hover:border-[oklch(0.72_0.12_75)/50] transition-colors duration-200"
                    onClick={() => fileRef.current?.click()}
                  >
                    <Upload size={20} className="text-[oklch(0.45_0.008_75)]" />
                    <p className="text-[oklch(0.45_0.008_75)] text-sm text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {form.file ? <span className="text-[oklch(0.72_0.12_75)]">{form.file.name}</span> : "Click to upload — PDF, DOC, or image (max 10MB)"}
                    </p>
                    <input
                      ref={fileRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFile}
                      className="hidden"
                    />
                  </div>
                </div>

                <p className="text-[oklch(0.38_0.006_75)] text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  By submitting this form, you confirm that all information provided is accurate and that you are a serious party. All submissions are treated with strict confidentiality.
                </p>

                <button type="submit" disabled={loading} className="btn-gold-solid py-4 text-[0.75rem] tracking-[0.14em] mt-2 disabled:opacity-60">
                  {loading ? "Submitting..." : "Submit Deal"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
