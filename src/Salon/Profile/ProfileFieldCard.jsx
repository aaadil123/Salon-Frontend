import React from "react";

const ProfileFieldCard = ({ label, value }) => {
  return (
    <div className="grid md:grid-cols-[220px_1fr] gap-3 px-6 py-5 hover:bg-[#FAF7F2] duration-300">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </p>

      <p className="font-semibold text-[#111827]">
        {value}
      </p>
    </div>
  );
};

export default ProfileFieldCard;