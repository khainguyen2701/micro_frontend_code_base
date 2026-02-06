import { Link, Outlet } from "react-router-dom";
import "./App.css";

import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";
import { getAxiosInstance } from "./mfe/loadRemote";

const App = () => {
  const [value, setValue] = React.useState("Products");

  const login = async () => {
    const axiosInstance = await getAxiosInstance();

    const response = await axiosInstance.post(
      "api/v1/ms-auth/member-portal/sign-in",
      {
        email: "john_doe@example.com",
        password: "password123",
      },
    );

    return response;
  };

  useEffect(() => {
    console.log("re-render");
    login();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="content">
      <Box sx={{ display: "flex", gap: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab
            value="Products"
            label={
              <Link
                to="/products"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                Products
              </Link>
            }
          />
          <Tab
            value="Orders"
            label={
              <Link
                to="/orders"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                Orders
              </Link>
            }
          />
        </Tabs>
      </Box>
      <Outlet />
    </div>
  );
};

export default App;
