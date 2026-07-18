import React from "react";
import {
  Email,
  Home,
  LocationCity,
  Map,
  Phone,
  PinDrop,
} from "@mui/icons-material";
import { TextField } from "@mui/material";

const SalonAddressForm = ({ formik }) => {
  return (
    <div className="space-y-7">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
          Salon Address
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#111827]">
          Where is your salon?
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Add your salon contact and address details so customers can find you
          easily.
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-5">
        <TextField
          required
          fullWidth
          id="salonAddress.phoneNumber"
          name="salonAddress.phoneNumber"
          label="Phone Number"
          type="tel"
          value={formik.values.salonAddress.phoneNumber}
          onChange={formik.handleChange}
          InputProps={{
            startAdornment: (
              <Phone sx={{ mr: 1.5, color: "#7c3aed" }} />
            ),
          }}
        />

        <TextField
          required
          fullWidth
          id="salonAddress.email"
          name="salonAddress.email"
          label="Salon Email"
          type="email"
          value={formik.values.salonAddress.email}
          onChange={formik.handleChange}
          InputProps={{
            startAdornment: (
              <Email sx={{ mr: 1.5, color: "#7c3aed" }} />
            ),
          }}
        />

        <TextField
          required
          fullWidth
          multiline
          rows={3}
          id="salonAddress.address"
          name="salonAddress.address"
          label="Full Address"
          value={formik.values.salonAddress.address}
          onChange={formik.handleChange}
          InputProps={{
            startAdornment: (
              <Home sx={{ mr: 1.5, mt: 1, color: "#7c3aed" }} />
            ),
          }}
        />

        {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2"> */}
          <TextField
            required
            fullWidth
            id="salonAddress.city"
            name="salonAddress.city"
            label="City"
            value={formik.values.salonAddress.city}
            onChange={formik.handleChange}
            InputProps={{
              startAdornment: (
                <LocationCity sx={{ mr: 1.5, color: "#7c3aed" }} />
              ),
            }}
          />

          {/* <TextField
            required
            fullWidth
            id="salonAddress.state"
            name="salonAddress.state"
            label="State"
            value={formik.values.salonAddress.state}
            onChange={formik.handleChange}
            InputProps={{
              startAdornment: (
                <Map sx={{ mr: 1.5, color: "#7c3aed" }} />
              ),
            }}
          /> */}
        {/* </div> */}

        <TextField
          required
          fullWidth
          id="salonAddress.pincode"
          name="salonAddress.pincode"
          label="Pincode"
          value={formik.values.salonAddress.pincode}
          onChange={formik.handleChange}
          InputProps={{
            startAdornment: (
              <PinDrop sx={{ mr: 1.5, color: "#7c3aed" }} />
            ),
          }}
        />
      </div>
    </div>
  );
};

export default SalonAddressForm;