import { useState } from "react";
import Navbar from "./navbar/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Coin from "../pages/Coin/Coin.jsx"
import SignUp from "../pages/SignUp/SignUp.jsx";
import Footer from "./Footer/footer.jsx";
import CryptoList from "../pages/Cryptocurrency/CryptoList.jsx";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/" element={<CryptoList />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
