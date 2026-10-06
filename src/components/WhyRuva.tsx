import Section from "./Section";

const reasons = [
  ["Personalized Attention", "Every appointment begins with understanding your needs."],
  ["Expert Craft", "Experienced professionals using modern techniques."],
  ["Premium Products", "Quality products selected for professional results."],
  ["Refined Environment", "A calm, modern and comfortable salon experience."],
  ["Complete Beauty Destination", "Hair, beauty, nails and grooming under one roof."],
  ["Contemporary Style", "Modern looks balanced with your individual personality."],
];

export default function WhyRuva() {
  return (
    <Section eyebrow="Why Ruva" title="Refined Care Without the Noise">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map(([title, copy]) => (
          <article className="reveal border border-espresso/10 bg-pearl p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft" key={title}>
            <div className="mb-8 h-px w-14 bg-champagne"></div>
            <h3 className="font-display text-3xl text-espresso">{title}</h3>
            <p className="mt-4 leading-7 text-stone-650">{copy}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
