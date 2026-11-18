import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// One component shown three ways: as a design spec, as the React code that
// builds it, and as the live, working component. The spec values, the code
// and the live button all use the same numbers.

const spec = [
  ["Size", "min 148 × 48"],
  ["Padding x", "24px"],
  ["Radius", "full"],
  ["Fill", "accent · violet-400"],
  ["Label", "14 / Semibold"],
  ["Focus", "2px ring, 2px offset"],
];

const views = [
  { id: "design", label: "Design", note: "The spec, as handed off in Figma" },
  { id: "code", label: "Code", note: "The React component I write from it" },
  { id: "live", label: "Live", note: "The real thing. Click it, or tab to it" },
];

function AddButton({ status = "idle", onClick, as = "button" }) {
  const Tag = as;
  const label = status === "loading" ? "Adding…" : status === "done" ? "Added ✓" : "Add to bag";
  return (
    <Tag
      type={as === "button" ? "button" : undefined}
      onClick={onClick}
      aria-live="polite"
      disabled={status === "loading"}
      className="inline-flex h-12 min-w-[148px] items-center justify-center gap-2 rounded-full bg-violet-400 px-6 text-sm font-semibold text-black transition hover:bg-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d10] active:scale-[0.98] disabled:opacity-80 motion-reduce:transition-none"
    >
      {status === "loading" && (
        <span
          aria-hidden
          className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black motion-reduce:animate-none"
        />
      )}
      {label}
    </Tag>
  );
}

function DesignView() {
  return (
    <div className="grid gap-8 md:grid-cols-[1fr_15rem] md:items-center">
      <div className="relative flex h-56 items-center justify-center rounded-xl bg-[repeating-linear-gradient(0deg,transparent,transparent_15px,rgba(255,255,255,0.04)_16px),repeating-linear-gradient(90deg,transparent,transparent_15px,rgba(255,255,255,0.04)_16px)]">
        <div className="relative">
          <AddButton as="span" />
          <span aria-hidden className="pointer-events-none absolute -inset-2 rounded-full border border-dashed border-sky-400/70" />
          <span aria-hidden className="absolute -top-9 left-1/2 -translate-x-1/2 rounded bg-sky-500 px-1.5 py-0.5 font-mono text-[10px] text-white">
            148 × 48
          </span>
          <span aria-hidden className="absolute -left-12 top-1/2 -translate-y-1/2 font-mono text-[10px] text-sky-300">← 24</span>
          <span aria-hidden className="absolute -right-12 top-1/2 -translate-y-1/2 font-mono text-[10px] text-sky-300">24 →</span>
        </div>
      </div>
      <dl className="grid grid-cols-2 gap-2 text-xs md:grid-cols-1">
        {spec.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3 rounded-lg bg-white/[0.04] px-3 py-2">
            <dt className="text-white/45">{k}</dt>
            <dd className="text-right font-mono text-white/85">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

const K = ({ children }) => <span className="text-violet-300">{children}</span>;
const F = ({ children }) => <span className="text-sky-300">{children}</span>;
const S = ({ children }) => <span className="text-amber-200">{children}</span>;
const A = ({ children }) => <span className="text-emerald-300">{children}</span>;

function CodeView() {
  return (
    <pre className="overflow-x-auto rounded-xl bg-white/[0.03] p-5 font-mono text-[12.5px] leading-6 text-white/75">
      <K>export function</K> <F>AddToBag</F>({"{ status, onClick }"}) {"{\n"}
      {"  "}<K>return</K> ({"\n"}
      {"    "}&lt;<F>button</F>{"\n"}
      {"      "}<A>onClick</A>={"{onClick}"}{"\n"}
      {"      "}<A>disabled</A>={"{status === "}<S>&quot;loading&quot;</S>{"}"}{"\n"}
      {"      "}<A>className</A>=<S>&quot;h-12 min-w-[148px] px-6 rounded-full</S>{"\n"}
      <S>{"        "}bg-violet-400 text-sm font-semibold</S>{"\n"}
      <S>{"        "}focus-visible:ring-2</S>
      <S> focus-visible:ring-offset-2&quot;</S>{"\n"}
      {"    "}&gt;{"\n"}
      {"      "}{"{"}<F>labelFor</F>(status){"}"}{"\n"}
      {"    "}&lt;/<F>button</F>&gt;{"\n"}
      {"  "});{"\n"}
      {"}"}
    </pre>
  );
}

function LiveView() {
  const [status, setStatus] = useState("idle");
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const add = () => {
    if (status !== "idle") return;
    setStatus("loading");
    timers.current.push(setTimeout(() => setStatus("done"), 900));
    timers.current.push(setTimeout(() => setStatus("idle"), 2600));
  };

  return (
    <div className="flex h-56 flex-col items-center justify-center gap-5 rounded-xl bg-white/[0.03]">
      <AddButton status={status} onClick={add} />
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
        State: {status}
      </p>
    </div>
  );
}

export default function DesignCodeDemo() {
  const [active, setActive] = useState("design");
  const reduce = useReducedMotion();
  const view = views.find((v) => v.id === active);

  const onKeyDown = (e) => {
    const i = views.findIndex((v) => v.id === active);
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const next = views[(i + (e.key === "ArrowRight" ? 1 : views.length - 1)) % views.length];
      setActive(next.id);
      document.getElementById(`dc-tab-${next.id}`)?.focus();
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d10] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="View the component as" onKeyDown={onKeyDown} className="inline-flex rounded-full border border-white/15 p-1">
          {views.map((v) => (
            <button
              key={v.id}
              id={`dc-tab-${v.id}`}
              type="button"
              role="tab"
              aria-selected={active === v.id}
              aria-controls="dc-panel"
              tabIndex={active === v.id ? 0 : -1}
              onClick={() => setActive(v.id)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                active === v.id ? "bg-violet-400 text-black" : "text-white/70 hover:text-white"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-white/45">{view.note}</p>
      </div>

      <div id="dc-panel" role="tabpanel" aria-labelledby={`dc-tab-${active}`} className="mt-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {active === "design" && <DesignView />}
            {active === "code" && <CodeView />}
            {active === "live" && <LiveView />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
