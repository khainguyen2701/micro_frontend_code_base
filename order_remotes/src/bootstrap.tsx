import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { orderRouter } from "./router";

const router = createBrowserRouter([...orderRouter]);

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
