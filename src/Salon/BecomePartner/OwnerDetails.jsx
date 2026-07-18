import React from "react";
import { TextField } from "@mui/material";
import { Email, Lock, Person } from "@mui/icons-material";

const OwnerDetails = ({ formik }) => {
  return (
    <div className="space-y-7">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
          Owner Details
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#111827]">
          Tell us about you
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          These details will be used to create your salon owner account.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <TextField
          required
          fullWidth
          id="fullName"
          name="fullName"
          label="Full Name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          InputProps={{
            startAdornment: (
              <Person sx={{ mr: 1.5, color: "#7c3aed" }} />
            ),
          }}
        />

        <TextField
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={formik.values.email}
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
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          InputProps={{
            startAdornment: (
              <Lock sx={{ mr: 1.5, color: "#7c3aed" }} />
            ),
          }}
        />
      </div>
    </div>
  );
};

export default OwnerDetails;