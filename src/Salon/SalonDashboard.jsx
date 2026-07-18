import React, { useEffect } from "react";
import SalonDrawerList from "./components/SalonDrawerList";
import Navbar from "./components/Navbar";
import SalonRoutes from "../Routes/SalonRoutes";
import { fetchSalonByOwner } from '../Redux/Salon/action'
import { getUser } from '../Redux/Auth/action'
import { useDispatch, useSelector } from "react-redux";
import { fetchNotificationsBySalon } from "../Redux/Notifications/action";
import useNotificatonWebSocket from "../util/useNotificatonWebSocket";

const SalonDashboard = () => {
  const dispatch = useDispatch()
  const {salon} = useSelector(store => store)

  useEffect(() => {
    dispatch(fetchSalonByOwner({
      jwt:localStorage.getItem('jwt')
    }));

    dispatch(getUser(
      localStorage.getItem('jwt')
    ));

  },[])

  useEffect(() => {
    if(salon.salon){
      dispatch(fetchNotificationsBySalon({
        salonId:salon.id,
        jwt:localStorage.getItem('jwt')
      }))
    }
  },[salon.salon])

  useNotificatonWebSocket(salon.salon?.id, "salon")

  return (
    <div className="min-h-screen bg-[#FCFBF8]">
      <Navbar DrawerList={SalonDrawerList} />

      <section className="lg:flex">
        <aside className="hidden lg:block w-[310px] shrink-0">
          <SalonDrawerList />
        </aside>

        <main className="w-full min-h-[calc(100vh-80px)] p-6 lg:p-10 overflow-y-auto">
          <div className="max-w-[1500px] mx-auto">
            <SalonRoutes />
          </div>
        </main>
      </section>
    </div>
  );
};

export default SalonDashboard;