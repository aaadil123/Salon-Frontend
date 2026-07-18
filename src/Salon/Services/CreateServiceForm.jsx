import React, { useEffect, useState } from 'react'
import {Button, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField} from '@mui/material'
import {AddPhotoAlternate, Close} from '@mui/icons-material'
import {useFormik} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { uploadToCloudinary } from '../../util/uploadToCloudinary'
import { createServiceAction } from '../../Redux/Salon Service/action'
import { getCategoriesBySalon } from '../../Redux/Category/action'

const CreateServiceForm = () => {
  const dispatch = useDispatch()
  const [uploadImage, setUploadImage] = useState(false)
  const {category, salon} = useSelector(store => store)

  useEffect(()=>{
      if(salon.salon){
        dispatch(getCategoriesBySalon({
          salonId:salon.salon?.id,
          jwt:localStorage.getItem('jwt')
          })
        )
      }
    },[salon.salon])

  const handleImageChange = async (event) => {
      const file = event.target.file[0]
      setUploadImage(true);
      const image = await uploadToCloudinary(file)
      formik.setFieldValue("image", image)
      setUploadImage(false);
    }
  
  const formik=useFormik({
      initialValues: {
      name:"",
      image:"",
      description:"",
      price:"",
      duration:"",
      category:""
    },
    onSubmit:(values)=>{
      console.log("Submitting", formik.values);
      dispatch(createServiceAction({
        service:values,
        jwt:localStorage.getItem('jwt'),
      }))
    }
  })
  
  return (
    <div className='flex justify-center items-center'>
      <form
      onSubmit={formik.handleSubmit} 
      className='space-y-4 p-4 w-full lg:w-1/2'>
        <Grid  container spacing={2} >
          <Grid className="w-24 h-24" size={{xs:12}}>
            { formik.values.image ?
              <div className='relative border'>
                <img className='w-24 h-24 object-cover' 
                  src={formik.values.image} alt=""
                />
                <IconButton size='small' color='error' sx={{position:'absolute', top:0, right:0}}>
                  <Close sx={{fontSize:"1rem"}}/>
                </IconButton>
              </div> :
              <>
              <input 
                onChange={handleImageChange}
                type="file"
                accept="image/*"
                id="fileInput"
                style= {{display:"none"}}
              />
                <label className="relative" htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center
                justify-center p-3 border rounded-md border-gray-400">
                  <AddPhotoAlternate className="text-gray-700"/>
                </span>
                {
                  uploadImage && 
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24
                  h-24 flex justify-center items-center">
                    <CircularProgress/>
                  </div>
                }
              </label>
            </>
            }
            
          </Grid>
          <Grid size={12}>
            <TextField
            fullWidth
            id="name"
            name="name"
            label="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            required
            />
          </Grid>
          <Grid size={12}>
            <TextField
            fullWidth
            multiline
            rows={4}
            id="desciption"
            name="desciption"
            label="desciption"
            value={formik.values.desciption}
            onChange={formik.handleChange}
            required
            />
          </Grid>
          <Grid size={{xs:12, sm:6}}>
            <TextField
            fullWidth
            id="price"
            name="price"
            label="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            required
            />
          </Grid>
          <Grid size={{xs:12, sm:6}}>
            <TextField
            fullWidth
            id="duration"
            name="duration"
            label="duration"
            value={formik.values.duration}
            onChange={formik.handleChange}
            required
            />
          </Grid>
          <Grid size={12}>
            {/* <TextField
            fullWidth
            id="categories"
            name="categories"
            label="categories"
            value={formik.values.categories}
            onChange={formik.handleChange}
            required
            /> */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formik.values.category}
                label="Category"
                name="category"
                onChange={formik.handleChange}
              >
                {
                  category.categories.map((item)=><MenuItem value={item.id}>{item.name}</MenuItem>)
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <Button
            fullWidth
            type='submit'
            sx={{py:'0.8rem'}}
            variant='outlined'>
              Create Category
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default CreateServiceForm