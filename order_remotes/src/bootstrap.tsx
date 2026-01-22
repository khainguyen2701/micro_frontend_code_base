import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { orderRouter } from "./router";
import { setAuthAdapter } from "./store/shared/auth.adapter";

const router = createBrowserRouter([...orderRouter]);

const rootEl = document.getElementById("root");
if (rootEl) {
  setAuthAdapter({
    getToken: () => {
      return localStorage.getItem("token");
    },
    logout: () => {
      localStorage.removeItem("token");
    },
  });
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
