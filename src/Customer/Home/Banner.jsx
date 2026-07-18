import React from "react";
import { Button, Avatar } from "@mui/material";
import {
  Star,
  CalendarMonth,
  LocationOn,
} from "@mui/icons-material";

const Banner = () => {
  return (
    <section
      id="hero"
      className="
      relative overflow-hidden
      min-h-[92vh]
      bg-gradient-to-br
      from-slate-900
      via-slate-800
      to-violet-700
    "
    >
      {/* background glow */}
      <div
        className="
        absolute
        top-0
        right-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-violet-500/20
        blur-[120px]
      "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        px-6 lg:px-10
        min-h-[92vh]
        grid
        lg:grid-cols-2
        items-center
        gap-10
      "
      >
        {/* LEFT */}
        <div className="text-white space-y-8">
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-white/10
            backdrop-blur-md
            border border-white/20
          "
          >
            <Star sx={{ fontSize: 18 }} />
            <span className="text-sm">
              Trusted by 10,000+ customers
            </span>
          </div>

          <div>
            <h1
              className="
              text-5xl
              md:text-6xl
              xl:text-7xl
              font-bold
              leading-tight
            "
            >
              Book Your
              <span className="block text-[#D4A574]">
                Perfect Look
              </span>
            </h1>

            <p
              className="
              mt-6
              text-lg
              text-slate-300
              max-w-xl
            "
            >
              Discover premium salons, expert stylists,
              and effortless appointment booking —
              all in one place.
            </p>
          </div>

          {/* Search */}
          <div
            className="
            bg-white
            rounded-2xl
            p-2
            flex
            flex-col
            md:flex-row
            gap-2
            shadow-2xl
          "
          >
            <input
              placeholder="Search salons, services..."
              className="
              flex-1
              px-5
              py-4
              rounded-xl
              outline-none
              text-black
            "
            />

            <Button
              variant="contained"
              sx={{
                borderRadius: "16px",
                minWidth: "180px",
                background:
                  "linear-gradient(135deg,#667eea,#764ba2)",
              }}
            >
              Search
            </Button>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="contained"
              size="large"
              sx={{
                background:
                  "linear-gradient(135deg,#667eea,#764ba2)",
                borderRadius: "999px",
                px: 4,
              }}
            >
              Book Appointment
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: "999px",
                color: "white",
                borderColor: "white",
              }}
            >
              Explore Salons
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-4">
            <div>
              <h2 className="text-3xl font-bold">
                10K+
              </h2>
              <p className="text-slate-300">
                Happy Clients
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                500+
              </h2>
              <p className="text-slate-300">
                Stylists
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                4.9★
              </h2>
              <p className="text-slate-300">
                Rating
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <img
            src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg"
            alt=""
            className="
            w-full
            max-w-lg
            h-[700px]
            my-5
            object-cover
            rounded-[40px]
            shadow-2xl
            border
            border-white/10
            "
          />

          {/* Floating Card 1 */}
          <div
            className="
            absolute
            top-15
            -left-5
            bg-white
            rounded-3xl
            p-4
            shadow-xl
            flex
            items-center
            gap-3
            "
          >
            <Avatar
              sx={{
                bgcolor: "#7c3aed",
              }}
            >
              <CalendarMonth />
            </Avatar>

            <div>
              <p className="font-semibold">
                250+ Bookings Today
              </p>
              <p className="text-sm text-gray-500">
                Live Activity
              </p>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div
            className="
            absolute
            bottom-15
            -right-5
            bg-white
            rounded-3xl
            p-4
            shadow-xl
            flex
            items-center
            gap-3
            "
          >
            <Avatar
              sx={{
                bgcolor: "#D4A574",
              }}
            >
              <LocationOn />
            </Avatar>

            <div>
              <p className="font-semibold">
                100+ Salons
              </p>
              <p className="text-sm text-gray-500">
                Nearby Locations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;