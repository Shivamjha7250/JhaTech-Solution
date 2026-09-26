"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  ["AWS", "/icons/technologies/amazonaws.png"],
  ["Android", "/icons/technologies/android.png"],
  ["Angular", "/icons/technologies/angular.png"],
  ["Apple / iOS", "/icons/technologies/apple.png"],
  ["Bootstrap", "/icons/technologies/bootstrap.png"],
  ["CSS3", "/icons/technologies/css3.png"],
  ["Express", "/icons/technologies/express.png"],
  ["Firebase", "/icons/technologies/firebase.png"],
  ["Flutter", "/icons/technologies/Flutter.png"],
  ["Google Cloud", "/icons/technologies/google-cloud.png"],
  ["HTML5", "/icons/technologies/html5.png"],
  ["Java", "/icons/technologies/java.png"],
  ["JavaScript", "/icons/technologies/javascript.png"],
  ["Kotlin", "/icons/technologies/kotlin.png"],
  ["MongoDB", "/icons/technologies/mongodb.png"],
  ["MySQL", "/icons/technologies/mysql.png"],
  ["Next.js", "/icons/technologies/nextjs.png"],
  ["Node.js", "/icons/technologies/nodejs.png"],
  ["PHP", "/icons/technologies/php.png"],
  ["PostgreSQL", "/icons/technologies/postgresql.png"],
  ["Python", "/icons/technologies/python.png"],
  ["React", "/icons/technologies/react.png"],
  ["Shopify", "/icons/technologies/shopify.png"],
  ["Supabase", "/icons/technologies/supabase.png"],
  ["Tailwind CSS", "/icons/technologies/tailwindcss.png"],
  ["TypeScript", "/icons/technologies/typescript.png"],
  ["Vue.js", "/icons/technologies/vue.png"],
  ["WooCommerce", "/icons/technologies/woocommerce.png"],
  ["WordPress", "/icons/technologies/wordpress.png"],
  ["GitHub", "/icons/technologies/github.png"],
];

/* =========================================================
   CLIENT LOGOS
========================================================= */

const clients = [
  "/images/clients/client-01.png",
  "/images/clients/client-02.png",
  "/images/clients/client-03.png",
  "/images/clients/client-04.png",
  "/images/clients/client-05.png",
  "/images/clients/client-06.png",
  "/images/clients/client-07.png",
  "/images/clients/client-08.png",
];

/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    name: "Client Name",
    role: "Business Owner",
    image: "/images/testimonials/person-01.png",
    text: "JhaTech Solution understood our requirements clearly and delivered a professional digital solution for our business.",
  },
  {
    name: "Client Name",
    role: "Founder",
    image: "/images/testimonials/person-02.png.png",
    text: "The communication was clear throughout the project. The website was responsive, modern and easy to manage.",
  },
  {
    name: "Client Name",
    role: "Business Owner",
    image: "/images/testimonials/person-03.png",
    text: "We needed a solution that matched our business requirements, and the team worked closely with us from planning to launch.",
  },
  {
    name: "Client Name",
    role: "Entrepreneur",
    image: "/images/testimonials/person-04.png",
    text: "The development process was structured and the final product gave our business a much stronger online presence.",
  },
  {
    name: "Client Name",
    role: "Company Director",
    image: "/images/testimonials/person-05.png",
    text: "The team helped us turn our idea into a practical digital product with a clean user experience.",
  },
  {
    name: "Client Name",
    role: "Founder",
    image: "/images/testimonials/person-06.png",
    text: "Professional work, good communication and attention to the requirements made the overall experience smooth.",
  },
];

/* =========================================================
   TECHNOLOGY SLIDER
========================================================= */

export function TechnologySlider() {
  return (
    <div className="overflow-hidden">
      <div className="technology-track flex w-max gap-4">
        {[...technologies, ...technologies].map(([name, icon], index) => (
          <div
            key={`${name}-${index}`}
            className="flex h-[92px] w-[155px] shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 shadow-[0_6px_25px_rgba(15,23,42,0.04)]"
          >
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src={icon}
                alt={`${name} technology`}
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>

            <span className="text-sm font-semibold text-slate-700">
              {name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .technology-track {
          animation: technologyMove 70s linear infinite;
        }

        .technology-track:hover {
          animation-play-state: paused;
        }

        @keyframes technologyMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .technology-track {
            animation-duration: 50s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .technology-track {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   CLIENT LOGO SLIDER
========================================================= */

export function ClientLogoSlider() {
  return (
    <div className="overflow-hidden">
      <div className="client-track flex w-max items-center gap-5">
        {[...clients, ...clients].map((client, index) => (
          <div
            key={`${client}-${index}`}
            className="flex h-[100px] w-[190px] shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-7"
          >
            <div className="relative h-14 w-full">
              <Image
                src={client}
                alt={`JhaTech Solution client ${index + 1}`}
                fill
                sizes="190px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .client-track {
          animation: clientMove 45s linear infinite;
        }

        .client-track:hover {
          animation-play-state: paused;
        }

        @keyframes clientMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .client-track {
            animation-duration: 32s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .client-track {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   TESTIMONIAL SLIDER
========================================================= */

export function TestimonialsSlider() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile screen */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  /* Auto slide */
  useEffect(() => {
    const totalSlides = isMobile ? testimonials.length : 2;

    setActive((current) => {
      if (current >= totalSlides) {
        return 0;
      }

      return current;
    });

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [isMobile]);

  return (
    <div>
      {/* =====================================================
          MOBILE
          ONE CARD AT A TIME
      ====================================================== */}

      <div className="overflow-hidden md:hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${active * 100}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.text}
              className="min-w-full px-0.5"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          DESKTOP
          THREE CARDS AT A TIME
      ====================================================== */}

      <div className="hidden overflow-hidden md:block">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${active * 100}%)`,
          }}
        >
          {/* First 3 testimonials */}
          <div className="grid min-w-full grid-cols-2 gap-5 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.text}
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Next 3 testimonials */}
          <div className="grid min-w-full grid-cols-2 gap-5 lg:grid-cols-3">
            {testimonials.slice(3, 6).map((testimonial) => (
              <TestimonialCard
                key={testimonial.text}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          SLIDER DOTS
      ====================================================== */}

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({
          length: isMobile ? testimonials.length : 2,
        }).map((_, dot) => (
          <button
            key={dot}
            type="button"
            onClick={() => setActive(dot)}
            aria-label={
              isMobile
                ? `Show testimonial ${dot + 1}`
                : `Show testimonial group ${dot + 1}`
            }
            className={`h-2 rounded-full transition-all duration-500 ${
              active === dot
                ? "w-7 bg-violet-600"
                : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({
  testimonial,
}: {
  testimonial: {
    name: string;
    role: string;
    image: string;
    text: string;
  };
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.04)]">
      {/* Rating */}
      <div className="text-sm tracking-[2px] text-violet-600">
        ★★★★★
      </div>

      {/* Testimonial */}
      <p className="mt-5 min-h-[105px] text-[15px] leading-7 text-slate-600">
        “{testimonial.text}”
      </p>

      {/* Client */}
      <div className="mt-7 flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-full bg-slate-100">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">
            {testimonial.name}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}