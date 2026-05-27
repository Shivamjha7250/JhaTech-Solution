import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Image from "next/image";
import Link from "next/link";

import {
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaSearchDollar,
  FaRobot,
  FaArrowRight,
  FaWhatsapp,
  FaRocket,
  FaGlobe,
  FaCode,
  FaShoppingCart,
} from "react-icons/fa";

/* SEO META DATA */
export const metadata = {
  title:
    "Projects | JhaTech Solution - Website & App Development Projects",

  description:
    "Explore professional software engineering, website development, ecommerce systems, AI automation tools, cloud infrastructure, mobile applications, SEO optimization systems, and enterprise digital projects developed by JhaTech Solution across Mumbai Maharashtra, Delhi, Bihar, Punjab, India, USA, and Canada.",

  keywords: [
    "JhaTech Projects",
    "Website Development Projects",
    "Mobile App Development",
    "AI Projects",
    "SEO Systems",
    "Cloud Infrastructure",
    "Ecommerce Solutions",
    "Software Development",
    "Business Website Projects",
    "Custom Software Development",
    "React Projects",
    "Next.js Projects",
    "Backend Systems",
    "Node.js Projects",
    "MongoDB Projects",
    "Digital Solutions India",
    "Mumbai Software Company",
    "Delhi Web Developer",
    "Website Development USA",
    "Website Development Canada",
    "Cloud Dashboard",
    "Enterprise Software",
    "AI Automation Platform",
  ],

  authors: [
    {
      name: "Shivam Kumar Jha",
      url: "https://jhatechsolution.vercel.app",
    },
  ],

  creator:
    "Shivam Kumar Jha",

  publisher:
    "JhaTech Solution",

  category:
    "Technology",

  metadataBase:
    new URL("https://jhatechsolution.vercel.app"),

  alternates: {
    canonical:
      "https://jhatechsolution.vercel.app/projects",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "Projects | JhaTech Solution",

    description:
      "Professional software engineering, mobile apps, ecommerce systems, AI tools, backend systems, and cloud infrastructure projects.",

    url:
      "https://jhatechsolution.vercel.app/projects",

    siteName:
      "JhaTech Solution",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "JhaTech Solution Projects",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "JhaTech Solution Projects",

    description:
      "Explore premium software engineering and website development projects.",

    images: ["/logo.png"],

    creator:
      "@jhatechsolution",
  },

  verification: {
    google:
      "google-site-verification-code",
  },

  other: {
    founder:
      "Shivam Kumar Jha",

    ceo:
      "Shivam Kumar Jha",

    company:
      "JhaTech Solution",

    headquarters:
      "Mumbai, Maharashtra, India",

    serviceAreas:
      "Mumbai, Maharashtra, Delhi, Bihar, Punjab, India, USA, Canada",

    businessType:
      "Website Development Company",

    supportEmail:
      "back2tocampus@gmail.com",
  },
};

export default function ProjectsPage() {

 const projects = [

  {
    id: 1,
    title: "Enterprise Backend System",
    scope: "Backend Architecture",
    icon: <FaServer />,
    image: "/about1.jpg",
    specs: ["Node.js", "MongoDB", "JWT Auth"],
    details:
      "Scalable backend system with secure authentication, API management, and enterprise-level database architecture.",
  },

  {
    id: 2,
    title: "Business Analytics Dashboard",
    scope: "Analytics Platform",
    icon: <FaDatabase />,
    image: "/about2.jpg",
    specs: ["Next.js", "Charts", "PostgreSQL"],
    details:
      "Modern analytics dashboard with advanced reports and real-time business insights.",
  },

  {
    id: 3,
    title: "Cross Platform Mobile App",
    scope: "Mobile Application",
    icon: <FaMobileAlt />,
    image: "/about3.jpg",
    specs: ["React Native", "Firebase", "Maps API"],
    details:
      "Cross-platform mobile application with live tracking and scalable infrastructure.",
  },

  {
    id: 4,
    title: "Cloud Infrastructure Platform",
    scope: "Cloud Services",
    icon: <FaCloud />,
    image: "/about1.jpg",
    specs: ["AWS", "Docker", "Cloudflare"],
    details:
      "Cloud infrastructure platform with deployment automation and secure hosting.",
  },

  {
    id: 5,
    title: "SEO Optimization Engine",
    scope: "SEO System",
    icon: <FaSearchDollar />,
    image: "/about2.jpg",
    specs: ["SEO Audit", "Performance", "Analytics"],
    details:
      "Advanced SEO optimization system for ranking improvement and visibility growth.",
  },

  {
    id: 6,
    title: "AI Automation Platform",
    scope: "AI Solutions",
    icon: <FaRobot />,
    image: "/about3.jpg",
    specs: ["OpenAI", "Python", "Automation"],
    details:
      "AI-based automation platform for workflow optimization and smart systems.",
  },

  {
    id: 7,
    title: "Modern Ecommerce Store",
    scope: "Ecommerce",
    icon: <FaShoppingCart />,
    image: "/about1.jpg",
    specs: ["Stripe", "Next.js", "MongoDB"],
    details:
      "Premium ecommerce platform with payment integration and product management.",
  },

  {
    id: 8,
    title: "Admin Management Dashboard",
    scope: "Admin Panel",
    icon: <FaLaptopCode />,
    image: "/about2.jpg",
    specs: ["Dashboard", "Charts", "Admin"],
    details:
      "Modern admin dashboard with analytics and secure management systems.",
  },

  {
    id: 9,
    title: "Custom CRM Platform",
    scope: "CRM Software",
    icon: <FaCode />,
    image: "/about3.jpg",
    specs: ["CRM", "Business", "Automation"],
    details:
      "Business CRM platform with workflow automation and client management.",
  },

  {
    id: 10,
    title: "Website Performance Optimizer",
    scope: "Bug Fixing",
    icon: <FaRocket />,
    image: "/about1.jpg",
    specs: ["Optimization", "Speed", "SEO"],
    details:
      "Performance optimization platform for websites and enterprise systems.",
  },

  {
    id: 11,
    title: "Business Portfolio Website",
    scope: "Portfolio Design",
    icon: <FaGlobe />,
    image: "/about2.jpg",
    specs: ["Responsive", "Portfolio", "UI UX"],
    details:
      "Modern portfolio website with premium UI and responsive layouts.",
  },

  {
    id: 12,
    title: "Secure Authentication System",
    scope: "Cyber Security",
    icon: <FaShieldAlt />,
    image: "/about3.jpg",
    specs: ["JWT", "OAuth", "Security"],
    details:
      "Secure authentication infrastructure with protected user systems.",
  },

  {
    id: 13,
    title: "Digital Marketing Dashboard",
    scope: "Marketing Platform",
    icon: <FaChartLine />,
    image: "/about1.jpg",
    specs: ["SEO", "Analytics", "Reports"],
    details:
      "Digital marketing platform with analytics and campaign management.",
  },

  {
    id: 14,
    title: "Real Estate Platform",
    scope: "Property System",
    icon: <FaGlobe />,
    image: "/about2.jpg",
    specs: ["Property", "Maps", "Listings"],
    details:
      "Modern real estate platform with listings and smart search systems.",
  },

  {
    id: 15,
    title: "Food Delivery Application",
    scope: "Delivery App",
    icon: <FaMobileAlt />,
    image: "/about3.jpg",
    specs: ["Delivery", "Tracking", "Orders"],
    details:
      "Real-time food delivery platform with order tracking and payments.",
  },

  {
    id: 16,
    title: "Cloud Storage System",
    scope: "Storage Platform",
    icon: <FaCloud />,
    image: "/about1.jpg",
    specs: ["Cloud", "Storage", "Security"],
    details:
      "Secure cloud storage system with scalable infrastructure and backups.",
  },

  {
    id: 17,
    title: "AI Chat Support System",
    scope: "AI Assistant",
    icon: <FaRobot />,
    image: "/about2.jpg",
    specs: ["AI", "Chatbot", "Automation"],
    details:
      "AI-powered customer support assistant with smart automation features.",
  },

];

  return (

    <main className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-36 pb-20 px-6 border-b border-zinc-900 relative overflow-hidden">

        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">

          <p className="text-blue-500 uppercase tracking-[4px] text-[11px] font-bold mb-4">

            JHATECH SOLUTION PROJECTS

          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">

            Professional Digital
            <span className="text-blue-500">
              {" "}Solutions
            </span>

          </h1>

          <p className="text-zinc-400 text-sm md:text-base leading-8 mt-6 max-w-3xl mx-auto">

            Explore modern software engineering,
            website development,
            mobile applications,
            ecommerce systems,
            AI automation,
            backend architecture,
            cloud infrastructure,
            and scalable digital projects developed by JhaTech Solution.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Link
              href="/services"
              className="
                bg-blue-600
                hover:bg-blue-700
                transition
                px-8
                py-3.5
                rounded-full
                text-sm
                font-semibold
                shadow-lg
                shadow-blue-500/20
                inline-flex
                items-center
                gap-3
              "
            >

              Explore Services

              <FaArrowRight />

            </Link>

            <Link
              href="/contact"
              className="
                border
                border-zinc-700
                hover:border-blue-500
                hover:text-blue-500
                transition
                px-8
                py-3.5
                rounded-full
                text-sm
                font-semibold
              "
            >
              Start Project
            </Link>


          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="px-6 py-16 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 text-center">

            <div className="text-blue-500 text-3xl flex justify-center mb-4">
              <FaRocket />
            </div>

            <h2 className="text-4xl font-black text-blue-500">
              50+
            </h2>

            <p className="text-zinc-400 text-sm mt-3">
              Completed Software Projects
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 text-center">

            <div className="text-green-500 text-3xl flex justify-center mb-4">
              <FaShieldAlt />
            </div>

            <h2 className="text-4xl font-black text-green-500">
              100%
            </h2>

            <p className="text-zinc-400 text-sm mt-3">
              Secure & Scalable Solutions
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 text-center">

            <div className="text-red-500 text-3xl flex justify-center mb-4">
              <FaGlobe />
            </div>

            <h2 className="text-4xl font-black text-red-500">
              Global
            </h2>

            <p className="text-zinc-400 text-sm mt-3">
              Services Across India USA Canada
            </p>

          </div>

        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto space-y-10">

          {
            projects.map((project, index) => (

              <div
                key={project.id}
                className="
                  bg-zinc-950
                  border
                  border-zinc-900
                  rounded-3xl
                  overflow-hidden
                  grid
                  lg:grid-cols-2
                  items-center
                  hover:border-blue-500/30
                  transition
                "
              >

                {/* IMAGE */}
                <div
                  className={`
                    relative
                    h-[320px]
                    lg:h-full
                    min-h-[320px]
                    overflow-hidden
                    ${index % 2 !== 0 ? "lg:order-2" : ""}
                  `}
                >

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-12">

                  <div className="flex items-center gap-2 text-blue-500 text-xs uppercase tracking-wide font-semibold mb-4">

                    {project.icon}

                    {project.scope}

                  </div>

                  <h2 className="text-2xl md:text-3xl font-black leading-tight mb-5">

                    {project.title}

                  </h2>

                  <p className="text-zinc-400 text-sm leading-7 mb-7">

                    {project.details}

                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">

                    {
                      project.specs.map((spec, idx) => (

                        <span
                          key={idx}
                          className="
                            bg-zinc-900
                            border
                            border-zinc-800
                            text-zinc-300
                            text-xs
                            px-3
                            py-2
                            rounded-lg
                          "
                        >

                          {spec}

                        </span>

                      ))
                    }

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto bg-zinc-950 border border-zinc-900 rounded-[32px] overflow-hidden grid lg:grid-cols-2 items-center">

          {/* LEFT */}
          <div className="p-8 md:p-14">

            <p className="text-blue-500 uppercase tracking-[4px] text-[11px] font-bold mb-3">

              START YOUR PROJECT

            </p>

            <h2 className="text-3xl md:text-5xl font-black leading-tight">

              Let’s Build Your
              <span className="text-blue-500">
                {" "}Next Platform
              </span>

            </h2>

            <p className="text-zinc-400 text-sm md:text-base leading-8 mt-6 max-w-xl">

              We create premium websites,
              mobile applications,
              ecommerce systems,
              cloud platforms,
              AI tools,
              SEO systems,
              and scalable digital products
              for startups and businesses worldwide.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/contact"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  px-8
                  py-3.5
                  rounded-full
                  text-sm
                  font-semibold
                  shadow-lg
                  shadow-blue-500/20
                  inline-flex
                  items-center
                  gap-3
                "
              >

                Contact Us

                <FaArrowRight />

              </Link>

              <Link
                href="/portfolio"
                className="
                  border
                  border-zinc-700
                  hover:border-blue-500
                  hover:text-blue-500
                  transition
                  px-8
                  py-3.5
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                View Portfolio
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[320px] lg:h-full min-h-[320px] overflow-hidden">

            <Image
              src="/about2.jpg"
              alt="Software Development Team"
              fill
              className="object-cover opacity-90"
              sizes="(max-width:1024px) 100vw, 50vw"
            />

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}