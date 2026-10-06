import { phoneDisplay, phoneHref } from "../data/contact";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function BookingModal({ open, onClose }: BookingModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/45 px-4 py-5 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-lg bg-ivory p-7 shadow-soft sm:p-9"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="eyebrow">Book Appointment</p>
            <h2 id="booking-title" className="font-display text-4xl text-espresso">
              Let Ruva know what you need.
            </h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close booking modal">
            x
          </button>
        </div>
        <p className="mt-5 leading-7 text-stone-700">
          Online booking is ready to connect once Ruva shares the verified booking URL. For now, the fastest
          path is to call the salon directly.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <a className="btn-primary justify-center" href={phoneHref}>
            Call {phoneDisplay}
          </a>
          <a className="btn-secondary justify-center" href="#contact" onClick={onClose}>
            View Contact
          </a>
        </div>
      </div>
    </div>
  );
}
