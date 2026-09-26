import Link from "next/link";
import Footer from "@/components/Footer";

/* =========================================================
   CAPABILITIES
========================================================= */

const capabilities = [
  { name: "Website Development", icon: "globe" },
  { name: "Web Application Development", icon: "code" },
  { name: "Android & iOS App Development", icon: "mobile" },
  { name: "Custom Software Development", icon: "terminal" },
  { name: "E-Commerce Development", icon: "shopping" },
  { name: "AI Integration & Automation", icon: "brain" },
  { name: "Cloud Solutions", icon: "cloud" },
  { name: "SEO & Digital Solutions", icon: "search" },
  { name: "Bug Fixing & Performance Optimization", icon: "bolt" },
  { name: "Website & Software Maintenance", icon: "tool" },
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
  { name: "Flutter", icon: "/icons/technologies/flutter.png" },
  { name: "Kotlin", icon: "/icons/technologies/kotlin.png" },
  { name: "Swift", icon: "/icons/technologies/swift.png" },
  { name: "MongoDB", icon: "/icons/technologies/mongodb.png" },
  { name: "MySQL", icon: "/icons/technologies/mysql.png" },
  { name: "PostgreSQL", icon: "/icons/technologies/postgresql.png" },
  { name: "Supabase", icon: "/icons/technologies/supabase.png" },
  { name: "AWS", icon: "/icons/technologies/amazonaws.png" },
  { name: "Google Cloud", icon: "/icons/technologies/google-cloud.png" },
  { name: "Firebase", icon: "/icons/technologies/firebase.png" },
  { name: "Android", icon: "/icons/technologies/android.png" },
  { name: "Angular", icon: "/icons/technologies/angular.png" },
  { name: "Apple", icon: "/icons/technologies/apple.png" },
  { name: "Bootstrap", icon: "/icons/technologies/bootstrap.png" },
  { name: "CSS3", icon: "/icons/technologies/css3.png" },
  { name: "Express", icon: "/icons/technologies/express.png" },
  { name: "GitHub", icon: "/icons/technologies/github.png" },
  { name: "HTML5", icon: "/icons/technologies/html5.png" },
  { name: "Shopify", icon: "/icons/technologies/shopify.png" },
  { name: "Tailwind CSS", icon: "/icons/technologies/tailwindcss.png" },
  { name: "Vue.js", icon: "/icons/technologies/vue.png" },
  { name: "WooCommerce", icon: "/icons/technologies/woocommerce.png" },
  { name: "WordPress", icon: "/icons/technologies/wordpress.png" },
];

/* =========================================================
   CORE VALUES
========================================================= */

const values = [
  {
    number: "01",
    title: "Business First",
    description:
      "We understand the business objective before writing code. Every technical decision is aligned with usability, performance, scalability and practical business requirements.",
    icon: "target",
  },
  {
    number: "02",
    title: "Clean Engineering",
    description:
      "We build modular, maintainable and production-ready software using modern development practices and technologies.",
    icon: "layers",
  },
  {
    number: "03",
    title: "Transparent Process",
    description:
      "Clear communication, defined milestones and regular project updates keep clients informed throughout the development lifecycle.",
    icon: "eye",
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description:
      "Our relationship does not end after deployment. We support maintenance, improvements, security updates and ongoing technical requirements.",
    icon: "handshake",
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  {
    title: "Startups & New Businesses",
    description:
      "Digital products, MVPs and business platforms designed to help new businesses establish a strong technology foundation.",
    icon: "startup",
  },
  {
    title: "Small & Medium Businesses",
    description:
      "Websites, e-commerce platforms, business applications and automation solutions that help teams operate more efficiently.",
    icon: "business",
  },
  {
    title: "Professional Services",
    description:
      "Digital experiences, portals, booking systems and custom applications for service-based businesses.",
    icon: "services",
  },
  {
    title: "E-Commerce & Retail",
    description:
      "Online stores, payment integrations, customer experiences and scalable commerce solutions.",
    icon: "commerce",
  },
  {
    title: "Education & Training",
    description:
      "Web platforms, learning systems, portals and digital tools for education and training businesses.",
    icon: "education",
  },
  {
    title: "Technology & Digital Products",
    description:
      "Custom applications, SaaS platforms, APIs and cloud-based systems for technology-focused businesses.",
    icon: "technology",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We first understand your business, users, goals, existing systems and technical requirements.",
    icon: "compass",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the project scope, information architecture, technology stack, priorities and development roadmap.",
    icon: "calendar",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create clean user experiences and interfaces focused on usability, accessibility and business objectives.",
    icon: "palette",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Our development approach focuses on clean code, scalable architecture, performance and reliable integrations.",
    icon: "cpu",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "After launch, we can continue with maintenance, optimization, security updates and new feature development.",
    icon: "rocket",
  },
];

/* =========================================================
   ENGINEERING PHILOSOPHY
========================================================= */

const philosophy = [
  {
    title: "Technology Should Solve Problems",
    description:
      "We do not choose technology simply because it is popular. The technology should support the actual business requirement.",
    icon: "wrench",
  },
  {
    title: "Simple Experiences Matter",
    description:
      "A powerful system is only useful when people can understand and use it easily. We keep interfaces practical and user-focused.",
    icon: "sparkles",
  },
  {
    title: "Build For The Future",
    description:
      "Projects should be structured so that future features, integrations and improvements can be added without unnecessary complexity.",
    icon: "shield",
  },
];

/* =========================================================
   WHY JHATECH
========================================================= */

const whyJhaTech = [
  {
    number: "01",
    title: "Business Understanding",
    description:
      "We focus on business goals, users, workflows and practical requirements before deciding how the software should be built.",
    icon: "bulb",
  },
  {
    number: "02",
    title: "Modern Technology",
    description:
      "We work with modern web, mobile, cloud and database technologies selected according to project requirements.",
    icon: "code",
  },
  {
    number: "03",
    title: "Maintainable Solutions",
    description:
      "We structure projects so future developers and teams can understand, maintain and extend the system.",
    icon: "cube",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "We can continue supporting your digital product after launch through maintenance, optimization and feature development.",
    icon: "support",
  },
];

/* =========================================================
   DYNAMIC SVG ICON COMPONENT
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
    case "startup":
      return (
        <svg {...commonProps}>
          <path d="M3 21h18" />
          <path d="M6 21V8l6-4 6 4v13" />
          <path d="M9 21v-5h6v5" />
          <path d="M9 10h.01" />
          <path d="M15 10h.01" />
          <path d="M9 13h.01" />
          <path d="M15 13h.01" />
        </svg>
      );
    case "business":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
          <path d="M10 12v2h4v-2" />
        </svg>
      );
    case "services":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3" />
          <path d="M12 19v3" />
          <path d="M2 12h3" />
          <path d="M19 12h3" />
          <path d="M4.9 4.9l2.1 2.1" />
          <path d="M17 17l2.1 2.1" />
          <path d="M19.1 4.9L17 7" />
          <path d="M7 17l-2.1 2.1" />
        </svg>
      );
    case "commerce":
    case "shopping":
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
          <path d="M2 3h3l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
        </svg>
      );
    case "education":
      return (
        <svg {...commonProps}>
          <path d="M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 2 9 2 12 0v-5" />
          <path d="M22 10v6" />
        </svg>
      );
    case "globe":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "code":
      return (
        <svg {...commonProps}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...commonProps}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case "terminal":
      return (
        <svg {...commonProps}>
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case "brain":
      return (
        <svg {...commonProps}>
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...commonProps}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...commonProps}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "tool":
    case "wrench":
      return (
        <svg {...commonProps}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "target":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "layers":
      return (
        <svg {...commonProps}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "eye":
      return (
        <svg {...commonProps}>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...commonProps}>
          <path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.6-6.6a2 2 0 0 0 0-2.8l-3.2-3.2a2 2 0 0 0-2.8 0L11 10.4" />
          <path d="m13 7-2-2a1 1 0 0 0-1.4 0L3 11.6a2 2 0 0 0 0 2.8l3.2 3.2a2 2 0 0 0 2.8 0L13 13.6" />
        </svg>
      );
    case "compass":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
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
    case "cpu":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...commonProps}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...commonProps}>
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "bulb":
      return (
        <svg {...commonProps}>
          <line x1="9" y1="18" x2="15" y2="18" />
          <line x1="10" y1="22" x2="14" y2="22" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
        </svg>
      );
    case "cube":
      return (
        <svg {...commonProps}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "technology":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="m8 10 2.5 2L8 14" />
          <path d="M13 14h3" />
        </svg>
      );
    case "support":
      return (
        <svg {...commonProps}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
  }
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
    <div className="group w-[150px] shrink-0 sm:w-[170px] lg:w-[180px]">
      <div className="relative flex h-[150px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-[0_18px_45px_rgba(99,102,241,0.15)]">
        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-100 opacity-0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2 group-hover:border-violet-200 group-hover:bg-white group-hover:shadow-md">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-10 w-10 object-contain transition-all duration-500 ease-out group-hover:scale-125"
            loading="lazy"
          />
        </div>

        <h3 className="relative mt-4 text-center text-xs font-bold text-slate-700 transition-colors duration-300 group-hover:text-violet-600">
          {technology.name}
        </h3>

        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-500 group-hover:w-1/2" />
      </div>
    </div>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  const middle = Math.ceil(technologyIcons.length / 2);

  const technologyRowOne = technologyIcons.slice(0, middle);
  const technologyRowTwo = technologyIcons.slice(middle);

  return (
    <main className="overflow-hidden bg-white font-sans text-slate-900 antialiased">
      {/* Self-contained CSS for Infinite Slider */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scroll-left 35s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scroll-right 35s linear infinite;
        }
        .slider-container:hover .animate-scroll-left,
        .slider-container:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-white pb-16 pt-12 sm:pb-20 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-180px] top-[-160px] h-[500px] w-[500px] rounded-full bg-slate-100/80 blur-[130px]" />
          <div className="absolute right-[-150px] top-[10%] h-[450px] w-[450px] rounded-full bg-blue-50/70 blur-[130px]" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-violet-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-600" />
              </span>
              About JhaTech Solution
            </div>

            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[52px]">
              We Build Digital Products That Turn{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Ideas Into Business Value.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base">
              JhaTech Solution is a software development company focused on
              building modern websites, mobile applications, custom software,
              e-commerce platforms, AI solutions and scalable digital systems.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Start Your Project
                <span>→</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-xs font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600 hover:shadow-md"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-[280px] w-[280px] rounded-full bg-slate-100 blur-[90px]" />
            <div className="relative w-full max-w-[560px]">
              <img
                src="/images/about/about-hero.png"
                alt="JhaTech Solution software development team"
                className="h-auto w-full object-contain drop-shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Who We Are
            </p>

            <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              A technology partner for businesses ready to build, improve and
              scale.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              JhaTech Solution helps startups, businesses and organizations
              transform ideas into reliable digital products. From a business
              website to a complete software platform, we combine design,
              development and technology strategy under one roof.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Our approach begins with understanding the actual business
              requirement. We then select the appropriate technology,
              architecture and development approach for the project.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Whether you need a new product, an existing system upgraded, a
              mobile application developed or ongoing technical support, our
              objective is to deliver software that is practical, scalable and
              easy to maintain.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-xs font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-violet-600"
              >
                Talk About Your Project →
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute h-[300px] w-[300px] rounded-full bg-slate-100 blur-[90px]" />
            <div className="relative w-full max-w-[560px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">
              <img
                 src="/images/about/about-company.png"
                alt="JhaTech Solution digital engineering"
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING PHILOSOPHY
      ====================================================== */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Our Engineering Philosophy
            </p>

            <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              We believe good technology should make business simpler.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              Software should not add unnecessary complexity. Our approach is
              focused on building useful digital products that are easy to use,
              maintain and improve as business requirements change.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {philosophy.map((item, index) => (
              <article
                key={item.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    <AppIcon type={item.icon} className="h-5 w-5" />
                  </div>
                  <span className="text-lg font-black text-violet-200 group-hover:text-violet-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950 group-hover:text-violet-600 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ====================================================== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              What We Do
            </p>

            <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Complete digital solutions for modern businesses.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              We provide end-to-end technology services covering product
              development, digital transformation, automation and ongoing
              technical support.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={item.name}
                className="group rounded-2xl border border-slate-200 bg-slate-50/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-white hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    <AppIcon type={item.icon} className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase text-violet-400 group-hover:text-violet-600">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-violet-600">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY JHATECH
      ====================================================== */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                Why JhaTech Solution
              </p>

              <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                A practical approach to technology and digital development.
              </h2>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                Every project has different requirements. Instead of forcing
                every business into the same solution, we focus on understanding
                the problem and building technology around the actual need.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5"
              >
                Discuss Your Requirements →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyJhaTech.map((item) => (
                <div
                  key={item.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                      <AppIcon type={item.icon} className="h-5 w-5" />
                    </div>
                    <span className="text-2xl font-black text-violet-100 group-hover:text-violet-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-slate-950 group-hover:text-violet-600 transition-colors">
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
      </section>

      {/* =====================================================
          MISSION / VISION
      ====================================================== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                  Our Mission
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                  <AppIcon type="target" className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                Make technology useful, reliable and accessible.
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Our mission is to help businesses use technology to solve real
                operational problems, reach customers more effectively and
                create better digital experiences.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
                  Our Vision
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <AppIcon type="sparkles" className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                Build technology that grows with the business.
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                We aim to create digital products that remain useful beyond the
                initial launch—products that can evolve with changing customers,
                markets and business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ====================================================== */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Our Core Values
            </p>

            <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Principles that guide every project.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Good software development is not only about writing code. It
              requires clear communication, thoughtful architecture and a
              disciplined delivery process.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                    <AppIcon type={value.icon} className="h-5 w-5" />
                  </div>
                  <span className="text-xl font-black text-violet-200 group-hover:text-violet-400">
                    {value.number}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-950 group-hover:text-violet-600 transition-colors">
                  {value.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK (PROCESS)
      ====================================================== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              How We Work
            </p>

            <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              From business idea to working digital product.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              Our development approach keeps the project structured,
              transparent and focused on the actual business requirement.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-slate-200 lg:block" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
                >
                  <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-violet-50 text-violet-600 shadow-sm transition group-hover:bg-violet-600 group-hover:text-white">
                    <AppIcon type={step.icon} className="h-6 w-6" />
                  </div>

                  <span className="mt-3 block text-xs font-black uppercase tracking-wider text-violet-500">
                    Step {step.number}
                  </span>

                  <h3 className="mt-1 text-base font-bold text-slate-950 group-hover:text-violet-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Industries & Business Types
            </p>

            <h2 className="mt-2.5 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Technology solutions for different business needs.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              Our solutions can be adapted to different business models,
              operational requirements and digital workflows.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-violet-300 hover:shadow-[0_18px_45px_rgba(99,102,241,0.12)]"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-violet-100 opacity-0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-violet-600 group-hover:text-white">
                    <AppIcon type={industry.icon} className="h-6 w-6" />
                  </div>

                  <span className="text-xs font-black text-violet-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-5 text-base font-bold text-slate-950 transition-colors duration-300 group-hover:text-violet-600">
                  {industry.title}
                </h3>

                <p className="relative mt-2 text-[13px] leading-6 text-slate-600">
                  {industry.description}
                </p>

                <div className="relative mt-5 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK (TWO ROW CONTINUOUS SLIDER)
      ====================================================== */}
      <section className="slider-container relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-180px] top-20 h-[350px] w-[350px] rounded-full bg-violet-50/70 blur-[100px]" />
          <div className="absolute right-[-180px] bottom-10 h-[350px] w-[350px] rounded-full bg-blue-50/70 blur-[100px]" />
        </div>

        {/* Gradient edge overlays for smooth infinite blend */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="relative">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Technology Stack
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Technologies We Work With
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              We use modern technologies and development tools to build fast,
              scalable, secure and maintainable digital products.
            </p>
          </div>

          {/* ROW 1 (Left Sliding) */}
          <div className="relative mt-12 w-full overflow-hidden">
            <div className="animate-scroll-left flex gap-4 px-2 sm:gap-5">
              {[...technologyRowOne, ...technologyRowOne].map((technology, index) => (
                <TechnologyCard
                  key={`row-one-${technology.name}-${index}`}
                  technology={technology}
                />
              ))}
            </div>
          </div>

          {/* ROW 2 (Right Sliding) */}
          <div className="relative mt-5 w-full overflow-hidden">
            <div className="animate-scroll-right flex gap-4 px-2 sm:gap-5">
              {[...technologyRowTwo, ...technologyRowTwo].map((technology, index) => (
                <TechnologyCard
                  key={`row-two-${technology.name}-${index}`}
                  technology={technology}
                />
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-[11px] font-medium text-slate-400">
            Web • Mobile • Cloud • Database • E-Commerce • Digital Solutions
          </p>
        </div>
      </section>

      {/* =====================================================
          LONG TERM PARTNERSHIP
      ====================================================== */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
            Beyond Development
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Technology is an ongoing journey, not a one-time delivery.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Businesses change, customers change and technology changes. After
            launch, digital products often need improvements, security updates,
            performance optimization, integrations and new features. We can
            continue working with businesses as their technology requirements
            evolve.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Discuss Your Next Project
              <span>→</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600"
            >
              View Our Services
            </Link>
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