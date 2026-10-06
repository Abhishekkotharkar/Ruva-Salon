import { mapsUrl } from "../data/contact";

type HeroProps = {
  onBook: () => void;
};

export default function Hero({ onBook }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-ivory pt-28 sm:pt-32">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(214,189,135,0.24),transparent_42%)]"></div>
      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:pb-20">
        <div className="reveal relative z-10">
          <p className="eyebrow">Hiranandani Gardens · Powai · Mumbai</p>
          <h1 className="mt-5 max-w-3xl font-display text-[4.2rem] font-semibold leading-[0.88] text-espresso sm:text-8xl lg:text-[7.8rem]">
            Beauty, Refined.
            <span className="block italic text-clay">Confidence, Reimagined.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-700 sm:text-xl">
            Personalized hair, beauty and grooming experiences crafted with precision, care and contemporary
            style.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="btn-primary justify-center" type="button" onClick={onBook}>
              Book an Appointment
            </button>
            <a className="btn-secondary justify-center" href="#services">
              Explore Services
            </a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm uppercase tracking-[0.24em] text-stone-600">
            <span>5.0 ★ Client Rating</span>
            <a className="border-b border-champagne pb-1" href={mapsUrl} target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </div>
        </div>

        <div className="reveal relative min-h-[520px] lg:min-h-[680px]">
          <div className="absolute right-0 top-0 h-[74%] w-[72%] overflow-hidden rounded-t-full shadow-soft">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=84"
              alt="Editorial placeholder of a premium salon experience, replace with Ruva Salon photography"
              fetchPriority="high"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[46%] w-[54%] overflow-hidden border-[12px] border-ivory shadow-soft">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=84"
              alt="Editorial placeholder of professional hair care, not an actual Ruva Salon photo"
              fetchPriority="high"
            />
          </div>
          <div className="absolute bottom-10 right-5 max-w-[240px] bg-espresso p-5 text-ivory shadow-soft">
            <p className="font-display text-3xl leading-none">Luxury Hair, Beauty & Grooming</p>
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-champagne">Powai, Mumbai</p>
          </div>
        </div>
      </div>
    </section>
  );
}
