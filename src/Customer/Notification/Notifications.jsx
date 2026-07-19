import React, { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";
import { useDispatch, useSelector } from "react-redux";
import { addNotification, fetchNotificationsByUser } from "../../Redux/Notifications/action";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const Notifications = () => {
  const dispatch = useDispatch();
  const { auth, notification } = useSelector((store) => store);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!auth.user?.id || !jwt) return;
    dispatch(
      fetchNotificationsByUser({
        userId: auth.user?.id,
        jwt,
      }),
    );
  }, [auth.user?.id, dispatch]);

  //realtime notification

  // const [stompClient, setStompClient] = useState(null);

  // useEffect(() => {
  //   if (auth.user?.id) {
  //     const sock = new SockJS("http://localhost:8000/api/notifications/ws");
  //     const stomp = Stomp.over(sock);
  //     setStompClient(stomp);
  //   }
  // }, [auth.user?.id]);

  // useEffect(()=>{
    // if(stompClient){
    //   stompClient.connect({}, ()=>{
    //     setStompClient.subscribe(`/notification/{type}/${auth.user?.id}`,
    //       (message) => {
    //         const receivedMessage = JSON.parse(message.body)
    //         console.log("received notification from server", receivedMessage)
    //         dispatch(addNotification(receivedMessage))
    //     })
    //   },
    //   (error) => console.log("subscription error", error));
    // }
  // }, [stompClient, auth.user?.id])

  return (
    <div className="min-h-screen bg-[#FCFBF8] px-6 lg:px-20 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-[#7c3aed] font-semibold uppercase tracking-widest">
            Updates
          </p>

          <h1 className="text-4xl font-bold mt-2 text-[#111827]">
            Notifications
          </h1>

          <p className="text-gray-500 mt-2">
            Stay updated with appointments, offers and salon activity.
          </p>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <div className="bg-white rounded-[24px] p-5 border border-[#EDE8DF]">
            <h2 className="text-3xl font-bold">12</h2>
            <p className="text-gray-500">Unread</p>
          </div>

          <div className="bg-white rounded-[24px] p-5 border border-[#EDE8DF]">
            <h2 className="text-3xl font-bold">8</h2>
            <p className="text-gray-500">Today</p>
          </div>

          <div className="bg-white rounded-[24px] p-5 border border-[#EDE8DF]">
            <h2 className="text-3xl font-bold">25</h2>
            <p className="text-gray-500">This Week</p>
          </div>
        </div>

        {/* Notifications */}

        <div className="space-y-5">
          {notification.notifications.map((item) => (
            <NotificationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
