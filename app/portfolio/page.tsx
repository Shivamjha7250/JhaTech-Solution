import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Image from "next/image";
import Link from "next/link";

import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaBrain,
  FaShoppingCart,
  FaServer,
  FaCloud,
  FaArrowRight,
  FaWhatsapp,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaBug,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";

/* SEO META DATA */
export const metadata = {
  title:
    "Portfolio | JhaTech Solution - Website & App Development Projects",

  description:
    "Explore the professional portfolio of JhaTech Solution including website development, ecommerce systems, mobile applications, SEO optimization, AI tools, backend systems, and scalable custom software projects across Mumbai Maharashtra, Delhi, Bihar, Punjab, India, USA, and Canada.",

  keywords: [
    "JhaTech Solution Portfolio",
    "Website Development Portfolio",
    "App Development Projects",
    "SEO Projects",
    "Ecommerce Development",
    "AI Projects",
    "Custom Software Development",
    "Next.js Projects",
    "React Projects",
    "Business Website Development",
    "Portfolio Website",
    "Digital Agency Portfolio",
    "Mumbai Website Development",
    "Delhi Web Developer",
    "Bihar Web Design",
    "Punjab Website Development",
    "Software Company India",
    "Website Development USA",
    "Website Development Canada",
    "Modern UI UX Projects",
    "Backend Development Projects",
    "Cloud Dashboard",
    "Mobile App UI",
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
      "https://jhatechsolution.vercel.app/portfolio",
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
      "Portfolio | JhaTech Solution",

    description:
      "Professional website development, ecommerce systems, mobile applications, SEO optimization, AI-powered tools, and scalable digital solutions.",

    url:
      "https://jhatechsolution.vercel.app/portfolio",

    siteName:
      "JhaTech Solution",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "JhaTech Solution Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "JhaTech Solution Portfolio",

    description:
      "Explore modern website development, ecommerce systems, SEO projects, and digital solutions.",

    images: ["/logo.png"],

    creator:
      "@jhatechsolution",
  },

 verification: {
  google: "W-9DUfQlQSlAGoBP_QNvPh5vLw-pnr6_FiNmz_yXEOQ",
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
      "info.jhatechsolution@gmail.com",
  },
};

export default function PortfolioPage() {

 const projects = [

  {
    id: 1,
    category: "Web Development",
    title: "Business Website Platform",
    icon: <FaGlobe />,
    image: "/fot1.png",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    desc:
      "Modern responsive business website with SEO optimization and scalable architecture.",
  },

  {
    id: 2,
    category: "Ecommerce",
    title: "Online Ecommerce Store",
    icon: <FaShoppingCart />,
    image: "/fot2.png",
    tags: ["React", "Node.js", "Payment Gateway"],
    desc:
      "Complete ecommerce platform with secure checkout and admin dashboard.",
  },

  {
    id: 3,
    category: "Mobile App",
    title: "Delivery Management App",
    icon: <FaMobileAlt />,
    image: "/fot3.png",
    tags: ["React Native", "Firebase", "Maps API"],
    desc:
      "Real-time mobile application for delivery tracking and order systems.",
  },

  {
    id: 4,
    category: "AI Solutions",
    title: "AI Chat Assistant",
    icon: <FaBrain />,
    image: "/fot4.png",
    tags: ["OpenAI", "Python", "API"],
    desc:
      "AI-powered chatbot for smart automation and customer support.",
  },

  {
    id: 5,
    category: "Backend Development",
    title: "Secure Backend System",
    icon: <FaServer />,
    image: "/fot5.png",
    tags: ["Node.js", "JWT", "Express"],
    desc:
      "Scalable backend APIs with authentication and secure infrastructure.",
  },

  {
    id: 6,
    category: "Cloud Solutions",
    title: "Cloud Dashboard",
    icon: <FaCloud />,
    image: "/fot6.png",
    tags: ["AWS", "Cloud", "Dashboard"],
    desc:
      "Modern cloud dashboard with analytics and monitoring systems.",
  },

  {
    id: 7,
    category: "Custom Software",
    title: "CRM Management System",
    icon: <FaCode />,
    image: "/fot7.png",
    tags: ["CRM", "Admin Panel", "Database"],
    desc:
      "Custom CRM system for business management and workflow automation.",
  },

  {
    id: 8,
    category: "SEO Optimization",
    title: "SEO Growth Platform",
    icon: <FaChartLine />,
    image: "/fot8.png",
    tags: ["SEO", "Analytics", "Optimization"],
    desc:
      "SEO optimization platform designed for higher Google rankings.",
  },

  {
    id: 9,
    category: "Website Design",
    title: "Portfolio Website",
    icon: <FaLaptopCode />,
    image: "/fot9.png",
    tags: ["UI UX", "Portfolio", "Responsive"],
    desc:
      "Modern portfolio website with premium animations and responsive layout.",
  },

  {
    id: 10,
    category: "Bug Fixing",
    title: "Performance Optimization",
    icon: <FaBug />,
    image: "/fot10.png",
    tags: ["Optimization", "Bug Fix", "Performance"],
    desc:
      "Application optimization with speed improvements and issue fixing.",
  },

  {
    id: 11,
    category: "Database System",
    title: "Enterprise Database",
    icon: <FaDatabase />,
    image: "/fot11.png",
    tags: ["MongoDB", "SQL", "Cloud"],
    desc:
      "Secure enterprise database system with scalable architecture.",
  },

  {
    id: 12,
    category: "Enterprise Solutions",
    title: "Business Automation Platform",
    icon: <FaRocket />,
    image: "/fot12.png",
    tags: ["Automation", "Business", "AI"],
    desc:
      "Enterprise automation platform for scalable business operations.",
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

            JHATECH SOLUTION PORTFOLIO

          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">

            Modern Digital
            <span className="text-blue-500">
              {" "}Projects & Solutions
            </span>

          </h1>

          <p className="text-zinc-400 text-sm md:text-base leading-8 mt-6 max-w-3xl mx-auto">

            Explore professional website development,
            ecommerce platforms,
            mobile applications,
            SEO optimization,
            backend systems,
            AI-powered solutions,
            and scalable software projects
            developed by JhaTech Solution.

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
              Successfully Completed Projects
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
              <FaChartLine />
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

      {/* PROJECTS */}
      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {
            projects.map((project) => (

              <div
                key={project.id}
                className="
                  bg-zinc-950
                  border
                  border-zinc-900
                  rounded-3xl
                  overflow-hidden
                  hover:border-blue-500/40
                  transition
                  duration-300
                  flex
                  flex-col
                "
              >

                {/* IMAGE */}
                <div className="relative h-60 w-full overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">

                  <div className="flex items-center gap-2 text-blue-500 text-xs font-semibold uppercase tracking-wide mb-3">

                    {project.icon}

                    {project.category}

                  </div>

                  <h2 className="text-xl font-bold mb-3">

                    {project.title}

                  </h2>

                  <p className="text-zinc-400 text-sm leading-7 flex-grow">

                    {project.desc}

                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mt-6">

                    {
                      project.tags.map((tag, index) => (

                        <span
                          key={index}
                          className="
                            bg-zinc-900
                            border
                            border-zinc-800
                            text-zinc-300
                            text-[11px]
                            px-3
                            py-1.5
                            rounded-lg
                          "
                        >

                          {tag}

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

      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto bg-zinc-950 border border-zinc-900 rounded-[32px] overflow-hidden grid lg:grid-cols-2 items-center">

          {/* LEFT */}
          <div className="p-10 md:p-16">

            <p className="text-blue-500 uppercase tracking-[4px] text-[11px] font-bold mb-3">

              START YOUR PROJECT

            </p>

            <h2 className="text-3xl md:text-5xl font-black leading-tight">

              Build Your Next
              <span className="text-blue-500">
                {" "}Digital Product
              </span>

            </h2>

            <p className="text-zinc-400 text-sm md:text-base leading-8 mt-6 max-w-xl">

              We help startups,
              creators,
              and businesses build modern websites,
              scalable applications,
              ecommerce systems,
              and powerful digital platforms
              with premium UI and secure backend systems.

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
                href="/services"
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
                View Services
              </Link>

            </div>

          </div>

          {/* IMAGE */}
          <div className="relative h-[320px] lg:h-full min-h-[320px]">

            <Image
              src="/contact.png"
              alt="Modern Software Development"
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