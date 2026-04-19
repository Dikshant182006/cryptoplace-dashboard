import React, { useContext , useState , useEffect } from "react";
import { CoinContext } from "../../context/coinContext";
import { Link } from "react-router-dom";

const Home = () => {

  const {allCoin , currency} = useContext(CoinContext);
  const [displayCoin , setDisplayCoin] = useState([]);
  const [input , setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
    if(e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  }

  const searchHandle = (e) => { 
    e.preventDefault();
    const coins = allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home p-2">
      <div className="hero flex flex-col justify-center items-center my-10">
        <h2 className="font-bold text-[46px] mt-10 text-center">
        Explore Crypto Markets with<br /> Real-Time Data
        </h2>
        <p className="text-center leading-7 w-[35vw] py-7">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form onSubmit={searchHandle} className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden shadow-lg w-[35vw] focus-within:ring-2 focus-within:ring-purple-400 transition-all">
          <input onChange={handleInput} value={input} required
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
      <div className="crypto-table max-w-[50vw] pb-5 m-auto bg-slate-900 mb-6 rounded-2xl">
        <div className="table-layout bg-[linear-gradient(to_bottom,#2e1065,#020617)] grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] p-2 px-3 rounded-lg border-black">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="text-right">Market Cap</p>
        </div>
        {
          displayCoin.slice(0,8).map((item, index) => (
            <Link to={`/coin/${item.id}`} key={item.id} className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] items-center py-4 px-4 border-b text-sm last:border-0">
              <p>{item.market_cap_rank}</p>
              <div className="flex items-center gap-2">
                <img src={item.image} alt="coinImage" className="w-10" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h>0? "text-green-800": "text-red-800"}>
                {Math.floor(item.price_change_percentage_24h*100)/100}</p>
              <p className="text-end">{currency.symbol}{item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
