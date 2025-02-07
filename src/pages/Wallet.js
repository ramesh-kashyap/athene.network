import React, { useState, useEffect } from "react";
import { Upload, Download, History, Globe, Send, Wallet, Gift } from "lucide-react";
import Footer from '../components/Footer';
import { BrowserRouter as Router, Link } from "react-router-dom";

const WalletUI = () => {
  
  const [dots, setDots] = useState([]);
  
  useEffect(() => {
    const generateDots = () => {
      const newDots = Array.from({ length: 10 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
      }));
      setDots(newDots);
    };
    generateDots();
    const interval = setInterval(generateDots, 5000);
    return () => clearInterval(interval);
  }, []);
  


  return (
    <div className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center">
      {/* Wallet Header */}
        {/* Background Blinking Dots */}
        {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-white opacity-50 animate-blink"
          style={{ left: dot.left, top: dot.top, animationDelay: dot.animationDelay }}
        ></div>
      ))}



      <h1 className="text-3xl font-bold text-white mb-6 tracking-widest">WALLET</h1>
      
      {/* ATH Halving Countdown */}
      <div className="w-full max-w-md bg-[#121212] p-6 rounded-lg border border-teal-500 text-center shadow-md" style={{ backgroundImage: "radial-gradient(#000 5%, #7660FF 5%,  #000 30%)" }}>
        <h2 className="text-sm text-gray-300 mb-4">ATH halving countdown</h2>
        <div className="flex justify-center gap-6 mt-2 text-teal-400">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold bg-[#181818] rounded-full p-3">119</div>
            <p className="text-xs mt-2">Days</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold bg-[#181818] rounded-full p-3">8</div>
            <p className="text-xs mt-2">Hours</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold bg-[#181818] rounded-full p-3">14</div>
            <p className="text-xs mt-2">Minutes</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold bg-[#181818] rounded-full p-3">52</div>
            <p className="text-xs mt-2">Seconds</p>
          </div>
        </div>
      </div>
      
      {/* Wallet Actions */}
      <div className="grid grid-cols-3 gap-6 mt-8 text-center">
        <div className="flex flex-col items-center">
        <img className="text-gray-300 cursor-pointer" src="../assets/img/send.png" alt="setting" style={{height:'40px', width: 'auto',}}/>

          {/* <div className="bg-teal-500 p-5 rounded-full shadow-md">
            <Upload className="text-white w-8 h-8" />
          </div> */}
          <p className="text-sm mt-2 font-semibold text-gray-300">Send</p>
        </div>
        <div className="flex flex-col items-center">
        <img className="text-gray-300 cursor-pointer" src="../assets/img/recived.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
          {/* <div className="bg-teal-500 p-5 rounded-full shadow-md">
            <Download className="text-white w-8 h-8" />
          </div> */}
          <p className="text-sm mt-2 font-semibold text-gray-300">Receive</p>
        </div>
        <div className="flex flex-col items-center">
        <Link to="/history" className="flex flex-col items-center "> 
        <img className="text-gray-300 cursor-pointer" src="../assets/img/history.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
          {/* <div className="bg-teal-500 p-5 rounded-full shadow-md">
            <History className="text-white w-8 h-8" />
          </div> */}
          <p className="text-sm mt-2 font-semibold text-gray-300">History</p>
          </Link>
        </div>
        <div className="flex flex-col items-center">
        <img className="text-gray-300 cursor-pointer" src="../assets/img/deposit.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
          {/* <div className="bg-teal-500 p-5 rounded-full shadow-md">
            <Globe className="text-white w-8 h-8" />
          </div> */}
          <p className="text-sm mt-2 font-semibold text-gray-300">Deposit</p>
        </div>
        <div className="flex flex-col items-center">
            <Link to="/withdraw" className="flex flex-col items-center ">
            <img className="text-gray-300 cursor-pointer" src="../assets/img/withdraw.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
          {/* <div className="bg-teal-500 p-5 rounded-full shadow-md">
            <Wallet className="text-white w-8 h-8" />
          </div> */}
          <p className="text-sm mt-2 font-semibold text-gray-300">Withdraw</p>
          </Link>
        </div>
        <div className="flex flex-col items-center">
        <img className="text-gray-300 cursor-pointer" src="../assets/img/gifts.png" alt="setting" style={{height:'40px', width: 'auto',}}/>
          {/* <div className="bg-teal-500 p-5 rounded-full shadow-md">
            <Gift className="text-white w-8 h-8" />
          </div> */}
          <p className="text-sm mt-2 font-semibold text-gray-300">Airdrop</p>
        </div>
      </div>
      
      {/* Balance Section */}
      <div className="w-full max-w-md bg-[#181818] p-6 mt-8 rounded-lg border border-teal-500 text-center shadow-md" style={{ backgroundImage: "radial-gradient(#000 5%, #7660FF 5%,  #000 30%)" }}>
        <h2 className="text-lg font-bold text-white tracking-wide">BALANCE</h2>
        <div className="flex flex-col gap-4 mt-4 text-left">
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <div className="flex items-center gap-2">
              <img src="/icons/ath.png" alt="ATH" className="w-6 h-6 rounded-full" />
              <p className="text-white font-semibold">ATH</p>
            </div>
            <p className="text-yellow-400 font-bold">0</p>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <div className="flex items-center gap-2">
              <img src="/icons/doge.png" alt="DOGE" className="w-6 h-6 rounded-full" />
              <p className="text-white font-semibold">DOGE</p>
            </div>
            <p className="text-yellow-400 font-bold">0</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/icons/gem.png" alt="GEM" className="w-6 h-6 rounded-full" />
              <p className="text-white font-semibold">GEM</p>
            </div>
            <p className="text-yellow-400 font-bold">5,000,100</p>
          </div>
        </div>
      </div>
      <br></br>
         {/* Footer Navigation */}
         <Footer />

    </div>
  );
};

export default WalletUI;
