import React,{useState} from "react";
import { Globe, ExternalLink, Zap, Users, Send, Clipboard } from "lucide-react";
import Footer from '../components/Footer';
import {useNavigate} from "react-router-dom";

const Friends = () => {
  const navigate = useNavigate();
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-[#0d0d0d] text-gray-200 min-h-screen p-2 font-sans flex flex-col items-center relative">
      <div className="w-full max-w-md flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Invite Friends</h1>
        <div className="relative" onClick={() => setIsModalOpen(true)}>
          <img src="../assets/klink4.svg" alt="Invite Friend" className="text-white w-6 h-6" />
          <span className="absolute top-0 right-0  w-3 h-3 rounded-full"></span>
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-6">You and your friend will receive bonus points</p>
      
      <div className="w-full max-w-md space-y-4">
        <div className="bg-[#1C1A3A] p-2 rounded-xl flex items-center justify-between border border-gray-700">
          <div className="flex items-center gap-3">
            <img src="../assets/click20.svg" alt="Invite Friend" className="w-12 h-12" />
            <div>
              <p className="text-white font-bold">Invite a friend</p>
              <p className="text-gray-400 text-sm">+2,500 for you and your friend</p>
            </div>
          </div>
          {/* <ChevronRight className="text-gray-400 w-6 h-6" /> */}
        </div>
        <div className="bg-[#1C1A3A] p-2 rounded-xl flex items-center justify-between border border-gray-700">
          <div className="flex items-center gap-3">
            <img src="../assets/klink25.svg" alt="Invite Premium Friend" className="w-12 h-12" />
            <div>
              <p className="text-white font-bold">Invite a friend with Telegram Premium</p>
              <p className="text-gray-400 text-sm">+10,000 for you and your friend</p>
            </div>
          </div>
          {/* <ChevronRight className="text-gray-400 w-6 h-6" /> */}
        </div>
      </div>
      <div className="w-full max-w-md bg-[#2A2345] p-2 mt-4 rounded-lg border border-yellow-500 text-yellow-400 text-center font-semibold flex items-center gap-2">
        {/* <AlertTriangle className="w-6 h-6 text-yellow-400" /> */}
        <p>A referral must complete tasks to count!</p>
      </div>
      <div className="w-full max-w-md mt-6">
        <h2 className="text-xl font-bold text-white text-center">Bonus For Leveling Up</h2>
        <div className="bg-[#1C1A3A] p-2 mt-4 rounded-xl">
          <div className="grid grid-cols-3 text-gray-400 pb-2 border-b border-gray-700 text-center">
            <p>Level</p>
            <p>For Friend</p>
            <p>Premium Friend</p>
          </div>
          <div className="grid grid-cols-3 items-center text-white text-center py-3 border-b border-gray-700">
            <div className="flex items-center justify-center gap-2">
              <img src="../assets/klnik26.svg" alt="Bronze" className="w-6 h-6" /> 
              <p>Bronze</p>
            </div>
            <p className="text-blue-400">+2,500</p>
            <p className="text-purple-400">+10,000</p>
          </div>
          <div className="grid grid-cols-3 items-center text-white text-center py-3">
            <div className="flex items-center justify-center gap-2">
              <img src="../assets/klink27.svg" alt="Silver" className="w-6 h-6" /> 
              <p>Silver</p>
            </div>
            <p className="text-blue-400">+5,000</p>
            <p className="text-purple-400">+25,000</p>
          </div>
        </div>
      </div>
      <button className="w-full max-w-md bg-[#7D5FFF] p-2 rounded-lg text-white font-bold text-lg mt-6 shadow-lg flex items-center justify-center gap-3">
        Invite a friend
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md text-center relative">
            <button className="absolute top-4 right-4 text-gray-400 text-xl" onClick={() => setIsModalOpen(false)}>
              ✕
            </button>
            <div className="flex justify-center mb-4">
              <img src="../assets/klink36.svg" alt="Account Connected" className="w-24 h-24" />
            </div>
            <h2 className="text-2xl font-bold">Connected Klink Wallet</h2>
            <p className="text-gray-400 mt-2">Signup and connect your Klink Wallet to start redeeming rewards directly to your account.</p>
            <button
              className="w-full bg-purple-600 text-white text-lg font-bold py-3 rounded-lg mt-6 shadow-lg"
              onClick={() => navigate('/signup')}
            >
              Signup to AiCoinX
            </button>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Friends;
