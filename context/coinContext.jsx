import { createContext, useState , useEffect} from "react";

export const CoinContext = createContext();
const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });
  const [wholeData , setWholeData] = useState();

  const fetchAllCoin = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`
      );
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setAllCoin(data);
    } catch(error) {
      console.log("Fetch Error:", error.message);
    }
  }

  const globalData = async () => {
    try {
      const response = await fetch ("https://api.coingecko.com/api/v3/global");
      
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

        const data = await response.json();
        setWholeData(data.data);
        console.log(data.data);
    } catch(error) {
      console.log("Fetch Error:", error.message);
    };
  }

  useEffect(() => {
    globalData();
  }, []);

  useEffect(() => {
    fetchAllCoin();
  }, [currency.name ]);
  
  const contextValue = {
    allCoin , currency , setCurrency , wholeData
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
