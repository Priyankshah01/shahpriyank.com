import Link from "next/link";
import { motion } from "motion/react";
import featuredWork from "../data/featuredWork";
import featuredProjects from "../data/featuredProjects";

// Projects index, in the same editorial style as the home hero:
// mono meta line, oversized title with the violet full stop, ruled rows.
const ease = [0.22, 1, 0.36, 1];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease },
});

function SectionLabel({ index, children, count }) {
  return (
    <div className="flex items-baseline justify-between border-b border-white/10 pb-4 font-mono text-xs uppercase tracking-[0.14em] text-white/55">
      <span>
        <span className="text-violet-400">{index}</span> {children}
      </span>
      <span>{String(count).padStart(2, "0")}</span>
    </div>
  );
}

function ProfessionalRow({ item }) {
  const body = (
    <div className="grid gap-4 py-8 md:grid-cols-[1fr_1.4fr_auto] md:items-baseline md:gap-10">
      <div>
        <p className="text-3xl font-semibold tracking-tight md:text-4xl">
          {item.company}
        </p>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-white/45">
          {item.period}
        </p>
      </div>
      <div>
        <p className="text-lg font-medium leading-snug text-white/90">
          {item.title}
        </p>
        <p className="mt-2 text-sm text-white/55">{item.role}</p>
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/45 md:text-right">
        {item.href ? "Read case study →" : "Case study in progress"}
      </p>
    </div>
  );

  return (
    <motion.li {...rise()} className="border-b border-white/10">
      {item.href ? (
        <Link href={item.href} className="block transition hover:bg-white/[0.02]">
          {body}
        </Link>
      ) : (
        body
      )}
    </motion.li>
  );
}

function ProjectRow({ project, index }) {
  const year = new Date(project.date).getFullYear();
  return (
    <motion.li {...rise()} className="border-b border-white/10">
      <Link
        href={`/projects/${project.slug}`}
        className="group grid gap-6 py-8 md:grid-cols-[18rem_1fr_auto] md:items-center md:gap-10"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
          <img
            src={`/images/${project.image1}`}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/45">
            <span className="text-violet-400">
              {String(index + 1).padStart(2, "0")}
            </span>{" "}
            · {project.category} · {year}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight transition group-hover:text-violet-300 md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl leading-relaxed text-white/65">
            {project.shortDescription}
          </p>
          {project.tags?.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.12em] text-white/40">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </div>

        <span
          aria-hidden
          className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/15 text-lg transition group-hover:border-violet-400 group-hover:bg-violet-400 group-hover:text-black md:inline-flex"
        >
          →
        </span>
      </Link>
    </motion.li>
  );
}

export default function Projects() {
  return (
    <section className="bg-[#050505] px-6 pb-24 pt-12 text-white md:px-8 md:pb-32 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-1.5 border-b border-white/10 pb-5 font-mono text-xs uppercase tracking-[0.12em] text-white/55 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>Index · Selected work and experiments</span>
          <span>
            {String(featuredWork.length + featuredProjects.length).padStart(2, "0")}{" "}
            projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="mt-10 text-[19vw] font-semibold leading-[0.85] tracking-[-0.05em] lg:text-[11rem]"
        >
          Projects<span className="text-violet-400">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-10 max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl"
        >
          Product work from <span className="text-white">Walmart</span> and{" "}
          <span className="text-white">AlayaCare</span>, plus client, capstone
          and self-initiated projects I designed and built end to end.
        </motion.p>

        <div className="mt-24">
          <SectionLabel index="01" count={featuredWork.length}>
            Professional
          </SectionLabel>
          <ul>
            {featuredWork.map((item) => (
              <ProfessionalRow key={item.id} item={item} />
            ))}
          </ul>
        </div>

        <div className="mt-24">
          <SectionLabel index="02" count={featuredProjects.length}>
            More projects
          </SectionLabel>
          <ul>
            {featuredProjects.map((project, i) => (
              <ProjectRow key={project.slug} project={project} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
