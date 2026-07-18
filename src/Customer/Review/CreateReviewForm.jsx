import React from 'react'
import { Box, Button, InputLabel, Rating, TextField } from '@mui/material'
import {useFormik} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createReview } from '../../Redux/Review/action'

const CreateReviewForm = () => {
    const dispatch = useDispatch()
    const {review} = useSelector(store => store)
    const {id} = useParams()
    
    const formik=useFormik({
        initialValues: {
            reviewText:"",
            rating:0
        },
        onSubmit: (values) => {
            console.log("Submitting", values);
            dispatch(createReview({
                salonId: id,
                jwt:localStorage.getItem('jwt'),
                reviewData:values
            }))
        },
    });
  return (
    <div>
        <h2 className="text-3xl flex justify-center font-bold mb-6">
            Share Your Experience
        </h2>
        <Box
        component="form"
        onSubmit={formik.handleSubmit}
        className="
        bg-white
        p-8
        rounded-[28px]
        border
        border-[#EDE8DF]
        shadow-lg
        w-full
        lg:w-[700px]
        "
        >
            <TextField
                fullWidth
                id="reviewText"
                name="reviewText"
                label="Review"
                variant="outlined"
                multiline
                rows={4}
                value={formik.values.reviewText}
                onChange={formik.handleChange}
            />
            <div className="space-y-2 mt-5">
                <InputLabel>Rating</InputLabel>
                <Rating
                    id="rating"
                    name="rating"
                    value={formik.values.rating}
                    onChange={(event, newValue)=>formik.setFieldValue("rating", newValue)}
                    precision={0.5}
                />
            </div>
            <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
                mt: 4,
                py: 1.5,
                background:
                "linear-gradient(135deg,#667eea,#764ba2)",
            }}
            >
                Submit Review
            </Button>
        </Box>
    </div>
  )
}

export default CreateReviewForm