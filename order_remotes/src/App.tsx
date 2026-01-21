import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="content">
      <h1 className="">Hello world!</h1>
      <Outlet />
    </div>
  );
};

export default App;
