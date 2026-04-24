import { useState } from "react";
import Navbar from "./navbar/navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Coin from "../pages/Coin/Coin.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Footer from "./Footer/Footer.jsx";
import CryptoList from "../pages/Cryptocurrency/CryptoList.jsx";
import Tracker from "../pages/CrytoTracker/Tracker.jsx";
import HelpCenter from "./Footer/HelpCenter.jsx";
import AboutUs from "./Footer/AboutUs.jsx";
import Features from "./Footer/Features.jsx";

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
        <Route path="/helpCenter" element={<HelpCenter />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
