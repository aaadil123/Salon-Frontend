import React, { useState } from "react";
import {
  Button,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux'
import OwnerDetails from "./OwnerDetails";
import SalonDetailsForm from "./SalonDetailsForm";
import SalonAddressForm from "./SalonAddressForm";
import { useNavigate } from "react-router-dom";
import { createSalon } from "../../Redux/Salon/action";

const steps = ["Owner Details", "Salon Details", "Salon Address"];

const SalonAccountForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",

      salonAddress: {
        phoneNumber: "",
        pincode: "",
        address: "",
        city: "",
        email: "",
      },

      salonDetails: {
        name: "",
        openTime: "",
        closeTime: "",
        images: [],
      }
    },

    onSubmit: (values) => {
      console.log("formik", values);
      const ownerDetails = {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        role: "SALON_OWNER",
        username: values.email.split("@")[0]
      }

      const salonDetails = {
        ...values.salonDetails,
        ...values.salonAddress
      }

      dispatch(createSalon({
        salonDetails,
        ownerDetails, 
        navigate
      }))
      
    },
  });

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      formik.handleSubmit();
      return;
    }

    setActiveStep((prev) => prev + 1);
  };

  return (
    <div className="w-full">
      {/* Custom Stepper Card */}
      <div className="rounded-[28px] border border-[#EDE8DF] bg-[#FAF7F2] p-4 sm:p-5">
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            "& .MuiStepLabel-label": {
              fontWeight: 700,
              color: "#6B7280",
              mt: 1,
            },
            "& .MuiStepLabel-label.Mui-active": {
              color: "#7c3aed",
            },
            "& .MuiStepLabel-label.Mui-completed": {
              color: "#111827",
            },
            "& .MuiStepIcon-root": {
              color: "#D1D5DB",
              fontSize: 34,
            },
            "& .MuiStepIcon-root.Mui-active": {
              color: "#7c3aed",
            },
            "& .MuiStepIcon-root.Mui-completed": {
              color: "#10b981",
            },
          }}
        >
          {steps.map((item) => (
            <Step key={item}>
              <StepLabel>{item}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      {/* Form Content */}
      <form onSubmit={formik.handleSubmit} className="mt-10">
        <div className="min-h-[390px]">
          {activeStep === 0 ? (
            <OwnerDetails formik={formik} />
          ) : activeStep === 1 ? (
            <SalonDetailsForm formik={formik} />
          ) : (
            <SalonAddressForm formik={formik} />
          )}
        </div>

        {/* Bottom Actions */}
        <div className="mt-10 flex items-center justify-between gap-4">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
            sx={{
              borderRadius: "999px",
              px: 4,
              py: 1.2,
              fontWeight: 700,
            }}
          >
            Back
          </Button>

          <Button
            onClick={activeStep == 2 ? formik.handleSubmit : handleNext}
            variant="contained"
            endIcon={
              activeStep === steps.length - 1 ? (
                <CheckCircle />
              ) : null
            }
            sx={{
              borderRadius: "999px",
              px: 4,
              py: 1.2,
              fontWeight: 700,
              background:
                "linear-gradient(135deg,#667eea,#764ba2)",
            }}
          >
            {activeStep === steps.length - 1
              ? "Create Account"
              : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SalonAccountForm;