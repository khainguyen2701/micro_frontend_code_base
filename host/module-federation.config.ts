import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "host",
  remotes: {
    order_remotes_app:
      "order_remotes_app@http://localhost:3001/mf-manifest.json",
  },
  shareStrategy: "loaded-first",
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
    "@mui/icons-material": {
      singleton: true,
      requiredVersion: false,
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: false,
    },
  },
});
