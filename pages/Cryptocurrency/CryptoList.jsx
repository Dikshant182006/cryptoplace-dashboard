import React, { useContext } from "react";
import { CoinContext } from "../../context/coinContext";

const CryptoList = () => {
  const { currency, wholeData } = useContext(CoinContext);

  if (!wholeData) {
    return <div className="text-center mt-20">Loading...</div>;
  }
  return (
    <>
      <div className="flex justify-center items-center h-[70vh] mt-15">
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

      <div className="market-cap flex gap-7 justify-center">
        <div className="box1 bg-red-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3">
          <p>Market Cap </p>
          <div className="flex">
            <h2 className="text-lg font-bold">
              {currency.symbol}
              {wholeData.total_market_cap.usd.toLocaleString()}
            </h2>
          </div>
        </div>
        <div className="box2 bg-red-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3">
          <p>Volume 24h</p>
          <h2 className="text-lg font-bold">
            {currency.symbol}
            {wholeData.total_volume.usd.toLocaleString()}
          </h2>
        </div>
        <div className="box3 bg-green-950 w-[27vw] h-[15vh] text-white/70 rounded-lg p-3">
          <p>BTC Dominance</p>
          <h2 className="text-lg font-bold">
            {currency.symbol}
            {wholeData.total_market_cap.usd.toLocaleString()}
          </h2>
        </div>
      </div>
    </>
  );
};

export default CryptoList;
