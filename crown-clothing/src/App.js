import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SigninAndSignup from "./pages/signin-and-signup/signin-and-signup";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/signin" element={<SigninAndSignup />} />
      </Routes>
    </div>
  );
}

export default App;
