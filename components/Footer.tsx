import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* COMPANY INFO */}
          <div>

            <h2 className="text-3xl font-extrabold leading-tight">
              <span className="text-white">Jha</span>
              <span className="text-blue-500">Tech</span>
            </h2>

            <h3 className="text-3xl font-extrabold text-blue-500 -mt-1">
              Solution
            </h3>

            <p className="text-zinc-400 mt-5 leading-7 text-sm">
              We create premium business websites,
              ecommerce platforms, SEO optimized solutions,
              custom web applications, and modern digital experiences
              for growing brands.
            </p>

          </div>

          {/* SERVICES */}
         <div>

  <h4 className="text-xl font-bold mb-5 text-white">
    Company
  </h4>

  <ul className="space-y-3 text-zinc-400">

    <li className="hover:text-blue-500 transition cursor-pointer">
      <a href="/mission">
        Our Mission
      </a>
    </li>

    <li className="hover:text-blue-500 transition cursor-pointer">
      <a href="/vision">
        Our Vision
      </a>
    </li>

    <li className="hover:text-blue-500 transition cursor-pointer">
      <a href="/family">
        Our Family
      </a>
    </li>

    <li className="hover:text-blue-500 transition cursor-pointer">
      <a href="/careers">
        Careers
      </a>
    </li>

    <li className="hover:text-blue-500 transition cursor-pointer">
      <a href="https://jhatechsolution.blogspot.com">
        Blog
      </a>
    </li>

  </ul>

</div>

          {/* QUICK LINKS */}
          <div>

            <h4 className="text-xl font-bold mb-5 text-white">
              Quick Links
            </h4>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <a
                  href="/"
                  className="hover:text-blue-500 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="hover:text-blue-500 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="hover:text-blue-500 transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/portfolio"
                  className="hover:text-blue-500 transition"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-500 transition"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* CONTACT INFO */}
          <div>

            <h4 className="text-xl font-bold mb-5 text-white">
              Contact Info
            </h4>

            <div className="space-y-5 text-zinc-400 text-sm">

              {/* EMAIL */}
              <div className="flex items-start gap-3">

                <div className="bg-zinc-900 p-3 rounded-xl text-blue-500 text-lg">
                  <FaEnvelope />
                </div>

                <div>

                  <p className="text-zinc-500 text-xs uppercase tracking-wider">
                    Email
                  </p>

                  <a
                    href="mailto:back2tocampus@gmail.com"
                    className="text-white hover:text-blue-500 transition"
                  >
                    back2tocampus@gmail.com
                  </a>

                </div>

              </div>

              {/* INSTAGRAM */}
              <div className="flex items-start gap-3">

                <div className="bg-zinc-900 p-3 rounded-xl text-pink-500 text-lg">
                  <FaInstagram />
                </div>

                <div>

                  <p className="text-zinc-500 text-xs uppercase tracking-wider">
                    Instagram
                  </p>

                  <a
                    href="https://www.instagram.com/jhatechsolution"
                    target="_blank"
                    className="text-white hover:text-pink-500 transition"
                  >
                    @jhatechsolution
                  </a>

                </div>

              </div>

              {/* LINKEDIN */}
              <div className="flex items-start gap-3">

                <div className="bg-zinc-900 p-3 rounded-xl text-blue-400 text-lg">
                  <FaLinkedin />
                </div>

                <div>

                  <p className="text-zinc-500 text-xs uppercase tracking-wider">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/company/jhatech-solution/"
                    target="_blank"
                    className="text-white hover:text-blue-400 transition"
                  >
                    JhaTech Solution
                  </a>

                </div>

              </div>

              {/* GOOGLE BUSINESS */}
              <div className="flex items-start gap-3">

                <div className="bg-zinc-900 p-3 rounded-xl text-red-500 text-lg">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <p className="text-zinc-500 text-xs uppercase tracking-wider">
                    Google Business
                  </p>

                  <a
                    href="https://maps.app.goo.gl/BnKDH1UmVzVJsvNA7"
                    target="_blank"
                    className="text-white hover:text-red-500 transition"
                  >
                    View Business Profile
                  </a>

                </div>

              </div>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/917061598544"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 transition px-6 py-4 rounded-2xl text-white font-semibold shadow-lg shadow-blue-500/20 mt-6"
              >

                <FaWhatsapp className="text-xl" />

                Chat on WhatsApp

              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
       <div className="border-t border-zinc-800 mt-12 pt-6 flex items-center justify-center gap-4 text-sm text-center flex-wrap">

  <p className="font-medium text-white">

    © 2026{" "}

    <span className="text-blue-500 font-semibold">
      JhaTech Solution
    </span>

    . All Rights Reserved.

  </p>

  <span className="text-zinc-700">
    |
  </span>

  <div className="flex items-center gap-3 text-zinc-500">

    <span>
      Privacy Policy
    </span>

    <span className="text-zinc-700">
      |
    </span>

    <span>
      Terms & Conditions
    </span>

  </div>

</div>

      </div>

    </footer>
  );
}