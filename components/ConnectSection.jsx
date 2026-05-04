import React, { useState } from "react";
import { motion } from "motion/react";
import ConnectModal from "./ConnectModal";

const ConnectSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="chat"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-8 md:py-32"
    >
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[140px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-sm md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/40">
                Let’s Connect
              </p>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
                Let’s build something{" "}
                <span className="bg-gradient-to-t from-black-00 to-purple-700 bg-clip-text text-transparent">thoughtful, scalable,</span> and
                visually sharp.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
                I’m open to product design, UI/UX, and frontend opportunities —
                from collaborative team roles to meaningful freelance projects.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.65,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  Contact Me
                </button>

                <a
                  href="mailto:priyankshah0101@gmail.com"
                  className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                >
                  Email Directly
                </a>
              </motion.div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  label: "Email",
                  content: (
                    <a
                      href="mailto:priyankshah0101@gmail.com"
                      className="mt-2 block text-base font-medium text-white/90 underline-offset-4 hover:underline"
                    >
                      priyankshah0101@gmail.com
                    </a>
                  ),
                },
                {
                  label: "Based in",
                  content: (
                    <p className="mt-2 text-base font-medium text-white/90">
                      Toronto, ON
                    </p>
                  ),
                },
                {
                  label: "Open to",
                  content: (
                    <p className="mt-2 text-base font-medium text-white/90">
                      Full-time · Contract · Freelance
                    </p>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.15 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-white/10 bg-black/30 p-5"
                >
                  <p className="text-sm text-white/40">{item.label}</p>
                  {item.content}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <ConnectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default ConnectSection;