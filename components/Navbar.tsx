"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-zinc-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
        >
          <Image
            src="/logo.png"
            alt="JhaTech Solution"
            width={58}
            height={58}
            priority
            className="object-contain w-[52px] h-[52px] md:w-[58px] md:h-[58px]"
          />
          <div className="leading-none">
            <h1 className="text-[24px] md:text-[34px] font-black">
              <span className="text-white">Jha</span>
              <span className="text-blue-500">Tech</span>
            </h1>
            <h2 className="text-[22px] md:text-[32px] font-black text-blue-500 -mt-1">
              Solution
            </h2>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 text-[16px] font-medium text-white">
          <Link href="/" className="hover:text-blue-500 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition duration-300">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-500 transition duration-300">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-blue-500 transition duration-300">
            Portfolio
          </Link>
          <Link href="/projects" className="hover:text-blue-500 transition duration-300">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-500 transition duration-300">
            Contact
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* DESKTOP BUTTON */}
          <a
            href="https://wa.me/917061598544"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold text-[15px] transition duration-300 shadow-lg shadow-blue-500/20"
          >
            Free Consult
          </a>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="lg:hidden text-white bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl cursor-pointer active:scale-95 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* FIXED MOBILE MENU CONTAINER */}
      <div
        className={`lg:hidden w-full bg-black border-t border-zinc-900 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] py-6 opacity-100 visibility-visible" : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="px-6 flex flex-col gap-5 text-white text-[17px] font-medium">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition py-1"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition py-1"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition py-1"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition py-1"
          >
            Portfolio
          </Link>
          <Link
            href="/projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition py-1"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition py-1"
          >
            Contact
          </Link>

          {/* MOBILE BUTTON */}
          <a
            href="https://wa.me/917061598544"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white transition duration-300 text-center py-3.5 rounded-xl font-semibold text-sm shadow-md"
          >
            Free Consult
          </a>
        </div>
      </div>
    </nav>
  );
}