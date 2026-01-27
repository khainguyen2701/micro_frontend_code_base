import App from "./App";

export const productRouter = [
  {
    element: <App />, //Layout product remote
    errorElement: <div>Product Remotes Error</div>,
    children: [
      {
        index: true,
        element: <div>Product List</div>,
      },
      {
        path: ":id",
        element: <div>Product Detail</div>,
        errorElement: <div>Product Detail Error</div>,
      },
    ],
  },
];
