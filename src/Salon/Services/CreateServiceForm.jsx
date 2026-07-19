import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  AddPhotoAlternate,
  Close,
  Description,
  Timelapse,
  CurrencyRupee,
  Spa,
  Category,
} from "@mui/icons-material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { uploadToCloudinary } from "../../util/uploadToCloudinary";
import { createServiceAction } from "../../Redux/Salon Service/action";
import { getCategoriesBySalon } from "../../Redux/Category/action";
import { useNavigate } from "react-router-dom";

const CreateServiceForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [uploadImage, setUploadImage] = useState(false);

  const { category, salon } = useSelector((store) => store);

  useEffect(() => {
    if (salon.salon?.id) {
      dispatch(
        getCategoriesBySalon({
          salonId: salon.salon.id,
          jwt: localStorage.getItem("jwt"),
        })
      );
    }
  }, [dispatch, salon.salon?.id]);

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      description: "",
      price: "",
      duration: "",
      category: "",
    },

    onSubmit: (values) => {
      console.log("Submitting", values);

      dispatch(
        createServiceAction({
          service: values,
          jwt: localStorage.getItem("jwt"),
        })
      );
      navigate("/salon-dashboard/")
    },
  });

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    try {
      setUploadImage(true);

      const image = await uploadToCloudinary(file);

      formik.setFieldValue("image", image);
    } catch (error) {
      console.log("Image upload failed", error);
    } finally {
      setUploadImage(false);
    }
  };

  const handleRemoveImage = () => {
    formik.setFieldValue("image", "");
  };

  const categories = category?.categories || [];

  return (
    <div className="flex justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="
          w-full
          max-w-3xl
          rounded-[32px]
          border
          border-[#EDE8DF]
          bg-white
          p-6
          shadow-sm
          sm:p-8
        "
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
            Service
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#111827]">
            Create Salon Service
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Add service details, price, duration and image for your customers.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Image Upload */}
          <div>
            <p className="mb-3 text-sm font-semibold text-[#111827]">
              Service Image
            </p>

            {formik.values.image ? (
              <div className="relative h-32 w-32 overflow-hidden rounded-[24px] border border-[#EDE8DF] bg-[#FAF7F2] shadow-sm">
                <img
                  src={formik.values.image}
                  alt="Service"
                  className="h-full w-full object-cover"
                />

                <IconButton
                  onClick={handleRemoveImage}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 6,
                    right: 6,
                    bgcolor: "rgba(255,255,255,0.9)",
                    color: "#ef4444",
                    "&:hover": {
                      bgcolor: "#fee2e2",
                    },
                  }}
                >
                  <Close sx={{ fontSize: "1rem" }} />
                </IconButton>
              </div>
            ) : (
              <div className="relative">
                <input
                  onChange={handleImageChange}
                  type="file"
                  accept="image/*"
                  id="serviceImageInput"
                  style={{ display: "none" }}
                />

                <label htmlFor="serviceImageInput">
                  <span
                    className="
                      flex
                      h-32
                      w-32
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-[24px]
                      border
                      border-dashed
                      border-[#D4A574]
                      bg-[#FAF7F2]
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    <AddPhotoAlternate
                      sx={{
                        color: "#7c3aed",
                        fontSize: 36,
                      }}
                    />
                  </span>
                </label>

                {uploadImage && (
                  <div className="absolute inset-0 flex h-32 w-32 items-center justify-center rounded-[24px] bg-white/70 backdrop-blur-sm">
                    <CircularProgress size={28} />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Service Name */}
          <TextField
            fullWidth
            required
            id="name"
            name="name"
            label="Service Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            InputProps={{
              startAdornment: <Spa sx={{ mr: 1.5, color: "#7c3aed" }} />,
            }}
          />

          {/* Description */}
          <TextField
            fullWidth
            required
            multiline
            rows={4}
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            InputProps={{
              startAdornment: (
                <Description sx={{ mr: 1.5, mt: 1, color: "#7c3aed" }} />
              ),
            }}
          />

          {/* Price + Duration */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <TextField
              fullWidth
              required
              id="price"
              name="price"
              label="Price"
              type="number"
              value={formik.values.price}
              onChange={formik.handleChange}
              InputProps={{
                startAdornment: (
                  <CurrencyRupee sx={{ mr: 1.5, color: "#7c3aed" }} />
                ),
              }}
            />

            <TextField
              fullWidth
              required
              id="duration"
              name="duration"
              label="Duration"
              placeholder="Ex: 30 min"
              value={formik.values.duration}
              onChange={formik.handleChange}
              InputProps={{
                startAdornment: (
                  <Timelapse sx={{ mr: 1.5, color: "#7c3aed" }} />
                ),
              }}
            />
          </div>

          {/* Category */}
          <FormControl fullWidth required>
            <InputLabel id="service-category-label">Category</InputLabel>

            <Select
              labelId="service-category-label"
              id="category"
              name="category"
              value={formik.values.category}
              label="Category"
              onChange={formik.handleChange}
              startAdornment={
                <Category sx={{ ml: 1, mr: 1.5, color: "#7c3aed" }} />
              }
            >
              {categories.length === 0 ? (
                <MenuItem disabled>No category found</MenuItem>
              ) : (
                categories.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>

          {/* Submit */}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={uploadImage}
            sx={{
              py: 1.4,
              borderRadius: "999px",
              fontWeight: 700,
              background: "linear-gradient(135deg,#667eea,#764ba2)",
              boxShadow: "0 14px 28px rgba(102,126,234,0.25)",
              "&:hover": {
                background: "linear-gradient(135deg,#5b6ee1,#6d42a5)",
                boxShadow: "0 18px 34px rgba(102,126,234,0.32)",
              },
            }}
          >
            Create Service
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateServiceForm;