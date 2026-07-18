import React, { useEffect } from "react";
import {
  Avatar,
  Rating,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../Redux/Review/action";

const ReviewCard = ({item}) => {
  const dispatch = useDispatch()
  const {auth} = useSelector(store => store)

  const handleDeleteReview = () => {
    dispatch(deleteReview({
      reviewId:item.id,
      jwt:localStorage.getItem('jwt')
    }))
  }
  
  return (
    <div
      className="
      bg-white
      rounded-[24px]
      p-6
      border
      border-[#EDE8DF]
      shadow-sm
      hover:shadow-lg
      duration-300
      "
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <Avatar
            sx={{
              width: 60,
              height: 60,
              bgcolor: "#7c3aed",
            }}
          >
            {item.user.fullName[0]}
          </Avatar>

          <div>
            <h3 className="font-bold text-lg">
              {item.user.fullName}
            </h3>

            {/* <p className="text-sm text-gray-500">
              January 2025
            </p> */}

            <Rating
              readOnly
              value={item.rating}
              precision={0.5}
              size="small"
              sx={{
                mt: 1,
              }}
            />
          </div>
        </div>
      </div>

      <p className="mt-5 text-gray-600 leading-7">
        {item.reviewText}
      </p>
    </div>

    // {item.id === auth.user?.id && 
    //   Show deletebutton
    // }
  );
};

export default ReviewCard;