import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Customer/Home/Home';
import Bookings from '../Customer/Booking/Bookings'
import SalonDetails from '../Customer/Salon/SalonDetails/SalonDetails'
import Notifications from '../Customer/Notification/Notifications';
import Navbar from '../Customer/Navbar/Navbar';
import NotFound from '../NotFound/NotFound';
import PaymentSuccess from '../Customer/Payment/PaymentSuccess';

const CustomerRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/notifications" element={<Notifications/>}/>
            <Route path="/bookings" element={<Bookings/>}/>
            <Route path="/salon/:id" element={<SalonDetails/>}/>
            <Route path="/payment-success/:id" element={<PaymentSuccess/>}/>
            <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default CustomerRoutes