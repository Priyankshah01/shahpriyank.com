// Option F: "Design ↔ Code". The same button shown as a design spec and as
// the React code that ships it: the design-engineer story told visually.
import { useState } from "react";
import { motion } from "motion/react";
import ConnectModal from "../ConnectModal";

const ease = [0.22, 1, 0.36, 1];

function DesignPanel() {
  return (
    <div className="relative h-full rounded-2xl border border-white/10 bg-[#0d0d10] p-5">
      <div className="mb-5 flex items-center gap-2 text-xs text-white/45">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2">Checkout / Button: primary</span>
      </div>
      <div className="relative flex h-40 items-center justify-center rounded-xl bg-[repeating-linear-gradient(0deg,transparent,transparent_15px,rgba(255,255,255,0.04)_16px),repeating-linear-gradient(90deg,transparent,transparent_15px,rgba(255,255,255,0.04)_16px)]">
        <div className="relative">
          <div className="rounded-full bg-violet-400 px-7 py-3 text-sm font-semibold text-black">
            Place order
          </div>
          <div className="pointer-events-none absolute -inset-2 rounded-full border border-dashed border-sky-400/70" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-sky-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
            148 × 44
          </span>
          <span className="absolute -left-14 top-1/2 -translate-y-1/2 text-[10px] text-sky-300">← 28 →</span>
        </div>
      </div>
      <dl className="mt-5 grid grid-cols-3 gap-3 text-xs">
        {[["Radius", "999"], ["Fill", "violet/400"], ["Text", "14 / Semibold"]].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-white/[0.04] px-3 py-2">
            <dt className="text-white/40">{k}</dt>
            <dd className="mt-0.5 text-white/80">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function CodePanel() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-[#0d0d10] p-5 font-mono text-[12px] leading-[1.35rem]">
      <div className="mb-5 text-xs text-white/45">Button.jsx</div>
      <pre className="whitespace-pre text-white/75">
        <span className="text-violet-300">export function</span>{" "}
        <span className="text-sky-300">Button</span>(props) {"{\n"}
        {"  "}<span className="text-violet-300">return</span> ({"\n"}
        {"    "}&lt;<span className="text-sky-300">button</span>{"\n"}
        {"      "}<span className="text-emerald-300">className</span>={"{"}
        <span className="text-amber-200">cx</span>({"\n"}
        {"        "}<span className="text-amber-200">&quot;rounded-full&quot;</span>,{"\n"}
        {"        "}<span className="text-amber-200">&quot;bg-violet-400&quot;</span>,{"\n"}
        {"        "}<span className="text-amber-200">&quot;px-7 py-3&quot;</span>,{"\n"}
        {"        "}<span className="text-amber-200">&quot;font-semibold&quot;</span>{"\n"}
        {"      "}){"}"}{"\n"}
        {"      "}{"{...props}"}{"\n"}
        {"    "}/&gt;{"\n"}
        {"  "});{"\n"}
        {"}"}
      </pre>
    </div>
  );
}

export default function HeroSplit() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden bg-[#050505] text-white">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[160px]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-32 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="text-sm uppercase tracking-[0.25em] text-white/55"
              >
                Priyank Shah · Toronto
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
                className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl xl:text-7xl"
              >
                From Figma
                <br />
                to <span className="text-violet-400">production.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease }}
                className="mt-7 max-w-md text-lg leading-relaxed text-white/70"
              >
                Product designer and design engineer. I design the experience
                and build the components, at Walmart and before that at
                AlayaCare.
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

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.35, ease }}>
                <p className="mb-3 text-sm text-white/50">Design</p>
                <DesignPanel />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5, ease }}>
                <p className="mb-3 text-sm text-white/50">Code</p>
                <CodePanel />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <ConnectModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
