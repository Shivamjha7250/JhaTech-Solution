import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  FaArrowRight,
  FaRocket,
  FaGlobe,
  FaLightbulb,
  FaShieldAlt,
  FaBrain,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

/* =========================
   SEO META DATA
========================= */

export const metadata: Metadata = {
  title:
    "Our Vision | JhaTech Solution",

  description:
    "Discover the vision of JhaTech Solution. We aim to build future-ready digital ecosystems, AI-powered systems, scalable software solutions, and modern business technologies worldwide.",

  keywords: [
    "JhaTech Solution Vision",
    "Future Technology",
    "AI Solutions",
    "Website Development",
    "Software Company",
    "Cloud Infrastructure",
    "Business Technology",
    "Modern Digital Solutions",
    "India Software Company",
    "Mumbai IT Company",
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
      "https://jhatechsolution.vercel.app/vision",
  },

  openGraph: {
    title:
      "Our Vision | JhaTech Solution",

    description:
      "Building future-ready digital platforms, AI systems, and scalable software ecosystems worldwide.",

    url:
      "https://jhatechsolution.vercel.app/vision",

    siteName:
      "JhaTech Solution",

    images: [
      {
        url: "/about1.jpg",
        width: 1200,
        height: 630,
        alt: "JhaTech Solution Vision",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Our Vision | JhaTech Solution",

    description:
      "Modern digital solutions and future technology company.",

    images: ["/about1.jpg"],
  },
};

export default function VisionPage() {

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

              OUR VISION

            </p>

            <h1 className="
              text-5xl
              md:text-7xl
              font-black
              leading-[1.05]
            ">

              Building The
              <span className="text-blue-500">
                {" "}Future
              </span>

              <span className="block">
                Through Innovation
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

              Our vision is to become a globally trusted
              technology company that empowers businesses
              with scalable digital ecosystems,
              AI-powered automation,
              cloud infrastructure,
              and future-ready software solutions.

              We aim to transform businesses with innovation,
              modern UI systems,
              intelligent platforms,
              and high-performance digital experiences.

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
              src="/v1.png"
              alt="Our Vision"
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

      {/* ================= VISION AREAS ================= */}

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

              OUR FUTURE GOALS

            </p>

            <h2 className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
            ">

              Creating Smart
              <span className="text-blue-500">
                {" "}Digital Ecosystems
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: <FaRocket />,
                title: "Future Innovation",
                desc: "Building modern software ecosystems and AI-powered business solutions.",
              },

              {
                icon: <FaGlobe />,
                title: "Global Expansion",
                desc: "Helping businesses scale globally with powerful digital infrastructure.",
              },

              {
                icon: <FaBrain />,
                title: "AI Integration",
                desc: "Creating intelligent automation systems and smart digital platforms.",
              },

              {
                icon: <FaShieldAlt />,
                title: "Secure Systems",
                desc: "Providing secure cloud-ready backend systems and scalable infrastructures.",
              },

              {
                icon: <FaUsers />,
                title: "Client Transformation",
                desc: "Helping startups and enterprises digitally transform and grow faster.",
              },

              {
                icon: <FaLightbulb />,
                title: "Creative Technology",
                desc: "Combining creativity and modern technologies for premium experiences.",
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

      {/* ================= WHY OUR VISION ================= */}

      <section className="px-6 py-24 border-b border-zinc-900">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="
            relative
            animate-[float_5s_ease-in-out_infinite]
          ">

            <Image
              src="/v2.png"
              alt="Future Technology"
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

              WHY OUR VISION MATTERS

            </p>

            <h2 className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
            ">

              Technology That
              <span className="text-blue-500">
                {" "}Shapes Tomorrow
              </span>

            </h2>

            <p className="
              text-zinc-400
              leading-8
              mt-8
            ">

              We believe the future belongs to businesses
              that innovate,
              automate,
              and adapt quickly.

              Our vision focuses on creating intelligent,
              scalable,
              secure,
              and future-ready digital systems
              that help businesses lead in the modern digital world.

            </p>

            <div className="space-y-5 mt-10">

              {[
                "AI-powered automation systems",
                "Scalable cloud-ready infrastructures",
                "Modern UI and premium user experiences",
                "Future-focused business technology solutions",
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

              FUTURE READY

            </p>

            <h2 className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
            ">

              Let’s Create The
              <span className="text-blue-500">
                {" "}Next Generation
              </span>

            </h2>

            <p className="
              text-zinc-400
              leading-8
              mt-8
              max-w-xl
            ">

              We are building modern digital ecosystems,
              AI systems,
              scalable software platforms,
              and premium cloud-ready infrastructures
              designed for the future.

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
          <div className="relative h-full min-h-[400px]">

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