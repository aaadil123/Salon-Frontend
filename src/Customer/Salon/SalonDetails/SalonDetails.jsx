import React, { useState } from "react";
import { Button, Divider } from "@mui/material";
import SalonDetail from "./SalonDetail";
import SalonServiceDetails from "./SalonServiceDetails";
import Review from "../../Review/Review";
import CreateReviewForm from "../../Review/CreateReviewForm";

const tabs = [
  { name: "All Services" },
  { name: "Reviews" },
  { name: "Create Review" },
];

const SalonDetails = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  

  return (
    <div className="min-h-screen bg-[#FCFBF8] px-6 lg:px-20 py-8">
      <SalonDetail />

      <div className="mt-10">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              onClick={() => setActiveTab(tab)}
              variant={tab.name === activeTab.name ? "contained" : "outlined"}
              sx={{
                borderRadius: "999px",
                px: 3,
              }}
            >
              {tab.name}
            </Button>
          ))}
        </div>

        <Divider sx={{ my: 3 }} />

        {activeTab.name === "Create Review" ? (
          <div className="flex justify-center py-10">
            <CreateReviewForm />
          </div>
        ) : activeTab.name === "Reviews" ? (
          <Review />
        ) : (
          <SalonServiceDetails />
        )}
      </div>
    </div>
  );
};

export default SalonDetails;