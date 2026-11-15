import Link from "next/link";
import { motion } from "motion/react";
import featuredWork from "../data/featuredWork";
import Todo from "./Todo";

const ease = [0.22, 1, 0.36, 1];

function WorkVisual({ item }) {
  // Placeholder visual until blurred or redrawn screens are available.
  return (
    <div className="relative flex min-h-[340px] flex-col justify-between gap-8 overflow-hidden lg:aspect-[4/3] rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-violet-950/60 via-white/[0.03] to-black p-7">
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
      <p className="relative text-sm uppercase tracking-[0.2em] text-white/45">
        {item.period}
      </p>
      <div className="relative">
        <p className="text-4xl font-semibold tracking-tight md:text-5xl">
          {item.company}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {item.scope.map((s) => (
            <li
              key={s}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/75"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
      <p className="relative text-xs">
        <Todo value={{ todo: "Swap this panel for blurred or redrawn screens" }} />
      </p>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-[#050505] px-6 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/50">
            Selected work
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Shipped products, <span className="text-violet-400">real users.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-28">
          {featuredWork.map((item, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease }}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <WorkVisual item={item} />
                </div>

                <div>
                  <p className="text-sm text-white/55">
                    {item.company} · {item.role}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-white/70">
                    {item.summary}
                  </p>

                  <dl className="mt-8 grid gap-5 border-t border-white/10 pt-6 text-sm">
                    <div>
                      <dt className="mb-1.5 uppercase tracking-[0.16em] text-white/45">
                        Result
                      </dt>
                      <dd className="text-base leading-relaxed text-white/90">
                        <Todo value={item.result} />
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-1.5 uppercase tracking-[0.16em] text-white/45">
                        Key decision
                      </dt>
                      <dd className="text-base leading-relaxed text-white/90">
                        <Todo value={item.decision} />
                      </dd>
                    </div>
                  </dl>

                  {item.href ? (
                    <Link
                      href={item.href}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/85 transition hover:text-white"
                    >
                      Read the case study <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <p className="mt-8 text-sm text-white/45">
                      Full case study in progress
                    </p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
