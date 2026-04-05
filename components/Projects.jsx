import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import featuredProjects from "../data/featuredProjects";

const ProjectShowcase = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/45">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            A curated selection of{" "}
            <span className="text-white/45">design-led digital products</span>{" "}
            built with strategy, clarity, and craft.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            These projects highlight my approach across UI/UX design, product
            thinking, and frontend development — from concept and workflows to
            polished interfaces and implementation.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const projectYear = new Date(
              project.createdAt || project.date || "2024-01-01"
            ).getFullYear();

            return (
              <motion.div
                key={project.slug || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={`/images/${project.image1}`}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.03 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>

                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex items-center justify-between gap-4 text-sm text-white/45">
                      <span>{projectYear}</span>
                      <span>{project.status || "Case Study"}</span>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {project.title}
                      <motion.span
                        className="ml-2 inline-block"
                        whileHover={{ x: 4, y: -4 }}
                        transition={{ duration: 0.25 }}
                      >
                        ↗
                      </motion.span>
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
                      {project.shortDescription ||
                        project.description ||
                        "A product-focused case study showcasing UX thinking, interface design, and frontend execution."}
                    </p>

                    {project.tags?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;