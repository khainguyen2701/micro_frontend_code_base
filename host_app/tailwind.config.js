import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  content: [
    path.resolve(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
    path.resolve(__dirname, "../dashboard_remotes/src/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {},
  },
};
