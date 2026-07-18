import React from "react";
import { Button } from "@mui/material";

const BookingCTA = () => {
  return (
    <section className="px-6 lg:px-20 py-20">
      <div
        className="
        rounded-[40px]
        p-16
        text-center
        text-white
        bg-gradient-to-r
        from-[#667eea]
        to-[#764ba2]
      "
      >
        <h2 className="text-5xl font-bold">
          Ready For Your Next Look?
        </h2>

        <p className="mt-4 text-xl">
          Book your appointment today.
        </p>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            bgcolor: "#fff",
            color: "#111827",
          }}
          href="#hero"
        >
          Book Now
        </Button>
      </div>
    </section>
  );
};

export default BookingCTA;