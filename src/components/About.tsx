import Section from "./Section";

type AboutProps = {
  onBook: () => void;
};

export default function About({ onBook }: AboutProps) {
  return (
    <Section id="about" eyebrow="About Ruva" title="Where Beauty Meets Personal Expression">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal overflow-hidden shadow-soft">
          <img
            className="aspect-[4/5] w-full object-cover"
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=84"
            alt="Editorial placeholder of a luxury beauty service, replace with Ruva Salon imagery"
            loading="lazy"
          />
        </div>
        <div className="reveal max-w-2xl lg:pl-8">
          <p className="text-xl leading-9 text-stone-700">
            Ruva Salon is a luxury hair, beauty and grooming destination in Hiranandani Gardens, Powai, focused
            on personalized service, refined techniques, quality products and contemporary styling.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Personalized consultations",
              "Attention to detail",
              "Experienced professionals",
              "Premium products",
              "Contemporary techniques",
              "Comfortable environment",
              "Individualized styling",
              "Complete beauty care",
            ].map((item) => (
              <div className="flex items-center gap-3 border-b border-espresso/10 pb-3" key={item}>
                <span className="h-1.5 w-1.5 rounded-full bg-champagne"></span>
                <span className="text-sm uppercase tracking-[0.16em] text-stone-700">{item}</span>
              </div>
            ))}
          </div>
          <button className="btn-secondary mt-9" type="button" onClick={onBook}>
            Discover Ruva
          </button>
        </div>
      </div>
    </Section>
  );
}
