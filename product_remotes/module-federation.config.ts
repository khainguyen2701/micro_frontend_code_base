import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "product_remotes_app",
  exposes: {
    ".": "./src/components/ProviderComponent.tsx",
    "./router": "./src/router.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router-dom": {
      singleton: true,
      requiredVersion: false,
    },
  },
});
