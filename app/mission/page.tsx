import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  FaRocket,
  FaGlobe,
  FaShieldAlt,
  FaArrowRight,
  FaUsers,
  FaCode,
  FaCheckCircle,
  FaLightbulb,
} from "react-icons/fa";

/* =========================
   SEO META DATA
========================= */

export const metadata: Metadata = {
  title:
    "Our Mission | JhaTech Solution",

  description:
    "Explore the mission of JhaTech Solution. We help startups, businesses, ecommerce brands, and enterprises grow with scalable websites, AI-powered systems, cloud infrastructure, and premium digital solutions worldwide.",

  keywords: [
    "JhaTech Solution Mission",
    "Software Company Mission",
    "Website Development",
    "App Development",
    "Digital Solutions",
    "Cloud Infrastructure",
    "AI Systems",
    "SEO Optimization",
    "Business Growth",
    "Modern Software Company",
    "Mumbai IT Company",
    "India Software Company",
  ],

  authors: [
    {
      name: "Shivam Kumar Jha",
      url: "https://jhatechsolution.vercel.app",
    },
  ],

  creator: "Shivam Kumar Jha",

  publisher: "JhaTech Solution",

  metadataBase: new URL(
    "https://jhatechsolution.vercel.app"
  ),

  alternates: {
    canonical:
      "https://jhatechsolution.vercel.app/mission",
  },

  openGraph: {
    title:
      "Our Mission | JhaTech Solution",

    description:
      "Helping businesses grow with modern digital solutions and scalable technology systems worldwide.",

    url:
      "https://jhatechsolution.vercel.app/mission",

    siteName:
      "JhaTech Solution",

    images: [
      {
        url: "/om1.png",
        width: 1200,
        height: 630,
        alt: "JhaTech Solution Mission",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Our Mission | JhaTech Solution",

    description:
      "Premium digital solutions company building scalable software and AI-powered systems.",

    images: ["/om1.png"],
  },
};

export default function MissionPage() {

  return (

    <main className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section className="pt-32 pb-24 px-6 border-b border-zinc-900 relative overflow-hidden">

        {/* GLOW */}
        <div className="
          absolute
          top-10
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-blue-500/10
          blur-[140px]
          rounded-full
        "></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="
              text-blue-500
              uppercase
              tracking-[4px]
              text-[11px]
              font-semibold
              mb-5
            ">

              OUR MISSION

            </p>

            <h1 className="
              text-5xl
              md:text-7xl
              font-black
              leading-[1.05]
            ">

              Empowering
              <span className="text-blue-500">
                {" "}Businesses
              </span>

              <span className="block">
                Through Technology
              </span>

            </h1>

            <p className="
              text-zinc-400
              text-sm
              md:text-lg
              leading-8
              mt-8
              max-w-2xl
            ">

              Our mission is to help startups,
              businesses,
              ecommerce brands,
              and enterprises grow faster
              with modern,
              scalable,
              secure,
              and AI-powered digital solutions.

              We focus on innovation,
              premium user experiences,
              automation,
              cloud infrastructure,
              and business growth through technology.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/services"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  hover:scale-105
                  duration-300
                  transition
                  px-8
                  py-4
                  rounded-full
                  text-sm
                  md:text-base
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
          <div className="
            relative
            animate-[float_5s_ease-in-out_infinite]
          ">

            <Image
              src="/om1.png"
              alt="Mission"
              width={700}
              height={700}
              className="
                rounded-[32px]
                object-cover
                border
                border-zinc-900
              "
            />

          </div>

        </div>

      </section>

      {/* ================= MISSION STATS ================= */}

      <section className="px-6 py-20 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">

          {[
            {
              icon: <FaRocket />,
              number: "50+",
              text: "Projects Delivered",
              color: "text-blue-500",
            },

            {
              icon: <FaShieldAlt />,
              number: "97%",
              text: "Secure Systems",
              color: "text-green-400",
            },

            {
              icon: <FaGlobe />,
              number: "Global",
              text: "Worldwide Clients",
              color: "text-red-500",
            },

            {
              icon: <FaUsers />,
              number: "24/7",
              text: "Client Support",
              color: "text-yellow-400",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="
                bg-zinc-950
                border
                border-zinc-900
                rounded-[28px]
                p-8
                text-center
                hover:border-blue-500
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className={`text-3xl mb-5 ${item.color}`}>

                {item.icon}

              </div>

              <h3 className={`text-4xl font-black ${item.color}`}>

                {item.number}

              </h3>

              <p className="text-zinc-400 mt-3 text-sm">

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= CORE MISSION AREAS ================= */}

      <section className="px-6 py-24 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="
              text-blue-500
              uppercase
              tracking-[4px]
              text-[11px]
              font-semibold
              mb-5
            ">

              OUR CORE MISSION

            </p>

            <h2 className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
            ">

              Helping Brands
              <span className="text-blue-500">
                {" "}Grow Digitally
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: <FaRocket />,
                title: "Business Growth",
                desc: "Helping businesses scale faster with premium digital infrastructure and scalable systems.",
              },

              {
                icon: <FaGlobe />,
                title: "Global Reach",
                desc: "Building digital products that help brands reach audiences worldwide.",
              },

              {
                icon: <FaLightbulb />,
                title: "Innovation",
                desc: "Creating modern AI-powered systems and future-ready software platforms.",
              },

              {
                icon: <FaShieldAlt />,
                title: "Security",
                desc: "Delivering secure cloud systems and protected backend infrastructures.",
              },

              {
                icon: <FaUsers />,
                title: "Client Success",
                desc: "Focused on long-term client growth and premium user experiences.",
              },

              {
                icon: <FaCode />,
                title: "Modern Technology",
                desc: "Using React, Next.js, cloud systems, and AI infrastructure for scalable products.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="
                  bg-zinc-950
                  border
                  border-zinc-900
                  rounded-[28px]
                  p-8
                  hover:border-blue-500
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >

                <div className="text-3xl text-blue-500 mb-6">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {item.title}

                </h3>

                <p className="text-zinc-400 leading-8 text-sm">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY OUR MISSION MATTERS ================= */}

      <section className="px-6 py-24 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="
            relative
            animate-[float_5s_ease-in-out_infinite]
          ">

            <Image
              src="/om2.png"
              alt="Why Our Mission Matters"
              width={700}
              height={700}
              className="
                rounded-[32px]
                object-cover
                border
                border-zinc-900
              "
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="
              text-blue-500
              uppercase
              tracking-[4px]
              text-[11px]
              font-semibold
              mb-5
            ">

              WHY OUR MISSION MATTERS

            </p>

            <h2 className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
            ">

              Technology That
              <span className="text-blue-500">
                {" "}Creates Growth
              </span>

            </h2>

            <p className="
              text-zinc-400
              leading-8
              mt-8
            ">

              We believe technology should not only
              look modern but also solve real business problems.

              Our mission is to help businesses,
              startups,
              and creators improve customer engagement,
              increase online visibility,
              automate workflows,
              and achieve long-term digital growth.

            </p>

            <div className="space-y-5 mt-10">

              {[
                "Scalable cloud-ready infrastructure",
                "High-performance modern websites",
                "Premium user experiences and UI systems",
                "AI-powered automation and smart systems",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4"
                >

                  <FaCheckCircle className="text-blue-500 mt-1" />

                  <p className="text-zinc-400 leading-7">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="px-6 py-24">

        <div className="
          max-w-7xl
          mx-auto
          bg-zinc-950
          border
          border-zinc-900
          rounded-[36px]
          overflow-hidden
          grid
          lg:grid-cols-2
          items-center
        ">

          {/* LEFT */}
          <div className="p-10 md:p-16">

            <p className="
              text-blue-500
              uppercase
              tracking-[4px]
              text-[11px]
              font-semibold
              mb-5
            ">

              START YOUR PROJECT

            </p>

            <h2 className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
            ">

              Let’s Build The
              <span className="text-blue-500">
                {" "}Future Together
              </span>

            </h2>

            <p className="
              text-zinc-400
              leading-8
              mt-8
              max-w-xl
            ">

              We are committed to helping businesses
              innovate,
              scale,
              and grow with modern,
              AI-powered,
              secure,
              and scalable digital solutions.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/contact"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  hover:scale-105
                  duration-300
                  px-8
                  py-4
                  rounded-full
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
                href="/portfolio"
                className="
                  border
                  border-zinc-700
                  hover:border-blue-500
                  transition
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                "
              >

                View Portfolio

              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-full min-h-[420px]">

            <Image
              src="/contact.png"
              alt="Future Technology"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}