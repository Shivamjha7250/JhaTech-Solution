"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Custom iOS App Development",
    description:
      "Custom iOS applications designed around your business goals, users, workflows and required functionality.",
    icon: "apple",
  },
  {
    title: "Business iOS Apps",
    description:
      "Business-focused iPhone and iPad applications for customers, employees, services, operations and internal workflows.",
    icon: "briefcase",
  },
  {
    title: "E-Commerce iOS Apps",
    description:
      "Mobile shopping applications with product browsing, customer accounts, cart, checkout and order functionality.",
    icon: "shopping",
  },
  {
    title: "Customer & Service Apps",
    description:
      "Customer applications for bookings, enquiries, services, communication, accounts and personalized experiences.",
    icon: "users",
  },
  {
    title: "API & Backend Integration",
    description:
      "Connect iOS applications with APIs, databases, authentication systems and required third-party services.",
    icon: "api",
  },
  {
    title: "iOS App Maintenance",
    description:
      "Maintain and improve existing iOS applications with bug fixes, UI improvements, updates and new features.",
    icon: "refresh",
  },
];

/* =========================================================
   TECHNOLOGY STACK
========================================================= */

const technologyIcons = [
  { name: "Apple", icon: "/icons/technologies/apple.png" },
  { name: "Swift", icon: "/icons/technologies/swift.png" },
  { name: "React", icon: "/icons/technologies/react.png" },
  { name: "Flutter", icon: "/icons/technologies/Flutter.png" },
  { name: "JavaScript", icon: "/icons/technologies/javascript.png" },
  { name: "TypeScript", icon: "/icons/technologies/typescript.png" },
  { name: "Node.js", icon: "/icons/technologies/nodejs.png" },
  { name: "Express", icon: "/icons/technologies/express.png" },
  { name: "Firebase", icon: "/icons/technologies/firebase.png" },
  { name: "Supabase", icon: "/icons/technologies/supabase.png" },
  { name: "MongoDB", icon: "/icons/technologies/mongodb.png" },
  { name: "MySQL", icon: "/icons/technologies/mysql.png" },
  { name: "PostgreSQL", icon: "/icons/technologies/postgresql.png" },
  { name: "Python", icon: "/icons/technologies/python.png" },
  { name: "PHP", icon: "/icons/technologies/php.png" },
  { name: "Java", icon: "/icons/technologies/java.png" },
  { name: "AWS", icon: "/icons/technologies/amazonaws.png" },
  { name: "Google Cloud", icon: "/icons/technologies/google-cloud.png" },
  { name: "GitHub", icon: "/icons/technologies/github.png" },
  { name: "HTML5", icon: "/icons/technologies/html5.png" },
  { name: "CSS3", icon: "/icons/technologies/css3.png" },
  { name: "Tailwind CSS", icon: "/icons/technologies/tailwindcss.png" },
  { name: "Bootstrap", icon: "/icons/technologies/bootstrap.png" },
  { name: "Android", icon: "/icons/technologies/android.png" },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, target users, application goals, required features and project requirements.",
    icon: "search",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We define the application structure, user flows, screens, APIs, database requirements and technical approach.",
    icon: "calendar",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "We design clean mobile interfaces with intuitive navigation, clear layouts and a consistent user experience.",
    icon: "palette",
  },
  {
    number: "04",
    title: "Development",
    description:
      "The iOS application is developed using suitable mobile, backend, database and API technologies.",
    icon: "code",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "The application is tested across supported devices, screen sizes, workflows, forms and important functionality.",
    icon: "checkCircle",
  },
  {
    number: "06",
    title: "Launch & Support",
    description:
      "After final testing, the application can be prepared for release with ongoing maintenance and improvements.",
    icon: "rocket",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  "Custom functionality based on your business requirements",
  "Responsive mobile-first user interface",
  "iPhone and iPad application experience",
  "Secure authentication and user access",
  "API and database integration",
  "Push notification functionality",
  "Payment and third-party service integration",
  "Scalable application architecture",
  "Cloud and backend integration",
  "Ongoing maintenance and feature development",
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
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (type) {
    case "apple":
      return (
        <svg {...common}>
          <path d="M15.5 7.5c-.8 0-1.7.5-2.2.5-.6 0-1.4-.5-2.3-.5-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.8 1.3 10.2.9 1.2 1.9 2.5 3.3 2.5 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.4 0 2.3-1.2 3.2-2.5.8-1.1 1.1-2.2 1.4-3.3-3.5-1.5-4-6.5-.5-8.4-.9-1.3-2.4-2-3.9-2Z" />
          <path d="M15 4c.7-.9 1.2-2.1 1.1-3.3-1.1.1-2.4.8-3.1 1.7-.7.8-1.2 2-1.1 3.1 1.2.1 2.4-.6 3.1-1.5Z" />
        </svg>
      );

    case "briefcase":
      return (
        <svg {...common}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );

    case "shopping":
      return (
        <svg {...common}>
          <circle cx="9" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
          <path d="M2 3h3l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
        </svg>
      );

    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );

    case "api":
      return (
        <svg {...common}>
          <path d="M8 9 4 12l4 3" />
          <path d="m16 9 4 3-4 3" />
          <path d="m14 5-4 14" />
        </svg>
      );

    case "refresh":
      return (
        <svg {...common}>
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.5 9a9 9 0 0 1 14.8-3.4L23 10M1 14l4.6 4.4A9 9 0 0 0 20.5 15" />
        </svg>
      );

    case "responsive":
      return (
        <svg {...common}>
          <rect x="2" y="3" width="14" height="12" rx="1.5" />
          <path d="M6 19h6" />
          <path d="M9 15v4" />
          <rect x="16" y="8" width="6" height="10" rx="1" />
        </svg>
      );

    case "security":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "bell":
      return (
        <svg {...common}>
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        </svg>
      );

    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );

    case "code":
      return (
        <svg {...common}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );

    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );

    case "palette":
      return (
        <svg {...common}>
          <circle cx="13.5" cy="6.5" r=".5" />
          <circle cx="17.5" cy="10.5" r=".5" />
          <circle cx="8.5" cy="7.5" r=".5" />
          <circle cx="6.5" cy="12.5" r=".5" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5.5-4.5-10-10-10Z" />
        </svg>
      );

    case "checkCircle":
      return (
        <svg {...common}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );

    case "rocket":
      return (
        <svg {...common}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
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
   MAIN COMPONENT
========================================================= */

export default function IOSAppDevelopmentPage() {
  const middle = Math.ceil(technologyIcons.length / 2);

  const technologyRowOne = technologyIcons.slice(0, middle);
  const technologyRowTwo = technologyIcons.slice(middle);

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-900 antialiased">

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes iosMarquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .ios-marquee {
          animation: iosMarquee 26s linear infinite;
        }

        .ios-marquee:hover {
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
                iOS App Development
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
                iOS Apps Built for{" "}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Modern Businesses.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                We develop custom iOS applications that help businesses
                connect with customers, deliver services, manage operations
                and create polished mobile experiences for iPhone and iPad.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Build Your iOS App
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
                  "Custom iOS Apps",
                  "Modern UI/UX",
                  "API Integration",
                  "Scalable Architecture",
                ].map((item) => (

                  <span
                    key={item}
                    className="flex items-center gap-2"
                  >

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
                  src="/images/services/ios-app-development/ios-app-hero.png"
                  alt="iOS App Development"
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

        <div className="w-max ios-marquee flex items-center whitespace-nowrap">

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
                Mobile experiences designed around your business.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                A well-planned iOS application can give customers and teams
                convenient access to your services, products, information and
                business functionality.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                From customer applications and e-commerce apps to internal
                business tools, we build mobile experiences around the actual
                requirements of your project.
              </p>

              <div className="mt-7">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-600"
                >
                  Start A Conversation →
                </Link>

              </div>

            </div>

            {/* IMAGE */}

            <div className="relative flex justify-center">

              <div className="absolute h-[280px] w-[280px] rounded-full bg-slate-100 blur-[80px]" />

              <div className="relative w-full max-w-[540px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">

                <img
                  src="/images/services/ios-app-development/ios-app-showcase.png"
                  alt="iOS Application Development Showcase"
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
              iOS App Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              iOS solutions for different business requirements.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              From customer-facing applications to business tools and
              e-commerce apps, choose the development approach that fits your
              project.
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

          <div className="mb-10 max-w-2xl">

            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              App Features
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Functionality built for Apple users.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              iOS applications can combine mobile interfaces, backend
              services, databases, authentication and third-party
              integrations into one connected platform.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "responsive",
                title: "Mobile Experience",
                text: "Interfaces designed for mobile users with clear navigation and touch interactions.",
              },
              {
                icon: "security",
                title: "Secure Access",
                text: "Authentication and user access controls can be implemented according to requirements.",
              },
              {
                icon: "bell",
                title: "Notifications",
                text: "Push notification functionality can keep users connected with your application.",
              },
              {
                icon: "api",
                title: "API Integration",
                text: "Connect your iOS application with backend systems and external services.",
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
          BUSINESS BENEFITS
      ====================================================== */}

      <section className="bg-slate-50 py-14 lg:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

            <div>

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                Business Benefits
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Put your business services in your customers' hands.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                A mobile application can provide customers and teams with
                convenient access to services, information and business
                functionality wherever they need it.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-600"
              >
                Discuss Your Requirements
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

          <div className="absolute right-[-150px] bottom-10 h-[300px] w-[300px] rounded-full bg-blue-50/70 blur-[90px]" />

        </div>

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="relative">

          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">

            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Technology Stack
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Technologies for modern iOS applications.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              The technology stack is selected according to your application
              requirements, backend architecture, integrations, expected
              users and project scope.
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

          <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">

            {/* PROCESS IMAGE */}

            <div className="relative order-2 flex justify-center lg:order-1">

              <div className="absolute h-[280px] w-[280px] rounded-full bg-violet-100 blur-[90px]" />

              <div className="relative w-full max-w-[480px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">

                <img
                  src="/images/services/ios-app-development/ios-app-process.png"
                  alt="iOS App Development Process"
                  className="h-auto w-full rounded-[20px] object-cover"
                />

              </div>

            </div>

            {/* PROCESS CONTENT */}

            <div className="order-1 lg:order-2">

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                Our Process
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                From app idea to a working iOS application.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                We follow a structured process to keep business requirements,
                mobile UX, functionality and technical development aligned
                throughout the project.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {process.map((item) => (

                  <div
                    key={item.number}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
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

                    <h3 className="mt-4 text-base font-bold text-slate-950 transition-colors group-hover:text-violet-600">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                ))}

              </div>

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
              iOS App Development Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Common questions about iOS application development,
              technologies, functionality and support.
            </p>

          </div>

          <div className="mt-9 space-y-4">

            {[
              {
                q: "Can you build a custom iOS application?",
                a: "Yes. Custom iOS applications can be developed around your business model, target users, required features, workflows and technical requirements.",
              },
              {
                q: "Can you develop applications for iPhone and iPad?",
                a: "The application can be planned according to the supported Apple devices and project requirements, including suitable responsive layouts and user experiences.",
              },
              {
                q: "Which technologies can be used for iOS development?",
                a: "Depending on the project, technologies can include Swift, Flutter, React-based technologies, Firebase, Node.js, databases and cloud platforms.",
              },
              {
                q: "Can the iOS app connect with a website or backend?",
                a: "Yes. iOS applications can connect with backend APIs, databases, websites and other business systems according to the application architecture.",
              },
              {
                q: "Can you integrate Firebase?",
                a: "Firebase can be used for supported application requirements such as authentication, notifications, application services and other Firebase functionality.",
              },
              {
                q: "Can you integrate payment systems?",
                a: "Payment functionality can be integrated according to the selected payment provider, technical requirements and project scope.",
              },
              {
                q: "Can you prepare the application for App Store release?",
                a: "The application can be prepared for release according to the required Apple distribution process and the project's technical requirements.",
              },
              {
                q: "Can you maintain an existing iOS application?",
                a: "Yes. Existing applications can be supported with bug fixing, UI improvements, feature development, updates and ongoing maintenance.",
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