import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="rounded-2xl border border-[#EDE8DF] bg-white px-4 py-3 shadow-lg">
      <p className="text-sm font-semibold text-[#111827]">
        {formatDate(label)}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        Bookings:{" "}
        <span className="font-bold text-[#7c3aed]">
          {payload[0].value}
        </span>
      </p>
    </div>
  );
};

const BookingCharts = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return (
      <div className="flex h-[360px] items-center justify-center rounded-[24px] bg-[#FAF7F2] text-gray-500">
        No booking data available
      </div>
    );
  }

  return (
    <div className="h-[360px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#EDE8DF"
          />

          <XAxis
            dataKey="daily"
            tickFormatter={formatDate}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            allowDecimals={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip content={<CustomTooltip />} />

          <Bar
            dataKey="count"
            fill="#7c3aed"
            radius={[12, 12, 0, 0]}
            barSize={42}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingCharts;