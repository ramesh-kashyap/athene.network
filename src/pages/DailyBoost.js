import React, { useState } from "react";
import Footer from '../components/Footer';
const dailyRewards = [
  { day: 1, amount: 4000 , multiplier: "x" },
  { day: 2, amount: 8000 , multiplier: "x2" },
  { day: 3, amount: 12000 , multiplier: "x2" },
  { day: 4, amount: 15000 , multiplier: "x2" },
  { day: 5, amount: 20000 , multiplier: "x2" },
  { day: 6, amount: 25000 , multiplier: "x2" },
  { day: 7, amount: 30000, multiplier: "x2" },
  { day: 8, amount: 40000 , multiplier: "x2" },
  { day: 9, amount: 50000 , multiplier: "x2" },
  { day: 10, amount: 60000 , multiplier: "x2" },
  { day: 11, amount: 70000 , multiplier: "x2" },
  { day: 12, amount: 80000 , multiplier: "x2" },
  { day: 13, amount: 90000 , multiplier: "x2" },
  { day: 14, amount: 100000, multiplier: "x3" },
  { day: 15, amount: 120000 },
  { day: 16, amount: 140000 , multiplier: "x2" }
];

const DailyBoost = () => {
  const [activeTab, setActiveTab] = useState("dailyBoost");

  return (
    <div
      className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center relative"
      style={{
        background:
          "linear-gradient(180deg, rgba(27, 20, 55, 1) 0%, rgba(14, 10, 32, 1) 100%)",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-md flex justify-between bg-gray-900 rounded-full p-2 text-lg font-semibold">
        <button
          className={`w-1/2 text-center py-2 rounded-full ${
            activeTab === "mining" ? "bg-gray-800 text-gray-400" : "bg-purple-600 text-white"
          }`}
          onClick={() => setActiveTab("mining")}
        >
          Mining
        </button>
        <button
          className={`w-1/2 text-center py-2 rounded-full ${
            activeTab === "dailyBoost" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400"
          }`}
          onClick={() => setActiveTab("dailyBoost")}
        >
          Daily Boost
        </button>
      </div>
      <div className="text-center mt-6 font-semibold">
        <h1 className="text-2xl">Check in daily to claim points and boost your mining rewards!</h1>
      </div>

      <div className="w-full max-w-md bg-gray-800 rounded-lg p-3 flex justify-between items-center mt-6 border border-yellow-500 shadow-lg">
        <div className="flex items-center gap-2">
          <img src="/images/klink-logo.png" alt="klink" className="w-10 h-10" />
          <span className="text-lg font-semibold">Connect your Klink Account</span>
        </div>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold shadow-md">CONNECT</button>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {dailyRewards.map(({ day, amount, multiplier }) => (
          <div
            key={day}
            className={`bg-gray-900 p-4 rounded-lg text-center border relative flex flex-col items-center justify-center shadow-md ${
              multiplier ? "border-yellow-500" : "border-gray-700"
            }`}
          >
            <p className="text-sm text-gray-300 font-semibold">Day {day}</p>
            <img src="/images/klink-icon.png" alt="klink" className="w-6 h-6 my-2" />
            <p className="text-yellow-500 font-semibold text-lg">{amount.toLocaleString()}</p>
            {multiplier && (
              <span className="absolute -top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                {multiplier}
              </span>
            )}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default DailyBoost;
