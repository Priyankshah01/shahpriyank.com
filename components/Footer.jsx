import React from "react";
import { motion } from "motion/react";
import {
  FaEnvelope,
  FaBehance,
  FaDribbble,
  FaLinkedin,
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "mailto:priyankshah0101@gmail.com",
      label: "Email",
      icon: <FaEnvelope />,
      external: false,
    },
    {
      href: "https://www.behance.net/priyankshah0101",
      label: "Behance",
      icon: <FaBehance />,
      external: true,
    },
    {
      href: "https://dribbble.com/Priyank7",
      label: "Dribbble",
      icon: <FaDribbble />,
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/shah-priyank/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
      external: true,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-black px-6 pb-10 pt-24 text-white md:px-8 md:pt-32">
      <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-white/10 pt-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-sm uppercase tracking-[0.24em] text-white/35"
          >
            Final Frame
          </motion.p>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-tight md:text-7xl xl:text-[7rem]">
                Let’s create something{" "}
                <span className="text-white/40">worth remembering.</span>
              </h2>

              <motion.a
                href="mailto:priyankshah0101@gmail.com"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 inline-block text-lg text-white/70 underline-offset-8 transition hover:text-white hover:underline md:text-2xl"
              >
                priyankshah0101@gmail.com
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:justify-self-end"
            >
              <p className="max-w-sm text-sm leading-relaxed text-white/55 md:text-base">
                UI/UX Designer and Frontend Developer based in Toronto, focused
                on thoughtful product experiences, modern interfaces, and
                digital craft.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    aria-label={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.2 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -3 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/70 transition hover:border-white/25 hover:bg-white hover:text-black"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.65,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/35 md:flex-row md:items-center md:justify-between"
          >
            <p>© {currentYear} Priyank Shah</p>
            <p>Designed with intention. Built with precision.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;