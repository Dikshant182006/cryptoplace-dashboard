import React, { useContext } from "react";
import { CoinContext } from "../../context/coinContext";

const CryptoList = () => {
  const { currency, wholeData, allCoin } = useContext(CoinContext);

  const formatNumber = (num) => {
  if (num >= 1e12) return (num / 1e12).toFixed(0) + "T";
  if (num >= 1e9) return (num / 1e9).toFixed(0) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(0) + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(0) + "K";
  return num;
};

  if (!wholeData) {
    return <div className="text-center mt-20">Loading...</div>;
  }
  return (
    <>
      <div className="min-h-screen mt-50">
        <div className="flex justify-center items-center ">
          <div>
            <h1 className="text-4xl flex justify-center m-3 font-bold">
              Today's Crypto Prices by Market Cap
            </h1>
            <p className="text-center text-2xl text-white/60">
              The global crypto market cap is approximately $2.7T, with a 1.14%
              change <br /> in the last 24 hours. Daily trading volume stands
              near $113B, while Bitcoin holds a dominance of <br /> 56.8%.
            </p>
          </div>
        </div>

        <div className="market-cap flex gap-7 justify-center mt-8">
          <div className={wholeData.market_cap_change_percentage_24h_usd.toFixed(2)>0? " bg-green-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3" : "bg-red-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3"} >
            <p>Market Cap </p>
            <div className="flex gap-3 items-center">
              <h2 className="text-xl font-bold text-white">
                ${wholeData.total_market_cap.usd.toLocaleString()}
              </h2>
              <span className={wholeData.market_cap_change_percentage_24h_usd.toFixed(2)>0? "bg-green-800 py-1 px-1.5 rounded-lg text-white": "bg-red-900 py-1 px-1.5 rounded-lg text-white"}>
                {wholeData.market_cap_change_percentage_24h_usd.toFixed(2)}%
              </span>
            </div>
          </div>
          <div className="box2" className={wholeData.volume_change_percentage_24h_usd.toFixed(2)>0? " bg-green-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3" : "bg-red-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3"} >
            <p>Volume 24h</p>
            <div className="flex gap-3 items-center">
              <h2 className="text-xl font-bold text-white">
                ${wholeData.total_volume.usd.toLocaleString()}
              </h2>
              <span className="" className={wholeData.volume_change_percentage_24h_usd.toFixed(2)>0? "bg-green-800 py-1 px-1.5 rounded-lg text-white": "bg-red-00 py-1 px-1.5 rounded-lg text-white"} >
                {wholeData.volume_change_percentage_24h_usd.toFixed(2)}%
              </span>
            </div>
          </div>
          <div className="box3 bg-red-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3" className={wholeData.market_cap_percentage.btc.toFixed(1)>0? "bg-green-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3" : "bg-red-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3"} >
            <p>BTC Dominance</p>
            <div className="flex gap-3 items-center">
              <h2 className="font-bold text-xl text-white">
                {wholeData.market_cap_percentage.btc.toFixed(1)}%
              </h2>
              <span className="bg-red-900 py-1 px-2 rounded-lg text-white" className={wholeData.market_cap_percentage.btc.toFixed(1)>0? "bg-green-900 py-1 px-2 rounded-lg text-white": "bg-green-800 py-1 px-2 rounded-lg text-white"} >
                0.5%
              </span>
            </div>
          </div>
        </div>

        <div className="table m-auto my-10 pb-5 min-h-[60vh] w-[95vw] bg-[#090909] rounded-xl pt-5 text-white/50 pr-5">
          <div className="grid grid-cols-[0.5fr_2fr_0.5fr_0.5fr_0.5fr_1fr_1fr_1fr] gap-10 mb-10 text-right">
            <p>#</p>
            <p className="text-start">Name</p>
            <p>1h %</p>
            <p>24h %</p>
            <p>7d %</p>
            <p>Price</p>
            <p>Market Cap</p>
            <p>Volume 24h</p>
          </div>

          {allCoin.slice(0, 35).map((item, index) => (
            <div
              key={item.id}
              className="text-white grid grid-cols-[0.5fr_2fr_0.5fr_0.5fr_0.5fr_1fr_1fr_1fr] text-right w-[95vw] gap-10 mt-4"
            >
              <p>{item.market_cap_rank}</p>
              <div className="flex items-center gap-2">
                <img src={item.image} alt="" className="w-7" />
                <p className="capitalize text-white font-bold">
                  {item.id}
                </p>
                <span className="text-white/70">{item.symbol.toUpperCase()}</span>
              </div>
              <p className={item.price_change_percentage_1h_in_currency>0? "text-green-500": "text-red-600"}>{item.price_change_percentage_1h_in_currency?.toFixed(2) ??"0.0"}</p>
              <p className={item.price_change_percentage_24h_in_currency>0? "text-green-500": "text-red-600"}>{item.price_change_percentage_24h_in_currency?.toFixed(2)?? "0.0"}</p>
              <p className={item.price_change_percentage_7d_in_currency>0? "text-green-500": "text-red-600"}>{item.price_change_percentage_7d_in_currency?.toFixed(2)?? "0.0"}</p>
              <p>{currency.symbol}{item.current_price}</p>
              <p>{formatNumber(item.market_cap)}</p>
              <p>{formatNumber(item.total_volume)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CryptoList;
