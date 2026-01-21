import App from "./App";

export const orderRouter = [
  {
    element: <App />, //Layout order remote
    errorElement: <div>Order Remotes Error</div>,
    children: [
      {
        index: true,
        element: <div>Order List</div>,
      },
      {
        path: ":id",
        element: <div>Order Detail</div>,
        errorElement: <div>Order Detail Error</div>,
      },
    ],
  },
];
