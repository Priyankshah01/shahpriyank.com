// Option G: "Centered statement". A centered headline whose middle word
// rotates through the kinds of things you've designed and shipped.
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import DarkVeil from "../DarkVeil";
import ConnectModal from "../ConnectModal";

const ease = [0.22, 1, 0.36, 1];
const words = ["checkouts", "booking flows", "design systems", "dashboards"];

export default function HeroRotating() {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-40">
          <DarkVeil />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#050505]" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] py-1.5 pl-1.5 pr-4 text-sm text-white/75 backdrop-blur-md"
          >
            <img src="/images/Me.jpg" alt="" className="h-7 w-7 rounded-full object-cover" />
            Priyank Shah · Product Designer, Toronto
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-10 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            I design
            <span className="relative mx-auto block h-[1.1em] overflow-hidden text-violet-400">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[i]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                  className="absolute inset-x-0"
                >
                  {words[i]}
                </motion.span>
              </AnimatePresence>
            </span>
            and ship them.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            Product designer and design engineer. Currently at Walmart,
            previously AlayaCare, taking work from research to production React.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a href="#work" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
              See selected work
            </a>
            <button type="button" onClick={() => setOpen(true)} className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-md transition hover:bg-white/10">
              Get in touch
            </button>
          </motion.div>
        </div>
      </section>
      <ConnectModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
