import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";

// Interactive building blocks for case studies. Styled to match the site:
// Geist Mono labels, thin rules, violet accent. All controls are real
// buttons / range inputs so they work with keyboard and screen readers.

const Mono = ({ children, className = "" }) => (
  <span className={`font-mono text-xs uppercase tracking-[0.14em] ${className}`}>
    {children}
  </span>
);

export function PhoneFrame({ src, alt, ratio = "375 / 812", desktop = false, className = "" }) {
  return (
    <div
      className={`overflow-hidden border border-white/15 bg-white shadow-2xl shadow-black/40 ${
        desktop ? "rounded-xl" : "rounded-[1.75rem]"
      } ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover object-top" />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Before / after slider                                             */
/* ---------------------------------------------------------------- */

export function BeforeAfter({
  before,
  after,
  alt,
  ratio = "375 / 812",
  caption,
  beforeLabel = "Before",
  afterLabel = "After",
  desktop = false,
}) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <figure>
      <div
        className={`relative mx-auto w-full select-none overflow-hidden border border-white/15 bg-white shadow-2xl shadow-black/40 ${
          desktop ? "rounded-xl" : "max-w-[320px] rounded-[1.75rem]"
        }`}
        style={{ aspectRatio: ratio }}
      >
        <img src={after} alt={`${alt}: after`} className="absolute inset-0 h-full w-full object-cover object-top" />
        <img
          src={before}
          alt={`${alt}: before`}
          className="absolute inset-0 h-full w-full object-cover object-top"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-violet-500 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
          {afterLabel}
        </span>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-violet-500"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-violet-500 text-sm text-white shadow-lg">
            ⇆
          </span>
        </div>

        <label htmlFor={id} className="sr-only">
          Compare before and after: {alt}
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      {caption && (
        <figcaption
          className={`mx-auto mt-5 text-sm leading-relaxed text-white/65 ${desktop ? "max-w-3xl" : "max-w-[320px]"}`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ---------------------------------------------------------------- */
/* Live token / contrast demo                                        */
/* ---------------------------------------------------------------- */

function luminance(hex) {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
}

export function contrast(a, b) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

function Segmented({ label, options, value, onChange }) {
  return (
    <div>
      <Mono className="text-white/60">{label}</Mono>
      <div role="radiogroup" aria-label={label} className="mt-3 inline-flex rounded-full border border-white/15 p-1">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={value === o.value}
            onClick={() => onChange(o.value)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              value === o.value ? "bg-violet-400 text-black" : "text-white/70 hover:text-white"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// `themes` maps a theme name to semantic token values; `secondary` lists
// the before/after values for the token being demonstrated.
export function TokenDemo({ themes, secondary, image }) {
  const [theme, setTheme] = useState("light");
  const [version, setVersion] = useState("after");

  const t = themes[theme];
  const sec = secondary[version][theme];
  const ratio = contrast(sec.value, t.surface);
  const passes = ratio >= 4.5;

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_minmax(0,320px)] md:items-center">
      <div className="space-y-8">
        <Segmented
          label="Theme"
          value={theme}
          onChange={setTheme}
          options={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
          ]}
        />
        <Segmented
          label="Secondary text"
          value={version}
          onChange={setVersion}
          options={[
            { value: "before", label: "Before" },
            { value: "after", label: "After (token)" },
          ]}
        />

        <dl className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
          <div>
            <dt><Mono className="text-white/60">Value</Mono></dt>
            <dd className="mt-2 flex items-center gap-2 font-mono text-sm text-white">
              <span aria-hidden className="h-4 w-4 rounded border border-white/20" style={{ background: sec.value }} />
              {sec.name}
            </dd>
          </div>
          <div>
            <dt><Mono className="text-white/60">Contrast on surface</Mono></dt>
            <dd className="mt-2 flex items-center gap-3">
              <span className="text-3xl font-semibold tracking-tight">{ratio.toFixed(1)}:1</span>
              <span
                className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.1em] ${
                  passes ? "border-emerald-400/50 text-emerald-300" : "border-amber-400/50 text-amber-300"
                }`}
              >
                {passes ? "Passes AA" : "Fails AA"}
              </span>
            </dd>
          </div>
        </dl>
        <p className="text-sm leading-relaxed text-white/55">
          WCAG AA needs 4.5:1 for body text. The brand grey looked right in the
          brand guideline but failed on white, so secondary text moved to a
          semantic token that holds up in both themes.
        </p>
      </div>

      {/* Mock product card, rendered live from the tokens */}
      <motion.div
        layout
        className="mx-auto w-full max-w-[320px] overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl shadow-black/40 transition-colors duration-300"
        style={{ background: t.surface, fontFamily: "Poppins, var(--font-geist-sans), sans-serif" }}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="space-y-2 p-5">
          <p className="text-xs" style={{ color: t.accent }}>Only XL left in stock</p>
          <p className="text-lg font-semibold" style={{ color: t.primary }}>Melody Dress</p>
          <p className="text-sm transition-colors duration-300" style={{ color: sec.value }}>
            Great &amp; Stylish Shirt · 322 reviews
          </p>
          <p className="text-sm leading-relaxed transition-colors duration-300" style={{ color: sec.value }}>
            A breezy everyday dress in soft cotton with a relaxed fit.
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xl font-semibold" style={{ color: t.primary }}>$19.00</span>
            <span
              className="rounded-full px-4 py-2 text-xs font-medium"
              style={{ background: t.buttonBg, color: t.buttonText }}
            >
              Add to Cart
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Flow explorer                                                     */
/* ---------------------------------------------------------------- */

export function FlowExplorer({ flows }) {
  const [active, setActive] = useState(0);
  const flow = flows[active];

  return (
    <div>
      <div role="tablist" aria-label="App flows" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
        {flows.map((f, i) => (
          <button
            key={f.name}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
              active === i
                ? "border-violet-400 bg-violet-400 text-black"
                : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
            }`}
          >
            <span className="mr-1.5 font-mono text-xs opacity-70">{String(i + 1).padStart(2, "0")}</span>
            {f.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={flow.name}
          role="tabpanel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="mt-8"
        >
          <p className="max-w-2xl leading-relaxed text-white/70">{flow.description}</p>
          <div
            className={`-mx-6 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:overflow-visible md:px-0 ${
              flow.desktop ? "md:grid-cols-2" : "md:grid-cols-4"
            }`}
          >
            {flow.screens.map((s) => (
              <figure
                key={s.src}
                className={`shrink-0 snap-start md:w-auto ${flow.desktop ? "w-[300px]" : "w-[220px]"}`}
              >
                <PhoneFrame
                  src={s.src}
                  alt={s.label}
                  desktop={flow.desktop}
                  ratio={s.ratio || flow.ratio || (flow.desktop ? "1440 / 1024" : "375 / 812")}
                />
                <figcaption className="mt-3">
                  <Mono className="text-white/55">{s.label}</Mono>
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Clickable findings                                                */
/* ---------------------------------------------------------------- */

const severityStyle = {
  High: "border-amber-400/50 text-amber-300",
  Medium: "border-violet-400/50 text-violet-300",
  Low: "border-white/20 text-white/60",
};

function FindingDetail({ f, labels }) {
  return (
    <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
      <div className="space-y-5">
        <div>
          <Mono className="text-white/60">{labels.evidence}</Mono>
          <p className="mt-2 leading-relaxed text-white/80">{f.evidence}</p>
        </div>
        <div>
          <Mono className="text-violet-400">{labels.change}</Mono>
          <p className="mt-2 text-lg leading-relaxed text-white">{f.change}</p>
        </div>
      </div>
      {f.image && <PhoneFrame src={f.image} alt={`Redesign: ${f.finding}`} className="w-[180px]" />}
    </div>
  );
}

export function FindingsExplorer({
  findings,
  labels = { evidence: "Evidence", change: "Design change" },
}) {
  const [active, setActive] = useState(0);
  const f = findings[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <ol className="border-t border-white/10">
        {findings.map((item, i) => {
          const isActive = active === i;
          return (
            <li key={i} className="border-b border-white/10">
              <button
                type="button"
                aria-expanded={isActive}
                onClick={() => setActive(i)}
                className={`grid w-full grid-cols-[2.25rem_1fr_auto] items-center gap-3 py-4 text-left transition ${
                  isActive ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                <Mono className={isActive ? "text-violet-400" : "text-white/35"}>
                  {String(i + 1).padStart(2, "0")}
                </Mono>
                <span className="font-medium">
                  {item.kicker && (
                    <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white/40">
                      {item.kicker}
                    </span>
                  )}
                  {item.finding}
                </span>
                {item.severity ? (
                <span
                  className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] ${
                    severityStyle[item.severity] || severityStyle.Low
                  }`}
                >
                  {item.severity}
                </span>
                ) : (
                  <span />
                )}
              </button>
              {/* Mobile: detail opens inline under the selected finding */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden lg:hidden"
                  >
                    <div className="pb-6 pl-[2.25rem]">
                      <FindingDetail f={item} labels={labels} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>

      {/* Desktop: sticky detail panel */}
      <div className="hidden lg:block">
        <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <p className="text-xl font-semibold tracking-tight">{f.finding}</p>
                <Mono className="shrink-0 text-white/40">
                  {String(active + 1).padStart(2, "0")} / {String(findings.length).padStart(2, "0")}
                </Mono>
              </div>
              <FindingDetail f={f} labels={labels} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Charts                                                            */
/* ---------------------------------------------------------------- */

// Paired bars on a fixed scale, e.g. Likert ratings for two conditions.
export function PairedBars({ rows, series, max = 5, note }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div ref={ref}>
      <div className="mb-6 flex flex-wrap gap-5 text-sm text-white/70">
        {series.map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            <span aria-hidden className={`h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-violet-400" : "bg-white/30"}`} />
            {s}
          </span>
        ))}
      </div>
      <ul className="space-y-7">
        {rows.map((r) => (
          <li key={r.label}>
            <p className="mb-3 text-white/85">{r.label}</p>
            {r.values.map((v, i) => (
              <div key={i} className="mb-2 grid grid-cols-[1fr_3rem] items-center gap-3">
                <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className={`h-full rounded-full ${i === 0 ? "bg-violet-400" : "bg-white/30"}`}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${(v / max) * 100}%` : 0 }}
                    transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <span className="text-right font-mono text-sm text-white/80">
                  <span className="sr-only">{series[i]}: </span>
                  {v.toFixed(1)}
                </span>
              </div>
            ))}
          </li>
        ))}
      </ul>
      {note && <p className="mt-5 text-xs text-white/60">{note}</p>}
    </div>
  );
}

// Horizontal percentage bars, e.g. survey multi-select answers.
export function PercentBars({ rows, note }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div ref={ref}>
      <ul className="space-y-4">
        {rows.map((r, i) => (
          <li key={r.label} className="grid grid-cols-[1fr_3rem] items-center gap-x-3 gap-y-2">
            <span className="text-sm text-white/80">{r.label}</span>
            <span className="text-right font-mono text-sm text-white/80">{r.value}%</span>
            <div className="col-span-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-violet-400"
                style={{ opacity: 1 - i * 0.1 }}
                initial={{ width: 0 }}
                animate={{ width: inView ? `${r.value}%` : 0 }}
                transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </li>
        ))}
      </ul>
      {note && <p className="mt-5 text-xs text-white/60">{note}</p>}
    </div>
  );
}
