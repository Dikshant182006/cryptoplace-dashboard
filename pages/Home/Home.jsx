import React, { useContext, useState, useEffect } from "react";
import { CoinContext } from "../../context/coinContext";
import { Link } from "react-router-dom";
import chatgpt from "../../src/assets/chatgpt.svg";
import gemini from "../../src/assets/gemini.svg";
import claude from "../../src/assets/claude.svg";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const handleChat = (e) => {
    const prompt = "Best crypto Tracker";
    const encoded = encodeURIComponent(prompt);

    const url = `https://chatgpt.com/?q=${encoded}`;
    window.open(url, "_blank");
  };

  const handleGemini = (e) => {
    const url = "https://aistudio.google.com/";
    window.open(url);
  };

  const handleClaude = (e) => {
    const prompt = "Best crypto Tracker";
    const encoded = encodeURIComponent(prompt);

    const url = "https://claude.ai/";
    window.open(url);
  };

  const searchHandle = (e) => {
    e.preventDefault();
    const coins = allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home p-2 mt-15 ">
      <div className="home p-2 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-[30vw] h-[60vh] bg-purple-600/15 blur-[120px]" />
        <div>
          <div className="hero flex flex-col justify-center items-center my-10 relative z-10">
            <div className="flex flex-col items-center ">
              <div className="mb-2 px-4 py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm font-medium">
                🚀 Real-Time Crypto Data
              </div>

              <div className="hero flex flex-col justify-center items-center">
                <h2 className="font-bold text-[46px] text-center text-white bg-clip-text">
                  Explore Crypto Markets with <br /> Real-Time Data
                </h2>

                <p className="text-center leading-7 w-full sm:w-[80%] lg:w-[35vw] py-3 text-gray-400">
                  Welcome to the world's largest cryptocurrency marketplace.
                  Sign up to explore more about cryptos.
                </p>

                <form
                  onSubmit={searchHandle}
                  className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg w-[35vw] focus-within:ring-2 focus-within:ring-purple-400 transition-all"
                >
                  <span className="pl-4 text-gray-400 text-lg ">🔍</span>
                  <input
                    onChange={handleInput}
                    value={input}
                    required
                    type="text"
                    placeholder="Search crypto..."
                    className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                  />

                  <button
                    type="submit"
                    className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full m-1 hover:opacity-90 transition"
                  >
                    Search
                  </button>
                </form>

                <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:gap-8 sm:mt-10 text-center">
                  <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-purple-400 font-bold text-xl">10,000+</p>
                    <p className="text-gray-400 text-xs mt-1">
                      Cryptocurrencies
                    </p>
                  </div>
                  <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-orange-400 font-bold text-xl">$2.5T+</p>
                    <p className="text-gray-400 text-xs mt-1">Market Cap</p>
                  </div>
                  <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-green-400 font-bold text-xl">Live</p>
                    <p className="text-gray-400 text-xs mt-1">Price Updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div className="overflow-x-auto hide-scrollbar-x">

     <div className="crypto-table sm:max-w-[80vw] min-w-[800px] pb-5 m-auto bg-[#0A0A0A] mb-6 rounded-2xl sm:mt-10 mt-5 ">
        <div className="table-layout bf-[#0A0A0A] grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] p-2 px-3 rounded-lg border-black">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          <p className="text-right">Market Cap</p>
        </div>
        {displayCoin.slice(0, 8).map((item, index) => (
          <Link
            to={`/coin/${item.id}`}
            key={item.id}
            className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] items-center py-4 px-4 text-sm last:border-0 min-w-[80vw]"
          >
            <p>{item.market_cap_rank}</p>
            <div className="flex items-center gap-2">
              <img src={item.image} alt="coinImage" className="w-7" />
              <p className="text-lg">{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol}
              {item.current_price.toLocaleString()}
            </p>
            <p
              className={
                item.price_change_percentage_24h > 0
                  ? "text-green-800"
                  : "text-red-800"
              }
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="text-end">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
      </div>

      <div className="mt-15">
        <p className="border border-gray-900 w-[90vw] m-auto"></p>
        <div className="text-center w-full">
          <h2 className="text-3xl font-bold m-2">
            All-In-One Crypto Tracker to Manage Your <br /> Portfolio More
            Efficiently
          </h2>
          <p className="text-white/50">
            We’re the only platform on the market that supports all <br /> major
            crypto platforms.
          </p>
        </div>
      </div>

      <div className="cryptoAi my-15">
        <div className="bg-gradient-to-br from-[#161412] to-[#111010] m-auto rounded-2xl h-[55vh] w-[90vw] flex flex-col items-center justify-center gap-5">
          <h2 className="font-bold text-4xl mx-3 text-center">
            Find the Best Crypto Tracker with AI
          </h2>
          <p className="text-2xl text-center text-white/70">
            Ask AI anything about crypto <br /> instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center justify-center">
            <div
              onClick={handleChat}
              className="flex items-center gap-1 px-3 py-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <img src={chatgpt} alt="chatgptImg" className="invert" />
              <button className="cursor-pointer">Ask ChatGPT</button>
            </div>

            <div
              onClick={handleGemini}
              className="flex items-center gap-1 px-3 py-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <img src={gemini} alt="geminiImg" />
              <button className="cursor-pointer">Ask Gemini</button>
            </div>

            <div
              onClick={handleClaude}
              className="flex items-center gap-1 px-3 py-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <img src={claude} alt="claudeImg" className="w-6" />
              <button className="cursor-pointer">Ask Claude</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
