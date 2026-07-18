import React from "react";

const reviews = [
  {
    name: "Jessica",
    review:
      "Absolutely loved the experience. Booking was seamless.",
  },
  {
    name: "Sarah",
    review:
      "Found my favorite salon through the platform.",
  },
  {
    name: "Emily",
    review:
      "Professional stylists and amazing service.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-slate-50">
      <h2 className="text-4xl font-bold mb-10">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((item) => (
          <div
            key={item.name}
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-lg
          "
          >
            <div className="text-yellow-500 text-xl">
              ★★★★★
            </div>

            <p className="mt-4 text-gray-600">
              {item.review}
            </p>

            <h4 className="mt-5 font-bold">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;