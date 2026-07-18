import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";

const images = [
  "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
  "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg",
  "https://images.pexels.com/photos/3993464/pexels-photo-3993464.jpeg",
  "https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg",
  "https://images.pexels.com/photos/7755656/pexels-photo-7755656.jpeg",
];

const SalonGallery = () => {
  const [emblaRef, emblaApi] =
useEmblaCarousel(
  {
    loop: true,
  },
  [
    Autoplay({
      delay: 2000,
    }),
  ]
);

  return (
    <section className="py-24 px-6 lg:px-20 bg-[#FCFBF8]">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[4px] text-[#7c3aed] font-semibold">
          Gallery
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Salon Gallery
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Explore luxurious interiors, premium
          styling stations and elegant beauty spaces.
        </p>
      </div>

      <div className="relative">
        <div
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            {images.map((img, index) => (
              <div
                key={index}
                className="
                flex-[0_0_90%]
                md:flex-[0_0_50%]
                lg:flex-[0_0_33%]
                min-w-0
                px-3
              "
              >
                <div
                  className="
                  overflow-hidden
                  rounded-[32px]
                  shadow-lg
                  group
                "
                >
                  <img
                    src={img}
                    alt=""
                    className="
                    h-[400px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          bg-white
          shadow-lg
          h-12
          w-12
          rounded-full
          flex
          items-center
          justify-center
          z-10
        "
        >
          <ArrowBackIos sx={{ fontSize: 18 }} />
        </button>

        {/* Right */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          bg-white
          shadow-lg
          h-12
          w-12
          rounded-full
          flex
          items-center
          justify-center
          z-10
        "
        >
          <ArrowForwardIos sx={{ fontSize: 18 }} />
        </button>
      </div>
    </section>
  );
};

export default SalonGallery;