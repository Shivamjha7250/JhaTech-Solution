"use client";

import { useState } from "react";
import Link from "next/link";

import Footer from "@/components/Footer";
import {
  ClientLogoSlider,
  TechnologySlider,
  TestimonialsSlider,
} from "@/components/HomeSliders";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    tag: "Scalable Web",
    title: "Web App & Portal Development",
    description:
      "Enterprise-ready, high-performance web applications built on modern frameworks (Next.js, React). Optimized for sub-second latency, SEO, and massive traffic loads.",
  },
  {
    number: "02",
    tag: "Native & Hybrid",
    title: "Mobile App Development",
    description:
      "Intuitive, native and cross-platform apps (iOS, Android, Flutter) engineered for smooth performance, strict security standards, and high user retention.",
  },
  {
    number: "03",
    tag: "Enterprise Tier",
    title: "Custom SaaS & Internal Tools",
    description:
      "Tailor-made ERPs, CRMs, and operational workflow automations that digitize fragmented legacy systems and reduce manual operational overhead.",
  },
  {
    number: "04",
    tag: "Revenue Engines",
    title: "Omnichannel E-Commerce",
    description:
      "Custom headless Shopify, WooCommerce, and bespoke payment gateway setups crafted to improve conversion funnels and online sales.",
  },
  {
    number: "05",
    tag: "Next-Gen Tech",
    title: "AI & Workflow Automation",
    description:
      "Empower your platform with custom LLM integrations, retrieval-augmented chatbots, automated business logic pipelines, and predictive analytics models.",
  },
  {
    number: "06",
    tag: "DevOps & Scale",
    title: "Cloud Architecture & Security",
    description:
      "High-availability cloud migrations, automated CI/CD pipelines, container orchestration, and continuous vulnerability scanning.",
  },
];

/* =========================================================
   DIFFERENTIATORS
========================================================= */

const differentiators = [
  {
    title: "Zero Vendor Lock-In",
    desc: "Complete source code ownership and full deployment rights handed directly to your engineering team from Day 1.",
  },
  {
    title: "Engineers, Not Middlemen",
    desc: "Direct communication with the technical leads and architects building your product—no miscommunicated requirements.",
  },
  {
    title: "Security & Clean Code",
    desc: "Every commit follows modular architecture, security practices, and standardized code reviews.",
  },
  {
    title: "Predictable Delivery",
    desc: "Bi-weekly sprint demos and transparent milestones keep you in control of scope, budget, and deployment schedules.",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    phase: "Discovery",
    title: "Scope & Architecture",
    text: "We analyze technical constraints, define user personas, map API integrations, and outline the technical roadmap.",
  },
  {
    number: "02",
    phase: "Design",
    title: "UX/UI Prototyping",
    text: "We construct high-fidelity interactive Figma flows focused on effortless conversion paths and accessibility.",
  },
  {
    number: "03",
    phase: "Engineering",
    title: "Agile Development",
    text: "Clean, test-driven code execution with staging builds, ensuring complete visibility across sprint cycles.",
  },
  {
    number: "04",
    phase: "Quality",
    title: "Stress & QA Testing",
    text: "Automated regression runs, vulnerability scans, cross-browser audits, and load testing under simulated peak traffic.",
  },
  {
    number: "05",
    phase: "Deployment",
    title: "Zero-Downtime Launch",
    text: "Production release on configured cloud infrastructure backed with automated CI/CD triggers and monitoring alerts.",
  },
  {
    number: "06",
    phase: "Growth",
    title: "Support & Iteration",
    text: "Continuous maintenance, real-time error logging, performance enhancements, and iterative feature scaling.",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "Do I own 100% of the code and intellectual property?",
    answer:
      "Yes. Once milestone payments are settled, all source code, architectural documentation, digital assets, and IP rights belong entirely to your company.",
  },
  {
    question: "How do we track project development progress?",
    answer:
      "We operate on two-week agile sprints. You receive access to project boards, staging URLs, and regular progress updates for continuous feedback.",
  },
  {
    question: "Can you help migrate our legacy system to modern tech?",
    answer:
      "Yes. We specialize in modernizing legacy software into scalable applications and cloud setups while maintaining business continuity.",
  },
  {
    question: "What does post-launch support look like?",
    answer:
      "We offer support packages covering security updates, server monitoring, performance tuning, bug fixing, and continuous feature upgrades.",
  },
  {
    question: "How do you estimate cost and delivery timelines?",
    answer:
      "After an initial discovery session, we provide a detailed Scope of Work outlining milestones, technology choices, deliverables, deadlines, and project costs.",
  },
];

/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="overflow-hidden bg-white font-sans text-slate-900 antialiased">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white pb-16 pt-10 sm:pb-20 lg:pb-24 lg:pt-16">
        {/* Very subtle background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-180px] top-[-140px] h-[450px] w-[450px] rounded-full bg-slate-100/70 blur-[120px]" />

          <div className="absolute right-[-150px] top-[5%] h-[420px] w-[420px] rounded-full bg-blue-50/60 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10">
          {/* Hero Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-violet-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-600" />
              </span>

              Modern Engineering & Scale
            </div>

            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[52px]">
              Architecting Digital Engines That Drive{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Predictable Business Growth.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base">
              JhaTech Solution develops enterprise-grade web platforms,
              scalable mobile applications, and custom cloud software
              engineered to eliminate bottlenecks and accelerate revenue.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/20"
              >
                Schedule Technical Consultation
                <span>→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-xs font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600 hover:shadow-md"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[300px] w-[300px] rounded-full bg-slate-100/80 blur-[90px]" />

            <div className="relative w-full max-w-[560px]">
              <img
                src="/images/hero/hero-main.png"
                alt="JhaTech Solution high performance architecture"
                className="h-auto w-full object-contain drop-shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="relative bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          {/* Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[280px] w-[280px] rounded-full bg-slate-100/70 blur-[90px]" />

            <img
              src="/images/about/about-jhatech.png"
              alt="Engineers collaborating at JhaTech Solution"
              className="relative h-auto w-full max-w-[520px] object-contain drop-shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              The Engineering Mindset
            </p>

            <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              We bridge the divide between complex technical ideas and market
              value.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              At JhaTech Solution, software is not just lines of code—it is an
              operational backbone. We work as dedicated engineering partners
              for early-stage ventures and enterprise brands who demand stable,
              high-velocity delivery.
            </p>

            <div className="mt-7 grid gap-3.5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-violet-200 hover:bg-white hover:shadow-sm">
                <h4 className="text-sm font-bold text-slate-900">
                  Modern Architecture
                </h4>

                <p className="mt-1 text-[13px] leading-5 text-slate-600">
                  Strict modular codebases configured to sustain customer
                  scaling.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-violet-200 hover:bg-white hover:shadow-sm">
                <h4 className="text-sm font-bold text-slate-900">
                  Commercial Rigor
                </h4>

                <p className="mt-1 text-[13px] leading-5 text-slate-600">
                  Engineering scoped around verifiable ROI, business KPIs, and
                  performance.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-xs font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-violet-600"
              >
                Learn About Our Engineering Culture →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                Core Capabilities
              </p>

              <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                End-to-end software delivery from discovery to production.
              </h2>
            </div>

            {/* NOW GOES TO CONTACT */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition hover:text-violet-600"
            >
              Browse Complete Catalog →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-slate-200/70"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="text-xs font-black tracking-tight text-violet-600">
                      {service.number}
                    </span>

                    <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-semibold text-violet-700">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-950 transition-colors group-hover:text-violet-600">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-[13px] leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-3.5">
                  {/* ALL TECHNICAL SPECS GO TO CONTACT */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-900 transition group-hover:text-violet-600"
                  >
                    Technical Specs
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="border-y border-slate-200/80 bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Why Partner With Us
            </p>

            <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
              Reliable delivery designed to de-risk your investment.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((diff, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-md"
              >
                <span className="text-xl font-black text-slate-300">
                  0{i + 1}
                </span>

                <h4 className="mt-3 text-sm font-bold text-slate-950">
                  {diff.title}
                </h4>

                <p className="mt-2 text-[13px] leading-5 text-slate-600">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
            Battle-Tested Architecture
          </p>

          <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
            Engineered with modern, stable technologies.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            We avoid short-lived trends in favor of mature, highly maintainable
            production ecosystems.
          </p>
        </div>

        <div className="mt-10">
          <TechnologySlider />
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Methodology
            </p>

            <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              An unyielding process from discovery to zero-downtime scale.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <div
                key={step.number}
                className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-slate-200/60"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-violet-600">
                    {step.number}
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    {step.phase}
                  </span>
                </div>

                <h3 className="mt-3.5 text-base font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Client Feedback
            </p>

            <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
              Proven results verified by founders and CTOs.
            </h2>
          </div>

          <div className="mt-10">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="border-t border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
              Everything you need to know before starting.
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 transition-colors hover:border-slate-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 text-sm font-bold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs text-slate-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-200/60 bg-white px-5 pb-5 pt-3.5 text-[13px] leading-6 text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
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