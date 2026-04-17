import React, { useContext } from "react";
import { CoinContext } from "../../context/coinContext";

function Navbar() {
  
  return (
    <>
      <div className="flex items-center justify-between p-4 mx-10">
        <div className="flex items-center gap-2">
        <img src="logo.svg" alt="logo" className="invert w-10"/>
        <h2 className="font-bold cursor-pointer text-2xl">Cryptoplace</h2>
        </div>
        <ul className="flex gap-10">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
        <div className="currency-box flex gap-5">
          <select className="cursor-pointer">
            <option className="bg-black">USD</option>
            <option className="bg-black">INR</option>
            <option className="bg-black">EUR</option>
          </select>
        <button className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
  Sign Up
</button> 
        </div>
      </div>
      <hr className="border-2 border-zinc-800"/>
    </>
  );
}

export default Navbar;