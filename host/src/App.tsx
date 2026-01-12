import "./App.css";
import "order_remotes/css";
import OrderRemotes from "order_remotes";

const App = () => {
  return (
    <div className="content">
      <h1 className="text-3xl font-bold underline text-amber-100">
        Hello world!
      </h1>
      <OrderRemotes />
    </div>
  );
};

export default App;
