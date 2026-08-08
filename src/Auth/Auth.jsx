import React from "react";
import { Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isRegisterPage = location.pathname === "/register";

  return (
    <main className="relative h-screen overflow-hidden bg-[#FAF7F2]">
      {/* Decorative background */}
      <div className="absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#667eea]/15 blur-[100px]" />
      <div className="absolute -bottom-36 -right-24 h-[420px] w-[420px] rounded-full bg-[#764ba2]/15 blur-[110px]" />

      <div className="relative z-10 flex h-full items-center justify-center px-4 py-4 sm:px-6">
        <div className="grid h-full max-h-[760px] w-full max-w-5xl overflow-hidden rounded-[32px] border border-[#EDE8DF] bg-white shadow-[0_30px_80px_rgba(17,24,39,0.14)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left brand panel */}
          <section className="relative hidden overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-violet-700 p-8 text-white lg:flex lg:flex-col lg:justify-between">
            <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#D4A574]/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative z-10">
              <Typography
                component="div"
                sx={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Luxe
                <span className="text-[#D4A574]">Salon</span>
              </Typography>

              <p className="mt-1 text-sm text-white/60">
                Premium salon booking experience
              </p>
            </div>

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A574]">
                {isRegisterPage ? "Join LuxeSalon" : "Welcome back"}
              </p>

              <Typography
                variant="h2"
                sx={{
                  mt: 2,
                  color: "#FFFFFF",
                  fontSize: {
                    xs: "2rem",
                    lg: "2.7rem",
                  },
                  lineHeight: 1.12,
                }}
              >
                {isRegisterPage
                  ? "Discover beauty experiences made for you."
                  : "Your next luxury experience is waiting."}
              </Typography>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                {isRegisterPage
                  ? "Create your account to discover premium salons, expert stylists and effortless appointment booking."
                  : "Sign in to manage appointments, explore premium salons and continue your beauty journey."}
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-3">
              {[
                ["100+", "Salons"],
                ["500+", "Stylists"],
                ["4.9", "Rating"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md"
                >
                  <p className="text-xl font-bold">{value}</p>
                  <p className="mt-1 text-xs text-white/60">{label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Form panel */}
          <section className="flex h-full items-center overflow-hidden px-6 py-6 sm:px-10 lg:px-14">
            <div className="w-full">
              <div className="mb-6 lg:hidden">
                <Typography
                  component="div"
                  sx={{
                    fontSize: "1.7rem",
                    fontWeight: 700,
                    color: "#111827",
                  }}
                >
                  Luxe
                  <span className="text-[#7c3aed]">Salon</span>
                </Typography>
              </div>

              {isRegisterPage ? <SignupForm /> : <LoginForm />}

              <div className="mt-6 text-center">
                <span className="text-sm text-gray-500">
                  {isRegisterPage
                    ? "Already have an account?"
                    : "Don’t have an account?"}
                </span>

                <Button
                  variant="text"
                  onClick={() =>
                    navigate(isRegisterPage ? "/login" : "/register")
                  }
                  sx={{
                    ml: 0.5,
                    minWidth: "auto",
                    px: 1,
                    fontWeight: 700,
                  }}
                >
                  {isRegisterPage ? "Login" : "Create account"}
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Auth;
