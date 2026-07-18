import {
  NotificationsActive,
  Menu as MenuIcon,
  AccountCircle,
} from "@mui/icons-material";

import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  useMediaQuery 
} from "@mui/material";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../../Redux/Auth/action";
import useNotificatonWebSocket from "../../util/useNotificatonWebSocket";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {auth, notification} = useSelector(store => store)

  const id = React.useId();

  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const open = Boolean(anchorEl);

  const isLargeScreen = useMediaQuery("(min-width:1024px)");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout())
    handleClose()
  }

  useEffect(()=>{
    dispatch(getUser(localStorage.getItem("jwt")))
    // console.log(auth);
  },[auth.jwt])


  // close mobile drawer automatically when screen becomes desktop
    useEffect(() => {
      if (isLargeScreen) {
        setMobileOpen(false);
      }
    }, [isLargeScreen]);

    useNotificatonWebSocket(auth.user?.id, "user")

  return (
    <>
      <div
        className="
        sticky top-0 z-50
        bg-white/80
        backdrop-blur-md
        border-b border-[#EDE8DF]
      "
      >
        <div
          className="
          max-w-7xl mx-auto
          h-[80px]
          px-6
          flex
          items-center
          justify-between
        "
        >
          {/* LEFT */}
          <div className="flex items-center gap-12">
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer"
            >
              <h1 className="font-bold text-3xl">
                <span className="text-[#111827]">
                  Luxe
                </span>
                <span className="text-[#7c3aed]">
                  Salon
                </span>
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => navigate("/")}
                className="font-medium text-gray-700 hover:text-[#7c3aed] transition"
              >
                Home
              </button>

              <button className="font-medium text-gray-700 hover:text-[#7c3aed] transition">
                Services
              </button>

              <button className="font-medium text-gray-700 hover:text-[#7c3aed] transition">
                Salons
              </button>

              <button className="font-medium text-gray-700 hover:text-[#7c3aed] transition">
                Reviews
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 md:gap-4">

            <Button
              onClick={()=>navigate('/become-partner')}
              variant="contained"
              sx={{
                background:
                  "linear-gradient(135deg,#667eea,#764ba2)",
                borderRadius: "999px",
              }}
            >
              Become Partner
            </Button>

            <IconButton
              onClick={() => navigate("/notifications")}
            >
              <Badge badgeContent={notification.unreadCount} color="error">
                <NotificationsActive />
              </Badge>
            </IconButton>

            {auth.user?.id ? (
              <div className="hidden md:flex items-center gap-2">
                <span className="font-semibold text-[#111827]">
                  {/* {user.fullName} */}
                  {auth.user?.fullName}
                </span>

                <IconButton
                  id={buttonId}
                  aria-controls={open ? menuId : undefined}
                  aria-haspopup="true"
                  aria-expanded={open}
                  onClick={handleClick}
                >
                  <Avatar
                    sx={{
                      background:
                        "linear-gradient(135deg,#667eea,#764ba2)",
                    }}
                  >
                    {/* {user.fullName?.charAt(0)} */}
                    {auth.user?.fullName[0].toUpperCase()}
                  </Avatar>
                </IconButton>
              </div>
              ) : (
              <IconButton
                onClick={() => navigate("/login")}
              >
                <AccountCircle
                  sx={{
                    fontSize: 42,
                    color: "#7c3aed",
                  }}
                />
              </IconButton>
            )}

            <IconButton
              className="lg:!hidden"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>

      {/* USER MENU */}
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            navigate("/bookings");
            handleClose();
          }}
        >
          My Bookings
        </MenuItem>

        {auth.user?.role === "SALON_OWNER" && <MenuItem
          onClick={() => {
            navigate("/salon-dashboard");
            handleClose();
          }}
        >
          Salon Dashboard
        </MenuItem>
        }
        <MenuItem
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>

      {/* MOBILE DRAWER */}
      {!isLargeScreen && (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <div className="w-[280px] p-6 flex flex-col gap-6">
            <button>Home</button>
            <button>Services</button>
            <button>Salons</button>
            <button>Reviews</button>

            {true && (
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(135deg,#667eea,#764ba2)",
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            )}

            {false && (
              <>
                <button onClick={() => navigate("/bookings")}>
                  My Bookings
                </button>

                <button>
                  Logout
                </button>
              </>
            )}

            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(135deg,#667eea,#764ba2)",
              }}
            >
              Become Partner
            </Button>
          </div>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;