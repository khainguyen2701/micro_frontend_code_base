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

const rootEl = document.getElementById("root");
if (rootEl) {
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
