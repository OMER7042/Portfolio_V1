"use client";

// import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

// Variants type tells TypeScript exactly what shape this object should be
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-[5vw] pt-24 pb-20 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(79,142,247,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,142,247,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow behind headline */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,142,247,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-accent text-[12px] font-semibold tracking-wide border border-accent/25 bg-accent/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3FB950] animate-pulse" />
          Open to SWE / Full-Stack roles · Dec 2025
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          // className="font-head text-[clamp(38px,6vw,68px)] font-extrabold leading-[1.05] tracking-[-2px] text-text1 mb-6"
          className="font-head text-[clamp(34px,4vw,52px)] font-extrabold leading-[1.05] tracking-[-2px] text-text1 mb-6"
        >
          Full-Stack Engineer
          <br />
          <span className="text-text2 font-extrabold">who ships </span>
          <span className="text-accent">AI-powered</span>
          <br />
          cloud applications.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="text-[17px] text-text2 max-w-[520px] leading-[1.65] mb-10 font-light"
        >
          I build and deploy production-grade web applications with real users,
          real metrics, and real AI — integrating Gemini 2.0 across multiple
          projects on AWS and GCP.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="flex gap-3 flex-wrap"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent text-white text-[14px] font-medium px-6 py-3 rounded-lg no-underline hover:opacity-85 transition-opacity"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-text2 text-[14px] font-medium px-6 py-3 rounded-lg no-underline border border-white/[0.14] hover:text-text1 hover:border-white/25 transition-all"
          >
            Let's Connect
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text2 text-[14px] font-medium px-6 py-3 rounded-lg no-underline border border-white/[0.14] hover:text-text1 hover:border-white/25 transition-all"
          >
            Resume
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="flex gap-10 mt-14 flex-wrap"
        >
          {[
            { num: "50+", label: "Daily Active Users" },
            { num: "99.5%", label: "Production Uptime" },
            { num: "2×", label: "Gemini AI Projects" },
            { num: "2×", label: "Published in IJSDR" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-head text-[28px] font-bold text-text1 tracking-tight leading-none">
                {stat.num}
              </div>
              <div className="text-[12px] text-text3 tracking-wide mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
