"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  return (
    <section
      id="contact"
      className="px-[5vw] py-24 border-t border-white/[0.07]"
    >
      {/* Centered container */}
      <div className="max-w-[560px] mx-auto text-center">
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
          className="text-[11px] font-semibold tracking-[2px] text-accent uppercase mb-3"
        >
          Contact
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
          className="font-head text-[clamp(28px,4vw,42px)] font-bold tracking-[-1px] text-text1 mb-4 leading-[1.1]"
        >
          Let&apos;s Build Something
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.2}
          className="text-text2 text-[15px] font-light leading-[1.7]"
        >
          I&apos;m actively looking for full-stack and software engineering
          roles starting December 2025. If you&apos;re hiring, let&apos;s talk.
        </motion.p>

        {/* Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.3}
          className="relative bg-bg1 border border-white/[0.07] rounded-2xl px-10 py-12 mt-10 overflow-hidden"
        >
          {/* Glow effect inside card */}
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-[300px] h-[200px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(79,142,247,0.07) 0%, transparent 70%)",
            }}
          />

          {/* Email */}
          {/* <p className="font-head text-[20px] font-bold text-text1 mb-2 relative">
            mdomer.9030@gmail.com
          </p> */}
          <div className="flex items-center justify-center gap-3 mb-2 relative">
            <p className="font-head text-[20px] font-bold text-[#E6EDF3]">
              mdomer.9030@gmail.com
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText("mdomer.9030@gmail.com");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-[12px] text-[#8B949E] border border-white/[0.07] px-3 py-1 rounded-md hover:text-[#E6EDF3] hover:border-white/[0.14] transition-all cursor-pointer bg-transparent"
            >
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <p className="text-text3 text-[14px] mb-8 relative">
            Response within 24 hours · Open to Remote, Hybrid, or On-site roles
            · Willing to Relocate
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:mdomer.9030@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-white text-[14px] font-medium px-8 py-3 rounded-lg no-underline hover:opacity-85 transition-opacity relative"
          >
            Send an Email →
          </a>

          {/* Secondary links */}
          <div className="flex justify-center gap-3 flex-wrap mt-6 relative">
            <a
              href="https://github.com/OMER7042"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text2 text-[13px] font-medium px-5 py-2 rounded-lg no-underline border border-white/[0.07] hover:text-text1 hover:border-white/[0.14] transition-all"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mohammed-omer-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text2 text-[13px] font-medium px-5 py-2 rounded-lg no-underline border border-white/[0.07] hover:text-text1 hover:border-white/[0.14] transition-all"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text2 text-[13px] font-medium px-5 py-2 rounded-lg no-underline border border-white/[0.07] hover:text-text1 hover:border-white/[0.14] transition-all"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
