import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CoinContext } from "../../context/coinContext";
import logo from "../assets/logo.svg"
import setting from "../assets/setting.svg"

function Navbar() {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (e) => {
  const value = e.target.value;

  const currencyMap = {
    usd: "$",
    inr: "₹",
    eur: "€",
  };

  setCurrency({
    name: value,
    symbol: currencyMap[value] || "$",
  });
};

  return (
    <>
      <div className="flex items-center justify-between p-2 px-5 bg-neutral-900 w-screen fixed">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="cursor-pointer w-9 h-9 hover:scale-110 transition"/>
          <Link to={"/"} className="font-bold cursor-pointer text-lg">Cryptoplace</Link>
        </div>
        <ul className="flex gap-10 items-center">
          <NavLink to={"/tracker"} className={({isActive}) => isActive? "text-orange-400 cursor-pointer bg-neutral-800 rounded-lg p-1 hover:bg-orange-400 hover:text-black text-sm px-4 font-bold" : "cursor-pointer bg-neutral-800 rounded-lg p-1 hover:bg-orange-400 hover:text-black text-sm px-4 text-white/60 font-bold"}>Portfolio Tracker</NavLink>
          <NavLink to={"/"} className={({isActive}) => isActive? "border-b-2 border-orange-300" : ""}>Home</NavLink>
          <NavLink to={"/coins/"} className={({isActive}) => isActive? "border-b-2 border-orange-300" : ""} >CryptoCurrencies</NavLink>
          <img className="cursor-pointer" src={setting} alt="setting" />
        </ul>
        <div className="currency-box flex gap-5 ">
          <select className="cursor-pointer bg-[#1f1f1f] px-3 justify-center rounded-lg hover:bg-gray-900" onChange={currencyHandler}>
            <option value="usd" className="bg-black">USD</option>
            <option value="inr" className="bg-black">INR</option>
            <option value="eur" className="bg-black">EUR</option>
          </select>
          <Link to="/signup" className="px-5 py-2 rounded-xl bg-orange-600 backdrop-blur-md text-white border border-white/20 hover:bg-orange-500 transition-all duration-300">
            Get Started
          </Link>
        </div>
      </div>
      <hr className="border border-zinc-800" />
    </>
  );
}

export default Navbar;
