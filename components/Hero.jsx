import React, { useState } from "react";
import { motion } from "motion/react";
import DarkVeil from "./DarkVeil";
import ConnectModal from "./ConnectModal";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-50">
          <DarkVeil />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#050505]" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-20 pt-36 md:px-8">
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-4">
            <img
              src="/images/Me.jpg"
              alt="Priyank Shah"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-white/20"
            />
            <div className="text-sm leading-tight">
              <p className="font-medium text-white">Priyank Shah</p>
              <p className="text-white/55">
                Product Designer · Design Engineer · Toronto
              </p>
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="mt-10 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl xl:text-[5.75rem]"
          >
            I design products{" "}
            <span className="text-violet-400">and ship them.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            Five years designing commerce, healthcare and SaaS products, taking
            them from research and user flows all the way to production React.
            One person across the design–engineering gap, so less gets lost in
            handoff.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              See selected work
            </a>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Get in touch
            </button>
          </motion.div>

          <motion.div
            {...fadeUp(0.65)}
            className="mt-20 grid gap-6 border-t border-white/10 pt-8 text-sm sm:grid-cols-3"
          >
            <div>
              <p className="mb-2 text-white/45">Now</p>
              <p className="font-medium text-white/90">
                Walmart: commerce UX + React
              </p>
            </div>
            <div>
              <p className="mb-2 text-white/45">Before</p>
              <p className="font-medium text-white/90">
                AlayaCare: healthcare booking
              </p>
            </div>
            <div>
              <p className="mb-2 text-white/45">Earlier</p>
              <p className="font-medium text-white/90">
                WebClues Infotech · JVS Technology
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
