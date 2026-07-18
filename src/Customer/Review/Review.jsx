import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import RatingCard from "./RatingCard";
import { useSelector, useDispatch } from 'react-redux'
import { fetchReviews } from '../../Redux/Review/action'
import { useParams } from 'react-router-dom'

const Review = () => {
  const dispatch = useDispatch()
  const {review} = useSelector(store => store)
  const {id} = useParams()

  useEffect(()=>{
    dispatch(fetchReviews({
      salonId:id,
      jwt:localStorage.getItem('jwt')
    }))
  },[])
  
  return (
    <div className="grid lg:grid-cols-[380px_1fr] gap-10 mt-10">
      <RatingCard />

      <div>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 border border-[#EDE8DF]">
            <h1 className="text-3xl font-bold">1284</h1>
            <p className="text-gray-500">Total Reviews</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#EDE8DF]">
            <h1 className="text-3xl font-bold">96%</h1>
            <p className="text-gray-500">Recommended</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#EDE8DF]">
            <h1 className="text-3xl font-bold">4.8★</h1>
            <p className="text-gray-500">Average Rating</p>
          </div>
        </div>

        <div className="space-y-6">
          {review.reviews.map((item, index) => (
            <ReviewCard key={index} item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;