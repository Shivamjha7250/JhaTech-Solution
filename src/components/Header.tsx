"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Web Solutions",
    items: [
      ["Website Development", "/services/website-development"],
      ["Web Applications", "/services/web-applications"],
      ["E-Commerce Development", "/services/ecommerce"],
    ],
  },
  {
    title: "Mobile Solutions",
    items: [
      ["Android App Development", "/services/android-development"],
      ["iOS App Development", "/services/ios-development"],
      ["Cross-Platform Apps", "/services/cross-platform-apps"],
    ],
  },
  {
    title: "Software Solutions",
    items: [
      ["Custom Software", "/services/custom-software"],
      ["Bug Fixing", "/services/bug-fixing"],
      ["Software Maintenance", "/services/maintenance"],
    ],
  },
  {
    title: "Technology Solutions",
    items: [
      ["AI Integration", "/services/ai"],
      ["Cloud Solutions", "/services/cloud"],
      ["SEO & Digital Solutions", "/services/seo"],
    ],
  },
];

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /* Close mobile menu when page changes */
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith("/services");

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* ========================= */}
      {/* HEADER                    */}
      {/* ========================= */}

      <header className="fixed left-0 right-0 top-0 z-[999]">
        <div
          className="
            flex h-[78px] w-full items-center
            border-b border-white/[0.08]
            bg-[#09090b]/95
            px-4
            shadow-[0_10px_45px_rgba(0,0,0,0.30)]
            backdrop-blur-2xl
            sm:px-6
            lg:px-10
          "
        >
          {/* ========================= */}
          {/* LOGO                       */}
          {/* ========================= */}

          <Link
            href="/"
            aria-label="JhaTech Solution Home"
            onClick={closeMenu}
            className="group flex h-full shrink-0 items-center"
          >
            <Image
              src="/logo/jhatech-logo.png"
              alt="JhaTech Solution"
              width={210}
              height={85}
              priority
              className="
                h-[58px]
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-[1.03]
                sm:h-[64px]
                lg:h-[70px]
              "
            />
          </Link>

          {/* ========================= */}
          {/* DESKTOP NAVIGATION        */}
          {/* ========================= */}

          <nav className="ml-auto hidden items-center lg:flex">
            {/* HOME */}
            <NavLink
              href="/"
              label="Home"
              pathname={pathname}
            />

            {/* ABOUT */}
            <NavLink
              href="/about"
              label="About"
              pathname={pathname}
            />

            {/* ========================= */}
            {/* SERVICES                  */}
            {/* ========================= */}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  px-5
                  py-3
                  text-[15px]
                  font-medium
                  transition-all
                  duration-200
                  ${
                    isServicesActive
                      ? "text-white"
                      : "text-zinc-300 hover:text-white"
                  }
                `}
              >
                Services

                <svg
                  className={`
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-200
                    ${servicesOpen ? "rotate-180" : ""}
                  `}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`
                    absolute
                    bottom-1.5
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-violet-500
                    to-indigo-400
                    transition-all
                    duration-300
                    ${
                      isServicesActive
                        ? "w-6"
                        : "w-0 group-hover:w-5"
                    }
                  `}
                />
              </button>

              {/* ========================= */}
              {/* DESKTOP SERVICES MENU     */}
              {/* ========================= */}

              {servicesOpen && (
                <div className="absolute right-[-300px] top-full w-[1050px] pt-4">
                  <div
                    className="
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/[0.08]
                      bg-[#0d0d10]/98
                      p-5
                      shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                      backdrop-blur-2xl
                    "
                  >
                    <div className="grid grid-cols-4 gap-3">
                      {services.map((group) => (
                        <div
                          key={group.title}
                          className="
                            rounded-xl
                            border
                            border-white/[0.06]
                            bg-white/[0.025]
                            p-5
                            transition-all
                            duration-300
                            hover:border-violet-500/20
                            hover:bg-white/[0.04]
                          "
                        >
                          <h4 className="mb-4 text-[15px] font-semibold text-white">
                            {group.title}
                          </h4>

                          <div className="space-y-1">
                            {group.items.map(([name, href]) => (
                              <Link
                                key={href}
                                href={href}
                                onClick={closeMenu}
                                className="
                                  group/item
                                  flex
                                  items-center
                                  justify-between
                                  rounded-lg
                                  px-2
                                  py-3
                                  text-sm
                                  text-zinc-400
                                  transition-all
                                  duration-200
                                  hover:bg-violet-500/[0.08]
                                  hover:text-white
                                "
                              >
                                <span>{name}</span>

                                <svg
                                  className="
                                    h-3.5
                                    w-3.5
                                    -translate-x-1
                                    text-violet-400
                                    opacity-0
                                    transition-all
                                    duration-200
                                    group-hover/item:translate-x-0
                                    group-hover/item:opacity-100
                                  "
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M4 10H15M11 6L15 10L11 14"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CONTACT */}
            <NavLink
              href="/contact"
              label="Contact"
              pathname={pathname}
            />
          </nav>

          {/* ========================= */}
          {/* DESKTOP RIGHT SIDE        */}
          {/* ========================= */}

          <div className="ml-5 hidden items-center gap-3 lg:flex">
            {/* WHATSAPP */}

            <a
              href="https://wa.me/917061598544"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with JhaTech Solution on WhatsApp"
              className="
                group
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-green-500/20
                bg-green-500/[0.08]
                transition-all
                duration-300
                hover:scale-105
                hover:border-green-400/40
                hover:bg-green-500/[0.15]
              "
            >
              <Image
                src="/icons/social/whatsapp.png"
                alt="WhatsApp"
                width={23}
                height={23}
                className="
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </a>

            {/* LET'S TALK */}

            <Link
              href="/contact"
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_30px_rgba(124,58,237,0.25)]
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-violet-600
                  via-purple-600
                  to-indigo-600
                "
              />

              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-violet-500
                  via-fuchsia-500
                  to-indigo-500
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <span className="relative flex items-center gap-2">
                Let's Talk

                <svg
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4 10H15M11 6L15 10L11 14"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* ========================= */}
          {/* MOBILE HAMBURGER          */}
          {/* ========================= */}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setServicesOpen(false);
            }}
            className="
              ml-auto
              flex
              h-11
              w-11
              shrink-0
              flex-col
              items-center
              justify-center
              gap-[5px]
              rounded-xl
              border
              border-white/[0.12]
              bg-white/[0.04]
              transition-all
              duration-200
              hover:bg-white/[0.08]
              lg:hidden
            "
          >
            <span
              className={`
                block
                h-[2px]
                w-5
                rounded-full
                bg-white
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "translate-y-[7px] rotate-45"
                    : ""
                }
              `}
            />

            <span
              className={`
                block
                h-[2px]
                w-5
                rounded-full
                bg-white
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "scale-0 opacity-0"
                    : "scale-100 opacity-100"
                }
              `}
            />

            <span
              className={`
                block
                h-[2px]
                w-5
                rounded-full
                bg-white
                transition-all
                duration-300
                ${
                  menuOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                }
              `}
            />
          </button>
        </div>

        {/* ========================= */}
        {/* MOBILE MENU                */}
        {/* ========================= */}

        <div
          className={`
            overflow-hidden
            border-b
            border-white/[0.08]
            bg-[#09090b]/98
            shadow-[0_25px_80px_rgba(0,0,0,0.55)]
            backdrop-blur-2xl
            transition-all
            duration-300
            lg:hidden
            ${
              menuOpen
                ? "max-h-[calc(100vh-78px)] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <nav className="max-h-[calc(100vh-78px)] overflow-y-auto p-4">
            {/* HOME */}

            <MobileLink
              href="/"
              label="Home"
              pathname={pathname}
              onClick={closeMenu}
            />

            {/* ABOUT */}

            <MobileLink
              href="/about"
              label="About Us"
              pathname={pathname}
              onClick={closeMenu}
            />

            {/* ========================= */}
            {/* MOBILE SERVICES            */}
            {/* ========================= */}

            <div className="border-b border-white/[0.06]">
              <button
                type="button"
                onClick={() =>
                  setServicesOpen((prev) => !prev)
                }
                className={`
                  relative
                  flex
                  w-full
                  items-center
                  justify-between
                  px-4
                  py-4
                  text-left
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    isServicesActive
                      ? "text-white"
                      : "text-zinc-200"
                  }
                `}
              >
                <span>Services</span>

                <svg
                  className={`
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    ${
                      servicesOpen
                        ? "rotate-180 text-violet-400"
                        : "text-zinc-500"
                    }
                  `}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* MOBILE ACTIVE UNDERLINE */}

                {isServicesActive && (
                  <span
                    className="
                      absolute
                      bottom-0
                      left-4
                      h-[2px]
                      w-7
                      rounded-full
                      bg-gradient-to-r
                      from-violet-500
                      to-indigo-400
                    "
                  />
                )}
              </button>

              {/* MOBILE SERVICE LIST */}

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    servicesOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="mb-3 rounded-xl bg-white/[0.03] p-2">
                  {services.map((group) => (
                    <div key={group.title} className="mb-3 last:mb-0">
                      <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-violet-400">
                        {group.title}
                      </p>

                      {group.items.map(([name, href]) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={closeMenu}
                          className={`
                            block
                            rounded-lg
                            px-3
                            py-3
                            text-sm
                            transition-all
                            ${
                              pathname === href
                                ? "bg-violet-500/[0.10] text-white"
                                : "text-zinc-400 hover:bg-violet-500/[0.08] hover:text-white"
                            }
                          `}
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CONTACT */}

            <MobileLink
              href="/contact"
              label="Contact"
              pathname={pathname}
              onClick={closeMenu}
            />

            {/* ========================= */}
            {/* MOBILE ACTIONS             */}
            {/* ========================= */}

            <div className="mt-4 flex gap-2">
              <a
                href="https://wa.me/917061598544"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-green-500/20
                  bg-green-500/[0.08]
                "
              >
                <Image
                  src="/icons/social/whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
              </a>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-indigo-600
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Start Your Project
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* HEADER SPACE */}

      <div className="h-[78px]" />
    </>
  );
}

/* ================================= */
/* DESKTOP NAV LINK                  */
/* ================================= */

function NavLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const isHome = href === "/" && pathname === "/";
  const isActive =
    href !== "/" && pathname.startsWith(href);

  const active = isHome || isActive;

  return (
    <Link
      href={href}
      className={`
        group
        relative
        rounded-xl
        px-5
        py-3
        text-[15px]
        font-medium
        transition-all
        duration-200
        ${
          active
            ? "text-white"
            : "text-zinc-300 hover:text-white"
        }
      `}
    >
      {label}

      {/* ACTIVE UNDERLINE */}

      <span
        className={`
          absolute
          bottom-1.5
          left-1/2
          h-[2px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-violet-500
          to-indigo-400
          transition-all
          duration-300
          ${
            active
              ? "w-6"
              : "w-0 group-hover:w-5"
          }
        `}
      />
    </Link>
  );
}

/* ================================= */
/* MOBILE NAV LINK                   */
/* ================================= */

function MobileLink({
  href,
  label,
  pathname,
  onClick,
}: {
  href: string;
  label: string;
  pathname: string;
  onClick: () => void;
}) {
  const isHome = href === "/" && pathname === "/";
  const isActive =
    href !== "/" && pathname.startsWith(href);

  const active = isHome || isActive;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative
        flex
        items-center
        justify-between
        border-b
        border-white/[0.06]
        px-4
        py-4
        text-sm
        font-medium
        transition-all
        ${
          active
            ? "text-white"
            : "text-zinc-200 hover:text-white"
        }
      `}
    >
      <span>{label}</span>

      {/* ACTIVE MOBILE UNDERLINE */}

      {active && (
        <span
          className="
            absolute
            bottom-0
            left-4
            h-[2px]
            w-7
            rounded-full
            bg-gradient-to-r
            from-violet-500
            to-indigo-400
          "
        />
      )}

      <svg
        className={`
          h-4
          w-4
          ${
            active
              ? "text-violet-400"
              : "text-zinc-600"
          }
        `}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M7 4L13 10L7 16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}