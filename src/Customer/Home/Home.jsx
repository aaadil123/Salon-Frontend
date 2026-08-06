import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Banner from "./Banner";
import HomeServiceCard from "./HomeServiceCard";
import { services } from "../../Data/services";
import SalonList from "../Salon/SalonList";
import Footer from "./Footer";
import BookingCTA from "./BookingCTA";
import CustomerReviews from "./CustomerReviews";
import SalonShowcase from "./SalonShowcase";
import PopularServices from "./PopularService";
import FeaturedStylists from "./FeaturedStylists";
import Statistics from "./Statistics";
import SalonGallery from "./SalonGallery";

const Home = () => {
  const salonRef = useRef(null);
  const location = useLocation();

  const handleBookAppointment = () => {
    salonRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (location.hash === "#salon") {
      setTimeout(() => {
        salonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Banner onBookAppointment={handleBookAppointment} />

      <Statistics />

      <FeaturedStylists />

      <PopularServices />

      <div
        id="salon"
        ref={salonRef}
        className="scroll-mt-[60px]"
      >
        <SalonShowcase />
      </div>

      <CustomerReviews />

      <SalonGallery />

      <BookingCTA />

      <Footer />
    </>
  );
};

export default Home;