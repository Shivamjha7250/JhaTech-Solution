"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

/* =========================================================
   TYPES
========================================================= */

type IconType =
  | "search"
  | "chart"
  | "target"
  | "content"
  | "social"
  | "ads"
  | "speed"
  | "mobile"
  | "analytics"
  | "shield"
  | "code"
  | "checkCircle"
  | "rocket"
  | "tool"
  | "palette"
  | "refresh"
  | "globe";

/* =========================================================
   SERVICES
========================================================= */

const services: {
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    title: "SEO Optimization",
    description:
      "Improve search visibility with technical SEO, on-page optimization, keyword targeting, structured content, and search-friendly website architecture.",
    icon: "search",
  },
  {
    title: "Local SEO",
    description:
      "Improve local search presence with location-focused optimization, Google Business visibility, local keywords, and business information consistency.",
    icon: "globe",
  },
  {
    title: "Content Strategy",
    description:
      "Create useful, search-focused content strategies designed around customer intent, relevant topics, keywords, and long-term organic growth.",
    icon: "content",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build a consistent digital presence with platform-specific content, social campaigns, audience engagement, and brand communication.",
    icon: "social",
  },
  {
    title: "Performance Marketing",
    description:
      "Plan and optimize digital advertising campaigns around business goals, landing pages, audience targeting, conversions, and measurable results.",
    icon: "ads",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track website traffic, search performance, user behavior, conversions, and campaign data to support informed digital marketing decisions.",
    icon: "analytics",
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
    title: "Technical SEO",
    description:
      "Improve crawlability, indexing, page structure, metadata, internal linking, performance, and technical website health.",
    icon: "code",
  },
  {
    title: "Search Visibility",
    description:
      "Target relevant search terms and optimize pages around the information users are actively looking for.",
    icon: "search",
  },
  {
    title: "Conversion Focus",
    description:
      "Connect digital marketing activities with useful landing pages, calls to action, enquiries, and business goals.",
    icon: "target",
  },
  {
    title: "Data-Driven Growth",
    description:
      "Use analytics and performance data to identify opportunities, measure changes, and continuously improve campaigns.",
    icon: "chart",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  "Improve organic search visibility",
  "Target relevant keywords and customer intent",
  "Build stronger local search presence",
  "Create useful and search-friendly website content",
  "Improve website performance and technical SEO",
  "Generate measurable marketing data",
  "Optimize landing pages for enquiries and conversions",
  "Build a consistent long-term digital presence",
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
    title: "Digital Audit",
    description:
      "We review your website, technical SEO, existing content, search visibility, competitors, analytics, and current digital presence.",
    icon: "search",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "We define target audiences, keyword opportunities, content priorities, channels, campaign goals, and measurable objectives.",
    icon: "palette",
  },
  {
    number: "03",
    title: "Optimization & Content",
    description:
      "We optimize website pages, technical elements, content structure, metadata, internal links, and digital assets.",
    icon: "content",
  },
  {
    number: "04",
    title: "Campaign Implementation",
    description:
      "SEO, social media, advertising, local visibility, and other selected digital marketing activities are implemented.",
    icon: "rocket",
  },
  {
    number: "05",
    title: "Testing & Measurement",
    description:
      "We monitor rankings, traffic, engagement, conversions, campaign data, technical performance, and other relevant metrics.",
    icon: "checkCircle",
  },
  {
    number: "06",
    title: "Continuous Optimization",
    description:
      "Digital campaigns and website optimization are refined using performance data, search trends, audience behavior, and business priorities.",
    icon: "tool",
  },
];

/* =========================================================
   TECHNOLOGY STACK
========================================================= */

const technologyIcons = [
  {
    name: "Google",
    icon: "/icons/technologies/google.png",
  },
  {
    name: "Google Analytics",
    icon: "/icons/technologies/google-analytics.png",
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
    name: "React",
    icon: "/icons/technologies/react.png",
  },
  {
    name: "Next.js",
    icon: "/icons/technologies/nextjs.png",
  },
  {
    name: "Node.js",
    icon: "/icons/technologies/nodejs.png",
  },
  {
    name: "WordPress",
    icon: "/icons/technologies/wordpress.png",
  },
  {
    name: "PHP",
    icon: "/icons/technologies/php.png",
  },
  {
    name: "HTML5",
    icon: "/icons/technologies/html5.png",
  },
  {
    name: "CSS3",
    icon: "/icons/technologies/css3.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/technologies/tailwindcss.png",
  },
  {
    name: "GitHub",
    icon: "/icons/technologies/github.png",
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
    name: "MySQL",
    icon: "/icons/technologies/mysql.png",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/technologies/postgresql.png",
  },
  {
    name: "MongoDB",
    icon: "/icons/technologies/mongodb.png",
  },
];

/* =========================================================
   ICONS
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
    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 5 5" />
        </svg>
      );

    case "chart":
      return (
        <svg {...commonProps}>
          <path d="M4 19V5" />
          <path d="M4 19h17" />
          <path d="m7 15 4-4 3 2 5-6" />
        </svg>
      );

    case "target":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );

    case "content":
      return (
        <svg {...commonProps}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );

    case "social":
      return (
        <svg {...commonProps}>
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
        </svg>
      );

    case "ads":
      return (
        <svg {...commonProps}>
          <path d="M4 14V10a2 2 0 0 1 2-2h3l7-4v16l-7-4H6a2 2 0 0 1-2-2Z" />
          <path d="M19 9a4 4 0 0 1 0 6" />
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

    case "mobile":
      return (
        <svg {...commonProps}>
          <rect x="7" y="2.5" width="10" height="19" rx="2" />
          <path d="M10 5h4M11 18.5h2" />
        </svg>
      );

    case "analytics":
      return (
        <svg {...commonProps}>
          <path d="M4 19V5" />
          <path d="M4 19h17" />
          <rect x="7" y="13" width="2.5" height="3" />
          <rect x="11" y="10" width="2.5" height="6" />
          <rect x="15" y="7" width="2.5" height="9" />
        </svg>
      );

    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6z" />
          <path d="m8.5 12 2.2 2.2 4.8-5" />
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

    case "rocket":
      return (
        <svg {...commonProps}>
          <path d="M14 4c3-2 6-2 6-2s0 3-2 6l-5 5-4-4z" />
          <path d="m9 9-4 1-2 4 5-1M15 15l-1 5 4-2 1-4" />
          <circle cx="16.5" cy="7.5" r="1" />
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

    case "globe":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
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
   ARROW
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
   CHECK
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
   MAIN PAGE
========================================================= */

export default function SeoDigitalSolutionsPage() {
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
                SEO & Digital Solutions
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Get Found.{" "}
                <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                  Get More Customers.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                We build practical SEO and digital marketing strategies that
                help businesses improve search visibility, reach relevant
                audiences, generate enquiries, and build a stronger online
                presence.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Grow Your Online Presence
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
                  "Technical SEO",
                  "Local SEO",
                  "Content Strategy",
                  "Analytics & Reporting",
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
                  src="/images/services/seo-digital-solutions/seo-digital-solutions-hero.png"
                  alt="SEO and Digital Marketing Solutions"
                  className="h-auto w-full object-contain drop-shadow-[0_20px_45px_rgba(15,23,42,0.14)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MARQUEE
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
                Digital strategies designed around your business goals.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                A strong digital presence requires more than publishing
                content or adding keywords to a website. We combine technical
                optimization, useful content, search strategy, digital
                campaigns, analytics, and conversion-focused improvements.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Whether you are launching a new business, improving an
                existing website, targeting local customers, or expanding your
                online reach, we create a digital strategy around your audience
                and business requirements.
              </p>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-600"
                >
                  Get A Digital Strategy
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* SHOWCASE IMAGE */}

            <div className="relative flex justify-center">
              <div className="absolute h-[280px] w-[280px] rounded-full bg-slate-100 blur-[80px]" />

              <div className="relative w-full max-w-[540px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">
                <img
                  src="/images/services/seo-digital-solutions/seo-digital-solutions-showcase.png"
                  alt="SEO and Digital Marketing Showcase"
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
              Digital Marketing Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything you need to build your digital presence.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Select the services that match your business goals, target
              audience, website, and digital growth strategy.
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
              Digital marketing built on strong fundamentals.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We focus on technical quality, relevant search visibility,
              useful content, measurable performance, and continuous
              optimization.
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
                Why Digital Growth
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Turn your website into a stronger digital business channel.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Your website and digital channels should make it easier for
                potential customers to discover your business, understand your
                services, and take the next step.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Our approach combines search optimization, content, digital
                campaigns, analytics, and technical improvements so your online
                presence can be continuously improved over time.
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

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="relative">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Technology Stack
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              SEO, Web & Analytics Technologies
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              We combine modern web technologies, analytics platforms,
              content systems, databases, and development tools to support
              strong digital experiences.
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
              From digital audit to continuous optimization.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We use a structured process to understand your current digital
              presence, identify opportunities, implement improvements, and
              measure performance.
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
                src="/images/services/seo-digital-solutions/seo-digital-solutions-process.png"
                alt="SEO and Digital Marketing Process"
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
              SEO & Digital Solutions Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Common questions about SEO, digital marketing, local search,
              content, analytics, and online growth.
            </p>
          </div>

          <div className="mt-9 space-y-4">
            {[
              {
                q: "What is SEO?",
                a: "SEO, or Search Engine Optimization, is the process of improving a website's technical structure, content, relevance, and overall search visibility so that search engines can better understand and index its pages.",
              },
              {
                q: "How can SEO help my business?",
                a: "SEO can help potential customers discover relevant pages of your website through search engines. A complete strategy can include technical optimization, keyword research, content, local SEO, internal linking, performance improvements, and measurement.",
              },
              {
                q: "Do you provide Local SEO?",
                a: "Yes. Local SEO can include location-focused website optimization, local keyword targeting, business information consistency, and improvements to your local online presence.",
              },
              {
                q: "Do you provide social media and paid marketing?",
                a: "Yes. We can support social media strategy, digital campaigns, advertising planning, landing page optimization, audience targeting, and performance measurement depending on the project requirements.",
              },
              {
                q: "How do you measure digital marketing performance?",
                a: "Performance can be evaluated using relevant metrics such as organic traffic, search visibility, engagement, enquiries, conversions, campaign performance, website behavior, and other business-specific measurements.",
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