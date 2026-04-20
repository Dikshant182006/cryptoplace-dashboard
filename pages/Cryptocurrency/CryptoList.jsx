import React, { useContext } from "react";
import { CoinContext } from "../../context/coinContext";

const CryptoList = () => {
  const { currency, wholeData , allCoin } = useContext(CoinContext);

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
            change <br /> in the last 24 hours. Daily trading volume stands near
            $113B, while Bitcoin holds a dominance of <br /> 56.8%.
          </p>
        </div>
      </div>

      <div className="market-cap flex gap-7 justify-center mt-8">
        <div className="box1 bg-red-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3">
          <p>Market Cap </p>
          <div className="flex gap-3 items-center">
            <h2 className="text-xl font-bold text-white">
              ${wholeData.total_market_cap.usd.toLocaleString()}
            </h2>
            <span className="bg-red-900 py-1 px-1.5 rounded-lg text-white">{wholeData.market_cap_change_percentage_24h_usd.toFixed(2)}%</span>
          </div>
        </div>
        <div className="box2 bg-green-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3">
          <p>Volume 24h</p>
          <div className="flex gap-3 items-center">
          <h2 className="text-xl font-bold text-white">
            ${wholeData.total_volume.usd.toLocaleString()}
          </h2>
          <span className="bg-green-600 py-1 px-1.5 rounded-lg text-white">{wholeData.volume_change_percentage_24h_usd.toFixed(2)}%</span>
          </div>
        </div>
        <div className="box3  bg-red-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3">
          <p>BTC Dominance</p>
          <div className="flex gap-3 items-center">
          <h2 className="font-bold text-xl text-white">{wholeData.market_cap_percentage.btc.toFixed(1)}%</h2>
          <span className="bg-red-900 py-1 px-2 rounded-lg text-white">0.5%</span>
          </div>
        </div>
      </div>

      <div className="table m-auto mt-10">
        <div className="grid grid-cols-[0.5fr_2fr_0.5fr_0.5fr_0.5fr_1fr_1fr_1fr] w-[95vw] bg-[#0A0A0A] min-h-[60vh] rounded-xl gap-10 pt-5 text-white/50">
          <p className="text-right">#</p>
          <p>Name</p>
          <p>1h %</p>
          <p>24h %</p>
          <p>7d %</p>
          <p>Price</p>
          <p>Market Cap</p>
          <p>Volume 24h</p>
        </div>
      </div>

      {
        allCoin.slice(0,50).map((item , index) => {
          <div className="grid grid-cols-[0.5fr_2fr_0.5fr_0.5fr_0.5fr_1fr_1fr_1fr] w-[95vw]">
            {/* <p className="text-white">{item.id}</p> */}
            console.log(item.name);
          </div>
        })
      }
      </div>
    </>
  );
};

export default CryptoList;
