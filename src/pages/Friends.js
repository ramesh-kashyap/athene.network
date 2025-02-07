import React from "react";
import { Globe, ExternalLink, Zap, Users, Send, Clipboard } from "lucide-react";
import Footer from '../components/Footer';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Friends = () => {
  return (
    <div className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center">
      {/* Friends Section */}
      <div className="w-full max-w-md bg-[#121212] p-6 rounded-lg border border-teal-500 text-center">
        <h2 className="text-xl font-bold text-white mb-4">YOUR FRIENDS</h2>
        <div className="flex items-center justify-center gap-2 text-teal-400 text-3xl font-bold">
          0 <Globe className="w-8 h-8" />
        </div>
        <div className="flex justify-center mt-4">
        
            <Link to="/referral-list" className="flex flex-col items-center "> 
          <button className="bg-teal-500 text-black px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2">
            View details <ExternalLink className="w-4 h-4" />
          </button>
          </Link>
        </div>
        <div className="flex justify-between mt-6 text-gray-400">
          <div className="flex flex-col items-center">
            <p className="text-teal-400 text-2xl font-bold">0</p>
            <p className="text-sm">Direct Referral</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-teal-400 text-2xl font-bold">0</p>
            <p className="text-sm">Indirect Referral</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 text-gray-300 text-sm">
        <Zap className="text-teal-400 w-6 h-6" />
        <p>Maximize your data network: More nodes, faster mining!</p>
      </div>


      {/* Network Expansion Section */}
      <div className="w-full max-w-md bg-[#121212] p-6 mt-6 rounded-lg border border-teal-500 text-center">
        <h2 className="text-lg font-bold text-white mb-4">Expand your network now</h2>
        <div className="p-4 rounded-lg flex justify-center items-center">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0x1A74f5d2D0209A1D9C58a70cc75d9CFC74E70fcC" alt="QR Code" className="w-32 h-32" />
        </div>
        <div className="flex justify-center items-center mt-4 gap-2">
          <p className="text-teal-400 font-bold text-lg">7644000eb230</p>
          <Clipboard className="text-teal-400 w-6 h-6 cursor-pointer" />
        </div>
        <div className="flex justify-between mt-6">
          <div className="w-1/2 p-4 bg-[#181818] rounded-lg text-center flex flex-col items-center cursor-pointer border border-teal-500">
            <Users className="text-teal-400 w-8 h-8" />
            <p className="text-white text-sm font-bold mt-2">Join the Athene Community</p>
          </div>
          <div className="w-1/2 p-4 bg-[#181818] rounded-lg text-center flex flex-col items-center cursor-pointer border border-teal-500">
            <Send className="text-teal-400 w-8 h-8" />
            <p className="text-white text-sm font-bold mt-2">Invite friends to get huge rewards</p>
          </div>
        </div>
      </div>

      <br></br>
         {/* Footer Navigation */}
         <Footer />

    </div>
  );
};

export default Friends;
