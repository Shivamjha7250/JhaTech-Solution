import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaArrowRight,
} from "react-icons/fa";

/* =========================
   SEO META DATA
========================= */

export const metadata: Metadata = {
  title:
    "Our Family | JhaTech Solution",

  description:
    "Meet the talented team of JhaTech Solution including developers, designers, AI engineers, cloud experts, and digital strategists building modern digital solutions worldwide.",

  keywords: [
    "JhaTech Solution Team",
    "Our Family",
    "Software Developers",
    "UI UX Designers",
    "Cloud Engineers",
    "AI Engineers",
    "Website Developers",
    "Mumbai IT Company",
    "India Software Company",
  ],

  metadataBase: new URL(
    "https://jhatechsolution.vercel.app"
  ),

  alternates: {
    canonical:
      "https://jhatechsolution.vercel.app/family",
  },

  openGraph: {
    title:
      "Our Family | JhaTech Solution",

    description:
      "Meet the professional team behind JhaTech Solution.",

    url:
      "https://jhatechsolution.vercel.app/family",

    siteName:
      "JhaTech Solution",

    images: [
      {
        url: "/t1.png",
        width: 1200,
        height: 630,
        alt: "JhaTech Solution Team",
      },
    ],

    locale: "en_US",
    type: "website",
  },
};

const teamMembers = [

  {
    name: "Shivam Kumar Jha",

    role: "Founder & Managing Director",

    image: "/t1.png",

    social: {

      linkedin:
        "https://www.linkedin.com/company/jhatech-solution/",

      instagram:
        "https://www.instagram.com/jhatechsolution",

      facebook:
        "https://facebook.com",

    },

  },

  {
    name: "Aarav Sharma",

    role: "Senior Frontend Developer",

    image: "/t1.png",

    social: {

      linkedin:
        "https://linkedin.com",

      instagram:
        "https://instagram.com",

      facebook:
        "https://facebook.com",

    },

  },

  {
    name: "Priya Verma",

    role: "UI UX Designer",

    image: "/t1.png",

    social: {

      linkedin:
        "https://linkedin.com",

      instagram:
        "https://instagram.com",

      facebook:
        "https://facebook.com",

    },

  },

  {
    name: "Rohan Singh",

    role: "Backend Engineer",

    image: "/t1.png",

    social: {

      linkedin:
        "https://linkedin.com",

      instagram:
        "https://instagram.com",

      facebook:
        "https://facebook.com",

    },

  },

  {
    name: "Anjali Patel",

    role: "SEO Specialist",

    image: "/t1.png",

    social: {

      linkedin:
        "https://linkedin.com",

      instagram:
        "https://instagram.com",

      facebook:
        "https://facebook.com",

    },

  },

  {
    name: "Rahul Kumar",

    role: "Cloud Infrastructure Engineer",

    image: "/t1.png",

    social: {

      linkedin:
        "https://linkedin.com",

      instagram:
        "https://instagram.com",

      facebook:
        "https://facebook.com",

    },

  },

  {
    name: "Sneha Gupta",

    role: "AI & Automation Engineer",

    image: "/t1.png",

    social: {

      linkedin:
        "https://linkedin.com",

      instagram:
        "https://instagram.com",

      facebook:
        "https://facebook.com",

    },

  },

  {
    name: "Aditya Raj",

    role: "Mobile App Developer",

    image: "/t1.png",

    social: {

      linkedin:
        "https://linkedin.com",

      instagram:
        "https://instagram.com",

      facebook:
        "https://facebook.com",

    },

  },

  {
    name: "Neha Kapoor",

    role: "Digital Marketing Strategist",

    image: "/t1.png",

    social: {

      linkedin:
        "https://linkedin.com",

      instagram:
        "https://instagram.com",

      facebook:
        "https://facebook.com",

    },

  },

];

export default function FamilyPage() {

  return (

    <main className="bg-black text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
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

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          <p className="
            text-blue-500
            uppercase
            tracking-[4px]
            text-[11px]
            font-semibold
            mb-5
          ">

            OUR FAMILY

          </p>

          <h1 className="
            text-5xl
            md:text-7xl
            font-black
            leading-[1.05]
          ">

            Meet Our
            <span className="text-blue-500">
              {" "}Expert Team
            </span>

          </h1>

          <p className="
            text-zinc-400
            text-sm
            md:text-lg
            leading-8
            mt-8
            max-w-3xl
            mx-auto
          ">

            Our talented team of developers,
            designers,
            AI engineers,
            cloud specialists,
            and strategists work together
            to build premium digital experiences
            and future-ready software systems.

          </p>

        </div>

      </section>

      {/* TEAM SECTION */}
      <section className="px-6 py-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {teamMembers.map((member, index) => (

            <div
              key={index}
              className="
                bg-zinc-950
                border
                border-zinc-900
                rounded-[32px]
                overflow-hidden
                hover:border-blue-500
                hover:-translate-y-2
                transition
                duration-300
                group
              "
            >

              {/* IMAGE */}
              <div className="relative h-[350px] overflow-hidden">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-2xl font-bold">

                  {member.name}

                </h3>

                <p className="text-blue-500 text-sm mt-2">

                  {member.role}

                </p>

                {/* SOCIAL LINKS */}
                <div className="flex items-center gap-4 mt-6">

                  {/* LINKEDIN */}
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-zinc-900
                      border
                      border-zinc-800
                      flex
                      items-center
                      justify-center
                      hover:border-blue-500
                      hover:text-blue-500
                      transition
                    "
                  >

                    <FaLinkedin />

                  </Link>

                  {/* INSTAGRAM */}
                  <Link
                    href={member.social.instagram}
                    target="_blank"
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-zinc-900
                      border
                      border-zinc-800
                      flex
                      items-center
                      justify-center
                      hover:border-pink-500
                      hover:text-pink-500
                      transition
                    "
                  >

                    <FaInstagram />

                  </Link>

                  {/* FACEBOOK */}
                  <Link
                    href={member.social.facebook}
                    target="_blank"
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-zinc-900
                      border
                      border-zinc-800
                      flex
                      items-center
                      justify-center
                      hover:border-blue-500
                      hover:text-blue-500
                      transition
                    "
                  >

                    <FaFacebookF />

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="px-6 pb-24">

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

              JOIN OUR JOURNEY

            </p>

            <h2 className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
            ">

              Building The
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

              Our team focuses on innovation,
              creativity,
              scalability,
              and premium digital experiences
              for startups,
              businesses,
              and enterprises worldwide.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/careers"
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

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-full min-h-[420px]">

            <Image
              src="/ot1.png"
              alt="Our Team"
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