import Section from "./Section";

const steps = [
  ["01", "Consult", "Understand your style, preferences and goals."],
  ["02", "Personalize", "Our professionals recommend the right treatment for you."],
  ["03", "Transform", "Experience carefully executed beauty and grooming services."],
  ["04", "Leave Confident", "A polished result designed to feel uniquely yours."],
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="The Ruva Experience" className="bg-espresso text-ivory">
      <div className="grid gap-px overflow-hidden bg-white/12 md:grid-cols-4">
        {steps.map(([number, title, copy]) => (
          <article className="reveal bg-espresso p-7 sm:p-8" key={number}>
            <p className="font-display text-5xl text-champagne">{number}</p>
            <h3 className="mt-8 font-display text-3xl">{title}</h3>
            <p className="mt-4 leading-7 text-ivory/72">{copy}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
