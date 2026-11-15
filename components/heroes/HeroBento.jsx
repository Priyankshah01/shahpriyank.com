// Option E: "Bento". The hero is a grid of tiles a recruiter can scan in any
// order: intro, photo, current role, stats, availability and a work preview.
import { useState } from "react";
import { motion } from "motion/react";
import ConnectModal from "../ConnectModal";

const ease = [0.22, 1, 0.36, 1];
const tile = "rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6";

const enter = (i) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.08 * i, ease },
});

export default function HeroBento() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="bg-[#050505] px-6 pb-16 pt-28 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4 md:grid-rows-[auto_auto_auto]">
          <motion.div {...enter(0)} className={`${tile} flex flex-col justify-between bg-gradient-to-br from-violet-950/70 to-white/[0.02] md:col-span-3 md:row-span-2 md:p-10`}>
            <p className="text-sm text-white/55">Priyank Shah · Product Designer · Design Engineer</p>
            <div>
              <h1 className="mt-16 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
                I design products
                <br />
                <span className="text-violet-400">and ship them.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                From research and flows to production React, across commerce
                and healthcare.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
                  See selected work
                </a>
                <button type="button" onClick={() => setOpen(true)} className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white/10">
                  Get in touch
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div {...enter(1)} className="relative min-h-[260px] overflow-hidden rounded-[1.75rem] border border-white/10 md:row-span-2">
            <img src="/images/Me.jpg" alt="Priyank Shah" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-sm font-medium">Toronto, Canada</p>
            </div>
          </motion.div>

          <motion.div {...enter(2)} className={tile}>
            <p className="text-sm text-white/50">Now</p>
            <p className="mt-2 text-xl font-semibold">Walmart</p>
            <p className="mt-1 text-sm text-white/60">Commerce UX + React</p>
          </motion.div>

          <motion.div {...enter(3)} className={tile}>
            <p className="text-sm text-white/50">Before</p>
            <p className="mt-2 text-xl font-semibold">AlayaCare</p>
            <p className="mt-1 text-sm text-white/60">Healthcare booking</p>
          </motion.div>

          <motion.div {...enter(4)} className={`${tile} flex items-end gap-6`}>
            <div>
              <p className="text-4xl font-semibold">5</p>
              <p className="text-sm text-white/60">years</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">40+</p>
              <p className="text-sm text-white/60">screens, one system</p>
            </div>
          </motion.div>

          <motion.a {...enter(5)} href="#contact" className={`${tile} group flex flex-col justify-between transition hover:border-emerald-400/40`}>
            <p className="flex items-center gap-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available
            </p>
            <p className="mt-4 font-medium">
              Open to senior product design roles{" "}
              <span className="inline-block transition group-hover:translate-x-1">→</span>
            </p>
          </motion.a>
        </div>
      </section>
      <ConnectModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
