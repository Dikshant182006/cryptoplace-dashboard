import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/coinContext";

const coin = () => {
  const { coinId } = useParams();

  const [coinDetails, setCoinDetails] = useState();
  const { currency } = useContext(CoinContext);
  const [historicalData, setHistoricalData] = useState()

  const displayCoinDetail = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
      );

      if (!response.ok) {
        throw new Error(`HTTPS error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCoinDetails(data);
    } catch (error) {
      console.log("Fetch error:", error.message);
    }
  };

  const displayhistoricalData = async () => {
    try {
      const response = await fetch (`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`
      )

      if(response.ok) {
        throw new Error(`HTTPS error! Status: ${response.status}`);

        const data = await response.json();
        setHistoricalData(data);  
      }
    } catch(error){
      console.log("Fetch error:", error.message)
    }
}

  useEffect(() => {
    displayCoinDetail();
  }, [currency.name, coinId]);

  if (coinDetails && historicalData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinDetails.image.large} alt="" />
          <p className="font-bold">
            {coinDetails.name} ({coinDetails.symbol.toUpperCase()})
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner flex justify-center items-center h-[77vh]">
        <div className="spin border-2 p-5 rounded-3xl mr-5"></div>
      </div>
    );
  }
};

export default coin;
