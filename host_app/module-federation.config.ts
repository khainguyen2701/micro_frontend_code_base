export const mfConfig = {
  name: "host_app",
  exposes: {},
  remotes: {
    dashboard_remotes: "dashboard_remotes@http://localhost:8080/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
