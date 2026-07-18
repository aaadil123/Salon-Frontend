import {
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { loginUser } from '../Redux/Auth/action.js'

const LoginForm = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log("Submitting", values);
      dispatch(loginUser({data:values, navigate}))
    },
  });

  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
          Account access
        </p>

        <Typography
          variant="h3"
          sx={{
            mt: 1,
            color: "#111827",
          }}
        >
          Welcome back
        </Typography>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Enter your account details to continue to LuxeSalon.
        </p>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        noValidate
        className="flex flex-col gap-5"
      >
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
          autoComplete="current-password"
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
            background:
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            boxShadow:
              "0px 12px 30px rgba(102,126,234,0.32)",
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;