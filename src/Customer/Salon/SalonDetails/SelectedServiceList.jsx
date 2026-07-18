import React from "react";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

// const selectedServices = [
//   { name: "Premium Hair Cut", price: 399 },
//   { name: "Beard Styling", price: 249 },
//   { name: "Hair Color", price: 999 },
// ];

const SelectedServiceList = ({onRemove, selectedServices}) => {
  return (
    <div className="my-5 space-y-3">
      {selectedServices.map((item) => (
        <div
          key={item.id}
          className="py-3 px-4 rounded-2xl bg-[#FAF7F2] flex justify-between items-center"
        >
          <div>
            <h1 className="font-semibold text-[#111827]">{item.name}</h1>
            <p className="text-sm text-gray-500">{item.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <p className="font-bold">₹{item.price}</p>
            <IconButton onClick={() => onRemove(item.id)} size="small">
              <Close />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedServiceList;