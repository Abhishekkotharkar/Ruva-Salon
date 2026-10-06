import { phoneHref } from "../data/contact";

type MobileBottomBarProps = {
  onBook: () => void;
};

export default function MobileBottomBar({ onBook }: MobileBottomBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-espresso text-sm font-bold uppercase tracking-[0.18em] text-ivory shadow-[0_-16px_42px_rgba(0,0,0,0.18)] lg:hidden">
      <a className="flex min-h-14 items-center justify-center border-r border-white/10" href={phoneHref}>
        Call
      </a>
      <button className="flex min-h-14 items-center justify-center bg-champagne text-espresso" type="button" onClick={onBook}>
        Book Appointment
      </button>
    </div>
  );
}
