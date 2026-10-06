import { address, mapsUrl, phoneDisplay, phoneHref } from "../data/contact";
import Section from "./Section";

type ContactProps = {
  onBook: () => void;
};

export default function Contact({ onBook }: ContactProps) {
  return (
    <Section id="contact" eyebrow="Contact" title="Visit Ruva Salon" className="bg-ivory">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="reveal bg-pearl p-8 shadow-soft sm:p-10">
          <h3 className="font-display text-4xl text-espresso">Ruva Salon</h3>
          <address className="mt-6 not-italic leading-8 text-stone-700">
            {address.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </address>
          <p className="mt-6 text-stone-700">
            Phone:{" "}
            <a className="font-semibold text-espresso" href={phoneHref}>
              {phoneDisplay}
            </a>
          </p>
          <div className="mt-8 grid gap-3">
            <a className="btn-primary justify-center" href={mapsUrl} target="_blank" rel="noreferrer">
              Get Directions
            </a>
            <a className="btn-secondary justify-center" href={phoneHref}>
              Call Now
            </a>
            <button className="btn-secondary justify-center" type="button" onClick={onBook}>
              Book Appointment
            </button>
          </div>
        </div>
        <div className="reveal relative min-h-[420px] overflow-hidden bg-espresso shadow-soft">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1400&q=84"
            alt="Editorial placeholder salon reception mood, not Ruva Salon's actual location photo"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-espresso/35"></div>
          <div className="absolute bottom-0 left-0 max-w-lg p-8 text-ivory sm:p-10">
            <p className="font-display text-5xl leading-tight">Hiranandani Gardens, Powai</p>
            <p className="mt-4 leading-7 text-ivory/78">
              Use the verified directions link to reach Ruva Salon at Daffodil, A Wing, Central Avenue.
            </p>
            <a className="btn-light mt-7" href={mapsUrl} target="_blank" rel="noreferrer">
              Open Google Maps
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
