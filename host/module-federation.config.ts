import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";
import path from "path";
export default createModuleFederationConfig({
  name: "host",
  remotes: {
    order_remotes_app:
      "order_remotes_app@http://localhost:3001/mf-manifest.json",
    product_remotes_app:
      "product_remotes_app@http://localhost:3002/mf-manifest.json",
    libs: "libs@http://localhost:3003/mf-manifest.json",
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
    zustand: {
      singleton: true,
    },
    axios: {
      singleton: true,
    },
  },
  runtimePlugins: [
    path.resolve(__dirname, "./src/mfe/plugins/custom_plugin.ts"),
    path.join(__dirname, "./src/mfe/plugins/retry.ts"),
  ],
});
