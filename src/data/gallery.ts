export type GalleryItem = {
  title: string;
  category: "Hair" | "Colour" | "Nails" | "Beauty" | "Salon" | "Transformations";
  image: string;
  alt: string;
  tall?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Dimensional Colour",
    category: "Colour",
    image:
      "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=900&q=82",
    alt: "Editorial placeholder for colour work, not an actual Ruva Salon result",
    tall: true,
  },
  {
    title: "Polished Nails",
    category: "Nails",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=82",
    alt: "Editorial placeholder for nail services, replace with Ruva Salon photo",
  },
  {
    title: "Beauty Ritual",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=900&q=82",
    alt: "Editorial placeholder for beauty treatment, replace with Ruva Salon photo",
  },
  {
    title: "Salon Detail",
    category: "Salon",
    image:
      "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?auto=format&fit=crop&w=900&q=82",
    alt: "Editorial placeholder salon interior detail, not Ruva Salon's interior",
    tall: true,
  },
  {
    title: "Styling Finish",
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=900&q=82",
    alt: "Editorial placeholder for hair styling, replace with Ruva Salon work",
  },
  {
    title: "Transformation Mood",
    category: "Transformations",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=82",
    alt: "Editorial placeholder for transformation gallery, not a Ruva Salon before-after",
  },
];
