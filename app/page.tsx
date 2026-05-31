import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaSearch,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaShoppingCart,
  FaServer,
  FaLaptopCode,
  FaDatabase,
  FaWhatsapp,
  FaCloud,
  FaBug,
} from "react-icons/fa";

/* SEO META DATA */
export const metadata = {
  title:
    "JhaTech Solution | Website Development Company India USA Canada",

  description:
    "JhaTech Solution is a professional website development and app development company providing ecommerce solutions, SEO optimization, backend systems, bug fixing, AI integrations, cloud infrastructure, and scalable digital services across Mumbai Maharashtra, Delhi, Bihar, Punjab, India, USA, and Canada.",

  keywords: [
    "JhaTech Solution",
    "Website Development Company",
    "App Development Company",
    "SEO Optimization",
    "Ecommerce Development",
    "Custom Software Development",
    "Backend Development",
    "Cloud Infrastructure",
    "Bug Fixing Services",
    "React Developer",
    "Next.js Developer",
    "Business Website",
    "Software Company India",
    "Website Development USA",
    "Website Development Canada",
    "Mumbai Website Developer",
    "Delhi Website Development",
    "Bihar Web Design",
    "Punjab Web Developer",
    "AI Integration",
    "Modern Digital Solutions",
    "Admin Dashboard",
    "CRM Development",
    "UI UX Design",
    "Mobile App Solutions",
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
      "https://jhatechsolution.vercel.app",
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
      "JhaTech Solution | Modern Digital Solutions",

    description:
      "Professional website development, ecommerce systems, SEO optimization, app development, AI integrations, and scalable digital products.",

    url:
      "https://jhatechsolution.vercel.app",

    siteName:
      "JhaTech Solution",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "JhaTech Solution",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "JhaTech Solution",

    description:
      "Professional website development and digital services company.",

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
      "back2tocampus@gmail.com",

    instagram:
      "https://www.instagram.com/jhatechsolution",

    linkedin:
      "https://www.linkedin.com/company/jhatech-solution/",
  },
};

export default function Home() {

  return (

    <main className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-36 pb-28 px-6 relative border-b border-zinc-900 overflow-hidden">

        {/* BLUR */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-blue-500 uppercase tracking-[4px] text-[11px] font-semibold mb-5">

              MODERN DIGITAL SOLUTIONS

            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">

              Jha
              <span className="text-blue-500">
                Tech
              </span>

              <span className="block text-blue-500">
                Solution
              </span>

            </h1>

            <p className="text-zinc-400 text-sm md:text-lg leading-8 mt-8 max-w-2xl">

              JhaTech Solution is a professional software engineering
              and digital services company
              providing premium website development,
              mobile app development,
              ecommerce platforms,
              SEO optimization,
              backend architecture,
              cloud infrastructure,
              bug fixing,
              and scalable custom software solutions
              for startups,
              businesses,
              creators,
              and enterprises worldwide.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/services"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  px-8
                  py-4
                  rounded-full
                  text-sm
                  md:text-base
                  font-semibold
                  flex
                  items-center
                  gap-3
                  shadow-lg
                  shadow-blue-500/20
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
                  py-4
                  rounded-full
                  text-sm
                  md:text-base
                  font-semibold
                "
              >
                Contact Us
              </Link>

             

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-14">

              <div>

                <h2 className="text-3xl font-black text-blue-500">
                  50+
                </h2>

                <p className="text-zinc-400 text-sm mt-2">
                  Projects Delivered
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-black text-blue-500">
                  100%
                </h2>

                <p className="text-zinc-400 text-sm mt-2">
                  Client Satisfaction
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-black text-blue-500">
                  24/7
                </h2>

                <p className="text-zinc-400 text-sm mt-2">
                  Technical Support
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full"></div>

            <Image
              src="/home1.png"
              alt="JhaTech Solution Website Development"
              width={650}
              height={650}
              className="
                relative
                rounded-[32px]
                border
                border-zinc-900
                object-cover
                shadow-2xl
                shadow-blue-500/10
              "
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="px-6 py-24 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="text-center mb-16">

            <p className="text-blue-500 uppercase tracking-[4px] text-[11px] font-semibold mb-4">

              OUR SERVICES

            </p>

            <h2 className="text-3xl md:text-5xl font-black leading-tight">

              Premium Digital
              <span className="text-blue-500">
                {" "}Services
              </span>

            </h2>

            <p className="text-zinc-400 text-sm md:text-base leading-8 mt-6 max-w-3xl mx-auto">

              We provide complete software engineering
              and digital solutions
              including websites,
              mobile apps,
              ecommerce systems,
              SEO optimization,
              backend development,
              cloud deployment,
              AI integrations,
              and custom software platforms.

            </p>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

              <div className="text-blue-500 text-3xl mb-5">
                <FaGlobe />
              </div>

              <h3 className="text-xl font-bold mb-4">
                Website Development
              </h3>

              <p className="text-zinc-400 text-sm leading-7">

                Modern responsive websites,
                landing pages,
                admin dashboards,
                and scalable frontend systems.

              </p>

            </div>

            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

              <div className="text-blue-500 text-3xl mb-5">
                <FaMobileAlt />
              </div>

              <h3 className="text-xl font-bold mb-4">
                App Development
              </h3>

              <p className="text-zinc-400 text-sm leading-7">

                Android applications,
                scalable mobile systems,
                and premium UI experiences.

              </p>

            </div>

            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

              <div className="text-blue-500 text-3xl mb-5">
                <FaSearch />
              </div>

              <h3 className="text-xl font-bold mb-4">
                SEO Optimization
              </h3>

              <p className="text-zinc-400 text-sm leading-7">

                Technical SEO optimization,
                Google ranking improvement,
                speed optimization,
                and traffic growth.

              </p>

            </div>

            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

              <div className="text-blue-500 text-3xl mb-5">
                <FaShoppingCart />
              </div>

              <h3 className="text-xl font-bold mb-4">
                Ecommerce Solutions
              </h3>

              <p className="text-zinc-400 text-sm leading-7">

                Ecommerce systems with secure payments,
                product management,
                and admin dashboards.

              </p>

            </div>

            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

              <div className="text-blue-500 text-3xl mb-5">
                <FaServer />
              </div>

              <h3 className="text-xl font-bold mb-4">
                Backend Systems
              </h3>

              <p className="text-zinc-400 text-sm leading-7">

                Secure APIs,
                scalable databases,
                authentication systems,
                and cloud infrastructure.

              </p>

            </div>

            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

              <div className="text-blue-500 text-3xl mb-5">
                <FaCode />
              </div>

              <h3 className="text-xl font-bold mb-4">
                Custom Software
              </h3>

              <p className="text-zinc-400 text-sm leading-7">

                CRM systems,
                admin panels,
                dashboards,
                and enterprise software solutions.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 py-24 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">

            <div className="absolute w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full"></div>

            <Image
              src="/whychosee.png"
              alt="Professional Software Development"
              width={650}
              height={650}
              className="relative rounded-[32px] border border-zinc-900 object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-blue-500 uppercase tracking-[4px] text-[10px] font-semibold mb-0">

              WHY CHOOSE US

            </p>

            <h2 className="text-3xl md:text-5xl font-black leading-tight">

              Smart Solutions For
              <span className="text-blue-500">
                {" "}Modern Businesses
              </span>

            </h2>

            <p className="text-zinc-400 text-sm md:text-base leading-8 mt-6">

              JhaTech Solution focuses on creating fast,
              secure,
              scalable,
              and modern digital systems
              using technologies like React,
              Next.js,
              Node.js,
              MongoDB,
              cloud deployment,
              and AI-powered infrastructure.

            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5">

                <div className="text-blue-500 text-2xl mb-4">
                  <FaRocket />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  Fast Performance
                </h3>

                <p className="text-zinc-400 text-sm leading-6">

                  Optimized websites and applications
                  with high-speed performance.

                </p>

              </div>

              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5">

                <div className="text-blue-500 text-2xl mb-4">
                  <FaShieldAlt />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  Secure Systems
                </h3>

                <p className="text-zinc-400 text-sm leading-6">

                  Protected databases,
                  secure backend APIs,
                  and authentication systems.

                </p>

              </div>

              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5">

                <div className="text-blue-500 text-2xl mb-4">
                  <FaDatabase />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  Scalable Databases
                </h3>

                <p className="text-zinc-400 text-sm leading-6">

                  Modern scalable infrastructure
                  for startups and enterprises.

                </p>

              </div>

              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5">

                <div className="text-blue-500 text-2xl mb-4">
                  <FaChartLine />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  Business Growth
                </h3>

                <p className="text-zinc-400 text-sm leading-6">

                  SEO-focused systems
                  designed for online business growth.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-24">

        <div className="max-w-7xl mx-auto bg-zinc-950 border border-zinc-900 rounded-[32px] overflow-hidden grid lg:grid-cols-2 items-center">

          {/* LEFT */}
          <div className="p-10 md:p-16">

            <p className="text-blue-500 uppercase tracking-[4px] text-[11px] font-semibold mb-4">

              START YOUR PROJECT

            </p>

            <h2 className="text-3xl md:text-5xl font-black leading-tight">

              Build Your Next
              <span className="text-blue-500">
                {" "}Digital Product
              </span>

            </h2>

            <p className="text-zinc-400 text-sm md:text-base leading-8 mt-6 max-w-xl">

              We help businesses create modern,
              scalable,
              and secure digital products
              with premium UI,
              optimized performance,
              and cloud-ready infrastructure.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  px-8
                  py-4
                  rounded-full
                  text-sm
                  md:text-base
                  font-semibold
                  shadow-lg
                  shadow-blue-500/20
                "
              >

                Get Started

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
                  py-4
                  rounded-full
                  text-sm
                  md:text-base
                  font-semibold
                "
              >
                View Portfolio
              </Link>

            </div>

          </div>

          {/* IMAGE */}
          <div className="relative h-[320px] lg:h-full min-h-[350px]">

            <Image
              src="/contact.png"
              alt="JhaTech Solution Software Development"
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