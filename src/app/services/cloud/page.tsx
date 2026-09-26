"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

/* =========================================================
   TYPES
========================================================= */

type IconType =
  | "cloud"
  | "server"
  | "database"
  | "api"
  | "shield"
  | "monitor"
  | "scale"
  | "lock"
  | "rocket"
  | "code"
  | "checkCircle"
  | "tool"
  | "palette"
  | "refresh"
  | "speed";

/* =========================================================
   SERVICES
========================================================= */

const services: {
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    title: "Cloud Application Development",
    description:
      "Build scalable cloud-ready web applications with modern architecture, secure APIs, databases, and reliable deployment workflows.",
    icon: "cloud",
  },
  {
    title: "Cloud Migration",
    description:
      "Move existing websites, applications, databases, and business systems to the cloud with a structured and secure migration strategy.",
    icon: "refresh",
  },
  {
    title: "Cloud Deployment & Hosting",
    description:
      "Deploy and host applications on reliable cloud infrastructure with optimized environments, SSL, domains, and production configuration.",
    icon: "server",
  },
  {
    title: "Cloud Database Solutions",
    description:
      "Design and integrate scalable databases for applications requiring secure storage, fast queries, backups, and reliable data access.",
    icon: "database",
  },
  {
    title: "API & Serverless Solutions",
    description:
      "Create secure APIs and serverless backend services that reduce infrastructure overhead and support flexible application growth.",
    icon: "api",
  },
  {
    title: "Cloud Monitoring & Maintenance",
    description:
      "Monitor application health, performance, uptime, deployments, and infrastructure while keeping your cloud environment maintained.",
    icon: "monitor",
  },
];

/* =========================================================
   FEATURES
========================================================= */

const features: {
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    title: "Scalable Infrastructure",
    description:
      "Cloud architecture that can adapt as traffic, users, storage, and business requirements increase.",
    icon: "scale",
  },
  {
    title: "Secure Cloud Architecture",
    description:
      "Security-focused infrastructure with access control, encrypted communication, backups, and protected environments.",
    icon: "shield",
  },
  {
    title: "High Availability",
    description:
      "Reliable deployment architecture designed to improve uptime, stability, and application availability.",
    icon: "server",
  },
  {
    title: "Performance & Cost Optimization",
    description:
      "Optimize cloud resources, application performance, database usage, and infrastructure costs.",
    icon: "speed",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  "Scale resources according to business demand",
  "Reliable application hosting and deployment",
  "Secure cloud environments and access control",
  "Cloud database and storage integration",
  "Faster deployments and development workflows",
  "Backup and recovery support",
  "Application and infrastructure monitoring",
  "Flexible architecture for future business growth",
];

/* =========================================================
   PROCESS
========================================================= */

const process: {
  number: string;
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    number: "01",
    title: "Cloud Assessment",
    description:
      "We understand your existing application, infrastructure, traffic, data, business requirements, and cloud objectives.",
    icon: "monitor",
  },
  {
    number: "02",
    title: "Architecture & Planning",
    description:
      "We design the cloud architecture, services, databases, networking, security, deployment strategy, and scalability plan.",
    icon: "palette",
  },
  {
    number: "03",
    title: "Migration & Development",
    description:
      "Applications, databases, APIs, files, and services are migrated or developed according to the approved architecture.",
    icon: "code",
  },
  {
    number: "04",
    title: "Deployment & Configuration",
    description:
      "We configure servers, cloud services, domains, SSL, environment variables, databases, APIs, and production deployment.",
    icon: "rocket",
  },
  {
    number: "05",
    title: "Testing & Security",
    description:
      "Applications are tested for performance, security, reliability, accessibility, database connectivity, and production readiness.",
    icon: "checkCircle",
  },
  {
    number: "06",
    title: "Monitoring & Optimization",
    description:
      "We monitor application health and optimize infrastructure, performance, resources, deployments, and cloud costs.",
    icon: "tool",
  },
];

/* =========================================================
   TECHNOLOGY STACK
========================================================= */

const technologyIcons = [
  {
    name: "AWS",
    icon: "/icons/technologies/amazonaws.png",
  },
  {
    name: "Google Cloud",
    icon: "/icons/technologies/google-cloud.png",
  },
  {
    name: "Node.js",
    icon: "/icons/technologies/nodejs.png",
  },
  {
    name: "Next.js",
    icon: "/icons/technologies/nextjs.png",
  },
  {
    name: "React",
    icon: "/icons/technologies/react.png",
  },
  {
    name: "JavaScript",
    icon: "/icons/technologies/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/icons/technologies/typescript.png",
  },
  {
    name: "Python",
    icon: "/icons/technologies/python.png",
  },
  {
    name: "Java",
    icon: "/icons/technologies/java.png",
  },
  {
    name: "PHP",
    icon: "/icons/technologies/php.png",
  },
  {
    name: "Express",
    icon: "/icons/technologies/express.png",
  },
  {
    name: "Firebase",
    icon: "/icons/technologies/firebase.png",
  },
  {
    name: "Supabase",
    icon: "/icons/technologies/supabase.png",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/technologies/postgresql.png",
  },
  {
    name: "MongoDB",
    icon: "/icons/technologies/mongodb.png",
  },
  {
    name: "MySQL",
    icon: "/icons/technologies/mysql.png",
  },
  {
    name: "GitHub",
    icon: "/icons/technologies/github.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/technologies/tailwindcss.png",
  },
  {
    name: "HTML5",
    icon: "/icons/technologies/html5.png",
  },
  {
    name: "CSS3",
    icon: "/icons/technologies/css3.png",
  },
];

/* =========================================================
   APP ICON
========================================================= */

function AppIcon({
  type,
  className = "h-5 w-5",
}: {
  type: IconType;
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
    case "cloud":
      return (
        <svg {...commonProps}>
          <path d="M17.5 19H8a5 5 0 1 1 1.3-9.83A6 6 0 0 1 20 11.5" />
          <path d="M17.5 19a3.5 3.5 0 1 0 0-7H16" />
        </svg>
      );

    case "server":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
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

    case "api":
      return (
        <svg {...commonProps}>
          <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
        </svg>
      );

    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6z" />
          <path d="m8.5 12 2.2 2.2 4.8-5" />
        </svg>
      );

    case "monitor":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );

    case "scale":
      return (
        <svg {...commonProps}>
          <path d="M12 3v18M5 6h14M7 6l-3 6h6zM17 6l-3 6h6z" />
          <path d="M8 21h8" />
        </svg>
      );

    case "lock":
      return (
        <svg {...commonProps}>
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
        </svg>
      );

    case "rocket":
      return (
        <svg {...commonProps}>
          <path d="M14 4c3-2 6-2 6-2s0 3-2 6l-5 5-4-4z" />
          <path d="m9 9-4 1-2 4 5-1M15 15l-1 5 4-2 1-4" />
          <circle cx="16.5" cy="7.5" r="1" />
        </svg>
      );

    case "code":
      return (
        <svg {...commonProps}>
          <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
        </svg>
      );

    case "checkCircle":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );

    case "tool":
      return (
        <svg {...commonProps}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5z" />
        </svg>
      );

    case "palette":
      return (
        <svg {...commonProps}>
          <path d="M12 3a9 9 0 0 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a2 2 0 0 1 0-4h3.5A5.5 5.5 0 0 0 21 8.5C19.5 5.2 16.2 3 12 3z" />
          <circle cx="7.5" cy="9" r=".8" fill="currentColor" />
          <circle cx="10" cy="6.5" r=".8" fill="currentColor" />
          <circle cx="14" cy="6.5" r=".8" fill="currentColor" />
        </svg>
      );

    case "refresh":
      return (
        <svg {...commonProps}>
          <path d="M20 11a8 8 0 0 0-14-5L3 9" />
          <path d="M3 4v5h5M4 13a8 8 0 0 0 14 5l3-3" />
          <path d="M21 20v-5h-5" />
        </svg>
      );

    case "speed":
      return (
        <svg {...commonProps}>
          <path d="M4 15a8 8 0 1 1 16 0" />
          <path d="M12 12l4-4" />
          <path d="M6 18h12" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
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

export default function CloudSolutionsPage() {
  const middle = Math.ceil(technologyIcons.length / 2);
  const technologyRowOne = technologyIcons.slice(0, middle);
  const technologyRowTwo = technologyIcons.slice(middle);

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-900 antialiased">
      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes appMarquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .app-marquee {
          animation: appMarquee 26s linear infinite;
        }

        .app-marquee:hover {
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

        @media (prefers-reduced-motion: reduce) {
          .app-marquee,
          .animate-tech-left,
          .animate-tech-right {
            animation: none;
          }
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
                Cloud Solutions
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Build, Deploy &{" "}
                <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                  Scale With the Cloud.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                We design, migrate, deploy, and maintain secure cloud
                infrastructure for websites, web applications, APIs,
                databases, and business systems. Build faster today and stay
                ready for tomorrow&apos;s growth.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Start Your Cloud Project
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
                  "Scalable Infrastructure",
                  "Secure Cloud Architecture",
                  "Reliable Deployment",
                  "Monitoring & Maintenance",
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
                  src="/images/services/cloud-solutions/cloud-solutions-hero.png"
                  alt="Cloud Solutions and Cloud Infrastructure"
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
        <div className="app-marquee flex w-max items-center whitespace-nowrap">
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
                Cloud infrastructure designed for performance, security and
                growth.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Modern businesses need infrastructure that can handle changing
                traffic, growing data, frequent deployments, and evolving
                applications. We build cloud environments that support these
                requirements without unnecessary complexity.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                From cloud migration and application hosting to databases,
                APIs, serverless services, monitoring, and maintenance, we
                create practical cloud solutions around your technology stack
                and business goals.
              </p>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-600"
                >
                  Consult A Cloud Architect
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* SHOWCASE IMAGE */}

            <div className="relative flex justify-center">
              <div className="absolute h-[280px] w-[280px] rounded-full bg-slate-100 blur-[80px]" />

              <div className="relative w-full max-w-[540px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">
                <img
                  src="/images/services/cloud-solutions/cloud-solutions-showcase.png"
                  alt="Cloud Application and Infrastructure Showcase"
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
              Cloud Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Complete cloud solutions for modern businesses.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              From initial architecture to deployment and ongoing management,
              we help businesses build reliable cloud environments.
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
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Key Features
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Infrastructure built around your application.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We focus on the infrastructure characteristics that matter for
              production applications and growing businesses.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                  <AppIcon
                    type={feature.icon}
                    className="h-5 w-5"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950 transition-colors group-hover:text-violet-600">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="bg-slate-50 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                Why Cloud
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A stronger foundation for your digital business.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Cloud infrastructure gives businesses the flexibility to
                deploy applications faster, handle changing demand, improve
                reliability, and build technology environments that can evolve
                with the business.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                We combine application development, databases, APIs,
                infrastructure, security, deployment, and monitoring into a
                practical cloud strategy.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    <CheckIcon />
                  </span>

                  <span className="text-sm leading-6 text-slate-700">
                    {benefit}
                  </span>
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
          <div className="absolute left-[-100px] top-10 h-[300px] w-[300px] rounded-full bg-violet-50/70 blur-[90px]" />

          <div className="absolute bottom-[-100px] right-[-50px] h-[300px] w-[300px] rounded-full bg-blue-50/70 blur-[90px]" />
        </div>

        {/* Gradient Fades */}

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="relative">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Technology Stack
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Cloud, Development & Database Technologies
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              We work with modern cloud platforms, development frameworks,
              databases, APIs, and deployment technologies to create reliable
              digital infrastructure.
            </p>
          </div>

          {/* ROW 1 */}

          <div className="relative mt-12 w-full overflow-hidden">
            <div className="animate-tech-left flex gap-4 px-2 sm:gap-5">
              {[...technologyRowOne, ...technologyRowOne].map(
                (tech, index) => (
                  <TechnologyCard
                    key={`tech-row1-${tech.name}-${index}`}
                    technology={tech}
                  />
                )
              )}
            </div>
          </div>

          {/* ROW 2 */}

          <div className="relative mt-5 w-full overflow-hidden">
            <div className="animate-tech-right flex gap-4 px-2 sm:gap-5">
              {[...technologyRowTwo, ...technologyRowTwo].map(
                (tech, index) => (
                  <TechnologyCard
                    key={`tech-row2-${tech.name}-${index}`}
                    technology={tech}
                  />
                )
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
              From cloud assessment to production monitoring.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              A structured process helps us build cloud infrastructure that is
              secure, scalable, maintainable, and aligned with your
              application requirements.
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
            <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50">
              <img
                src="/images/services/cloud-solutions/cloud-solutions-process.png"
                alt="Cloud Solutions Development Process"
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
              Cloud Solutions Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Common questions about cloud infrastructure, migration,
              deployment, security, and ongoing cloud management.
            </p>
          </div>

          <div className="mt-9 space-y-4">
            {[
              {
                q: "What are cloud solutions?",
                a: "Cloud solutions use cloud infrastructure and services to host, deploy, store, process, and manage applications and business data. They can include cloud hosting, databases, APIs, storage, deployment systems, monitoring, and other infrastructure services.",
              },
              {
                q: "Can you migrate an existing website or application to the cloud?",
                a: "Yes. We can assess an existing application and plan its migration to a suitable cloud environment. The process can include application files, databases, APIs, storage, domains, SSL, environment configuration, and production deployment.",
              },
              {
                q: "Which cloud platforms do you work with?",
                a: "We work with modern cloud platforms and supporting technologies, including AWS and Google Cloud, along with application technologies such as Node.js, Next.js, React, Python, PHP, databases, APIs, and deployment tools.",
              },
              {
                q: "Can cloud hosting scale with increasing traffic?",
                a: "Cloud infrastructure can be designed to scale according to application requirements. Depending on the architecture, resources, databases, caching, load balancing, and other services can be configured to support changing traffic levels.",
              },
              {
                q: "Do you provide ongoing cloud monitoring and maintenance?",
                a: "Yes. Ongoing support can include application monitoring, deployment assistance, performance optimization, database maintenance, backups, security updates, infrastructure configuration, and troubleshooting.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-violet-200 hover:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-slate-900">
                  <span>{item.q}</span>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-violet-600 shadow-sm transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
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