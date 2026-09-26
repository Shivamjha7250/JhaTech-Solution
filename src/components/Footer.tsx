import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Website Development", href: "/services/website-development" },
  { name: "Web Applications", href: "/services/web-applications" },
  { name: "E-Commerce Development", href: "/services/ecommerce" },
  { name: "Android App Development", href: "/services/android-development" },
  { name: "iOS App Development", href: "/services/ios-development" },
  { name: "Cross-Platform Apps", href: "/services/cross-platform-apps" },
  { name: "Custom Software", href: "/services/custom-software" },
  { name: "Bug Fixing", href: "/services/bug-fixing" },
  { name: "Software Maintenance", href: "/services/maintenance" },
  { name: "AI Integration", href: "/services/ai" },
  { name: "Cloud Solutions", href: "/services/cloud" },
  { name: "SEO & Digital Solutions", href: "/services/seo" },
];

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
 
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/jhatechsolution/",
    icon: "/icons/social/instagram.png",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: "/icons/social/linkedin.png",
  },
  {
    name: "Facebook",
    href: "#",
    icon: "/icons/social/facebook.png",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/917061598544",
    icon: "/icons/social/whatsapp.png",
  },
  {
    name: "YouTube",
    href: "#",
    icon: "/icons/social/youtube.png",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#151515] font-sans text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[400px] w-[400px] rounded-full bg-violet-600/[0.06] blur-[120px]" />

      {/* =====================================================
          SMALL CTA
      ====================================================== */}

   
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-12">

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.35fr_2fr_0.85fr_1.15fr] lg:gap-10">

          {/* =================================================
              BRAND
          ================================================== */}

          <div>

            <Link href="/" aria-label="JhaTech Solution Home">
              <Image
                src="/logo/jhatech-logo.png"
                alt="JhaTech Solution"
                width={150}
                height={70}
                className="h-auto w-[105px]"
              />
            </Link>

            <p className="mt-4 max-w-sm text-[13px] leading-6 text-slate-400">
              JhaTech Solution helps businesses build websites, mobile apps,
              custom software, e-commerce platforms and modern digital
              solutions.
            </p>

            {/* Availability */}

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/[0.05] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[11px] text-slate-400">
                Available for new projects
              </span>
            </div>

            {/* Social */}

            <div className="mt-5 flex items-center gap-2">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] transition hover:border-violet-500/30 hover:bg-violet-500/10"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={17}
                    height={17}
                    className="h-[17px] w-[17px] object-contain"
                  />
                </a>
              ))}

            </div>

          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div className="lg:col-span-1">

            <h3 className="text-[13px] font-semibold text-white">
              Services
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-2">

              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block text-[13px] text-slate-400 transition-colors hover:text-violet-400"
                >
                  {service.name}
                </Link>
              ))}

            </div>

          </div>

          {/* =================================================
              COMPANY
          ================================================== */}

          <div>

            <h3 className="text-[13px] font-semibold text-white">
              Company
            </h3>

            <div className="mt-4 space-y-2.5">

              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-[13px] text-slate-400 transition-colors hover:text-violet-400"
                >
                  {link.name}
                </Link>
              ))}

            </div>

            <div className="mt-5 border-t border-white/[0.06] pt-4">

              <p className="text-[10px] uppercase tracking-[0.15em] text-slate-600">
                Legal
              </p>

              <div className="mt-2.5 space-y-2">

                <Link
                  href="/privacy-policy"
                  className="block text-[13px] text-slate-400 hover:text-violet-400"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="block text-[13px] text-slate-400 hover:text-violet-400"
                >
                  Terms & Conditions
                </Link>

              </div>

            </div>

          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <h3 className="text-[13px] font-semibold text-white">
              Get In Touch
            </h3>

            <div className="mt-4 space-y-4">

              {/* Phone */}

              <a
                href="tel:+917061598544"
                className="group flex items-center gap-2.5"
              >

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                  <Image
                    src="/icons/contact/phone.png"
                    alt="Phone"
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain"
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-600">
                    Phone
                  </p>

                  <p className="mt-0.5 text-[13px] text-slate-300 group-hover:text-violet-400">
                    +91 70615 98544
                  </p>
                </div>

              </a>

              {/* Email */}

              <a
                href="mailto:info.jhatechsolution@gmail.com"
                className="group flex items-center gap-2.5"
              >

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                  <Image
                    src="/icons/contact/email.png"
                    alt="Email"
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain"
                  />
                </div>

                <div className="min-w-0">

                  <p className="text-[10px] uppercase tracking-wider text-slate-600">
                    Email
                  </p>

                  <p className="mt-0.5 break-all text-[13px] text-slate-300 group-hover:text-violet-400">
                    info.jhatechsolution@gmail.com
                  </p>

                </div>

              </a>

              {/* Location */}

              <div className="flex items-center gap-2.5">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                  <Image
                    src="/icons/contact/location.png"
                    alt="Location"
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain"
                  />
                </div>

                <div>

                  <p className="text-[10px] uppercase tracking-wider text-slate-600">
                    Location
                  </p>

                  <p className="mt-0.5 text-[13px] text-slate-300">
                    Mumbai, Maharashtra, India
                  </p>

                </div>

              </div>

            </div>

            {/* WhatsApp */}

            <a
              href="https://wa.me/917061598544"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-violet-500 sm:w-auto"
            >
              <Image
                src="/icons/social/whatsapp.png"
                alt="WhatsApp"
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />

              Chat on WhatsApp
            </a>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="border-t border-white/[0.07]">

        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

          <p className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} JhaTech Solution. All rights reserved.
          </p>

          <p className="text-[11px] text-slate-600">
            Web • Apps • Software • AI • Cloud
          </p>

        </div>

      </div>

    </footer>
  );
}