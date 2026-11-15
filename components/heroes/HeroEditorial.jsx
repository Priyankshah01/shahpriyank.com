// Option C: "Editorial". Oversized name set full-width, a calm intro in two
// columns, and a slow-scrolling strip of focus areas. No WebGL, no photo card.
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

const strip = [
  "Product design",
  "Design systems",
  "React & Next.js",
  "Usability testing",
  "Accessibility",
  "Commerce UX",
  "Healthcare UX",
  "Prototyping",
];

export default function HeroEditorial() {
  const items = [...strip, ...strip];
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-14 pt-32 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between border-b border-white/10 pb-5 text-sm text-white/55"
        >
          <span>Product Designer · Design Engineer</span>
          <span>Toronto, Canada</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="mt-10 text-[17vw] font-semibold leading-[0.85] tracking-[-0.05em] lg:text-[13.5rem]"
        >
          Priyank<span className="text-violet-400">.</span>
        </motion.h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[auto_1fr_auto] md:items-end">
          <motion.img
            src="/images/Me.jpg"
            alt="Priyank Shah"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="h-28 w-24 rounded-2xl object-cover grayscale transition hover:grayscale-0"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="max-w-2xl text-xl leading-relaxed text-white/75 md:text-2xl"
          >
            I design products and ship them. Five years across commerce at{" "}
            <span className="text-white">Walmart</span> and healthcare at{" "}
            <span className="text-white">AlayaCare</span>, from research to
            production React.
          </motion.p>
          <motion.a
            href="#work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="inline-flex h-28 w-28 items-center justify-center rounded-full bg-violet-400 text-center text-sm font-semibold text-black transition hover:scale-105"
          >
            See work ↓
          </motion.a>
        </div>
      </div>

      <div className="border-y border-white/10 py-5">
        <motion.div
          className="flex w-max gap-12 whitespace-nowrap text-sm uppercase tracking-[0.2em] text-white/45"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              {t} <span className="text-violet-400">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
