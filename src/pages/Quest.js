import React from "react";
import { ChevronRight, CheckCircle, Zap, Gift,Star, Gem as GemIcon } from "lucide-react";
import Footer from '../components/Footer';

const Quest = () => {
  return (
    <div className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center">
      {/* Quest Header */}
      <h1 className="text-2xl font-bold text-white mb-4">QUEST</h1>
      
      {/* Sponsored Section */}
      <div className="w-full max-w-md bg-[#121212] p-4 rounded-lg border border-teal-500 flex items-center justify-between">
        <div>
          <p className="text-teal-400 font-bold text-sm">COMPLETE SPONSORED QUESTS FOR UNLIMITED REWARDS</p>
        </div>
        <button className="bg-teal-500 text-black px-4 py-2 rounded-lg font-bold">Go <ChevronRight className="inline w-4 h-4" /></button>
      </div>
      
      {/* Daily Quest Section */}
      <div className="w-full max-w-md mt-6">
        <div className="flex justify-between items-center text-teal-400 font-bold border-b border-teal-500 pb-2">
          <p>DAILY QUEST</p>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <CheckCircle className="w-4 h-4 text-teal-400" /> 0/1
          </div>
        </div>
        <div className="bg-[#181818] p-4 mt-2 rounded-lg border border-teal-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-teal-400 w-6 h-6" />
            <div>
              <p className="text-white font-bold">Daily check-in</p>
              <p className="text-teal-300 text-sm">• Claimable</p>
            </div>
          </div>
          <p className="text-yellow-400 font-bold">+20,000 <GemIcon className="inline w-4 h-4" /></p>
          <Gift className="text-gray-400 w-6 h-6" />
        </div>
      </div>

      {/* Event Quest Section */}
      <div className="w-full max-w-md mt-6">
        <div className="flex justify-between items-center text-teal-400 font-bold border-b border-teal-500 pb-2">
          <p>EVENT QUEST</p>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <CheckCircle className="w-4 h-4 text-teal-400" /> 0/3
          </div>
        </div>
        <div className="bg-[#181818] p-4 mt-2 rounded-lg border border-teal-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="text-yellow-400 w-6 h-6" />
            <div>
              <p className="text-white font-bold">Follow us on X</p>
              <p className="text-teal-300 text-sm">• New</p>
            </div>
          </div>
          <p className="text-yellow-400 font-bold">+1,000,000 <GemIcon className="inline w-4 h-4" /></p>
        </div>

        <div className="bg-[#181818] p-4 mt-2 rounded-lg border border-teal-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="text-yellow-400 w-6 h-6" />
            <div>
              <p className="text-white font-bold">Join the Telegram channel</p>
              <p className="text-teal-300 text-sm">• New</p>
            </div>
          </div>
          <p className="text-yellow-400 font-bold">+500,000 <GemIcon className="inline w-4 h-4" /></p>
        </div>
      </div>

        {/* Achievement Quest Section */}
        <div className="w-full max-w-md mt-6">
        <div className="flex justify-between items-center text-teal-400 font-bold border-b border-teal-500 pb-2">
          <p>ACHIEVEMENT QUEST</p>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <CheckCircle className="w-4 h-4 text-teal-400" /> 0/6
          </div>
        </div>
        {[
          { title: "Direct introduction", reward: "+25% Booster" },
          { title: "Indirect introduction", reward: "+15% Booster" },
          { title: "Milestone task", reward: "+10% Booster" },
          { title: "Top 1000 miners of the month", reward: "+30 TICKET" },
          { title: "KYC task", reward: "+500,000" },
        ].map((quest, index) => (
          <div key={index} className="bg-[#181818] p-4 mt-2 rounded-lg border border-teal-500 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Star className="text-yellow-400 w-6 h-6" />
              <div>
                <p className="text-white font-bold">{quest.title}</p>
                <p className="text-red-400 text-sm">• Verifying</p>
              </div>
            </div>
            <p className="text-yellow-400 font-bold">{quest.reward}</p>
            <ChevronRight className="text-gray-400 w-6 h-6" />
          </div>
        ))}
      </div>


      <br></br>
      <br></br>
         {/* Footer Navigation */}
         <Footer />
    </div>
  );
};

export default Quest;
