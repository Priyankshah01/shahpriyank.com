import Link from "next/link";
import { motion } from "motion/react";
import featuredProjects from "../data/featuredProjects";
import ProjectPreviewCard from "./ProjectPreviewCard";

const ease = [0.22, 1, 0.36, 1];

// Side and self-initiated projects, deliberately smaller than the featured work.
export default function Playground() {
  return (
    <section className="bg-[#050505] px-6 py-24 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mb-12 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/50">
              Playground
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              More projects
            </h2>
            <p className="mt-4 text-white/65">
              Client, capstone and self-initiated work, from mobile commerce and
              marketplaces to playful interaction experiments. Hover or swipe a
              card to preview the screens.
            </p>
          </div>
          <Link
            href="/projects"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white hover:text-black"
          >
            All projects →
          </Link>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
            >
              <ProjectPreviewCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
