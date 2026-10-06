const trustItems = ["5.0 Rated Experience", "Personalized Service", "Premium Beauty Care", "Hair · Beauty · Grooming"];

export default function TrustBar() {
  return (
    <section className="border-y border-espresso/10 bg-espresso text-ivory">
      <div className="mx-auto grid max-w-7xl divide-y divide-white/12 px-5 sm:px-8 md:grid-cols-4 md:divide-x md:divide-y-0">
        {trustItems.map((item) => (
          <p className="py-5 text-center text-xs font-semibold uppercase tracking-[0.24em] text-ivory/85" key={item}>
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
