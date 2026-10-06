import { useState } from "react";
import About from "../components/About";
import BookingCTA from "../components/BookingCTA";
import BookingModal from "../components/BookingModal";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import FeaturedServices from "../components/FeaturedServices";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileBottomBar from "../components/MobileBottomBar";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import StructuredData from "../components/StructuredData";
import TrustBar from "../components/TrustBar";
import WhyRuva from "../components/WhyRuva";
import { useReveal } from "../hooks/useReveal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  useReveal();

  return (
    <>
      <StructuredData />
      <Header onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <TrustBar />
        <About onBook={openBooking} />
        <Services onBook={openBooking} />
        <FeaturedServices onBook={openBooking} />
        <Experience />
        <WhyRuva />
        <Gallery />
        <Reviews />
        <BookingCTA onBook={openBooking} />
        <Contact onBook={openBooking} />
      </main>
      <Footer onBook={openBooking} />
      <MobileBottomBar onBook={openBooking} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
