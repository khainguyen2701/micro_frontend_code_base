import App from "./App";
import Provider from "./components/ProviderComponent";

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
        element: <Provider />,
        errorElement: <div>Order Detail Error</div>,
      },
    ],
  },
];
