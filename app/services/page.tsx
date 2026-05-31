import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Image from "next/image";
import Link from "next/link";

import {
  FaLaptopCode,
  FaSearch,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaShoppingCart,
  FaBug,
  FaPalette,
  FaBrain,
  FaArrowRight,
  FaWhatsapp,
  FaRocket,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";

/* SEO META DATA */
export const metadata = {
  title:
    "Services | JhaTech Solution - Website & App Development Company",

  description:
    "JhaTech Solution provides professional website development, app development, ecommerce solutions, SEO optimization, backend systems, AI integrations, bug fixing, UI UX design, and custom software services across Mumbai Maharashtra, Delhi, Bihar, Punjab, India, USA, and Canada.",

  keywords: [
    "JhaTech Services",
    "Website Development",
    "App Development",
    "SEO Optimization",
    "Ecommerce Development",
    "Custom Software",
    "AI Integration",
    "Backend Development",
    "UI UX Design",
    "Website Development Company",
    "Mumbai Web Developer",
    "Delhi Website Development",
    "Bihar Web Design",
    "Punjab Website Developer",
    "Software Company India",
    "Website Development USA",
    "Website Development Canada",
    "React Developer",
    "Next.js Developer",
    "Business Website Development",
    "Cloud Infrastructure",
    "Bug Fixing Services",
    "CRM Development",
    "Admin Dashboard Development",
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
      "https://jhatechsolution.vercel.app/services",
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
      "Services | JhaTech Solution",

    description:
      "Professional website development, mobile applications, ecommerce systems, SEO optimization, AI integrations, and scalable digital solutions.",

    url:
      "https://jhatechsolution.vercel.app/services",

    siteName:
      "JhaTech Solution",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "JhaTech Solution Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "JhaTech Solution Services",

    description:
      "Professional website development, app development, SEO optimization, and scalable digital solutions.",

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
  },
};

export default function ServicesPage() {

  return (

    <main className="bg-black text-white min-h-screen overflow-hidden antialiased">

      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-36 pb-20 px-6 border-b border-zinc-900 relative overflow-hidden">

        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">

          <p className="text-blue-500 uppercase tracking-[4px] text-[11px] font-bold mb-4">

            OUR SERVICES

          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">

            Premium Digital
            <span className="text-blue-500">
              {" "}Solutions
            </span>

          </h1>

          <p className="text-zinc-400 text-sm md:text-base leading-8 mt-6 max-w-3xl mx-auto">

            JhaTech Solution delivers professional website development,
            mobile applications,
            ecommerce systems,
            SEO optimization,
            backend infrastructure,
            AI integrations,
            cloud platforms,
            and scalable custom software solutions
            for startups,
            creators,
            and businesses worldwide.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Link
              href="/projects"
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

              View Projects

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
              Contact Us
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
              Completed Digital Projects
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

      {/* SERVICES GRID */}
      <section className="px-6 py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

            <div className="text-blue-500 text-3xl mb-5">
              <FaLaptopCode />
            </div>

            <h2 className="text-xl font-bold mb-3">
              Website Development
            </h2>

            <p className="text-zinc-400 text-sm leading-7">

              Responsive business websites,
              landing pages,
              admin dashboards,
              and high-performance frontend systems.

            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

            <div className="text-blue-500 text-3xl mb-5">
              <FaMobileAlt />
            </div>

            <h2 className="text-xl font-bold mb-3">
              App Development
            </h2>

            <p className="text-zinc-400 text-sm leading-7">

              Android,
              iOS,
              and cross-platform mobile applications
              with scalable backend systems.

            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

            <div className="text-blue-500 text-3xl mb-5">
              <FaSearch />
            </div>

            <h2 className="text-xl font-bold mb-3">
              SEO Optimization
            </h2>

            <p className="text-zinc-400 text-sm leading-7">

              Improve Google ranking,
              website visibility,
              loading speed,
              and search performance.

            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

            <div className="text-blue-500 text-3xl mb-5">
              <FaShoppingCart />
            </div>

            <h2 className="text-xl font-bold mb-3">
              Ecommerce Solutions
            </h2>

            <p className="text-zinc-400 text-sm leading-7">

              Ecommerce platforms
              with secure payment gateways,
              order systems,
              and product management.

            </p>

          </div>

          {/* CARD 5 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

            <div className="text-blue-500 text-3xl mb-5">
              <FaCode />
            </div>

            <h2 className="text-xl font-bold mb-3">
              Custom Software
            </h2>

            <p className="text-zinc-400 text-sm leading-7">

              CRM systems,
              admin panels,
              business dashboards,
              and scalable software platforms.

            </p>

          </div>

          {/* CARD 6 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

            <div className="text-blue-500 text-3xl mb-5">
              <FaServer />
            </div>

            <h2 className="text-xl font-bold mb-3">
              Backend Systems
            </h2>

            <p className="text-zinc-400 text-sm leading-7">

              Secure backend APIs,
              authentication systems,
              database integration,
              and cloud infrastructure.

            </p>

          </div>

          {/* CARD 7 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

            <div className="text-blue-500 text-3xl mb-5">
              <FaBug />
            </div>

            <h2 className="text-xl font-bold mb-3">
              Bug Fixing
            </h2>

            <p className="text-zinc-400 text-sm leading-7">

              Fix frontend issues,
              backend errors,
              deployment problems,
              and optimize performance systems.

            </p>

          </div>

          {/* CARD 8 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

            <div className="text-blue-500 text-3xl mb-5">
              <FaPalette />
            </div>

            <h2 className="text-xl font-bold mb-3">
              UI / UX Design
            </h2>

            <p className="text-zinc-400 text-sm leading-7">

              Modern interface design,
              responsive layouts,
              premium user experience,
              and clean UI systems.

            </p>

          </div>

          {/* CARD 9 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-7 hover:border-blue-500/40 transition">

            <div className="text-blue-500 text-3xl mb-5">
              <FaBrain />
            </div>

            <h2 className="text-xl font-bold mb-3">
              AI Integrations
            </h2>

            <p className="text-zinc-400 text-sm leading-7">

              AI chatbots,
              automation systems,
              smart workflows,
              and intelligent business solutions.

            </p>

          </div>

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

              Build Powerful
              <span className="text-blue-500">
                {" "}Digital Products
              </span>

            </h2>

            <p className="text-zinc-400 text-sm md:text-base leading-8 mt-6 max-w-xl">

              We help startups,
              creators,
              and businesses build premium websites,
              mobile applications,
              ecommerce systems,
              SEO platforms,
              AI systems,
              and scalable software solutions.

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

                Start Your Project

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
              src="/contact.png"
              alt="Digital Solution Engineering"
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