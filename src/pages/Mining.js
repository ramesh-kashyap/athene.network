import React, { useState, useEffect } from "react";
import { ToggleLeft, Gem, Heart } from "lucide-react";
import Footer from '../components/Footer';
import {useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Api from '../Api/botService';
const Mining = () => {
  const [coins, setCoins] = useState([]); // Array for floating coins
  const [balance, setBalance] = useState(0); // User balance
  const navigate = useNavigate();
  const [gemCount, setGemCount] = useState(38);
  const [dots, setDots] = useState([]);
  const handleTap = () => {
    setGemCount(gemCount + 1);
  };

  const addCoin = () => {
    const newCoin = { id: Date.now(), x: Math.random() * 200 - 150 }; // Unique ID & random position
    setCoins((prev) => [...prev, newCoin]);

    setTimeout(() => {
      setCoins((prev) => prev.filter((coin) => coin.id !== newCoin.id)); // Remove after 1s
    }, 1000);

    // Update balance
    const newBalance = balance + 1;
    // setBalance(newBalance);
    updateBalance(newBalance);   
    
  };

  const updateBalance = async (newBalance) => {
    // console.log(newBalance);
    try {
      const response = await Api.post("auth/updateBalance", { balance: newBalance });
      console.log(response.data);
      if(response.data.balance){
        setBalance(response.data.balance);
      }      
    } catch (err) {
      console.error("Error updating balance:", err);
    }
  };


  const [activeTab, setActiveTab] = useState("tap");

const tap = () => setActiveTab("tap");
const node = () => setActiveTab("node");

const maxBalance = 500;

const progressPercentage = (balance / maxBalance) * 100;


  return (
    <div
      className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center relative">
      <div className="w-full flex justify-between items-center text-white text-sm">
        <div className="flex gap-2 items-center bg-gray-800/50 px-4 py-2 rounded-lg">
          <img src="../assets/klink5.svg" alt="coin" className="w-5 h-5" />
          <span>{balance}</span>
        </div>
        <div className="flex gap-2 items-center bg-gray-800/50 px-4 py-2 rounded-lg" onClick={() => navigate("/tapairdrop")}>
        <img src="../assets/klink27.svg" alt="coin" className="w-5 h-5" onClick={() => navigate("/tapairdrop")}/>
          <span className="text-yellow-300">Bronze</span>
        </div>
        <div className="flex gap-2 items-center bg-gray-800/50 px-4 py-2 rounded-lg">
          <img src="../assets/click20.svg" alt="tasks" className="w-5 h-5" />
          <span>0</span>
        </div>
        <div className="flex gap-2 items-center bg-gray-800/50 px-4 py-2 rounded-lg">
          <img src="../assets/klink21.svg" alt="heart" className="w-5 h-5" />
          <span>0</span>
        </div>
        <div className="flex items-center">
          <img
            src="../assets/klink4.svg"
            alt="profile"
            className="w-8 h-8 rounded-full border border-purple-400"
          />
        </div>
      </div>
      <div className="text-center text-white mt-10">
        <p className="text-lg" styele={{fontSize:7}}>Tap Points</p>
        <h1 className="text-5xl font-bold flex items-center justify-center gap-2"
        >
          <img src="../assets/img/oksharp.png" alt="coin" className="w-7 h-7"/>
          {balance} 
        </h1>
      </div>      
      <div className="relative flex justify-center" style={{width:150, marginTop:40}}>
        <img
          src="../assets/img/oksharp.png"
          src="../assets/img/oksharp.png"
          alt="tap"
          className="animate-pulse cursor-pointer"  onClick={addCoin}          
        />
        <AnimatePresence>
        {coins.map((coin) => (
          <motion.div
            key={coin.id}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: -100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute text-yellow-400 text-xl font-bold"
            style={{ left: `${50 + coin.x}%`, top: "50%" }}
          >
            +1🪙
          </motion.div>
        ))}
      </AnimatePresence>
      </div>
      <div className="w-full max-w-md flex flex-col items-center text-white">
        <div className="flex justify-between w-full px-2">
          <p className="text-sm flex items-center gap-1">
            <img src="../assets/img/oksharp.png" alt="coin" className="w-5 h-5" /> {balance} / 500
          </p>
          <button className="flex items-center px-3 py-1 rounded-lg text-black text-sm gap-2 items-center">
            <img src="../assets/klink13.svg" alt="booster" className="w-5 h-5 mr-1" /> Boosters
          </button>
        </div>
        <div className="w-full bg-gray-700 h-3 rounded-lg mt-2">
          <div className="bg-yellow-400 h-3 rounded-lg "style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Mining;
