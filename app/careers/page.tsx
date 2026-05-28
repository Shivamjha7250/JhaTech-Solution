import type { Metadata } from "next";

import Image from "next/image";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  FaClock,
  FaRocket,
} from "react-icons/fa";

/* =========================
   SEO META DATA
========================= */

export const metadata: Metadata = {
  title:
    "Careers | JhaTech Solution",

  description:
    "Careers at JhaTech Solution coming soon. Future opportunities for developers, designers, AI engineers, cloud specialists, and digital creators worldwide.",

  keywords: [
    "JhaTech Careers",
    "Software Jobs",
    "Frontend Developer",
    "Backend Developer",
    "Remote Jobs",
    "AI Engineer",
    "Digital Careers",
    "IT Company Jobs",
  ],

  metadataBase: new URL(
    "https://jhatechsolution.vercel.app"
  ),

  alternates: {
    canonical:
      "https://jhatechsolution.vercel.app/careers",
  },

  openGraph: {
    title:
      "Careers | JhaTech Solution",

    description:
      "Exciting career opportunities coming soon at JhaTech Solution.",

    url:
      "https://jhatechsolution.vercel.app/careers",

    siteName:
      "JhaTech Solution",

    images: [
      {
        url: "/career.jpg",
        width: 1200,
        height: 630,
        alt: "Careers Coming Soon",
      },
    ],

    locale: "en_US",
    type: "website",
  },
};

export default function CareersPage() {

  return (

    <main className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* ================= COMING SOON SECTION ================= */}

      <section className="
        pt-32
        pb-24
        px-6
        min-h-screen
        flex
        items-center
        relative
        overflow-hidden
      ">

        {/* GLOW */}
        <div className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-blue-500/10
          blur-[140px]
          rounded-full
        "></div>

        <div className="
          max-w-7xl
          mx-auto
          relative
          z-10
          grid
          lg:grid-cols-2
          gap-16
          items-center
        ">

          {/* LEFT */}
          <div>

            <div className="
              inline-flex
              items-center
              gap-3
              bg-blue-500/10
              border
              border-blue-500/20
              px-5
              py-3
              rounded-full
              text-blue-500
              text-sm
              font-semibold
              mb-8
            ">

              <FaClock />

              Careers Opening Soon

            </div>

            <h1 className="
              text-5xl
              md:text-7xl
              font-black
              leading-[1.05]
            ">

              Exciting
              <span className="text-blue-500">
                {" "}Opportunities
              </span>

              <span className="block">
                Coming Soon
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

              We are preparing future opportunities
              for developers,
              designers,
              AI engineers,
              cloud specialists,
              and digital creators worldwide.

              Stay connected for upcoming openings
              and career announcements.

            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-4 mt-10">

              {[
                "Frontend Developer",
                "Backend Developer",
                "UI UX Designer",
                "AI Engineer",
                "Cloud Engineer",
                "SEO Specialist",
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-zinc-950
                    border
                    border-zinc-800
                    px-5
                    py-3
                    rounded-full
                    text-sm
                    text-zinc-300
                  "
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="
            relative
            animate-[float_5s_ease-in-out_infinite]
          ">

            <Image
              src="/c1.png"
              alt="Careers Coming Soon"
              width={700}
              height={700}
              className="
                rounded-[32px]
                object-cover
                border
                border-zinc-900
              "
            />

            {/* FLOAT CARD */}
            <div className="
              absolute
              bottom-6
              left-6
              bg-black/80
              backdrop-blur-xl
              border
              border-zinc-800
              rounded-2xl
              px-6
              py-5
            ">

              <div className="flex items-center gap-4">

                <div className="
                  w-14
                  h-14
                  rounded-full
                  bg-blue-500/10
                  flex
                  items-center
                  justify-center
                  text-blue-500
                  text-2xl
                ">

                  <FaRocket />

                </div>

                <div>

                  <h3 className="font-bold text-lg">

                    Future Ready Team

                  </h3>

                  <p className="text-zinc-400 text-sm mt-1">

                    Innovation • Creativity • Growth

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}