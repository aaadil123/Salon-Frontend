import {
  Avatar,
  Chip,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DrawerList = ({ menu = [], menu2 = [], toggleDrawer }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item) => () => {
    navigate(item.path);
    if (toggleDrawer) toggleDrawer(false)();
  };

  const renderItem = (item) => {
    const active = item.path === location.pathname;

    return (
      <div key={item.name} onClick={handleClick(item)} className="px-4">
        <div
          className={`
            flex items-center gap-1 px-4 py-3 rounded-[18px] cursor-pointer
            transition-all duration-300 border
            ${
              active
                ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-transparent shadow-lg"
                : "bg-white text-[#374151] border-transparent hover:border-[#EDE8DF] hover:shadow-md hover:-translate-y-0.5"
            }
          `}
        >
          <ListItemIcon
            sx={{
                minWidth: 38,
                color: active ? "#fff" : "#7c3aed",
            }}
            >
            {active ? item.activeIcon : item.icon}
          </ListItemIcon>

          <ListItemText
            primary={item.name}
            primaryTypographyProps={{
              fontWeight: active ? 700 : 600,
              fontSize: "0.92rem",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <aside className="h-full w-[310px] bg-[#FAF7F2] border-r border-[#EDE8DF] overflow-y-auto">
      <div className="h-full flex flex-col py-6">
        <div>
          <div className="px-6 mb-8">
            <h1 className="text-3xl font-bold text-[#111827]">
              Luxe<span className="text-[#7c3aed]">Salon</span>
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Partner Workspace
            </p>
          </div>

          <div className="px-4 mb-6">
            <div className="bg-white rounded-[28px] p-4 border border-[#EDE8DF] shadow-sm">
              <div className="flex items-center gap-3">
                <Avatar
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
                  sx={{ width: 56, height: 56, borderRadius: "18px" }}
                />

                <div>
                  <h2 className="font-bold text-[#111827]">
                    Monu Salon
                  </h2>
                  <Chip
                    label="Verified Partner"
                    size="small"
                    sx={{
                      mt: 0.7,
                      bgcolor: "#F0DDBF",
                      color: "#A87842",
                      fontWeight: 700,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="px-4 mb-6">
            <div className="rounded-[28px] bg-white p-5 border border-[#EDE8DF] shadow-sm">
              <p className="text-sm text-gray-500">Today’s Revenue</p>
              <h2 className="text-3xl font-bold text-[#111827] mt-1">
                ₹12,450
              </h2>
              <p className="text-sm text-emerald-600 font-semibold mt-2">
                ▲ 12% from yesterday
              </p>
            </div>
          </div> */}

          <div className="space-y-2">{menu.map(renderItem)}</div>
        </div>

        <div>
          <div className="px-6 my-5">
            <Divider />
          </div>

          

          {/* <div className="px-4 mb-5">
            <div className="rounded-[28px] p-5 text-white bg-gradient-to-r from-[#667eea] to-[#764ba2] shadow-lg">
              <p className="text-white/75 text-sm">Growth Tip</p>
              <h3 className="font-bold mt-1">Add more services</h3>
              <p className="text-sm text-white/75 mt-1">
                Salons with 10+ services get more bookings.
              </p>
            </div>
          </div> */}

          <div className="space-y-2">{menu2.map(renderItem)}</div>
        </div>
      </div>
    </aside>
  );
};

export default DrawerList;