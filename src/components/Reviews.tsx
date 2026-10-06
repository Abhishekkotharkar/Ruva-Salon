import { mapsUrl } from "../data/contact";
import { reviewThemes } from "../data/reviews";
import Section from "./Section";

export default function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Reviews"
      title="A 5.0 Rated Experience"
      copy="Ruva Salon is publicly listed with a 5.0 rating. The notes below reflect review themes without inventing customer names, exact counts or direct quotations."
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal bg-espresso p-8 text-ivory sm:p-10">
          <p className="font-display text-8xl leading-none text-champagne">5.0</p>
          <p className="mt-2 text-2xl">★★★★★</p>
          <p className="mt-7 max-w-sm leading-8 text-ivory/76">
            Review snippets should be connected to verified public sources before publishing exact customer wording.
          </p>
          <a className="btn-light mt-8" href={mapsUrl} target="_blank" rel="noreferrer">
            See More Reviews
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {reviewThemes.map((theme) => (
            <article className="reveal border border-espresso/10 bg-pearl p-7" key={theme.title}>
              <h3 className="font-display text-3xl text-espresso">{theme.title}</h3>
              <p className="mt-4 leading-7 text-stone-700">{theme.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
