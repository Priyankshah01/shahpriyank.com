import React from "react";
import { motion } from "motion/react";

const services = [
  "UX/UI Design",
  "Product Design",
  "Responsive Web Design",
  "Frontend Development",
  "Design Systems",
  "Brand Identity",
];

const experience = [
  {
    company: "Walmart",
    role: "UI/UX Designer & Frontend Developer",
    summary:
      "Redesigned internal dashboards and marketing experiences for a talent intelligence platform, improving clarity, usability, and product consistency.",
  },
  {
    company: "Alayacare",
    role: "UI/UX Designer",
    summary:
      "Revamped the website and student portal experience with a more structured, conversion-focused, and user-friendly interface.",
  },
  {
    company: "WebClues Infotech",
    role: "UI/UX & Graphic Designer",
    summary:
      "Contributed to responsive web and mobile projects, supporting interface design, visual refinement, and developer collaboration.",
  },
];

const groupedSkills = {
  Design: ["Figma", "Wireframing", "Prototyping", "Design Systems", "UX Research"],
  Frontend: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  Product: ["User Flows", "Information Architecture", "Usability Testing", "Accessibility"],
};

function About() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-8 md:py-32"
    >
      <div className="absolute left-1/3 top-20 h-72 w-72 rounded-full bg-white/5 blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-white/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/40">
            About
          </p>
          <h2 className="text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            A hybrid designer shaping{" "}
            <span className="bg-gradient-to-t from-black-00 to-purple-700 bg-clip-text text-transparent">clear, scalable, and immersive</span>{" "}
            digital experiences.
          </h2>
        </motion.div>

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-900/[0.5] to-white/[0.03] p-7 backdrop-blur-sm md:col-span-2 xl:col-span-2 xl:row-span-2"
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/35">
                  Overview
                </p>
                <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-snug md:text-3xl">
                  Designer’s eye. Developer’s logic. Product-first thinking.
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                  Hi, I’m Priyank — a UI/UX Designer and Frontend Developer
                  focused on building polished digital products that balance
                  usability, visual craft, accessibility, and technical
                  execution. I enjoy translating complexity into experiences
                  that feel simple, purposeful, and beautifully resolved.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["UI/UX Design", "Frontend Craft", "Product Thinking", "Systems"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/75"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-white/35">
              Experience
            </p>
            <div className="mt-6">
              <p className="text-4xl font-semibold tracking-tight text-purple-700">
                5+
              </p>
              <p className="mt-2 text-sm text-white/65">
                Years across design, development, and digital products
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-white/35">
              Based In
            </p>
            <div className="mt-6">
              <p className="text-2xl font-semibold tracking-tight text-purple-700">
                Toronto, ON
              </p>
              <p className="mt-2 text-sm text-white/65">
                Designing for modern products, brands, and business experiences
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm md:col-span-2 xl:col-span-2"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-white/35">
              Services
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white/75 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm md:col-span-2 xl:col-span-2 xl:row-span-2"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-white/35">
              Experience
            </p>

            <div className="mt-6 space-y-5">
              {experience.map((item, index) => (
                <div key={item.company} className="relative pl-8">
                  <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-purple-700/80" />
                  {index !== experience.length - 1 && (
                    <div className="absolute left-[5px] top-5 h-[calc(100%+14px)] w-px bg-white/10" />
                  )}

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <h3 className="text-lg font-medium text-purple-700">
                        {item.company}
                      </h3>
                      <span className="text-sm text-white/40">{item.role}</span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">
                      {item.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm md:col-span-2 xl:col-span-2"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-white/35">
              Skills
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {Object.entries(groupedSkills).map(([group, items]) => (
                <div
                  key={group}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5"
                >
                  <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-purple-700">
                    {group}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 backdrop-blur-sm"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-white/35">
              Contact
            </p>
            <div className="mt-6">
              <p className="text-xl font-semibold leading-snug ">
                Open to thoughtful collaborations and product design roles.
              </p>
              <a
                href="mailto:priyankshah0101@gmail.com"
                className="mt-5 inline-flex text-sm text-purple-700 underline-offset-4 hover:text-white hover:underline"
              >
                priyankshah0101@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-white/35">
              Industries
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["eCommerce", "Gaming", "Finance", "Telecom"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;