import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/header";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: dashboard_remotes</div>
    <div>Framework: react-19</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
