import { featuredServices } from "../data/services";
import Section from "./Section";

type FeaturedServicesProps = {
  onBook: () => void;
};

export default function FeaturedServices({ onBook }: FeaturedServicesProps) {
  return (
    <Section eyebrow="Featured Services" title="Modern Beauty, Precisely Finished">
      <div className="grid gap-5 lg:grid-cols-4">
        {featuredServices.map((service, index) => (
          <article
            className={`reveal group relative min-h-[430px] overflow-hidden bg-espresso text-ivory ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
            key={service.title}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105"
              src={service.image}
              alt={service.alt}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-champagne">0{index + 1}</p>
              <h3 className="mt-2 font-display text-4xl">{service.title}</h3>
              <p className="mt-3 max-w-md leading-7 text-ivory/84">{service.copy}</p>
              <button className="mt-6 border-b border-champagne pb-1 text-sm uppercase tracking-[0.2em]" onClick={onBook} type="button">
                Consult for Pricing
              </button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
