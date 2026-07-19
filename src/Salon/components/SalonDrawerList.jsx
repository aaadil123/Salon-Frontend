import React from "react";
import {
  AccountBalance,
  AccountBox,
  Add,
  Category,
  Dashboard,
  Inventory,
  Logout,
  NotificationsNone,
  Receipt,
  ShoppingBag,
} from "@mui/icons-material";

import DrawerList from "../components/DrawerList";

const menu = [
  {
    name: "Dashboard",
    path: "/salon-dashboard",
    icon: <Dashboard />,
    activeIcon: <Dashboard />,
  },
  {
    name: "Bookings",
    path: "/salon-dashboard/bookings",
    icon: <ShoppingBag />,
    activeIcon: <ShoppingBag />,
  },
  {
    name: "Services",
    path: "/salon-dashboard/services",
    icon: <Inventory />,
    activeIcon: <Inventory />,
  },
  {
    name: "Add Services",
    path: "/salon-dashboard/add-services",
    icon: <Add />,
    activeIcon: <Add />,
  },
  {
    name: "Payment",
    path: "/salon-dashboard/payment",
    icon: <AccountBalance />,
    activeIcon: <AccountBalance />,
  },
  {
    name: "Transactions",
    path: "/salon-dashboard/transaction",
    icon: <Receipt />,
    activeIcon: <Receipt />,
  },
  {
    name: "Category",
    path: "/salon-dashboard/category",
    icon: <Category />,
    activeIcon: <Category />,
  },
  {
    name: "Notifications",
    path: "/salon-dashboard/notifications",
    icon: <NotificationsNone />,
    activeIcon: <NotificationsNone />,
  },
];

const menu2 = [
  {
    name: "Account",
    path: "/salon-dashboard/account",
    icon: <AccountBox />,
    activeIcon: <AccountBox />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <Logout />,
    activeIcon: <Logout />,
    action: "logout",
  },
];

const SalonDrawerList = ({ toggleDrawer }) => {
  return (
    <DrawerList
      menu={menu}
      menu2={menu2}
      toggleDrawer={toggleDrawer}
    />
  );
};

export default SalonDrawerList;