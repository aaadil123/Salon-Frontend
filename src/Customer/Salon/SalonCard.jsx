import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Chip, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const SalonCard = ({ salon }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/salon/${salon.id}`)}
      className="group cursor-pointer overflow-hidden"
      sx={{
        borderRadius: "28px",
        border: "1px solid #EDE8DF",
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(18px)",
      }}
    >
      <div className="relative h-[240px] overflow-hidden">
        <img
          src={salon.images[0]}
          alt={salon.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* <Chip
          label={salon.tag}
          size="small"
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            bgcolor: "#F0DDBF",
            color: "#A87842",
            fontWeight: 700,
          }}
        /> */}

        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-110 duration-300"
        >
          <FavoriteBorderIcon sx={{ color: "#7c3aed", fontSize: 20 }} />
        </button>

        {/* <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-md">
          <StarIcon sx={{ fontSize: 17, color: "#D4A574" }} />
          <span className="text-sm font-bold text-[#111827]">
            {salon.rating}
          </span>
          <span className="text-xs text-gray-500">({salon.reviews})</span>
        </div> */}
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#7c3aed] transition">
            {salon.name}
          </h3>

          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
            {salon.description}
          </p>
        </div>

        <div className="flex items-start gap-2 text-sm text-gray-500">
          <LocationOnIcon sx={{ fontSize: 18, color: "#D4A574", mt: "2px" }} />
          <span>{salon.address}</span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-sm">
            From{" "}
            <span className="font-bold text-[#111827]">
              ₹499
            </span>
          </p>

          <Button
            variant="contained"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/salon/${salon.id}`);
            }}
            sx={{
              borderRadius: "999px",
              px: 2.5,
              background: "linear-gradient(135deg,#667eea,#764ba2)",
            }}
          >
            View
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SalonCard;