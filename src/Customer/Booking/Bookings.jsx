import React, { useEffect } from "react";
import BookingCard from "./BookingCard";
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomerBookings } from '../../Redux/Booking/action'

const bookingStats = [
  { title: "Total Bookings", value: "12" },
  { title: "Completed", value: "8" },
  { title: "Upcoming", value: "4" },
];

const Bookings = () => {
  const {booking} = useSelector(store => store)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCustomerBookings(localStorage.getItem('jwt')));
  },[])
  return (
    <div className="px-6 lg:px-20 py-10 min-h-screen bg-[#FCFBF8]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-[#7c3aed] font-semibold uppercase tracking-widest">
            Appointments
          </p>

          <h1 className="text-4xl font-bold mt-2 text-[#111827]">
            My Bookings
          </h1>
        </div>

        {/* Booking Stats - add here */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {bookingStats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl p-6 text-white bg-linear-to-r from-[#667eea] to-[#764ba2] shadow-lg"
            >
              <p className="text-white/80">{item.title}</p>
              <h2 className="text-4xl font-bold mt-2">{item.value}</h2>
            </div>
          ))}
        </div>

        {/* Booking Cards */}
        <div className="space-y-8">
          {booking.bookings.map((booking) => <BookingCard key={booking.id} item={booking}/>)}
        </div>
      </div>
    </div>
  );
};

export default Bookings;