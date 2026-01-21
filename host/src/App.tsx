import { Link, Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="content">
      <Link to="/orders">Orders</Link>
      <Outlet />
    </div>
  );
};

export default App;
