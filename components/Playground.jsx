import Link from "next/link";
import { motion } from "motion/react";
import featuredProjects from "../data/featuredProjects";

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
              marketplaces to playful interaction experiments.
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
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`/images/${project.image1}`}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-white/50">{project.category}</p>
                  <h3 className="mt-1.5 text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/65">
                    {project.shortDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
