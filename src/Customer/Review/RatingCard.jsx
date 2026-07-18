import React from "react";
import { Rating, LinearProgress } from "@mui/material";

const ratingData = [
  { star: 5, value: 85 },
  { star: 4, value: 65 },
  { star: 3, value: 35 },
  { star: 2, value: 15 },
  { star: 1, value: 5 },
];

const RatingCard = () => {
  return (
    <div
  className="
  bg-white
  rounded-[28px]
  p-8
  border
  border-[#EDE8DF]
  shadow-lg
  lg:sticky
  lg:top-24
  "
>
      <p className="uppercase tracking-widest text-[#7c3aed] font-semibold">
        Ratings
      </p>

      <div className="mt-5 text-center">
        <h1 className="text-6xl font-bold text-[#111827]">
          4.8
        </h1>

        <Rating
          readOnly
          value={4.8}
          precision={0.5}
          sx={{
            mt: 2,
          }}
        />

        <p className="mt-2 text-gray-500">
          Based on 1,284 reviews
        </p>
      </div>

      <div className="space-y-4 mt-8">
        {ratingData.map((item) => (
          <div key={item.star}>
            <div className="flex justify-between text-sm mb-1">
              <span>{item.star} Stars</span>
              <span>{item.value}%</span>
            </div>

            <LinearProgress
              variant="determinate"
              value={item.value}
              sx={{
                height: 10,
                borderRadius: 999,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingCard;