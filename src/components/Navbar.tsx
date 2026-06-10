"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Publications",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.toLowerCase());
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // close menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
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

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={"#" + item.toLowerCase()}
                className={`text-[13px] font-medium tracking-wide no-underline transition-colors duration-200 ${
                  active === item.toLowerCase()
                    ? "text-[#E6EDF3]"
                    : "text-[#8B949E] hover:text-[#E6EDF3]"
                }`}
              >
                {item}
                {active === item.toLowerCase() && (
                  <span className="block mx-auto mt-[3px] w-1 h-1 rounded-full bg-[#4F8EF7]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-[#4F8EF7] text-white text-[13px] font-medium px-[18px] py-2 rounded-md no-underline hover:opacity-85 transition-opacity duration-200"
        >
          Hire Me
        </a>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[2px] bg-[#E6EDF3] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#E6EDF3] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#E6EDF3] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0D1117]/95 backdrop-blur-md border-b border-white/[0.07] md:hidden"
          >
            <ul className="flex flex-col list-none px-[5vw] py-6 gap-1">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={"#" + item.toLowerCase()}
                    onClick={handleLinkClick}
                    className={`block py-3 text-[15px] font-medium no-underline transition-colors duration-200 border-b border-white/[0.05] ${
                      active === item.toLowerCase()
                        ? "text-[#E6EDF3]"
                        : "text-[#8B949E]"
                    }`}
                  >
                    {item}
                    {active === item.toLowerCase() && (
                      <span className="inline-block ml-2 w-1.5 h-1.5 rounded-full bg-[#4F8EF7] mb-[2px]" />
                    )}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="inline-block bg-[#4F8EF7] text-white text-[14px] font-medium px-6 py-3 rounded-lg no-underline hover:opacity-85 transition-opacity w-full text-center"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
