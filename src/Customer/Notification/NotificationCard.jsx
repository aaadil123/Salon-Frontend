import React from "react";
import {
  Avatar,
  Chip,
} from "@mui/material";

import {
  CheckCircle,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { markNotificationAsRead } from "../../Redux/Notifications/action";
import { useNavigate } from "react-router-dom";

const NotificationCard = ({item}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleReadNotification = () => {
    dispatch(markNotificationAsRead({
      notificationId:item.id,
      jwt:localStorage.getItem('jwt')
    }))
    navigate('/bookings')
  }
  
  return (
    <div
      onClick={handleReadNotification}
      className="
      bg-white
      rounded-[24px]
      p-5
      border
      border-[#EDE8DF]
      shadow-sm
      hover:shadow-lg
      duration-300
      "
    >
      <div className="flex gap-4">
        <Avatar
          sx={{
            bgcolor: "#7c3aed",
            width: 56,
            height: 56,
          }}
        >
          <CheckCircle />
        </Avatar>

        <div className="flex-1">
          <div className="flex flex-wrap justify-between gap-3">
            <div>
              <h3 className="font-bold text-lg">
                Appointment Confirmed
              </h3>

              <p className="text-gray-500 mt-1">
                {/* Your booking at Monu Luxury Salon
                has been confirmed successfully. */}
                {item?.description}
              </p>
            </div>

            <Chip
              label="New"
              color="success"
              size="small"
            />
          </div>

          <p className="text-sm text-gray-400 mt-4">
            2 minutes ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;