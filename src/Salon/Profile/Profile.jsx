import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import {
  AccessTime,
  Edit,
  Email,
  LocationOn,
  Star,
  Verified,
} from "@mui/icons-material";
import ProfileFieldCard from "./ProfileFieldCard";
import { useSelector } from "react-redux";

// const gallery = [
//   "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
//   "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg",
//   "https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg",
// ];

const Profile = () => {
  const {salon, auth} = useSelector(store => store)
  
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[36px] bg-white border border-[#EDE8DF] shadow-lg">
        <div className="h-[230px] bg-gradient-to-br from-slate-900 via-slate-800 to-violet-700 relative">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D4A574]/20 blur-3xl" />
          <img
            src={salon.salon?.images[0]}
            alt=""
            className="h-full w-full object-cover opacity-45"
          />

          <Button
            variant="contained"
            startIcon={<Edit />}
            sx={{
              position: "absolute",
              right: 24,
              top: 24,
              background: "linear-gradient(135deg,#667eea,#764ba2)",
            }}
          >
            Edit Profile
          </Button>
        </div>

        <div className="px-6 lg:px-8 pb-8">
          <div className="-mt-4 pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-end gap-5">
              <Avatar
                src={salon.salon?.images[1]}
                sx={{
                  width: 96,
                  height: 96,
                  border: "5px solid white",
                  boxShadow: "0 20px 40px rgba(17,24,39,.18)",
                }}
              />

              <div className="pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Chip
                    icon={<Verified />}
                    label="Verified Partner"
                    color="primary"
                  />
                  <Chip
                    label="Premium Salon"
                    color="secondary"
                  />
                </div>

                <h1 className="text-4xl font-bold text-[#111827]">
                  {salon.salon?.name}
                </h1>

                <div className="flex flex-wrap gap-5 mt-3 text-gray-500">
                  <span className="flex items-center gap-1">
                    <LocationOn sx={{ fontSize: 18, color: "#D4A574" }} />
                    {salon.salon?.address}, {salon.salon?.city}
                  </span>

                  {/* <span className="flex items-center gap-1">
                    <Star sx={{ fontSize: 18, color: "#D4A574" }} />
                    4.8 Rating
                  </span> */}

                  <span className="flex items-center gap-1">
                    <AccessTime sx={{ fontSize: 18, color: "#7c3aed" }} />
                    {salon.salon?.openTime +" AM"} - {salon.salon?.closeTime +" PM"}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8 lg:mt-4">
              <div className="rounded-2xl bg-[#FAF7F2] p-4 text-center">
                <h3 className="text-2xl font-bold">1.2K</h3>
                <p className="text-xs text-gray-500">Bookings</p>
              </div>
              <div className="rounded-2xl bg-[#FAF7F2] p-4 text-center">
                <h3 className="text-2xl font-bold">₹85K</h3>
                <p className="text-xs text-gray-500">Revenue</p>
              </div>
              <div className="rounded-2xl bg-[#FAF7F2] p-4 text-center">
                <h3 className="text-2xl font-bold">96%</h3>
                <p className="text-xs text-gray-500">Repeat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-[1.2fr_.8fr] gap-8">
        <div className="bg-white rounded-[28px] border border-[#EDE8DF] shadow-sm overflow-hidden">
          <div className="p-6 flex items-center justify-between">
            <div>
              <p className="uppercase tracking-widest text-[#7c3aed] font-semibold text-sm">
                Account
              </p>
              <h2 className="text-2xl font-bold mt-1">Owner Details</h2>
            </div>
            <Email sx={{ color: "#7c3aed" }} />
          </div>

          <Divider />

          <ProfileFieldCard label="Owner Name" value={auth.user?.fullName} />
          <ProfileFieldCard label="Email" value={auth.user?.email} />
          <ProfileFieldCard label="Role" value={auth.user?.role} />
        </div>

        <div className="bg-white rounded-[28px] border border-[#EDE8DF] shadow-sm overflow-hidden">
          <div className="p-6">
            <p className="uppercase tracking-widest text-[#7c3aed] font-semibold text-sm">
              Gallery
            </p>
            <h2 className="text-2xl font-bold mt-1">Salon Images</h2>
          </div>

          <div className="grid grid-cols-2 gap-3 p-6 pt-0">
            {salon.salon?.images.map((img, index) => (
              <img
                key={img}
                src={img}
                alt=""
                className={`w-full object-cover rounded-[20px] ${
                  index === 0 ? "col-span-2 h-44" : "h-32"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[28px] border border-[#EDE8DF] shadow-sm overflow-hidden">
        <div className="p-6">
          <p className="uppercase tracking-widest text-[#7c3aed] font-semibold text-sm">
            Business
          </p>
          <h2 className="text-2xl font-bold mt-1">Salon Details</h2>
        </div>

        <Divider />

        <ProfileFieldCard label="Salon Name" value={salon.salon?.name} />
        <ProfileFieldCard
          label="Salon Address"
          value={salon.salon?.address}
        />
        <ProfileFieldCard label="Open Time" value={salon.salon?.openTime +" AM"} />
        <ProfileFieldCard label="Close Time" value={salon.salon?.closeTime +" PM"} />
      </section>
    </div>
  );
};

export default Profile;