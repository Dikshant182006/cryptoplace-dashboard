import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-6xl mt-30 flex justify-center font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Features
      </h1>
      <div className="flex mx-10 mt-10 justify-center gap-5">
        <div className="box1 gap-2 h-[30vh] bg-gradient-to-br from-zinc-900 to-zinc-800 w-[20vw] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl">Real-Time Prices 📈</h2>
          <p className="flex-wrap mx-4 text-white/60">
            Track live cryptocurrency prices updated from reliable APIs.
          </p>
          <Link to={"/coins/"} className="text-orange-400">
            Explore Coins →
          </Link>
        </div>
        <div className="box1 gap-2 h-[30vh] bg-gradient-to-br from-zinc-900 to-zinc-800 w-[20vw] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl">Top Coins 🥇</h2>
          <p className="flex-wrap mx-4 text-white/60">
            View the top-performing cryptocurrencies based on market cap and
            trends.
          </p>
          <Link to={"/"} className="text-orange-400">
            View Top Coins →
          </Link>
        </div>
        <div className="box1 gap-2 h-[30vh] bg-gradient-to-br from-zinc-900 to-zinc-800 w-[20vw] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300">
          <h2 className="text-xl">Trade on Exchanges 🔗</h2>
          <p className="flex-wrap mx-4 text-white/60">
            Track live cryptocurrency prices updated from reliable APIs.
          </p>
          <Link to={"/tracker"} className="text-orange-400">
            Explore Coins →
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#161412] to-[#111010] m-auto rounded-2xl h-[40vh] w-[80vw] my-30">
        <div className="text-center pt-10 m-10">
          <h1 className="text-3xl bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500  bg-clip-text text-transparent">
            Flexible Currency Selection
          </h1>
          <p className="text-white/60 mt-2">
            You can easily customize how you view cryptocurrency prices by
            switching between different currencies such as USD, INR, and EUR.
            This feature allows you to see market values in a format that feels
            more familiar and relevant to you. By selecting your preferred
            currency, you can better understand price movements, compare assets
            more effectively, and make more informed decisions based on
            localized value representation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
