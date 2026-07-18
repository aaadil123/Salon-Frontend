import React from "react";

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Professional Stylists" },
  { value: "100+", label: "Partner Salons" },
  { value: "4.9★", label: "Average Rating" },
];

const Statistics = () => {
  return (
    <section className="px-6 lg:px-20 py-10">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="
            rounded-3xl
            p-8
            text-white
            shadow-xl
            bg-gradient-to-r
            from-[#667eea]
            to-[#764ba2]
          "
          >
            <h2 className="text-4xl font-bold">
              {item.value}
            </h2>

            <p className="mt-2 text-slate-200">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;