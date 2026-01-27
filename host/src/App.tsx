import { Link, Outlet } from "react-router-dom";
import "./App.css";

import { Box } from "@mui/material";

const App = () => {
  return (
    <div className="content">
      <Box sx={{ display: "flex", gap: 2 }}>
        <Link to="/orders" color="inherit">
          Orders
        </Link>{" "}
        <Link to="/products" color="inherit">
          Products
        </Link>
      </Box>
      <Outlet />
    </div>
  );
};

export default App;
