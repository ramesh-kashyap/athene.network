import React, { useState, useEffect } from "react";
import { ToggleLeft, Gem, Heart } from "lucide-react";
import Footer from '../components/Footer';


const Mining = () => {
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
    <div className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center">
      {/* Tabs Section */}
          {/* Background Blinking Dots */}
          {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-white opacity-50 animate-blink"
          style={{ left: dot.left, top: dot.top, animationDelay: dot.animationDelay }}
        ></div>
      ))}

      <div className="flex w-full max-w-md justify-between bg-[#121212] p-2 rounded-lg border border-gray-700">
        <div className={`px-6 py-3 rounded-lg font-bold flex-1 text-center cursor-pointer ${
    activeTab === "tap" ? "bg-teal-500 text-black" : "text-gray-400"
  }`} 
  onClick={tap}>TAP</div>
        <div className={`px-6 py-3 rounded-lg font-bold flex-1 text-center cursor-pointer ${
    activeTab === "node" ? "bg-teal-500 text-black" : "text-gray-400"
  }`} 
  onClick={node}>YOUR NODE</div>
      </div>
      
      {/* GEM Earnings Section */}
      <div className="bg-[#181818] p-6 mt-6 rounded-xl border border-teal-500 w-full max-w-md text-center" style={{background: "#000"}}>
        <p className="text-gray-400 text-sm">Total GEM earned from TAP</p>
        <div className="flex items-center justify-center mt-2 gap-2">
        <img className="text-gray-300 cursor-pointer" src="../assets/img/gem.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
          {/* <ToggleLeft className="text-teal-400 w-8 h-8" /> */}
          {/* <Gem className="text-teal-400 w-8 h-8" /> */}
        </div>
      </div>

      {/* Gem Count Display */}
      <div className="flex items-center gap-2 text-yellow-400 text-3xl font-bold mt-6">
        <Heart className="w-10 h-10" />
        <p>{gemCount}</p>
      </div>

      {/* Tap Button */}
      <div className="mt-6 relative" onClick={handleTap}>
        <div className="bg-gradient-to-r from-teal-400 to-green-500 p-3 rounded-full flex items-center justify-center w-64 h-64 cursor-pointer shadow-lg shadow-teal-500/50 border-4 border-teal-500">
          <img src="/tap-icon.png" alt="Tap" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>

      {/* Level & Conversion Rate Section */}
      <div className="flex justify-between w-full max-w-md mt-6 p-4 border border-teal-500 rounded-lg text-center" style={{background: "#000"}}>
        <div className="flex-1 border-r border-teal-500 p-4">
          <p className="text-gray-400 text-sm">Level</p>
          <p className="text-teal-300 text-3xl font-bold">29</p>
        </div>
        <div className="flex-1 p-4">
          <p className="text-gray-400 text-sm">Conversion Rate</p>
          <p className="text-teal-300 text-lg font-bold flex items-center justify-center">
            1 <span className="text-yellow-400 mx-1">&#11088;</span> ≈ 1.62 
            <img className="text-gray-300 cursor-pointer" src="../assets/img/gem.png" alt="setting" style={{height:'30px', width: 'auto',}}/>
            {/* <Gem className="w-5 h-5 text-teal-400 ml-1" /> */}
          </p>
        </div>
      </div>

      {/* Convert Button */}
      <div className="bg-[#181818] p-4 mt-4 rounded-lg w-full max-w-md text-center text-gray-500 font-bold text-lg cursor-not-allowed">
        Convert EC And Get GEM
      </div>
    <br></br>
    <br></br>
         {/* Footer Navigation */}
         <Footer />

    </div>
  );
};

export default Mining;
