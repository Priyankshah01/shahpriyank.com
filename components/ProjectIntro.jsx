import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "motion/react";
import featuredProjects from "../data/featuredProjects";

// Case-study layout in the site's editorial style: mono labels, ruled
// sections with the label on the left and content on the right, the violet
// full stop on the project name. Props are unchanged, so every page under
// pages/projects/ keeps working as-is.

const ease = [0.22, 1, 0.36, 1];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, delay, ease },
});

const Mono = ({ children, className = "" }) => (
  <span
    className={`font-mono text-xs uppercase tracking-[0.14em] ${className}`}
  >
    {children}
  </span>
);

const pad = (n) => String(n).padStart(2, "0");

// "#" or empty means there is no real link yet.
const realUrl = (url) => (url && url !== "#" ? url : null);

function Section({ id, index, label, title, children }) {
  return (
    <section
      id={id}
      className="grid scroll-mt-28 gap-6 border-t border-white/10 py-14 md:grid-cols-[14rem_1fr] md:gap-12 md:py-20"
    >
      <motion.div {...rise()}>
        <Mono className="text-white/50">
          <span className="text-violet-400">{pad(index)}</span> {label}
        </Mono>
      </motion.div>
      <div className="min-w-0">
        {title && (
          <motion.h2
            {...rise(0.05)}
            className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            {title}
          </motion.h2>
        )}
        <div className={title ? "mt-8" : ""}>{children}</div>
      </div>
    </section>
  );
}

function Figure({ src, alt, className = "" }) {
  return (
    <motion.div
      {...rise()}
      className={`overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </motion.div>
  );
}

const severityStyle = {
  High: "border-amber-400/50 text-amber-300",
  Medium: "border-violet-400/50 text-violet-300",
  Low: "border-white/20 text-white/60",
};

// Usability testing results: setup, headline numbers, per-task success and
// the findings table (finding → evidence → severity → design change).
function Testing({ testing }) {
  const { setup = [], stats = [], tasks = [], findings = [], next } = testing;
  const target = testing.successTarget ?? 80;

  return (
    <>
      {setup.length > 0 && (
        <dl className="grid gap-8 md:grid-cols-2">
          {setup.map(([label, value], i) => (
            <motion.div key={label} {...rise(i * 0.04)}>
              <dt>
                <Mono className="text-white/45">{label}</Mono>
              </dt>
              <dd className="mt-3 leading-relaxed text-white/75">{value}</dd>
            </motion.div>
          ))}
        </dl>
      )}

      {stats.length > 0 && (
        <div className="mt-12 grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
          {stats.map(([value, label], i) => (
            <motion.div
              key={label}
              {...rise(i * 0.05)}
              className="border-b border-white/10 py-6 pr-4 md:border-b-0"
            >
              <p className="text-4xl font-semibold tracking-tight md:text-5xl">{value}</p>
              <p className="mt-2 text-sm leading-snug text-white/55">{label}</p>
            </motion.div>
          ))}
        </div>
      )}

      {tasks.length > 0 && (
        <motion.div {...rise()} className="mt-12">
          <Mono className="text-white/45">Task success rate</Mono>
          <ul className="mt-5 space-y-4">
            {tasks.map((t) => {
              const below = t.success < target;
              return (
                <li key={t.id} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-sm">
                  <span className="text-white/80">
                    <span className="font-mono text-xs text-violet-400">{t.id}</span>{" "}
                    {t.name}
                    {t.time && <span className="text-white/45"> · {t.time}</span>}
                  </span>
                  <span className={`font-mono text-xs ${below ? "text-amber-300" : "text-white/70"}`}>
                    {t.success}%
                  </span>
                  <span className="relative col-span-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <span
                      className={`absolute inset-y-0 left-0 rounded-full ${below ? "bg-amber-400" : "bg-violet-400"}`}
                      style={{ width: `${t.success}%` }}
                    />
                    <span
                      aria-hidden
                      className="absolute inset-y-0 w-px bg-white/60"
                      style={{ left: `${target}%` }}
                    />
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-xs text-white/45">
            White tick marks the {target}% target. Amber marks tasks below it.
          </p>
        </motion.div>
      )}

      {findings.length > 0 && (
        <div className="mt-14">
          <Mono className="text-white/45">Findings and design changes</Mono>
          <ol className="mt-5 border-t border-white/10">
            {findings.map((f, i) => (
              <motion.li
                key={i}
                {...rise()}
                className="grid gap-3 border-b border-white/10 py-6 md:grid-cols-[2.5rem_1.1fr_6rem_1fr] md:gap-6"
              >
                <Mono className="pt-1 text-violet-400">{pad(i + 1)}</Mono>
                <div>
                  <p className="font-medium text-white">{f.finding}</p>
                  <p className="mt-1 text-sm text-white/50">{f.evidence}</p>
                </div>
                <div>
                  <span
                    className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.1em] ${
                      severityStyle[f.severity] || severityStyle.Low
                    }`}
                  >
                    {f.severity}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/75">
                  <span className="text-white/40">→ </span>
                  {f.change}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      )}

      {next && (
        <motion.p {...rise()} className="mt-10 max-w-3xl leading-relaxed text-white/70">
          <Mono className="mr-2 text-violet-400">Next round</Mono>
          {next}
        </motion.p>
      )}
    </>
  );
}

function NumberedList({ items }) {
  return (
    <ol className="border-t border-white/10">
      {items.map((item, i) => (
        <motion.li
          key={i}
          {...rise(i * 0.04)}
          className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/10 py-5 leading-relaxed text-white/80"
        >
          <Mono className="pt-1 text-violet-400">{pad(i + 1)}</Mono>
          <span>{item}</span>
        </motion.li>
      ))}
    </ol>
  );
}

const ProjectIntro = ({
  projectName,
  heroImg,
  outcomeTitle,
  outcomeSubtitle,
  services,
  date,
  agency,
  client,
  targetAudience,
  problem,
  role,
  goals = null,
  techStack = null,
  accessibility = [],
  processSteps = [],
  finalImages = [],
  impact = [],
  impactLabel = "Impact",
  impactTitle = "What changed",
  takeaways = [],
  testing = null,
  liveDemoUrl,
  viewCodeUrl,
}) => {
  const router = useRouter();
  const slug = router.pathname.split("/").pop();

  const serviceList = services
    ? String(services)
        .split("·")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];
  const stack = Array.isArray(techStack)
    ? techStack
    : techStack
      ? [techStack]
      : [];
  const demo = realUrl(liveDemoUrl);
  const code = realUrl(viewCodeUrl);

  // Next project, wrapping around the list shown on the projects page.
  const position = featuredProjects.findIndex((p) => p.slug === slug);
  const next =
    featuredProjects.length > 1
      ? featuredProjects[(position + 1) % featuredProjects.length]
      : null;

  // Big display name; projectName overrides client.title when that is a description.
  const name = projectName || client?.title;
  let n = 0;

  return (
    <article className="bg-[#050505] px-6 pb-16 pt-12 text-white md:px-8 md:pt-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-1.5 border-b border-white/10 pb-5 text-white/55 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link href="/projects" className="transition hover:text-white">
            <Mono>← All projects</Mono>
          </Link>
          <Mono>
            Case study{agency ? ` · ${agency}` : ""}
            {date ? ` · ${date}` : ""}
          </Mono>
        </motion.div>

        {name && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="mt-10 text-[16vw] font-semibold leading-[0.85] tracking-[-0.05em] lg:text-[10rem]"
          >
            {name}
            <span className="text-violet-400">.</span>
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mt-10 max-w-4xl text-2xl font-medium leading-snug tracking-tight text-white md:text-4xl"
        >
          {outcomeTitle}
        </motion.h1>
        {outcomeSubtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-white/65"
          >
            {outcomeSubtitle}
          </motion.p>
        )}

        {/* Facts */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 md:grid-cols-4"
        >
          {[
            ["Services", serviceList.join(", ")],
            ["Date", date],
            ["Type", agency],
            ["Stack", stack.slice(0, 4).join(", ")],
          ]
            .filter(([, v]) => v)
            .map(([label, value]) => (
              <div key={label}>
                <dt>
                  <Mono className="text-white/45">{label}</Mono>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/85">{value}</dd>
              </div>
            ))}
        </motion.dl>

        {heroImg && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="mt-14 overflow-hidden rounded-2xl border border-white/10"
          >
            <img src={heroImg} alt={outcomeTitle || "Project preview"} className="w-full object-cover" />
          </motion.div>
        )}

        {/* Body */}
        <div className="mt-20">
          {impact.length > 0 && (
            <Section id="impact" index={++n} label={impactLabel} title={impactTitle}>
              <NumberedList items={impact} />
            </Section>
          )}

          <Section id="overview" index={++n} label="Overview">
            <div className="grid gap-10 md:grid-cols-2">
              {targetAudience && (
                <motion.div {...rise()}>
                  <Mono className="text-white/45">Audience</Mono>
                  <p className="mt-3 leading-relaxed text-white/75">{targetAudience}</p>
                </motion.div>
              )}
              {role && (
                <motion.div {...rise(0.05)}>
                  <Mono className="text-white/45">My role</Mono>
                  <p className="mt-3 leading-relaxed text-white/75">{role}</p>
                </motion.div>
              )}
            </div>
          </Section>

          {problem && (
            <Section id="challenge" index={++n} label="Challenge" title="The problem">
              <motion.p {...rise()} className="max-w-3xl text-lg leading-relaxed text-white/75">
                {problem}
              </motion.p>
              {client?.image && (
                <Figure src={client.image} alt={name || "Project context"} className="mt-10" />
              )}
            </Section>
          )}

          {goals && (
            <Section id="goals" index={++n} label="Goals" title="Business, design and technical goals">
              <div className="grid border-t border-white/10 md:grid-cols-3">
                {[
                  ["Business", goals.business],
                  ["Design", goals.design],
                  ["Technical", goals.tech],
                ]
                  .filter(([, v]) => v)
                  .map(([label, value], i) => (
                    <motion.div
                      key={label}
                      {...rise(i * 0.05)}
                      className="border-b border-white/10 py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
                    >
                      <Mono className="text-white/45">{label}</Mono>
                      <p className="mt-3 leading-relaxed text-white/75">{value}</p>
                    </motion.div>
                  ))}
              </div>

              {(stack.length > 0 || accessibility.length > 0) && (
                <div className="mt-12 grid gap-10 md:grid-cols-2">
                  {stack.length > 0 && (
                    <motion.div {...rise()}>
                      <Mono className="text-white/45">Tech stack</Mono>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {stack.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white/75"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  {accessibility.length > 0 && (
                    <motion.div {...rise(0.05)}>
                      <Mono className="text-white/45">Accessibility</Mono>
                      <ul className="mt-4 space-y-3">
                        {accessibility.map((point, i) => (
                          <li key={i} className="flex gap-3 leading-relaxed text-white/75">
                            <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              )}
            </Section>
          )}

          {processSteps.length > 0 && (
            <Section id="process" index={++n} label="Process" title="From discovery to the final experience">
              <div className="border-t border-white/10">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={`${step.title}-${i}`}
                    {...rise()}
                    className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[6rem_1fr]"
                  >
                    <Mono className="pt-1.5 text-violet-400">Step {pad(i + 1)}</Mono>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{step.title}</h3>
                      <p className="mt-3 max-w-3xl leading-relaxed text-white/70">{step.description}</p>
                      {step.image && <Figure src={step.image} alt={step.title} className="mt-6" />}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>
          )}

          {testing && (
            <Section
              id="testing"
              index={++n}
              label="Testing"
              title={testing.title || "Usability testing"}
            >
              <Testing testing={testing} />
            </Section>
          )}

          {finalImages.length > 0 && (
            <Section id="outcome" index={++n} label="Outcome" title="Final interface">
              <div className="grid gap-4 sm:grid-cols-2">
                {finalImages.map((img, i) => (
                  <Figure
                    key={`${img}-${i}`}
                    src={img}
                    alt={`${name || "Project"}: final screen ${i + 1}`}
                    className={i === 0 ? "sm:col-span-2" : ""}
                  />
                ))}
              </div>
            </Section>
          )}

          {takeaways.length > 0 && (
            <Section id="reflection" index={++n} label="Reflection" title="What this project reinforced">
              <NumberedList items={takeaways} />
            </Section>
          )}

          {(demo || code) && (
            <Section id="links" index={++n} label="Links">
              <div className="flex flex-wrap gap-8">
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 border-b border-white/25 pb-1 transition hover:border-violet-400"
                  >
                    <Mono className="text-white">Live demo</Mono>
                    <span className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </a>
                )}
                {code && (
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 border-b border-white/25 pb-1 transition hover:border-violet-400"
                  >
                    <Mono className="text-white">View code</Mono>
                    <span className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </a>
                )}
              </div>
            </Section>
          )}
        </div>

        {/* Next project */}
        {next && next.slug !== slug && (
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-4 flex flex-col gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <Mono className="text-white/45">Next project</Mono>
              <p className="mt-3 text-5xl font-semibold tracking-tight transition group-hover:text-violet-300 md:text-7xl">
                {next.title}
                <span className="text-violet-400">.</span>
              </p>
            </div>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-lg transition group-hover:border-violet-400 group-hover:bg-violet-400 group-hover:text-black">
              →
            </span>
          </Link>
        )}
      </div>
    </article>
  );
};

export default ProjectIntro;
