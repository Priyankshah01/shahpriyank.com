import { motion } from "motion/react";
import DesignCodeDemo from "./DesignCodeDemo";

const ease = [0.22, 1, 0.36, 1];

const pillars = [
  {
    label: "Design",
    title: "Start with the problem, then prove it with users",
    body: "Interviews, journey maps and flows before pixels. Prototypes go in front of real users, and the design changes based on what they actually do.",
    evidence: "AlayaCare: usability testing on appointment booking",
  },
  {
    label: "Code",
    title: "Design systems that exist in Figma and in React",
    body: "I build the components I design, so the system in the file and the system in production are the same system, with fewer handoff gaps and less rework.",
    evidence: "Walmart: one design system across 40+ screens",
  },
  {
    label: "Bridge",
    title: "Closing the gap between design and build",
    body: "I review what gets built against the design with developers and QA, and fix the differences together, so what ships is what was designed.",
    evidence: "Walmart: design QA alongside backend and QA teams",
  },
];

export default function HowIWork() {
  return (
    <section className="bg-[#050505] px-6 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/50">
            How I work
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Design and code in one workflow.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.08, ease }}
              className="flex flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <p className="text-sm font-medium text-violet-400">
                0{i + 1} · {p.label}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                {p.body}
              </p>
              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-white/55">
                {p.evidence}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="mt-16"
        >
          <div className="mb-6 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-violet-400">
              Try it
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              One component, from spec to shipped.
            </h3>
            <p className="mt-3 leading-relaxed text-white/65">
              Switch between the design spec, the code I write from it, and the
              working component. Same numbers in all three.
            </p>
          </div>
          <DesignCodeDemo />
        </motion.div>
      </div>
    </section>
  );
}
