import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = router.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  const isDarkModeNavbar = isHomePage && !isScrolled;

  const textClass = isDarkModeNavbar ? "text-white" : "text-white";
  const mutedTextClass = isDarkModeNavbar
    ? "text-white/60 hover:text-white"
    : "text-white/60 hover:text-white";
  const underlineClass = isDarkModeNavbar ? "bg-white" : "bg-white";
  const headerClass = isDarkModeNavbar
    ? "bg-transparent"
    : "border-b border-white/10 bg-gradient-to-t from-black-00 to-purple-700 bg-clip-text text-transparent backdrop-blur-xl";

  const logoHoverClass = isDarkModeNavbar
    ? "hover:text-white/75"
    : "hover:text-black/70";

  const desktopButtonClass = isDarkModeNavbar
    ? "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:bg-white hover:text-black"
    : "border border-black/10 bg-white text-black hover:-translate-y-0.5 hover:bg-black hover:text-white";

  const mobileButtonClass = isDarkModeNavbar
    ? "border border-white/15 bg-white/5 text-white"
    : "border border-black/10 bg-white text-black";

  const mobilePanelClass = isDarkModeNavbar
    ? "border-t border-white/10 bg-black/80 backdrop-blur-2xl"
    : "border-t border-black/10 bg-white";

  const mobileLinkBase = isDarkModeNavbar
    ? "border-b border-white/10"
    : "border-b border-black/5";

  const mobileLinkText = (active) =>
    isDarkModeNavbar
      ? active
        ? "text-white"
        : "text-white/65 hover:text-white"
      : active
        ? "text-black"
        : "text-black/60 hover:text-black";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${textClass} ${logoHoverClass}`}
        >
          Priyank Shah
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-medium transition-colors duration-300 ${active ? textClass : mutedTextClass
                  }`}
              >
                <span className="relative inline-block overflow-hidden">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    {link.label}
                  </span>
                  <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
                    {link.label}
                  </span>
                </span>

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full transition-all duration-300 ${underlineClass} ${active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href="/resume/Priyank_Shah_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 ease-out ${desktopButtonClass}`}
          >
            <span>Resume</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md transition duration-300 md:hidden ${mobileButtonClass}`}
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 transition-all duration-300 ${isDarkModeNavbar ? "bg-white" : "bg-black"
                } ${isOpen ? "top-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 transition-all duration-300 ${isDarkModeNavbar ? "bg-white" : "bg-black"
                } ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 transition-all duration-300 ${isDarkModeNavbar ? "bg-white" : "bg-black"
                } ${isOpen ? "top-[7px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } ${mobilePanelClass}`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-4 text-base font-medium transition duration-300 ${mobileLinkBase} ${mobileLinkText(
                  active
                )}`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/resume"
            className={`mt-6 inline-flex w-fit items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-300 ease-out ${isDarkModeNavbar
                ? "bg-white text-black hover:-translate-y-0.5 hover:bg-white/90"
                : "bg-black text-white hover:-translate-y-0.5 hover:opacity-90"
              }`}
          >
            View Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}