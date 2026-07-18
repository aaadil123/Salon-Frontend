import { AddPhotoAlternate, Close } from "@mui/icons-material";
import {
  CircularProgress,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { uploadToCloudinary } from "../../util/uploadToCloudinary";
import {
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const SalonDetailsForm = ({ formik }) => {
  const [uploadImage, setUploadImage] = useState(false);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    try {
      setUploadImage(true);

      const image = await uploadToCloudinary(file);

      formik.setFieldValue("salonDetails.images", [
        ...formik.values.salonDetails.images,
        image,
      ]);
    } catch (error) {
      console.log("Image upload failed", error);
    } finally {
      setUploadImage(false);
    }
  };

  const handleRemoveImage = (index) => () => {
    const updatedImages = [...formik.values.salonDetails.images];
    updatedImages.splice(index, 1);

    formik.setFieldValue("salonDetails.images", updatedImages);
  };

  return (
    <div className="space-y-7">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
          Salon Details
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#111827]">
          Setup your salon
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Add salon images, name and working hours to help customers discover
          your business.
        </p>
      </div>

      {/* Image Upload */}
      <div>
        <p className="mb-3 text-sm font-semibold text-[#111827]">
          Salon Images
        </p>

        <div className="flex flex-wrap gap-4">
          {formik.values.salonDetails.images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative h-28 w-28 overflow-hidden rounded-[22px] border border-[#EDE8DF] bg-[#FAF7F2] shadow-sm"
            >
              <img
                className="h-full w-full object-cover"
                src={image}
                alt="Salon"
              />

              <IconButton
                onClick={handleRemoveImage(index)}
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
          ))}

          <div className="relative">
            <input
              onChange={handleImageChange}
              type="file"
              accept="image/*"
              id="salonImageInput"
              style={{ display: "none" }}
            />

            <label htmlFor="salonImageInput">
              <span
                className="
                flex
                h-28
                w-28
                cursor-pointer
                items-center
                justify-center
                rounded-[22px]
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
                    fontSize: 34,
                  }}
                />
              </span>
            </label>

            {uploadImage && (
              <div className="absolute inset-0 flex h-28 w-28 items-center justify-center rounded-[22px] bg-white/70 backdrop-blur-sm">
                <CircularProgress size={28} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-5">
        <TextField
          required
          fullWidth
          label="Salon Name"
          name="salonDetails.name"
          id="salonDetails.name"
          onChange={formik.handleChange}
          value={formik.values.salonDetails.name}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Select Open Time"
            sx={{ width: "100%" }}
            onChange={(value) => {
              if (value) {
                formik.setFieldValue(
                  "salonDetails.openTime",
                  value.format("HH:mm:ss")
                );
              }
            }}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Select Close Time"
            sx={{ width: "100%" }}
            onChange={(value) => {
              if (value) {
                formik.setFieldValue(
                  "salonDetails.closeTime",
                  value.format("HH:mm:ss")
                );
              }
            }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default SalonDetailsForm;