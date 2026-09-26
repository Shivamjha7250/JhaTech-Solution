"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

/* =========================================================
   SOFTWARE MAINTENANCE SERVICES
========================================================= */

const services = [
  {
    title: "Application Maintenance",
    description:
      "Keep your software stable, updated, secure, and compatible as your business and technology environment evolves.",
    icon: "tool",
  },
  {
    title: "Bug Fixing & Troubleshooting",
    description:
      "Identify and resolve functional, UI, backend, API, database, compatibility, and production issues.",
    icon: "bug",
  },
  {
    title: "Performance Optimization",
    description:
      "Improve page speed, API response times, database queries, application rendering, and overall system performance.",
    icon: "speed",
  },
  {
    title: "Security & Dependency Updates",
    description:
      "Keep frameworks, packages, libraries, integrations, and application components updated and maintained.",
    icon: "shield",
  },
  {
    title: "Feature Enhancements",
    description:
      "Add new modules, workflows, integrations, dashboards, reports, and functionality to an existing application.",
    icon: "code",
  },
  {
    title: "Server & Database Support",
    description:
      "Maintain application servers, databases, backups, configurations, deployments, and production environments.",
    icon: "cloud",
  },
];

/* =========================================================
   TECHNOLOGY STACK
========================================================= */

const technologyIcons = [
  { name: "React", icon: "/icons/technologies/react.png" },
  { name: "Next.js", icon: "/icons/technologies/nextjs.png" },
  { name: "Node.js", icon: "/icons/technologies/nodejs.png" },
  { name: "JavaScript", icon: "/icons/technologies/javascript.png" },
  { name: "TypeScript", icon: "/icons/technologies/typescript.png" },
  { name: "Java", icon: "/icons/technologies/java.png" },
  { name: "Python", icon: "/icons/technologies/python.png" },
  { name: "PHP", icon: "/icons/technologies/php.png" },
  { name: "Kotlin", icon: "/icons/technologies/kotlin.png" },
  { name: "Swift", icon: "/icons/technologies/swift.png" },
  { name: "Firebase", icon: "/icons/technologies/firebase.png" },
  { name: "Supabase", icon: "/icons/technologies/supabase.png" },
  { name: "PostgreSQL", icon: "/icons/technologies/postgresql.png" },
  { name: "MongoDB", icon: "/icons/technologies/mongodb.png" },
  { name: "MySQL", icon: "/icons/technologies/mysql.png" },
  { name: "AWS", icon: "/icons/technologies/amazonaws.png" },
  { name: "Google Cloud", icon: "/icons/technologies/google-cloud.png" },
  { name: "Express", icon: "/icons/technologies/express.png" },
  { name: "GitHub", icon: "/icons/technologies/github.png" },
  { name: "Tailwind CSS", icon: "/icons/technologies/tailwindcss.png" },
  { name: "HTML5", icon: "/icons/technologies/html5.png" },
  { name: "CSS3", icon: "/icons/technologies/css3.png" },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Application Assessment",
    description:
      "We review the existing application, codebase, infrastructure, dependencies, database, integrations, and known issues.",
    icon: "search",
  },
  {
    number: "02",
    title: "Maintenance Planning",
    description:
      "We identify technical risks, outdated components, recurring problems, performance bottlenecks, and maintenance priorities.",
    icon: "architecture",
  },
  {
    number: "03",
    title: "Bug Fixes & Updates",
    description:
      "We resolve existing issues and safely update dependencies, frameworks, configurations, and application components.",
    icon: "tool",
  },
  {
    number: "04",
    title: "Performance Improvements",
    description:
      "We optimize application code, APIs, database queries, assets, rendering, caching, and infrastructure where required.",
    icon: "speed",
  },
  {
    number: "05",
    title: "Testing & QA",
    description:
      "Changes are tested across important workflows, devices, browsers, APIs, databases, and production-like environments.",
    icon: "checkCircle",
  },
  {
    number: "06",
    title: "Deployment & Monitoring",
    description:
      "Updates are deployed carefully and the application is monitored to verify stability and identify further issues.",
    icon: "rocket",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  "Keep existing software stable and reliable",
  "Reduce recurring bugs and technical issues",
  "Improve application speed and responsiveness",
  "Keep frameworks and dependencies maintained",
  "Add new features without rebuilding everything",
  "Improve application security and compatibility",
  "Maintain databases, servers, and integrations",
  "Extend the useful life of existing software",
];

/* =========================================================
   ICONS
========================================================= */

function AppIcon({
  type,
  className = "h-5 w-5",
}: {
  type: string;
  className?: string;
}) {
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
    case "tool":
      return (
        <svg {...commonProps}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );

    case "bug":
      return (
        <svg {...commonProps}>
          <path d="M9 9h6" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
          <path d="M12 2v3" />
          <path d="M8 5h8" />
          <path d="M6 9H3" />
          <path d="M21 9h-3" />
          <path d="M6 15H3" />
          <path d="M21 15h-3" />
          <path d="M7 19H4" />
          <path d="M20 19h-3" />
          <path d="M8 5a6 6 0 0 0-2 4v5a6 6 0 0 0 12 0V9a6 6 0 0 0-2-4" />
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
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "code":
      return (
        <svg {...commonProps}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );

    case "cloud":
      return (
        <svg {...commonProps}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <path d="M12 13v4" />
          <path d="m10 15 2 2 2-2" />
        </svg>
      );

    case "mobile":
      return (
        <svg {...commonProps}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );

    case "database":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7" />
        </svg>
      );

    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>
      );

    case "architecture":
      return (
        <svg {...commonProps}>
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <path d="M12 8v4" />
          <path d="M5 16v-4h14v4" />
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

    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

/* =========================================================
   ARROW ICON
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
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/* =========================================================
   CHECK ICON
========================================================= */

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

export default function SoftwareMaintenancePage() {
  const middle = Math.ceil(technologyIcons.length / 2);

  const technologyRowOne = technologyIcons.slice(0, middle);
  const technologyRowTwo = technologyIcons.slice(middle);

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-900 antialiased">
      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes serviceMarquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .service-marquee {
          animation: serviceMarquee 26s linear infinite;
        }

        .service-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes techScrollLeft {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes techScrollRight {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0);
          }
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
          HERO
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
                Software Maintenance & Support
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
                Keep Your Software{" "}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Fast, Secure & Reliable.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                We maintain existing websites, web applications, mobile apps,
                APIs, databases, and software infrastructure so your digital
                products remain stable, secure, compatible, and ready for
                future growth.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get Maintenance Support
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
                  "Bug Fixes & Updates",
                  "Performance Optimization",
                  "Security Maintenance",
                  "Ongoing Technical Support",
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

            {/* HERO IMAGE */}

            <div className="relative flex items-center justify-center">
              <div className="absolute h-[320px] w-[320px] rounded-full bg-violet-100/70 blur-[90px]" />

              <div className="relative w-full max-w-[560px]">
                <img
                  src="/images/services/software-maintenance/software-maintenance-hero.png"
                  alt="Software Maintenance and Support"
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
        <div className="service-marquee flex w-max items-center whitespace-nowrap">
          {[...services, ...services].map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="flex items-center"
            >
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
          WHAT WE MAINTAIN
      ====================================================== */}

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                What We Maintain
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Your software needs attention long after launch.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Software environments constantly change. Browsers receive
                updates, frameworks evolve, dependencies become outdated,
                security requirements change, traffic increases, and business
                requirements grow.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                We help keep existing digital products healthy by handling
                bugs, upgrades, performance improvements, security
                maintenance, integrations, infrastructure changes, and new
                functionality.
              </p>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-600"
                >
                  Review Your Existing Software →
                </Link>
              </div>
            </div>

            {/* SHOWCASE IMAGE */}

            <div className="relative flex justify-center">
              <div className="absolute h-[280px] w-[280px] rounded-full bg-slate-100 blur-[80px]" />

              <div className="relative w-full max-w-[540px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">
                <img
                  src="/images/services/software-maintenance/software-maintenance-showcase.png"
                  alt="Software Maintenance Dashboard"
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
              Maintenance Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Continuous technical support for your software.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Maintain existing applications, improve their performance, add
              new functionality, and keep the underlying technology current.
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
                    <AppIcon
                      type={service.icon}
                      className="h-5 w-5"
                    />
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
                icon: "tool",
                title: "Proactive Maintenance",
                text: "Identify outdated components, recurring issues, and technical risks before they become larger problems.",
              },
              {
                icon: "speed",
                title: "Performance Care",
                text: "Optimize application performance, APIs, databases, assets, rendering, and infrastructure.",
              },
              {
                icon: "shield",
                title: "Security Updates",
                text: "Keep dependencies, frameworks, libraries, authentication, and application components maintained.",
              },
              {
                icon: "code",
                title: "Continuous Improvements",
                text: "Add features and technical improvements without unnecessarily replacing an existing working system.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                  <AppIcon
                    type={item.icon}
                    className="h-6 w-6"
                  />
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-950 transition-colors group-hover:text-violet-600">
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
                Why Software Maintenance
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Protect the software your business already depends on.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Replacing a working application is not always necessary.
                Consistent maintenance can help keep an existing product
                secure, compatible, performant, and aligned with changing
                business requirements.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-600"
              >
                Discuss Maintenance Support
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

                  <p className="text-sm leading-6 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}

      <section className="tech-slider-area relative overflow-hidden bg-white py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-150px] top-10 h-[300px] w-[300px] rounded-full bg-violet-50/70 blur-[90px]" />

          <div className="absolute bottom-10 right-[-150px] h-[300px] w-[300px] rounded-full bg-blue-50/70 blur-[90px]" />
        </div>

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="relative">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Technology Stack
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technologies We Maintain & Support
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              We support modern frontend frameworks, backend technologies,
              mobile platforms, databases, cloud infrastructure, and API
              integrations.
            </p>
          </div>

          {/* ROW 1 */}

          <div className="relative mt-12 w-full overflow-hidden">
            <div className="animate-tech-left flex gap-4 px-2 sm:gap-5">
              {[...technologyRowOne, ...technologyRowOne].map(
                (technology, index) => (
                  <TechnologyCard
                    key={`tech-row1-${technology.name}-${index}`}
                    technology={technology}
                  />
                ),
              )}
            </div>
          </div>

          {/* ROW 2 */}

          <div className="relative mt-5 w-full overflow-hidden">
            <div className="animate-tech-right flex gap-4 px-2 sm:gap-5">
              {[...technologyRowTwo, ...technologyRowTwo].map(
                (technology, index) => (
                  <TechnologyCard
                    key={`tech-row2-${technology.name}-${index}`}
                    technology={technology}
                  />
                ),
              )}
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
              A structured approach to long-term software stability.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We assess the existing system first, then prioritize maintenance,
              improvements, testing, and deployment around your business needs.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <div
                key={item.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    <AppIcon
                      type={item.icon}
                      className="h-5 w-5"
                    />
                  </div>

                  <span className="text-xs font-bold tracking-[0.18em] text-violet-600">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-950 transition-colors group-hover:text-violet-600">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* PROCESS IMAGE */}

          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-5xl overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50">
              <img
                src="/images/services/software-maintenance/software-maintenance-process.png"
                alt="Software Maintenance Process"
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </div>
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
              Software Maintenance Questions
            </h2>
          </div>

          <div className="mt-9 space-y-4">
            {[
              {
                q: "What does software maintenance include?",
                a: "Software maintenance can include bug fixing, security updates, dependency updates, performance optimization, database support, server support, compatibility improvements, API maintenance, and new feature development.",
              },
              {
                q: "Can you maintain software developed by another developer?",
                a: "Yes. We can review an existing codebase and work on software originally developed by another developer or company. Access to the source code and required technical infrastructure may be necessary.",
              },
              {
                q: "Do you provide ongoing maintenance after a website or application launches?",
                a: "Yes. Ongoing support can cover recurring bug fixes, technical updates, performance improvements, security maintenance, monitoring, infrastructure changes, and future feature development.",
              },
              {
                q: "Can you update old technologies without rebuilding the entire application?",
                a: "In many cases, existing systems can be incrementally upgraded. The appropriate approach depends on the architecture, dependencies, technical debt, compatibility requirements, and condition of the existing codebase.",
              },
              {
                q: "Can maintenance include server and database support?",
                a: "Yes. Where required, maintenance can include application deployment, server configuration, database troubleshooting, backups, API connectivity, environment configuration, and production support.",
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