import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

const roles = [
  {
    company: "Walmart",
    role: "UI/UX Designer & Frontend Developer",
    period: "2025 — Now",
    summary:
      "Commerce UX across listing, cart and checkout, plus the design system and React components behind it.",
  },
  {
    company: "AlayaCare",
    role: "UI/UX Designer",
    period: "2023 — 2025",
    summary:
      "Healthcare appointment booking: research, usability testing, accessibility and developer handoff.",
  },
  {
    company: "WebClues Infotech",
    role: "Junior UI/UX & Graphic Designer",
    period: "2022 — 2023",
    summary:
      "Web, mobile and marketing interfaces for a range of client products.",
  },
  {
    company: "JVS Technology",
    role: "UI/UX Designer Intern",
    period: "2021 — 2022",
    summary: "Mobile interfaces, interactive prototypes and WordPress sites.",
  },
];

const skills = [
  ["Design", "Figma, Adobe XD, prototyping, design systems, UX research, usability testing, accessibility"],
  ["Build", "React, Next.js, JavaScript, HTML/CSS, Tailwind CSS, Bootstrap"],
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#050505] px-6 py-24 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/50">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Five years, from interfaces to whole products.
          </h2>
          <dl className="mt-10 space-y-6 text-sm">
            {skills.map(([label, list]) => (
              <div key={label}>
                <dt className="mb-1.5 uppercase tracking-[0.16em] text-white/45">
                  {label}
                </dt>
                <dd className="leading-relaxed text-white/75">{list}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <ol className="border-t border-white/10">
          {roles.map((r, i) => (
            <motion.li
              key={r.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
              className="grid gap-2 border-b border-white/10 py-6 sm:grid-cols-[1fr_auto] sm:gap-6"
            >
              <div>
                <p className="text-lg font-semibold">
                  {r.company}{" "}
                  <span className="font-normal text-white/55">· {r.role}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {r.summary}
                </p>
              </div>
              <p className="text-sm text-white/50 sm:text-right">{r.period}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
