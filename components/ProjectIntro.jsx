import React, { useMemo } from "react";
import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const SectionKicker = ({ children }) => (
  <p className="text-[11px] uppercase tracking-[0.24em] text-white/35 md:text-xs">
    {children}
  </p>
);

const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`text-2xl font-semibold leading-tight tracking-tight text-white md:text-4xl ${className}`}
  >
    {children}
  </h2>
);

const BodyText = ({ children, className = "" }) => (
  <p className={`text-sm leading-relaxed text-white/70 md:text-base ${className}`}>
    {children}
  </p>
);

const MetaCard = ({ label, value }) => {
  if (!value) return null;
  const content = Array.isArray(value) ? value.join(" · ") : value;

  return (
    <motion.div
      {...fadeUp}
      whileHover={{ y: -4 }}
      className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
    >
      <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">{label}</p>
      <p className="mt-3 text-sm font-medium leading-relaxed text-white/90 md:text-base">
        {content}
      </p>
    </motion.div>
  );
};

const Pill = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
    {children}
  </span>
);

const ProjectIntro = ({
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
  takeaways = [],
  liveDemoUrl,
  viewCodeUrl,
}) => {
  const hasAccessibility = Array.isArray(accessibility) && accessibility.length > 0;
  const hasProcess = Array.isArray(processSteps) && processSteps.length > 0;
  const hasFinalImages = Array.isArray(finalImages) && finalImages.length > 0;
  const hasTakeaways = Array.isArray(takeaways) && takeaways.length > 0;
  const hasImpact = Array.isArray(impact) && impact.length > 0;

  const sections = useMemo(() => {
    const base = [
      { id: "overview", label: "Overview" },
      { id: "challenge", label: "Challenge" },
    ];
    if (goals) base.push({ id: "goals", label: "Goals" });
    if (hasProcess) base.push({ id: "process", label: "Process" });
    if (hasFinalImages) base.push({ id: "outcome", label: "Outcome" });
    if (hasTakeaways) base.push({ id: "reflection", label: "Reflection" });
    return base;
  }, [goals, hasProcess, hasFinalImages, hasTakeaways]);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-32 h-72 w-72 rounded-full bg-white/[0.05] blur-[140px]" />
        <div className="absolute bottom-10 right-[12%] h-80 w-80 rounded-full bg-white/[0.04] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <SectionKicker>Case Study</SectionKicker>

            <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-tight text-white md:text-6xl xl:text-[5.5rem]">
              {outcomeTitle}
            </h1>

            {outcomeSubtitle && (
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-xl">
                {outcomeSubtitle}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {services &&
              String(services)
                .split("·")
                .map((item) => item.trim())
                .filter(Boolean)
                .map((item) => <Pill key={item}>{item}</Pill>)}

            {date && <Pill>{date}</Pill>}
            {agency && <Pill>{agency}</Pill>}
          </motion.div>
        </div>

        {heroImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-12 max-w-7xl"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl">
              <motion.img
                src={heroImg}
                alt={outcomeTitle || "Project preview"}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.45 }}
              />
            </div>
          </motion.div>
        )}

        {hasImpact && (
          <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3">
            {impact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-5"
              >
                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mx-auto mt-20 grid max-w-7xl gap-12 xl:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden xl:block">
            <motion.div
              {...fadeUp}
              className="sticky top-28 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                On this page
              </p>

              <nav className="mt-5 space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-white/60 transition hover:text-white"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </aside>

          <div className="space-y-20">
            <section id="overview" className="scroll-mt-28">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <MetaCard label="Services" value={services} />
                <MetaCard label="Date" value={date} />
                <MetaCard label="Agency" value={agency} />
                <MetaCard label="Client" value={client?.title} />
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <motion.div
                  {...fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7 md:p-8"
                >
                  <SectionKicker>Audience</SectionKicker>
                  <SectionTitle className="mt-3">
                    Who this experience was built for
                  </SectionTitle>
                  <BodyText className="mt-5">{targetAudience}</BodyText>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-8"
                >
                  <SectionKicker>Role</SectionKicker>
                  <SectionTitle className="mt-3">My contribution</SectionTitle>
                  <BodyText className="mt-5">{role}</BodyText>
                </motion.div>
              </div>
            </section>

            <section id="challenge" className="scroll-mt-28">
              <motion.div {...fadeUp} className="max-w-4xl">
                <SectionKicker>Challenge</SectionKicker>
                <SectionTitle className="mt-3">
                  The problem behind the experience
                </SectionTitle>
                <BodyText className="mt-5">{problem}</BodyText>
              </motion.div>

              {client?.title && client?.image && (
                <div className="mt-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                  <motion.div {...fadeUp}>
                    <SectionKicker>Context</SectionKicker>
                    <SectionTitle className="mt-3">{client.title}</SectionTitle>
                    <BodyText className="mt-5">
                      This project centered on translating user needs and product
                      goals into a cleaner, more thoughtful digital experience.
                    </BodyText>
                  </motion.div>

                  <motion.div
                    {...fadeUp}
                    className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
                  >
                    <motion.img
                      src={client.image}
                      alt={client.title}
                      className="w-full object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.45 }}
                    />
                  </motion.div>
                </div>
              )}
            </section>

            {goals && (
              <section id="goals" className="scroll-mt-28">
                <motion.div {...fadeUp} className="max-w-4xl">
                  <SectionKicker>Goals</SectionKicker>
                  <SectionTitle className="mt-3">
                    Aligning business, design, and technical outcomes
                  </SectionTitle>
                </motion.div>

                <div className="mt-8 grid gap-5 lg:grid-cols-3">
                  {goals.business && (
                    <motion.div
                      {...fadeUp}
                      whileHover={{ y: -4 }}
                      className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
                    >
                      <SectionKicker>Business</SectionKicker>
                      <BodyText className="mt-4">{goals.business}</BodyText>
                    </motion.div>
                  )}

                  {goals.design && (
                    <motion.div
                      {...fadeUp}
                      whileHover={{ y: -4 }}
                      className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
                    >
                      <SectionKicker>Design</SectionKicker>
                      <BodyText className="mt-4">{goals.design}</BodyText>
                    </motion.div>
                  )}

                  {goals.tech && (
                    <motion.div
                      {...fadeUp}
                      whileHover={{ y: -4 }}
                      className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
                    >
                      <SectionKicker>Technical</SectionKicker>
                      <BodyText className="mt-4">{goals.tech}</BodyText>
                    </motion.div>
                  )}
                </div>

                {(techStack || hasAccessibility) && (
                  <div className="mt-5 grid gap-5 lg:grid-cols-2">
                    {techStack && (
                      <motion.div
                        {...fadeUp}
                        whileHover={{ y: -4 }}
                        className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
                      >
                        <SectionKicker>Tech Stack</SectionKicker>
                        <BodyText className="mt-4">
                          {Array.isArray(techStack)
                            ? techStack.join(" · ")
                            : techStack}
                        </BodyText>
                      </motion.div>
                    )}

                    {hasAccessibility && (
                      <motion.div
                        {...fadeUp}
                        whileHover={{ y: -4 }}
                        className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
                      >
                        <SectionKicker>Accessibility</SectionKicker>
                        <ul className="mt-4 space-y-3">
                          {accessibility.map((point, index) => (
                            <li
                              key={index}
                              className="text-sm leading-relaxed text-white/70 md:text-base"
                            >
                              • {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                )}
              </section>
            )}

            {hasProcess && (
              <section id="process" className="scroll-mt-28">
                <motion.div {...fadeUp} className="max-w-4xl">
                  <SectionKicker>Process</SectionKicker>
                  <SectionTitle className="mt-3">
                    From discovery to a refined final experience
                  </SectionTitle>
                  <BodyText className="mt-5">
                    A structured process focused on clarifying user needs,
                    reducing friction, and translating strategic thinking into
                    polished interface decisions.
                  </BodyText>
                </motion.div>

                <div className="mt-10 space-y-8">
                  {processSteps.map((step, index) => (
                    <motion.article
                      key={`${step.title}-${index}`}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ y: -3 }}
                      className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:grid-cols-[120px_minmax(0,1fr)]"
                    >
                      <div className="flex h-fit w-fit items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/75">
                        Step {index + 1}
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                          {step.title}
                        </h3>

                        <BodyText className="mt-4">{step.description}</BodyText>

                        {step.image && (
                          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
                            <motion.img
                              src={step.image}
                              alt={step.title}
                              className="w-full object-cover"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.45 }}
                            />
                          </div>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </section>
            )}

            {hasFinalImages && (
              <section id="outcome" className="scroll-mt-28">
                <motion.div {...fadeUp} className="max-w-4xl">
                  <SectionKicker>Outcome</SectionKicker>
                  <SectionTitle className="mt-3">
                    Final interface and visual direction
                  </SectionTitle>
                </motion.div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {finalImages.map((img, index) => (
                    <motion.div
                      key={`${img}-${index}`}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.65,
                        delay: index * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] ${
                        index === 0 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <motion.img
                        src={img}
                        alt={`Final result ${index + 1}`}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.45 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {hasTakeaways && (
              <section id="reflection" className="scroll-mt-28">
                <motion.div
                  {...fadeUp}
                  whileHover={{ y: -3 }}
                  className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 md:p-8"
                >
                  <SectionKicker>Reflection</SectionKicker>
                  <SectionTitle className="mt-3">
                    What this project reinforced
                  </SectionTitle>

                  <ul className="mt-6 space-y-4">
                    {takeaways.map((point, index) => (
                      <li
                        key={index}
                        className="text-sm leading-relaxed text-white/75 md:text-base"
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </section>
            )}

            {(liveDemoUrl || viewCodeUrl) && (
              <motion.section
                {...fadeUp}
                className="border-t border-white/10 pt-10"
              >
                <div className="flex flex-wrap gap-4">
                  {liveDemoUrl && (
                    <motion.a
                      href={liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                    >
                      Live Demo
                    </motion.a>
                  )}

                  {viewCodeUrl && (
                    <motion.a
                      href={viewCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                    >
                      View Code
                    </motion.a>
                  )}
                </div>
              </motion.section>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;