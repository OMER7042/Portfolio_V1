"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] h-16 transition-all duration-300 ${
        scrolled
          ? "bg-[#080B10]/90 backdrop-blur-md border-b border-white/[0.07]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="font-head text-[18px] font-bold text-[#E6EDF3] tracking-tight no-underline hover:opacity-80 transition-opacity"
      >
        omer<span className="text-[#4F8EF7]">.</span>dev
      </a>
      {/* <Link
        href="/"
        className="font-head text-[18px] font-bold text-text1 tracking-tight no-underline"
      >
        omer<span className="text-accent">.</span>dev
      </Link> */}

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {[
          "About",
          "Experience",
          "Projects",
          "Skills",
          "Publications",
          "Contact",
        ].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-text2 text-[13px] font-medium tracking-wide no-underline hover:text-text1 transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="#contact"
        className="bg-accent text-white text-[13px] font-medium px-[18px] py-2 rounded-md no-underline hover:opacity-85 transition-opacity duration-200"
      >
        Hire Me
      </a>
    </nav>
  );
}
