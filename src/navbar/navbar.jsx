import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CoinContext } from "../../context/coinContext";
import logo from "../assets/logo.svg";
import setting from "../assets/setting.svg";

function Navbar() {
  const { setCurrency } = useContext(CoinContext);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleHandburg = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex items-center p-2 px-5 bg-neutral-900 w-full fixed top-0 left-0 z-50 text-white">
        <div className="flex justify-between w-[60vw]">
          <div onClick={handleHandburg} className="md:hidden text-2xl">
            ☰
          </div>
          <div className="flex items-center gap-2 text-center">
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer w-9 h-9 hover:scale-110 transition"
            />
            <Link to={"/"} className="font-bold cursor-pointer text-lg">
              Cryptoplace
            </Link>
          </div>
        </div>

        <div className="md:flex items-center hidden justify-between w-full mx-20">
          <div className="md:flex hidden items-center justify-between w-[50vw] mx-5">
            <NavLink
              to={"/tracker"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 cursor-pointer bg-neutral-800 rounded-lg p-1 hover:bg-orange-400 hover:text-black text-sm px-4 font-bold"
                  : "cursor-pointer bg-neutral-800 rounded-lg p-1 hover:bg-orange-400 hover:text-black text-sm px-4 text-white/60 font-bold"
              }
            >
              Portfolio Tracker
            </NavLink>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "border-b-2 border-orange-300" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/coins/"}
              className={({ isActive }) =>
                isActive ? "border-b-2 border-orange-300" : ""
              }
            >
              CryptoCurrencies
            </NavLink>
            <img className="cursor-pointer w-6" src={setting} alt="setting" />
          </div>

          <div className="currency-box md:flex gap-5 hidden">
            <select
              className="cursor-pointer bg-[#1f1f1f] px-3 justify-center rounded-lg hover:bg-gray-900"
              onChange={currencyHandler}
            >
              <option value="usd" className="bg-black">
                USD
              </option>
              <option value="inr" className="bg-black">
                INR
              </option>
              <option value="eur" className="bg-black">
                EUR
              </option>
            </select>
            <Link
              to="/signup"
              className="px-6 w-[11vw] py-2 rounded-xl bg-orange-600 backdrop-blur-md text-white border border-white/20 hover:bg-orange-500 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute top-14 left-0 w-[70%] h-screen bg-neutral-900 shadow-xl p-5 flex flex-col gap-10 md:hidden">
            <NavLink
              to={"/tracker"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 cursor-pointer bg-neutral-800 rounded-lg p-1 hover:bg-orange-400 hover:text-black text-sm px-4 font-bold w-[35vw]"
                  : "cursor-pointer bg-neutral-800 rounded-lg p-1 hover:bg-orange-400 hover:text-black text-sm px-4 text-white/60 font-bold w-[35vw]"
              }
            >
              Portfolio Tracker
            </NavLink>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "border-b-2 border-orange-300 w-[12vw]" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/coins/"}
              className={({ isActive }) =>
                isActive ? "border-b-2 border-orange-300 w-[30vw]" : ""
              }
            >
              CryptoCurrencies
            </NavLink>
            <img className="cursor-pointer w-10" src={setting} alt="setting" />

            <div className="currency-box md:flex gap-5 hidden">
              <select
                className="cursor-pointer bg-[#1f1f1f] px-3 justify-center rounded-lg hover:bg-gray-900"
                onChange={currencyHandler}
              >
                <option value="usd" className="bg-black">
                  USD
                </option>
                <option value="inr" className="bg-black">
                  INR
                </option>
                <option value="eur" className="bg-black">
                  EUR
                </option>
              </select>
              <Link
                to="/signup"
                className="px-5 py-2 rounded-xl bg-orange-600 backdrop-blur-md text-white border border-white/20 hover:bg-orange-500 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
      <hr className="border border-zinc-800" />
    </>
  );
}

export default Navbar;
