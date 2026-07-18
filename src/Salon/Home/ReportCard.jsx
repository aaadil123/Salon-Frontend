import React from "react";

const ReportCard = ({ icon, value, title, subtitle }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-[#EDE8DF]
        bg-white
        p-6
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#7c3aed]/10 blur-2xl" />

      <div className="relative z-10 flex items-start justify-between gap-5">
        <div>
          <p className="text-sm font-semibold text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#111827]">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-gray-400">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-r
            from-[#667eea]
            to-[#764ba2]
            text-white
            shadow-lg
            transition
            duration-300
            group-hover:scale-110
          "
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;