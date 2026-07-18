import React, { useEffect } from "react";
import SalonCard from "./SalonCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalons } from '../../Redux/Salon/action'

const salons = [
  {
    id: 1,
    name: "Pablo Luxury Salon",
    rating: 4.8,
    reviews: 128,
    location: "Adani House, Mumbai",
    description: "Premium haircut, spa, grooming and styling services.",
    image:
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
    tag: "Top Rated",
  },
  {
    id: 2,
    name: "Glow Studio",
    rating: 4.7,
    reviews: 96,
    location: "Bandra West, Mumbai",
    description: "Beauty, skincare, makeup and bridal salon services.",
    image:
      "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg",
    tag: "Premium",
  },
  {
    id: 3,
    name: "Urban Cuts",
    rating: 4.6,
    reviews: 84,
    location: "Andheri East, Mumbai",
    description: "Modern haircuts, beard styling and grooming packages.",
    image:
      "https://images.pexels.com/photos/3998421/pexels-photo-3998421.jpeg",
    tag: "Popular",
  },
  {
    id: 4,
    name: "Elite Beauty Lounge",
    rating: 4.9,
    reviews: 156,
    location: "Powai, Mumbai",
    description: "Luxury salon experience with expert stylists.",
    image:
      "https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg",
    tag: "Luxury",
  },
];

const SalonList = () => {
  const dispatch = useDispatch()
  const {auth, salon} = useSelector(store => store)
  
  useEffect(() => {
    dispatch(fetchSalons())
  },[auth.jwt])
  
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {salon.salons.map((salon) => (
        <SalonCard key={salon.id} salon={salon} />
      ))}
    </div>
  );
};

export default SalonList;