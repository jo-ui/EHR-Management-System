import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homapage/homepage.component";
import { Routes, Route } from "react-router-dom";
import ShopItem from "./pages/shop/shop-item.component";

const ShopPage = () => {
  return (
    <div>
      <h1>hey there</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop/hats" element={<ShopItem />} />
      </Routes>
    </div>
  );
}
export default App;
