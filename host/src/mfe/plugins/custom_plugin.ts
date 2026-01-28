import { ModuleFederationRuntimePlugin } from "@module-federation/enhanced/runtime";

export default function (): ModuleFederationRuntimePlugin {
  return {
    name: "custom-plugin-build",
    beforeInit(args) {
      console.log("[build time inject] beforeInit: ", args);
      return args;
    },
    beforeLoadShare(args) {
      console.log("[build time inject] beforeLoadShare: ", args);
      return args;
    },
    errorLoadRemote(args) {
      console.log("[build time inject] errorLoadRemote: ", args);
      return args;
    },
  };
}
