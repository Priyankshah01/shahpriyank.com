// Option B: "Work first". Headline on the left, a fanned stack of real
// project screens on the right, so the first thing a reviewer sees is work.
import { useState } from "react";
import { motion } from "motion/react";
import ConnectModal from "../ConnectModal";

const ease = [0.22, 1, 0.36, 1];

const shots = [
  { src: "/images/freelanceflowhero.jpg", className: "left-0 top-10 w-[78%] -rotate-6", delay: 0.35 },
  { src: "/images/Giftelle-ui1.jpg", className: "right-0 top-0 w-[70%] rotate-6", delay: 0.45 },
  { src: "/images/Basics-ui-cover.jpg", className: "left-[12%] bottom-0 w-[80%] rotate-0", delay: 0.55 },
];

export default function HeroWork() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden bg-[#050505] text-white">
        <div className="absolute right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[160px]" />
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-16 px-6 pb-20 pt-32 md:px-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/70"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to senior product design roles
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-8 text-5xl font-semibold leading-[0.98] tracking-tight md:text-6xl xl:text-7xl"
            >
              Priyank Shah designs products{" "}
              <span className="text-violet-400">and builds them.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
            >
              Product designer and design engineer in Toronto. Commerce at
              Walmart, healthcare at AlayaCare, from research to production
              React.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#work" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
                See selected work
              </a>
              <button type="button" onClick={() => setOpen(true)} className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white/10">
                Get in touch
              </button>
            </motion.div>
          </div>

          <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
            {shots.map((s) => (
              <motion.img
                key={s.src}
                src={s.src}
                alt=""
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: s.delay, ease }}
                className={`absolute aspect-[16/10] rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/60 ${s.className}`}
              />
            ))}
          </div>
        </div>
      </section>
      <ConnectModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
