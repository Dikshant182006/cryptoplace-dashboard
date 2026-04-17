import React from "react";

const Home = () => {
  return (
    <div className="home p-2">
      <div className="hero flex flex-col justify-center items-center my-10">
        <h2 className="font-bold text-4xl py-2 text-center">
          Largest <br /> Crypto Marketplace
        </h2>
        <p className="text-center leading-7 w-[35vw] py-7">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden shadow-lg w-[35vw] focus-within:ring-2 focus-within:ring-purple-400 transition-all">
          <input
            type="text"
            placeholder="Search crypto..."
            className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-300 outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[linear-gradient(to_right,#a855f7,#d946ef)] text-white font-medium hover:opacity-90 transition-all"
          >
            Search
          </button>
        </form>
      </div>
      <div className="crypto-table max-w-[50vw] m-auto">
        <div className="table-layout bg-[linear-gradient(to_bottom,#2e1065,#020617)] grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] p-2 px-3 rounded-lg border-black">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="text-right">Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
