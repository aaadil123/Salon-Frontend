import React from "react";
import {
  CalendarMonth,
  AccessTime,
  LocationOn,
  Star,
} from "@mui/icons-material";

import {
  Button,
  Chip,
  Card,
} from "@mui/material";

const BookingCard = ({item}) => {
  return (
    <Card
      sx={{
        borderRadius: "24px",
        overflow: "hidden",
      }}
      className="
      group
      cursor-pointer
      "
    >
      <div className="md:flex">
        {/* IMAGE */}

        <div className="md:w-[220px] h-[220px] overflow-hidden">
          <img
            src={item.salon.images[0]}
            alt=""
            className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-110
            "
          />
        </div>

        {/* CONTENT */}

        <div className="flex-1 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#111827]">
                {item.salon.name}
              </h2>

              {/* <div className="flex items-center gap-1 mt-2">
                <Star
                  sx={{
                    color: "#D4A574",
                    fontSize: 18,
                  }}
                />

                <span className="font-semibold">
                  4.8
                </span>

                <span className="text-gray-500">
                  (128 reviews)
                </span>
              </div> */}
            </div>

            <Chip
              label={item.status}
              color="success"
            />
          </div>

          {/* SERVICES */}

          <div className="flex flex-wrap gap-2 mt-5">
            <Chip
              size="small"
              label="Hair Cut"
            />

            <Chip
              size="small"
              label="Hair Color"
            />

            <Chip
              size="small"
              label="Spa"
            />
          </div>

          {/* DETAILS */}

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <CalendarMonth
                sx={{
                  color: "#7c3aed",
                }}
              />

              <div>
                <p className="text-xs text-gray-500">
                  Date
                </p>

                <p className="font-medium">
                  {item.startTime.split("T")[0]}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <AccessTime
                sx={{
                  color: "#7c3aed",
                }}
              />

              <div>
                <p className="text-xs text-gray-500">
                  Time
                </p>

                <p className="font-medium">
                  {item.startTime.split("T")[1]} - {item.endTime.split("T")[1]}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <LocationOn
                sx={{
                  color: "#D4A574",
                }}
              />

              <div>
                <p className="text-xs text-gray-500">
                  Location
                </p>

                <p className="font-medium">
                  {item.salon.city}
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER */}

          <div className="flex items-center justify-between mt-8">
            <div>
              <p className="text-sm text-gray-500">
                Total Paid
              </p>

              <h3 className="text-2xl font-bold">
                ₹{item.totalPrice}
              </h3>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outlined"
              >
                Rebook
              </Button>

              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(135deg,#667eea,#764ba2)",
                }}
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;