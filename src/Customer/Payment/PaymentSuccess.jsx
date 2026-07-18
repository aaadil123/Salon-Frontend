import React, { useEffect, useRef } from "react";
import {
  Button,
  Chip,
  Divider,
} from "@mui/material";
import {
  CheckCircle,
  Home,
  CalendarMonth,
  ReceiptLong,
} from "@mui/icons-material";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { paymentSuccessAction } from '../../Redux/Payment/action';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  /*
   * Prevent the payment-success request from being dispatched twice
   * in React development mode when StrictMode is enabled.
   */
  const hasProcessedPayment = useRef(false);

  const queryParams = new URLSearchParams(location.search);

  const paymentId = queryParams.get("razorpay_payment_id");
  const paymentLinkId = queryParams.get(
    "razorpay_payment_link_id"
  );

  useEffect(() => {
    if (
      hasProcessedPayment.current ||
      !paymentId ||
      !paymentLinkId
    ) {
      return;
    }

    hasProcessedPayment.current = true;

    dispatch(
      paymentSuccessAction({
        paymentId,
        paymentLinkId,
        jwt: localStorage.getItem("jwt"),
      })
    );
  }, [dispatch, paymentId, paymentLinkId]);

  const hasValidPaymentDetails =
    Boolean(paymentId) && Boolean(paymentLinkId);

  return (
    <main className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#FAF7F2] px-5 py-10">
      {/* Decorative background */}
      <div className="absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full bg-[#667eea]/15 blur-[100px]" />

      <div className="absolute -bottom-40 -right-28 h-[420px] w-[420px] rounded-full bg-[#764ba2]/15 blur-[110px]" />

      <div className="relative z-10 flex min-h-[calc(100vh-160px)] items-center justify-center">
        <section className="w-full max-w-2xl overflow-hidden rounded-[36px] border border-[#EDE8DF] bg-white shadow-[0_30px_80px_rgba(17,24,39,0.14)]">
          {/* Success header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-violet-700 px-6 py-12 text-center text-white sm:px-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4A574]/20 blur-3xl" />

            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative z-10">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <CheckCircle
                  sx={{
                    fontSize: 58,
                    color: "#D4A574",
                  }}
                />
              </div>

              <Chip
                label={
                  hasValidPaymentDetails
                    ? "Payment Successful"
                    : "Payment details unavailable"
                }
                sx={{
                  mt: 3,
                  bgcolor: hasValidPaymentDetails
                    ? "rgba(16,185,129,0.18)"
                    : "rgba(245,158,11,0.2)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.16)",
                  fontWeight: 700,
                }}
              />

              <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
                {hasValidPaymentDetails
                  ? "Booking confirmed!"
                  : "Unable to verify payment"}
              </h1>

              <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-300">
                {hasValidPaymentDetails
                  ? "Your payment has been received and your salon appointment has been booked successfully."
                  : "The payment reference was not found in the return URL. Please check your bookings before attempting another payment."}
              </p>
            </div>
          </div>

          {/* Payment details */}
          <div className="p-6 sm:p-10">
            {hasValidPaymentDetails && (
              <>
                <div className="rounded-[24px] border border-[#EDE8DF] bg-[#FAF7F2] p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ede9fe]">
                      <ReceiptLong sx={{ color: "#7c3aed" }} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                        Payment reference
                      </p>

                      <p className="mt-2 break-all font-semibold text-[#111827]">
                        {paymentId}
                      </p>
                    </div>
                  </div>

                  <Divider sx={{ my: 3 }} />

                  <div>
                    <p className="text-sm text-gray-500">
                      Payment link
                    </p>

                    <p className="mt-1 break-all text-sm font-medium text-[#111827]">
                      {paymentLinkId}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-center text-sm leading-6 text-gray-500">
                  You can view the appointment status and full
                  details from My Bookings.
                </p>
              </>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                fullWidth
                variant="outlined"
                size="large"
                startIcon={<Home />}
                onClick={() => navigate("/")}
                sx={{
                  py: 1.4,
                  borderRadius: "999px",
                }}
              >
                Go to Home
              </Button>

              <Button
                fullWidth
                variant="contained"
                size="large"
                startIcon={<CalendarMonth />}
                onClick={() => navigate("/bookings")}
                sx={{
                  py: 1.4,
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg,#667eea,#764ba2)",
                }}
              >
                View My Bookings
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PaymentSuccess;