import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "order_remotes",
  exposes: {
    ".": "./src/components/ProviderComponent.tsx",
    "./css": "./src/App.css",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
