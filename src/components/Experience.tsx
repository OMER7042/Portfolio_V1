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

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Aryagami Cloud Services · Hyderabad, IN",
    date: "May 2024 – Aug 2024",
    bullets: [
      "Built UI features with <strong>Angular 15 + TypeScript</strong>, applying lazy loading and routing optimizations that reduced page load time by <strong>25%</strong> and boosted user task completion by <strong>30%</strong>.",
      "Integrated <strong>10+ backend API endpoints</strong> using Flask and SQLite, supporting data operations for over <strong>1,000 user records</strong>.",
      "Contributed to <strong>3 weekly feature rollouts</strong> using Agile methodology, collaborating with UI/UX and backend teams.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Aryagami Cloud Services · Hyderabad, IN",
    date: "May 2022 – Aug 2022",
    bullets: [
      "Built and deployed a <strong>Service Launch Manager</strong> (Bootstrap + Django) for 10+ microservices in a telecom SaaS environment, reducing deployment complexity by <strong>40%</strong>.",
      "Containerized services using <strong>Docker + Kubernetes</strong>, achieving over <strong>99.9% deployment success rate</strong> in staging.",
      "Deployed microservices for BSS within the <strong>MVNE SaaS architecture</strong>, improving deployment modularity.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
        Experience
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
        Where I&apos;ve Built
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.2}
        className="text-text2 text-[16px] font-light mb-12 max-w-[500px]"
      >
        Two SWE internships at Aryagami Cloud Services, contributing to
        production microservices and real-world deployments.
      </motion.p>

      {/* Experience cards */}
      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1 * (i + 3)}
            className="border border-white/[0.07] rounded-xl px-8 py-7 hover:border-white/[0.14] transition-colors duration-200"
          >
            {/* Card header */}
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <h3 className="font-head text-[18px] font-bold text-text1 tracking-[-0.5px]">
                {exp.role}
              </h3>
              <span className="text-[12px] text-text3 font-medium bg-bg2 px-3 py-1 rounded">
                {exp.date}
              </span>
            </div>

            {/* Company */}
            <p className="text-accent text-[14px] font-medium mb-4">
              {exp.company}
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-2">
              {exp.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="text-[14px] text-text2 font-light leading-[1.6] pl-4 relative"
                >
                  <span className="absolute left-0 top-[10px] w-1 h-1 rounded-full bg-accent/60" />
                  <span dangerouslySetInnerHTML={{ __html: bullet }} />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
