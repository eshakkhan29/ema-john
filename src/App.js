import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import UseRequireAuth from "./components/UserequareAuth/UserequareAuth";
import Shipment from "./components/Shipment/Shipment";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route
          path="/inventory"
          element={
            <UseRequireAuth>
              <Inventory></Inventory>
            </UseRequireAuth>
          }
        ></Route>
        <Route
          path="/shipment"
          element={
            <UseRequireAuth>
              <Shipment></Shipment>
            </UseRequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
