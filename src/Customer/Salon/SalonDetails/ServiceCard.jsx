import React from "react";
import { Button, Chip } from "@mui/material";
import { AccessTime, Add } from "@mui/icons-material";

const ServiceCard = ({ item, onSelect, onRemove }) => {
  return (
    <div className="bg-white rounded-[24px] p-5 border border-[#EDE8DF] shadow-sm hover:shadow-lg hover:-translate-y-1 duration-300">
      <div className="flex justify-between gap-5">
        <div className="flex gap-4">
          <img
            src={
              item.image ||
              "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg"
            }
            alt={item.name}
            className="w-24 h-24 rounded-[18px] object-cover shrink-0"
          />

          <div>
            <h2 className="text-xl font-bold text-[#111827]">
              {item.name}
            </h2>

            <div className="flex items-center gap-2 mt-3 text-gray-500">
              <AccessTime sx={{ fontSize: 18, color: "#7c3aed" }} />
              <span>{item.duration}</span>
            </div>

            <div className="mt-4 flex gap-2">
              <Chip label="Popular" size="small" color="primary" />
              <Chip label="Premium" size="small" color="secondary" />
            </div>
          </div>
        </div>

        <div className="text-right">
          <h3 className="text-2xl font-bold text-[#111827]">
            ₹{item.price}
          </h3>

          <Button
            variant="contained"
            size="small"
            startIcon={<Add />}
            onClick={() => onSelect(item)}
            sx={{
              mt: 3,
              borderRadius: "999px",
              background: "linear-gradient(135deg,#667eea,#764ba2)",
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;