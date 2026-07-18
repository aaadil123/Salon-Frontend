import React, { useEffect, useState } from "react";
import { Button, Divider, Modal } from "@mui/material";
import { RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CategoryCard from "./CategoryCard";
import ServiceCard from "./ServiceCard";
import SelectedServiceList from "./SelectedServiceList";
import { fetchServicesBySalonId } from "../../../Redux/Salon Service/action";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createBooking } from "../../../Redux/Booking/action";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%,-50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// }

const SalonServiceDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    services: [],
    time: null,
  });

  const getServiceId = (service) => service?.id ?? service?._id;

  const { id: salonId } = useParams();
  const dispatch = useDispatch();

  const categories = useSelector((store) => store.category?.categories || []);

  const services = useSelector((store) => store.service?.services || []);

  useEffect(() => {
    if (!salonId) return;

    dispatch(
      fetchServicesBySalonId({
        salonId,
        jwt: localStorage.getItem("jwt"),
        categoryId: selectedCategory,
      }),
    );
  }, [dispatch, salonId, selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory((currentCategoryId) =>
      currentCategoryId === categoryId ? null : categoryId,
    );
  };

  const handleSelectService = (service) => {
    const serviceId = getServiceId(service);

    if (!serviceId) return;

    setBookingData((prevState) => {
      const alreadySelected = prevState.services.some(
        (selectedService) =>
          String(getServiceId(selectedService)) === String(serviceId),
      );

      // Do not add the same service more than once
      if (alreadySelected) {
        return prevState;
      }

      return {
        ...prevState,
        services: [...prevState.services, service],
      };
    });
  };

  const handleModalClose = () => setOpen(false);
  const handleModalOpen = () => setOpen(true);
  const handleBooking = () => {
    const serviceIds = bookingData.services.map((service) => service.id);
    dispatch(
      createBooking({
        jwt: localStorage.getItem("jwt"),
        salonId: salonId,
        bookingData: { serviceIds, startTime: bookingData.time },
      }),
    );
  };

  // const handleRemoveService = (serviceId) => {
  //   setBookingData((prevState) => ({
  //     ...prevState,
  //     services: prevState.services.filter(
  //       (service) => String(getServiceId(service)) !== String(serviceId),
  //     ),
  //   }));
  // };
  const handleRemoveService = (serviceId) => {
    const updatedServices = bookingData.services.filter(
      (service) => String(getServiceId(service)) !== String(serviceId),
    );

    setBookingData((prevState) => ({
      ...prevState,
      services: updatedServices,
    }));

    if (updatedServices.length === 0) {
      setOpen(false);
    }
  };

  const totalPrice = bookingData.services.reduce(
    (total, selectedService) => total + Number(selectedService.price || 0),
    0,
  );

  const hasSelectedServices = bookingData.services.length > 0;
  useEffect(() => {
    if (!hasSelectedServices) {
      setOpen(false);
    }
  }, [hasSelectedServices]);

  return (
    <div className="mt-10 gap-8 lg:flex">
      {/* Categories */}
      <section className="space-y-4 lg:w-[24%]">
        {categories.length > 0 ? (
          categories.map((categoryItem, index) => {
            const categoryKey =
              categoryItem.id ??
              categoryItem._id ??
              `${categoryItem.name || "category"}-${index}`;

            const categoryId =
              categoryItem.id ?? categoryItem._id ?? categoryKey;

            return (
              <CategoryCard
                key={categoryKey}
                item={categoryItem}
                selectedCategory={selectedCategory}
                handleCategoryClick={() => handleCategoryClick(categoryId)}
              />
            );
          })
        ) : (
          <div className="rounded-[24px] border border-[#EDE8DF] bg-white p-5 text-center text-gray-500">
            No categories available
          </div>
        )}
      </section>

      {/* Services */}
      <section className="mt-8 space-y-4 lg:mt-0 lg:w-[50%]">
        {services.length > 0 ? (
          services.map((serviceItem, index) => {
            const serviceKey =
              serviceItem.id ??
              serviceItem._id ??
              `${serviceItem.name || "service"}-${index}`;

            return (
              <React.Fragment key={serviceKey}>
                <ServiceCard
                  onSelect={handleSelectService}
                  onRemove={handleRemoveService}
                  item={serviceItem}
                />
                {index < services.length - 1 && <Divider />}
              </React.Fragment>
            );
          })
        ) : (
          <div className="rounded-[24px] border border-[#EDE8DF] bg-white p-8 text-center">
            <h2 className="font-bold text-[#111827]">No services found</h2>

            <p className="mt-2 text-sm text-gray-500">
              Select another category or check again later.
            </p>
          </div>
        )}
      </section>

      {/* Selected services */}
      <section className="mt-8 lg:mt-0 lg:w-[26%]">
        <div className="sticky top-24 rounded-[28px] border border-[#EDE8DF] bg-white p-6 shadow-lg">
          {hasSelectedServices ? (
            <>
              <div className="mb-5 flex items-center gap-3">
                <ShoppingCart sx={{ color: "#7c3aed" }} />

                <h1 className="text-xl font-bold">Selected Items</h1>
              </div>

              <SelectedServiceList
                selectedServices={bookingData.services}
                onRemove={handleRemoveService}
              />

              <div className="my-5 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: 1.4,
                  background: "linear-gradient(135deg,#667eea,#764ba2)",
                }}
                onClick={handleModalOpen}
              >
                Book Now
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
              <RemoveShoppingCart
                sx={{
                  fontSize: 40,
                  color: "#7c3aed",
                }}
              />

              <h1 className="font-bold text-[#111827]">No services selected</h1>

              <p className="text-sm text-gray-500">
                Add a service to continue with your booking.
              </p>
            </div>
          )}
        </div>
      </section>

      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="booking-modal-title"
        aria-describedby="booking-modal-description"
      >
        <div
          className="
      absolute
      left-1/2
      top-1/2
      w-[90%]
      max-w-[650px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-[28px]
      bg-white
      p-6
      shadow-2xl
      lg:flex
      gap-6
    "
        >
          <div className="mb-6 border-b border-[#EDE8DF] pb-5 lg:mb-0 lg:w-[42%] lg:border-b-0 lg:border-r lg:pr-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
              Appointment
            </p>

            <h1
              id="booking-modal-title"
              className="mt-2 text-2xl font-bold text-[#111827]"
            >
              Select Booking Time
            </h1>

            <p
              id="booking-modal-description"
              className="mt-3 text-sm leading-6 text-gray-500"
            >
              Choose an available date and time for your selected services.
            </p>
          </div>

          <div className="space-y-5 lg:w-[58%]">
            <SelectedServiceList
              onRemove={handleRemoveService}
              selectedServices={bookingData.services}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Select Time Slot"
                sx={{ width: "100%" }}
                onChange={(value) => {
                  if (value) {
                    const localDate = value.format("YYYY-MM-DDTHH:mm:ss");

                    setBookingData((prevState) => ({
                      ...prevState,
                      time: localDate,
                    }));
                  }
                }}
              />
            </LocalizationProvider>

            <Button
              fullWidth
              variant="contained"
              disabled={!bookingData.time}
              onClick={handleBooking}
              sx={{
                py: 1.3,
                background: "linear-gradient(135deg,#667eea,#764ba2)",
              }}
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SalonServiceDetails;
