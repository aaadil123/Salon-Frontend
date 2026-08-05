import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Redux/Auth/action";

const SignupForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      role: "CUSTOMER",
    },
    onSubmit: (values) => {
        console.log("Submitting", values);
        values.username = values.fullName.split(" ")[0].toLowerCase();
        dispatch(registerUser({data:values, navigate}))
    },
  });

  return (
    <div className="w-full">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
          Create account
        </p>

        <Typography
          variant="h3"
          sx={{
            mt: 1,
            color: "#111827",
          }}
        >
          Join LuxeSalon
        </Typography>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Create your customer account and start booking premium salon
          experiences.
        </p>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        noValidate
        className="flex flex-col gap-4"
      >
        <TextField
          required
          fullWidth
          type="text"
          variant="outlined"
          name="fullName"
          id="fullName"
          label="Full Name"
          autoComplete="name"
          value={formik.values.fullname}
          onChange={formik.handleChange}
        />

        <TextField
          required
          fullWidth
          type="email"
          variant="outlined"
          name="email"
          id="email"
          label="Email Address"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <TextField
          required
          fullWidth
          type="password"
          variant="outlined"
          name="password"
          id="password"
          label="Password"
          autoComplete="new-password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          size="large"
          sx={{
            py: 1.4,
            mt: 0.5,
            fontSize: "1rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            boxShadow: "0px 12px 30px rgba(102,126,234,0.32)",
          }}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
