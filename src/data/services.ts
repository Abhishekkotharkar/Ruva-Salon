export type ServiceCategory = {
  title: string;
  description: string;
  items: string[];
};

export type FeaturedService = {
  title: string;
  copy: string;
  image: string;
  alt: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Hair",
    description: "Cuts, colour, care and styling shaped around your hair and lifestyle.",
    items: [
      "Haircuts",
      "Hair Styling",
      "Blow-Dry",
      "Hair Colour",
      "Global Colour",
      "Highlights",
      "Balayage",
      "Ombre",
      "Smoothening",
      "Keratin",
      "Hair Spa",
      "Scalp Care",
      "Hair Repair / Bond Repair",
    ],
  },
  {
    title: "Nails",
    description: "Detailed nail care with a polished, contemporary finish.",
    items: ["Manicure", "Pedicure", "Nail Art", "Nail Extensions"],
  },
  {
    title: "Skin & Beauty",
    description: "Refreshing rituals and beauty essentials for a cared-for glow.",
    items: ["Facials", "Clean-ups", "Waxing", "Threading", "Beauty Treatments"],
  },
  {
    title: "Makeup",
    description: "Makeup for occasions, celebrations and refined bridal moments.",
    items: ["Makeup", "Occasion Makeup", "Bridal Makeup"],
  },
  {
    title: "Grooming",
    description: "Modern men's grooming and styling with a precise finish.",
    items: ["Men's Grooming", "Styling", "Grooming Treatments"],
  },
  {
    title: "Massage & Spa",
    description: "Relaxation-led treatments for calm, restoration and pause.",
    items: ["Massage", "Relaxation Treatments"],
  },
];

export const featuredServices: FeaturedService[] = [
  {
    title: "Hair Colour",
    copy: "From dimensional balayage to modern global colour, create a look designed around your style.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1100&q=82",
    alt: "Editorial placeholder of a hair colour salon moment, not Ruva Salon's actual photo",
  },
  {
    title: "Hair Treatments",
    copy: "Restore softness, shine and manageability with professional treatments tailored to your hair.",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1100&q=82",
    alt: "Editorial placeholder of premium hair care, replace with Ruva Salon imagery",
  },
  {
    title: "Nail Art & Extensions",
    copy: "Detailed nail care and contemporary designs finished with precision.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1100&q=82",
    alt: "Editorial placeholder of nail care, replace with Ruva Salon imagery",
  },
  {
    title: "Beauty & Skin",
    copy: "Relax, refresh and restore with personalized beauty rituals.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=82",
    alt: "Editorial placeholder of facial beauty care, replace with Ruva Salon imagery",
  },
];
