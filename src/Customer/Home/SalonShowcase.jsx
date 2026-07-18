import React from "react";
import SalonList from "../Salon/SalonList";

const SalonShowcase = () => {
  return (
    <section className="px-6 lg:px-20 py-16">
      <h2 className="text-4xl font-bold mb-10">
        Explore Premium Salons
      </h2>

      <SalonList />
    </section>
  );
};

export default SalonShowcase;