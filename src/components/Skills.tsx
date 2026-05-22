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

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "HTML / CSS"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Node.js", "Flask / Django", "Angular", "React Native"],
  },
  {
    label: "Cloud",
    skills: ["AWS EC2", "Google Cloud Platform", "Vercel", "Firebase"],
  },
  {
    label: "Databases",
    skills: ["MySQL", "MongoDB", "SQLite", "Cloud SQL"],
  },
  {
    label: "Tools & DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "Git / GitHub",
      "CI/CD Pipelines",
      "Gemini 2.0 API",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
        Skills
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
        Technical Stack
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.2}
        className="text-text2 text-[16px] font-light mb-12 max-w-[500px]"
      >
        Tools I use to build and ship production software.
      </motion.p>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1 * (i + 3)}
            className="bg-bg1 border border-white/[0.07] rounded-xl px-6 py-5 hover:border-white/[0.14] transition-colors duration-200"
          >
            {/* Group label */}
            <p className="text-[11px] font-semibold tracking-[1.5px] text-accent uppercase mb-4">
              {group.label}
            </p>

            {/* Skill items */}
            <ul className="flex flex-col gap-2 list-none">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-[13px] text-text2 font-light"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-white/[0.14] flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
