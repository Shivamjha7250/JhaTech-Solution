"use client";

import { FormEvent, useState } from "react";
import Footer from "@/components/Footer";

/* =========================================================
   CONTACT PAGE DATA
========================================================= */

const services = [
  "Website Development",
  "Web Application Development",
  "Mobile App Development",
  "Custom Software Development",
  "E-Commerce Development",
  "AI Integration & Automation",
  "Cloud & Database Solutions",
  "SEO & Digital Solutions",
  "Maintenance & Bug Fixing",
  "Other",
];

/* =========================================================
   SIMPLE SVG ICONS
========================================================= */

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !phone || !service || !message) {
      alert("Please fill all required fields.");
      return;
    }

    setSending(true);

    try {
      /* =====================================================
         SEND FORM DATA TO NEXT.JS API
      ===================================================== */

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to submit enquiry."
        );
      }

      /* =====================================================
         WHATSAPP MESSAGE
      ===================================================== */

      const whatsappMessage = `Hello JhaTech Solution,

I would like to discuss a project.

Lead Source: Website Contact Form

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Project Details:
${message}`;

      const whatsappUrl =
        `https://wa.me/917061598544?text=${encodeURIComponent(
          whatsappMessage
        )}`;

      /* =====================================================
         SUCCESS ALERT
      ===================================================== */

      alert(
        "Thank you for contacting JhaTech Solution.\n\n" +
          "Our team will review your enquiry and contact you within 24 hours."
      );

      setSubmitted(true);

      form.reset();

      /* =====================================================
         OPEN WHATSAPP
      ===================================================== */

      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("FORM SUBMISSION ERROR:", error);

      alert(
        "We could not submit your enquiry right now.\n\n" +
          "Please try again or contact us directly on WhatsApp."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-900 antialiased">

      {/* =====================================================
          ANIMATION CSS
      ====================================================== */}

      <style>{`
        @keyframes contactMarqueeLeft {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .contact-marquee-left {
          animation: contactMarqueeLeft 24s linear infinite;
        }

        .contact-marquee-left:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-marquee-left {
            animation: none;
          }
        }
      `}</style>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white pb-10 pt-10 sm:pb-14 lg:pb-16 lg:pt-16">

        {/* Background */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[-180px] top-[-180px] h-[450px] w-[450px] rounded-full bg-violet-50 blur-[120px]" />

          <div className="absolute right-[-150px] top-[10%] h-[450px] w-[450px] rounded-full bg-blue-50 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-violet-700">

            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-600" />
            </span>

            Contact JhaTech Solution
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Valuable Together.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Have a website, mobile app, software product, e-commerce project
            or business technology requirement? Tell us what you want to build
            and let&apos;s discuss the right approach.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="https://wa.me/917061598544"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <img
                src="/icons/social/whatsapp.png"
                alt="WhatsApp"
                className="h-5 w-5 object-contain"
              />

              Chat on WhatsApp
            </a>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600"
            >
              Send an Enquiry
              <ArrowIcon />
            </a>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}

      <section className="bg-slate-50 py-10 lg:py-12">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* Email */}

            <a
              href="mailto:info.jhatechsolution@gmail.com"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 p-3 shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-blue-50">
                <img
                  src="/icons/contact/email.png"
                  alt="Email"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Email
              </p>

              <h3 className="mt-2 whitespace-nowrap text-sm font-bold tracking-tight text-slate-950 sm:text-[13px] lg:text-sm">
                info.jhatechsolution@gmail.com
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Send us your project requirements by email.
              </p>
            </a>

            {/* Phone */}

            <a
              href="tel:+917061598544"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 p-3 shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-violet-50">
                <img
                  src="/icons/contact/phone.png"
                  alt="Phone"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Phone
              </p>

              <h3 className="mt-2 text-lg font-bold text-slate-950">
                +91 70615 98544
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Discuss your project requirements directly.
              </p>
            </a>

            {/* Google Business */}

            <a
              href="https://share.google/xcvBkxEjeGyAhqo1s"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 p-3 shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-red-50">
                <img
                  src="/icons/contact/location.png"
                  alt="Google Business"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Google Business
              </p>

              <h3 className="mt-2 text-lg font-bold text-slate-950">
                JhaTech Solution
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                View our Google Business profile.
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}

      <section
        id="contact-form"
        className="bg-white py-10 lg:py-14"
      >

        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">

          {/* LEFT CONTENT */}

          <div>

            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Tell us about your project.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
              Share your requirements, goals and project details. We can
              understand your needs and discuss the technology approach,
              development process and next steps.
            </p>

            {/* Contact cards */}

            <div className="mt-6 space-y-3">

              {/* WhatsApp */}

              <a
                href="https://wa.me/917061598544"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 p-2.5 transition group-hover:scale-105">
                  <img
                    src="/icons/social/whatsapp.png"
                    alt="WhatsApp"
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-900">
                    Chat with JhaTech Solution
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Quick project discussion
                  </p>
                </div>

                <span className="ml-auto text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-green-600">
                  →
                </span>
              </a>

              {/* Phone */}

              <a
                href="tel:+917061598544"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 p-2.5 transition group-hover:scale-105">
                  <img
                    src="/icons/contact/phone.png"
                    alt="Phone"
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-900">
                    +91 70615 98544
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Discuss your requirements
                  </p>
                </div>

                <span className="ml-auto text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-600">
                  →
                </span>
              </a>

              {/* Email */}

              <a
                href="mailto:info.jhatechsolution@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 p-2.5 transition group-hover:scale-105">
                  <img
                    src="/icons/contact/email.png"
                    alt="Email"
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-bold text-slate-900">
                    info.jhatechsolution@gmail.com
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Send your project enquiry
                  </p>
                </div>

                <span className="ml-auto text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                  →
                </span>
              </a>

              {/* Google Business */}

              <a
                href="https://share.google/xcvBkxEjeGyAhqo1s"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 p-2.5 transition group-hover:scale-105">
                  <img
                    src="/icons/contact/location.png"
                    alt="Google Business"
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Google Business
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-900">
                    JhaTech Solution
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    View business profile
                  </p>
                </div>

                <span className="ml-auto text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-red-600">
                  →
                </span>
              </a>

            </div>
          </div>

          {/* FORM */}

          <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-7 lg:p-8">

            <div>

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                Project Enquiry
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                Start a conversation
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fill in the details below. Your enquiry will be sent to our
                team by email and you can continue the conversation through
                WhatsApp.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >

              {/* Name + Email */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-bold text-slate-800"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
                  />

                </div>

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold text-slate-800"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
                  />

                </div>

              </div>

              {/* Phone + Service */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold text-slate-800"
                  >
                    Phone / WhatsApp *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
                  />

                </div>

                <div>

                  <label
                    htmlFor="service"
                    className="mb-2 block text-xs font-bold text-slate-800"
                  >
                    Service Required *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}

                  </select>

                </div>

              </div>

              {/* Message */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold text-slate-800"
                >
                  Tell Us About Your Project *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your business, project requirements, features, current website/app, or the problem you want to solve..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
                />

              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={sending}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending Enquiry..." : "Send Project Enquiry"}

                {!sending && <ArrowIcon />}
              </button>

              {submitted && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                  Your enquiry has been submitted successfully.
                </div>
              )}

              <p className="text-center text-[11px] leading-5 text-slate-400">
                Your enquiry will be sent securely to JhaTech Solution and
                you can continue the discussion through WhatsApp.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* =====================================================
          SERVICES TEXT SLIDER
      ====================================================== */}

      <section className="overflow-hidden border-y border-slate-200 bg-slate-50 py-2.5">

        <div className="relative w-full overflow-hidden">

          <div className="contact-marquee-left flex w-max items-center whitespace-nowrap">

            {[...services, ...services].map((service, index) => (
              <div
                key={`${service}-${index}`}
                className="flex items-center"
              >

                <span className="px-5 text-xs font-semibold tracking-wide text-slate-800 sm:px-6 sm:text-sm">
                  {service}
                </span>

                <span
                  aria-hidden="true"
                  className="text-lg font-bold text-violet-600 sm:text-xl"
                >
                  *
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </main>
  );
}