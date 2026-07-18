import React from "react";
import { Button, Chip } from "@mui/material";
import {
  ArrowBack,
  BusinessCenter,
  CheckCircle,
  TrendingUp,
  Verified,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SalonAccountForm from "./SalonAccountForm";


const BecomePartner = () => {
  const navigate = useNavigate();

  return (
    <main className="relative h-screen overflow-hidden bg-[#FAF7F2]">
      {/* Background glow */}
      <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#667eea]/15 blur-[100px]" />
      <div className="absolute -bottom-40 -right-32 h-[460px] w-[460px] rounded-full bg-[#764ba2]/15 blur-[110px]" />

      <div className="relative z-10 grid h-screen lg:grid-cols-[0.9fr_1.1fr]">
        {/* LEFT BRAND / INFO SECTION */}
        {/* LEFT BRAND / INFO SECTION */}
        <section className="hidden h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-violet-700 px-12 py-10 text-white lg:flex lg:flex-col">
          {/* Background glow */}
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#D4A574]/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

          {/* Top logo */}
          <div className="relative z-10">
            <button
              onClick={() => navigate("/")}
              className="mb-8 flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white duration-300"
            >
              <ArrowBack sx={{ fontSize: 18 }} />
              Back to Home
            </button>

            <h1 className="text-3xl font-bold">
              Luxe<span className="text-[#D4A574]">Salon</span>
            </h1>

            <p className="mt-2 text-sm text-white/60">
              Partner Business Workspace
            </p>
          </div>

          {/* Main content */}
          <div className="relative z-10 my-auto max-w-xl">
            <Chip
              icon={<Verified />}
              label="For Salon Owners"
              sx={{
                bgcolor: "rgba(255,255,255,0.12)",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.16)",
                backdropFilter: "blur(12px)",
                fontWeight: 700,
              }}
            />

            <h2 className="mt-6 text-4xl xl:text-5xl font-bold leading-tight">
              Grow your salon business with
              <span className="block text-[#D4A574]">LuxeSalon.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
              Register your salon, manage bookings, add services, track payments
              and reach premium customers through one powerful partner
              dashboard.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-2xl font-bold">10K+</p>
                <p className="mt-1 text-xs text-white/60">Customers</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-2xl font-bold">500+</p>
                <p className="mt-1 text-xs text-white/60">Stylists</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-2xl font-bold">4.9</p>
                <p className="mt-1 text-xs text-white/60">Rating</p>
              </div>
            </div>
          </div>

          {/* Bottom features */}
          {/* <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/10">
              <BusinessCenter sx={{ color: "#D4A574" }} />
              <p className="text-sm text-white/80">
                Manage services, bookings and payments easily.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/10">
              <TrendingUp sx={{ color: "#D4A574" }} />
              <p className="text-sm text-white/80">
                Grow visibility and increase monthly revenue.
              </p>
            </div>
          </div> */}
        </section>

        {/* RIGHT FORM SECTION */}
        <section className="h-screen overflow-y-auto px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-3xl py-8">
            {/* Mobile logo */}
            <div className="mb-8 lg:hidden">
              <button
                onClick={() => navigate("/")}
                className="mb-5 flex items-center gap-2 text-sm font-semibold text-gray-500"
              >
                <ArrowBack sx={{ fontSize: 18 }} />
                Back to Home
              </button>

              <h1 className="text-3xl font-bold text-[#111827]">
                Luxe<span className="text-[#7c3aed]">Salon</span>
              </h1>

              <p className="mt-1 text-sm text-gray-500">Partner registration</p>
            </div>

            <div className="rounded-[36px] border border-[#EDE8DF] bg-white p-6 shadow-[0_25px_70px_rgba(17,24,39,0.12)] sm:p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
                  Become Partner
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#111827]">
                  Create Salon Owner Account
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Complete the steps below to register your salon and start
                  accepting bookings.
                </p>
              </div>

              <SalonAccountForm />

              <div className="mt-8 rounded-[24px] bg-[#FAF7F2] p-5">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle sx={{ color: "#7c3aed", fontSize: 20 }} />
                  <h1 className="text-center text-sm font-semibold text-[#111827]">
                    Already have an account?
                  </h1>
                </div>

                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => navigate("/login")}
                  sx={{
                    mt: 2,
                    py: 1.3,
                    borderRadius: "999px",
                    fontWeight: 700,
                  }}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BecomePartner;
