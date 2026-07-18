import React from "react";
import {
  Area,
  AreaChart,
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
        Earnings:{" "}
        <span className="font-bold text-[#7c3aed]">
          ₹{Number(payload[0].value || 0).toLocaleString("en-IN")}
        </span>
      </p>
    </div>
  );
};

const EarningCharts = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return (
      <div className="flex h-[360px] items-center justify-center rounded-[24px] bg-[#FAF7F2] text-gray-500">
        No earnings data available
      </div>
    );
  }

  return (
    <div className="h-[360px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
            </linearGradient>
          </defs>

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
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `₹${value}`}
          />

          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="earnings"
            stroke="#7c3aed"
            strokeWidth={3}
            fill="url(#earningsGradient)"
            activeDot={{
              r: 7,
              fill: "#7c3aed",
              stroke: "#ffffff",
              strokeWidth: 3,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningCharts;