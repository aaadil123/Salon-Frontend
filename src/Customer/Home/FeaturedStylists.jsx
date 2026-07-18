import React from "react";

const stylists = [
  {
    name: "Sophia",
    role: "Hair Expert",
    image:
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
  },
  {
    name: "Emma",
    role: "Color Specialist",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Olivia",
    role: "Makeup Artist",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
];

const FeaturedStylists = () => {
  return (
    <section className="px-6 lg:px-20 py-16">
      <h2 className="text-4xl font-bold mb-10">
        Featured Stylists
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {stylists.map((item) => (
          <div
            key={item.name}
            className="
            bg-white
            rounded-[28px]
            overflow-hidden
            shadow-lg
            hover:-translate-y-2
            duration-300
            "
          >
            <img
              src={item.image}
              alt=""
              className="h-96 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                {item.name}
              </h3>

              <p className="text-gray-500">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedStylists;