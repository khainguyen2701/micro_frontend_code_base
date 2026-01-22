import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "order_remotes_app",
  exposes: {
    ".": "./src/App.tsx",
    "./router": "./src/router.tsx",
    "./setAuthAdapter": "./src/store/shared/auth.adapter.ts",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: false,
    },

    "@mui/material": {
      singleton: true,
      requiredVersion: false,
    },
    "@mui/system": {
      singleton: true,
      requiredVersion: false,
    },
    "@mui/icons-material": {
      singleton: true,
      requiredVersion: false,
    },

    "@emotion/react": {
      singleton: true,
      requiredVersion: false,
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: false,
    },
    zustand: {
      singleton: true,
    },
  },
});
