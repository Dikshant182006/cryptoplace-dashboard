import React from "react";
import rightArrow from "../../src/assets/rightArrow.svg";
import tick from "../../src/assets/tick.svg";

const Tracker = () => {
  const handleBinance = () => {
    const link = "https://www.binance.com/";
    window.open(link);
  };

  const handleMetaTask = () => {
    const link = "https://metamask.io/";
    window.open(link);
  };

  const handleOkxWallet = () => {
    const link = "https://web3.okx.com/";
    window.open(link);
  };

  return (
    <div className="mt-40 h-[150%]">
      <div className="flex flex-col items-center gap-10">
        <div className="flex">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Your All-in-{" "}
          </h2>
          <h2 className="text-5xl font-bold">One Crypto Portfolio Dashboard</h2>
        </div>
        <p className="text-center text-2xl text-white/50">
          Track prices, monitor performance, and explore the crypto market{" "}
          <br /> from a single dashboard.
        </p>
      </div>

      <div className="boxes flex justify-center gap-10 m-5">
        <div
          onClick={handleBinance}
          className="box1 h-[30vh] bg-gradient-to-b from-[#1e2026] to-[#121318] w-[10vw] rounded-lg flex flex-col justify-center items-center pb-5 gap-3 cursor-pointer"
        >
          <img
            src="https://coinstats.app/_next/image/?url=https%3A%2F%2Fstatic.coinstats.app%2Fportfolio_images%2Fbinance_light.png&w=256&q=75"
            alt="BinanceImg"
            className="w-[5vw]"
          />
          <p className="text-white/60 text-sm">Binance</p>
          <div className="flex">
            <p className="font-bold">Open</p>
            <img src={rightArrow} alt="rightArrow" className="invert" />
          </div>
        </div>
        <div
          onClick={handleMetaTask}
          className="box2 h-[30vh] bg-gradient-to-b from-[#1e2026] to-[#121318] w-[10vw] rounded-lg cursor-pointer flex flex-col justify-center items-center pb-5 gap-3"
        >
          <img
            src="https://coinstats.app/_next/image/?url=https%3A%2F%2Fstatic.coinstats.app%2Fportfolio_images%2Fmetamask_light.png&w=256&q=75"
            alt="MetaTaskImg"
            className="w-[5vw]"
          />
          <p className="text-white/60 text-sm">MetaMask</p>
          <div className="flex">
            <p className="font-bold">Open</p>
            <img src={rightArrow} alt="rightArrow" className="invert" />
          </div>
        </div>

        <div
          onClick={handleOkxWallet}
          className="box3 h-[30vh] bg-gradient-to-b from-[#1e2026] to-[#121318] w-[10vw] rounded-lg cursor-pointer flex flex-col justify-center items-center pb-5 gap-3"
        >
          <img
            src="https://coinstats.app/_next/image/?url=https%3A%2F%2Fstatic.coinstats.app%2Fportfolio_images%2Fokx_light.png&w=256&q=75"
            alt="OkxWalletImg"
            className="w-[5vw] rounded-xl"
          />
          <p className="text-white/60 text-sm">OKW Wallet</p>
          <div className="flex">
            <p className="font-bold">Open</p>
            <img src={rightArrow} alt="rightArrow" className="invert" />
          </div>
        </div>
      </div>

      <div className="flex my-40 mx-4 gap-29">
        <div className="w-[40vw] flex flex-col gap-5 ">
          <h2 className="text-4xl font-bold">
            What's a crypto portfolio tracker?
          </h2>
          <p className="text-white/60">
            A crypto portfolio tracker is a tool that syncs with your wallets,
            exchanges, and blockchains to monitor all of your cryptocurrency
            investments.
          </p>
          <p className="text-white/60">
            Crypto portfolio trackers provide real-time updates on the current
            crypto prices, market caps, and other relevant data about
            cryptocurrencies.
          </p>
          <p className="text-white/60">
            Some crypto trackers also offer features such as price alerts,
            portfolio management, and analysis tools that help crypto investors
            make informed decisions.
          </p>
          <p className="text-white/60">
            Many crypto trackers allow users to monitor multiple exchanges
            simultaneously, providing a comprehensive overview of the
            cryptocurrency market.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">
            What to look for in a good portfolio tracker?
          </h2>
          <div className="first flex mt-5 gap-2">
            <img src={tick} alt="tickImg" className="invert bg-blue-900 rounded-2xl"/>
            <p>Real-time updates</p>
          </div>
          <div className="first flex mt-3 gap-2">
            <img src={tick} alt="tickImg" className="invert bg-blue-900 rounded-2xl"/>
            <p>Portfolio management</p>
            </div>
            <div className="first flex mt-3 gap-2" >
            <img src={tick} alt="tickImg" className="invert bg-blue-900 rounded-2xl"/>
            <p>Profit & loss tracking</p>
            </div>
            <div className="first flex mt-3 gap-2">
            <img src={tick} alt="tickImg" className="invert bg-blue-900 rounded-2xl"/>
            <p>Security & privacy</p>
            </div>
            <div className="first flex mt-3 gap-2">
            <img src={tick} alt="tickImg" className="invert bg-blue-900 rounded-2xl"/>
            <p>Simple user interface</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
