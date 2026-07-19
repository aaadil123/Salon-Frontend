import { Menu, NotificationsActive, Search } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Drawer,
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalonByOwner } from "../../Redux/Salon/action";

const Navbar = ({ DrawerList }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:1024px)");
  const {salon} = useSelector(store => store)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // close mobile drawer automatically when screen becomes desktop
  useEffect(() => {
    if (isLargeScreen) {
      setOpen(false);
    }
  }, [isLargeScreen]);

  useEffect(() => {
    dispatch(fetchSalonByOwner(localStorage.getItem('jwt')))
  },[])
  

  return (
    <div className="sticky top-0 z-50 h-[80px] flex items-center justify-between px-5 lg:px-10 bg-white/80 backdrop-blur-md border-b border-[#EDE8DF]">
      <div className="flex items-center gap-4">
        <IconButton onClick={toggleDrawer(true)} className="lg:!hidden">
          <Menu color="primary" />
        </IconButton>

        <div>
          <h1 className="text-2xl font-bold text-[#111827]">
            Salon Owner
          </h1>
          <p className="hidden md:block text-sm text-gray-500">
            Manage bookings, revenue and services
          </p>
        </div>
      </div>

      <div className="hidden md:block w-[360px]">
        <TextField
          fullWidth
          size="small"
          placeholder="Search bookings, customers..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#7c3aed" }} />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="flex items-center gap-3">
        <IconButton>
          <Badge
            // badgeContent={5}
            color="secondary"
          >
            <NotificationsActive color="primary" />
          </Badge>
        </IconButton>

        <div className="hidden sm:flex items-center gap-3 bg-white rounded-full border border-[#EDE8DF] px-3 py-2 shadow-sm">
          <Avatar
            src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
            sx={{ width: 36, height: 36 }}
          />
          <div>
            <p className="text-sm font-bold text-[#111827]">{salon.salon?.name}</p>
            <p className="text-xs text-gray-500">Verified Partner</p>
          </div>
        </div>
      </div>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
            sx: {
            width: 310,
            background: "#FAF7F2",
            border: "none",
            overflow: "hidden",
            },
        }}
      >
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default Navbar;