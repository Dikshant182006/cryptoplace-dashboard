import React, { useState } from "react";
import { Link } from "react-router-dom";
import plus from "../../src/assets/plus.svg";

const HelpCenter = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index? null: index)
  }

  const faqData = [
    {
      question: "What is CryptoPlace?",
      answer :
        "CryptoPlace is a crypto tracking platform that helps users explore live cryptocurrency prices, market trends, and key coin data in one place.",
    }, 
    {
      question: "How can I track crypto prices?",
      answer:
        "You can search for any cryptocurrency and view real-time prices, market cap, and trends directly on the platform.",
    },
    {
      question: "How often is data updated?",
      answer:
        "Data is updated in real-time using CoinGecko API to provide accurate and latest information.",
    },
    {
      question: "What features does this platform offer?",
      answer:
        "Search coins, view market data, explore details, and use AI tools for better insights.",
    },
    {
      question: "Can I connect my wallet?",
      answer:
        "Currently, wallet connection is not supported. You can explore and track data only.",
    },
  ]

  return (
    <div className="h-screen m-25">
      <div className="flex justify-between">
        <div>
          <h2 className="text-4xl leading-11 font-bold">
            Get the Answers to All Your <br /> Questions
          </h2>
          <p className="text-white/60 mt-5">
            Have questions about features or how to use the platform? <br />
            We’ve got you covered!
          </p>
        </div>

        <div>
           {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className="border-b cursor-pointer w-[40vw] py-3"
            >
              <div className="flex justify-between items-center">
                <span className={active === index? "text-white text-xl" : "text-white/60 text-xl"} >
                  {item.question}
                </span>
                <img
                  src={plus}
                  alt="plus"
                  className={`invert w-[1.5vw] transition ${
                    active === index ? "rotate-45" : ""
                  }`}
                />
              </div>

                {active === index && (
                <p className="text-white/60 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
