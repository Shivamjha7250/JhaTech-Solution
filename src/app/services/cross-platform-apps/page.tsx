"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

/* =========================================================
   CROSS-PLATFORM APP SERVICES
========================================================= */

const services = [
  {
    title: "React Native App Development",
    description:
      "Native-feel Android and iOS applications built using a single React codebase, reducing development time and cost.",
    icon: "react",
  },
  {
    title: "Flutter App Development",
    description:
      "High-performance, visually expressive applications with smooth animations and consistent UI across both platforms.",
    icon: "flutter",
  },
  {
    title: "Enterprise Mobile Solutions",
    description:
      "Secure, scalable internal tools, field service apps, and executive dashboards integrated with existing company systems.",
    icon: "briefcase",
  },
  {
    title: "E-Commerce & Delivery Apps",
    description:
      "Feature-packed consumer apps complete with product catalogues, real-time tracking, payment gateways, and push alerts.",
    icon: "shopping",
  },
  {
    title: "API & Backend Integration",
    description:
      "Seamless integration with RESTful APIs, GraphQL endpoints, cloud databases, authentication providers, and third-party tools.",
    icon: "terminal",
  },
  {
    title: "App Modernization & Migration",
    description:
      "Upgrade legacy native apps to modern cross-platform frameworks to simplify updates and ongoing maintenance.",
    icon: "refresh",
  },
];

/* =========================================================
   TECHNOLOGY STACK (Matched to public/icons/technologies)
========================================================= */

const technologyIcons = [
  { name: "React", icon: "/icons/technologies/react.png" },
  { name: "Flutter", icon: "/icons/technologies/flutter.png" },
  { name: "Kotlin", icon: "/icons/technologies/kotlin.png" },
  { name: "Swift", icon: "/icons/technologies/swift.png" },
  { name: "Android", icon: "/icons/technologies/android.png" },
  { name: "Apple", icon: "/icons/technologies/apple.png" },
  { name: "JavaScript", icon: "/icons/technologies/javascript.png" },
  { name: "TypeScript", icon: "/icons/technologies/typescript.png" },
  { name: "Node.js", icon: "/icons/technologies/nodejs.png" },
  { name: "Next.js", icon: "/icons/technologies/nextjs.png" },
  { name: "Firebase", icon: "/icons/technologies/firebase.png" },
  { name: "Supabase", icon: "/icons/technologies/supabase.png" },
  { name: "PostgreSQL", icon: "/icons/technologies/postgresql.png" },
  { name: "MongoDB", icon: "/icons/technologies/mongodb.png" },
  { name: "MySQL", icon: "/icons/technologies/mysql.png" },
  { name: "AWS", icon: "/icons/technologies/amazonaws.png" },
  { name: "Google Cloud", icon: "/icons/technologies/google-cloud.png" },
  { name: "Python", icon: "/icons/technologies/python.png" },
  { name: "Express", icon: "/icons/technologies/express.png" },
  { name: "GitHub", icon: "/icons/technologies/github.png" },
  { name: "Tailwind CSS", icon: "/icons/technologies/tailwindcss.png" },
  { name: "Java", icon: "/icons/technologies/java.png" },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Architecture & Wireframes",
    description:
      "We design app architecture, shared business logic, user journeys, and cross-platform UI workflows.",
    icon: "palette",
  },
  {
    number: "02",
    title: "Core Development",
    description:
      "Clean modular code structure using React Native or Flutter with platform-specific native modules when needed.",
    icon: "code",
  },
  {
    number: "03",
    title: "Backend & API Integration",
    description:
      "Connecting real-time databases, auth protocols, state stores, payment channels, and server endpoints.",
    icon: "cloud",
  },
  {
    number: "04",
    title: "Device Testing & QA",
    description:
      "Rigorous performance testing across multiple screen ratios, OS versions, edge network states, and hardware types.",
    icon: "checkCircle",
  },
  {
    number: "05",
    title: "Store Submission",
    description:
      "Preparation of app bundles, signing certificates, assets, and handling Apple App Store & Google Play reviews.",
    icon: "rocket",
  },
  {
    number: "06",
    title: "Updates & Monitoring",
    description:
      "Crashlytics tracking, performance monitoring, continuous maintenance, and OTA (over-the-air) code updates.",
    icon: "tool",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  "Single codebase for both iOS and Android stores",
  "Up to 40% reduction in build time and overall cost",
  "Near-native performance and 60fps animations",
  "Consistent brand experience across all devices",
  "Simplified maintenance and shared bug fixes",
  "Easy integration with camera, GPS, and sensors",
  "Offline caching and offline-first capabilities",
  "Direct over-the-air (OTA) updates support",
];

/* =========================================================
   ICONS
========================================================= */

function AppIcon({ type, className = "h-5 w-5" }: { type: string; className?: string }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (type) {
    case "react":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "flutter":
      return (
        <svg {...commonProps}>
          <path d="M14.5 2 4.5 12l3 3L17.5 5z" />
          <path d="M9 16.5 14.5 22h5l-8-8-2.5 2.5z" />
          <path d="m14 11.5 5.5-5.5h-5l-3 3 2.5 2.5z" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...commonProps}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "shopping":
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
          <path d="M2 3h3l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
        </svg>
      );
    case "terminal":
      return (
        <svg {...commonProps}>
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...commonProps}>
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...commonProps}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case "speed":
      return (
        <svg {...commonProps}>
          <path d="M4 14a8 8 0 1 1 16 0" />
          <path d="m12 12 4-4" />
          <path d="M6 18h12" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "code":
      return (
        <svg {...commonProps}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "palette":
      return (
        <svg {...commonProps}>
          <circle cx="13.5" cy="6.5" r=".5" />
          <circle cx="17.5" cy="10.5" r=".5" />
          <circle cx="8.5" cy="7.5" r=".5" />
          <circle cx="6.5" cy="12.5" r=".5" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5.5-4.5-10-10-10z" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...commonProps}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case "checkCircle":
      return (
        <svg {...commonProps}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...commonProps}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        </svg>
      );
    case "tool":
      return (
        <svg {...commonProps}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

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
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

/* =========================================================
   TECHNOLOGY CARD
========================================================= */

function TechnologyCard({
  technology,
}: {
  technology: {
    name: string;
    icon: string;
  };
}) {
  return (
    <div className="group w-[140px] shrink-0 sm:w-[160px] lg:w-[170px]">
      <div className="relative flex h-[140px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-[0_18px_45px_rgba(99,102,241,0.12)]">
        <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-violet-100 opacity-0 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2 group-hover:border-violet-200 group-hover:bg-white group-hover:shadow-md">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-9 w-9 object-contain transition-all duration-500 ease-out group-hover:scale-125"
            loading="lazy"
          />
        </div>

        <h3 className="relative mt-3 text-center text-xs font-bold text-slate-700 transition-colors duration-300 group-hover:text-violet-600">
          {technology.name}
        </h3>

        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-500 group-hover:w-1/2" />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CrossPlatformAppsPage() {
  const middle = Math.ceil(technologyIcons.length / 2);
  const technologyRowOne = technologyIcons.slice(0, middle);
  const technologyRowTwo = technologyIcons.slice(middle);

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-900 antialiased">
      {/* Dynamic Keyframes for Marquee Slider */}
      <style>{`
        @keyframes appMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .app-marquee {
          animation: appMarquee 26s linear infinite;
        }
        .app-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes techScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes techScrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-tech-left {
          display: flex;
          width: max-content;
          animation: techScrollLeft 32s linear infinite;
        }
        .animate-tech-right {
          display: flex;
          width: max-content;
          animation: techScrollRight 32s linear infinite;
        }
        .tech-slider-area:hover .animate-tech-left,
        .tech-slider-area:hover .animate-tech-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-white pb-12 pt-12 sm:pb-16 lg:pb-20 lg:pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-[-180px] h-[450px] w-[450px] rounded-full bg-violet-50 blur-[120px]" />
          <div className="absolute right-[-150px] top-[8%] h-[450px] w-[450px] rounded-full bg-blue-50 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-700">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                Cross-Platform App Development
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
                One Codebase.{" "}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Native Experience on iOS & Android.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                We design and engineer lightning-fast cross-platform mobile apps
                using React Native and Flutter. Get the performance and feel of
                native apps with significantly faster launch times and reduced maintenance.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Start Your App Project
                  <ArrowIcon />
                </Link>

                <a
                  href="https://wa.me/917061598544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600"
                >
                  Discuss on WhatsApp
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
                {[
                  "iOS & Android Support",
                  "60 FPS Native Performance",
                  "Single Shared Codebase",
                  "Store Deployment Included",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                      <CheckIcon />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* HERO PNG IMAGE */}
            <div className="relative flex items-center justify-center">
              <div className="absolute h-[320px] w-[320px] rounded-full bg-violet-100/70 blur-[90px]" />
              <div className="relative w-full max-w-[560px]">
                <img
                  src="/images/services/cross-platform-apps.png"
                  alt="Cross Platform App Development Showcase"
                  className="h-auto w-full object-contain drop-shadow-[0_20px_45px_rgba(15,23,42,0.14)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE MARQUEE
      ====================================================== */}
      <section className="overflow-hidden border-y border-slate-200 bg-slate-50 py-2.5">
        <div className="w-max app-marquee flex items-center whitespace-nowrap">
          {[...services, ...services].map((service, index) => (
            <div key={`${service.title}-${index}`} className="flex items-center">
              <span className="px-5 text-xs font-semibold tracking-wide text-slate-700 sm:px-6 sm:text-sm">
                {service.title}
              </span>
              <span className="text-lg font-bold text-violet-600 sm:text-xl">
                *
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          WHAT WE BUILD
      ====================================================== */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                What We Build
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Apps designed for fluid interaction and zero friction.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cross-platform development has reached a point where the barrier between
                native code and multi-platform frameworks has essentially vanished. With
                frameworks like React Native and Flutter, your users get high-speed execution,
                smooth gestures, and platform-compliant UI.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Whether you need a consumer product with custom micro-interactions or an internal
                operational tool with offline sync, we build architecture that scales
                effortlessly with your user growth.
              </p>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-600"
                >
                  Consult An App Architect →
                </Link>
              </div>
            </div>

            {/* WHAT WE BUILD IMAGE CONTAINER */}
            <div className="relative flex justify-center">
              <div className="absolute h-[280px] w-[280px] rounded-full bg-slate-100 blur-[80px]" />
              <div className="relative w-full max-w-[540px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">
                <img
                  src="/images/services/cross-platform-build-showcase.png"
                  alt="Cross-Platform App UI Preview"
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              App Development Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Engineered for both Apple and Google platforms.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Select the mobile service tier that matches your business model, timeline, and product roadmap.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    <AppIcon type={service.icon} className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-slate-300 group-hover:text-violet-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950 transition-colors group-hover:text-violet-600">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-600 transition group-hover:gap-3"
                >
                  Discuss this service
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          KEY FEATURES
      ====================================================== */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "mobile",
                title: "Unified Code",
                text: "Build once and deploy across phones, tablets, and foldables simultaneously.",
              },
              {
                icon: "speed",
                title: "Optimized Speed",
                text: "Hardware-accelerated rendering and optimized bridge architectures.",
              },
              {
                icon: "shield",
                title: "Secure Core",
                text: "Enterprise-grade encryption, secure keychain storage, and biometric auth.",
              },
              {
                icon: "code",
                title: "Modular Logic",
                text: "State-managed code structure ready for new features and instant scaling.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                  <AppIcon type={item.icon} className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-950 group-hover:text-violet-600 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}
      <section className="bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                Why Cross-Platform
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Speed to market without sacrificing quality.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Writing separate native apps for Android and iOS doubles development costs
                and leads to inconsistent user features. Cross-platform engineering aligns your
                product release, streamlines testing, and delivers immediate value.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-600"
              >
                Discuss App Architecture
                <ArrowIcon />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                    <CheckIcon />
                  </span>

                  <p className="text-sm leading-6 text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK (2-ROW CONTINUOUS SLIDER)
      ====================================================== */}
      <section className="tech-slider-area relative overflow-hidden bg-white py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-150px] top-10 h-[300px] w-[300px] rounded-full bg-violet-50/70 blur-[90px]" />
          <div className="absolute right-[-150px] bottom-10 h-[300px] w-[300px] rounded-full bg-blue-50/70 blur-[90px]" />
        </div>

        {/* Gradient Fades on edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="relative">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Technology Stack
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Mobile Frameworks & Cloud Architecture
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              We leverage modern client libraries and resilient cloud backends to keep your app fast, stable, and responsive.
            </p>
          </div>

          {/* ROW 1: Slides Left */}
          <div className="relative mt-12 w-full overflow-hidden">
            <div className="animate-tech-left flex gap-4 px-2 sm:gap-5">
              {[...technologyRowOne, ...technologyRowOne].map((tech, index) => (
                <TechnologyCard
                  key={`tech-row1-${tech.name}-${index}`}
                  technology={tech}
                />
              ))}
            </div>
          </div>

          {/* ROW 2: Slides Right */}
          <div className="relative mt-5 w-full overflow-hidden">
            <div className="animate-tech-right flex gap-4 px-2 sm:gap-5">
              {[...technologyRowTwo, ...technologyRowTwo].map((tech, index) => (
                <TechnologyCard
                  key={`tech-row2-${tech.name}-${index}`}
                  technology={tech}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From conception to App Store approval.
            </h2>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <div
                key={item.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    <AppIcon type={item.icon} className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.18em] text-violet-600">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-950 group-hover:text-violet-600 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Cross-Platform Development Questions
            </h2>
          </div>

          <div className="mt-9 space-y-4">
            {[
              {
                q: "Does a cross-platform app look and feel truly native?",
                a: "Yes. Both React Native and Flutter compile down to native interface components or render via high-performance engines like Impeller/Skia, delivering indistinguishable performance and look & feel.",
              },
              {
                q: "Should I choose React Native or Flutter?",
                a: "React Native is ideal if your team already has React/Web background and requires frequent OTA code push updates. Flutter is excellent if you require complex custom canvas animations and complete pixel-level design control.",
              },
              {
                q: "Do you help publish the app to Google Play and Apple App Store?",
                a: "Yes. We take care of build signing, test channels (TestFlight & Internal Testing tracks), store assets preparation, privacy policy disclosures, and store guideline compliance.",
              },
              {
                q: "Can the app access device camera, GPS, and push notifications?",
                a: "Absolutely. Cross-platform frameworks have comprehensive bridges and libraries to integrate native camera APIs, geolocation, biometric login, Bluetooth, and remote push notifications.",
              },
              {
                q: "How are app updates handled after launch?",
                a: "Javascript updates in React Native can often be delivered over-the-air (OTA) without waiting for full app store approval cycles. Core binary changes and version bumps follow regular store deployment channels.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-8 text-sm font-bold text-slate-900">
                  {item.q}
                  <span className="float-right text-violet-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                  {item.a}
                </p>
              </details>
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