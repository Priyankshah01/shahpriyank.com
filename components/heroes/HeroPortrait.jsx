// Option D: "Portrait". Closest to the original site: large photo on the
// right, but with senior positioning copy and company proof instead of badges.
import { useState } from "react";
import { motion } from "motion/react";
import DarkVeil from "../DarkVeil";
import ConnectModal from "../ConnectModal";

const ease = [0.22, 1, 0.36, 1];

const stats = [
  ["5", "years in product design"],
  ["40+", "screens on one design system"],
  ["2", "industries: commerce & healthcare"],
];

export default function HeroPortrait() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-40">
          <DarkVeil />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#050505]" />

        <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-6 pb-16 pt-32 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-sm uppercase tracking-[0.25em] text-white/55"
            >
              Product Designer · Design Engineer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl"
            >
              Designer&apos;s eye.
              <br />
              <span className="text-violet-400">Engineer&apos;s hands.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/70"
            >
              I&apos;m Priyank, a Toronto-based product designer who takes work
              from research and flows to production React. Currently at
              Walmart; previously AlayaCare.
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
              <button type="button" onClick={() => setOpen(true)} className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-md transition hover:bg-white/10">
                Get in touch
              </button>
            </motion.div>
            <motion.dl
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
              className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-6"
            >
              {stats.map(([n, label]) => (
                <div key={label}>
                  <dt className="text-3xl font-semibold">{n}</dt>
                  <dd className="mt-1 text-sm leading-snug text-white/55">{label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-violet-500/15 blur-3xl" />
            <img
              src="/images/Me.jpg"
              alt="Priyank Shah"
              className="relative aspect-[4/5] w-full rounded-[2rem] border border-white/10 object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 px-5 py-4 backdrop-blur-md">
              <p className="text-sm font-medium">Priyank Shah</p>
              <p className="text-xs text-white/60">Now designing &amp; building at Walmart</p>
            </div>
          </motion.div>
        </div>
      </section>
      <ConnectModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
