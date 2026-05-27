import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
  FaDatabase,
  FaWhatsapp,
  FaCloud,
  FaBug,
  FaBrain,
  FaUsers,
} from "react-icons/fa";

/* =========================
   SEO META DATA
========================= */

export const metadata: Metadata = {
  title:
    "About JhaTech Solution | Website Development Company",

  description:
    "Learn about JhaTech Solution, founded by Shivam Kumar Jha. We provide professional website development, app development, ecommerce systems, SEO optimization, backend development, bug fixing, cloud infrastructure, and scalable digital solutions across India, USA, and Canada.",

  keywords: [
    "About JhaTech Solution",
    "Shivam Kumar Jha",
    "Website Development Company",
    "App Development Company",
    "SEO Optimization",
    "Custom Software Development",
    "Ecommerce Website",
    "React Developer",
    "Next.js Developer",
    "Backend Development",
    "Cloud Infrastructure",
    "Mumbai Website Developer",
    "Delhi Web Developer",
    "Bihar Website Development",
    "Punjab Web Design",
    "Software Company India",
    "Website Development USA",
    "Website Development Canada",
    "Digital Agency",
    "UI UX Design",
    "Bug Fixing Services",
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

  metadataBase:
    new URL("https://jhatechsolution.vercel.app"),

  alternates: {
    canonical:
      "https://jhatechsolution.vercel.app/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "About JhaTech Solution",

    description:
      "Professional website development, mobile applications, ecommerce systems, SEO optimization, and scalable digital solutions.",

    url:
      "https://jhatechsolution.vercel.app/about",

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
      "About JhaTech Solution",

    description:
      "Modern website development and software solutions company.",

    images: ["/logo.png"],
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
      "Mumbai, Delhi, Bihar, Punjab, India, USA, Canada",

    supportEmail:
      "back2tocampus@gmail.com",
  },
};

export default function AboutPage() {

  return (

    <main className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-36 pb-24 px-6 border-b border-zinc-900 relative overflow-hidden">

        {/* BLUR */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-blue-500 uppercase tracking-[4px] text-[11px] font-semibold mb-5">

              ABOUT JHATECH SOLUTION

            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">

              Modern Digital
              <span className="block text-blue-500">
                Solutions Company
              </span>

            </h1>

            <p className="text-zinc-400 text-sm md:text-lg leading-8 mt-8 max-w-2xl">

              JhaTech Solution is a professional software engineering
              and digital services company founded by
              Shivam Kumar Jha.
              We specialize in website development,
              mobile applications,
              ecommerce systems,
              SEO optimization,
              backend architecture,
              bug fixing,
              cloud infrastructure,
              and scalable custom software solutions.

            </p>

            <p className="text-zinc-500 text-sm md:text-base leading-8 mt-6 max-w-2xl">

              We help startups,
              creators,
              local businesses,
              and enterprises build fast,
              secure,
              scalable,
              and modern digital products
              using technologies like React,
              Next.js,
              Node.js,
              MongoDB,
              cloud deployment,
              and AI-powered systems.

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

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full"></div>

            <Image
              src="/about1.jpg"
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

      {/* STATS */}
      <section className="px-6 py-20 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 text-center">

            <div className="text-blue-500 text-3xl flex justify-center mb-4">
              <FaRocket />
            </div>

            <h2 className="text-4xl font-black text-blue-500">
              50+
            </h2>

            <p className="text-zinc-400 text-sm mt-3">
              Projects Delivered
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
              Client Satisfaction
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 text-center">

            <div className="text-red-500 text-3xl flex justify-center mb-4">
              <FaUsers />
            </div>

            <h2 className="text-4xl font-black text-red-500">
              Global
            </h2>

            <p className="text-zinc-400 text-sm mt-3">
              Worldwide Clients
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 text-center">

            <div className="text-yellow-500 text-3xl flex justify-center mb-4">
              <FaChartLine />
            </div>

            <h2 className="text-4xl font-black text-yellow-500">
              24/7
            </h2>

            <p className="text-zinc-400 text-sm mt-3">
              Technical Support
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="px-6 py-24 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-blue-500 uppercase tracking-[4px] text-[11px] font-semibold mb-4">

              WHAT WE PROVIDE

            </p>

            <h2 className="text-3xl md:text-5xl font-black leading-tight">

              Premium Digital
              <span className="text-blue-500">
                {" "}Services
              </span>

            </h2>

            <p className="text-zinc-400 text-sm md:text-base leading-8 mt-6 max-w-3xl mx-auto">

              We deliver modern software engineering
              and digital solutions
              for startups,
              businesses,
              ecommerce brands,
              creators,
              and enterprises.

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

                Modern responsive business websites,
                landing pages,
                admin dashboards,
                and scalable web systems.

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
                scalable mobile apps,
                and premium user experiences.

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

                Technical SEO,
                speed optimization,
                and organic traffic growth.

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

                Ecommerce systems with secure payment gateways,
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

                Secure backend APIs,
                authentication systems,
                databases,
                and cloud infrastructure.

              </p>

            </div>

            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

              <div className="text-blue-500 text-3xl mb-5">
                <FaBrain />
              </div>

              <h3 className="text-xl font-bold mb-4">
                AI Integrations
              </h3>

              <p className="text-zinc-400 text-sm leading-7">

                AI chatbots,
                automation systems,
                smart workflows,
                and intelligent digital solutions.

              </p>

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

              We help startups,
              creators,
              ecommerce brands,
              and businesses create modern,
              scalable,
              and secure digital systems
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
                  py-4
                  rounded-full
                  text-sm
                  md:text-base
                  font-semibold
                "
              >
                View Services
              </Link>

            </div>

          </div>

          {/* IMAGE */}
          <div className="relative h-[320px] lg:h-full min-h-[350px]">

            <Image
              src="/about2.jpg"
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