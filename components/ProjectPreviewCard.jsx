import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "motion/react";

// Project card whose image area previews several screens from the case study.
// Desktop: hover (or keyboard focus) cycles through the screens.
// Touch: swipe the image strip. Dots jump to a screen on any device.
// With reduced motion, nothing auto-advances; swipe and dots still work.

const INTERVAL = 1100;

export default function ProjectPreviewCard({ project }) {
  const previews = project.previews?.length
    ? project.previews
    : [{ src: project.image1 }];
  const stripRef = useRef(null);
  const timerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const href = `/projects/${project.slug}`;

  const goTo = (i, smooth = true) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: smooth && !reduceMotion ? "smooth" : "auto" });
    setIndex(i);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const start = () => {
    if (reduceMotion || previews.length < 2 || timerRef.current) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % previews.length;
        const el = stripRef.current;
        if (el) el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
        return next;
      });
    }, INTERVAL);
  };

  const reset = () => {
    stop();
    goTo(0, false);
  };

  useEffect(() => stop, []);

  // Keep the dots in sync when the strip is swiped by touch.
  const onScroll = () => {
    const el = stripRef.current;
    if (!el || timerRef.current) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== index) setIndex(i);
  };

  return (
    <article
      onMouseEnter={start}
      onMouseLeave={reset}
      onFocus={start}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) reset();
      }}
      className="group relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/20 motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[4/3]">
        <div
          ref={stripRef}
          onScroll={onScroll}
          className="no-scrollbar flex h-full snap-x snap-mandatory overflow-x-auto"
          style={{ background: project.previewBg || "#111" }}
        >
          {previews.map((p, i) => (
            <Link
              key={p.src}
              href={href}
              tabIndex={-1}
              aria-hidden={i === 0 ? undefined : true}
              className="h-full w-full shrink-0 snap-start"
            >
              <img
                src={`/images/${p.src}`}
                alt={i === 0 ? `${project.title} preview` : ""}
                loading="lazy"
                className={`h-full w-full ${
                  p.fit === "contain" ? "object-contain py-3" : "object-cover object-top"
                }`}
              />
            </Link>
          ))}
        </div>

        {previews.length > 1 && (
          <div className="absolute inset-x-0 bottom-2.5 flex justify-center gap-1.5">
            {previews.map((p, i) => (
              <button
                key={p.src}
                type="button"
                aria-label={`Show screen ${i + 1} of ${previews.length}`}
                aria-current={index === i ? "true" : undefined}
                onClick={() => {
                  stop();
                  goTo(i);
                }}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.25)] transition-all ${
                    index === i ? "w-4 bg-white" : "w-1.5 bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <Link href={href} className="block p-5 focus-visible:outline-none">
        <p className="text-xs text-white/50">{project.category}</p>
        <h3 className="mt-1.5 text-lg font-semibold group-focus-within:text-violet-300">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/65">
          {project.shortDescription}
        </p>
        {project.stat && (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-violet-300">
            {project.stat}
          </p>
        )}
      </Link>
    </article>
  );
}
