import React, { useState, useEffect } from "react";
import { Settings, Bell, Gift, Star, Zap, Network, Flame, Trophy,BarChart,Users,Globe ,Crown,Diamond,Banknote} from "lucide-react";
import Footer from '../components/Footer';

const Home = () => {


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
    <div className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center" >
      {/* User Profile */}

       {/* Background Blinking Dots */}
       {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-white opacity-50 animate-blink"
          style={{ left: dot.left, top: dot.top, animationDelay: dot.animationDelay }}
        ></div>
      ))}


      <div className="flex items-center justify-between w-full max-w-md p-4">
        <div className="flex items-center gap-3">
          <div className="bg-teal-400 w-12 h-12 rounded-full flex items-center justify-center text-black text-lg font-bold">R</div>
          <div>
            <h2 className="text-xl font-bold text-white">Ramesh</h2>
            <p className="text-sm text-teal-300">Level 29</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Settings className="text-gray-300 cursor-pointer" />
          <Bell className="text-gray-300 cursor-pointer" />
          <Gift className="text-teal-300 cursor-pointer" />
        </div>
      </div>
      
      {/* Giveaway Banner */}
      <div className="w-full max-w-md bg-gradient-to-r from-red-700 to-black p-4 rounded-xl text-center my-4 border border-teal-400">
        <h2 className="text-lg font-bold text-gray-100">10,000 ATH GIVEAWAY</h2>
        <p className="text-sm text-gray-300">Follow us on <span className="text-red-400">YouTube</span></p>
      </div>
      
      {/* Streak and Reward */}
      <div className="w-full max-w-md bg-gray-800 p-4 rounded-xl flex justify-between items-center my-4 border border-teal-400">
        <div className="flex items-center gap-2">
          <Star className="text-teal-300" />
          <div>
            <p className="text-sm text-gray-300">Streak</p>
            <p className="text-lg font-bold text-white">0</p>
          </div>
        </div>
        <button className="bg-teal-500 px-6 py-2 rounded-lg text-black font-bold">Receive 100</button>
      </div>
      
      {/* Quests Section */}
      <div className="w-full max-w-md bg-gray-800 p-4 rounded-xl flex justify-between items-center my-4 border border-teal-400">
        <p className="text-sm text-gray-300">Complete quests to earn more gems</p>
        <button className="bg-teal-500 px-6 py-2 rounded-lg text-black font-bold">Quest</button>
      </div>
      
      {/* Mining Section */}
      <div className="w-full max-w-md bg-gray-900 p-4 rounded-xl mt-4 border border-teal-400">
        <h3 className="text-lg font-bold text-teal-300">MINING</h3>
        <div className="grid grid-cols-4 gap-4 mt-4 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Zap className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">TAP</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Network className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">Node</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Flame className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">Boost</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Trophy className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">Leaderboard</p>
          </div>
        </div>
      </div>
      {/* Community Section */}
      <div className="w-full max-w-md bg-gray-900 p-4 rounded-xl mt-4 border border-teal-400">
        <h3 className="text-lg font-bold text-teal-300">COMMUNITY</h3>
        <div className="grid grid-cols-4 gap-4 mt-4 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <BarChart className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">Statistic</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Users className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">Friend</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Star className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">Vote</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Globe className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">Telegram</p>
          </div>
        </div>
      </div>

       
      {/* Premium Privileges Section */}
      <div className="w-full max-w-md bg-gray-900 p-4 rounded-xl mt-4 border border-teal-400">
        <h3 className="text-lg font-bold text-teal-300">PREMIUM PRIVILEGES</h3>
        <div className="grid grid-cols-4 gap-4 mt-4 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Crown className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">Premium</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Diamond className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">PPick</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Users className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">Referral</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 p-4 rounded-full flex items-center justify-center">
              <Banknote className="text-white w-8 h-8" />
            </div>
            <p className="text-sm mt-1 font-semibold text-gray-300">Revenue</p>
          </div>
        </div>
      </div>
      
       <br></br>
       <br></br>
         {/* Footer Navigation */}
         <Footer />

        
    </div>
  );
};

export default Home;
