"use client";

import { motion, Variants } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (delay: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as number[] },
//   }),
// }

// Variants type tells TypeScript exactly what shape this object should be
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="px-[5vw] py-24 border-t border-white/[0.07]">
      {/* Section label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0}
        className="text-[11px] font-semibold tracking-[2px] text-accent uppercase mb-3"
      >
        About
      </motion.p>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.05}
        className="font-head text-[42px] font-bold tracking-[-1.5px] text-[#E6EDF3] mb-12 leading-[1.1]"
      >
        Who I Am
      </motion.h2>

      {/* Two column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left — text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.1}
        >
          <p className="text-text2 leading-[1.8] mb-4 font-light">
            I&apos;m a{" "}
            <strong className="text-text1 font-medium">
              Full-Stack Software Engineer
            </strong>{" "}
            and CS Master&apos;s student at UT Arlington, graduating December
            2025. I build production-grade web applications — from React
            frontends and REST APIs to cloud deployments with real uptime
            guarantees.
          </p>
          <p className="text-text2 leading-[1.8] mb-4 font-light">
            What sets me apart is hands-on experience integrating{" "}
            <strong className="text-text1 font-medium">Gemini 2.0 AI</strong>{" "}
            into live applications — not as a gimmick, but as a core feature
            driving measurable user outcomes. I&apos;ve deployed on{" "}
            <strong className="text-text1 font-medium">
              AWS EC2, GCP, and Vercel
            </strong>{" "}
            with automated CI/CD pipelines.
          </p>
          <p className="text-text2 leading-[1.8] font-light">
            I&apos;ve completed two internships at Aryagami Cloud Services,
            contributed to 2 published academic papers, and I&apos;m actively
            pursuing Software Engineer and Full-Stack Developer roles.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "Full-Stack",
              "AI Integration",
              "Cloud Deployment",
              "React",
              "Node.js",
              "AWS · GCP",
              "Gemini 2.0",
              "TypeScript",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-bg2 border border-white/[0.07] text-text2 px-3 py-1 rounded-md text-[12px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — info cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.2}
          className="flex flex-col gap-4"
        >
          {[
            {
              label: "EDUCATION",
              value: "M.S. Computer Science",
              sub: "UT Arlington · Dec 2025",
            },
            {
              label: "LOCATION",
              value: "Arlington, TX",
              sub: "Open to Remote · Hybrid · On-site · Willing to Relocate",
            },
            {
              label: "GITHUB",
              value: "github.com/OMER7042",
              link: "https://github.com/OMER7042",
            },
            {
              label: "LINKEDIN",
              value: "linkedin.com/in/mohammed-omer-ahmed",
              link: "https://linkedin.com/in/mohammed-omer-ahmed",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-bg1 border border-white/[0.07] rounded-xl px-6 py-5"
            >
              <p className="text-[11px] text-text3 tracking-wide mb-1">
                {card.label}
              </p>
              {card.link ? (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-[15px] font-medium no-underline hover:opacity-80 transition-opacity"
                >
                  {card.value}
                </a>
              ) : (
                <div>
                  <p className="text-text1 text-[15px] font-medium">
                    {card.value}
                  </p>
                  {card.sub && (
                    <p className="text-text2 text-[13px] mt-0.5">{card.sub}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
