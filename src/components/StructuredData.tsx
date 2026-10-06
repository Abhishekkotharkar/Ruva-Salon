import { address, phoneDisplay } from "../data/contact";

const data = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Ruva Salon",
  telephone: phoneDisplay,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${address[0]}, ${address[1]}`,
    addressLocality: "Powai, Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400076",
    addressCountry: "IN",
  },
  areaServed: ["Powai", "Hiranandani Gardens", "Mumbai"],
  priceRange: "Consult for pricing",
};

export default function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
