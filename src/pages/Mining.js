import React, { useState, useEffect } from "react";
import { ToggleLeft, Gem, Heart } from "lucide-react";
import Footer from '../components/Footer';
import {useNavigate } from "react-router-dom";

const Mining = () => {
   const navigate = useNavigate();
  const [gemCount, setGemCount] = useState(38);
const [dots, setDots] = useState([]);
  const handleTap = () => {
    setGemCount(gemCount + 1);
  };

  // useEffect(() => {
  //   const generateDots = () => {
  //     const newDots = Array.from({ length: 10 }).map(() => ({
  //       left: `${Math.random() * 100}%`,
  //       top: `${Math.random() * 100}%`,
  //       animationDelay: `${Math.random() * 5}s`,
  //     }));
  //     setDots(newDots);
  //   };
  //   generateDots();
  //   const interval = setInterval(generateDots, 5000);
  //   return () => clearInterval(interval);
  // }, []);
  const [activeTab, setActiveTab] = useState("tap");

const tap = () => setActiveTab("tap");
const node = () => setActiveTab("node");
  


  return (
    <div
      className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center relative">
      <div className="w-full flex justify-between items-center text-white text-sm">
        <div className="flex gap-2 items-center bg-gray-800/50 px-4 py-2 rounded-lg">
          <img src="../assets/klink5.svg" alt="coin" className="w-5 h-5" />
          <span>1,087</span>
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
          <img src="../assets/img/oksharp.png" alt="coin" className="w-8 h-8" />
          1,087
        </h1>
      </div>
      <div className="relative flex justify-center" style={{width:200}}>
        <img
          src="../assets/img/oksharp.png"
          alt="tap"
          className="animate-pulse cursor-pointer"
        />
      </div>
      <div className="w-full max-w-md flex flex-col items-center text-white">
        <div className="flex justify-between w-full px-2">
          <p className="text-sm flex items-center gap-1">
            <img src="../assets/img/oksharp.png" alt="coin" className="w-5 h-5" /> 500 / 500
          </p>
          <button className="flex items-center px-3 py-1 rounded-lg text-black text-sm gap-2 items-center">
            <img src="../assets/klink13.svg" alt="booster" className="w-5 h-5 mr-1" /> Boosters
          </button>
        </div>
        <div className="w-full bg-gray-700 h-3 rounded-lg mt-2">
          <div className="bg-yellow-400 h-3 rounded-lg w-full"></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Mining;
