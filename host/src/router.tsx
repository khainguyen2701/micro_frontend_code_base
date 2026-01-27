import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { orderRouter, productRouter } from "./mfe/loadRemote";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <div>Shell Error</div>,
    children: [
      {
        path: "/orders",
        errorElement: <div>Order Remotes Error</div>,
        children: ((await orderRouter) as any) ?? [],
      },
      {
        path: "/products",
        errorElement: <div>Product Remotes Error</div>,
        children: ((await productRouter) as any) ?? [],
      },
    ],
  },
]);

export default router;
