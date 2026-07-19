import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  IconButton,
  TextField,
} from "@mui/material";
import { AddPhotoAlternate, Close } from "@mui/icons-material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { uploadToCloudinary } from "../../util/uploadToCloudinary";
import { createCategory } from "../../Redux/Category/action";
import { useNavigate } from "react-router-dom";

const CategoryForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [uploadImage, setUploadImage] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
    },

    onSubmit: (values) => {
      dispatch(
        createCategory({
          category: values,
          jwt: localStorage.getItem("jwt"),
        })
      );
      navigate("/salon-dashboard/category")
      console.log("Submitting", values);
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

  return (
    <div className="flex justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="
          w-full
          max-w-2xl
          rounded-[32px]
          border
          border-[#EDE8DF]
          bg-white
          p-6
          shadow-sm
          sm:p-8
        "
      >
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
            Category
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#111827]">
            Create Service Category
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Add a category image and name to organize your salon services.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Image Upload */}
          <div>
            <p className="mb-3 text-sm font-semibold text-[#111827]">
              Category Image
            </p>

            {formik.values.image ? (
              <div className="relative h-32 w-32 overflow-hidden rounded-[24px] border border-[#EDE8DF] bg-[#FAF7F2] shadow-sm">
                <img
                  src={formik.values.image}
                  alt="Category"
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
                  id="categoryImageInput"
                  style={{ display: "none" }}
                />

                <label htmlFor="categoryImageInput">
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

          {/* Category Name */}
          <TextField
            fullWidth
            required
            id="name"
            name="name"
            label="Category Name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />

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
            }}
          >
            Create Category
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;