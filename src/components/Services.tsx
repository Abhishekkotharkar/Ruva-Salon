import { serviceCategories } from "../data/services";
import Section from "./Section";

type ServicesProps = {
  onBook: () => void;
};

export default function Services({ onBook }: ServicesProps) {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Designed Around You"
      copy="Ruva is structured as a full-service beauty destination for hair, nails, skin, makeup, grooming and relaxation."
      className="bg-pearl"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {serviceCategories.map((category) => (
          <article className="reveal service-card" key={category.title}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-4xl text-espresso">{category.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{category.description}</p>
              </div>
              <span className="whitespace-nowrap text-xs uppercase tracking-[0.18em] text-clay">Consult</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span className="rounded-full border border-espresso/10 px-3 py-2 text-sm text-stone-700" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <button className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-espresso" onClick={onBook} type="button">
              Book a Consultation
            </button>
          </article>
        ))}
      </div>
    </Section>
  );
}
