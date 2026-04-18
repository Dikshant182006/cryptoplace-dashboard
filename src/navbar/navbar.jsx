import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CoinContext } from "../../context/coinContext";

function Navbar() {

  const {setCurrency} = useContext(CoinContext);
  // const currencyHandler = (e)=> {
  //   switch(e.target.value){
  //     case "usd": {
  //       setCurrency({name : "usd", symbol: "$"});
  //       break;
  //     }
  //     case "inr": {
  //       setCurrency({name : "inr", symbol: "₹"});
  //       break;
  //     }
  //     case "eur": {
  //       setCurrency({name : "eur", symbol: "€"});
  //       break;
  //     }
  //     default : {
  //       setCurrency({name : "usd", symbol: "$"});
  //       break;
  //     }
  //   }
  // }
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
      <div className="flex items-center justify-between p-4 mx-10">
        <div className="flex items-center gap-2">
          <img src="logo.svg" alt="logo" className="invert w-10" />
          <h2 className="font-bold cursor-pointer text-2xl">Cryptoplace</h2>
        </div>
        <ul className="flex gap-10">
          <NavLink to="/" className={({isActive}) => isActive? "underline font-bold" : ""}>Home</NavLink>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
        <div className="currency-box flex gap-5">
          <select className="cursor-pointer" onChange={currencyHandler}>
            <option value="usd" className="bg-black">USD</option>
            <option value="inr" className="bg-black">INR</option>
            <option value="eur" className="bg-black">EUR</option>
          </select>
          <Link to="/signup" className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
            Sign Up
          </Link>
        </div>
      </div>
      <hr className="border-2 border-zinc-800" />
    </>
  );
}

export default Navbar;
