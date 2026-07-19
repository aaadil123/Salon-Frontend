import React, { useEffect } from "react";
import SalonCard from "./SalonCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalons } from '../../Redux/Salon/action'



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