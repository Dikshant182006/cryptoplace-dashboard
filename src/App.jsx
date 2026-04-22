import { useState } from "react";
import Navbar from "./navbar/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Coin from "../pages/Coin/Coin.jsx"
import SignUp from "../pages/SignUp/SignUp.jsx";
import Footer from "./Footer/Footer.jsx";
import CryptoList from "../pages/Cryptocurrency/CryptoList.jsx";
import Tracker from "../pages/CrytoTracker/Tracker.jsx";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/" element={<CryptoList />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
