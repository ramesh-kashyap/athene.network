import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const ReferralList = () => {
  const [activeTab, setActiveTab] = useState("direct");

  return (
    <div className="bg-[#0d0d0d] text-gray-200 min-h-screen p-4 font-sans flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-md flex items-center py-4 relative">
          <Link to="/friends" className="flex flex-col items-center "> 
        <button className="bg-[#121212] p-3 rounded-lg bg-teal-500">
          <ArrowLeft className="text-teal-400 w-6 h-6" />
        </button>
    </Link>
        <h1 className="text-3xl font-bold text-white tracking-widest text-center flex-1">LIST</h1>
      </div>
      
      {/* Referral Tabs */}
      <div className="w-full max-w-md flex justify-between border-b border-teal-400 pb-2">
        <button
          className={`text-center w-1/2 pb-2 ${activeTab === "direct" ? "border-b-2 border-teal-400 text-teal-400" : "text-gray-400"}`}
          onClick={() => setActiveTab("direct")}
        >
          <p className="font-semibold">Direct Referral</p>
          <p className="text-lg">( 1 )</p>
        </button>
        <button
          className={`text-center w-1/2 pb-2 ${activeTab === "indirect" ? "border-b-2 border-teal-400 text-teal-400" : "text-gray-400"}`}
          onClick={() => setActiveTab("indirect")}
        >
          <p className="font-semibold">Indirect Referral</p>
          <p className="text-lg">( 0 )</p>
        </button>
      </div>
      
      {/* Referral List */}
      <div className="w-full max-w-md mt-4 text-gray-300 text-lg text-left">
        {activeTab === "direct" ? (
          <p>devinmega@telegram.org</p>
        ) : (
          <p className="text-gray-500 text-center">No indirect referrals</p>
        )}
      </div>
    </div>
  );
};

export default ReferralList;
