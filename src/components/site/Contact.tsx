import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const inquiryTypes = [
  "Infrastructure intelligence",
  "Urbanization & land analytics",
  "Disaster risk management",
  "Public service & governance",
  "Geospatial data platforms & dashboards",
  "GeoAI agents & decision support",
  "ZoneAgent product demo",
  "Other",
];

const orgTypes = [
  "Government agency",
  "Development partner (World Bank, UNDP, bilateral)",
  "Private sector / Real estate",
  "NGO / Non-profit",
  "Academic / Research institution",
  "Other",
];

const details = [
  { label: "Location", value: site.location },
  { label: "Phone", value: site.phone },
  { label: "Email", value: site.email },
  { label: "Product", value: "zoneagent.live" },
];

export function Contact() {
  return (
    <>
      {/* Gradient CTA band (Stripe signature closing) */}
      <div className="relative overflow-hidden px-6 py-24 text-center sm:px-10">
        <div className="skew-divider grain stripe-mesh absolute inset-0" />
        <div
          aria-hidden
          className="skew-divider absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 460px at 50% 45%, rgba(255,255,255,0.72), transparent 62%)",
          }}
        />
        <div className="reveal relative z-10 mx-auto max-w-[720px]">
          <div className="mb-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">
            Contact Us
          </div>
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-ink">
            Want to know more?
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[1.05rem] leading-[1.6] text-dark">
            Partner with us to see the power of our solutions in action. Book a
            consultation or demo today and discover how we can help your business thrive.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[1rem] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_10px_28px_rgba(99,91,255,0.35)]"
            >
              Let&apos;s go <span aria-hidden>→</span>
            </a>
            <a
              href="https://zoneagent.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[1rem] font-medium text-ink shadow-[0_2px_8px_rgba(10,37,64,0.1)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(10,37,64,0.16)]"
            >
              Explore ZoneAgent <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <section id="contact" className="bg-off px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-[760px]">
          <div className="reveal text-center">
            <h2 className="display text-[clamp(2rem,3.5vw,2.8rem)] text-ink">
              Book a consultation or demo
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-[0.95rem] font-light leading-[1.7] text-gray">
              Answer a few quick questions and we&apos;ll connect you with the right
              expertise to help your business thrive.
            </p>
          </div>

          <form
            action={`https://formsubmit.co/${site.email}`}
            method="POST"
            className="reveal mt-10 grid grid-cols-1 gap-4"
          >
            <input type="hidden" name="_subject" value="New enquiry from spatial-prime" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field name="name" placeholder="Name" required autoComplete="name" />
              <Field name="email" type="email" placeholder="Email" required autoComplete="email" />
              <Field name="phone" type="tel" placeholder="Phone number" autoComplete="tel" />
              <Field name="organisation" placeholder="Organisation" autoComplete="organization" />
            </div>

            <SelectField name="inquiry_type" label="What is the primary driver for your inquiry?" options={inquiryTypes} required />
            <SelectField name="organisation_type" label="What type of organisation are you?" options={orgTypes} />

            <textarea
              name="message"
              placeholder="Tell us more about your project or challenge…"
              rows={4}
              className="w-full rounded-lg border border-light bg-white px-4 py-3 text-[0.9rem] text-ink outline-none transition placeholder:text-gray focus:border-accent focus:ring-2 focus:ring-accent/15"
            />

            <button
              type="submit"
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[0.9rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_8px_24px_rgba(99,91,255,0.28)]"
            >
              Send message
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>

          <div className="reveal mt-14 grid grid-cols-2 gap-6 border-t border-light pt-10 sm:grid-cols-4">
            {details.map((d) => (
              <div key={d.label}>
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-accent">
                  {d.label}
                </div>
                <div className="mt-1.5 text-[0.9rem] font-medium text-ink">{d.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      className="w-full rounded-lg border border-light bg-white px-4 py-3 text-[0.9rem] text-ink outline-none transition placeholder:text-gray focus:border-accent focus:ring-2 focus:ring-accent/15"
    />
  );
}

function SelectField({
  name,
  label,
  options,
  required,
}: {
  name: string;
  label: string;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.82rem] font-medium text-dark">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-lg border border-light bg-white px-4 py-3 text-[0.9rem] text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
