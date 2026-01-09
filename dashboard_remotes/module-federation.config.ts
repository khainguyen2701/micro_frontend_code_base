export const mfConfig = {
  name: "dashboard_remotes",
  exposes: {
    "./Header": "./src/components/header",
  },
  filename: "remoteEntry.js",
  shared: ["react", "react-dom"],
};
