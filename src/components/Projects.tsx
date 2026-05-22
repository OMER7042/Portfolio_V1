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

const projects = [
  {
    num: "01",
    featured: true,
    title: "FitSync",
    tagline: "AI-Powered Health Platform · AWS · 50+ Daily Users",
    description:
      "A full-stack fitness platform with real-time workout tracking, personalized Gemini 2.0 AI recommendations, and live dashboard updates via Socket.IO. Deployed on AWS EC2 with a fully automated CI/CD pipeline.",
    metrics: [
      { label: "50+ Daily Users", green: true },
      { label: "99.5% Uptime", green: true },
      { label: "40% ↑ Engagement", green: true },
      { label: "Gemini 2.0", green: false },
      { label: "AWS EC2", green: false },
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "MySQL",
      "AWS EC2",
      "Gemini AI",
      "Chart.js",
    ],
    highlights: [
      {
        icon: "⚡",
        title: "Real-Time Updates",
        sub: "Socket.IO live sync + Chart.js progress dashboards",
      },
      {
        icon: "🤖",
        title: "Gemini 2.0 AI",
        sub: "Personalized workout & nutrition recommendations",
      },
      {
        icon: "☁️",
        title: "Cloud Deployed",
        sub: "Frontend on Vercel · Backend on AWS EC2 with CI/CD",
      },
      {
        icon: "📈",
        title: "Production Metrics",
        sub: "99.5% uptime · 50+ daily active users",
      },
    ],
    github: "https://github.com/OMER7042/FitSync_AI",
    // demo: "#",
  },
  {
    num: "02",
    featured: false,
    title: "Smart Shopping Assistant",
    tagline: "Price Comparison Platform · GCP",
    description:
      "A Flask-powered shopping app with dynamic product/vendor tracking, price comparison APIs, and 100% uptime during tests. Deployed on Google Cloud VM with Cloud SQL backend.",
    metrics: [
      { label: "20–30% Savings", green: true },
      { label: "500+ Products", green: true },
      { label: "GCP", green: false },
      { label: "100% Uptime", green: false },
    ],
    stack: ["Flask", "Bootstrap", "SQLite3", "GCP VM", "Cloud SQL"],
    github: "https://github.com/OMER7042/Smart_Shopping_Assistant",
  },
  {
    num: "03",
    featured: false,
    title: "EcoNest",
    tagline: "AI Eco-Lifestyle App · React Native · Gemini 2.0",
    description:
      "A gamified eco-lifestyle mobile app with carbon footprint tracking, social badge sharing, and Gemini 2.0 custom eco-goal generation. Tested by a pilot group of 25 users.",
    metrics: [
      { label: "60% ↑ Habit Completion", green: true },
      { label: "Gemini 2.0", green: false },
      { label: "Firebase", green: false },
    ],
    stack: ["React Native", "Firebase", "Gemini AI", "Firebase Auth"],
    github: "https://github.com/OMER7042/EcoNest",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
        Projects
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
        What I&apos;ve Shipped
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        custom={0.2}
        className="text-text2 text-[16px] font-light mb-12 max-w-[500px]"
      >
        Real applications. Real deployments. Real metrics.
      </motion.p>

      <div className="flex flex-col gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.num}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1 * (i + 3)}
            className={`border border-white/[0.07] rounded-2xl p-7 hover:border-white/[0.14] transition-all duration-300 bg-bg1 ${
              project.featured ? "grid grid-cols-1 lg:grid-cols-2 gap-8" : ""
            }`}
          >
            {/* Left side — always shown */}
            <div>
              <p className="text-[11px] font-bold text-text3 tracking-[2px] mb-4">
                {project.featured ? `${project.num} · FEATURED` : project.num}
              </p>
              <h3 className="font-head text-[22px] font-bold text-text1 tracking-[-0.5px] mb-2">
                {project.title}
              </h3>
              <p className="text-accent text-[13px] font-medium mb-4">
                {project.tagline}
              </p>
              <p className="text-text2 text-[14px] font-light leading-[1.7] mb-5">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.metrics.map((m) => (
                  <span
                    key={m.label}
                    className={`px-3 py-1 rounded-md text-[12px] font-semibold border ${
                      m.green
                        ? "bg-[#3FB950]/[0.08] border-[#3FB950]/20 text-[#3FB950]"
                        : "bg-accent/[0.08] border-accent/20 text-accent"
                    }`}
                  >
                    {m.label}
                  </span>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="bg-bg3 border border-white/[0.07] text-text3 px-3 py-1 rounded text-[11px] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-text2 border border-white/[0.07] px-4 py-2 rounded-md no-underline hover:text-text1 hover:border-white/[0.14] transition-all"
                >
                  GitHub →
                </a>
                {/* {project.demo && (
                  <a
                    href={project.demo}
                    className="text-[12px] text-text2 border border-white/[0.07] px-4 py-2 rounded-md no-underline hover:text-text1 hover:border-white/[0.14] transition-all"
                  >
                    Live Demo →
                  </a>
                )} */}
              </div>
            </div>

            {/* Right side — only for featured project */}
            {project.featured && project.highlights && (
              <div className="flex flex-col gap-3">
                {project.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="flex items-start gap-3 bg-bg2 border border-white/[0.07] rounded-lg px-4 py-4"
                  >
                    <span className="text-[18px] mt-[2px] flex-shrink-0">
                      {h.icon}
                    </span>
                    <div>
                      <p className="text-text1 text-[13px] font-medium">
                        {h.title}
                      </p>
                      <p className="text-text3 text-[12px] mt-0.5">{h.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
