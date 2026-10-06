import { phoneDisplay, phoneHref } from "../data/contact";
import { navItems } from "../data/nav";

type FooterProps = {
  onBook: () => void;
};

export default function Footer({ onBook }: FooterProps) {
  return (
    <footer className="bg-espresso px-5 pb-24 pt-14 text-ivory sm:px-8 lg:pb-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <p className="font-display text-4xl tracking-[0.18em]">RUVA SALON</p>
          <p className="mt-5 max-w-md text-lg leading-8 text-ivory/74">
            Bespoke Hair, Beauty & Grooming for Refined, Confident Elegance.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm uppercase tracking-[0.18em]" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a className="text-ivory/72 transition hover:text-champagne" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <button className="text-left text-ivory/72 transition hover:text-champagne" onClick={onBook} type="button">
            Book Appointment
          </button>
        </nav>
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-champagne">Contact</p>
          <p className="mt-5 text-ivory/74">Powai, Mumbai</p>
          <a className="mt-2 block text-ivory/90" href={phoneHref}>
            {phoneDisplay}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/12 pt-6 text-sm text-ivory/54">
        © 2026 Ruva Salon. All rights reserved.
      </div>
    </footer>
  );
}
