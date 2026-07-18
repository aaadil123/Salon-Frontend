import React from "react";
import {
  Spa,
  Face,
  ContentCut,
  Brush,
  AutoAwesome,
  Favorite,
} from "@mui/icons-material";

const services = [
  {
    title: "Hair Styling",
    icon: <ContentCut />,
    price: "₹599",
  },
  {
    title: "Facial",
    icon: <Face />,
    price: "₹799",
  },
  {
    title: "Spa",
    icon: <Spa />,
    price: "₹999",
  },
  {
    title: "Makeup",
    icon: <Brush />,
    price: "₹1499",
  },
  {
    title: "Hair Coloring",
    icon: <AutoAwesome />,
    price: "₹1999",
  },
  {
    title: "Nail Care",
    icon: <Favorite />,
    price: "₹699",
  },
];

const PopularServices = () => {
  return (
    <section className="px-6 lg:px-20 py-24">
      <div className="text-center mb-16">
        <p className="text-[#7c3aed] font-semibold tracking-widest uppercase">
          Services
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold mt-3">
          Popular Services
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Premium beauty and wellness experiences
          designed by top salons.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Featured Card */}

        <div
          className="
          lg:col-span-2
          relative
          overflow-hidden
          rounded-[32px]
          p-10
          text-white
          bg-gradient-to-br
          from-slate-900
          via-slate-800
          to-violet-700
        "
        >
          <span
            className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-white/10
            backdrop-blur-md
            text-sm
          "
          >
            Most Booked Service
          </span>

          <h3 className="text-5xl font-bold mt-8">
            Hair Styling
          </h3>

          <p className="text-slate-300 mt-5 max-w-lg">
            Professional hair styling from expert
            stylists for weddings, events, and daily
            confidence.
          </p>

          <div className="flex items-center gap-8 mt-8">
            <div>
              <p className="text-slate-400 text-sm">
                Duration
              </p>

              <h4 className="text-xl font-bold">
                45 Min
              </h4>
            </div>

            <div>
              <p className="text-slate-400 text-sm">
                Starting From
              </p>

              <h4 className="text-xl font-bold">
                ₹599
              </h4>
            </div>
          </div>

          <button
            className="
            mt-10
            px-8
            py-4
            rounded-full
            bg-white
            text-slate-900
            font-semibold
            hover:scale-105
            duration-300
          "
          >
            Book Service
          </button>

          <div
            className="
            absolute
            -right-16
            -bottom-16
            w-64
            h-64
            rounded-full
            bg-[#D4A574]/20
            blur-3xl
          "
          />
        </div>

        {/* Service Grid */}

        <div className="grid grid-cols-2 gap-5">
          {services.slice(1).map((item) => (
            <div
              key={item.title}
              className="
              bg-white
              rounded-[24px]
              p-6
              border
              border-gray-100
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              duration-300
            "
            >
              <div
                className="
                w-12
                h-12
                rounded-2xl
                flex
                items-center
                justify-center
                bg-gradient-to-r
                from-[#667eea]
                to-[#764ba2]
                text-white
              "
              >
                {item.icon}
              </div>

              <h3 className="mt-5 font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;