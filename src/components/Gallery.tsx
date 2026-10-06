import { useEffect, useState } from "react";
import { galleryItems, type GalleryItem } from "../data/gallery";
import Section from "./Section";

const categories = ["All", "Hair", "Colour", "Nails", "Beauty", "Salon", "Transformations"] as const;

export default function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title="A Visual Direction for Ruva"
      copy="These are editorial placeholder images for layout and mood. Replace them with verified Ruva Salon work, interiors and transformation photos when available."
      className="bg-pearl"
    >
      <div className="reveal -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
        {categories.map((category) => (
          <button
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === category ? "border-espresso bg-espresso text-ivory" : "border-espresso/15 text-stone-700 hover:border-espresso"
            }`}
            type="button"
            onClick={() => setActive(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <button
            className="reveal group mb-5 block w-full break-inside-avoid overflow-hidden bg-espresso text-left shadow-soft"
            type="button"
            onClick={() => setSelected(item)}
            key={item.title}
          >
            <div className={`${item.tall ? "aspect-[4/5]" : "aspect-[5/4]"} overflow-hidden`}>
              <img
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-5 text-ivory">
              <span className="font-display text-2xl">{item.title}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-champagne">{item.category}</span>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} image preview`}
          onMouseDown={() => setSelected(null)}
        >
          <div className="max-h-[90vh] w-full max-w-5xl bg-espresso p-3" onMouseDown={(event) => event.stopPropagation()}>
            <button className="mb-3 ml-auto block text-sm uppercase tracking-[0.2em] text-ivory" onClick={() => setSelected(null)} type="button">
              Close
            </button>
            <img className="max-h-[76vh] w-full object-contain" src={selected.image} alt={selected.alt} />
            <p className="px-2 py-3 text-sm text-ivory/70">{selected.alt}</p>
          </div>
        </div>
      )}
    </Section>
  );
}
