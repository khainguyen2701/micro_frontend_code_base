import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

const muiCache = createCache({
  key: "mui",
  prepend: true,
});

import { RouterProvider } from "react-router-dom";
import router from "./router";
import { theme } from "./theme";

import { setAuthAdapter } from "order_remotes_app/setAuthAdapter";
import { useAuthStore } from "./store/auth.store";

const rootEl = document.getElementById("root");
if (rootEl) {
  setAuthAdapter({
    getToken: () => useAuthStore.getState().token,
    setToken: (token: string) => useAuthStore.getState().setToken(token),
    logout: () => useAuthStore.getState().logout(),
    subscribe: (listener: () => void) => useAuthStore.subscribe(listener),
  });
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </CacheProvider>
    </React.StrictMode>,
  );
}
