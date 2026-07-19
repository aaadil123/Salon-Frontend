import React, { useEffect } from "react";
import {
  AccountBalance,
  CalendarMonth,
  EventBusy,
  TrendingUp,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import EarningCharts from "./chart/EarningCharts";
import BookingCharts from "./chart/BookingCharts";
import ReportCard from "./ReportCard";
import {
  fetchBookings,
  fetchEarnings,
} from "../../Redux/Chart/action.js";
import { fetchSalonByOwner } from "../../Redux/Salon/action.js";

const HomePage = () => {
  const dispatch = useDispatch();

  const { earnings, bookings } = useSelector((store) => store.chart);
  const {salon} = useSelector(store => store)

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    dispatch(fetchSalonByOwner(jwt))
    dispatch(fetchEarnings(jwt));
    dispatch(fetchBookings(jwt));
  }, [dispatch]);

  const earningsData = earnings?.data || [];
  const bookingsData = bookings?.data || [];

  const totalEarnings = earningsData.reduce(
    (total, item) => total + Number(item.earnings || 0),
    0
  );

  const totalBookings = bookingsData.reduce(
    (total, item) => total + Number(item.count || 0),
    0
  );

  const averageEarning =
    totalBookings > 0 ? Math.round(totalEarnings / totalBookings) : 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
            Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#111827]">
            Welcome back, {salon.salon?.name}
          </h1>

          <p className="mt-2 text-gray-500">
            Track your revenue, bookings, and business performance.
          </p>
        </div>

        <div className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111827] shadow-sm border border-[#EDE8DF]">
          Today’s Overview
        </div>
      </div>

      {/* Report Cards */}
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <ReportCard
          icon={<AccountBalance />}
          title="Total Earnings"
          value={`₹${totalEarnings.toLocaleString("en-IN")}`}
          subtitle="Revenue generated"
        />

        <ReportCard
          icon={<CalendarMonth />}
          title="Total Bookings"
          value={totalBookings}
          subtitle="Confirmed appointments"
        />

        <ReportCard
          icon={<TrendingUp />}
          title="Avg. Earning"
          value={`₹${averageEarning.toLocaleString("en-IN")}`}
          subtitle="Per booking value"
        />

        <ReportCard
          icon={<EventBusy />}
          title="Cancelled"
          value="0"
          subtitle="Cancelled bookings"
        />
      </section>

      {/* Main Charts */}
      <section className="grid gap-8 xl:grid-cols-[1.3fr_.7fr]">
        <div className="rounded-[28px] border border-[#EDE8DF] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7c3aed]">
                Revenue
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#111827]">
                Earnings Overview
              </h2>
            </div>

            <p className="rounded-full bg-[#FAF7F2] px-4 py-2 text-sm font-semibold text-gray-500">
              Daily
            </p>
          </div>

          <EarningCharts data={earningsData} />
        </div>

        <div className="rounded-[28px] border border-[#EDE8DF] bg-white p-6 shadow-sm">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7c3aed]">
              Bookings
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#111827]">
              Booking Trends
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Confirmed bookings by day.
            </p>
          </div>

          <BookingCharts data={bookingsData} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;