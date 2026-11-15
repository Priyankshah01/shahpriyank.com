import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Editorial navbar, matched to the hero: Geist wordmark with the violet
// full stop, numbered Geist Mono links, thin rules instead of pills.
const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

const RESUME_URL = "/resume/Priyank_Shah_Resume_2026.pdf";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href) =>
    !href.startsWith("/#") && router.pathname.startsWith(href);

  const isTransparent = router.pathname === "/" && !isScrolled && !isOpen;

  return (
    <header
      // No backdrop-blur while the menu is open: a backdrop-filter on the header
      // would make it the containing block for the fixed mobile menu panel.
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isOpen
          ? "border-white/10 bg-[#050505]"
          : isTransparent
            ? "border-transparent bg-transparent"
            : "border-white/10 bg-[#050505]/80 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white transition hover:text-white/80"
        >
          Priyank Shah<span className="text-violet-400">.</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link, i) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group flex items-baseline gap-1.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-white" : "text-white/55 hover:text-white"
                }`}
              >
                <span
                  className={`transition-colors ${
                    active ? "text-violet-400" : "text-white/30 group-hover:text-violet-400"
                  }`}
                >
                  0{i + 1}
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden items-center gap-2 border-b border-white/25 pb-1 font-mono text-xs uppercase tracking-[0.14em] text-white transition hover:border-violet-400 md:inline-flex"
        >
          Resume
          <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="font-mono text-xs uppercase tracking-[0.14em] text-white md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile: full-height editorial menu */}
      <div
        className={`fixed inset-x-0 bottom-0 top-20 bg-[#050505] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col px-6 pb-10 pt-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-baseline gap-4 border-b border-white/10 py-5 text-4xl font-semibold tracking-tight text-white"
            >
              <span className="font-mono text-xs font-normal text-violet-400">
                0{i + 1}
              </span>
              {link.label}
            </Link>
          ))}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-white/70"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
