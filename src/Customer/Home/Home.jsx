import React from "react";
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
  return (
    <>
      <Banner />

      <Statistics />

      <FeaturedStylists />

      <PopularServices />

      <SalonShowcase />

      <CustomerReviews />

      <SalonGallery />

      <BookingCTA />

      <Footer />
    </>
  );
};

export default Home;
