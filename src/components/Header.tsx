import { useEffect, useState } from "react";
import { navItems } from "../data/nav";

type HeaderProps = {
  onBook: () => void;
};

export default function Header({ onBook }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-espresso/10 bg-ivory/88 py-2 shadow-[0_14px_40px_rgba(32,23,17,0.08)] backdrop-blur-xl"
          : "border-white/10 bg-ivory/70 py-4 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="leading-none" aria-label="Ruva Salon home" onClick={() => setOpen(false)}>
          <span className="block font-display text-3xl font-semibold tracking-[0.18em] text-espresso">RUVA</span>
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.56em] text-clay">Salon</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="btn-primary hidden sm:inline-flex" type="button" onClick={onBook}>
            Book Appointment
          </button>
          <button
            className="btn-primary px-4 sm:hidden"
            type="button"
            onClick={onBook}
            aria-label="Book an appointment"
          >
            Book
          </button>
          <button
            className="icon-button lg:hidden"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <span className="block h-px w-5 bg-current"></span>
            <span className="block h-px w-5 bg-current"></span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-5 mt-3 border border-espresso/10 bg-pearl p-4 shadow-soft lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a className="mobile-link" href={item.href} key={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
