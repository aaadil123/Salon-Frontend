import React, { useEffect } from "react";
import { Button, Chip, Avatar } from "@mui/material";
import {
  AccessTime,
  FavoriteBorder,
  LocationOn,
  Star,
  Verified,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalonById } from "../../../Redux/Salon/action";
import { getCategoriesBySalon } from '../../../Redux/Category/action'

const SalonDetail = () => {
  const {id} = useParams();
  const dispatch = useDispatch()
  const {salon} = useSelector(store => store)
  const words = salon.salon?.name ? salon.salon?.name.split(/\s+/) : [];
  const lastWord = words.at(-1) || "";
  const firstPart = words.slice(0, -1).join(" ");

  useEffect(() => {
    if(id)
      dispatch(fetchSalonById(id))
      dispatch(getCategoriesBySalon({
        jwt:localStorage.getItem('jwt'),
        salonId:id
      }))
  },[id])
  
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-900 via-slate-800 to-violet-700 p-4 lg:p-8">
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#D4A574]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative grid lg:grid-cols-2 gap-8 items-center">
        {/* LEFT CONTENT */}
        <div className="text-white space-y-6 p-4 lg:p-8">
          <div className="flex flex-wrap gap-3">
            <Chip
              icon={<Verified />}
              label="Verified Luxury Salon"
              sx={{
                bgcolor: "rgba(255,255,255,0.12)",
                color: "#fff",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            />

            <Chip
              label="Top Rated"
              sx={{
                bgcolor: "#F0DDBF",
                color: "#A87842",
                fontWeight: 700,
              }}
            />
          </div>

          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {firstPart}
              <span className="block text-[#D4A574]">
                {lastWord}
              </span>
            </h1>

            <p className="mt-5 text-slate-300 max-w-xl text-lg">
              Premium haircut, beard grooming, spa, skincare and bridal makeup
              services by professional stylists.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-4">
              <div className="flex items-center gap-2">
                <Star sx={{ color: "#D4A574" }} />
                <span className="font-bold text-xl">4.8</span>
              </div>
              <p className="text-sm text-slate-300 mt-1">128 reviews</p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-4">
              <div className="flex items-center gap-2">
                <AccessTime sx={{ color: "#D4A574" }} />
                <span className="font-bold text-lg">Open</span>
              </div>
              <p className="text-sm text-slate-300 mt-1">{salon.salon?.openTime} AM - {salon.salon?.closeTime} PM</p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-4">
              <div className="flex items-center gap-2">
                <LocationOn sx={{ color: "#D4A574" }} />
                <span className="font-bold text-lg">{salon.salon?.city}</span>
              </div>
              <p className="text-sm text-slate-300 mt-1">{salon.salon?.address}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(135deg,#667eea,#764ba2)",
                borderRadius: "999px",
                px: 4,
              }}
            >
              Book Appointment
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<FavoriteBorder />}
              sx={{
                borderRadius: "999px",
                color: "#fff",
                borderColor: "rgba(255,255,255,0.55)",
              }}
            >
              Save Salon
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="relative h-[520px] hidden lg:block">
          <img
            src={salon.salon?.images[0]}
            alt=""
            className="absolute right-0 top-0 h-[520px] w-[72%] object-cover rounded-[36px] shadow-2xl border border-white/10"
          />

          <img
            src={salon.salon?.images[1]}
            alt=""
            className="absolute left-0 top-16 h-56 w-52 object-cover rounded-[28px] shadow-2xl border-4 border-white/20"
          />

          <img
            src={salon.salon?.images[2]}
            alt=""
            className="absolute left-10 bottom-10 h-48 w-64 object-cover rounded-[28px] shadow-2xl border-4 border-white/20"
          />

          <div className="absolute right-8 bottom-8 rounded-3xl bg-white/95 p-4 shadow-xl flex items-center gap-3">
            <Avatar sx={{ bgcolor: "#7c3aed" }}>
              <Star />
            </Avatar>

            <div>
              <p className="font-bold text-[#111827]">Premium Experience</p>
              <p className="text-sm text-gray-500">Loved by customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalonDetail;