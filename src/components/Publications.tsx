"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const publications = [
  {
    title:
      "Building a Web 3.0 Blockchain Application Using Smart Contracts, Solidity, and Crypto",
    journal:
      "International Journal of Scientific Development and Research (IJSDR)",
    date: "July 2023",
  },
  {
    title: "Blockchain and Distributed Ledger Technologies for Cybersecurity",
    journal:
      "International Journal of Scientific Development and Research (IJSDR)",
    date: "September 2023",
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="px-[5vw] py-24 border-t border-white/[0.07]"
    >
      {/* Section label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        className="text-[11px] font-semibold tracking-[2px] text-accent uppercase mb-3"
      >
        Research
      </motion.p>

      {/* Section title */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.1}
        className="font-head text-[clamp(28px,4vw,42px)] font-bold tracking-[-1px] text-text1 mb-3 leading-[1.1]"
      >
        Academic Publications
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.2}
        className="text-text2 text-[16px] font-light mb-12 max-w-[500px]"
      >
        Peer-reviewed research published in IJSDR — a rare credential for a
        software engineering portfolio.
      </motion.p>

      {/* Publication cards */}
      <div className="flex flex-col gap-4">
        {publications.map((pub, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1 * (i + 3)}
            className="bg-bg1 border border-white/[0.07] rounded-xl px-7 py-6 flex flex-col sm:flex-row justify-between items-start gap-5 hover:border-white/[0.14] transition-colors duration-200"
          >
            {/* Left — title and journal */}
            <div>
              <p className="text-text1 text-[15px] font-medium leading-[1.4] mb-2">
                {pub.title}
              </p>
              <p className="text-text3 text-[12px]">
                {pub.journal} · {pub.date}
              </p>
            </div>

            {/* Right — badge */}
            <div className="flex-shrink-0">
              <span className="bg-[#7C3AED]/10 border border-[#7C3AED]/25 text-[#A78BFA] px-3 py-1 rounded text-[11px] font-semibold tracking-wide whitespace-nowrap">
                IJSDR · {pub.date.split(" ")[1]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
