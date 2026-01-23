import { Link, Outlet } from "react-router-dom";
import "./App.css";

import { Suspense } from "react";
import ProviderProducts from "./ProductRemote";

const App = () => {
  return (
    <div className="content">
      <Suspense fallback={<div>Loading...</div>}>
        <ProviderProducts />
      </Suspense>
      <Link to="/orders">Orders</Link>
      <Outlet />
    </div>
  );
};

export default App;
