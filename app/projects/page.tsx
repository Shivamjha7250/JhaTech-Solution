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
    "Explore professional software engineering, website development, ecommerce systems, AI automation tools, cloud infrastructure, mobile applications, SEO optimization systems, and enterprise digital projects developed by JhaTech Solution.",

  metadataBase:
    new URL("https://jhatechsolution.vercel.app"),

  alternates: {
    canonical:
      "https://jhatechsolution.vercel.app/projects",
  },
};

export default function ProjectsPage() {

  const projects = [

    {
      id: 1,
      title: "Enterprise Backend System",
      scope: "Backend Architecture",
      icon: <FaServer />,
      image: "/p1.png",
      specs: ["Node.js", "MongoDB", "JWT Auth"],
      details:
        "Scalable backend system with secure authentication and enterprise architecture.",
    },

    {
      id: 2,
      title: "Business Analytics Dashboard",
      scope: "Analytics Platform",
      icon: <FaDatabase />,
      image: "/p2.png",
      specs: ["Next.js", "Charts", "PostgreSQL"],
      details:
        "Modern analytics dashboard with advanced reports and real-time business insights.",
    },

    {
      id: 3,
      title: "Cross Platform Mobile App",
      scope: "Mobile Application",
      icon: <FaMobileAlt />,
      image: "/p3.png",
      specs: ["React Native", "Firebase", "Maps API"],
      details:
        "Cross-platform mobile application with scalable infrastructure.",
    },

    {
      id: 4,
      title: "Cloud Infrastructure Platform",
      scope: "Cloud Services",
      icon: <FaCloud />,
      image: "/p4.png",
      specs: ["AWS", "Docker", "Cloudflare"],
      details:
        "Cloud infrastructure platform with deployment automation and secure hosting.",
    },

    {
      id: 5,
      title: "SEO Optimization Engine",
      scope: "SEO System",
      icon: <FaSearchDollar />,
      image: "/p5.png",
      specs: ["SEO Audit", "Performance", "Analytics"],
      details:
        "Advanced SEO optimization system for ranking improvement.",
    },

    {
      id: 6,
      title: "AI Automation Platform",
      scope: "AI Solutions",
      icon: <FaRobot />,
      image: "/p6.png",
      specs: ["OpenAI", "Python", "Automation"],
      details:
        "AI-based automation platform for workflow optimization.",
    },

    {
      id: 7,
      title: "Modern Ecommerce Store",
      scope: "Ecommerce",
      icon: <FaShoppingCart />,
      image: "/p7.png",
      specs: ["Stripe", "Next.js", "MongoDB"],
      details:
        "Premium ecommerce platform with payment integration.",
    },

    {
      id: 8,
      title: "Admin Management Dashboard",
      scope: "Admin Panel",
      icon: <FaLaptopCode />,
      image: "/p8.png",
      specs: ["Dashboard", "Charts", "Admin"],
      details:
        "Modern admin dashboard with analytics systems.",
    },

    {
      id: 9,
      title: "Custom CRM Platform",
      scope: "CRM Software",
      icon: <FaCode />,
      image: "/p9.png",
      specs: ["CRM", "Business", "Automation"],
      details:
        "Business CRM platform with workflow automation.",
    },

    {
      id: 10,
      title: "Website Performance Optimizer",
      scope: "Bug Fixing",
      icon: <FaRocket />,
      image: "/p10.png",
      specs: ["Optimization", "Speed", "SEO"],
      details:
        "Performance optimization platform for enterprise systems.",
    },

    {
      id: 11,
      title: "Business Portfolio Website",
      scope: "Portfolio Design",
      icon: <FaGlobe />,
      image: "/p11.png",
      specs: ["Responsive", "Portfolio", "UI UX"],
      details:
        "Modern portfolio website with premium responsive layouts.",
    },

    {
      id: 12,
      title: "Secure Authentication System",
      scope: "Cyber Security",
      icon: <FaShieldAlt />,
      image: "/p12.png",
      specs: ["JWT", "OAuth", "Security"],
      details:
        "Secure authentication infrastructure with protected systems.",
    },

    {
      id: 13,
      title: "Digital Marketing Dashboard",
      scope: "Marketing Platform",
      icon: <FaChartLine />,
      image: "/p13.png",
      specs: ["SEO", "Analytics", "Reports"],
      details:
        "Digital marketing platform with analytics and campaign management.",
    },

    {
      id: 14,
      title: "Real Estate Platform",
      scope: "Property System",
      icon: <FaGlobe />,
      image: "/p14.png",
      specs: ["Property", "Maps", "Listings"],
      details:
        "Modern real estate platform with smart search systems.",
    },

    {
      id: 15,
      title: "Food Delivery Application",
      scope: "Delivery App",
      icon: <FaMobileAlt />,
      image: "/p15.png",
      specs: ["Delivery", "Tracking", "Orders"],
      details:
        "Real-time food delivery platform with order tracking.",
    },

    {
      id: 16,
      title: "Cloud Storage System",
      scope: "Storage Platform",
      icon: <FaCloud />,
      image: "/p16.png",
      specs: ["Cloud", "Storage", "Security"],
      details:
        "Secure cloud storage system with scalable infrastructure.",
    },

    {
      id: 17,
      title: "AI Chat Support System",
      scope: "AI Assistant",
      icon: <FaRobot />,
      image: "/p17.png",
      specs: ["AI", "Chatbot", "Automation"],
      details:
        "AI-powered customer support assistant with automation features.",
    },

  ];

  return (

    <main className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-36 pb-20 px-4 md:px-6 border-b border-zinc-900 relative overflow-hidden">

        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">

          <p className="text-blue-500 uppercase tracking-[4px] text-[11px] font-bold mb-4">
            JHATECH SOLUTION PROJECTS
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">

            Premium Digital
            <span className="text-blue-500">
              {" "}Products
            </span>

          </h1>

          <p className="text-zinc-400 text-sm md:text-base leading-8 mt-6 max-w-3xl mx-auto">

            Explore modern software engineering,
            cloud infrastructure,
            AI automation,
            mobile apps,
            ecommerce systems,
            and enterprise digital platforms.

          </p>

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

      {/* PROJECTS */}
      <section className="px-4 md:px-6 py-20 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

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
                    group
                    hover:border-blue-500/40
                    transition-all
                    duration-300
                    flex
                    flex-col
                  "
                >

                  {/* IMAGE */}
                  <div className="relative w-full h-[260px] bg-black overflow-hidden">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                        object-contain
                        p-2
                        group-hover:scale-105
                        transition-transform
                        duration-500
                      "
                      sizes="
                        (max-width:768px) 100vw,
                        (max-width:1200px) 50vw,
                        33vw
                      "
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-1">

                    <div className="flex items-center gap-2 text-blue-500 text-xs uppercase tracking-wide font-semibold mb-4">

                      <span className="text-lg">
                        {project.icon}
                      </span>

                      {project.scope}

                    </div>

                    <h2 className="text-2xl font-black text-white leading-tight mb-4">

                      {project.title}

                    </h2>

                    <p className="text-zinc-400 text-sm leading-7 mb-6 flex-1">

                      {project.details}

                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mb-6">

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
                              rounded-xl
                            "
                          >

                            {spec}

                          </span>

                        ))
                      }

                    </div>

                    {/* BUTTON */}
                    <Link
                      href="/contact"
                      className="
                        mt-auto
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        bg-blue-600
                        hover:bg-blue-700
                        transition
                        text-sm
                        font-semibold
                        px-5
                        py-3
                        rounded-xl
                      "
                    >

                      Start Project

                      <FaArrowRight />

                    </Link>

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 pb-24">

        <div className="max-w-7xl mx-auto bg-zinc-950 border border-zinc-900 rounded-[32px] overflow-hidden grid lg:grid-cols-2 items-center">

          {/* LEFT */}
          <div className="p-8 md:p-14">

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

              We help businesses create scalable,
              secure,
              and high-performance digital products with premium UI and cloud-ready infrastructure.

            </p>

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
          <div className="relative h-[320px] lg:h-full min-h-[320px] bg-black overflow-hidden">

            <Image
              src="/contact.png"
              alt="JhaTech Solution"
              fill
              className="object-contain p-4"
              sizes="(max-width:1024px) 100vw, 50vw"
            />

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}