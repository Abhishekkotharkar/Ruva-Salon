import { phoneDisplay, phoneHref } from "../data/contact";

type BookingCTAProps = {
  onBook: () => void;
};

export default function BookingCTA({ onBook }: BookingCTAProps) {
  return (
    <section className="bg-clay px-5 py-16 text-ivory sm:px-8">
      <div className="reveal mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="eyebrow text-ivory/70">Book</p>
          <h2 className="font-display text-5xl font-semibold leading-tight sm:text-7xl">Your Next Look Starts Here</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ivory/82">
            Ready for a refresh, transformation or simply some time for yourself?
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <button className="btn-light justify-center" type="button" onClick={onBook}>
            Book an Appointment
          </button>
          <a className="btn-outline-light justify-center" href={phoneHref}>
            Call {phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
