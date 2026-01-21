import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { orderRouter } from "order_remotes_app/router";

const OrderRemotes = lazy(() => import("order_remotes_app"));

console.log("orderRouter", orderRouter);

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <div>Shell Error</div>,
    children: [
      {
        path: "/orders",
        errorElement: <div>Order Remotes Error</div>,
        children: orderRouter as any,
        
      },
    ],
  },
]);

export default router;
